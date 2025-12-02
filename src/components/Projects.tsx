import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectGolf1 from "@/assets/project-golf-1.png";
import projectGolf2 from "@/assets/project-golf-2.png";
import projectGolf3 from "@/assets/project-golf-3.png";
import projectInsta from "@/assets/project-insta.png";
import projectImdb from "@/assets/project-imdb.png";
import projectFood1 from "@/assets/project-food-1.png";
import projectFood2 from "@/assets/project-food-2.png";
import projectFood3 from "@/assets/project-food-3.png";
import projectAudioCalc from "@/assets/project-audio-calc.png";

const projects = [
  {
    title: "DTH Score",
    description:
      "A comprehensive golfing web application to track golf competitions, manage leaderboards, and record player results with real-time updates.",
    image: projectGolf1,
    images: [projectGolf2, projectGolf3],
    technologies: ["JavaScript", "React", "Node.js"],
    githubUrl: "https://github.com/devonxfire/dth-score",
    liveUrl: "https://dth-score-frontend.vercel.app",
  },
  {
    title: "Food Friend",
    description:
      "A full-stack MERN food ordering application featuring restaurant management, shopping cart, Stripe payment integration, and order tracking.",
    image: projectFood1,
    images: [projectFood2, projectFood3],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    githubUrl: "https://github.com/devonxfire/mern-foodfriend-frontend",
    liveUrl: "https://mern-foodfriend-frontend.onrender.com/",
  },
  {
    title: "Audio Length Calculator",
    description:
      "A desktop application that calculates the total duration of multiple audio files with drag-and-drop support, displaying comprehensive statistics.",
    image: projectAudioCalc,
    technologies: ["Python", "Tkinter", "Audio Processing"],
    githubUrl: "https://github.com/devonxfire/audio-length-calc",
  },
  {
    title: "Insta-Next",
    description:
      "A full-featured Instagram clone built with modern web technologies, featuring real-time updates, image uploads, and social interactions.",
    image: projectInsta,
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/devonxfire/insta-next",
  },
  {
    title: "IMDB Clone",
    description:
      "A movie database application showcasing trending films, detailed movie information, and user ratings using the TMDB API.",
    image: projectImdb,
    technologies: ["Next.js", "Tailwind CSS", "TMDB API"],
    githubUrl: "https://github.com/devonxfire/imdb-clone",
    liveUrl: "https://imdb-clone-6o665ueze-devonxfires-projects.vercel.app/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      <section id="projects" className="relative py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for
              building modern, user-friendly applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                onCardClick={() => setSelectedProject(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={projects[selectedProject].title}
          description={projects[selectedProject].description}
          images={[
            projects[selectedProject].image,
            ...(projects[selectedProject].images || []),
          ]}
          technologies={projects[selectedProject].technologies}
          githubUrl={projects[selectedProject].githubUrl}
          liveUrl={projects[selectedProject].liveUrl}
        />
      )}
    </>
  );
};

export default Projects;
