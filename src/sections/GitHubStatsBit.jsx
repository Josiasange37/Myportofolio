import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { View, Text, Float, OrbitControls, PerspectiveCamera } from '@react-three/drei'
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

const Bar = ({ language, percentage, index, total }) => {
  const meshRef = useRef()
  // Max height for 100%
  const targetHeight = (percentage / 100) * 8
  const color = LANGUAGE_COLORS[language.name] || '#ffffff'

  // X Position: Centered distribution
  const width = 0.8
  const gap = 0.4
  const startX = -((total * (width + gap)) / 2) + (width + gap) / 2
  const x = startX + index * (width + gap)

  useFrame(() => {
    // Animate height growth
    if (meshRef.current) {
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetHeight, 0.05)
      meshRef.current.position.y = meshRef.current.scale.y / 2
    }
  })

  return (
    <group position={[x, 0, 0]}>
      <mesh ref={meshRef} position={[0, 0.1, 0]} scale={[1, 0.01, 1]}> {/* Initial scale for animation */}
        <boxGeometry args={[width, 1, width]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>

      {/* Label */}
      <Text
        position={[0, -0.5, 0.5]}
        rotation={[-Math.PI / 4, 0, 0]}
        fontSize={0.3}
        color={color}
        anchorX="center"
        anchorY="top"
      >
        {language.name}
      </Text>

      {/* Percentage */}
      <Text
        position={[0, -1, 0.5]}
        rotation={[-Math.PI / 4, 0, 0]}
        fontSize={0.2}
        color="#888"
        anchorX="center"
        anchorY="top"
      >
        {Math.round(percentage)}%
      </Text>
    </group>
  )
}

const GitHubStatsBit = ({ data }) => {
  const languages = data?.languages || []
  const stats = data?.stats || { totalStars: 0, totalForks: 0, totalRepos: 0 }

  return (
    <section className="h-screen w-full relative flex flex-col items-center justify-center bg-black">
      <div className="absolute top-0 left-0 w-full h-full">
        <View className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 4, 8]} fov={50} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 5]} intensity={1} />

          <group position={[0, -2, 0]}>
            {languages.slice(0, 8).map((lang, i) => (
              <Bar
                key={lang.name}
                language={lang}
                percentage={lang.percentage}
                index={i}
                total={Math.min(languages.length, 8)}
              />
            ))}

            {/* Ground Reflective Plane */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
              <planeGeometry args={[50, 50]} />
              <meshStandardMaterial
                color="#111"
                roughness={0.1}
                metalness={0.8}
              />
            </mesh>

            {/* Grid for Cyberpunk feel */}
            <gridHelper args={[50, 50, 0x06b6d4, 0x222]} position={[0, 0.01, 0]} />
          </group>
        </View>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto mt-auto mb-12 grid grid-cols-3 gap-8 pointer-events-none px-4">
        <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-cyan-400">{stats.totalRepos}</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest">Repositories</div>
        </div>
        <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-purple-400">{stats.totalStars}</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest">Stars Earned</div>
        </div>
        <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-pink-400">{stats.totalForks}</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest">Forks</div>
        </div>
      </div>
    </section>
  )
}

export default GitHubStatsBit
