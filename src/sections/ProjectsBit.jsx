import React, { useMemo } from 'react'
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'

const ProjectCard = ({ project, index }) => {
  const [cardRef, cardVisible] = useScrollAnimation(0.1)

  // Determine gradient based on index
  const gradients = [
    'from-cyan-500/20 to-blue-500/20',
    'from-purple-500/20 to-pink-500/20',
    'from-orange-500/20 to-red-500/20',
    'from-green-500/20 to-emerald-500/20',
    'from-indigo-500/20 to-violet-500/20',
    'from-yellow-500/20 to-amber-500/20',
  ]

  const borderGradients = [
    'from-cyan-400 via-blue-500 to-cyan-400',
    'from-purple-400 via-pink-500 to-purple-400',
    'from-orange-400 via-red-500 to-orange-400',
    'from-green-400 via-emerald-500 to-green-400',
    'from-indigo-400 via-violet-500 to-indigo-400',
    'from-yellow-400 via-amber-500 to-yellow-400',
  ]

  const gradient = gradients[index % gradients.length]
  const borderGradient = borderGradients[index % borderGradients.length]

  return (
    <div
      ref={cardRef}
      className={`scroll-hidden ${cardVisible ? 'animate-fade-in-up' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative h-full"
      >
        {/* Animated gradient border */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${borderGradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-md animate-gradient-xy`}></div>

        {/* Card content */}
        <div className={`relative h-full bg-gradient-to-br ${gradient} backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 sm:p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl overflow-hidden`}>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">

            {/* Header */}
            <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-1">
                  {project.name}
                </h3>
                {project.language && (
                  <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono bg-white/10 text-cyan-300 rounded-full border border-cyan-400/30">
                    {project.language}
                  </span>
                )}
              </div>
              <FaExternalLinkAlt className="text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0 text-sm" />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 flex-grow">
              {project.description || 'No description provided.'}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 text-yellow-400">
                <FaStar className="text-xs" />
                <span className="font-mono">{project.stargazers_count || 0}</span>
              </div>
              <div className="flex items-center gap-1.5 text-purple-400">
                <FaCodeBranch className="text-xs" />
                <span className="font-mono">{project.forks_count || 0}</span>
              </div>
              {project.updated_at && (
                <div className="ml-auto text-xs text-gray-500 font-mono">
                  {new Date(project.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </div>
              )}
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
          </div>
        </div>
      </a>
    </div>
  )
}

const ProjectsBit = ({ data }) => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)

  const repos = useMemo(() => {
    if (!data || !data.repos || !Array.isArray(data.repos)) return []

    // Projects to exclude
    const excludeProjects = ['myportofolio', 'xyberclan']

    // Projects to prioritize
    const priorityProjects = ['abysflow', 'asso5']

    // Filter out excluded projects
    const filtered = data.repos.filter(repo =>
      !excludeProjects.some(excluded =>
        repo.name.toLowerCase().includes(excluded)
      )
    )

    // Separate priority and other projects
    const priority = filtered.filter(repo =>
      priorityProjects.some(p => repo.name.toLowerCase().includes(p))
    )

    const others = filtered.filter(repo =>
      !priorityProjects.some(p => repo.name.toLowerCase().includes(p))
    )

    // Sort others by stars
    others.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))

    // Combine: priority first, then top starred projects
    return [...priority, ...others].slice(0, 6)
  }, [data])

  return (
    <section className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(168,85,247,0.05),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(6,182,212,0.05),_transparent_50%)]" />

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 scroll-hidden ${headerVisible ? 'animate-fade-in-down' : ''
            }`}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
            <FaGithub className="text-3xl sm:text-4xl text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white px-4" style={{ textShadow: '0 0 40px rgba(6,182,212,0.5), 0 0 80px rgba(168,85,247,0.3)' }}>
              PROJECTS
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs sm:text-lg px-4">
            Featured Repositories • Click to Explore
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.length > 0 ? (
            repos.map((repo, index) => (
              <ProjectCard key={repo.id} project={repo} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 font-mono">No projects found. Check back soon!</p>
            </div>
          )}
        </div>

        {/* View All Button */}
        {repos.length > 0 && (
          <div className="text-center mt-12">
            <a
              href="https://github.com/Josiasange37?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group"
            >
              <FaGithub className="text-2xl group-hover:rotate-12 transition-transform" />
              <span>VIEW ALL REPOSITORIES</span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsBit
