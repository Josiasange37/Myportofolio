import React, { useEffect } from 'react'
import { FaArrowLeft, FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaEnvelope, FaLightbulb, FaRocket, FaHeart, FaCertificate, FaPrint, FaTelegram, FaCode, FaShieldAlt } from 'react-icons/fa'
import { personalInfo, socialLinks, xyberclan, education, skills, certifications } from '../config/siteConfig'

import { useBot } from '../context/BotContext';

const Resume = () => {
    const { setCurrentSection } = useBot();

    useEffect(() => {
        setCurrentSection('resume');
    }, [setCurrentSection]);

    return (
        <div className="min-h-screen bg-black text-white print:bg-white print:text-black selection:bg-cyan-500/30">
            <style>{`
                @media print {
                    @page { margin: 1cm; size: auto; }
                    body { 
                        background: white !important; 
                        color: black !important; 
                        -webkit-print-color-adjust: exact !important; 
                        print-color-adjust: exact !important; 
                    }
                    .print-hidden { display: none !important; }
                    .print-break-inside { break-inside: avoid; }
                    /* Reset specific overrides that might persist */
                    * {
                        text-shadow: none !important;
                        box-shadow: none !important;
                        background-image: none !important; /* Remove gradient backgrounds */
                    }
                }
            `}</style>

            {/* Cursor Flashlight Effect - Hidden on Print */}
            <div
                className="fixed inset-0 pointer-events-none z-50 mix-blend-screen print:hidden"
                style={{
                    background: `radial-gradient(circle 600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6,182,212,0.15), transparent 80%)`
                }}
            />

            {/* Header - Hidden on Print */}
            <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-white/10 z-40 print:hidden transition-all duration-300">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-sm tracking-widest">BACK_TO_PORTFOLIO</span>
                    </a>
                    <button
                        onClick={() => window.print()}
                        className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-white font-mono text-xs tracking-wider rounded-lg transition-all duration-300 flex items-center gap-2 group"
                    >
                        <FaPrint className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        <span>PRINT_RESUME</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 print:pt-0 print:pb-0 print:px-0 print:max-w-full">

                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-20 print:mb-8 print:flex-row print:gap-8 print:items-center print:border-b print:border-gray-200 print:pb-8">
                    {/* Profile Photo */}
                    <div className="relative group shrink-0 print:order-2">
                        {/* Animated Ring - Hidden on Print */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-50 group-hover:opacity-100 blur transition-all duration-500 print:hidden"></div>

                        <div className="relative w-48 h-48 print:w-32 print:h-32 rounded-full overflow-hidden border-4 border-black print:border-gray-300 bg-black print:bg-transparent">
                            <img
                                src="/profile.webp"
                                alt={personalInfo.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left flex-1 print:text-left print:order-1">
                        <h1 className="text-6xl md:text-7xl print:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 print:text-black print:bg-none tracking-tight">
                            {personalInfo.name}
                        </h1>
                        <p className="text-2xl text-cyan-400 print:text-cyan-600 font-mono mb-2 tracking-wide font-bold">{personalInfo.pseudo}</p>
                        <p className="text-xl text-gray-400 print:text-gray-700 mb-4 font-light tracking-wide">{personalInfo.title} <span className="text-gray-600 print:hidden">|</span> <span className="block md:inline text-purple-400 print:text-purple-600 font-medium">{xyberclan.role} @ {xyberclan.company}</span></p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-mono text-gray-500 print:text-gray-600 mb-8 print:mb-4">
                            <span>{education.institution}</span>
                            <span className="text-gray-700 mx-2">•</span>
                            <span>Class of {education.expectedGraduation}</span>
                        </div>

                        {/* Contact Links */}
                        <div className="flex justify-center md:justify-start gap-6 print:justify-start flex-wrap">
                            {socialLinks.github && (
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white print:text-black transition-colors flex items-center gap-2 group">
                                    <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                                    <span className="hidden print:inline text-sm">{socialLinks.github.replace('https://', '')}</span>
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 print:text-black transition-colors flex items-center gap-2 group">
                                    <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                                    <span className="hidden print:inline text-sm">LinkedIn</span>
                                </a>
                            )}

                            {socialLinks.email && (
                                <a href={`mailto:${socialLinks.email}`} className="text-gray-400 hover:text-purple-400 print:text-black transition-colors flex items-center gap-2 group">
                                    <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
                                    <span className="hidden print:inline text-sm">{socialLinks.email}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Two Column Layout for Resume Body */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 print:block">

                    {/* Left Column (Main Content) */}
                    <div className="lg:col-span-2 space-y-16 print:space-y-8">

                        {/* My Story */}
                        <section className="print:mb-6 print:break-inside-avoid">
                            <div className="flex items-center gap-4 mb-8 print:mb-4">
                                <span className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full print:bg-yellow-600 print:from-transparent"></span>
                                <h2 className="text-2xl font-bold tracking-widest text-white print:text-black uppercase">The Executive Summary</h2>
                            </div>

                            <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm print:bg-transparent print:border-none print:p-0">
                                <p className="text-gray-300 print:text-black leading-relaxed mb-6 font-light text-lg">
                                    <span className="text-yellow-400 print:text-yellow-700 font-semibold">Driven by innovation and security.</span> My career is built on the convergence of offensive security operations and scalable software architecture. I don't just build systems; I engineer them to withstand modern threats while delivering exceptional user experiences.
                                </p>
                                <p className="text-gray-300 print:text-black leading-relaxed font-light text-lg">
                                    Currently acting as <span className="text-purple-400 print:text-purple-700 font-mono">CTO of XyberClan</span>, I lead technical strategy and red team operations, bridging the critical gap between business objectives and secure technical execution.
                                </p>
                            </div>
                        </section>

                        {/* Experience / Journey */}
                        <section className="print:mb-6">
                            <div className="flex items-center justify-between mb-8 print:mb-4">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full print:bg-cyan-600 print:from-transparent"></span>
                                    <h2 className="text-2xl font-bold tracking-widest text-white print:text-black uppercase">Professional Trajectory</h2>
                                </div>
                                <a
                                    href="/progression"
                                    className="text-cyan-400 hover:text-white font-mono text-xs tracking-wider border-b border-cyan-400/30 hover:border-cyan-400 transition-all pb-1 print:hidden"
                                >
                                    VIEW FULL TIMELINE →
                                </a>
                            </div>

                            <div className="space-y-12 print:space-y-6 pl-4 border-l border-white/10 print:border-gray-300 ml-4">
                                {/* Timeline Item 1 */}
                                <div className="relative pl-8 print:break-inside-avoid">
                                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-black border-2 border-cyan-500 print:border-cyan-600"></div>
                                    <h3 className="text-xl font-bold text-white print:text-black mb-1">CTO & Red Team Lead</h3>
                                    <p className="text-cyan-400 print:text-cyan-700 font-mono text-xs mb-4">2024 - Present • XyberClan</p>
                                    <p className="text-gray-400 print:text-gray-700 font-light leading-relaxed">
                                        Spearheading technical direction and security posture. Leading red team engagements (penetration testing, social engineering) and overseeing the development of secure SaaS products.
                                    </p>
                                </div>

                                {/* Timeline Item 2 */}
                                <div className="relative pl-8 print:break-inside-avoid">
                                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-black border-2 border-purple-500 print:border-purple-600"></div>
                                    <h3 className="text-xl font-bold text-white print:text-black mb-1">Senior Full Stack Developer</h3>
                                    <p className="text-purple-400 print:text-purple-700 font-mono text-xs mb-4">2023 • Freelance / Contract</p>
                                    <p className="text-gray-400 print:text-gray-700 font-light leading-relaxed">
                                        Architected cloud-native web applications using Next.js and AWS. Implemented CI/CD pipelines and mentored junior developers in clean code practices.
                                    </p>
                                </div>

                                {/* Timeline Item 3 */}
                                <div className="relative pl-8 print:break-inside-avoid">
                                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-black border-2 border-white/50 print:border-gray-600"></div>
                                    <h3 className="text-xl font-bold text-white print:text-black mb-1">Ethical Hacking Immersion</h3>
                                    <p className="text-gray-500 print:text-gray-600 font-mono text-xs mb-4">2020 • Independent Researcher</p>
                                    <p className="text-gray-400 print:text-gray-700 font-light leading-relaxed">
                                        Transitioned focus to offensive security. Conducted vulnerability assessments and participated in competitive CTFs, refining skills in network exploitation and web app security.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Right Column (Skills & Meta) */}
                    <div className="space-y-16 print:space-y-8">

                        {/* Skills */}
                        <section className="print:break-inside-avoid">
                            <h2 className="text-sm font-bold tracking-widest text-gray-500 print:text-gray-600 uppercase mb-6 border-b border-gray-800 pb-2 print:border-gray-300">Technical Arsenal</h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-cyan-400 print:text-cyan-700 font-mono text-sm mb-4 flex items-center gap-2">
                                        <FaShieldAlt /> RED_TEAMING
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.redTeaming.map(skill => (
                                            <span key={skill.name} className="px-3 py-1 bg-cyan-900/20 text-cyan-200 text-xs rounded border border-cyan-500/20 print:bg-white print:text-black print:border-gray-300 print:font-semibold">
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-purple-400 print:text-purple-700 font-mono text-sm mb-4 flex items-center gap-2">
                                        <FaCode /> DEVELOPMENT
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.programming.map(skill => (
                                            <span key={skill.name} className="px-3 py-1 bg-purple-900/20 text-purple-200 text-xs rounded border border-purple-500/20 print:bg-white print:text-black print:border-gray-300 print:font-semibold">
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Certifications */}
                        <section className="print:break-inside-avoid">
                            <h2 className="text-sm font-bold tracking-widest text-gray-500 print:text-gray-600 uppercase mb-6 border-b border-gray-800 pb-2 print:border-gray-300">Certifications</h2>

                            <div className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-white/10 print:bg-white print:border-gray-200 print:p-2">
                                        <div className="mt-1 text-orange-400 print:text-orange-600">
                                            <FaCertificate />
                                        </div>
                                        <div>
                                            <h4 className="text-white print:text-black font-bold text-sm group-hover:text-orange-400 transition-colors">{cert.name}</h4>
                                            <p className="text-gray-500 print:text-gray-600 text-xs mt-1">{cert.issuer} • {cert.date}</p>
                                            {cert.verifyUrl && (
                                                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] text-orange-400/80 hover:text-orange-400 mt-2 block uppercase tracking-wider print:text-orange-700">
                                                    Verify Credential
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Philosophy */}
                        <section className="print:break-inside-avoid">
                            <h2 className="text-sm font-bold tracking-widest text-gray-500 print:text-gray-600 uppercase mb-6 border-b border-gray-800 pb-2 print:border-gray-300">Philosophy</h2>
                            <blockquote className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 print:bg-white print:border-gray-200">
                                <FaLightbulb className="absolute top-4 right-4 text-gray-700 text-xl print:hidden" />
                                <p className="text-gray-400 print:text-black italic font-light leading-relaxed mb-4">
                                    "{personalInfo.philosophy}"
                                </p>
                                <footer className="text-right">
                                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-sm print:text-black print:bg-none">
                                        — {personalInfo.pseudo}
                                    </p>
                                </footer>
                            </blockquote>
                        </section>

                    </div>
                </div>

            </main>

            {/* Print Footer */}
            <footer className="hidden print:block text-center text-xs text-gray-500 mt-8 pt-4 border-t border-gray-200">
                <p>Resume of {personalInfo.name} • Generated from Portfolio</p>
            </footer>
        </div>
    )
}

export default Resume
