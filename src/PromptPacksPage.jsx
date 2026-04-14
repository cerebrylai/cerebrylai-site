import React from 'react'
import { Link } from 'react-router-dom'

function PromptPacksPage() {
  const promptPacks = [
    {
      title: 'AI RECRUITING PACK',
      href: '/checkout/recruiting-pack',
      icon: '/images/HR Icon.png',
      subtitle: 'Find, evaluate, and hire better candidates faster',
      bullets: [
        'Write better job posts',
        'Screen candidates faster',
        'Improve interview questions',
        'Streamline hiring',
        'Create strong job descriptions',
      ],
      price: '$49',
      borderClass: 'border-cyan-400/70 shadow-[0_0_26px_rgba(34,211,238,0.14)]',
      hoverGlowClass:
        'hover:border-cyan-300 hover:shadow-[0_0_36px_rgba(34,211,238,0.28)]',
      titleClass: 'text-cyan-300',
      buttonClass: 'from-cyan-400 via-[#7c82ff] to-fuchsia-400',
      glow: 'drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]',
      bulletClass: 'bg-cyan-300',
    },
    {
      title: 'AI REAL ESTATE PACK',
      href: '/checkout/real-estate-pack',
      icon: '/images/Real Estate Icon.png',
      subtitle: 'Close more deals with less effort',
      bullets: [
        'Write better property listings',
        'Respond to clients faster',
        'Create strong follow-ups',
        'Qualify leads more effectively',
        'Prepare better offers',
      ],
      price: '$49',
      borderClass: 'border-fuchsia-400/70 shadow-[0_0_26px_rgba(232,121,249,0.14)]',
      hoverGlowClass:
        'hover:border-fuchsia-300 hover:shadow-[0_0_36px_rgba(232,121,249,0.28)]',
      titleClass: 'text-fuchsia-300',
      buttonClass: 'from-cyan-400 via-[#7c82ff] to-fuchsia-400',
      glow: 'drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]',
      bulletClass: 'bg-fuchsia-300',
    },
    {
      title: 'AI OPERATIONS PACK',
      href: '/checkout/operations-pack',
      icon: '/images/Business Icon.png',
      subtitle: 'Run your business more efficiently, every day',
      bullets: [
        'Write business emails faster',
        'Create documents & SOPs',
        'Plan tasks & workflows',
        'Summarize information quickly',
        'Organize & manage priorities',
      ],
      price: '$49',
      borderClass: 'border-cyan-400/70 shadow-[0_0_26px_rgba(34,211,238,0.14)]',
      hoverGlowClass:
        'hover:border-cyan-300 hover:shadow-[0_0_36px_rgba(34,211,238,0.28)]',
      titleClass: 'text-cyan-300',
      buttonClass: 'from-cyan-400 via-[#7c82ff] to-fuchsia-400',
      glow: 'drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]',
      bulletClass: 'bg-cyan-300',
    },
  ]

  const leftItems = [
    'Built as a structured AI workflow system',
    'Copy & paste templates for immediate use',
    'Real work examples (and when to use each one)',
    'Common mistakes and how to avoid them',
  ]

  const rightItems = [
    '6-8 high-impact prompts per pack',
    'Step-by-step guidance for each prompt',
    'Quick-start section for instant results',
    'Designed to save hours of manual work',
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070019] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');
        .orbitron { font-family: 'Orbitron', system-ui, sans-serif; }
        .opensans { font-family: 'Open Sans', system-ui, sans-serif; }
      `}</style>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/galaxy-bg-wide.png')" }}
        />
        <div className="absolute inset-0 bg-[#050816]/58" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,8,22,0.10)_0%,rgba(5,8,22,0.20)_52%,rgba(5,8,22,0.34)_100%)]" />
      </div>

      <main className="orbitron relative z-10 mx-auto flex max-w-[1160px] flex-col items-center px-5 pb-18 pt-8 text-center sm:px-8 lg:px-10">
        <div className="relative flex justify-center">
          <div className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(85,232,255,.10),rgba(223,77,255,.07)_45%,transparent_72%)] blur-3xl" />
          <img
            src="/images/Cerebryl.Ai Transparent sm.png"
            alt="Cerebryl.Ai logo"
            className="relative z-10 h-auto w-[360px] max-w-[88vw] sm:w-[420px] md:w-[460px]"
          />
        </div>

        <h1 className="mt-4 text-[1.1rem] font-bold uppercase tracking-[0.05em] text-white sm:text-[1.3rem] md:text-[1.55rem] lg:text-[1.78rem]">
          Plug-and-Play AI Systems for Real Work
        </h1>

        <p className="opensans mt-4 max-w-4xl text-[1.05rem] leading-8 text-white/78 sm:text-[1.48rem]">
          Practical AI systems built to handle real business tasks, ready to use from day one.
        </p>

        <section className="mt-10 grid w-full max-w-[980px] gap-6 md:grid-cols-3">
          {promptPacks.map((pack) => (
            <Link
              key={pack.title}
              to={pack.href}
              className={`group flex flex-col rounded-[24px] border bg-[linear-gradient(180deg,rgba(9,2,34,.46),rgba(10,3,30,.28))] px-5 py-5 backdrop-blur-lg transition duration-300 hover:-translate-y-1 ${pack.borderClass} ${pack.hoverGlowClass}`}
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={pack.icon}
                  alt={pack.title}
                  className={`h-14 w-14 object-contain transition duration-300 group-hover:scale-[1.05] ${pack.glow}`}
                />
              </div>

              <h2 className={`text-[1.05rem] font-normal tracking-[0.05em] whitespace-nowrap ${pack.titleClass} sm:text-[1.15rem]`}>
                {pack.title}
              </h2>

              <p
                className={`opensans mt-4 text-[0.98rem] leading-6 text-white/84 sm:text-[1.02rem] ${
                  pack.title === 'AI REAL ESTATE PACK' ? 'min-h-[3rem]' : ''
                }`}
              >
                {pack.subtitle}
              </p>

              <ul className="opensans mt-4 flex-1 space-y-1.5 pl-6 text-left text-[0.9rem] leading-[1.45] text-white/84 sm:text-[0.95rem]">
                {pack.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className={`mt-[7px] h-2 w-2 shrink-0 rounded-full ${pack.bulletClass}`} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-7 w-full rounded-[12px] border border-white/10 bg-gradient-to-r ${pack.buttonClass} px-4 py-3 text-center text-[0.95rem] font-bold uppercase tracking-[0.06em] text-white shadow-[0_0_16px_rgba(113,216,255,0.14)] transition duration-300 group-hover:scale-[1.01]`}
              >
                BUY NOW - {pack.price}
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-8 w-full max-w-[980px] rounded-[24px] border border-cyan-300/50 bg-[linear-gradient(180deg,rgba(8,2,35,.42),rgba(10,3,32,.24))] px-6 py-6 shadow-[0_0_20px_rgba(59,223,255,0.08)] backdrop-blur-lg sm:px-8 sm:py-7">
          <h3 className="text-[1.55rem] font-bold tracking-[0.04em] text-fuchsia-300 sm:text-[2rem]">
            Included in Each Prompt Pack
          </h3>

          <div className="mt-6 mx-auto grid max-w-[840px] gap-x-14 gap-y-3 text-left md:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-2">
              {leftItems.map((item) => (
                <div key={item} className="opensans flex items-start gap-3 pl-6 text-[0.98rem] leading-6 text-white/84">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-white/85" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1.5">
              {rightItems.map((item) => (
                <div key={item} className="opensans flex items-start gap-3 pl-6 text-[0.98rem] leading-[1.4] text-white/84">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-white/85" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="opensans mt-6 text-center text-[1rem] font-semibold text-white/92">
            Everything you need to start using AI effectively, no experience required.
          </p>
        </section>

        <div className="mt-8">
          <Link
            to="/"
            className="opensans inline-flex items-center rounded-[12px] border border-white/12 bg-white/6 px-5 py-3 text-[0.95rem] font-semibold text-white/88 backdrop-blur-md transition hover:bg-white/10"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}

export default PromptPacksPage