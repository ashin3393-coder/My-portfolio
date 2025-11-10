import { Briefcase, FileText, BarChart3, Laptop } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const responsibilities = [
    { icon: FileText, text: "Document Preparation" },
    { icon: BarChart3, text: "Data Analysis" },
    { icon: Laptop, text: "Software Usage" },
  ];

  return (
    <section id="experience" className="py-24 bg-background" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="text-experience-title">
            Professional Experience
          </h2>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8" data-testid="card-internship">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-md self-start">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-card-foreground mb-2" data-testid="text-internship-title">
                      Auditing Internship
                    </h3>
                    <p className="text-muted-foreground font-medium mb-1">
                      Hurdyaa Adconser Private Limited
                    </p>
                    <p className="text-primary font-medium" data-testid="text-internship-date">
                      December 2024 - January 2025
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed" data-testid="text-internship-description">
                    Learning about Tax returns Filing and have Hands on experience in Auditing and Accounting. 
                    Developing practical skills in financial documentation and regulatory compliance.
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-3 uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <div className="grid gap-3">
                      {responsibilities.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.text}
                            className={`flex items-center gap-3 transition-all duration-500 ${
                              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                            }`}
                            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                            data-testid={`text-responsibility-${index}`}
                          >
                            <div className="p-2 bg-muted rounded">
                              <Icon className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <span className="text-muted-foreground">{item.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
