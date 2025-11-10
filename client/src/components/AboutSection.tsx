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
              I am a finance and data analytics enthusiast currently pursuing an MBA in FinTech and AI at Lovely Professional 
              University (2025-2027), building upon my BCom (General) degree from SRM Institute of Science and Technology, where I 
              achieved a CGPA of 8.3. My academic journey has equipped me with a strong foundation in business, finance, 
              artificial intelligence, and data-driven decision making.
            </p>
            <p data-testid="text-about-content-2">
              My professional experience includes an auditing internship at Hurdyaa Adconser Private Limited, where I 
              gained hands-on expertise in tax return filing, auditing, and accounting practices. I am proficient in 
              MS Excel (Advanced), Power BI, and Python, with a proven track record in financial analysis, stock price 
              forecasting using ARIMA models, and creating data visualization dashboards for business insights.
            </p>
            <p data-testid="text-about-content-3">
              I have successfully completed multiple projects in financial analysis and data visualization, including 
              comprehensive analyses of Borosil Renewables, stock forecasting for major financial institutions, and 
              developing a FinTech inventory management application. These projects demonstrate my ability to combine 
              technical skills with financial acumen to deliver actionable insights.
            </p>
            <p data-testid="text-about-content-4">
              Beyond academics, I demonstrate strong leadership as the Chairman of the Event Management Club and previously 
              served as Cultural Secretary, showcasing my organizational capabilities and ability to manage teams effectively. 
              I am multilingual, fluent in English, Hindi, Malayalam, and Tamil, which enables me to collaborate across 
              diverse environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
