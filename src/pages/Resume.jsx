import React from 'react'
import { FaArrowLeft, FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa'

const Resume = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Cursor Flashlight Effect */}
            <div
                className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
                style={{
                    background: `radial-gradient(circle 600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6,182,212,0.15), transparent 80%)`
                }}
            />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-gray-800 z-40">
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
                    {/* Profile Photo */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            {/* Animated gradient border */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-gradient-xy"></div>

                            {/* Photo container */}
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-black bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl">
                                {/* Placeholder - Replace with your photo */}
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                                    <div className="text-center">
                                        <div className="text-6xl mb-2">👤</div>
                                        <p className="text-xs text-gray-500 font-mono">YOUR_PHOTO</p>
                                    </div>
                                </div>

                                {/* Uncomment and use this when you have a photo */}
                                {/* <img 
                  src="/path/to/your/photo.jpg" 
                  alt="Josias Aaron" 
                  className="w-full h-full object-cover"
                /> */}
                            </div>

                            {/* Corner accent */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                    </div>

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

                {/* My Story - Origin */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <FaLightbulb className="text-3xl text-yellow-400" />
                        <h2 className="text-4xl font-bold text-white">THE_SPARK</h2>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                        <p className="text-gray-300 leading-relaxed mb-4">
                            <span className="text-yellow-400 font-bold">It all started with curiosity.</span> As a kid, I was fascinated by how things worked—not just accepting them as they were, but wanting to understand the "why" and "how" behind everything.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            My first encounter with technology wasn't through a computer, but through <span className="text-cyan-400 font-mono">taking things apart</span>. Old radios, broken electronics, anything I could get my hands on. I wanted to see what made them tick.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            That curiosity evolved when I got my first computer. I didn't just want to use it—I wanted to <span className="text-purple-400 font-mono">control it</span>, <span className="text-cyan-400 font-mono">understand it</span>, and eventually, <span className="text-pink-400 font-mono">break it</span> (in the best way possible).
                        </p>
                    </div>
                </section>

                {/* Journey Timeline */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                            <FaRocket className="text-3xl text-cyan-400" />
                            <h2 className="text-4xl font-bold text-white">THE_JOURNEY</h2>
                        </div>
                        <a
                            href="/progression"
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center gap-2"
                        >
                            <FaRocket className="text-lg" />
                            <span>SEE_ALL_MY_PROGRESSION</span>
                        </a>
                    </div>

                    <div className="space-y-8">
                        {/* Chapter 1 */}
                        <div className="relative pl-8 border-l-2 border-cyan-400">
                            <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-cyan-400"></div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">First Lines of Code</h3>
                            <p className="text-gray-400 font-mono text-sm mb-3">Early Days • Self-Taught</p>
                            <p className="text-gray-300 leading-relaxed mb-3">
                                I wrote my first "Hello World" in <span className="text-cyan-400 font-mono">Python</span>. It was magical—I could make the computer do what I wanted with just text. From there, I dove deep into programming, spending countless nights learning, breaking things, and fixing them.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                <span className="text-yellow-400">Key Moment:</span> Built my first game—a simple text-based adventure. It wasn't much, but it was <span className="font-bold">mine</span>.
                            </p>
                        </div>

                        {/* Chapter 2 */}
                        <div className="relative pl-8 border-l-2 border-purple-400">
                            <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-purple-400"></div>
                            <h3 className="text-2xl font-bold text-purple-400 mb-2">Discovering Security</h3>
                            <p className="text-gray-400 font-mono text-sm mb-3">The Turning Point</p>
                            <p className="text-gray-300 leading-relaxed mb-3">
                                One day, I stumbled upon a video about <span className="text-purple-400 font-mono">ethical hacking</span>. Watching someone break into a system (legally) and explain vulnerabilities blew my mind. I realized: <span className="font-bold">I wanted to be on both sides—building and breaking</span>.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                <span className="text-yellow-400">Inspiration:</span> Watching talks from security researchers and CTF champions showed me that hacking isn't just about breaking—it's about <span className="text-cyan-400">understanding systems at their core</span>.
                            </p>
                        </div>

                        {/* Chapter 3 */}
                        <div className="relative pl-8 border-l-2 border-pink-400">
                            <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-pink-400"></div>
                            <h3 className="text-2xl font-bold text-pink-400 mb-2">Building & Breaking</h3>
                            <p className="text-gray-400 font-mono text-sm mb-3">Present Day</p>
                            <p className="text-gray-300 leading-relaxed mb-3">
                                Now, I split my time between <span className="text-cyan-400 font-mono">creating</span> and <span className="text-pink-400 font-mono">destroying</span> (ethically). As a Full Stack Developer, I build scalable applications. As a Red Teamer, I break them to make them stronger.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                <span className="text-yellow-400">Philosophy:</span> "I constantly evolve and adapt—that is my philosophy. That is why I am <span className="text-white font-bold">ALMIGHT</span>."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Inspirations */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <FaHeart className="text-3xl text-pink-400" />
                        <h2 className="text-4xl font-bold text-white">WHO_INSPIRED_ME</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-black/40 backdrop-blur-xl border border-cyan-400/30 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-cyan-400 mb-3">The Builders</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Developers who create beautiful, functional systems. Those who see code as art and engineering as craft. They taught me that <span className="text-cyan-400">elegance matters</span>.
                            </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-xl border border-purple-400/30 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-purple-400 mb-3">The Breakers</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Security researchers who think differently. Those who see vulnerabilities where others see features. They showed me that <span className="text-purple-400">curiosity is power</span>.
                            </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-xl border border-pink-400/30 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-pink-400 mb-3">The Innovators</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Visionaries who push boundaries. Those who don't accept "that's how it's always been done." They inspired me to <span className="text-pink-400">challenge everything</span>.
                            </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-xl border border-orange-400/30 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-orange-400 mb-3">The Community</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Open-source contributors, mentors, and fellow learners. Those who share knowledge freely. They reminded me that <span className="text-orange-400">we grow together</span>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills & Experience */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">TECHNICAL_ARSENAL</h2>

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

                {/* Current Focus */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">CURRENT_FOCUS</h2>

                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Right now, I'm focused on bridging the gap between <span className="text-cyan-400 font-mono">imagination</span> and <span className="text-purple-400 font-mono">execution</span>.
                        </p>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">▸</span>
                                <span>Building immersive 3D experiences and game development projects</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1">▸</span>
                                <span>Analyzing system vulnerabilities and improving security protocols</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-400 mt-1">▸</span>
                                <span>Contributing to open-source security tools and frameworks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-400 mt-1">▸</span>
                                <span>Constantly evolving and adapting—because that's what ALMIGHT does</span>
                            </li>
                        </ul>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-6">
                <div className="max-w-5xl mx-auto px-6 text-center text-gray-500 font-mono text-sm">
                    © 2025 JOSIAS AARON (ALMIGHT). CONSTANTLY EVOLVING.
                </div>
            </footer>
        </div>
    )
}

export default Resume
