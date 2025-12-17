import React, { useRef, useState, useEffect } from 'react'
import { FaBrain, FaRocket, FaLightbulb, FaCode, FaShieldAlt, FaInfinity } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { View, Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { personalInfo } from '../config/siteConfig'

// Philosophy quotes cycling component
const PhilosophyQuotes = () => {
  const [activeQuote, setActiveQuote] = useState(0)

  const quotes = [
    {
      text: personalInfo.philosophy,
      gradient: "from-amber-300 via-yellow-400 to-amber-300",
      highlight: ""
    },
    {
      text: personalInfo.quote.replace(' ALMIGHT.', '').replace(' ALMIGHT', ''),
      highlight: personalInfo.pseudo,
      gradient: "from-cyan-300 via-blue-400 to-cyan-300"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length)
    }, 6000) // Switch every 6 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-[220px] sm:min-h-[240px] flex items-center justify-center p-6 sm:p-8">
      {/* Holographic Container */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(6,182,212,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5 pointer-events-none"></div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400 rounded-br-lg"></div>
      </div>

      {/* Quote Display */}
      <div className="relative z-10 w-full flex items-center justify-center p-4">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${activeQuote === index
              ? 'opacity-100 scale-100 translate-y-0 blur-0'
              : 'opacity-0 scale-95 translate-y-8 blur-sm pointer-events-none'
              }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              {/* Main Text */}
              <div className="mb-4">
                <p className={`text-lg sm:text-2xl md:text-3xl font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r ${quote.gradient} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                  "{quote.text}"
                </p>
              </div>

              {/* Highlight (only for 2nd quote) */}
              {quote.highlight && activeQuote === index && (
                <div className="mt-4 animate-fade-in delay-300">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto my-4 shadow-[0_0_10px_cyan]"></div>
                  <p className="text-gray-300 font-mono text-sm tracking-wider">
                    That is why I am <span className="text-cyan-400 font-bold bg-cyan-950/50 px-3 py-1 rounded border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.4)]">{quote.highlight}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar/Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveQuote(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${activeQuote === index ? 'w-12 bg-cyan-400 shadow-[0_0_10px_cyan]' : 'w-2 bg-gray-700 hover:bg-gray-600'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

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
        <div className="relative h-full bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 sm:p-6 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-500/50">

          {/* Icon */}
          <div className={`w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-500`}>
            <Icon className="text-2xl sm:text-3xl text-white" />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>

          {/* Bottom accent */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}></div>
        </div>
      </div>
    </div>
  )
}

const PhilosophyScene = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />

      <group ref={groupRef}>
        {/* Main morphing blob */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#a855f7"
              envMapIntensity={1}
              clearcoat={1}
              clearcoatRoughness={0}
              metalness={0.1}
              distort={0.6}
              speed={3}
              transparent
              opacity={0.6}
            />
          </Sphere>

          {/* Secondary blobs */}
          <Sphere args={[0.5, 32, 32]} position={[2, 2, -2]}>
            <MeshDistortMaterial color="#06b6d4" distort={0.4} speed={2} transparent opacity={0.4} />
          </Sphere>
          <Sphere args={[0.3, 32, 32]} position={[-2, -1, 1]}>
            <MeshDistortMaterial color="#ec4899" distort={0.4} speed={4} transparent opacity={0.4} />
          </Sphere>
        </Float>
      </group>
    </>
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
    <section className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-b from-black via-purple-950/10 to-black py-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src="/dynamic_blur.webm" type="video/webm" />
      </video>

      {/* 3D Background */}
      <View className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <PhilosophyScene />
      </View>

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.1),_transparent_50%)]" />

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 scroll-hidden ${headerVisible ? 'animate-fade-in-down' : ''
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white px-4" style={{ textShadow: '0 0 40px rgba(6,182,212,0.5), 0 0 80px rgba(168,85,247,0.3)' }}>
            PHILOSOPHY
          </h2>
        </div>

        {/* Quote */}
        <div
          ref={quoteRef}
          className={`text-center mb-12 sm:mb-16 scroll-hidden ${quoteVisible ? 'animate-scale-in' : ''
            }`}
        >
          <div className="relative inline-block w-full max-w-3xl mx-4">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl rounded-full"></div>
            <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-4 sm:px-8 py-6 sm:py-10">
              <PhilosophyQuotes />
            </div>
          </div>
        </div>

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
