import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDiscord, FaTelegram } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SocialLink = ({ icon: Icon, label, href, color, index }) => {
  const [linkRef, linkVisible] = useScrollAnimation(0.1)

  return (
    <a
      ref={linkRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`scroll-hidden ${linkVisible ? 'animate-fade-in-up' : ''} group relative`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500`}></div>

      {/* Button */}
      <div className={`relative bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:scale-110 group-hover:border-gray-500/50 flex flex-col items-center gap-3`}>
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
          <Icon className="text-3xl text-white" />
        </div>
        <span className="text-white font-mono text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
          {label}
        </span>
      </div>
    </a>
  )
}

const ContactBit = () => {
  const [headingRef, headingVisible] = useScrollAnimation(0.2)
  const [subheadingRef, subheadingVisible] = useScrollAnimation(0.2)
  const [footerRef, footerVisible] = useScrollAnimation(0.2)

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/Josiasange37',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourhandle',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:hello@xyberclan.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaDiscord,
      label: 'Discord',
      href: 'https://discord.gg/yourserver',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: FaTelegram,
      label: 'Telegram',
      href: 'https://t.me/yourusername',
      color: 'from-cyan-500 to-blue-600'
    }
  ]

  return (
    <section className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-b from-black via-cyan-950/10 to-black py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.1),_transparent_50%)]" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ top: '10%', left: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ top: '60%', right: '10%', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">

        {/* Header */}
        <div
          ref={headingRef}
          className={`text-center mb-6 scroll-hidden ${headingVisible ? 'animate-fade-in-down' : ''
            }`}
        >
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            READY TO DEPLOY?
          </h2>
        </div>

        {/* Subheading */}
        <div
          ref={subheadingRef}
          className={`text-center mb-16 scroll-hidden ${subheadingVisible ? 'animate-scale-in' : ''
            }`}
        >
          <div className="inline-block bg-black/40 backdrop-blur-xl border border-cyan-400/30 rounded-full px-6 py-3">
            <p className="text-cyan-400 font-mono text-sm md:text-base">
              SYSTEM STATUS: <span className="text-green-400 animate-pulse">ONLINE_AND_WAITING</span>
            </p>
          </div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Let's build something amazing together. Choose your preferred channel to connect.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              icon={link.icon}
              label={link.label}
              href={link.href}
              color={link.color}
              index={index}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="mailto:hello@xyberclan.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group text-lg"
          >
            <FaEnvelope className="text-2xl group-hover:rotate-12 transition-transform" />
            <span>INITIATE_CONTACT</span>
          </a>
        </div>
      </div>

      {/* Footer */}
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
