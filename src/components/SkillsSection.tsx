import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "Data & Analysis",
    skills: [
      { name: "MS Excel", level: 85 },
      { name: "Google Sheets", level: 80 },
      { name: "Pandas", level: 40 },
      { name: "NumPy", level: 35 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: 60 },
      { name: "SQL", level: 55 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 55 },
      { name: "C", level: 50 },
      { name: "Java", level: 40 },
    ],
  },
  {
    title: "IT & Systems",
    skills: [
      { name: "Networking", level: 75 },
      { name: "Troubleshooting", level: 85 },
      { name: "IT Support", level: 90 },
      { name: "System Maintenance", level: 80 },
      { name: "LIMS", level: 75 },
      { name: "Project Planning", level: 65 },
      { name: "Resource Management", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="section-fade-in bg-card p-6 rounded-xl border border-border card-shadow">
              <h3 className="text-lg font-semibold text-primary mb-5">{group.title}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full progress-bar-fill"
                        style={{ width: visible ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
