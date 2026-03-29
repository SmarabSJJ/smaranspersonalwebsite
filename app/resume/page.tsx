"use client";

import { motion } from "framer-motion";
import { fadeUpSlow as fadeUp } from "@/components/motion";

interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
}

const experience: Role[] = [
  {
    company: "Visa",
    title: "Software Engineer",
    location: "Austin, TX",
    period: "Jan 2026 – Present",
    bullets: [
      "Engineer and support full-stack solutions on the Microsoft Dynamics platform, integrating backend services, business logic, and user-facing components.",
    ],
  },
  {
    company: "Charles Schwab",
    title: "Software Engineering Intern",
    location: "Southlake, TX",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Designed and implemented a full-stack solution to automate transaction corrections by integrating two internal APIs and applying predefined correction policies, eliminating a manual correction process.",
      "Scaled correction capacity from 20K to 50K+ transactions per request, improving throughput and system performance.",
      "Built backend services in C# with robust error handling, detailed logging, and reliable API communication.",
      "Dockerized the application and deployed it to internal cloud infrastructure, streamlining environment setup.",
    ],
  },
  {
    company: "AmerisourceBergen / Cencora",
    title: "Controls Engineering Intern",
    location: "Austin, TX",
    period: "May 2023 – May 2025",
    bullets: [
      "Deployed visualization tools to 23 warehouses nationwide, providing real-time insight into conveyance system components and improving operational visibility.",
      "Applied UI/UX best practices to design warehouse automation interfaces, streamlining workflows and boosting efficiency.",
      "Queried and analyzed SQL data from PLCs to identify faults; developed an alarm system to reduce equipment failure.",
    ],
  },
];

const skills = [
  "C#", "C++", "Python", "JavaScript", "TypeScript", "React.js", "Next.js",
  "Tailwind CSS", "SQL", "AWS (Cloud Practitioner)", "Docker", "UNIX Shell",
  "Splunk", "Jira", "Ignition / SCADA", "PLC Programming",
];

export default function Resume() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex items-start justify-between mb-14 flex-wrap gap-4 relative"
      >
        <span
          aria-hidden
          className="absolute -top-6 left-0 font-[family-name:var(--font-headline)] font-black text-[8rem] leading-none text-[#161B22] select-none pointer-events-none"
        >
          04
        </span>
        <div className="relative z-10">
          <p className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E] mb-3">
            Résumé
          </p>
          <h1 className="font-[family-name:var(--font-headline)] font-bold text-4xl md:text-5xl text-[#E6EDF3]">
            Smaran Voora
          </h1>
        </div>
        <a
          href="https://docs.google.com/document/d/1NJmmQg3OO4zHLuoFNnydlKuki8DC4SwQYYdbyHstXKg/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="self-end border border-[#5B8FFF] text-[#5B8FFF] font-[family-name:var(--font-label)] text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-[#5B8FFF] hover:text-[#0D1117] transition-all duration-200 rounded relative z-10"
        >
          ↓ Download PDF
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10">
        {/* Left column */}
        <div>
          {/* Education */}
          <motion.section custom={1} variants={fadeUp} initial="hidden" animate="show" className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E]">
                01 — Education
              </span>
              <div className="flex-1 h-px bg-[#30363D]" />
            </div>
            <div className="border border-[#30363D] bg-[#161B22] rounded p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold text-[#E6EDF3]">
                    University of Texas, Dallas
                  </p>
                  <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E] mt-1">
                    B.S. Computer Science
                  </p>
                </div>
                <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E] whitespace-nowrap">
                  Aug 2022 – Dec 2025
                </p>
              </div>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="font-[family-name:var(--font-headline)] font-bold text-2xl text-[#39D353]">3.97</span>
                <span className="font-[family-name:var(--font-label)] text-sm text-[#8B949E]">/ 4.0 GPA</span>
              </div>
              <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E] mt-2">
                Academic Excellence Scholarship · American Airlines Scholar · Wells Fargo Recipient
              </p>
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section custom={2} variants={fadeUp} initial="hidden" animate="show">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E]">
                02 — Experience
              </span>
              <div className="flex-1 h-px bg-[#30363D]" />
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[#30363D]" />
              <div className="space-y-0">
                {experience.map((role) => (
                  <div key={role.company} className="relative pl-8 pb-6 last:pb-0">
                    <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${role.company === "Visa" ? "border-[#5B8FFF] bg-[#5B8FFF]" : "border-[#30363D] bg-[#0D1117]"}`} />
                    <div className="border border-[#30363D] bg-[#161B22] rounded p-4 hover:border-[#5B8FFF] transition-colors duration-200">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <p className="font-[family-name:var(--font-headline)] font-bold text-sm text-[#E6EDF3]">
                            {role.company}
                          </p>
                          <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E]">
                            {role.title} · {role.location}
                          </p>
                        </div>
                        <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E] whitespace-nowrap">
                          {role.period}
                        </p>
                      </div>
                      <ul className="space-y-1">
                        {role.bullets.map((b, i) => (
                          <li key={i} className="text-xs text-[#8B949E] leading-relaxed pl-3 relative before:absolute before:left-0 before:content-['→'] before:text-[#5B8FFF]">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Right column */}
        <div>
          {/* Skills */}
          <motion.section custom={3} variants={fadeUp} initial="hidden" animate="show" className="mb-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E]">
                03 — Skills
              </span>
              <div className="flex-1 h-px bg-[#30363D]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="border border-[#30363D] bg-[#161B22] font-[family-name:var(--font-label)] text-[10px] text-[#39D353] px-2.5 py-1 rounded hover:border-[#39D353] transition-colors duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Highlights */}
          <motion.section custom={4} variants={fadeUp} initial="hidden" animate="show">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E]">
                Highlights
              </span>
              <div className="flex-1 h-px bg-[#30363D]" />
            </div>
            <div className="space-y-3">
              {[
                { value: "23", label: "warehouses automated" },
                { value: "50K+", label: "daily transactions scaled" },
                { value: "3.97", label: "GPA", green: true },
              ].map(({ value, label, green }) => (
                <div key={value} className="border border-[#30363D] bg-[#161B22] rounded p-4 hover:border-[#5B8FFF] transition-colors duration-200">
                  <span className={`font-[family-name:var(--font-headline)] font-black text-3xl ${green ? "text-[#39D353]" : "text-[#5B8FFF]"}`}>
                    {value}
                  </span>
                  <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E] mt-1 uppercase tracking-wide">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-6 border-t border-[#30363D]">
        <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E]">
          Smaran Voora · 2025 · Built with Next.js
        </p>
      </div>
    </main>
  );
}
