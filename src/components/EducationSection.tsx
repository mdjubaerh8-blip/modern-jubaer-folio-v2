import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in CSE",
    status: "(Ongoing)",
    institution: "North Bengal International University",
    grade: "",
    year: "Present",
  },
  {
    degree: "Diploma in Engineering in Computer Technology",
    status: "",
    institution: "Bangladesh Polytechnic Institute",
    grade: "Grade: 3.78 / 4",
    year: "2023",
  },
  {
    degree: "SSC in Vocational (Computer & IT)",
    status: "",
    institution: "Rajshahi Court Technical And Business Management College",
    grade: "GPA: 4.39 / 5",
    year: "2018",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-8">
            {education.map((item, i) => (
              <div key={i} className="section-fade-in relative flex gap-6">
                <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary items-center justify-center z-10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 bg-card p-6 rounded-lg border border-border hover:border-primary/40 transition-colors card-shadow hover-lift">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.degree} {item.status && <span className="text-primary text-sm">{item.status}</span>}
                    </h3>
                    <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">{item.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
                  {item.grade && <p className="text-primary text-sm font-medium">{item.grade}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
