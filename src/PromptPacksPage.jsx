import { Link } from "react-router-dom";

export default function PromptPacks() {
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
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#060816] text-white px-6">
      <div className="max-w-6xl mx-auto pt-10">

        <Link to="/" className="text-cyan-300">← Back</Link>

        <h1 className="mt-10 text-3xl text-center font-['Orbitron']">
          PLUG-AND-PLAY AI SYSTEMS FOR REAL WORK
        </h1>

        <p className="mt-4 text-center text-slate-200">
          Practical AI systems built to handle real business tasks, ready to use from day one.  
          Built from structured prompts for real-world use.  
          Part of the Cerebryl AI Operating System.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {systems.map((s) => (
            <div key={s.title} className="p-6 border border-cyan-300/20 rounded-xl bg-white/5">
              <h2 className="text-lg">{s.title}</h2>
              <p className="mt-3 text-slate-200">{s.description}</p>

              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="h-1.5 w-1.5 bg-cyan-300 rounded-full mt-2" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex justify-between items-center">
                <span>{s.price}</span>
                <button className="text-cyan-300">Buy</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 border border-cyan-300/20 rounded-xl bg-white/5">
          <h3>WHAT’S INCLUDED IN EACH SYSTEM</h3>

          <ul className="mt-4 space-y-2">
            <li>Structured prompt frameworks for specific tasks</li>
            <li>Step-by-step workflows for real-world execution</li>
            <li>Pre-built prompts you can use immediately</li>
            <li>Guided examples to apply each step</li>
            <li>Clear instructions for consistent results</li>
            <li>Real-world use cases</li>
            <li>Flexible prompts you can adapt</li>
            <li>Organized system layout</li>
          </ul>

          <p className="mt-4 text-cyan-200">
            Everything you need to start using AI effectively — no experience required.
          </p>
        </div>

      </div>
    </div>
  );
}