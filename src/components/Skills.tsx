import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "PostgreSQL", level: 85 },
  { name: "Python", level: 70 },
  { name: "Tailwind CSS", level: 90 },
];

const technologies = [
  "React",
  "Node.js",
  "PostgreSQL",
  "JavaScript",
  "Firebase",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "SQL",
  "MongoDB",
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            // Small delay to ensure smooth rendering
            setTimeout(() => setIsVisible(true), 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Skills Bars */}
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="animate-fade-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-ember rounded-full"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDelay: `${0.15 * index}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Tech Tags */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-5 py-3 bg-secondary/80 text-foreground rounded-xl border border-border hover:border-primary/50 hover:shadow-ember transition-all duration-300 cursor-default animate-fade-up"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
