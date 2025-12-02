import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";
import { useState, useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  description,
  images,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-7xl max-h-[95vh] m-4 bg-card/90 backdrop-blur-xl rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border/50">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
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
          <button
            onClick={onClose}
            className="ml-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary hover:shadow-ember transition-all duration-300"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Image Slider */}
        <div className="flex-1 relative overflow-hidden bg-background/50">
          <img
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/90 backdrop-blur-sm rounded-full border border-border hover:border-primary hover:shadow-ember transition-all duration-300 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/90 backdrop-blur-sm rounded-full border border-border hover:border-primary hover:shadow-ember transition-all duration-300 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full border border-border z-10">
                <span className="text-sm font-mono text-foreground">
                  {currentImageIndex + 1} / {images.length}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Footer with Links */}
        <div className="flex items-center justify-center gap-4 p-6 border-t border-border/50">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-secondary/80 text-foreground rounded-xl border border-border hover:border-primary hover:shadow-ember transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="font-semibold">View Code</span>
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-ember text-primary-foreground rounded-xl shadow-ember hover:scale-105 transition-transform duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-semibold">View Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
