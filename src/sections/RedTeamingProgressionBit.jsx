import React, { useState } from 'react'
import {
    FaEye, FaSearch, FaBug, FaUserSecret, FaGlobe, FaNetworkWired,
    FaWifi, FaTheaterMasks, FaVirus, FaShieldAlt, FaTimes, FaSkull,
    FaCrosshairs, FaLock
} from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const redTeamingData = [
    {
        id: 1,
        name: 'Reconnaissance',
        icon: FaEye,
        color: '#FF6B6B',
        description: 'OSINT & information gathering - the foundation of any engagement',
        level: 'Expert',
        levelPercent: 95,
        tools: 'Nmap, Shodan, theHarvester, Maltego, OSINT Framework',
        why: 'First phase of any penetration test - gathering intelligence on targets',
        achievement: 'Mapped entire corporate networks and discovered hidden assets',
        category: 'recon'
    },
    {
        id: 2,
        name: 'Scanning & Enumeration',
        icon: FaSearch,
        color: '#4ECDC4',
        description: 'Active probing and service discovery across networks',
        level: 'Expert',
        levelPercent: 92,
        tools: 'Nmap, Nikto, Gobuster, enum4linux, SMBClient',
        why: 'Identifying attack surfaces and vulnerabilities in target systems',
        achievement: 'Discovered critical misconfigurations in enterprise environments',
        category: 'recon'
    },
    {
        id: 3,
        name: 'Exploitation',
        icon: FaBug,
        color: '#FF4757',
        description: 'Weaponizing vulnerabilities to gain initial access',
        level: 'Advanced',
        levelPercent: 85,
        tools: 'Metasploit, Burp Suite, SQLMap, Custom Exploits',
        why: 'The core of red teaming - turning vulnerabilities into access',
        achievement: 'Successfully exploited multiple CVEs in CTF competitions',
        category: 'attack'
    },
    {
        id: 4,
        name: 'Post-Exploitation',
        icon: FaUserSecret,
        color: '#A55EEA',
        description: 'Privilege escalation, persistence, and lateral movement',
        level: 'Advanced',
        levelPercent: 80,
        tools: 'Mimikatz, BloodHound, PowerShell Empire, Cobalt Strike',
        why: 'Maintaining access and expanding foothold in compromised systems',
        achievement: 'Achieved domain admin through creative privilege escalation chains',
        category: 'attack'
    },
    {
        id: 5,
        name: 'Web Application Security',
        icon: FaGlobe,
        color: '#00D2D3',
        description: 'OWASP Top 10, XSS, SQLi, CSRF, and beyond',
        level: 'Expert',
        levelPercent: 90,
        tools: 'Burp Suite Pro, OWASP ZAP, ffuf, wfuzz, SQLMap',
        why: 'Web apps are the primary attack surface in modern organizations',
        achievement: 'Found critical vulnerabilities in production web applications',
        category: 'web'
    },
    {
        id: 6,
        name: 'Network Penetration',
        icon: FaNetworkWired,
        color: '#1DD1A1',
        description: 'Internal network attacks, MITM, and protocol exploitation',
        level: 'Advanced',
        levelPercent: 78,
        tools: 'Wireshark, Responder, Ettercap, CrackMapExec',
        why: 'Internal networks often have weaker defenses than perimeters',
        achievement: 'Compromised internal networks through various attack vectors',
        category: 'network'
    },
    {
        id: 7,
        name: 'Wireless Security',
        icon: FaWifi,
        color: '#FECA57',
        description: 'WiFi attacks, rogue APs, and wireless protocol hacking',
        level: 'Intermediate',
        levelPercent: 65,
        tools: 'Aircrack-ng, Wifite, Kismet, Fern WiFi Cracker',
        why: 'Wireless networks are often overlooked attack vectors',
        achievement: 'Successfully cracked WPA2 networks in controlled environments',
        category: 'network'
    },
    {
        id: 8,
        name: 'Social Engineering',
        icon: FaTheaterMasks,
        color: '#FF9FF3',
        description: 'Human hacking - phishing, pretexting, and manipulation',
        level: 'Advanced',
        levelPercent: 82,
        tools: 'Gophish, SET, Custom phishing frameworks',
        why: 'Humans are often the weakest link in security chains',
        achievement: 'Designed effective phishing campaigns for security awareness',
        category: 'human'
    },
    {
        id: 9,
        name: 'Malware Analysis',
        icon: FaVirus,
        color: '#EE5A24',
        description: 'Reverse engineering, dynamic analysis, and threat hunting',
        level: 'Intermediate',
        levelPercent: 60,
        tools: 'IDA Pro, Ghidra, x64dbg, Cuckoo Sandbox, YARA',
        why: 'Understanding attacker tools improves defensive capabilities',
        achievement: 'Analyzed malware samples and created detection signatures',
        category: 'defense'
    },
    {
        id: 10,
        name: 'Blue Team Defense',
        icon: FaShieldAlt,
        color: '#54A0FF',
        description: 'Detection, response, and hardening - knowing both sides',
        level: 'Advanced',
        levelPercent: 75,
        tools: 'SIEM, Splunk, ELK Stack, Snort, Suricata',
        why: 'Understanding defense makes you a better attacker and vice versa',
        achievement: 'Built Aegis - AI-powered Blue Team assistant',
        category: 'defense'
    }
]

const SkillCard = ({ skill, index, onClick, isActive }) => {
    const [cardRef, cardVisible] = useScrollAnimation(0.1)
    const Icon = skill.icon

    const getLevelColor = (percent) => {
        if (percent >= 90) return 'from-red-500 to-orange-500'
        if (percent >= 75) return 'from-purple-500 to-pink-500'
        if (percent >= 60) return 'from-yellow-400 to-orange-500'
        return 'from-blue-400 to-cyan-500'
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
                    ? 'border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)] scale-[1.02]'
                    : 'border-gray-700/50 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                }`}
            >
                {/* Skull watermark for hacker aesthetic */}
                <div className="absolute top-4 right-4 text-4xl opacity-5 group-hover:opacity-10 transition-opacity">
                    <FaSkull />
                </div>

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
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative"
                        style={{
                            background: `linear-gradient(135deg, ${skill.color}30, ${skill.color}10)`,
                            boxShadow: `0 0 20px ${skill.color}30`
                        }}
                    >
                        <Icon className="text-2xl" style={{ color: skill.color }} />
                        {/* Pulsing ring effect */}
                        <div
                            className="absolute inset-0 rounded-xl animate-ping opacity-20"
                            style={{ background: skill.color }}
                        />
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
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {skill.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-auto">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Threat Level</span>
                        <span className="text-red-400 font-mono">{skill.levelPercent}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${getLevelColor(skill.levelPercent)} rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.levelPercent}%` }}
                        />
                    </div>
                </div>

                {/* Tools preview */}
                <div className="mt-4 pt-3 border-t border-gray-800">
                    <span className="text-xs text-gray-500">TOOLS:</span>
                    <p className="text-sm text-gray-300 truncate">{skill.tools.split(',').slice(0, 3).join(', ')}...</p>
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
                className="relative max-w-2xl w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-500/30 rounded-3xl p-8 shadow-[0_0_60px_rgba(239,68,68,0.3)] animate-appear"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-400 transition-colors"
                >
                    <FaTimes />
                </button>

                {/* Header */}
                <div className="flex items-center gap-6 mb-6">
                    <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
                        style={{
                            background: `linear-gradient(135deg, ${skill.color}40, ${skill.color}10)`,
                            boxShadow: `0 0 30px ${skill.color}40`
                        }}
                    >
                        <Icon className="text-4xl" style={{ color: skill.color }} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-black text-white">{skill.name}</h3>
                        <p className="text-gray-400">{skill.level} Level</p>
                    </div>
                </div>

                {/* Threat Level indicator */}
                <div className="mb-6">
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Threat Level</span>
                        <span className="text-red-400 font-bold">{skill.levelPercent}%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                            style={{ width: `${skill.levelPercent}%` }}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Description</h4>
                    <p className="text-gray-300">{skill.description}</p>
                </div>

                {/* Tools */}
                <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Tools & Techniques</h4>
                    <div className="flex flex-wrap gap-2">
                        {skill.tools.split(', ').map((tool, i) => (
                            <span key={i} className="px-3 py-1 bg-red-500/10 text-red-300 rounded-full text-sm border border-red-500/20">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Why */}
                <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Strategic Importance</h4>
                    <p className="text-gray-300">{skill.why}</p>
                </div>

                {/* Achievement */}
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-4 border border-red-400/20">
                    <h4 className="text-sm font-bold text-red-400 mb-1 flex items-center gap-2">
                        <FaCrosshairs /> KEY ACHIEVEMENT
                    </h4>
                    <p className="text-white font-semibold">{skill.achievement}</p>
                </div>
            </div>
        </div>
    )
}

const RedTeamingProgressionBit = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.2)
    const [selectedSkill, setSelectedSkill] = useState(null)
    const [filter, setFilter] = useState('all')

    const categories = [
        { id: 'all', name: 'All Skills', color: '#ef4444' },
        { id: 'recon', name: 'Recon', color: '#FF6B6B' },
        { id: 'attack', name: 'Attack', color: '#FF4757' },
        { id: 'web', name: 'Web', color: '#00D2D3' },
        { id: 'network', name: 'Network', color: '#1DD1A1' },
        { id: 'defense', name: 'Defense', color: '#54A0FF' },
    ]

    const filteredSkills = filter === 'all'
        ? redTeamingData
        : redTeamingData.filter(s => s.category === filter)

    // Calculate stats
    const expertCount = redTeamingData.filter(s => s.level === 'Expert').length
    const avgThreat = Math.round(redTeamingData.reduce((acc, s) => acc + s.levelPercent, 0) / redTeamingData.length)

    return (
        <section className="min-h-screen w-full relative bg-black py-20 overflow-hidden">
            {/* Background Effects - Red theme */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(239,68,68,0.08),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(249,115,22,0.08),_transparent_50%)]" />

            {/* Matrix-like pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(90deg, #ef4444 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-12 scroll-hidden ${headerVisible ? 'animate-fade-in-down' : ''}`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-400/30 rounded-full mb-6">
                        <FaSkull className="text-red-400" />
                        <span className="text-red-400 font-mono text-sm">OFFENSIVE_SECURITY</span>
                    </div>

                    <h2
                        className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 text-white"
                        style={{ textShadow: '0 0 40px rgba(239,68,68,0.5)' }}
                    >
                        RED TEAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">ARSENAL</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        From reconnaissance to post-exploitation. The complete offensive security toolkit. Click to explore each domain.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 mb-8">
                        <div className="text-center">
                            <div className="text-3xl font-black text-red-400">{redTeamingData.length}</div>
                            <div className="text-xs text-gray-500 font-mono">DOMAINS</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-orange-400">{expertCount}</div>
                            <div className="text-xs text-gray-500 font-mono">EXPERT_LEVEL</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-yellow-400">{avgThreat}%</div>
                            <div className="text-xs text-gray-500 font-mono">AVG_THREAT</div>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${filter === cat.id
                                        ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]'
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

                {/* Disclaimer */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm font-mono">
                        <FaLock className="inline mr-2" />
                        All skills used ethically in authorized engagements and CTF competitions only.
                    </p>
                </div>
            </div>

            {/* Skill Detail Modal */}
            {selectedSkill && (
                <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
            )}
        </section>
    )
}

export default RedTeamingProgressionBit
