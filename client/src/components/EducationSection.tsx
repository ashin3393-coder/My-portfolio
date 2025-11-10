import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const education = [
  {
    degree: "BCom (General)",
    institution: "SRM Institute of Science and Technology, Ramapuram",
    period: "August 2022 - Present",
    grade: "CGPA: 8.3",
  },
  {
    degree: "Higher Secondary",
    institution: "Notredame of HolyCross, Salem",
    period: "June 2020 - May 2021",
    grade: "Percentage: 82%",
  },
  {
    degree: "Secondary",
    institution: "Senthil Public School, Salem",
    period: "June 2010 - March 2019",
    grade: "Percentage: 81%",
  },
];

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-24 bg-background" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="text-education-title">
            Education
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card
                key={edu.degree}
                className={`p-6 hover-elevate active-elevate-2 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-education-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="p-3 bg-primary/10 rounded-md self-start">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {edu.degree}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {edu.grade}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
