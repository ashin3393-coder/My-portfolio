import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
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
    <section id="about" className="py-24 bg-background" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center" data-testid="text-about-title">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p data-testid="text-about-content-1">
              I am an entry-level professional with a strong foundation in data handling and marketing. 
              Currently pursuing my BCom (General) at SRM Institute of Science and Technology with a CGPA of 8.3, 
              I am passionate about leveraging analytical thinking to drive meaningful insights.
            </p>
            <p data-testid="text-about-content-2">
              My journey includes hands-on experience through an auditing internship where I developed skills in 
              tax return filing, document preparation, and data analysis. I am proficient in MS Excel (Advanced) and 
              Power BI (Basics), with soft skills in project management and adaptability that enable me to thrive 
              in dynamic environments.
            </p>
            <p data-testid="text-about-content-3">
              Beyond academics and professional development, I actively contribute to campus life as the Chairman 
              of the Event Management Club and previously served as Cultural Secretary, demonstrating my leadership 
              and organizational capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
