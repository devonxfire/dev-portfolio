import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import avatar from "@/assets/avatar-hd.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Avatar */}
        <div
          className="mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-ember rounded-full blur-xl opacity-50 scale-110" />
            <img
              src={avatar}
              alt="devonxfire"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/50 shadow-ember"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">Devon </span>
          <span className="text-gradient">Martindale</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-primary">&lt;</span>
          Full Stack Developer
          <span className="text-primary"> /&gt;</span>
        </p>

        {/* Description */}
        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Crafting modern web applications with passion and precision.
          Leveraging AI technologies to build smarter, faster solutions in
          JavaScript, React, and PostgreSQL.
        </p>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-6 mb-16 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="https://github.com/devonxfire"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-ember"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:devonmartindale@gmail.com"
            className="group relative p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-ember"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/devon-martindale-24b39524"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-ember"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* CTA */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-ember text-primary-foreground font-semibold rounded-xl shadow-ember hover:scale-105 transition-transform duration-300 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          View My Work
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-0">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
