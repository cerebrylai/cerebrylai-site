import { Link } from "react-router-dom";

export default function App() {
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
      cta: "Explore Systems",
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
      cta: "Learn More",
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
      cta: "Join the Waitlist",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(63,94,251,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.15),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.14),transparent_25%)]" />
      <div className="absolute inset-0 bg-black/35" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 md:px-10">
        <header className="flex items-center justify-between">
          <img
            src="/images/logo.png"
            alt="Cerebryl.AI"
            className="block h-auto w-[650px] max-w-[95vw] sm:w-[700px] md:w-[750px]"
          />
        </header>

        <section className="mx-auto mt-2 flex w-full max-w-5xl flex-col items-center text-center">
          <p className="font-['Open_Sans'] text-[1.05rem] text-cyan-100/90">
            Engineered Intelligence
          </p>

          <h1 className="mt-4 max-w-4xl font-['Orbitron'] text-[2.2rem] tracking-[0.12em]">
            BUILDING AI SYSTEMS FOR REAL PEOPLE DOING REAL WORK
          </h1>

          <p className="mt-5 max-w-3xl font-['Open_Sans'] text-[1rem] text-slate-200/90">
            Cerebryl.AI develops practical AI capability through structured systems,
            training, and real-world implementation.
          </p>
        </section>

        <section className="mx-auto mt-14 grid w-full max-w-6xl gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.title} to={card.href} className="block h-full">
              <article className="group h-full rounded-[26px] border border-cyan-300/20 bg-white/5 p-7 backdrop-blur-xl hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
                <h2 className="font-['Orbitron'] text-[1.25rem]">{card.title}</h2>

                <p className="mt-4 text-slate-200/90">{card.description}</p>

                <ul className="mt-6 space-y-3">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[6px] h-1.5 w-1.5 bg-cyan-300 rounded-full" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <span className="px-4 py-2 border border-cyan-300/30 rounded-full text-cyan-100">
                    {card.cta}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}