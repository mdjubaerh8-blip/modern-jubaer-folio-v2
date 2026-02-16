import { Code2, Database, BarChart3, FlaskConical } from "lucide-react";

const projects = [
  { icon: BarChart3, title: "Data Analysis Projects", desc: "Exploring datasets with Python and Excel to uncover patterns and insights." },
  { icon: Database, title: "SQL Practice Databases", desc: "Building and querying relational databases to strengthen SQL skills." },
  { icon: Code2, title: "Dashboard Development", desc: "Creating interactive dashboards for visualizing key metrics and KPIs." },
  { icon: FlaskConical, title: "Python Data Exploration", desc: "Using Pandas and NumPy for data manipulation and exploratory analysis." },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Ongoing & <span className="text-gradient">Upcoming Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="section-fade-in bg-card p-6 rounded-xl border border-border hover:border-primary/40 transition-all card-shadow hover-lift text-center"
            >
              <project.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <span className="inline-block text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full mb-3">
                In Development
              </span>
              <h3 className="text-base font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm italic">
          More projects will be published soon.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
