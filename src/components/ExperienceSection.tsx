import { Briefcase, CheckCircle } from "lucide-react";

const achievements = [
  "Managing IT infrastructure and daily tech operations",
  "Maintaining Laboratory Information Management System (LIMS)",
  "Generating reports and dashboards for operational insights",
  "Handling data entry, analysis, and quality assurance",
  "Network troubleshooting and system maintenance",
  "Resource planning and IT project coordination",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="section-fade-in bg-card p-8 rounded-xl border border-border card-shadow hover-lift">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">IT Executive</h3>
              <p className="text-primary font-medium">Medipath Diagnostic Complex</p>
              <p className="text-muted-foreground text-sm">Feb 2023 – Present · Rajshahi, Bangladesh</p>
            </div>
          </div>

          <ul className="space-y-3">
            {achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
