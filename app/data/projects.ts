// app/data/projects.ts

export type Project = {
  title: string;
  subtitle: string;
  year: string;
  role: string;
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "ManaPulse Admin UI",
    subtitle: "ERP Admin Panel für Buchung, HR und Verwaltung",
    year: "2025",
    role: "Full-Stack / .NET & Blazor",
    tech: ["C#", ".NET", "Blazor", "SQL"],
    link: "https://github.com/dein-user/ManaPulse", // TODO: anpassen
  },
  {
    title: "DataBridge Monitoring",
    subtitle: "Monitoring & Logging Dashboard",
    year: "2025",
    role: "Backend & Dashboard",
    tech: ["C#", ".NET", "Blazor", "Logging"],
    link: "https://github.com/dein-user/DataBridge", // TODO: anpassen
  },
  {
    title: "AzubiReports",
    subtitle: "WPF Tool zum Erstellen von Ausbildungsnachweisen",
    year: "2024",
    role: "Desktop Development",
    tech: ["C#", ".NET", "WPF"],
    link: "https://github.com/dein-user/AzubiReports", // TODO: anpassen
  },
];
