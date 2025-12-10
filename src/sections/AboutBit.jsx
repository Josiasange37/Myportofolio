import React, { useState, useEffect, useRef } from 'react'
import { FaTerminal } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TerminalWindow = () => {
  const [lines, setLines] = useState([])
  const commands = [
    { cmd: 'init_sequence --force', output: 'Initializing connection...' },
    { cmd: 'whoami', output: 'User: Josias Aaron (ALMIGHT)' },
    { cmd: 'cat skills.json', output: 'Loading architectural matrix...' },
    { cmd: 'run bio_summary.exe', output: 'Executing...' }
  ]

  useEffect(() => {
    let lineIndex = 0
    let charIndex = 0
    let currentLine = ''
    let timeoutId

    const typeLine = () => {
      if (lineIndex >= commands.length) return

      const commandObj = commands[lineIndex]
      const fullCmd = '> ' + commandObj.cmd

      if (charIndex < fullCmd.length) {
        currentLine += fullCmd[charIndex]
        setLines(prev => {
          const newLines = [...prev]
          if (charIndex === 0) newLines.push(fullCmd[0])
          else newLines[newLines.length - 1] = currentLine
          return newLines
        })
        charIndex++
        timeoutId = setTimeout(typeLine, 50 + Math.random() * 50)
      } else {
        // Command finished, show output after delay
        timeoutId = setTimeout(() => {
          setLines(prev => [...prev, commandObj.output])
          lineIndex++
          charIndex = 0
          currentLine = ''
          timeoutId = setTimeout(typeLine, 800)
        }, 300)
      }
    }

    typeLine()
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="w-full max-w-md bg-black/90 border border-purple-500/50 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)] font-mono text-sm">
      {/* Terminal Header */}
      <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-purple-500/30">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-2 text-xs text-gray-500">root@josias-mainframe:~</span>
      </div>
      {/* Terminal Body */}
      <div className="p-4 h-64 overflow-y-auto text-green-400">
        {lines.map((line, i) => (
          <div key={i} className="mb-1">{line}</div>
        ))}
        <div className="animate-pulse">_</div>
      </div>
    </div>
  )
}

const AboutBit = () => {
  const [terminalRef, terminalVisible] = useScrollAnimation(0.2)
  const [bioRef, bioVisible] = useScrollAnimation(0.2)

  return (
    <section className="min-h-[80vh] w-full relative flex items-center justify-center bg-black/80 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(168,85,247,0.05),_transparent_50%)]" />

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT: Terminal */}
        <div
          ref={terminalRef}
          className={`flex justify-center md:justify-end scroll-hidden ${terminalVisible ? 'animate-fade-in-left' : ''
            }`}
        >
          <TerminalWindow />
        </div>

        {/* RIGHT: Bio */}
        <div
          ref={bioRef}
          className={`text-left scroll-hidden ${bioVisible ? 'animate-fade-in-right' : ''
            }`}
        >
          <h2 className="text-4xl font-black mb-6 text-white flex items-center gap-3">
            <FaTerminal className="text-purple-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              SYSTEM_IDENTITY
            </span>
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed font-light">
            <p>
              <strong className="text-cyan-400">TARGET:</strong> Almight.
              <br />
              <strong className="text-purple-400">ROLE:</strong>  Red Teamer & Full Stack Developer .
            </p>
            <p>
              I bridge the gap between <span className="text-white font-mono bg-purple-900/30 px-1">imagination</span> and <span className="text-white font-mono bg-cyan-900/30 px-1">execution</span>.
              My code isn't just syntax; it's a digital architecture designed to scale, perform, and mesmerize.
            </p>
            <p>
              When I'm not orchestrating analysing system vulnerabilities or breaking security protocols (legally),
              I am building immersive 3D game development and some time comptuer mentanace.
            </p>
            <p>I constantly evolve and adapt that is my philosophy that is why i am ALMIGHT</p>

            <div className="pt-4 flex gap-4">
              <div className="px-4 py-2 border border-purple-500/50 rounded text-xs font-mono text-purple-300">
                STATUS: ONLINE
              </div>
              <div className="px-4 py-2 border border-cyan-500/50 rounded text-xs font-mono text-cyan-300">
                LOCATION: CLASSIFIED
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutBit
