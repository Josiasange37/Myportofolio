import React, { useMemo } from 'react'
import { FaGraduationCap, FaUniversity, FaCheck, FaSpinner, FaCalendar } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { education } from '../config/siteConfig'

const EducationStatusBit = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.2)
    const [contentRef, contentVisible] = useScrollAnimation(0.2)

    // Calculate current status based on date
    const currentStatus = useMemo(() => {
        const now = new Date()
        let current = education.milestones[0]

        for (let i = education.milestones.length - 1; i >= 0; i--) {
            const milestone = education.milestones[i]
            if (now >= new Date(milestone.date)) {
                current = milestone
                break
            }
        }
        return current
    }, [])

    // Calculate progress percentage
    const progressPercentage = useMemo(() => {
        const currentIndex = education.milestones.findIndex(m => m.level === currentStatus.level)
        return ((currentIndex + 1) / education.milestones.length) * 100
    }, [currentStatus])

    // Calculate time until graduation
    const timeUntilGraduation = useMemo(() => {
        const now = new Date()
        const graduationDate = new Date(education.milestones[education.milestones.length - 1].date)
        const diff = graduationDate - now

        if (diff <= 0) return { text: 'Graduated!', complete: true }

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))

        if (years > 0) {
            return { text: `${years}y ${months}m until graduation`, complete: false }
        }
        return { text: `${months} months until graduation`, complete: false }
    }, [])

    return (
        <section className="w-full relative py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-12 scroll-hidden ${headerVisible ? 'animate-fade-in-down' : ''}`}
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <FaUniversity className="text-3xl text-purple-400" />
                        <h2 className="text-2xl sm:text-4xl font-black text-white">
                            EDUCATION_STATUS
                        </h2>
                    </div>
                    <p className="text-gray-400 font-mono text-xs sm:text-sm tracking-widest">
                        &lt; REAL_TIME_PROGRESSION /&gt;
                    </p>
                </div>

                {/* Current Status Card */}
                <div
                    ref={contentRef}
                    className={`scroll-hidden ${contentVisible ? 'animate-fade-in-up' : ''}`}
                >
                    <div className="bg-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                        {/* Institution */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <FaGraduationCap className="text-3xl text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{education.institution}</h3>
                                <p className="text-gray-400 text-sm">{education.field}</p>
                            </div>
                        </div>

                        {/* Current Level */}
                        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl p-6 mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400 text-sm font-mono">CURRENT_LEVEL</span>
                                <span className="text-cyan-400 font-mono text-sm flex items-center gap-2">
                                    {timeUntilGraduation.complete ? (
                                        <FaCheck className="text-green-400" />
                                    ) : (
                                        <FaSpinner className="animate-spin text-purple-400" />
                                    )}
                                    {currentStatus.status}
                                </span>
                            </div>
                            <h4 className="text-3xl font-black text-white mb-2">{currentStatus.level}</h4>
                            <p className="text-gray-300 text-sm">{currentStatus.description}</p>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400 text-xs font-mono">PROGRESS</span>
                                <span className="text-cyan-400 text-xs font-mono">{Math.round(progressPercentage)}%</span>
                            </div>
                            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full transition-all duration-1000"
                                    style={{ width: `${progressPercentage}%` }}
                                />
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-4">
                            <span className="text-gray-400 text-xs font-mono">MILESTONES</span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {education.milestones.map((milestone, index) => {
                                    const now = new Date()
                                    const milestoneDate = new Date(milestone.date)
                                    const isPast = now >= milestoneDate
                                    const isCurrent = milestone.level === currentStatus.level

                                    return (
                                        <div
                                            key={index}
                                            className={`relative p-3 rounded-lg border transition-all duration-300 ${isCurrent
                                                    ? 'border-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                                                    : isPast
                                                        ? 'border-purple-500/50 bg-purple-500/10'
                                                        : 'border-gray-700 bg-gray-900/50'
                                                }`}
                                        >
                                            <div className={`text-lg font-bold mb-1 ${isCurrent ? 'text-cyan-400' : isPast ? 'text-purple-400' : 'text-gray-500'}`}>
                                                {milestone.level}
                                            </div>
                                            <div className="text-xs text-gray-500 font-mono flex items-center gap-1">
                                                <FaCalendar className="text-[10px]" />
                                                {new Date(milestone.date).getFullYear()}
                                            </div>
                                            {isPast && (
                                                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                                                    <FaCheck className="text-[10px] text-white" />
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Countdown */}
                        <div className="mt-6 text-center">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${timeUntilGraduation.complete
                                    ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                                    : 'bg-purple-500/20 border border-purple-500/50 text-purple-400'
                                }`}>
                                <FaCalendar />
                                <span className="font-mono text-sm">{timeUntilGraduation.text}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationStatusBit
