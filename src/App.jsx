import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, Stars } from '@react-three/drei'
import { useGitHubData } from './hooks/useGitHubData'
import { useScrollProgress } from './hooks/use3DAnimation'
import { useCursorFlashlight } from './hooks/useCursorFlashlight'
import ErrorBoundary from './components/ErrorBoundary'
import CanvasErrorBoundary from './components/CanvasErrorBoundary'

// Components
import HeroBit from './sections/HeroBit'
import GitHubActivityBit from './sections/GitHubActivityBit'
import AboutBit from './sections/AboutBit'
import EducationStatusBit from './sections/EducationStatusBit'
import XyberClanBit from './sections/XyberClanBit'
import CertificationsBit from './sections/CertificationsBit'
import ProgrammingProgressionBit from './sections/ProgrammingProgressionBit'
import RedTeamingProgressionBit from './sections/RedTeamingProgressionBit'
import ProjectsBit from './sections/ProjectsBit'
import PhilosophyBit from './sections/PhilosophyBit'
import HobbiesBit from './sections/HobbiesBit'
import ContactBit from './sections/ContactBit'
import AlmightBot from './components/AlmightBot'




import { Home, Cpu, Activity, FolderGit, Brain, Gamepad2, Mail, User, Award, GraduationCap, Building2 } from 'lucide-react'
import { FaShieldAlt } from 'react-icons/fa'

// Navigation Icons
const NAV_ITEMS = [
  { name: 'Hero', icon: Home, id: 'hero' },
  { name: 'About', icon: User, id: 'about' },
  { name: 'XyberClan', icon: Building2, id: 'xyberclan' },
  { name: 'Education', icon: GraduationCap, id: 'education' },
  { name: 'Certifications', icon: Award, id: 'certifications' },
  { name: 'Programming', icon: Cpu, id: 'programming' },
  { name: 'Red Team', icon: FaShieldAlt, id: 'red-team' },
  { name: 'Projects', icon: FolderGit, id: 'projects' },
  { name: 'Philosophy', icon: Brain, id: 'philosophy' },
  { name: 'Hobbies', icon: Gamepad2, id: 'hobbies' },
  { name: 'Contact', icon: Mail, id: 'contact' }
]

const NavDots = ({ activeSection, scrollTo }) => (
  <div className="fixed right-2 sm:right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-6 pointer-events-auto">
    {NAV_ITEMS.map((item, idx) => {
      const Icon = item.icon
      const isActive = activeSection === idx
      return (
        <button
          key={item.name}
          onClick={() => scrollTo(item.id)}
          className={`group relative flex items-center justify-center transition-all duration-500 ${isActive
            ? 'p-3 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-110'
            : 'p-1 hover:scale-125'
            } `}
          aria-label={`Scroll to ${item.name}`}
        >
          {isActive ? (
            <Icon size={20} strokeWidth={2.5} />
          ) : (
            <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-gray-400 transition-colors" />
          )}

          {/* Tooltip */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 border border-white/10 rounded text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
            {item.name}
          </span>
        </button>
      )
    })}
  </div>
)

const App = () => {
  const containerRef = useRef(null)
  const { data: githubData, loading } = useGitHubData('Josiasange37') // User: Josiasange37
  const scrollProgress = useScrollProgress()
  const cursorPos = useCursorFlashlight()

  const [activeSection, setActiveSection] = React.useState(0)

  // Scroll Spy Logic
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = NAV_ITEMS.findIndex(item => item.id === entry.target.id)
            if (index !== -1) {
              setActiveSection(index)
            }
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: '-20% 0px -20% 0px' // Center bias
      }
    )

    NAV_ITEMS.forEach(item => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [loading]) // Re-run when loading finishes and content mounts

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (loading && !githubData) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center text-cyan-400 font-mono">
        <div className="animate-pulse">Loading Neural Interface...</div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div ref={containerRef} className="relative w-full bg-black text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">

        {/* Cursor Flashlight Effect */}
        <div
          className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
          style={{
            background: `radial-gradient(circle 600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
          }}
        />

        {/* Background Canvas - Shared WebGL Context */}
        <CanvasErrorBoundary>
          <Canvas
            className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0"
            eventSource={containerRef}
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: false,
            }}
          >
            <Suspense fallback={null}>
              <View.Port />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              <Preload all />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>

        {/* Navigation */}
        <NavDots activeSection={activeSection} scrollTo={scrollTo} />

        {/* Progress Bar */}
        <div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-50 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        {/* Sections */}
        <main className="relative z-10 w-full">
          <div id="hero"><HeroBit data={githubData} /></div>
          <div id="about"><AboutBit /></div>
          <div id="xyberclan"><XyberClanBit /></div>
          <div id="education"><EducationStatusBit /></div>
          <div id="certifications"><CertificationsBit /></div>
          <div id="programming"><ProgrammingProgressionBit /></div>
          <div id="red-team"><RedTeamingProgressionBit /></div>
          <div id="projects">
            <GitHubActivityBit data={githubData} />
            <ProjectsBit data={githubData} />
          </div>
          <div id="philosophy"><PhilosophyBit /></div>
          <div id="hobbies"><HobbiesBit /></div>
          <div id="contact"><ContactBit /></div>
        </main>

        <div className="fixed bottom-4 right-4 z-50 font-mono text-xs text-gray-500 bg-black/50 px-2 py-1 rounded border border-gray-800 backdrop-blur-sm">
          BITS_ARCH_V1.1
        </div>
        <AlmightBot />
      </div>
    </ErrorBoundary>
  )
}

export default App
