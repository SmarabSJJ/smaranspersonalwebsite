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
    period: "June 2025 — Aug 2025",
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
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-sm tracking-widest uppercase text-[#C17A3A] mb-6"
      >
        Work
      </motion.p>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-serif text-5xl md:text-6xl leading-tight mb-12"
      >
        What I&apos;ve built<br />and where I&apos;ve been.
      </motion.h1>

      {/* Tabs */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex gap-0 mb-14 border-b border-[#e8e4dc]"
      >
        {(["experience", "projects"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative px-0 mr-10 pb-4 text-xs tracking-widest uppercase transition-colors ${
              tab === t ? "text-[#111]" : "text-[#999] hover:text-[#555]"
            }`}
          >
            {t === "projects" ? "Projects" : "Experience"}
            {tab === t && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-px bg-[#111]"
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
            className="divide-y divide-[#e8e4dc]"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16"
              >
                <div>
                  <h2 className="font-serif text-2xl mb-2">{project.title}</h2>
                  {project.award && (
                    <span className="text-xs text-[#C17A3A] tracking-wide">{project.award}</span>
                  )}
                </div>
                <div>
                  <p className="text-[#444] mb-4 leading-relaxed">{project.detail}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#999] border border-[#ddd] px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-widest uppercase text-[#C17A3A] hover:underline"
                    >
                      View Site →
                    </a>
                  )}
                </div>
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
            className="divide-y divide-[#e8e4dc]"
          >
            {experience.map((job) => (
              <div
                key={job.company}
                className="py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16"
              >
                <div>
                  <h2 className="font-serif text-2xl mb-1">{job.company}</h2>
                  <p className="text-sm text-[#555] mb-1">{job.title}</p>
                  <p className="text-xs text-[#999]">{job.location}</p>
                  <p className="text-xs text-[#999] mt-0.5">{job.period}</p>
                </div>
                <div>
                  <p className="text-[#333] mb-5 leading-relaxed">{job.what}</p>
                  {job.highlights.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {job.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-[#555] leading-relaxed pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-[#C17A3A]">
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#999] border border-[#ddd] px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
