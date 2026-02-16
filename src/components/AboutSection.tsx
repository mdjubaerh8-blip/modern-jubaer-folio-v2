import { Target, TrendingUp, Database, Monitor } from "lucide-react";

const highlights = [
  { icon: Target, label: "Data-Driven Solutions" },
  { icon: TrendingUp, label: "Analytical Thinking" },
  { icon: Database, label: "Database Management" },
  { icon: Monitor, label: "IT Operations" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="section-fade-in">
            <h3 className="text-xl font-semibold text-foreground mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am an IT Executive at Medipath Diagnostic Complex with a strong foundation in computer technology. My journey blends hands-on IT operations with a growing passion for data analysis, SQL databases, and Python-based data exploration.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently pursuing a B.Sc. in Computer Science & Engineering, I am bridging the gap between traditional IT support and modern data science methodologies. I believe in continuous learning and applying technical expertise to solve real-world problems.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-4">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed">
              To transition into a Data Science role where I can leverage my IT background, analytical mindset, and programming skills to extract insights from data and drive informed decision-making. I aim to contribute to organizations that value data-driven innovation.
            </p>
          </div>

          <div className="section-fade-in">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors card-shadow hover-lift text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
