import React, { useState } from 'react'
import { View, Text, Grid, PerspectiveCamera, useCursor } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ContactButton = () => {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  useCursor(hovered)

  const { scale, color } = useSpring({
    scale: clicked ? 0.9 : hovered ? 1.1 : 1,
    color: hovered ? '#a855f7' : '#06b6d4',
    config: { tension: 300, friction: 10 }
  })

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 200)
    // Simulate navigation
    window.location.href = "mailto:hello@xyberclan.com"
  }

  return (
    <animated.group
      scale={scale}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <boxGeometry args={[3, 1, 0.5]} />
        <animated.meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>
      <Text position={[0, 0, 0.3]} fontSize={0.3} color="black" fontWeight="bold">
        INITIATE_CONTACT
      </Text>
    </animated.group>
  )
}

const ContactBit = () => {
  const [headingRef, headingVisible] = useScrollAnimation(0.2)
  const [footerRef, footerVisible] = useScrollAnimation(0.2)

  return (
    <section className="h-screen w-full relative flex items-center justify-center bg-black">
      <View className="absolute top-0 left-0 w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <group rotation={[0.2, 0, 0]}>
          <ContactButton />

          {/* Cyberpunk Grid */}
          <Grid
            position={[0, -2, 0]}
            args={[20, 20]}
            cellSize={1}
            cellThickness={1}
            cellColor="#06b6d4"
            sectionSize={5}
            sectionThickness={1.5}
            sectionColor="#ec4899"
            fadeDistance={30}
            fadeStrength={1}
            infiniteGrid
          />
        </group>
      </View>

      <div
        ref={headingRef}
        className={`absolute top-20 w-full text-center pointer-events-none scroll-hidden ${headingVisible ? 'animate-fade-in-down' : ''
          }`}
      >
        <h2 className="text-6xl font-black text-white mix-blend-difference tracking-tighter">
          READY TO DEPLOY?
        </h2>
        <p className="mt-4 text-cyan-400 font-mono">
          SYSTEM STATUS: ONLINE_AND_WAITING
        </p>
      </div>

      <footer
        ref={footerRef}
        className={`absolute bottom-4 w-full text-center text-xs text-gray-700 font-mono pointer-events-none scroll-hidden ${footerVisible ? 'animate-fade-in-up' : ''
          }`}
      >
        © 2025 XYBERCLAN. ALL SYSTEMS NOMINAL.
      </footer>
    </section>
  )
}

export default ContactBit
