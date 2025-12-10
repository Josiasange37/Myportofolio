import React, { useMemo } from 'react'
import { FaGithub, FaCode, FaFire } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CommitGraph = ({ commitActivity }) => {
    // Use real commit data from GitHub API
    const commitData = useMemo(() => {
        if (commitActivity && commitActivity.length > 0) {
            return commitActivity
        }

        // Fallback if no data
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
    }, [commitActivity])

    const totalCommits = useMemo(() => {
        return commitData.reduce((sum, month) => sum + month.commits, 0)
    }, [commitData])

    return (
        <div className="w-full">
            {/* Graph */}
            <div className="flex items-end justify-between gap-2 h-40 mb-4">
                {commitData.map((month, index) => {
                    const height = (month.commits / month.maxCommits) * 100

                    // Determine color based on commit count (vibrant colors)
                    let barColor = '#06b6d4' // cyan (low)
                    let glowColor = 'rgba(6, 182, 212, 0.5)'

                    if (month.commits > 80) {
                        barColor = '#ec4899' // pink (very high)
                        glowColor = 'rgba(236, 72, 153, 0.5)'
                    } else if (month.commits > 60) {
                        barColor = '#a855f7' // purple (high)
                        glowColor = 'rgba(168, 85, 247, 0.5)'
                    } else if (month.commits > 40) {
                        barColor = '#f59e0b' // amber (medium)
                        glowColor = 'rgba(245, 158, 11, 0.5)'
                    }

                    return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                            <div className="relative w-full">
                                <div
                                    className="w-full rounded-t transition-all duration-300 group-hover:scale-110 relative overflow-hidden"
                                    style={{
                                        height: `${height}%`,
                                        minHeight: '8px',
                                        backgroundColor: barColor,
                                        backgroundImage: `repeating-linear-gradient(
                                            0deg,
                                            transparent,
                                            transparent 2px,
                                            rgba(0, 0, 0, 0.2) 2px,
                                            rgba(0, 0, 0, 0.2) 4px
                                        )`,
                                        boxShadow: `0 0 10px ${glowColor}, inset 0 0 10px ${glowColor}`
                                    }}
                                >
                                    {/* Animated glow effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{
                                            background: `linear-gradient(180deg, ${barColor}00, ${barColor}ff)`,
                                            animation: 'pulse 2s infinite'
                                        }}
                                    ></div>
                                </div>
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 border rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10"
                                    style={{ borderColor: barColor, color: barColor }}
                                >
                                    {month.commits} commits
                                </div>
                            </div>
                            <span className="text-[10px] text-gray-500 font-mono">{month.month}</span>
                        </div>
                    )
                })}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-cyan-400">
                    <FaFire className="text-orange-500" />
                    <span className="font-mono">{totalCommits} commits</span>
                </div>
                <div className="text-gray-500 font-mono text-xs">Last 12 months</div>
            </div>

            {/* Total Contributions */}
            <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        448
                    </div>
                    <div className="text-xs text-gray-500 font-mono mt-1">CONTRIBUTIONS IN THE LAST YEAR</div>
                </div>
            </div>
        </div>
    )
}

const GitHubActivityBit = ({ data }) => {
    const [leftRef, leftVisible] = useScrollAnimation(0.2)
    const [rightRef, rightVisible] = useScrollAnimation(0.2)

    const username = 'Josiasange37'

    // Extract real data from GitHub API
    const commitActivity = data?.commitActivity || []
    const repos = data?.user?.public_repos || data?.public_repos || 47
    const followers = data?.user?.followers || data?.followers || 150
    const following = data?.user?.following || data?.following || 89

    return (
        <section className="min-h-[60vh] w-full relative flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(6,182,212,0.05),_transparent_50%)]" />

            <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                {/* LEFT: Explanation */}
                <div
                    ref={leftRef}
                    className={`space-y-6 scroll-hidden ${leftVisible ? 'animate-fade-in-left' : ''
                        }`}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaCode className="text-3xl text-cyan-400" />
                        <h2 className="text-4xl font-black text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                COMMIT_ACTIVITY
                            </span>
                        </h2>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                        Every line of code tells a story. My GitHub activity reflects a consistent commitment to
                        building, learning, and pushing boundaries.
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                            <div>
                                <p className="text-white font-semibold">Daily Contributions</p>
                                <p className="text-sm text-gray-400">Consistent coding habits and continuous learning</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                            <div>
                                <p className="text-white font-semibold">Open Source</p>
                                <p className="text-sm text-gray-400">Contributing to the developer community</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                            <div>
                                <p className="text-white font-semibold">Innovation</p>
                                <p className="text-sm text-gray-400">Experimenting with cutting-edge technologies</p>
                            </div>
                        </div>
                    </div>

                    {/* GitHub Button */}
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] pointer-events-auto group"
                    >
                        <FaGithub className="text-2xl group-hover:rotate-12 transition-transform" />
                        <span>VIEW_GITHUB_PROFILE</span>
                    </a>
                </div>

                {/* RIGHT: Commit Graph */}
                <div
                    ref={rightRef}
                    className={`scroll-hidden ${rightVisible ? 'animate-fade-in-right' : ''
                        }`}
                >
                    <div className="bg-black/60 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-white font-mono">CONTRIBUTION_GRAPH</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                                <div className="w-3 h-3 bg-gradient-to-t from-cyan-500 to-purple-500 rounded"></div>
                                <span>commits</span>
                            </div>
                        </div>

                        <CommitGraph commitActivity={commitActivity} />

                        {/* Additional Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-800">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">{repos}</div>
                                <div className="text-xs text-gray-500 font-mono">REPOS</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">{followers}</div>
                                <div className="text-xs text-gray-500 font-mono">FOLLOWERS</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-pink-400">{data?.stats?.totalStars || 8}</div>
                                <div className="text-xs text-gray-500 font-mono">STARS</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GitHubActivityBit
