import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { View, Text, Float, PerspectiveCamera, Line } from '@react-three/drei'
import * as THREE from 'three'

const Planet = ({ name, radius, speed, color, size }) => {
  const meshRef = useRef()
  const textRef = useRef()

  // Random staring angle
  const angleOffset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + angleOffset
    const x = Math.cos(t) * radius
    const z = Math.sin(t) * radius

    if (meshRef.current) meshRef.current.position.set(x, 0, z)
    if (textRef.current) {
      textRef.current.position.set(x, 0.8, z)
      textRef.current.lookAt(state.camera.position)
    }
  })

  const orbitPoints = useMemo(() => {
    const points = []
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2
      points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius))
    }
    return points
  }, [radius])

  return (
    <group>
      {/* Orbit rings */}
      <Line points={orbitPoints} color="#333" lineWidth={1} transparent opacity={0.3} />

      <mesh ref={meshRef}>
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>
      <Text
        ref={textRef}
        fontSize={0.25}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  )
}

const HobbiesBit = () => {
  return (
    <section className="h-screen w-full relative bg-zinc-900/40">
      <View className="absolute top-0 left-0 w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 6, 8]} fov={60} />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 10, 0]} intensity={2} color="#ffffff" />

        <group rotation={[0.4, 0, 0]}>
          {/* Sun / Core */}
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial emissive="#fdb813" emissiveIntensity={2} color="#fdb813" />
          </mesh>
          <Text position={[0, -1.5, 0]} fontSize={0.2} color="#fdb813">ME</Text>

          {/* Planets */}
          <Planet name="Piano" radius={3} speed={0.5} color="#ec4899" size={0.3} />
          <Planet name="Calisthenics" radius={4.5} speed={0.3} color="#06b6d4" size={0.4} />
          <Planet name="Code" radius={6} speed={0.2} color="#a855f7" size={0.5} />
          <Planet name="Basketball" radius={7.5} speed={0.15} color="#f97316" size={0.4} />
        </group>
      </View>

      <div className="absolute top-10 w-full text-center pointer-events-none">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
          ORBITAL HOBBIES
        </h2>
      </div>
    </section>
  )
}

export default HobbiesBit
