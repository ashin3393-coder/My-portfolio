import { Award, Users, Music } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    icon: Award,
    title: "NPTEL Training & Development",
    organization: "Swayam",
    date: "April 2023",
    description: "Completed with 75% result",
  },
  {
    icon: Users,
    title: "Chairman - Event Management Club",
    organization: "SRM Ramapuram",
    date: "August 2024",
    description: "Leading campus event planning and execution",
  },
  {
    icon: Music,
    title: "Cultural Secretary",
    organization: "SRM Ramapuram",
    date: "August 2023",
    description: "Organized cultural activities and programs",
  },
];

export default function AchievementsSection() {
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
    <section id="achievements" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="text-achievements-title">
            Achievements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={achievement.title}
                  className={`p-6 hover-elevate active-elevate-2 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  data-testid={`card-achievement-${index}`}
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-md w-fit">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary font-medium mb-1">
                        {achievement.date}
                      </p>
                      <h3 className="text-lg font-semibold text-card-foreground mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
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
