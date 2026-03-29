"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/motion";

const skills = [
  "C#", "Python", "JavaScript", "TypeScript", "React.js", "Next.js",
  "Tailwind CSS", "SQL", "AWS", "Docker", "C++", "Splunk", "Jira",
];

export default function About() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      {/* Section header */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="relative mb-12">
        <span
          aria-hidden
          className="absolute -top-6 left-0 font-[family-name:var(--font-headline)] font-black text-[8rem] leading-none text-[#161B22] select-none pointer-events-none"
        >
          02
        </span>
        <p className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E] mb-3 relative z-10">
          About
        </p>
        <h1 className="font-[family-name:var(--font-headline)] font-bold text-4xl md:text-5xl text-[#E6EDF3] relative z-10">
          Smaran Voora
        </h1>
      </motion.div>

      {/* Bio card */}
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="border border-[#30363D] bg-[#161B22] rounded p-6 md:p-8 mb-8 leading-relaxed text-[#8B949E] space-y-4"
      >
        <p>
          CS grad from UT Dallas, now a Software Engineer at Visa in Austin. I&apos;ve spent two years
          building warehouse automation systems across 23 facilities, interned at Charles Schwab where I
          scaled transaction throughput from 20K to 50K+, and now work on Microsoft Dynamics implementations at Visa.
        </p>
        <p>
          When I&apos;m not coding, I&apos;m playing pickleball or basketball, baking, or somewhere in one
          of the 15 countries I&apos;ve visited. Send me photos of your pets 🙏
        </p>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {/* Currently */}
        <div className="col-span-2 border border-[#30363D] bg-[#161B22] rounded p-5 hover:border-[#5B8FFF] transition-colors duration-200 group">
          <span className="inline-block font-[family-name:var(--font-label)] text-[10px] tracking-widest uppercase text-[#39D353] border border-[#39D353]/30 bg-[#39D353]/10 px-2 py-0.5 rounded-full mb-3">
            🟢 Working at
          </span>
          <p className="font-[family-name:var(--font-headline)] font-bold text-2xl text-[#E6EDF3] mb-1">Visa</p>
          <p className="font-[family-name:var(--font-label)] text-sm text-[#8B949E]">Software Engineer</p>
          <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E] mt-1">Austin, TX</p>
        </div>

        {/* Education */}
        <div className="border border-[#30363D] bg-[#161B22] rounded p-5 hover:border-[#5B8FFF] transition-colors duration-200">
          <p className="font-[family-name:var(--font-label)] text-[10px] tracking-widest uppercase text-[#8B949E] mb-3">Education</p>
          <p className="font-[family-name:var(--font-headline)] font-bold text-sm text-[#E6EDF3] mb-1">UT Dallas</p>
          <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E] mb-2">B.S. Computer Science</p>
          <span className="font-[family-name:var(--font-headline)] font-bold text-lg text-[#39D353]">3.97</span>
          <span className="font-[family-name:var(--font-label)] text-xs text-[#8B949E]"> / 4.0</span>
        </div>

        {/* Travels */}
        <div className="border border-[#30363D] bg-[#161B22] rounded p-5 hover:border-[#5B8FFF] transition-colors duration-200 flex flex-col justify-between">
          <p className="font-[family-name:var(--font-label)] text-[10px] tracking-widest uppercase text-[#8B949E] mb-3">Around the world</p>
          <div>
            <span className="font-[family-name:var(--font-headline)] font-black text-4xl text-[#5B8FFF]">15</span>
            <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E] mt-1">countries visited</p>
          </div>
        </div>

        {/* Interests */}
        <div className="col-span-2 md:col-span-4 border border-[#30363D] bg-[#161B22] rounded p-5 hover:border-[#5B8FFF] transition-colors duration-200">
          <p className="font-[family-name:var(--font-label)] text-[10px] tracking-widest uppercase text-[#8B949E] mb-4">Interests</p>
          <div className="flex flex-wrap gap-2">
            {["🏓 Pickleball", "🏀 Basketball", "🧁 Baking", "✈️ Travel"].map((item) => (
              <span
                key={item}
                className="border border-[#30363D] bg-[#0D1117] font-[family-name:var(--font-label)] text-xs text-[#8B949E] px-3 py-1.5 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Skills section */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E]">
            03 — Skills
          </span>
          <div className="flex-1 h-px bg-[#30363D]" />
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-[#30363D] bg-[#161B22] font-[family-name:var(--font-label)] text-xs text-[#39D353] px-3 py-1.5 rounded hover:border-[#39D353] transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-24 pt-6 border-t border-[#30363D]">
        <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E]">
          Smaran Voora · 2025 · Built with Next.js
        </p>
      </div>
    </main>
  );
}
