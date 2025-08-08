import React from "react";

 type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const items: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer",
    company: "Acme Studios",
    period: "2022 — Present",
    description:
      "Leading UI architecture and performance initiatives. Built design systems and microfrontends for large-scale apps.",
  },
  {
    role: "Full‑stack Engineer",
    company: "Beta Commerce",
    period: "2020 — 2022",
    description:
      "Delivered headless e‑commerce experiences, real‑time dashboards, and improved Core Web Vitals across product pages.",
  },
  {
    role: "Frontend Developer",
    company: "Gamma Analytics",
    period: "2018 — 2020",
    description:
      "Developed data‑rich dashboards with accessibility in mind. Championed testing and CI for UI reliability.",
  },
  {
    role: "Web Developer Intern",
    company: "Delta Media",
    period: "2016 — 2018",
    description:
      "Built marketing sites and component libraries; learned scalable CSS and design token systems.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 story-link">Experience</h2>
        <p className="text-muted-foreground">A quick look at my career so far.</p>
      </header>

      <ol aria-label="Work experience timeline" className="relative border-l border-border pl-6">
        {items.map((item, idx) => (
          <li key={idx} className="relative mb-10 pl-0">
            <span
              aria-hidden
              className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-primary border-2 border-background"
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="font-medium leading-tight">
                {item.role} • {item.company}
              </h3>
              <time className="text-sm text-muted-foreground">{item.period}</time>
            </div>
            <p className="mt-1 text-muted-foreground max-w-3xl">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
