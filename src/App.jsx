import { Link } from "react-router-dom";

function SystemsIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11" fill="none" aria-hidden="true">
      <path
        d="M22 43c-7 0-13-5.4-13-12.3C9 24.2 14.6 19 21.3 19c2 0 3.8.4 5.5 1.2C29.2 14.1 34.8 10 41.3 10 50 10 57 17 57 25.7c0 1.1-.1 2.1-.4 3.1 3.3 1.4 5.4 4.6 5.4 8.1 0 4.8-3.9 8.6-8.8 8.6H22Z"
        stroke="#22d3ee"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="33" r="8" stroke="#22d3ee" strokeWidth="3" />
      <path
        d="M40 20v5m0 16v5m13-13h-5M32 33h-5m17.2-9.2-3.5 3.5m-1.4 11.4 3.5 3.5M44.2 42.2l-3.5-3.5M35.8 27.3l-3.5-3.5"
        stroke="#22d3ee"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConsultingIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11" fill="none" aria-hidden="true">
      <circle cx="22" cy="24" r="7" stroke="#e879f9" strokeWidth="3" />
      <path
        d="M10 45c1.7-6.6 6.2-10 12-10s10.3 3.4 12 10"
        stroke="#e879f9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M39 20h12c4.4 0 8 3.6 8 8s-3.6 8-8 8h-1.2L43 42v-6h-4c-4.4 0-8-3.6-8-8"
        stroke="#e879f9"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="44" cy="28" r="1.5" fill="#e879f9" />
      <circle cx="50" cy="28" r="1.5" fill="#e879f9" />
      <circle cx="56" cy="28" r="1.5" fill="#e879f9" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
        stroke="#22d3ee"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z"
        stroke="#7dd3fc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M9 4a3 3 0 0 0-3 3v.4A3.5 3.5 0 0 0 4 10.5c0 1 .4 2 1.1 2.7A3.5 3.5 0 0 0 8.5 19H11V4H9Zm6 0a3 3 0 0 1 3 3v.4a3.5 3.5 0 0 1 2 3.1c0 1-.4 2-1.1 2.7A3.5 3.5 0 0 1 15.5 19H13V4h2Z"
        stroke="#22d3ee"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 9h3M8 14h3M13 9h3M13 14h3" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M7 11V8a5 5 0 0 1 10 0v3m-9 0h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z"
        stroke="#7dd3fc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#040712] text-white">
      <img
        src="/images/galaxy-bg-wide.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-95"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(53,82,255,0.10),transparent_32%),radial-gradient(circle_at_74%_22%,rgba(168,85,247,0.12),transparent_22%),radial-gradient(circle_at_18%_78%,rgba(34,211,238,0.08),transparent_24%)]" />
      <div className="absolute inset-0 bg-black/26" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-4 md:px-10">
        <section className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <img
            src="/images/Cerebryl.Ai Transparent sm.png"
            alt="Cerebryl.AI"
            className="relative z-10 mx-auto block h-auto w-[760px] max-w-[98vw] sm:w-[820px] md:w-[860px]"
          />

          <p className="mt-0 font-['Open_Sans'] text-[1.1rem] text-white/92 sm:text-[1.15rem]">
            Engineered Intelligence
          </p>

          <h1 className="mt-2 max-w-5xl font-['Orbitron'] text-[2rem] font-bold uppercase tracking-[0.05em] text-white sm:text-[2.35rem] md:text-[2.85rem] lg:text-[3.05rem]">
            BUILDING AI SYSTEMS FOR REAL PEOPLE DOING REAL WORK
          </h1>

          <p className="mt-4 max-w-4xl font-['Open_Sans'] text-[1.03rem] leading-8 text-white/82 sm:text-[1.08rem]">
            Cerebryl.AI develops practical AI capability within individuals and organizations
            through structured training, applied systems, and real-world implementation.
          </p>
        </section>

        <section className="mx-auto mt-14 w-full max-w-5xl border-t border-white/10 pt-8 text-center">
          <h2 className="font-['Orbitron'] text-[1.9rem] font-bold uppercase tracking-[0.12em] text-white sm:text-[2.1rem]">
            WHAT WE OFFER
          </h2>
        </section>

        <section className="mx-auto mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-2">
          <Link to="/systems" className="block h-full">
            <article className="group h-full rounded-[28px] border border-cyan-400/35 bg-[linear-gradient(180deg,rgba(13,11,36,0.92),rgba(10,10,27,0.86))] px-8 py-8 backdrop-blur-sm transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
              <div className="mb-5 flex justify-center">
                <SystemsIcon />
              </div>

              <h3 className="text-center font-['Orbitron'] text-[1.15rem] font-semibold uppercase tracking-[0.04em] text-cyan-300">
                AI SYSTEMS
              </h3>

              <p className="mt-4 text-center font-['Open_Sans'] text-[1rem] leading-8 text-white/84">
                Professionally engineered AI systems ready to use.
              </p>

              <ul className="mt-5 space-y-3 font-['Open_Sans'] text-[0.98rem] text-white/88">
                <li className="flex items-start gap-3">
                  <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.65)]" />
                  <span>Save hours of trial and error</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.65)]" />
                  <span>Optimized for high-quality output</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.65)]" />
                  <span>Instant access and easy to use</span>
                </li>
              </ul>

              <div className="mt-8">
                <div className="inline-flex w-full items-center justify-center rounded-[12px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-['Orbitron'] text-[1rem] font-semibold uppercase tracking-[0.04em] text-white">
                  Explore Systems →
                </div>
              </div>
            </article>
          </Link>

          <a href="#" className="block h-full">
            <article className="group h-full rounded-[28px] border border-fuchsia-400/35 bg-[linear-gradient(180deg,rgba(18,10,42,0.90),rgba(12,10,27,0.86))] px-8 py-8 backdrop-blur-sm transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(217,70,239,0.16)]">
              <div className="mb-5 flex justify-center">
                <ConsultingIcon />
              </div>

              <h3 className="text-center font-['Orbitron'] text-[1.15rem] font-semibold uppercase tracking-[0.04em] text-fuchsia-300">
                AI CONSULTING
              </h3>

              <p className="mt-4 text-center font-['Open_Sans'] text-[1rem] leading-8 text-white/84">
                Custom AI systems to streamline your workflow and scale your business.
              </p>

              <ul className="mt-5 space-y-3 font-['Open_Sans'] text-[0.98rem] text-white/88">
                <li className="flex items-start gap-3">
                  <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-fuchsia-300 shadow-[0_0_10px_rgba(232,121,249,0.55)]" />
                  <span>Personalized AI system setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-fuchsia-300 shadow-[0_0_10px_rgba(232,121,249,0.55)]" />
                  <span>Workflow automation & integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-fuchsia-300 shadow-[0_0_10px_rgba(232,121,249,0.55)]" />
                  <span>Scalable solutions for your business</span>
                </li>
              </ul>

              <div className="mt-8">
                <div className="inline-flex w-full items-center justify-center rounded-[12px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-['Orbitron'] text-[1rem] font-semibold uppercase tracking-[0.04em] text-white">
                  Book a Call →
                </div>
              </div>
            </article>
          </a>
        </section>

        <section className="mx-auto mt-8 w-full max-w-6xl rounded-[28px] border border-cyan-400/25 bg-[linear-gradient(180deg,rgba(16,11,40,0.88),rgba(11,10,28,0.86))] px-8 py-8 backdrop-blur-sm">
          <div className="mb-5 inline-flex rounded-tr-[14px] rounded-br-[14px] border border-cyan-400/30 bg-[#101433] px-4 py-1 font-['Orbitron'] text-[0.95rem] uppercase tracking-[0.06em] text-cyan-200">
            Coming Soon
          </div>

          <div className="grid items-start gap-8 md:grid-cols-[1fr_1.25fr_0.95fr]">
            <div>
              <h3 className="font-['Orbitron'] text-[2rem] font-semibold uppercase tracking-[0.04em] text-cyan-300">
                AI Training Course
              </h3>

              <ul className="mt-6 space-y-3 font-['Open_Sans'] text-[1rem] leading-8 text-white/88">
                <li>• Practical, no-fluff framework</li>
                <li>• Built for founders & operators</li>
              </ul>
            </div>

            <div className="pt-[58px] font-['Open_Sans'] text-[1rem] leading-8 text-white/88">
              Learn how to build real AI systems that actually work, step-by-step.
            </div>

            <div className="flex flex-col items-end justify-start gap-4 pt-[44px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[54px] w-full max-w-[280px] rounded-[14px] border border-white/10 bg-[#151936] px-5 font-['Open_Sans'] text-white placeholder:text-white/40 outline-none"
              />
              <button className="h-[54px] w-full max-w-[280px] rounded-[14px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-['Orbitron'] text-[1rem] font-semibold uppercase tracking-[0.04em] text-white shadow-[0_0_18px_rgba(217,70,239,0.22)] transition hover:scale-[1.01]">
                Join Waitlist →
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 pt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <DeliveryIcon />
              <div>
                <div className="font-['Orbitron'] text-[1rem] font-semibold uppercase tracking-[0.05em] text-white">
                  Fast Delivery
                </div>
                <div className="mt-1 font-['Open_Sans'] text-[0.93rem] text-white/68">
                  Get results immediately
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldIcon />
              <div>
                <div className="font-['Orbitron'] text-[1rem] font-semibold uppercase tracking-[0.05em] text-white">
                  Proven Systems
                </div>
                <div className="mt-1 font-['Open_Sans'] text-[0.93rem] text-white/68">
                  Tested and optimized
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BrainIcon />
              <div>
                <div className="font-['Orbitron'] text-[1rem] font-semibold uppercase tracking-[0.05em] text-white">
                  AI Expertise
                </div>
                <div className="mt-1 font-['Open_Sans'] text-[0.93rem] text-white/68">
                  Built for real work
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <LockIcon />
              <div>
                <div className="font-['Orbitron'] text-[1rem] font-semibold uppercase tracking-[0.05em] text-white">
                  Secure & Trusted
                </div>
                <div className="mt-1 font-['Open_Sans'] text-[0.93rem] text-white/68">
                  Privacy focused
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}