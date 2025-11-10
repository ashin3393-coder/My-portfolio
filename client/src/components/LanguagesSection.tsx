import { Languages } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const languages = [
  { name: "English", proficiency: 90 },
  { name: "Malayalam", proficiency: 95 },
  { name: "Tamil", proficiency: 85 },
  { name: "Hindi", proficiency: 75 },
];

export default function LanguagesSection() {
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

  return (
    <section id="languages" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="text-languages-title">
            Languages
          </h2>

          <Card className="p-8 max-w-3xl mx-auto" data-testid="card-languages">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-md">
                <Languages className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                Multilingual Proficiency
              </h3>
            </div>

            <div className="space-y-6">
              {languages.map((language, index) => (
                <div
                  key={language.name}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  data-testid={`language-${language.name.toLowerCase()}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-card-foreground">
                      {language.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {language.proficiency}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${language.proficiency}%` : "0%",
                        transitionDelay: `${(index + 1) * 100}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
