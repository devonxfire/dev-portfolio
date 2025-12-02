import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  images?: string[]; // Optional array of additional images
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  index: number;
  onCardClick: () => void;
}

const ProjectCard = ({
  title,
  description,
  image,
  images = [],
  technologies,
  githubUrl,
  liveUrl,
  index,
  onCardClick,
}: ProjectCardProps) => {
  const allImages = [image, ...images];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = allImages.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const handleCardClick = () => {
    onCardClick();
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-gradient-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 glow-border animate-fade-up cursor-pointer"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Image Slider */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={allImages[currentImageIndex]}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

        {/* Image navigation arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:border-primary hover:shadow-ember transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:border-primary hover:shadow-ember transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            {/* Image indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {allImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/50 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-full border border-border hover:border-primary hover:shadow-ember transition-all duration-300"
          >
            <Github className="w-6 h-6 text-foreground" />
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary rounded-full hover:scale-110 transition-transform duration-300 shadow-ember"
            >
              <ExternalLink className="w-6 h-6 text-primary-foreground" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-secondary/80 text-muted-foreground rounded-full border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
