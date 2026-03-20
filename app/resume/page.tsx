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
    period: "June 2025 – August 2025",
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
  "Splunk", "Jira", "Ignition / SCADA", "PLC Programming", "VLSI / Cadence",
];

export default function Resume() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <div className="flex items-start justify-between mb-16 flex-wrap gap-4">
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-sm tracking-widest uppercase text-[#C17A3A] mb-3"
          >
            Resume
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-serif text-5xl md:text-6xl leading-tight"
          >
            Smaran Voora
          </motion.h1>
        </div>
        <motion.a
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          href="https://docs.google.com/document/d/1NJmmQg3OO4zHLuoFNnydlKuki8DC4SwQYYdbyHstXKg/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="self-end border border-[#111] px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-[#111] hover:text-[#F8F6F1] transition-colors duration-200"
        >
          Download PDF
        </motion.a>
      </div>

      {/* Education */}
      <motion.section custom={3} variants={fadeUp} initial="hidden" animate="show" className="mb-14">
        <h2 className="font-serif text-2xl mb-6 pb-3 border-b border-[#e8e4dc]">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1 mb-3">
          <div>
            <p className="font-medium">University of Texas, Dallas</p>
            <p className="text-[#555] text-sm">Bachelor of Computer Science — GPA: 3.97 / 4.0</p>
          </div>
          <p className="text-sm text-[#999] md:text-right">Aug 2022 – Dec 2025</p>
        </div>
        <p className="text-sm text-[#555] mt-2">
          Relevant: Data Structures & Algorithms, Software Engineering, Machine Learning, Database Systems, VLSI
        </p>
        <p className="text-sm text-[#999] mt-1">
          Academic Excellence Scholarship · American Airlines Education Scholar · Wells Fargo Scholarship Recipient
        </p>
      </motion.section>

      {/* Experience */}
      <motion.section custom={4} variants={fadeUp} initial="hidden" animate="show" className="mb-14">
        <h2 className="font-serif text-2xl mb-6 pb-3 border-b border-[#e8e4dc]">Experience</h2>
        <div className="space-y-10">
          {experience.map((role) => (
            <div key={role.company}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1 mb-3">
                <div>
                  <p className="font-medium">{role.company}</p>
                  <p className="text-[#555] text-sm">{role.title} · {role.location}</p>
                </div>
                <p className="text-sm text-[#999] md:text-right">{role.period}</p>
              </div>
              <ul className="space-y-2">
                {role.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-[#444] leading-relaxed pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-[#C17A3A]">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section custom={5} variants={fadeUp} initial="hidden" animate="show">
        <h2 className="font-serif text-2xl mb-6 pb-3 border-b border-[#e8e4dc]">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="border border-[#ddd] px-3 py-1 text-xs text-[#555] hover:border-[#C17A3A] hover:text-[#C17A3A] transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
