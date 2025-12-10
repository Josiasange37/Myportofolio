import React, { useRef, useMemo, useState, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { View, Float, Sparkles, PerspectiveCamera, Text, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { Mouse } from 'lucide-react'

// DNA Helix 3D Component
const DNAHelix = () => {
  const points = useMemo(() => {
    const p = []
    for (let i = 0; i < 100; i++) {
      const t = i / 10
      p.push(new THREE.Vector3(Math.cos(t) * 2, (i - 50) * 0.1, Math.sin(t) * 2))
    }
    return p
  }, [])

  const strandRef = useRef()
  const strand2Ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (strandRef.current) strandRef.current.rotation.y = t * 0.2
    if (strand2Ref.current) strand2Ref.current.rotation.y = t * 0.2
  })

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <points ref={strandRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={points.length} array={new Float32Array(points.flatMap(v => [v.x, v.y, v.z]))} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.15} color="#06b6d4" transparent opacity={0.8} sizeAttenuation />
      </points>
      <points ref={strand2Ref} rotation={[0, Math.PI, 0]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={points.length} array={new Float32Array(points.flatMap(v => [v.x, v.y, v.z]))} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.15} color="#a855f7" transparent opacity={0.8} sizeAttenuation />
      </points>
      <Sparkles count={50} scale={6} size={2} speed={0.4} opacity={0.5} color="#ec4899" />
    </group>
  )
}

const GlitchText = ({ text, position = [0, 0, 0], fontSize = 1 }) => {
  const textRef = useRef()
  const [glitch, setGlitch] = useState(false)

  useFrame((state) => {
    if (!textRef.current) return
    if (Math.random() > 0.99) {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 100)
    }
    if (glitch) {
      textRef.current.position.x = position[0] + (Math.random() - 0.5) * 0.1
      textRef.current.position.y = position[1] + (Math.random() - 0.5) * 0.1
      textRef.current.material.color.setHex(0xffffff * Math.random())
    } else {
      textRef.current.position.set(...position)
      textRef.current.material.color.set('#ffffff')
    }
  })

  return (
    <Text ref={textRef} position={position} fontSize={fontSize} font="https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff" anchorX="center" anchorY="middle">
      {text}
      <meshStandardMaterial color="#ffffff" emissive="#06b6d4" emissiveIntensity={0.5} toneMapped={false} />
    </Text>
  )
}

// Separate component for Texture loading to isolate Suspense
const AvatarInner = () => {
  const texture = useTexture('profile.png')
  const meshRef = useRef()
  const ringRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 1.5) * 0.1
      // Hover tilt logic
      const targetRotX = hovered ? (state.mouse.y * 0.5) : 0
      const targetRotY = hovered ? (state.mouse.x * 0.5) : 0
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.1)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.1)
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.5
      ringRef.current.rotation.x = Math.sin(t) * 0.2
    }
  })

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={[1, 1, 1]}
    >
      <group ref={meshRef}>
        <mesh>
          <circleGeometry args={[0.8, 64]} />
          <meshBasicMaterial map={texture} transparent opacity={0.9} />
        </mesh>
        <mesh position={[0, 0, 0.01]}>
          <circleGeometry args={[0.8, 64]} />
          <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.1} />
        </mesh>
        <mesh ref={ringRef}>
          <ringGeometry args={[0.85, 0.9, 64]} />
          <meshBasicMaterial color="#ec4899" transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
        <pointLight distance={3} intensity={hovered ? 2 : 0.5} color="#06b6d4" />
      </group>
    </group>
  )
}

const FallbackAvatar = () => (
  <group>
    <mesh>
      <circleGeometry args={[0.8, 32]} />
      <meshBasicMaterial color="#333" wireframe />
    </mesh>
    <Text position={[0, 0, 0.1]} fontSize={0.1}>LOADING...</Text>
  </group>
)

const HolographicAvatar = () => {
  return (
    <group position={[0, 1.0, 0]}>
      <Suspense fallback={<FallbackAvatar />}>
        <AvatarInner />
      </Suspense>
    </group>
  )
}

// Typing Animation Component
const TypewriterText = () => {
  const titles = ['FULL STACK DEVELOPER', 'GAME DEVELOPEMENT', 'COMPUTER MENTAINANCE', 'NETWORKING', 'RED TEAMER']
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  React.useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))
      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        if (fullText === 'RED TEAMER') {
          // Stay on Red Teamer longer or stop? Let's pause for 5s
          setTimeout(() => setIsDeleting(true), 5000)
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }
    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, titles, typingSpeed])

  return (
    <p className="text-xl md:text-2xl text-cyan-100 font-mono tracking-widest mb-8 border-r-2 border-pink-500 pr-4 inline-block bg-black/30 backdrop-blur-sm p-2 rounded h-[3rem]">
      {text}<span className="animate-pulse">_</span>
    </p>
  )
}

import {
  FaPython, FaLinux, FaTerminal, FaUserSecret, FaWifi,
  FaDocker, FaReact, FaAws, FaDragon, FaShieldAlt,
  FaCode, FaBug, FaNetworkWired, FaCogs
} from 'react-icons/fa'

const HackerBackground = () => {
  const icons = [
    FaDragon, // Kali substitute
    FaPython,
    FaTerminal, // Bash
    FaLinux,
    FaUserSecret,
    FaWifi, // Wireshark
    FaDocker,
    FaCogs, // Kubernetes
    FaReact,
    FaCode, // Go
    FaShieldAlt, // Rust
    FaAws,
    FaBug,
    FaNetworkWired
  ]

  const particles = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * -20,
      size: 1.5 + Math.random() * 2, // Larger for icons
      opacity: 0.1 + Math.random() * 0.15
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute text-cyan-900/30 animate-float-particle"
          style={{
            left: `${p.left}%`,
            top: '100%',
            fontSize: `${p.size}rem`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity
          }}
        >
          <p.Icon />
        </div>
      ))}
    </div>
  )
}

const HeroBit = ({ data }) => {
  // Personal Overrides
  const displayName = "AKANA SIGNING JOSIAS AARON"
  const pseudo = "ALMIGHT"

  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <HackerBackground />
      <View className="absolute top-0 left-0 w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />

        <group>
          {/* DEBUG: Simple Box to test View rendering */}
          <mesh rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <ambientLight intensity={1} />
        </group>

        {/* 
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DNAHelix />
        </Float>

        <group position={[0, -0.5, 2]}>
          <HolographicAvatar />
          <group position={[0, -1.2, 0]}>
            <GlitchText text={pseudo} fontSize={1.2} />
          </group>
        </group> 
        */}
      </View>

      <div className="relative z-50 text-center pointer-events-none p-8 mt-40">

        {/* 2D Fallback Avatar - Hidden by default, shown via CSS if WebGL fails */}
        <div className="fallback-avatar hidden mb-8 mx-auto relative w-48 h-48 group">
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse"></div>
          <img
            src="/profile.png"
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.5)] bg-zinc-900"
          />
          {/* Cyberpunk Decor Ring */}
          <div className="absolute -inset-2 rounded-full border border-dashed border-pink-500/50 w-[calc(100%+16px)] h-[calc(100%+16px)] -left-2 -top-2 animate-spin-slow"></div>
        </div>

        <h1 className="text-3xl md:text-5xl font-black mb-4 text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)] leading-tight tracking-wide animate-appear">
          {displayName}
        </h1>

        {/* Pseudo Display */}
        <div className="text-cyan-200 text-lg md:text-xl font-mono tracking-[0.5em] mb-6 opacity-0 animate-appear" style={{ animationDelay: '0.3s' }}>
          &lt; {pseudo} /&gt;
        </div>

        <TypewriterText />
        <div className="flex flex-col items-center mt-12 gap-2 opacity-60">
          <Mouse className="w-6 h-6 animate-bounce text-purple-400" />
          <span className="text-[10px] tracking-[0.3em] text-purple-300">INITIALIZE_SCROLL</span>
        </div>
      </div>
    </section>
  )
}

export default HeroBit
