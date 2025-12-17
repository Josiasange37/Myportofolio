import React from 'react'
import { FaMusic, FaDumbbell, FaCode, FaBasketballBall, FaGamepad, FaBook, FaCamera, FaGuitar } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HobbyCard = ({ icon: Icon, title, description, index, color, bgGradient }) => {
  const [cardRef, cardVisible] = useScrollAnimation(0.1)

  return (
    <div
      ref={cardRef}
      className={`scroll-hidden ${cardVisible ? 'animate-fade-in-up' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="group relative h-full">
        {/* Animated glow */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 animate-gradient-xy`}></div>

        {/* Card */}
        <div className={`relative h-full bg-gradient-to-br ${bgGradient} backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 sm:p-6 transition-all duration-300 group-hover:scale-105 overflow-hidden`}>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            <div className={`w-14 sm:w-20 h-14 sm:h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 sm:mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
              <Icon className="text-3xl sm:text-4xl text-white" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Decorative corner */}
          <div className={`absolute top-0 right-0 w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-br ${color} opacity-10 rounded-bl-full`}></div>
        </div>
      </div>
    </div>
  )
}

const HobbiesBit = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)

  const hobbies = [
    {
      icon: FaMusic,
      title: 'Piano',
      description: 'Creating melodies and expressing emotions through music. Classical pieces and modern compositions.',
      color: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10'
    },
    {
      icon: FaDumbbell,
      title: 'Calisthenics',
      description: 'Building strength and discipline through bodyweight training. Mind and body in perfect harmony.',
      color: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/10 to-blue-500/10'
    },
    {
      icon: FaCode,
      title: 'Coding',
      description: 'Crafting elegant solutions and exploring new technologies. Turning ideas into reality through code.',
      color: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-500/10 to-violet-500/10'
    },
    {
      icon: FaBasketballBall,
      title: 'Basketball',
      description: 'Teamwork, strategy, and athletic excellence. The thrill of competition and camaraderie.',
      color: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-500/10 to-amber-500/10'
    }
  ]

  return (
    <section className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-b from-black via-orange-950/10 to-black py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(251,146,60,0.1),_transparent_50%)]" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ top: '20%', left: '20%' }}></div>
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ top: '50%', right: '20%', animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 scroll-hidden ${headerVisible ? 'animate-fade-in-down' : ''
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-white px-4" style={{ textShadow: '0 0 40px rgba(251,146,60,0.5), 0 0 80px rgba(236,72,153,0.3)' }}>
            ORBITAL HOBBIES
          </h2>
          <p className="text-gray-400 font-mono text-sm sm:text-lg px-4">
            Beyond Code • Passions That Drive Me
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              icon={hobby.icon}
              title={hobby.title}
              description={hobby.description}
              index={index}
              color={hobby.color}
              bgGradient={hobby.bgGradient}
            />
          ))}
        </div>

        {/* Bottom quote */}
        <div className="text-center mt-16">
          <p className="text-gray-500 font-mono text-sm italic">
            "Balance is not something you find, it's something you create."
          </p>
        </div>
      </div>
    </section>
  )
}

export default HobbiesBit
