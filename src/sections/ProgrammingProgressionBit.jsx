import React, { useState } from 'react'
import {
    FaPython, FaJava, FaHtml5, FaTerminal,
    FaCode, FaBrain, FaReact, FaTimes, FaExternalLinkAlt
} from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiDotnet } from 'react-icons/si'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const progressionData = [
    {
        id: 1,
        name: 'C',
        icon: FaCode,
        color: '#A8B9CC',
        year: 'School',
        duration: 'Foundation',
        description: 'Memory management, pointers, low-level programming fundamentals',
        level: 'Intermediate',
        levelPercent: 65,
        why: 'Learned the fundamentals of how computers work at a low level',
        project: 'Snake Game',
        category: 'systems'
    },
    {
        id: 2,
        name: 'C#',
        icon: SiDotnet,
        color: '#239120',
        year: 'College',
        duration: '2 months',
        description: 'OOP Mastery - Game development with Unity engine',
        level: 'Intermediate',
        levelPercent: 60,
        why: 'Needed for Unity game development with my remote team',
        project: 'Call of Ngoa (Unity Game)',
        category: 'game'
    },
    {
        id: 3,
        name: 'Python',
        icon: FaPython,
        color: '#3776AB',
        year: 'University',
        duration: '2 months',
        description: 'Scripting & Automation - AI and cybersecurity tools',
        level: 'Advanced',
        levelPercent: 85,
        why: 'Perfect for rapid development and AI/ML applications',
        project: 'Aegis (Cyber Blue Team AI)',
        category: 'ai'
    },
    {
        id: 4,
        name: 'Java',
        icon: FaJava,
        color: '#007396',
        year: 'University',
        duration: '3 months',
        description: 'Enterprise Development - Backend systems & Android',
        level: 'Intermediate',
        levelPercent: 55,
        why: 'Enterprise-grade applications and Android development',
        project: 'Banking Application',
        category: 'enterprise'
    },
    {
        id: 5,
        name: 'Bash',
        icon: FaTerminal,
        color: '#4EAA25',
        year: 'Self-taught',
        duration: '2 months',
        description: 'Shell Scripting - Automation and red teaming',
        level: 'Advanced',
        levelPercent: 80,
        why: 'Essential for Linux automation and penetration testing',
        project: 'Almight Tracer',
        category: 'security'
    },
    {
        id: 6,
        name: 'Assembly',
        icon: FaTerminal,
        color: '#FF6600',
        year: 'Self-taught',
        duration: '2 months',
        description: 'Low-level Programming - Reverse engineering & exploitation',
        level: 'Intermediate',
        levelPercent: 50,
        why: 'Understanding binary exploitation and malware analysis',
        project: 'Reverse Engineering',
        category: 'security'
    },
    {
        id: 7,
        name: 'HTML/CSS/JS',
        icon: FaHtml5,
        color: '#E34F26',
        year: 'Self-taught',
        duration: '1 month',
        description: 'Web Foundation - Frontend development essentials',
        level: 'Advanced',
        levelPercent: 90,
        why: 'Building modern web applications and interfaces',
        project: 'XyberClan SaaS',
        category: 'web'
    },
    {
        id: 8,
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#3178C6',
        year: 'Self-taught',
        duration: '1 month',
        description: 'Type-safe JavaScript - Scalable enterprise applications',
        level: 'Advanced',
        levelPercent: 85,
        why: 'Better code quality and maintainability for large projects',
        project: 'Enterprise Apps',
        category: 'web'
    },
    {
        id: 9,
        name: 'React/Next.js',
        icon: FaReact,
        color: '#61DAFB',
        year: 'Self-taught',
        duration: '4 months',
        description: 'Modern Frameworks - Full-stack development mastery',
        level: 'Expert',
        levelPercent: 95,
        why: 'Industry-standard for building scalable web applications',
        project: 'NBDance, XyberClan, Portfolio',
        category: 'web'
    },
    {
        id: 10,
        name: 'Prompt Engineering',
        icon: FaBrain,
        color: '#FF6B9D',
        year: '2023-Present',
        duration: '2 years',
        description: 'AI/LLM Mastery - Leverage AI for development & automation',
        level: 'Expert',
        levelPercent: 92,
        why: 'Essential for leveraging AI in development and automation',
        project: 'Aegis AI, Automation',
        category: 'ai'
    }
]

const SkillCard = ({ skill, index, onClick, isActive }) => {
    const [cardRef, cardVisible] = useScrollAnimation(0.1)
    const Icon = skill.icon

    const getLevelColor = (percent) => {
        if (percent >= 90) return 'from-green-400 to-emerald-500'
        if (percent >= 75) return 'from-cyan-400 to-blue-500'
        if (percent >= 60) return 'from-yellow-400 to-orange-500'
        return 'from-purple-400 to-pink-500'
    }

    return (
        <div
            ref={cardRef}
            onClick={() => onClick(skill)}
            className={`scroll-hidden ${cardVisible ? 'animate-fade-in-up' : ''} cursor-pointer group`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl border rounded-2xl p-5 transition-all duration-500 h-full
                ${isActive
                    ? 'border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.4)] scale-[1.02]'
                    : 'border-gray-700/50 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                }`}
            >
                {/* Glow effect on hover */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at center, ${skill.color}15, transparent 70%)`
                    }}
                />

                {/* Skill Icon */}
                <div className="relative flex items-start justify-between mb-4">
                    <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                            background: `linear-gradient(135deg, ${skill.color}30, ${skill.color}10)`,
                            boxShadow: `0 0 20px ${skill.color}30`
                        }}
                    >
                        <Icon className="text-2xl" style={{ color: skill.color }} />
                    </div>

                    {/* Level badge */}
                    <span
                        className="px-3 py-1 text-xs font-bold rounded-full"
                        style={{
                            background: `${skill.color}20`,
                            color: skill.color
                        }}
                    >
                        {skill.level}
                    </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                </h3>

                {/* Year */}
                <p className="text-gray-500 text-xs font-mono mb-3">{skill.year}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-auto">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Mastery</span>
                        <span className="text-cyan-400 font-mono">{skill.levelPercent}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${getLevelColor(skill.levelPercent)} rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.levelPercent}%` }}
                        />
                    </div>
                </div>

                {/* Project tag */}
                <div className="mt-4 pt-3 border-t border-gray-800">
                    <span className="text-xs text-gray-500">KEY PROJECT:</span>
                    <p className="text-sm text-gray-300 font-medium truncate">{skill.project}</p>
                </div>
            </div>
        </div>
    )
}

const SkillModal = ({ skill, onClose }) => {
    if (!skill) return null
    const Icon = skill.icon

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={onClose}
        >
            <div
                className="relative max-w-2xl w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-400/30 rounded-3xl p-8 shadow-[0_0_60px_rgba(6,182,212,0.3)] animate-appear"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 transition-colors"
                >
                    <FaTimes />
                </button>

                {/* Header */}
                <div className="flex items-center gap-6 mb-6">
                    <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{
                            background: `linear-gradient(135deg, ${skill.color}40, ${skill.color}10)`,
                            boxShadow: `0 0 30px ${skill.color}40`
                        }}
                    >
                        <Icon className="text-4xl" style={{ color: skill.color }} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-black text-white">{skill.name}</h3>
                        <p className="text-gray-400">{skill.year} • {skill.duration}</p>
                    </div>
                </div>

                {/* Level indicator */}
                <div className="mb-6">
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Mastery Level</span>
                        <span className="text-cyan-400 font-bold">{skill.level} ({skill.levelPercent}%)</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                            style={{ width: `${skill.levelPercent}%` }}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Description</h4>
                    <p className="text-gray-300">{skill.description}</p>
                </div>

                {/* Why I learned */}
                <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Why I Learned This</h4>
                    <p className="text-gray-300">{skill.why}</p>
                </div>

                {/* Key Project */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-4 border border-cyan-400/20">
                    <h4 className="text-sm font-bold text-cyan-400 mb-1">KEY PROJECT</h4>
                    <p className="text-white font-semibold">{skill.project}</p>
                </div>
            </div>
        </div>
    )
}

const ProgrammingProgressionBit = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.2)
    const [selectedSkill, setSelectedSkill] = useState(null)
    const [filter, setFilter] = useState('all')

    const categories = [
        { id: 'all', name: 'All Skills', color: '#06b6d4' },
        { id: 'web', name: 'Web Dev', color: '#61DAFB' },
        { id: 'security', name: 'Security', color: '#ef4444' },
        { id: 'ai', name: 'AI/ML', color: '#FF6B9D' },
        { id: 'systems', name: 'Systems', color: '#A8B9CC' },
    ]

    const filteredSkills = filter === 'all'
        ? progressionData
        : progressionData.filter(s => s.category === filter)

    // Calculate stats
    const expertCount = progressionData.filter(s => s.level === 'Expert').length
    const avgMastery = Math.round(progressionData.reduce((acc, s) => acc + s.levelPercent, 0) / progressionData.length)

    return (
        <section className="min-h-screen w-full relative bg-black py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(6,182,212,0.08),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(168,85,247,0.08),_transparent_50%)]" />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, #06b6d4 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-12 scroll-hidden ${headerVisible ? 'animate-fade-in-down' : ''}`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-6">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-cyan-400 font-mono text-sm">SKILL_TREE</span>
                    </div>

                    <h2
                        className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 text-white"
                        style={{ textShadow: '0 0 40px rgba(6,182,212,0.5)' }}
                    >
                        PROGRAMMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">ARSENAL</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        A decade of learning, from low-level systems to modern AI. Click any skill to explore deeper.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 mb-8">
                        <div className="text-center">
                            <div className="text-3xl font-black text-cyan-400">{progressionData.length}</div>
                            <div className="text-xs text-gray-500 font-mono">LANGUAGES</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-purple-400">{expertCount}</div>
                            <div className="text-xs text-gray-500 font-mono">EXPERT_LEVEL</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-pink-400">{avgMastery}%</div>
                            <div className="text-xs text-gray-500 font-mono">AVG_MASTERY</div>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${filter === cat.id
                                    ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filteredSkills.map((skill, index) => (
                        <SkillCard
                            key={skill.id}
                            skill={skill}
                            index={index}
                            onClick={setSelectedSkill}
                            isActive={selectedSkill?.id === skill.id}
                        />
                    ))}
                </div>

                {/* Legend */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
                        <span className="text-gray-400">Expert (90%+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                        <span className="text-gray-400">Advanced (75-89%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
                        <span className="text-gray-400">Intermediate (60-74%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
                        <span className="text-gray-400">Learning (&lt;60%)</span>
                    </div>
                </div>
            </div>

            {/* Skill Detail Modal */}
            {selectedSkill && (
                <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
            )}
        </section>
    )
}

export default ProgrammingProgressionBit
