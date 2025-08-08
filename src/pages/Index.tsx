import Hero from "@/components/sections/Hero";
import ProjectsRow from "@/components/sections/ProjectsRow";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Index = () => {
  const projects = [
    { image: project1, title: "Cinematic Web App", description: "A fast, responsive app with polished UI and DX." },
    { image: project2, title: "Mobile Companion", description: "Seamless mobile experience with offline support." },
    { image: project3, title: "Data Dashboard", description: "Actionable insights with beautiful visualizations." },
    { image: project4, title: "E‑commerce", description: "Conversion‑focused storefront with headless CMS." },
  ];

  return (
    <div>
      {/* Accessible SEO structure */}
      <Hero />

      <main>
        <ProjectsRow id="projects" title="My Projects" items={projects} />
        <ExperienceTimeline />

        <section id="about" className="container py-12 md:py-16">
          <article className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-3 story-link">About</h2>
            <p className="text-muted-foreground">
              I’m a full‑stack developer specializing in performant, accessible web experiences. I love crafting cinematic interfaces that feel effortless and fast.
            </p>
          </article>
        </section>

        <section id="contact" className="container pb-16">
          <h2 className="text-2xl font-semibold mb-3 story-link">Contact</h2>
          <p className="text-muted-foreground mb-4">Ready to collaborate? Email me at <a className="story-link" href="mailto:you@example.com">you@example.com</a>.</p>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name • Netflix‑style portfolio
        </div>
      </footer>
    </div>
  );
};

export default Index;
