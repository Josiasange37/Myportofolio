import React, { useState } from 'react'
import { FaArrowLeft, FaGraduationCap, FaBriefcase, FaFlag, FaCode, FaShieldAlt } from 'react-icons/fa'

const Progression = () => {
    const [activeTab, setActiveTab] = useState('all')

    // Progression data
    const progressionData = {
        school: [
            { id: 1, year: '2015', title: 'Started Learning', description: 'First introduction to computers and programming', level: 'beginner', image: null },
            { id: 2, year: '2017', title: 'High School CS', description: 'Formal computer science education begins', level: 'beginner', image: null },
            { id: 3, year: '2019', title: 'University Entry', description: 'Computer Science / Cybersecurity program', level: 'intermediate', image: null },
            { id: 4, year: '2023', title: 'Graduation', description: 'Completed degree with honors', level: 'advanced', image: null },
        ],
        experience: [
            { id: 5, year: '2018', title: 'First CTF', description: 'Participated in Capture The Flag competition', type: 'event', category: 'redteam', image: null },
            { id: 6, year: '2020', title: 'CEH Certified', description: 'Certified Ethical Hacker certification', type: 'cert', category: 'redteam', image: null, certImage: '/certs/ceh.jpg' },
            { id: 7, year: '2021', title: 'First Dev Job', description: 'Junior Full Stack Developer position', type: 'work', category: 'programming', image: null },
            { id: 8, year: '2022', title: 'OSCP Certified', description: 'Offensive Security Certified Professional', type: 'cert', category: 'redteam', image: null, certImage: '/certs/oscp.jpg' },
            { id: 9, year: '2022', title: 'Security Conference', description: 'Spoke at cybersecurity conference', type: 'event', category: 'redteam', image: null },
            { id: 10, year: '2023', title: 'Senior Developer', description: 'Promoted to Senior Full Stack Developer', type: 'work', category: 'programming', image: null },
            { id: 11, year: '2024', title: 'Red Team Lead', description: 'Leading red team operations', type: 'work', category: 'redteam', image: null },
        ],
        goals: [
            { id: 12, year: '2025', title: 'Master 3D Development', description: 'Become expert in Three.js and game development', category: 'programming', image: null },
            { id: 13, year: '2025', title: 'OSEP Certification', description: 'Offensive Security Experienced Penetration Tester', category: 'redteam', image: null },
            { id: 14, year: '2026', title: 'Open Source Contribution', description: 'Launch major security framework', category: 'both', image: null },
            { id: 15, year: '2027', title: 'Tech Leadership', description: 'CTO or Security Director role', category: 'both', image: null },
        ]
    }

    // Certifications data
    const certifications = progressionData.experience.filter(item => item.type === 'cert')


    // Combine all data for network graph
    const allNodes = [
        ...progressionData.school,
        ...progressionData.experience,
        ...progressionData.goals
    ]

    // Filter based on active tab
    const getFilteredNodes = () => {
        if (activeTab === 'all') return allNodes
        if (activeTab === 'programming') return allNodes.filter(n => n.category === 'programming' || n.category === 'both' || !n.category)
        if (activeTab === 'redteam') return allNodes.filter(n => n.category === 'redteam' || n.category === 'both' || !n.category)
        return allNodes
    }

    const filteredNodes = getFilteredNodes()

    // Get color based on node type
    const getNodeColor = (node) => {
        if (node.category === 'programming') return 'from-cyan-500 to-blue-500'
        if (node.category === 'redteam') return 'from-red-500 to-orange-500'
        if (node.category === 'both') return 'from-purple-500 to-pink-500'
        if (node.level) return 'from-green-500 to-emerald-500'
        return 'from-gray-500 to-gray-700'
    }

    const getNodeIcon = (node) => {
        if (node.level) return <FaGraduationCap />
        if (node.type === 'cert') return <FaShieldAlt />
        if (node.type === 'work') return <FaBriefcase />
        if (node.type === 'event') return <FaFlag />
        if (node.category === 'programming') return <FaCode />
        if (node.category === 'redteam') return <FaShieldAlt />
        return <FaFlag />
    }

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-gray-800 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a
                        href="/resume"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        <FaArrowLeft />
                        <span className="font-mono">BACK_TO_RESUME</span>
                    </a>

                    {/* Filter Tabs */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${activeTab === 'all'
                                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                                : 'bg-gray-800 text-gray-400 hover:text-white'
                                }`}
                        >
                            ALL
                        </button>
                        <button
                            onClick={() => setActiveTab('programming')}
                            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${activeTab === 'programming'
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                                : 'bg-gray-800 text-gray-400 hover:text-white'
                                }`}
                        >
                            PROGRAMMING
                        </button>
                        <button
                            onClick={() => setActiveTab('redteam')}
                            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${activeTab === 'redteam'
                                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                                : 'bg-gray-800 text-gray-400 hover:text-white'
                                }`}
                        >
                            RED_TEAMING
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-12 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-black mb-4 text-white" style={{ textShadow: '0 0 40px rgba(6,182,212,0.5)' }}>
                            MY_PROGRESSION
                        </h1>
                        <p className="text-gray-400 font-mono">From Beginner to ALMIGHT</p>
                    </div>

                    {/* Network Graph */}
                    <div className="relative min-h-screen">
                        {/* SVG for dotted connections */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                            <defs>
                                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="rgba(6,182,212,0.3)" />
                                </pattern>
                            </defs>
                            {/* Draw connections between consecutive nodes */}
                            {filteredNodes.map((node, index) => {
                                if (index === 0) return null
                                const prevNode = filteredNodes[index - 1]
                                const x1 = (index - 1) % 4 * 25 + 12.5
                                const y1 = Math.floor((index - 1) / 4) * 25 + 12.5
                                const x2 = index % 4 * 25 + 12.5
                                const y2 = Math.floor(index / 4) * 25 + 12.5

                                return (
                                    <line
                                        key={`line-${node.id}`}
                                        x1={`${x1}%`}
                                        y1={`${y1}%`}
                                        x2={`${x2}%`}
                                        y2={`${y2}%`}
                                        stroke="url(#dots)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        opacity="0.5"
                                    />
                                )
                            })}
                        </svg>

                        {/* Nodes Grid */}
                        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ zIndex: 1 }}>
                            {filteredNodes.map((node, index) => (
                                <div
                                    key={node.id}
                                    className="group relative"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animation: 'fadeInUp 0.6s ease-out forwards',
                                        opacity: 0
                                    }}
                                >
                                    {/* Node Card */}
                                    <div className={`relative bg-gradient-to-br ${getNodeColor(node)} p-0.5 rounded-2xl hover:scale-105 transition-all duration-300`}>
                                        <div className="bg-black rounded-2xl p-6 h-full">
                                            {/* Year Badge */}
                                            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-sm border-4 border-black">
                                                {node.year}
                                            </div>

                                            {/* Image (if provided) */}
                                            {node.image && (
                                                <div className="mb-4 rounded-lg overflow-hidden border-2 border-gray-700">
                                                    <img
                                                        src={node.image}
                                                        alt={node.title}
                                                        className="w-full h-32 object-cover"
                                                    />
                                                </div>
                                            )}

                                            {/* Icon */}
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getNodeColor(node)} flex items-center justify-center mb-4 text-white text-xl`}>
                                                {getNodeIcon(node)}
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-lg font-bold text-white mb-2">{node.title}</h3>
                                            <p className="text-gray-400 text-sm">{node.description}</p>

                                            {/* Type Badge */}
                                            {node.type && (
                                                <div className="mt-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-mono ${node.type === 'cert' ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30' :
                                                        node.type === 'work' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' :
                                                            'bg-pink-500/20 text-pink-300 border border-pink-400/30'
                                                        }`}>
                                                        {node.type.toUpperCase()}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Dotted connector to next node */}
                                    {index < filteredNodes.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 border-t-2 border-dotted border-cyan-400/50"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Gallery */}
                    {certifications.length > 0 && (
                        <div className="mt-24 mb-16">
                            <h2 className="text-4xl font-bold text-white mb-8 text-center">
                                MY_CERTIFICATIONS
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {certifications.map((cert) => (
                                    <div key={cert.id} className="group relative">
                                        {/* Glow effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500"></div>

                                        {/* Cert Card */}
                                        <div className="relative bg-black/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6 transition-all duration-300 group-hover:scale-105">
                                            {/* Certificate Image */}
                                            {cert.certImage ? (
                                                <div className="mb-4 rounded-lg overflow-hidden border-2 border-purple-400/50">
                                                    <img
                                                        src={cert.certImage}
                                                        alt={cert.title}
                                                        className="w-full h-48 object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="mb-4 rounded-lg overflow-hidden border-2 border-purple-400/50 bg-gradient-to-br from-purple-900/30 to-pink-900/30 h-48 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <FaShieldAlt className="text-6xl text-purple-400 mb-2 mx-auto" />
                                                        <p className="text-xs text-gray-500 font-mono">CERT_IMAGE_HERE</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Year Badge */}
                                            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center font-bold text-sm border-4 border-black">
                                                {cert.year}
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                            <p className="text-gray-400 text-sm mb-4">{cert.description}</p>

                                            {/* Badge */}
                                            <div className="flex items-center gap-2">
                                                <FaShieldAlt className="text-purple-400" />
                                                <span className="text-xs font-mono text-purple-300">CERTIFIED</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Legend */}
                    <div className="mt-16 flex justify-center gap-6 flex-wrap">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                            <span className="text-sm text-gray-400 font-mono">School</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                            <span className="text-sm text-gray-400 font-mono">Programming</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
                            <span className="text-sm text-gray-400 font-mono">Red Teaming</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                            <span className="text-sm text-gray-400 font-mono">Both</span>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    )
}

export default Progression
