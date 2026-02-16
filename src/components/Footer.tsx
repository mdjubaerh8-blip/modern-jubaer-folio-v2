import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gradient mb-3">MD Jubaer Hossain</h3>
            <p className="text-muted-foreground text-sm">IT Executive | Data Enthusiast | Aspiring Data Scientist</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Services", "Projects", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/md-jubaer-hossain-4791953ab/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/mdjubaerh8-blip" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Github size={16} />
              </a>
              <a href="mailto:mdjubaerh8@gmail.com" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} MD Jubaer Hossain. All rights reserved.
          </p>
          <p className="text-text-dim text-xs mt-1">
            Built with HTML, CSS & JavaScript | Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
