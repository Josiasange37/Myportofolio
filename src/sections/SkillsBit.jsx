import React, { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { View, Text, Float, Center, PerspectiveCamera, Sparkles, useCursor } from '@react-three/drei'
import * as THREE from 'three'

const LANGUAGE_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00ADD8',
  Rust: '#dea584',
  C: '#555555',
  'C++': '#f34b7d',
  Shell: '#89e051'
}

const SkillOrb = ({ language, index, total }) => {
  const meshRef = useRef()
  const textRef = useRef()
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  // Calculate position in a circle/spiral
  const position = useMemo(() => {
    const angle = (index / total) * Math.PI * 2
    const radius = 3.5
    return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0]
  }, [index, total])

  useFrame((state, delta) => {
    // Rotate orb
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * (hovered ? 2 : 0.5)
      meshRef.current.rotation.y += delta * (hovered ? 2 : 0.5)
    }
    // Make text always face camera
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position)
    }
  })

  const color = LANGUAGE_COLORS[language.name] || '#ffffff'

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <dodecahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color={color}
            roughness={0.2}
            metalness={0.8}
            emissive={hovered ? color : '#000000'}
            emissiveIntensity={hovered ? 0.5 : 0}
          />
        </mesh>
        <Text
          ref={textRef}
          position={[0, -1, 0]}
          fontSize={0.3}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxM.woff" // Default font
        >
          {language.name}
          <meshBasicMaterial toneMapped={false} />
        </Text>
      </group>
    </Float>
  )
}

const SkillsScene = ({ languages }) => {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.05 // Slowly rotate the whole ring
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />

      <Sparkles count={50} scale={10} size={1} color="#06b6d4" opacity={0.5} speed={0.5} />

      <group ref={groupRef}>
        {languages.map((lang, i) => (
          <SkillOrb
            key={lang.name}
            language={lang}
            index={i}
            total={languages.length}
          />
        ))}
      </group>

      {/* Central Core */}
      <Float speed={4} rotationIntensity={0.5} floatIntensity={0.2}>
        <mesh>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#06b6d4" wireframe />
        </mesh>
      </Float>
    </>
  )
}

const SkillsBit = ({ data }) => {
  const languages = data?.languages || [
    { name: 'React', percentage: 100 },
    { name: 'Three.js', percentage: 90 },
    { name: 'Node.js', percentage: 85 }
  ]

  return (
    <section className="h-screen w-full relative flex items-center justify-center bg-zinc-900/50">
      <div className="absolute top-0 left-0 w-full h-full">
        <View className="w-full h-full">
          <SkillsScene languages={languages} />
        </View>
      </div>

      <div className="relative z-50 pointer-events-none text-center p-6 mt-20">
        <h2 className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
          TECH ARSENAL
        </h2>
        <p className="text-cyan-200 mb-12 font-mono text-sm tracking-widest">DETECTED LANGUAGES FROM GITHUB REPOS</p>

        {/* CSS 3D Fallback Cloud for No-WebGL */}
        <div className="fallback-content hidden pointer-events-auto relative w-full h-[400px] items-center justify-center perspective-[1000px]">
          <div className="relative w-[1px] h-[1px] preserve-3d animate-spin-y mx-auto mt-32">
            {languages.map((lang, i) => {
              const phi = Math.acos(-1 + (2 * i) / languages.length)
              const theta = Math.sqrt(languages.length * Math.PI) * phi
              const radius = 130 // Reduced radius
              const x = radius * Math.cos(theta) * Math.sin(phi)
              const y = radius * Math.sin(theta) * Math.sin(phi)
              const z = radius * Math.cos(phi)

              return (
                <div
                  key={lang.name}
                  className="absolute left-0 top-0 preserve-3d"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                  }}
                >
                  {/* Counter-rotate the content so it faces front */}
                  <div className="animate-spin-y-reverse">
                    <div className="bg-zinc-900/90 px-4 py-2 rounded-lg border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)] whitespace-nowrap cursor-pointer hover:border-cyan-300 hover:bg-cyan-800 hover:scale-110 transition-colors">
                      <span className="text-cyan-300 font-bold text-lg">{lang.name}</span>
                      <span className="text-xs text-purple-400 block -mt-1">{Number(lang.percentage).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <p className="text-gray-500 max-w-md mx-auto text-xs mt-16 opacity-50">
          * Data live-streamed from @Josiasange37
        </p>
      </div>
    </section>
  )
}

export default SkillsBit
