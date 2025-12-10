import React from 'react'
import { FaBrain, FaRocket, FaLightbulb, FaCode, FaShieldAlt, FaInfinity } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PhilosophyCard = ({ icon: Icon, title, description, index, color }) => {
  const [cardRef, cardVisible] = useScrollAnimation(0.1)

  return (
    <div
      ref={cardRef}
      className={`scroll-hidden ${cardVisible ? 'animate-fade-in-up' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="group relative h-full">
        {/* Glow effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500`}></div>

        {/* Card */}
        <div className="relative h-full bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-500/50">

          {/* Icon */}
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500`}>
            <Icon className="text-3xl text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>

          {/* Bottom accent */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}></div>
        </div>
      </div>
    </div>
  )
}

const PhilosophyBit = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [quoteRef, quoteVisible] = useScrollAnimation(0.2)

  const philosophies = [
    {
      icon: FaBrain,
      title: 'Evolution',
      description: 'Constantly learning, adapting, and growing. Every challenge is an opportunity to evolve our skills and mindset.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: FaRocket,
      title: 'Adaptation',
      description: 'Embracing change and uncertainty. We thrive in dynamic environments by staying flexible and resilient.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaLightbulb,
      title: 'Imagination',
      description: 'Pushing boundaries and exploring the impossible. Innovation starts with daring to dream beyond limits.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FaCode,
      title: 'Craftsmanship',
      description: 'Writing clean, elegant code that stands the test of time. Quality over quantity, always.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Security First',
      description: 'Building with security at the core. Protecting users and data is not optional, it\'s fundamental.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FaInfinity,
      title: 'Continuous Growth',
      description: 'The journey never ends. Every project, every line of code is a step toward mastery.',
      color: 'from-indigo-500 to-violet-500'
    }
  ]

  return (
    <section className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-b from-black via-purple-950/10 to-black py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.1),_transparent_50%)]" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ top: '10%', left: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ top: '60%', right: '10%', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 scroll-hidden ${headerVisible ? 'animate-fade-in-down' : ''
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            PHILOSOPHY
          </h2>
        </div>

        {/* Quote */}
        <div
          ref={quoteRef}
          className={`text-center mb-16 scroll-hidden ${quoteVisible ? 'animate-scale-in' : ''
            }`}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl rounded-full"></div>
            <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-8 py-6 max-w-3xl">
              <p className="text-2xl md:text-3xl font-light text-cyan-200 leading-relaxed font-mono mb-3">
                "Humanity's superpower = Evolution + Adaptation + Imagination "
              </p>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Evolution + Adaptation + Imagination
              </p>
              <p className="mt-6 text-gray-400 text-sm md:text-base">
                I build not just to solve problems, but to expand the boundaries of what's possible.
              </p>

            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">My visions</h1>
        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((philosophy, index) => (
            <PhilosophyCard
              key={index}
              icon={philosophy.icon}
              title={philosophy.title}
              description={philosophy.description}
              index={index}
              color={philosophy.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhilosophyBit
