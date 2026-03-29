"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/components/motion";

interface Project {
  title: string;
  detail: string;
  tags: string[];
  href?: string;
  award?: string;
}

interface Job {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  what: string;
  highlights: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Legal Dove",
    detail:
      "The American legal system is complicated — even more so if you can't afford a lawyer. Legal Dove matches people who need pro-bono representation with firms that can actually help. I built the full thing at HackDFW: UI in Figma, frontend in Next.js, data pulled from MongoDB, and a GPT-4 chat flow to help users figure out what kind of help they even need.",
    tags: ["Next.js", "React", "MongoDB", "GPT-4", "Chakra UI"],
    award: "2nd Place — HackDFW",
  },
  {
    title: "Breast Cancer Classifier",
    detail:
      "A machine learning model that predicts whether a tumor is malignant or benign based on patient data. Cleaned and preprocessed clinical data with Pandas, then trained a Decision Tree using scikit-learn. Simple in concept, but getting the data right is what makes or breaks a model like this.",
    tags: ["Python", "scikit-learn", "Pandas", "Machine Learning"],
  },
  {
    title: "Portfolio Rebalancing Research",
    detail:
      "Got into Alpha Labs as one of 10 out of 100+ applicants. Our research group dug into whether dynamic rebalancing strategies actually outperform the classic Markowitz approach when you're trying to maximize Sharpe ratio. Spoiler: it depends heavily on market conditions.",
    tags: ["Quantitative Finance", "Python", "Portfolio Theory", "Research"],
  },
  {
    title: "UFO Tech Networking App",
    detail:
      "UFO Tech runs in-person networking events around a proprietary rotating carousel format — think speed dating but for professionals. I built a web app that accurately models the carousel logic so organizers could manage the experience digitally. Scraping + custom state management to mirror the physical system.",
    tags: ["React", "Web Scraping", "UI/UX"],
    href: "https://ufotech.com",
  },
];

const experience: Job[] = [
  {
    company: "Visa",
    title: "Software Engineer",
    location: "Austin, TX",
    period: "Jan 2026 — Present",
    current: true,
    what: "Full-stack engineering on the Microsoft Dynamics platform — building and maintaining the systems that power internal business operations at one of the world's largest payment networks.",
    highlights: [
      "Integrate backend services, business logic, and user-facing components across the Dynamics stack.",
      "Work across the full product lifecycle — from design to deployment to ongoing support.",
    ],
    tags: ["Microsoft Dynamics", "Full-Stack", "Enterprise"],
  },
  {
    company: "Charles Schwab",
    title: "Software Engineering Intern",
    location: "Southlake, TX",
    period: "Jun 2025 — Aug 2025",
    what: "Built a system that replaced a painful manual process: transaction corrections that used to be done by hand, one at a time, at a fraction of the scale.",
    highlights: [
      "Designed and shipped a full-stack automation tool connecting two internal APIs with predefined correction policies — eliminated the manual correction process entirely.",
      "Scaled throughput from 20K to 50K+ transactions per request.",
      "Backend in C# with solid error handling and logging so nothing silently fails.",
      "Dockerized the whole thing and deployed to internal cloud infrastructure.",
    ],
    tags: ["C#", "Docker", "API Integration", "Cloud"],
  },
  {
    company: "AmerisourceBergen / Cencora",
    title: "Controls Engineering Intern",
    location: "Austin, TX",
    period: "May 2023 — May 2025",
    what: "Spent two years making warehouse operations smarter — real-time visibility tools, better interfaces, and systems that catch problems before they become outages.",
    highlights: [
      "Rolled out real-time visualization dashboards to 23 warehouses across the country.",
      "Redesigned warehouse automation interfaces with proper UI/UX practices — less confusion, fewer mistakes.",
      "Wrote SQL queries against PLC data to find fault patterns, then built an alarm system to catch failures early.",
    ],
    tags: ["SCADA", "SQL", "PLC", "UI/UX", "Ignition"],
  },
  {
    company: "Cummings Electrical",
    title: "Manufacturing Intern",
    location: "Euless, TX",
    period: "May 2022 — Aug 2022",
    what: "First real job in tech. Got hands-on with electrical manufacturing operations and learned a lot about how physical systems actually work.",
    highlights: [],
    tags: ["Manufacturing", "Electrical Systems"],
  },
];

export default function Work() {
  const [tab, setTab] = useState<"projects" | "experience">("experience");

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      {/* Section header */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="relative mb-12">
        <span
          aria-hidden
          className="absolute -top-6 left-0 font-[family-name:var(--font-headline)] font-black text-[8rem] leading-none text-[#161B22] select-none pointer-events-none"
        >
          03
        </span>
        <p className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E] mb-3 relative z-10">
          Work
        </p>
        <h1 className="font-[family-name:var(--font-headline)] font-bold text-4xl md:text-5xl text-[#E6EDF3] relative z-10">
          What I&apos;ve built<br />and where I&apos;ve been.
        </h1>
      </motion.div>

      {/* Tabs */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex gap-0 mb-12 border-b border-[#30363D]"
      >
        {(["experience", "projects"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative px-0 mr-10 pb-4 font-[family-name:var(--font-label)] text-xs tracking-widest uppercase transition-colors ${
              tab === t ? "text-[#E6EDF3]" : "text-[#8B949E] hover:text-[#E6EDF3]"
            }`}
          >
            {t === "projects" ? "Projects" : "Experience"}
            {tab === t && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5B8FFF] rounded-full"
              />
            )}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {tab === "projects" ? (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="border border-[#30363D] bg-[#161B22] rounded p-6 hover:border-[#5B8FFF] transition-all duration-200 hover:-translate-y-0.5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-[family-name:var(--font-headline)] font-bold text-lg text-[#E6EDF3]">
                    {project.title}
                  </h2>
                  {project.award && (
                    <span className="font-[family-name:var(--font-label)] text-[10px] tracking-wide text-[#39D353] border border-[#39D353]/30 bg-[#39D353]/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                      🏆 {project.award}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#8B949E] leading-relaxed flex-1">{project.detail}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-[family-name:var(--font-label)] text-[10px] text-[#39D353] border border-[#30363D] bg-[#0D1117] px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#5B8FFF] hover:underline mt-1"
                  >
                    View Site →
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Timeline connector line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[#30363D]" />

            <div className="space-y-0">
              {experience.map((job, i) => (
                <div key={job.company} className="relative pl-8 pb-10 last:pb-0">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-1 w-3.5 h-3.5 rounded-full border-2 ${job.current ? "border-[#5B8FFF] bg-[#5B8FFF]" : "border-[#30363D] bg-[#0D1117]"}`} />

                  <div className="border border-[#30363D] bg-[#161B22] rounded p-5 hover:border-[#5B8FFF] transition-colors duration-200">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h2 className="font-[family-name:var(--font-headline)] font-bold text-base text-[#E6EDF3]">
                          {job.title}
                        </h2>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-[family-name:var(--font-label)] text-xs text-[#5B8FFF] border border-[#5B8FFF]/30 bg-[#5B8FFF]/10 px-2 py-0.5 rounded">
                            {job.company}
                          </span>
                          {job.current && (
                            <span className="font-[family-name:var(--font-label)] text-[10px] text-[#39D353] border border-[#39D353]/30 bg-[#39D353]/10 px-2 py-0.5 rounded-full">
                              ● CURRENT
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E]">{job.period}</p>
                        <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E] mt-0.5">{job.location}</p>
                      </div>
                    </div>

                    <p className="text-sm text-[#8B949E] leading-relaxed mb-3">{job.what}</p>

                    {job.highlights.length > 0 && (
                      <ul className="space-y-1.5 mb-3">
                        {job.highlights.map((h, j) => (
                          <li key={j} className="text-xs text-[#8B949E] leading-relaxed pl-4 relative before:absolute before:left-0 before:content-['→'] before:text-[#5B8FFF]">
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span key={tag} className="font-[family-name:var(--font-label)] text-[10px] text-[#39D353] border border-[#30363D] bg-[#0D1117] px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="mt-24 pt-6 border-t border-[#30363D]">
        <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E]">
          Smaran Voora · 2025 · Built with Next.js
        </p>
      </div>
    </main>
  );
}
