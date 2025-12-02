"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 lg:px-32"
    >
      <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.35em] text-emerald-400/80">
        Full-Stack Developer & Student
      </p>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
        Manasseé{" "}
        <span className="block md:inline text-emerald-400">
          Mazumbu
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-sm md:text-base text-slate-300">
        Ich bin Fachinformatiker für Anwendungsentwicklung in Ausbildung und
        studiere Angewandte Informatik. Ich baue moderne Anwendungen mit
        .NET, C#, Blazor, WPF und weiteren Technologien – mit Fokus auf
        saubere Architektur, Wartbarkeit und echten Praxisprojekten.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#works"
          className="inline-flex items-center rounded-full border border-emerald-500 px-6 py-2 text-sm font-medium hover:bg-emerald-500 hover:text-slate-950 transition-colors"
        >
          Projekte ansehen
        </a>
        <a
          href="#contact"
          className="inline-flex items-center text-sm text-slate-300 hover:text-emerald-400 underline-offset-4 hover:underline"
        >
          Kontakt aufnehmen
        </a>
      </div>

      <p className="mt-6 text-xs md:text-sm text-slate-500">
        Verfügbar für Praktika, Werkstudentenstellen und Junior-Positionen.
      </p>
    </section>
  );
}
