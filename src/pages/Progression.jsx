import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaGraduationCap, FaBriefcase, FaFlag, FaCode, FaShieldAlt, FaTrophy, FaRocket } from 'react-icons/fa'
import { progression } from '../config/siteConfig'

const Progression = () => {
    const [activeTab, setActiveTab] = useState('all')
    const [visibleItems, setVisibleItems] = useState([])

    // Filter items
    const filteredItems = progression.filter(item => {
        if (activeTab === 'all') return true
        if (activeTab === 'both') return item.category === 'both' || item.category === 'redteam' || item.category === 'programming'
        return item.category === activeTab || item.category === 'both'
    })

    // Sort by Date/Year (assuming ID roughly correlates or just using index order from config)
    // You might want to sort by year if the order in config isn't strict, but config order is usually best.

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => [...new Set([...prev, entry.target.id])])
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
        )

        document.querySelectorAll('.timeline-item').forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [activeTab])

    const getCategoryColor = (category) => {
        switch (category) {
            case 'programming': return 'cyan'
            case 'redteam': return 'red' // Using red/orange theme
            case 'education': return 'green'
            default: return 'purple'
        }
    }

    const getIcon = (item) => {
        if (item.type === 'cert') return <FaShieldAlt />
        if (item.type === 'event') return <FaFlag />
        if (item.type === 'work') return <FaBriefcase />
        if (item.type === 'goal') return <FaRocket />
        if (item.category === 'education') return <FaGraduationCap />
        if (item.category === 'programming') return <FaCode />
        return <FaTrophy />
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            {/* Fixed Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/10 to-transparent opacity-50" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full" />
            </div>

            {/* Header / Filter Bar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <a href="/resume" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-sm tracking-wider">BACK_TO_RESUME</span>
                    </a>

                    {/* Cyberpunk Filter Tabs */}
                    <div className="flex p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl">
                        {[
                            { id: 'all', label: 'ALL_DATA' },
                            { id: 'programming', label: 'DEV_OPS' },
                            { id: 'redteam', label: 'SEC_OPS' },
                            { id: 'education', label: 'ACADEMIC' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative pt-32 pb-24 px-4 sm:px-6 max-w-5xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 mb-4" style={{ textShadow: '0 0 30px rgba(6,182,212,0.3)' }}>
                        PROGRESSION
                    </h1>
                    <p className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase">
                        initializing_neural_link... loaded {filteredItems.length} nodes
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Central Spine */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent -translate-x-1/2" />

                    <div className="space-y-12">
                        {filteredItems.map((item, index) => {
                            const isVisible = visibleItems.includes(`item-${item.id}`)
                            const isEven = index % 2 === 0
                            const color = getCategoryColor(item.category)

                            // Dynamic classes for colors
                            const borderColor = color === 'cyan' ? 'border-cyan-500/30' : color === 'red' ? 'border-red-500/30' : color === 'green' ? 'border-green-500/30' : 'border-purple-500/30'
                            const glowColor = color === 'cyan' ? 'shadow-cyan-500/20' : color === 'red' ? 'shadow-red-500/20' : color === 'green' ? 'shadow-green-500/20' : 'shadow-purple-500/20'
                            const textColor = color === 'cyan' ? 'text-cyan-400' : color === 'red' ? 'text-red-400' : color === 'green' ? 'text-green-400' : 'text-purple-400'
                            const gradientBg = color === 'cyan' ? 'from-cyan-900/20' : color === 'red' ? 'from-red-900/20' : color === 'green' ? 'from-green-900/20' : 'from-purple-900/20'

                            return (
                                <div
                                    key={item.id}
                                    id={`item-${item.id}`}
                                    className={`timeline-item relative flex flex-col md:flex-row gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''
                                        } transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                        }`}
                                >
                                    {/* Content Card */}
                                    <div className="flex-1 w-full md:w-auto group">
                                        <div className={`relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border ${borderColor} hover:border-opacity-100 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:${glowColor} group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                                            {/* Glow Overlay */}
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                            {/* Card Content */}
                                            <div className="relative z-10">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className={`px-2 py-0.5 rounded text-xs font-mono bg-white/5 border border-white/10 ${textColor}`}>
                                                        {item.year}
                                                    </span>
                                                    {item.type && (
                                                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                                                            // {item.type}
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                                                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-3 group-hover:border-white/30 transition-colors">
                                                    {item.description}
                                                </p>

                                                {item.image && (
                                                    <div className="mt-4 rounded-lg overflow-hidden border border-white/10 h-32 w-full relative group-hover:border-white/30 transition-colors">
                                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spine Node */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-white/20 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,1)] group">
                                        <div className={`w-3 h-3 rounded-full ${textColor.replace('text', 'bg')} shadow-[0_0_10px_currentColor] group-hover:scale-150 transition-transform`} />
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            )
                        })}
                    </div>

                    {/* Future Terminator Line */}
                    <div className="absolute left-4 md:left-1/2 bottom-[-50px] -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                </div>
            </main>
        </div>
    )
}

export default Progression
