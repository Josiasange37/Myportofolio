import React, { useState } from 'react'
import { FaCertificate, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const certificationsData = [
    {
        id: 1,
        name: 'IoT (Internet of Things) Wireless & Cloud Computing',
        issuer: 'Yonsei University',
        platform: 'Coursera',
        date: 'September 2025',
        image: '/certifications/yonsei-iot.png',
        verifyUrl: 'https://coursera.org/verify/WWYVHCNOZRUL',
        color: '#0056A4',
        description: 'Emerging Technologies in wireless and cloud computing for IoT applications'
    },
    {
        id: 2,
        name: 'NASA Space Apps Challenge - Galactic Problem Solver',
        issuer: 'NASA',
        platform: 'International Space Apps Challenge',
        date: 'October 2025',
        image: '/certifications/nasa-space-apps.png',
        verifyUrl: null,
        color: '#0B3D91',
        description: 'Outstanding participation and efforts to address challenges on Earth and in space'
    },
    {
        id: 3,
        name: 'Google Cloud Training',
        issuer: 'Google Cloud',
        platform: 'Coursera',
        date: 'September 2025',
        image: '/certifications/google-cloud.png',
        verifyUrl: 'https://coursera.org/verify/MHBHPANNZU6V',
        color: '#4285F4',
        description: 'Gmail and Google Cloud fundamentals authorization'
    },
    {
        id: 4,
        name: 'Cybrary Orientation',
        issuer: 'Cybrary',
        platform: 'Cybrary',
        date: 'May 2025',
        image: '/certifications/cybrary.png',
        verifyUrl: null,
        color: '#00D09C',
        description: 'Certificate of Continuing Education Completion in Cybersecurity'
    }
]

const CertificationCard = ({ cert, index, onClick }) => {
    const [cardRef, cardVisible] = useScrollAnimation(0.1)

    return (
        <div
            ref={cardRef}
            onClick={() => onClick(cert)}
            className={`scroll-hidden ${cardVisible ? 'animate-fade-in-up' : ''} cursor-pointer group`}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            {/* Card */}
            <div className="relative bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover-lift">
                {/* Image Preview */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {/* Badge */}
                    <div
                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: cert.color }}
                    >
                        {cert.platform}
                    </div>

                    {/* View indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="px-3 py-1 bg-cyan-500 rounded-full text-xs text-white font-mono">
                            CLICK_TO_VIEW
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: cert.color + '20', color: cert.color }}
                        >
                            <FaCertificate className="text-lg" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white font-bold text-sm leading-tight group-hover:text-cyan-400 transition-colors line-clamp-2">
                                {cert.name}
                            </h3>
                            <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs font-mono">{cert.date}</span>
                        {cert.verifyUrl && (
                            <span className="text-cyan-400 text-xs flex items-center gap-1">
                                <FaExternalLinkAlt className="text-[10px]" />
                                Verified
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const CertificationModal = ({ cert, onClose }) => {
    if (!cert) return null

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-appear"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-zinc-900 border border-cyan-400/30 rounded-2xl shadow-[0_0_60px_rgba(6,182,212,0.3)]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/80 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 transition-colors"
                >
                    <FaTimes />
                </button>

                {/* Certificate Image */}
                <div className="p-4">
                    <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* Details */}
                <div className="p-6 border-t border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-400 mb-4">{cert.description}</p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm">Issued by:</span>
                            <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm">Date:</span>
                            <span className="text-white">{cert.date}</span>
                        </div>
                    </div>

                    {cert.verifyUrl && (
                        <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105"
                        >
                            <FaExternalLinkAlt />
                            VERIFY_CERTIFICATE
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

const CertificationsBit = () => {
    const [selectedCert, setSelectedCert] = useState(null)
    const [headerRef, headerVisible] = useScrollAnimation(0.2)

    return (
        <section className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-b from-black via-blue-950/10 to-black py-20">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(6,182,212,0.08),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(168,85,247,0.08),_transparent_50%)]" />

            <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-12 sm:mb-16 scroll-hidden ${headerVisible ? 'animate-fade-in-down' : ''}`}
                >
                    <h2
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-4 text-white px-4"
                        style={{ textShadow: '0 0 40px rgba(6,182,212,0.5), 0 0 80px rgba(168,85,247,0.3)' }}
                    >
                        CERTIFICATIONS
                    </h2>
                    <p className="text-gray-400 font-mono text-xs sm:text-sm tracking-widest px-4">
                        &lt; VERIFIED_CREDENTIALS /&gt;
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificationsData.map((cert, index) => (
                        <CertificationCard
                            key={cert.id}
                            cert={cert}
                            index={index}
                            onClick={setSelectedCert}
                        />
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-12 flex justify-center gap-8 flex-wrap">
                    <div className="text-center">
                        <div className="text-3xl font-black text-cyan-400">{certificationsData.length}</div>
                        <div className="text-xs text-gray-500 font-mono">CERTIFICATIONS</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-black text-purple-400">4</div>
                        <div className="text-xs text-gray-500 font-mono">PLATFORMS</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-black text-pink-400">2025</div>
                        <div className="text-xs text-gray-500 font-mono">ACTIVE_YEAR</div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedCert && (
                <CertificationModal
                    cert={selectedCert}
                    onClose={() => setSelectedCert(null)}
                />
            )}
        </section>
    )
}

export default CertificationsBit
