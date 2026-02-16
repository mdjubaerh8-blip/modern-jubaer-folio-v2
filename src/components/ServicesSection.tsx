import { BarChart3, PieChart } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Reporting & Dashboard Creation",
    description: "Designing insightful reports and interactive dashboards using Excel, Google Sheets, and data visualization tools to support data-driven decisions.",
  },
  {
    icon: PieChart,
    title: "Data Analysis Services",
    description: "Transforming raw data into actionable insights through cleaning, analysis, and visualization using Python, SQL, and spreadsheet tools.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Services</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="section-fade-in bg-card p-8 rounded-xl border border-border hover:border-primary/40 transition-all card-shadow hover-lift text-center"
            >
              <service.icon className="w-12 h-12 text-primary mx-auto mb-5" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
              <a
                href="#contact"
                className="inline-block px-5 py-2.5 bg-primary/10 text-primary font-medium text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Let's Work Together
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
