import { Github, Mail, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[200px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:devonmartindale@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-ember text-primary-foreground font-semibold rounded-xl shadow-ember hover:scale-105 transition-transform duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://github.com/devonxfire"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-foreground font-semibold rounded-xl border border-border hover:border-primary/50 hover:shadow-ember transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub Profile
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/devonxfire"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:shadow-ember transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/devon-martindale-24b39524"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:shadow-ember transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:devonmartindale@gmail.com"
              className="p-4 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:shadow-ember transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
