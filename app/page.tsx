import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section
        id="services"
        className="px-6 md:px-16 lg:px-32 py-16 border-t border-slate-800"
      >
        {/* ... Services Platzhalter ... */}
      </section>

      <SelectedWorks />

      {/* Skills, About, Contact bleiben erstmal wie sie sind */}
      {/* ... */}
    </main>
  );
}

