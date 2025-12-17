import React, { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaUsers, FaCode, FaShieldAlt, FaPalette, FaGraduationCap, FaRocket, FaNetworkWired } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { xyberclan } from '../config/siteConfig'

const services = [
    { icon: FaCode, name: 'Web Development', color: '#06b6d4' },
    { icon: FaShieldAlt, name: 'Cybersecurity', color: '#ef4444' },
    { icon: FaPalette, name: 'Graphic Design', color: '#a855f7' },
    { icon: FaUsers, name: 'Mobile Apps', color: '#22c55e' },
    { icon: FaGraduationCap, name: 'Tech Education', color: '#f59e0b' },
    { icon: FaNetworkWired, name: 'Network Infrastructure', color: '#3b82f6' }
]

// Animated background particles
const FloatingParticle = ({ delay, size, color }) => (
    <div
        className="absolute rounded-full animate-float-particle pointer-events-none"
        style={{
            width: size,
            height: size,
            background: color,
            left: `${Math.random() * 100}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            opacity: 0.3
        }}
    />
)

const XyberClanBit = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.2)
    const [contentRef, contentVisible] = useScrollAnimation(0.2)
    const [isHovered, setIsHovered] = useState(false)
    const [glitchText, setGlitchText] = useState(false)

    // Glitch effect for title
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.95) {
                setGlitchText(true)
                setTimeout(() => setGlitchText(false), 150)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="w-full relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Radial Glows */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <FloatingParticle
                        key={i}
                        delay={i * 2}
                        size={`${4 + Math.random() * 8}px`}
                        color={i % 2 === 0 ? '#06b6d4' : '#a855f7'}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Main Card - Glassmorphism */}
                <div
                    ref={contentRef}
                    className={`scroll-hidden ${contentVisible ? 'animate-fade-in-up' : ''}`}
                >
                    <div
                        className="relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 sm:p-12 overflow-hidden"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Animated border glow */}
                        <div className={`absolute inset-0 rounded-3xl transition-all duration-700 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-xl" />
                        </div>

                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-3xl" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/50 rounded-br-3xl" />

                        {/* Content Layout */}
                        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">

                            {/* Left: Logo with Premium Display */}
                            <div className="flex-shrink-0">
                                <div className="relative group">
                                    {/* Outer ring animation */}
                                    <div className="absolute inset-0 rounded-2xl animate-spin-slow" style={{ animationDuration: '20s' }}>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-cyan-400 rounded-full blur-sm" />
                                    </div>

                                    {/* Logo Container */}
                                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center p-6 group-hover:border-cyan-400/50 transition-all duration-500">
                                        {/* Logo glow effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500" />

                                        <img
                                            src={xyberclan.logo}
                                            alt="XyberClan Logo"
                                            className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Tech decoration lines */}
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                                </div>
                            </div>

                            {/* Right: Info */}
                            <div className="flex-1 text-center lg:text-left">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                    <span className="text-cyan-400 font-mono text-xs tracking-wider">STARTUP_LEADERSHIP</span>
                                </div>

                                {/* Title with glitch effect */}
                                <h2
                                    className={`text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 transition-all ${glitchText ? 'translate-x-1 text-red-500' : ''}`}
                                    style={{ textShadow: '0 0 30px rgba(6,182,212,0.5)' }}
                                >
                                    {xyberclan.role} @ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">XYBERCLAN</span>
                                </h2>

                                <p className="text-lg text-gray-400 font-light mb-6">
                                    Chief Technology Officer
                                </p>

                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
                                    Leading digital innovation in Cameroon. Building professional solutions in web development,
                                    cybersecurity, mobile apps, and tech education for ambitious businesses.
                                </p>

                                {/* Services Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                                    {services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300 group cursor-default"
                                        >
                                            <service.icon
                                                className="text-lg group-hover:scale-110 transition-transform"
                                                style={{ color: service.color }}
                                            />
                                            <span className="text-gray-300 text-sm">{service.name}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                    <a
                                        href={xyberclan.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
                                    >
                                        {/* Button gradient background */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all" />

                                        {/* Button shine effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                        </div>

                                        <FaRocket className="relative z-10 group-hover:rotate-12 transition-transform" />
                                        <span className="relative z-10">VISIT_XYBERCLAN</span>
                                        <FaExternalLinkAlt className="relative z-10 text-sm" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Bottom stats */}
                        <div className="relative z-10 mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-black text-cyan-400">6+</div>
                                <div className="text-xs text-gray-500 font-mono">SERVICES</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black text-purple-400">CM</div>
                                <div className="text-xs text-gray-500 font-mono">BASED_IN</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black text-pink-400">24/7</div>
                                <div className="text-xs text-gray-500 font-mono">SUPPORT</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black text-green-400">∞</div>
                                <div className="text-xs text-gray-500 font-mono">INNOVATION</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default XyberClanBit
