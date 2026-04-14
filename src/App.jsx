import { Link } from "react-router-dom";

const cards = [
  {
    title: "AI Systems",
    description: "Practical, step-by-step AI systems designed for real-world tasks.",
    bullets: [
      "Ready-to-use workflows",
      "Built from structured prompts",
      "Designed for immediate application",
      "Clear, guided execution",
    ],
    href: "/prompt-packs",
    icon: "/images/Prompt icon.png",
    border: "border-cyan-400/35",
    glow: "hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]",
  },
  {
    title: "AI Consulting",
    description: "Guidance and implementation support to apply AI effectively.",
    bullets: [
      "Identify high-impact use cases",
      "Build custom workflows",
      "Improve team efficiency",
      "Implement with clarity",
    ],
    href: "#",
    icon: "/images/Business Icon.png",
    border: "border-fuchsia-400/30",
    glow: "hover:shadow-[0_0_35px_rgba(217,70,239,0.16)]",
  },
  {
    title: "AI Training",
    description: "Practical training to help you use AI with confidence.",
    bullets: [
      "Learn practical AI skills",
      "Understand real-world applications",
      "Build confidence using AI",
      "Apply immediately in your work",
    ],
    href: "#",
    icon: "/images/Brain gear.png",
    border: "border-cyan-400/25",
    glow: "hover:shadow-[0_0_35px_rgba(34,211,238,0.14)]",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#040712] text-white">
      <img
        src="/images/galaxy-bg-wide.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(41,92,255,0.10),transparent_35%),radial-gradient(circle_at_75%_20%,rgba(168,85,247,0.12),transparent_22%),radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.08),transparent_25%)]" />
      <div className="absolute inset-0 bg-black/28" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-10 md:px-10">
        <section className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <img
            src="/images/Cerebryl.Ai Transparent sm.png"
            alt="Cerebryl.AI"
            className="relative z-10 mx-auto block h-auto w-[680px] max-w-[95vw] sm:w-[730px] md:w-[780px]"
          />

          <p className="mt-1 font-['Open_Sans'] text-[1.05rem] text-white/92 sm:text-[1.1rem]">
            Engineered Intelligence
          </p>

          <h1 className="mt-4 max-w-5xl font-['Orbitron'] text-[2rem] font-bold uppercase tracking-[0.05em] text-white sm:text-[2.35rem] md:text-[2.85rem] lg:text-[3.05rem]">
            BUILDING AI SYSTEMS FOR REAL PEOPLE DOING REAL WORK
          </h1>

          <p className="mt-4 max-w-4xl font-['Open_Sans'] text-[1.02rem] leading-8 text-white/78 sm:text-[1.08rem]">
            Cerebryl.AI develops practical AI capability within individuals and organizations
            through structured training, applied systems, and real-world implementation.
          </p>
        </section>

        <section className="mx-auto mt-14 w-full max-w-5xl border-t border-white/10 pt-8 text-center">
          <h2 className="font-['Orbitron'] text-[1.9rem] font-bold uppercase tracking-[0.12em] text-white sm:text-[2.1rem]">
            WHAT WE OFFER
          </h2>
        </section>

        <section className="mx-auto mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const content = (
              <article
                className={`group h-full rounded-[28px] border ${card.border} bg-[linear-gradient(180deg,rgba(10,14,35,0.90),rgba(9,11,28,0.84))] px-7 py-7 backdrop-blur-sm transition duration-300 hover:scale-[1.02] ${card.glow}`}
              >
                <div className="flex h-full flex-col">
                  <div className="mb-5 flex justify-center">
                    <img src={card.icon} alt="" className="h-11 w-11 object-contain" />
                  </div>

                  <h3 className="text-center font-['Orbitron'] text-[1.15rem] font-semibold uppercase tracking-[0.04em] text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-center font-['Open_Sans'] text-[0.98rem] leading-7 text-white/82">
                    {card.description}
                  </p>

                  <ul className="mt-5 space-y-3 font-['Open_Sans'] text-[0.98rem] text-white/88">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.65)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <span className="inline-flex items-center rounded-full border border-cyan-300/35 bg-transparent px-5 py-2.5 font-['Open_Sans'] text-[0.95rem] font-semibold text-cyan-100 transition group-hover:border-cyan-200/55 group-hover:bg-cyan-300/8">
                      {card.title === "AI Systems"
                        ? "Explore Systems"
                        : card.title === "AI Consulting"
                        ? "Learn More"
                        : "Join the Waitlist"}
                    </span>
                  </div>
                </div>
              </article>
            );

            if (card.href.startsWith("/")) {
              return (
                <Link key={card.title} to={card.href} className="block h-full">
                  {content}
                </Link>
              );
            }

            return (
              <a key={card.title} href={card.href} className="block h-full">
                {content}
              </a>
            );
          })}
        </section>

        <section className="mx-auto mt-14 w-full max-w-6xl rounded-[24px] border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm">
          <div className="grid gap-4 text-center font-['Open_Sans'] text-sm font-semibold tracking-[0.08em] text-white/72 sm:grid-cols-3">
            <div>Practical AI Implementation</div>
            <div>Structured Systems for Real Work</div>
            <div>Clear Guidance, No Experience Required</div>
          </div>
        </section>
      </main>
    </div>
  );
}