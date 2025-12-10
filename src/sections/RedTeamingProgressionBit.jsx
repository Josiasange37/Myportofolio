import React, { useRef, useState, useMemo } from 'react'
import { View, PerspectiveCamera, Text, Float, Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import {
    FaShieldAlt, FaBug, FaNetworkWired, FaUserSecret, FaTerminal,
    FaLock, FaKey, FaEye, FaServer, FaDatabase
} from 'react-icons/fa'
import { SiKalilinux, SiMetasploit, SiWireshark } from 'react-icons/si'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const redTeamingData = [
    {
        id: 1,
        name: 'Reconnaissance',
        icon: FaEye,
        color: '#FF6B6B',
        description: 'Information gathering and OSINT techniques',
        level: 'Expert',
        tools: 'Nmap, Shodan, theHarvester, Maltego',
        why: 'First phase of any penetration test - gathering intelligence',
        achievement: 'Mapped entire corporate networks'
    },
    {
        id: 2,
        name: 'Scanning & Enumeration',
        icon: FaNetworkWired,
        color: '#4ECDC4',
        description: 'Port scanning, service detection, vulnerability scanning',
        level: 'Expert',
        tools: 'Nmap, Masscan, Nikto, Enum4linux',
        why: 'Identifying attack vectors and potential vulnerabilities',
        achievement: 'Discovered critical vulnerabilities in production systems'
    },
    {
        id: 3,
        name: 'Exploitation',
        icon: FaBug,
        color: '#95E1D3',
        description: 'Exploiting vulnerabilities to gain access',
        level: 'Advanced',
        tools: 'Metasploit, SQLMap, Burp Suite, Custom exploits',
        why: 'Proving vulnerabilities and gaining initial access',
        achievement: 'Developed custom exploits for zero-days'
    },
    {
        id: 4,
        name: 'Post-Exploitation',
        icon: FaUserSecret,
        color: '#F38181',
        description: 'Privilege escalation, lateral movement, persistence',
        level: 'Advanced',
        tools: 'Mimikatz, BloodHound, PowerShell Empire, Cobalt Strike',
        why: 'Maintaining access and escalating privileges',
        achievement: 'Achieved domain admin in enterprise environments'
    },
    {
        id: 5,
        name: 'Web Application Security',
        icon: FaServer,
        color: '#AA96DA',
        description: 'OWASP Top 10, API security, authentication bypass',
        level: 'Expert',
        tools: 'Burp Suite, OWASP ZAP, SQLMap, XSStrike',
        why: 'Web apps are the most common attack surface',
        achievement: 'Found critical bugs in major platforms'
    },
    {
        id: 6,
        name: 'Network Penetration',
        icon: FaNetworkWired,
        color: '#FCBAD3',
        description: 'Network attacks, MitM, ARP spoofing, packet analysis',
        level: 'Advanced',
        tools: 'Wireshark, Ettercap, Bettercap, Responder',
        why: 'Understanding network-level attacks',
        achievement: 'Intercepted and analyzed encrypted traffic'
    },
    {
        id: 7,
        name: 'Wireless Security',
        icon: FaShieldAlt,
        color: '#FFFFD2',
        description: 'WiFi hacking, WPA/WPA2 cracking, rogue AP',
        level: 'Intermediate',
        tools: 'Aircrack-ng, Wifite, Reaver, Kismet',
        why: 'Wireless networks are often the weakest link',
        achievement: 'Cracked enterprise WiFi networks'
    },
    {
        id: 8,
        name: 'Social Engineering',
        icon: FaUserSecret,
        color: '#A8E6CF',
        description: 'Phishing, pretexting, physical security',
        level: 'Advanced',
        tools: 'SET, Gophish, BeEF, Custom campaigns',
        why: 'Humans are often the weakest link',
        achievement: 'Successful phishing campaigns with 60%+ success rate'
    },
    {
        id: 9,
        name: 'Malware Analysis',
        icon: FaBug,
        color: '#FFD3B6',
        description: 'Reverse engineering, behavioral analysis, sandbox',
        level: 'Intermediate',
        tools: 'IDA Pro, Ghidra, x64dbg, Cuckoo Sandbox',
        why: 'Understanding malware behavior and creating defenses',
        achievement: 'Analyzed APT malware samples'
    },
    {
        id: 10,
        name: 'Blue Team Defense',
        icon: FaShieldAlt,
        color: '#06b6d4',
        description: 'SIEM, threat hunting, incident response, forensics',
        level: 'Advanced',
        tools: 'Splunk, ELK Stack, Aegis AI, Velociraptor',
        why: 'Understanding defense to be a better attacker',
        achievement: 'Built Aegis - AI-powered Blue Team assistant'
    }
]

const ToolNode = ({ data, position, index, onHover }) => {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)
    const Icon = data.icon

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime()
            meshRef.current.rotation.y = t * 0.5
            meshRef.current.rotation.x = Math.sin(t + index) * 0.2
            if (hovered) {
                meshRef.current.scale.setScalar(1.3)
            } else {
                meshRef.current.scale.setScalar(1)
            }
        }
    })

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh
                    ref={meshRef}
                    onPointerOver={() => {
                        setHovered(true)
                        onHover(data)
                    }}
                    onPointerOut={() => {
                        setHovered(false)
                        onHover(null)
                    }}
                >
                    <octahedronGeometry args={[0.3, 0]} />
                    <meshStandardMaterial
                        color={data.color}
                        emissive={data.color}
                        emissiveIntensity={hovered ? 1.5 : 0.5}
                        metalness={0.8}
                        roughness={0.2}
                        wireframe={hovered}
                    />
                </mesh>
                <pointLight
                    color={data.color}
                    intensity={hovered ? 2 : 0.5}
                    distance={3}
                />
            </Float>
        </group>
    )
}

const SpiralPath = ({ nodes }) => {
    const points = useMemo(() => {
        const pts = []
        const radius = 3
        const height = 10
        const turns = 2.5

        for (let i = 0; i <= 100; i++) {
            const t = i / 100
            const angle = t * Math.PI * 2 * turns
            const y = (t - 0.5) * height
            const x = Math.cos(angle) * radius * (1 - t * 0.3)
            const z = Math.sin(angle) * radius * (1 - t * 0.3)
            pts.push(new THREE.Vector3(x, y, z))
        }
        return pts
    }, [])

    const lineRef = useRef()

    useFrame((state) => {
        if (lineRef.current) {
            lineRef.current.material.dashOffset -= 0.01
        }
    })

    return (
        <Line
            ref={lineRef}
            points={points}
            color="#FF6B6B"
            lineWidth={2}
            dashed
            dashScale={50}
            dashSize={0.5}
            gapSize={0.3}
        />
    )
}

const SpiralScene = ({ onHover }) => {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
        }
    })

    const nodePositions = useMemo(() => {
        const positions = []
        const radius = 3
        const height = 10
        const turns = 2.5

        redTeamingData.forEach((_, index) => {
            const t = index / (redTeamingData.length - 1)
            const angle = t * Math.PI * 2 * turns
            const y = (t - 0.5) * height
            const x = Math.cos(angle) * radius * (1 - t * 0.3)
            const z = Math.sin(angle) * radius * (1 - t * 0.3)
            positions.push([x, y, z])
        })
        return positions
    }, [])

    return (
        <group ref={groupRef}>
            <SpiralPath nodes={redTeamingData} />
            {redTeamingData.map((data, index) => (
                <ToolNode
                    key={data.id}
                    data={data}
                    position={nodePositions[index]}
                    index={index}
                    onHover={onHover}
                />
            ))}
        </group>
    )
}

const RedTeamingProgressionBit = () => {
    const [hoveredNode, setHoveredNode] = useState(null)
    const [headerRef, headerVisible] = useScrollAnimation(0.2)
    const [gridRef, gridVisible] = useScrollAnimation(0.2)

    return (
        <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-red-950/10 to-black">
            {/* 3D View */}
            <View className="absolute top-0 left-0 w-full h-full">
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={60} />
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#FF6B6B" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />

                <SpiralScene onHover={setHoveredNode} />
            </View>

            {/* UI Overlay */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-20">
                <div
                    ref={headerRef}
                    className={`text-center mb-16 scroll-hidden ${headerVisible ? 'animate-fade-in-down' : ''
                        }`}
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-white" style={{ textShadow: '0 0 40px rgba(239,68,68,0.5), 0 0 80px rgba(251,146,60,0.3)' }}>
                        RED TEAMING PROGRESSION
                    </h2>
                    <p className="text-gray-400 font-mono text-sm tracking-widest">
                        &lt; OFFENSIVE_SECURITY_MASTERY /&gt;
                    </p>
                </div>

                {/* Hover Tooltip */}
                {hoveredNode && (
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
                        <div className="bg-black/90 backdrop-blur-xl border border-red-500/50 rounded-lg p-6 max-w-md shadow-[0_0_50px_rgba(255,107,107,0.3)] animate-appear">
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                                    style={{ backgroundColor: hoveredNode.color + '20', color: hoveredNode.color }}
                                >
                                    <hoveredNode.icon />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{hoveredNode.name}</h3>
                                    <p className="text-red-400 text-sm font-mono">Level: {hoveredNode.level}</p>
                                </div>
                            </div>

                            <div className="space-y-3 text-sm">
                                <div>
                                    <span className="text-orange-400 font-mono">Description:</span>
                                    <p className="text-gray-300 mt-1">{hoveredNode.description}</p>
                                </div>

                                <div>
                                    <span className="text-orange-400 font-mono">Tools:</span>
                                    <p className="text-gray-300 mt-1">{hoveredNode.tools}</p>
                                </div>

                                <div>
                                    <span className="text-orange-400 font-mono">Why Important:</span>
                                    <p className="text-gray-300 mt-1">{hoveredNode.why}</p>
                                </div>

                                <div>
                                    <span className="text-orange-400 font-mono">Achievement:</span>
                                    <p className="text-red-300 mt-1 font-semibold">{hoveredNode.achievement}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Skills Grid with Connecting Lines */}
                <div
                    ref={gridRef}
                    className={`relative mt-20 scroll-hidden ${gridVisible ? 'animate-fade-in-up' : ''
                        }`}
                >
                    {/* Connecting dotted line */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                        <defs>
                            <linearGradient id="redLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.3" />
                                <stop offset="50%" stopColor="#FFA500" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        {redTeamingData.slice(0, -1).map((_, index) => {
                            const row = Math.floor(index / 3)
                            const col = index % 3
                            const nextRow = Math.floor((index + 1) / 3)
                            const nextCol = (index + 1) % 3

                            const x1 = `${(col + 0.5) * 33.33}%`
                            const y1 = `${(row + 0.5) * 200}px`
                            const x2 = `${(nextCol + 0.5) * 33.33}%`
                            const y2 = `${(nextRow + 0.5) * 200}px`

                            return (
                                <line
                                    key={`line-${index}`}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="url(#redLineGradient)"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                    opacity="0.5"
                                />
                            )
                        })}
                    </svg>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative" style={{ zIndex: 1 }}>
                        {redTeamingData.map((item, index) => (
                            <div
                                key={item.id}
                                className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-lg p-5 hover:border-red-500 transition-all duration-300 group hover-lift animate-slide-up cursor-pointer relative overflow-hidden"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Number badge */}
                                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/20 border border-red-400/50 flex items-center justify-center text-xs font-mono text-red-400">
                                    {index + 1}
                                </div>

                                <div className="flex items-center gap-3 mb-3">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundColor: item.color + '20', color: item.color }}
                                    >
                                        <item.icon />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold text-lg">{item.name}</h4>
                                        <p className="text-xs text-gray-500 font-mono">{item.level}</p>
                                    </div>
                                </div>

                                {/* Compact info - always visible */}
                                <p className="text-xs text-gray-400 mb-2">{item.description}</p>

                                {/* Expanded info - visible on hover */}
                                <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
                                    <div className="pt-3 mt-3 border-t border-gray-700/50 space-y-2">
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs text-orange-400 font-mono whitespace-nowrap">Tools:</span>
                                            <span className="text-xs text-gray-300">{item.tools}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs text-orange-400 font-mono whitespace-nowrap">Why:</span>
                                            <span className="text-xs text-gray-300">{item.why}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs text-orange-400 font-mono whitespace-nowrap">Achievement:</span>
                                            <span className="text-xs text-red-300 font-semibold">{item.achievement}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover indicator */}
                                <div className="absolute bottom-2 right-2 text-xs text-gray-600 group-hover:text-red-400 transition-colors font-mono">
                                    hover_for_more
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RedTeamingProgressionBit
