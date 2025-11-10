import { FileSpreadsheet, BarChart3, Users, TrendingUp, Brain, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const skills = [
  {
    icon: FileSpreadsheet,
    title: "MS Excel",
    level: "Advanced",
    description: "Data analysis, pivot tables, advanced formulas",
  },
  {
    icon: BarChart3,
    title: "Power BI",
    level: "Basics",
    description: "Data visualization and reporting dashboards",
  },
  {
    icon: Users,
    title: "Project Management",
    level: "Proficient",
    description: "Team coordination and task organization",
  },
  {
    icon: TrendingUp,
    title: "Adaptability",
    level: "Strong",
    description: "Quick learning and flexible problem-solving",
  },
  {
    icon: Brain,
    title: "Analytic Thinking",
    level: "Strong",
    description: "Data-driven decision making and insights",
  },
  {
    icon: Lightbulb,
    title: "Marketing",
    level: "Growing",
    description: "Strategic planning and campaign development",
  },
];

export default function SkillsSection() {
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
    <section id="skills" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="text-skills-title">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.title}
                  className={`p-6 hover-elevate active-elevate-2 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  data-testid={`card-skill-${skill.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-primary/10 rounded-md">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {skill.level}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-1">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
