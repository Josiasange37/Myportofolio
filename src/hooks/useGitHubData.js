import { useState, useEffect, useCallback } from 'react'

export const useGitHubData = (username = 'torvalds') => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        const CACHE_KEY = `github_data_${username}`
        const cached = window.__GITHUB_CACHE__?.[CACHE_KEY]
        const now = Date.now()

        if (cached && (now - cached.timestamp < 300000)) { // 5 minutes
            setData(cached.data)
            setLoading(false)
            return
        }

        setLoading(true)
        setError(null)

        try {
            const headers = {
                'Accept': 'application/vnd.github.v3+json',
            }

            // Add GitHub token if available (increases rate limit from 60 to 5000 requests/hour)
            const token = import.meta.env.VITE_GITHUB_TOKEN
            if (token) {
                headers['Authorization'] = `Bearer ${token}`
            }

            // Fetch user data and repos
            const [userRes, reposRes] = await Promise.all([
                fetch(`https://api.github.com/users/${username}`, { headers }),
                fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers })
            ])

            if (!userRes.ok) throw new Error('User not found')
            if (!reposRes.ok) throw new Error('Failed to fetch repos')

            const userData = await userRes.json()
            const reposData = await reposRes.json()

            // Fetch commit activity for the last 12 months
            const commitActivity = await fetchCommitActivity(username, reposData, headers)

            // Calculate stats
            const languages = {}
            let totalStars = 0
            let totalForks = 0

            reposData.forEach(repo => {
                if (repo.language) {
                    languages[repo.language] = (languages[repo.language] || 0) + 1
                }
                totalStars += repo.stargazers_count
                totalForks += repo.forks_count
            })

            // Format data
            const processedData = {
                user: {
                    name: userData.name || username,
                    avatar: userData.avatar_url,
                    bio: userData.bio,
                    followers: userData.followers,
                    following: userData.following,
                    public_repos: userData.public_repos,
                    html_url: userData.html_url
                },
                languages: Object.entries(languages)
                    .sort(([, a], [, b]) => b - a)
                    .map(([name, count]) => ({ name, count, percentage: (count / reposData.length) * 100 })),
                repos: reposData.slice(0, 10), // Top 10 recent
                stats: {
                    totalStars,
                    totalForks,
                    totalRepos: reposData.length
                },
                commitActivity // Add commit activity data
            }

            // Cache data
            if (!window.__GITHUB_CACHE__) window.__GITHUB_CACHE__ = {}
            window.__GITHUB_CACHE__[CACHE_KEY] = {
                data: processedData,
                timestamp: now
            }

            setData(processedData)
        } catch (err) {
            console.error(err)
            setError(err.message)

            // Fallback Data for Demo/Offline consistency
            setData({
                user: {
                    name: 'Josias (Offline)',
                    avatar: '',
                    bio: 'Full Stack Developer',
                    followers: 150,
                    following: 89,
                    public_repos: 47,
                    html_url: '#'
                },
                languages: [
                    { name: 'JavaScript', percentage: 40 },
                    { name: 'TypeScript', percentage: 30 },
                    { name: 'Python', percentage: 20 },
                    { name: 'Rust', percentage: 10 }
                ],
                repos: Array(6).fill(null).map((_, i) => ({
                    id: i + 1,
                    name: `Project-${['Alpha', 'Beta', 'Gamma', 'Delta', 'Omega', 'Zeta'][i]}`,
                    description: 'A futuristic cybersecurity tool implementation.',
                    stargazers_count: 120 + i * 10,
                    forks_count: 40 + i * 2,
                    html_url: '#'
                })),
                stats: {
                    totalStars: 500,
                    totalForks: 100,
                    totalRepos: 50
                },
                commitActivity: generateFallbackCommitActivity()
            })
        } finally {
            setLoading(false)
        }
    }, [username])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return { data, loading, error, refetch: fetchData }
}

// Helper function to fetch commit activity
async function fetchCommitActivity(username, repos, headers) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const now = new Date()
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), 1)

    // Initialize monthly commit counts
    const monthlyCommits = Array.from({ length: 12 }, (_, i) => {
        const date = new Date(now.getFullYear(), now.getMonth() - 11 + i, 1)
        return {
            month: months[date.getMonth()],
            year: date.getFullYear(),
            commits: 0,
            maxCommits: 120
        }
    })

    try {
        // Fetch commits from top 10 most active repos (to avoid rate limits)
        const activeRepos = repos
            .filter(repo => !repo.fork && repo.pushed_at)
            .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
            .slice(0, 10)

        const commitPromises = activeRepos.map(async (repo) => {
            try {
                const commitsRes = await fetch(
                    `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&since=${oneYearAgo.toISOString()}&per_page=100`,
                    { headers }
                )
                if (commitsRes.ok) {
                    const commits = await commitsRes.json()
                    return commits
                }
                return []
            } catch {
                return []
            }
        })

        const allCommitsArrays = await Promise.all(commitPromises)
        const allCommits = allCommitsArrays.flat()

        // Count commits by month
        allCommits.forEach(commit => {
            if (commit.commit?.author?.date) {
                const commitDate = new Date(commit.commit.author.date)
                const monthIndex = (commitDate.getFullYear() - monthlyCommits[0].year) * 12 +
                    (commitDate.getMonth() - new Date(monthlyCommits[0].year, new Date().getMonth() - 11, 1).getMonth())

                if (monthIndex >= 0 && monthIndex < 12) {
                    monthlyCommits[monthIndex].commits++
                }
            }
        })

        return monthlyCommits
    } catch (error) {
        console.error('Error fetching commit activity:', error)
        return generateFallbackCommitActivity()
    }
}

// Generate fallback commit activity
function generateFallbackCommitActivity() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const currentMonth = new Date().getMonth()

    return Array.from({ length: 12 }, (_, i) => {
        const monthIndex = (currentMonth - 11 + i + 12) % 12
        return {
            month: months[monthIndex],
            commits: Math.floor(Math.random() * 100) + 20,
            maxCommits: 120
        }
    })
}
