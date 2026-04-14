import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PromptPacksPage from './PromptPacksPage'

function HomePage() {
  const offerings = [
    {
      title: 'PROMPT PACKS',
      href: '/prompt-packs',
      icon: (
        <img
          src="/images/Prompt icon.png"
          alt="Prompt Packs icon"
          className="h-16 w-16 object-contain"
        />
      ),
      titleClass: 'text-cyan-300',
      iconClass: 'text-cyan-300',
      borderClass: 'border-cyan-400/85 shadow-[0_0_24px_rgba(68,221,255,0.18)]',
      hoverGlowClass:
        'hover:border-cyan-300 hover:shadow-[0_0_38px_rgba(68,221,255,0.28)]',
      description: 'Professionally engineered AI prompt systems ready to use.',
      bullets: [
        'Save hours of trial and error',
        'Optimized for high-quality output',
        'Instant download & easy to use',
      ],
      bulletClass: 'bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]',
      buttonClass: 'from-cyan-400 via-[#7a82ff] to-fuchsia-400',
      cta: 'BUY NOW →',
    },
    {
      title: 'AI CONSULTING',
      href: '/consulting',
      icon: (
        <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none" aria-hidden="true">
          <circle cx="24" cy="28" r="8" stroke="currentColor" strokeWidth="2.2" />
          <path
            d="M12 48c0-7.5 6.4-12.4 12-12.4S36 40.5 36 48"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M34 16a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-6l-4 3v-3h-2a4 4 0 0 1-4-4z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="40" cy="20" r="1.2" fill="currentColor" />
          <circle cx="44" cy="20" r="1.2" fill="currentColor" />
          <circle cx="48" cy="20" r="1.2" fill="currentColor" />
        </svg>
      ),
      titleClass: 'text-fuchsia-300',
      iconClass: 'text-fuchsia-300',
      borderClass: 'border-fuchsia-400/85 shadow-[0_0_24px_rgba(232,121,249,0.18)]',
      hoverGlowClass:
        'hover:border-fuchsia-300 hover:shadow-[0_0_38px_rgba(232,121,249,0.28)]',
      description: 'Custom AI systems to streamline your workflow and scale your business.',
      bullets: [
        'Personalized AI system setup',
        'Workflow automation & integration',
        'Scalable solutions for your business',
      ],
      bulletClass: 'bg-fuchsia-300 shadow-[0_0_12px_rgba(244,114,182,0.9)]',
      buttonClass: 'from-cyan-400 via-[#7a82ff] to-fuchsia-400',
      cta: 'BOOK A CALL →',
    },
  ]

  const trustItems = [
    {
      title: 'FAST DELIVERY',
      text: 'Get results immediately',
      className: 'text-cyan-300',
      icon: (
        <svg viewBox="0 0 52 52" className="h-10 w-10" fill="none" aria-hidden="true">
          <path
            d="M27 6L13 25h10l-3 18 19-23H28l3-14z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
        </svg>
      ),
    },
    {
      title: 'PROVEN SYSTEMS',
      text: 'Tested and optimized',
      className: 'text-cyan-300',
      icon: (
        <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
          <path
            d="M24 5l13 4.5v10.5c0 9-5.4 17-13 21-7.6-4-13-12-13-21V9.5L24 5z"
            stroke="currentColor"
            strokeWidth="2.1"
          />
          <path
            d="M18 24l4 4 8-10"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'AI EXPERTISE',
      text: 'Built for real work',
      className: 'text-fuchsia-300',
      icon: (
        <img
          src="/images/Brain gear.png"
          alt="AI Expertise icon"
          className="h-10 w-10 object-contain"
        />
      ),
    },
    {
      title: 'SECURE & TRUSTED',
      text: 'Privacy focused',
      className: 'text-cyan-300',
      icon: (
        <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
          <path
            d="M16 21v-4a8 8 0 1 1 16 0v4"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <rect x="12" y="21" width="24" height="18" rx="4" stroke="currentColor" strokeWidth="2.1" />
          <circle cx="24" cy="29" r="2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070019] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600&display=swap');
        .orbitron { font-family: 'Orbitron', system-ui, sans-serif; }
        .opensans { font-family: 'Open Sans', system-ui, sans-serif; }
      `}</style>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/galaxy-bg-wide.png')" }}
        />
        <div className="absolute inset-0 bg-[#050816]/58" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,8,22,0.12)_0%,rgba(5,8,22,0.22)_55%,rgba(5,8,22,0.34)_100%)]" />
      </div>

      <main className="orbitron relative z-10 mx-auto max-w-[1160px] px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <section className="flex flex-col items-center text-center">
          <div className="relative flex justify-center">
            <div className="absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,rgba(85,232,255,.12),rgba(223,77,255,.08)_45%,transparent_72%)] blur-3xl" />
            <img
              src="/images/Cerebryl.AI_Transparent_SM.png"
              alt="Cerebryl.AI logo"
              className="relative z-10 h-auto w-[600px] max-w-[95vw] sm:w-[650px] md:w-[620px]"
            />
          </div>

          <h2 className="mt-4 text-[1.1rem] font-bold uppercase tracking-[0.05em] text-white sm:text-[1.3rem] md:text-[1.55rem] lg:text-[1.78rem]">
            BUILDING AI SYSTEMS FOR REAL PEOPLE DOING REAL WORK
          </h2>

          <p className="opensans mt-4 max-w-4xl text-[1.05rem] leading-8 text-white/78 sm:text-[1.48rem]">
            Cerebryl.AI develops practical AI capability within individuals and organizations through structured training, applied systems, and real-world implementation.
          </p>
        </section>

        {/* REST OF FILE UNCHANGED */}
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prompt-packs" element={<PromptPacksPage />} />
    </Routes>
  )
}

export default App