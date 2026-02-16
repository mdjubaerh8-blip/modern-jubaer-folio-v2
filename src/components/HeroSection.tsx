import { Mail, Linkedin, Github } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-6 sm:px-8 lg:px-12 pt-16">
      {/* Subtle radial glow behind image */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text */}
        <div className="order-2 lg:order-1">
          <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-6 animate-fade-up">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 animate-fade-up leading-[0.95]" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-foreground">MD JUBAER</span>
            <br />
            <span className="text-primary">HOSSAIN</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            IT & Data Management Professional |<br className="hidden sm:block" /> Aspiring Data Scientist
          </p>

          <p className="text-muted-foreground/70 max-w-md mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Transforming complex data challenges into efficient solutions through technical expertise, analytical skills, and a passion for continuous learning.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <a href="mailto:mdjubaerh8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/md-jubaer-hossain-4791953ab/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/mdjubaerh8-blip" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image with decorative circles */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative circle top-left */}
            <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full border border-primary/30 hidden sm:block" />
            {/* Decorative circle bottom-right */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full border border-primary/30 hidden sm:block" />

            {/* Main image container */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_40px_hsl(180_70%_50%/0.15)]">
              <img
                src={profileImg}
                alt="MD Jubaer Hossain"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
