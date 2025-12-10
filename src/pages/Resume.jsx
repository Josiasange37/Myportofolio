import React from 'react'
import { FaArrowLeft, FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Resume = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-gray-800 z-50">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        <FaArrowLeft />
                        <span className="font-mono">BACK_TO_PORTFOLIO</span>
                    </a>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                        <FaDownload />
                        <span>DOWNLOAD_PDF</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 pt-24 pb-12">

                {/* Hero */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-black mb-4 text-white" style={{ textShadow: '0 0 40px rgba(6,182,212,0.5)' }}>
                        JOSIAS AARON
                    </h1>
                    <p className="text-2xl text-cyan-400 font-mono mb-4">ALMIGHT</p>
                    <p className="text-xl text-gray-400 mb-6">Red Teamer & Full Stack Developer</p>

                    {/* Contact Links */}
                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/Josiasange37" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                            <FaGithub className="text-2xl" />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="mailto:hello@xyberclan.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                            <FaEnvelope className="text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Summary */}
                <section className="mb-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">PROFESSIONAL_SUMMARY</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I bridge the gap between <span className="text-cyan-400 font-mono">imagination</span> and <span className="text-purple-400 font-mono">execution</span>.
                        As a Red Teamer and Full Stack Developer, I specialize in analyzing system vulnerabilities, breaking security protocols (legally),
                        and building immersive digital experiences. My code isn't just syntax; it's a digital architecture designed to scale, perform, and mesmerize.
                    </p>
                </section>

                {/* Experience */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-white">WORK_EXPERIENCE</h2>

                    <div className="space-y-8">
                        {/* Add your work experience here */}
                        <div className="border-l-2 border-cyan-400 pl-6">
                            <h3 className="text-xl font-bold text-cyan-400">Red Team Specialist</h3>
                            <p className="text-gray-400 font-mono text-sm mb-2">Company Name • 2023 - Present</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Conducted penetration testing and vulnerability assessments</li>
                                <li>Developed custom exploitation tools and security frameworks</li>
                                <li>Analyzed and broke security protocols to improve system defenses</li>
                            </ul>
                        </div>

                        <div className="border-l-2 border-purple-400 pl-6">
                            <h3 className="text-xl font-bold text-purple-400">Full Stack Developer</h3>
                            <p className="text-gray-400 font-mono text-sm mb-2">Company Name • 2021 - 2023</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Built scalable web applications using React, Node.js, and modern frameworks</li>
                                <li>Developed immersive 3D experiences and game development projects</li>
                                <li>Implemented secure authentication and data protection systems</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-white">TECHNICAL_SKILLS</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">Security & Red Teaming</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Web App Security', 'Social Engineering', 'Malware Analysis'].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'TypeScript', 'Node.js', 'Python', 'Three.js', 'Next.js', 'C/C++', 'Bash'].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-white">EDUCATION</h2>

                    <div className="bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white">Computer Science / Cybersecurity</h3>
                        <p className="text-gray-400 font-mono text-sm mb-2">University Name • Year</p>
                        <p className="text-gray-300">Specialized in cybersecurity, software engineering, and system architecture</p>
                    </div>
                </section>

                {/* Certifications */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-white">CERTIFICATIONS</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['CEH - Certified Ethical Hacker', 'OSCP - Offensive Security', 'CompTIA Security+', 'AWS Certified'].map(cert => (
                            <div key={cert} className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-gray-700/50 rounded-lg p-4">
                                <p className="text-white font-mono">{cert}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-6">
                <div className="max-w-5xl mx-auto px-6 text-center text-gray-500 font-mono text-sm">
                    © 2025 JOSIAS AARON (ALMIGHT). ALL RIGHTS RESERVED.
                </div>
            </footer>
        </div>
    )
}

export default Resume
