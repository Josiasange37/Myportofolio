import React from 'react'
import { FaArrowLeft, FaPrint, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaCertificate } from 'react-icons/fa'
import { SiTypescript, SiReact, SiPython, SiNextdotjs } from 'react-icons/si'

const CV = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 print:bg-white">
            {/* Header - Hidden in print */}
            <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 print:hidden">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-cyan-600 hover:text-cyan-500 transition-colors"
                    >
                        <FaArrowLeft />
                        <span className="font-mono">BACK_TO_PORTFOLIO</span>
                    </a>
                    <button
                        onClick={() => window.print()}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                        <FaPrint />
                        <span>PRINT_CV</span>
                    </button>
                </div>
            </header>

            {/* CV Content */}
            <main className="max-w-4xl mx-auto px-8 pt-24 pb-12 print:pt-0 print:px-0">

                {/* Header Section */}
                <div className="border-b-2 border-cyan-500 pb-6 mb-6">
                    <div className="flex items-start gap-6">
                        {/* Photo */}
                        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-500 flex-shrink-0 print:w-24 print:h-24">
                            <img
                                src="/profile.png"
                                alt="Josias Aaron"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900 mb-1 print:text-2xl">
                                AKANA SIGNING JOSIAS AARON
                            </h1>
                            <p className="text-lg text-cyan-600 font-semibold mb-2">
                                Red Teamer | Full Stack Developer | CTO @ XyberClan
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-3">
                                <a href="mailto:josiasange37@gmail.com" className="flex items-center gap-1 hover:text-cyan-600">
                                    <FaEnvelope /> josiasange37@gmail.com
                                </a>
                                <a href="https://github.com/Josiasange37" className="flex items-center gap-1 hover:text-cyan-600">
                                    <FaGithub /> Josiasange37
                                </a>
                                <a href="https://linkedin.com/in/thealmight" className="flex items-center gap-1 hover:text-cyan-600">
                                    <FaLinkedin /> thealmight
                                </a>
                                <span className="flex items-center gap-1">
                                    <FaMapMarkerAlt /> Yaoundé, Cameroon
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">
                        Professional Summary
                    </h2>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Passionate Red Teamer and Full Stack Developer with expertise in cybersecurity, web development, and emerging technologies.
                        Currently serving as CTO of XyberClan, leading digital innovation in Cameroon.
                        Strong background in penetration testing, vulnerability assessment, and modern web frameworks.
                        Philosophy: "I constantly evolve and adapt — that is why I am ALMIGHT."
                    </p>
                </section>

                {/* Two Column Layout */}
                <div className="grid grid-cols-3 gap-6">
                    {/* Left Column - 2/3 width */}
                    <div className="col-span-2 space-y-6">

                        {/* Experience */}
                        <section>
                            <h2 className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
                                Experience
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-gray-900">Chief Technology Officer (CTO)</h3>
                                            <p className="text-cyan-600 font-medium">XyberClan</p>
                                        </div>
                                        <span className="text-sm text-gray-500">2024 - Present</span>
                                    </div>
                                    <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                                        <li>Leading technical strategy for web development, mobile apps, and cybersecurity services</li>
                                        <li>Developed XyberClan SaaS website using React and Next.js</li>
                                        <li>Managing tech education initiatives and team development</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-gray-900">Red Team Security Researcher</h3>
                                            <p className="text-cyan-600 font-medium">Independent</p>
                                        </div>
                                        <span className="text-sm text-gray-500">2023 - Present</span>
                                    </div>
                                    <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                                        <li>Conducting penetration testing and vulnerability assessments</li>
                                        <li>Developing security tools and automation scripts</li>
                                        <li>Practicing ethical hacking on CTF platforms</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
                                Key Projects
                            </h2>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="p-3 bg-gray-50 rounded">
                                    <h4 className="font-bold text-gray-900">Aegis AI</h4>
                                    <p className="text-gray-600">Blue Team AI Assistant for cybersecurity defense</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded">
                                    <h4 className="font-bold text-gray-900">XyberClan SaaS</h4>
                                    <p className="text-gray-600">Full-stack React/Next.js business platform</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded">
                                    <h4 className="font-bold text-gray-900">Call of Ngoa</h4>
                                    <p className="text-gray-600">Unity game development with C#</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded">
                                    <h4 className="font-bold text-gray-900">Almight Tracer</h4>
                                    <p className="text-gray-600">Tracking tool built with Bash & PHP</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column - 1/3 width */}
                    <div className="space-y-6">

                        {/* Education */}
                        <section>
                            <h2 className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
                                Education
                            </h2>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm">University of Yaoundé I</h3>
                                <p className="text-sm text-gray-600">Computer Science</p>
                                <p className="text-sm text-gray-500">Expected 2027</p>
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h2 className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
                                Technical Skills
                            </h2>
                            <div className="space-y-2 text-sm">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Programming</h4>
                                    <p className="text-gray-600">Python, JavaScript, TypeScript, C, C#, Java, Bash, Assembly</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Frameworks</h4>
                                    <p className="text-gray-600">React, Next.js, Node.js, Three.js, Unity</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Security</h4>
                                    <p className="text-gray-600">Penetration Testing, OWASP, Network Security, Malware Analysis</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Tools</h4>
                                    <p className="text-gray-600">Kali Linux, Metasploit, Burp Suite, Wireshark, Nmap</p>
                                </div>
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <h2 className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
                                Certifications
                            </h2>
                            <ul className="text-sm space-y-2">
                                <li className="flex items-start gap-2">
                                    <FaCertificate className="text-cyan-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">IoT Wireless & Cloud</p>
                                        <p className="text-gray-500 text-xs">Yonsei University / Coursera</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCertificate className="text-cyan-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">NASA Space Apps</p>
                                        <p className="text-gray-500 text-xs">Galactic Problem Solver</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCertificate className="text-cyan-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Google Cloud</p>
                                        <p className="text-gray-500 text-xs">Cloud Training / Coursera</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCertificate className="text-cyan-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Cybrary</p>
                                        <p className="text-gray-500 text-xs">Cybersecurity Orientation</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* Languages */}
                        <section>
                            <h2 className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
                                Languages
                            </h2>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>English (Fluent)</li>
                                <li>French (Native)</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>

            {/* Print Styles */}
            <style>{`
                @media print {
                    body { 
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    @page {
                        margin: 0.5in;
                        size: A4;
                    }
                }
            `}</style>
        </div>
    )
}

export default CV
