import { Link } from "react-router-dom";

function HiringIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
      <circle cx="21" cy="24" r="5" stroke="#22d3ee" strokeWidth="3" />
      <circle cx="32" cy="20" r="6" stroke="#22d3ee" strokeWidth="3" />
      <circle cx="43" cy="24" r="5" stroke="#22d3ee" strokeWidth="3" />
      <path
        d="M12 43c1.4-5.5 5.2-8.5 9-8.5 2.6 0 4.8.8 6.6 2.4M25 45c1.8-6.8 6.4-10.5 12-10.5S47.2 38.2 49 45M43 34.5c3.8 0 7.6 3 9 8.5"
        stroke="#22d3ee"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RealEstateIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
      <path
        d="M12 30 32 14l20 16"
        stroke="#22d3ee"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 28v20h28V28"
        stroke="#22d3ee"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M28 48V36h8v12" stroke="#22d3ee" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

function OperationsIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
      <path d="M12 48h40" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 42V30" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 42V22" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 42V14" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
      <path d="m16 24 12-8 10 5 10-9" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const systems = [
  {
    title: "AI Hiring System",
    description: "Find, evaluate, and hire better candidates faster",
    bullets: [
      "Write better job posts",
      "Screen candidates faster",
      "Improve interview questions",
      "Streamline hiring",
      "Create strong job descriptions",
    ],
    price: "$99",
    border: "border-cyan-400/35",
    icon: <HiringIcon />,
  },
  {
    title: "AI Real Estate System",
    description: "Close more deals with less effort",
    bullets: [
      "Write better property listings",
      "Respond to clients faster",
      "Create strong follow-ups",
      "Qualify leads more effectively",
      "Prepare better offers",
    ],
    price: "$119",
    border: "border-fuchsia-400/35",
    icon: <RealEstateIcon />,
  },
  {
    title: "AI Operations System",
    description: "Run your business more efficiently, every day",
    bullets: [
      "Write business emails faster",
      "Create documents & SOPs",
      "Plan tasks & workflows",
      "Summarize information quickly",
      "Organize & manage priorities",
    ],
    price: "$79",
    border: "border-cyan-400/35",
    icon: <OperationsIcon />,
  },
];

const includedLeft = [
  "Structured prompt frameworks for specific tasks",
  "Step-by-step workflows for real-world execution",
  "Pre-built prompts you can use immediately",
  "Guided examples to show exactly how to apply each step",
];

const includedRight = [
  "Clear instructions for consistent results",
  "Practical use cases based on real business scenarios",
  "Flexible prompts you can adapt to your needs",
  "Organized system layout for easy navigation",
];

export default function PromptPacksPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#040712] text-white">
      <img
        src="/images/galaxy-bg-wide1.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-95"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(53,82,255,0.10),transparent_32%),radial-gradient(circle_at_74%_22%,rgba(168,85,247,0.12),transparent_22%),radial-gradient(circle_at_18%_78%,rgba(34,211,238,0.08),transparent_24%)]" />
      <div className="absolute inset-0 bg-black/26" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-6 md:px-10">
        <header className="flex items-center justify-start">
          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-cyan-300/25 bg-white/5 px-4 py-2 font-['Open_Sans'] text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-white/10"
          >
            ← Back to Home
          </Link>
        </header>

        <section className="mx-auto mt-6 flex w-full max-w-5xl flex-col items-center text-center">
          <img
            src="/images/Cerebryl.Ai Transparent sm.png"
            alt="Cerebryl.AI"
            className="mx-auto block h-auto w-[320px] max-w-[82vw] sm:w-[350px] md:w-[380px]"
          />

          <h1 className="mt-7 max-w-5xl font-['Orbitron'] text-[2rem] font-bold uppercase tracking-[0.05em] text-white sm:text-[2.35rem] md:text-[2.75rem]">
            PLUG-AND-PLAY AI SYSTEMS FOR REAL WORK
          </h1>

          <div className="mt-5 max-w-4xl space-y-1.5 font-['Open_Sans'] text-[1rem] leading-8 text-white/82 sm:text-[1.05rem]">
            <p>Practical AI systems built to handle real business tasks, ready to use from day one.</p>
            <p>Built from structured prompts for real-world use.</p>
            <p>Part of the Cerebryl AI Operating System.</p>
          </div>
        </section>

        <section className="mx-auto mt-12 grid w-full max-w-6xl gap-6 md:grid-cols-3">
          {systems.map((system) => (
            <a key={system.title} href="#" className="block h-full">
              <article
                className={`group h-full rounded-[28px] border ${system.border} bg-[linear-gradient(180deg,rgba(16,11,40,0.88),rgba(11,10,28,0.86))] px-7 py-7 backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]`}
              >
                <div className="flex h-full flex-col">
                  <div className="mb-5 flex justify-center">{system.icon}</div>

                  <h2 className="text-center font-['Orbitron'] text-[1.12rem] font-semibold uppercase tracking-[0.04em] text-white">
                    {system.title}
                  </h2>

                  <p className="mt-4 text-center font-['Open_Sans'] text-[0.98rem] leading-7 text-white/82">
                    {system.description}
                  </p>

                  <ul className="mt-5 space-y-3 font-['Open_Sans'] text-[0.96rem] text-white/88">
                    {system.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.65)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <div className="inline-flex w-full items-center justify-center rounded-[12px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-['Orbitron'] text-[1rem] font-semibold uppercase tracking-[0.04em] text-white">
                      BUY NOW - {system.price}
                    </div>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </section>

        <section className="mx-auto mt-10 w-full max-w-6xl rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(13,11,32,0.86),rgba(11,10,24,0.82))] px-8 py-8 backdrop-blur-sm">
          <h3 className="text-center font-['Orbitron'] text-[1.2rem] font-semibold uppercase tracking-[0.08em] text-white">
            WHAT’S INCLUDED IN EACH SYSTEM
          </h3>

          <p className="mt-4 text-center font-['Open_Sans'] text-[1rem] leading-7 text-white/80">
            Each system is built to guide you from start to execution, using structured prompts and clear workflows.
          </p>

          <div className="mt-7 grid gap-x-10 gap-y-0 md:grid-cols-2">
            <ul className="space-y-3 font-['Open_Sans'] text-[0.97rem] leading-7 text-white/88">
              {includedLeft.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.65)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-3 font-['Open_Sans'] text-[0.97rem] leading-7 text-white/88">
              {includedRight.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.65)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 text-center font-['Open_Sans'] text-[1rem] font-semibold text-cyan-100/95">
            Everything you need to start using AI effectively — no experience required.
          </p>
        </section>
      </main>
    </div>
  );
}