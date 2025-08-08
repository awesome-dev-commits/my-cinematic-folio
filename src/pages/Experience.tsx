import React, { useEffect } from "react";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export default function Experience() {
  useEffect(() => {
    const title = "Work Experience Timeline | Your Name";
    document.title = title;

    const desc = "Work experience timeline showcasing roles, companies, and impact.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    if (meta) meta.setAttribute("content", desc);

    const canonicalHref = `${window.location.origin}/experience`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    if (link) link.setAttribute("href", canonicalHref);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${window.location.origin}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work Experience",
        item: `${window.location.origin}/experience`,
      },
    ],
  } as const;

  return (
    <div>
      <header className="border-b border-border">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-1 story-link">Work Experience</h1>
          <p className="text-muted-foreground">Career timeline, roles, and impact.</p>
        </div>
      </header>

      <main>
        {/* Timeline Section */}
        <ExperienceTimeline />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
