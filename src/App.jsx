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
              src="/images/Cerebryl.Ai Transparent sm.png"
              alt="Cerebryl.Ai logo"
              className="relative z-10 h-auto w-[600px] max-w-[95vw] sm:w-[650px] md:w-[620px]"
            />
          </div>

          <h2 className="mt-4 text-[1.1rem] font-bold uppercase tracking-[0.05em] text-white sm:text-[1.3rem] md:text-[1.55rem] lg:text-[1.78rem]">
            BUILDING AI SYSTEMS FOR REAL PEOPLE DOING REAL WORK
          </h2>

          <p className="opensans mt-4 max-w-4xl text-[1.05rem] leading-8 text-white/78 sm:text-[1.48rem]">
            Cerebryl.Ai develops practical AI capability within individuals and organizations through structured training, applied systems, and real-world implementation.
          </p>
        </section>

        <section className="mt-14 border-t border-white/10 pt-10 text-center">
          <h3 className="mb-8 text-[2rem] font-bold uppercase tracking-[0.12em] text-white sm:text-[2.2rem]">
            WHAT WE OFFER
          </h3>

          <div className="grid items-stretch gap-6 md:grid-cols-2">
            {offerings.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={`group flex h-full flex-col rounded-[26px] border bg-[linear-gradient(180deg,rgba(9,2,34,.62),rgba(10,3,30,.42))] px-7 py-7 backdrop-blur-md transition duration-300 hover:-translate-y-1 ${item.borderClass} ${item.hoverGlowClass}`}
              >
                <div className={`mb-4 flex justify-center transition duration-300 group-hover:scale-[1.04] ${item.iconClass}`}>
                  {item.icon}
                </div>

                <h4 className={`text-[1.9rem] font-medium tracking-[0.05em] ${item.titleClass}`}>
                  {item.title}
                </h4>

                <p className="opensans mx-auto mt-5 max-w-[368px] text-[1.3rem] leading-8 text-white/86">
                  {item.description}
                </p>

                <ul className="opensans mx-auto mt-5 max-w-[430px] flex-1 space-y-2 text-left text-[1rem] leading-7 text-white/86">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className={`mt-2 h-2.5 w-2.5 rounded-full ${item.bulletClass}`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-8 w-full rounded-[12px] border border-white/10 bg-gradient-to-r ${item.buttonClass} px-5 py-3.5 text-center text-[1.02rem] font-bold uppercase tracking-[0.06em] text-white shadow-[0_0_18px_rgba(113,216,255,0.18)] transition duration-300 group-hover:scale-[1.01]`}
                >
                  {item.cta}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative mt-10 rounded-[26px] border border-cyan-300/55 bg-[linear-gradient(180deg,rgba(8,2,35,.58),rgba(10,3,32,.40))] px-6 py-6 shadow-[0_0_22px_rgba(59,223,255,0.10)] backdrop-blur-md sm:px-8">
          <div className="absolute left-0 top-0 rounded-br-2xl rounded-tl-[24px] border-b border-r border-cyan-300/35 bg-[#10032c]/85 px-4 py-2 text-[0.78rem] uppercase tracking-[0.18em] text-cyan-200/90">
            COMING SOON
          </div>

          <div className="grid gap-6 pt-8 md:grid-cols-2 md:items-center max-w-[900px] mx-auto">
            <div>
              <h4 className="whitespace-nowrap text-center text-[1.48rem] font-bold uppercase tracking-[0.05em] text-cyan-300 sm:text-[1.85rem] md:text-[2rem]">
                AI TRAINING COURSE
              </h4>
              <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
                <ul className="opensans space-y-2 text-left text-[0.98rem] leading-7 text-white/86">
                  <li>• Practical, no-fluff framework</li>
                  <li>• Built for founders & operators</li>
                </ul>
                <p className="opensans text-left text-[1rem] leading-8 text-white/82">
                  Learn how to build real AI systems that actually work, step-by-step.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-self-center">
              <div className="flex w-full max-w-[290px] flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="opensans w-full rounded-[12px] border border-white/12 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/38"
                />
                <button className="w-full rounded-[12px] border border-white/12 bg-gradient-to-r from-cyan-400 via-[#8f79ff] to-fuchsia-500 px-7 py-3.5 text-[1rem] font-bold uppercase tracking-[0.06em] text-white shadow-[0_0_18px_rgba(113,216,255,0.14)]">
                  JOIN WAITLIST →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 border-t border-white/12 pt-6">
          <div className="grid items-start gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-center justify-center gap-3 text-left">
                <div className={`${item.className} shrink-0 drop-shadow-[0_0_10px_rgba(103,232,249,0.28)]`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.95rem] font-bold uppercase tracking-[0.05em] text-white">
                    <span className={item.title === 'SECURE & TRUSTED' ? 'whitespace-nowrap' : ''}>
                      {item.title}
                    </span>
                  </div>
                  <div className="opensans mt-0.5 text-[0.84rem] text-white/64">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
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