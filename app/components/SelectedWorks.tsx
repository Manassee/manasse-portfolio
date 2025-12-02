"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SelectedWorks() {
  return (
    <section
      id="works"
      className="px-6 md:px-16 lg:px-32 py-16 border-t border-slate-800"
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-emerald-400/80">
            Selected Works
          </p>
          <h2 className="text-xl md:text-3xl font-semibold mt-2">
            Projekte
          </h2>
        </div>
        <span className="text-xs md:text-sm text-slate-500">
          {projects.length.toString().padStart(2, "0")} Projekte
        </span>
      </div>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-4"
      >
        {projects.map((project, index) => (
          <motion.li
            key={project.title}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              x: 4,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <a
              href={project.link ?? "#"}
              target={project.link ? "_blank" : "_self"}
              rel="noreferrer"
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-2 rounded-xl border border-slate-800 px-4 py-4 md:px-6 md:py-5 bg-slate-950/60 hover:bg-slate-900/80 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 text-xs text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-medium group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    {project.subtitle}
                  </p>
                  <p className="mt-1 text-[0.7rem] md:text-xs text-slate-500">
                    Rolle: {project.role}
                  </p>
                  <p className="mt-1 text-[0.7rem] md:text-xs text-slate-500">
                    Tech: {project.tech.join(", ")}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 text-right">
                <span className="text-xs md:text-sm text-slate-500">
                  {project.year}
                </span>
                <span className="text-xs md:text-sm text-emerald-400 group-hover:translate-x-1 transition-transform">
                  {project.link ? "View ↗" : "Coming soon"}
                </span>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
