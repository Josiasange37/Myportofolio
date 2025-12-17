import React, { useRef, useState, useEffect } from 'react'
import { FaBrain, FaRocket, FaLightbulb, FaCode, FaShieldAlt, FaInfinity } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { View, Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// Animated typing component
const TypeWriter = ({ text, speed = 50, onComplete, isActive = true }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  useEffect(() => {
    setDisplayText('')
    setCurrentIndex(0)
  }, [text])

  return (
    <span>
      {displayText}
      <span className={`${isActive ? 'opacity-100' : 'opacity-0'} animate-pulse text-cyan-400 ml-1`}>|</span>
    </span>
  )
}

// Philosophy quotes cycling component
const PhilosophyQuotes = () => {
  const [phase, setPhase] = useState(0) // 0: first quote, 1: second quote transition
  const [typingStep, setTypingStep] = useState(0) // 0: none, 1: prefix, 2: formula, 3: done

  const quotes = [
    {
      text: "A king never waves, a king never bends, a king never gives up.",
      gradient: "from-cyan-400 via-purple-400 to-pink-400"
    },
    {
      prefix: "Humanity's superpower = ",
      formula: "Evolution + Adaptation + Imagination",
      philosophy: "I constantly evolve and adapt — that is my philosophy. That is why I am ",
      highlight: "ALMIGHT",
      gradient: "from-yellow-300 via-orange-400 to-yellow-300"
    }
  ]

  useEffect(() => {
    // Show first quote for 3 seconds, then transition
    if (phase === 0) {
      const timer = setTimeout(() => {
        setPhase(1)
        setTypingStep(1) // Start typing prefix
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [phase])

  return (
    <div className="relative min-h-[180px] sm:min-h-[200px] flex items-center justify-center">
      {/* First Quote - Fades out */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${phase === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        <p className={`text-lg sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${quotes[0].gradient} text-center px-4`}>
          "{quotes[0].text}"
        </p>
      </div>

      {/* Second Quote - Types in */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
      >
        {phase === 1 && (
          <div className="text-center px-4">
            <p className="text-base sm:text-xl md:text-2xl font-light text-cyan-200 leading-relaxed font-mono mb-2 sm:mb-3 min-h-[2rem]">
              {typingStep >= 1 ? (
                <TypeWriter
                  text={quotes[1].prefix}
                  speed={40}
                  onComplete={() => setTypingStep(2)}
                  isActive={typingStep === 1}
                />
              ) : null}
            </p>

            <p className={`text-lg sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${quotes[1].gradient} mb-4 min-h-[3rem]`}>
              {typingStep >= 2 ? (
                <TypeWriter
                  text={quotes[1].formula}
                  speed={30}
                  onComplete={() => setTypingStep(3)}
                  isActive={typingStep === 2}
                />
              ) : null}
            </p>

            <div className={`transition-opacity duration-1000 ${typingStep === 3 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto my-4"></div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                {quotes[1].philosophy}
                <span className="text-cyan-400 font-bold">{quotes[1].highlight}</span>.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Cycle indicator dots */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${phase === 0 ? 'bg-cyan-400 scale-125' : 'bg-gray-600'}`}></div>
        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${phase >= 1 ? 'bg-purple-400 scale-125' : 'bg-gray-600'}`}></div>
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
