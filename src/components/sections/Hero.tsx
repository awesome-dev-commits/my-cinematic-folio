import heroImage from "@/assets/hero-netflix-portfolio.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cinematic Netflix-style background with subtle red glow"
          className="h-[60vh] w-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="hero-aurora" />

      <div className="relative container mx-auto flex min-h-[60vh] flex-col items-start justify-center gap-6">
        <p className="text-sm uppercase tracking-widest text-muted-foreground animate-fade-in">
          Featured Portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-enter">
          Your Name — Netflix‑Style Portfolio
          <span className="block text-muted-foreground text-xl md:text-2xl font-semibold mt-2">
            Building sleek, high-performance apps with a cinematic flair.
          </span>
        </h1>
        <div className="flex flex-wrap gap-3 animate-scale-in">
          <a href="#projects">
            <Button variant="hero" size="xl" className="group">
              Watch My Work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg" className="backdrop-blur hover-scale">
              <Mail /> Contact Me
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
