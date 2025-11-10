import { TrendingUp, Package, BarChart3, Globe, FileSpreadsheet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    icon: FileSpreadsheet,
    title: "Financial Analysis of Borosil Renewables Ltd.",
    description: "In-depth financial analysis examining strategic and financial shifts from FY 2021–FY 2024.",
    highlights: [
      "Dashboard showing Debt vs Equity, WACC, and Profit Trends",
      "Visualized with Matplotlib and Excel",
      "Demonstrates analytical and reporting skills"
    ],
    tags: ["Financial Analysis", "Excel", "Matplotlib"],
    color: "bg-chart-1/10 text-chart-1",
  },
  {
    icon: Package,
    title: "Inventory Management FinTech App",
    description: "Developed an inventory management software app designed to help users handle billing and stock with intelligent analytics.",
    highlights: [
      "Features sales tracking, inventory value, and category distribution",
      "Inspired by FinTech fundamentals course",
      "Focus on automation and smart business insights"
    ],
    tags: ["FinTech", "Inventory", "Analytics"],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: TrendingUp,
    title: "Stock Price Forecasting - JPMorgan Chase & Co.",
    description: "Built an ARIMA time-series forecasting model using Python to predict stock price movements for JPMorgan Chase & Co.",
    highlights: [
      "Tools & Libraries: Python, Pandas, Statsmodels, Matplotlib",
      "Financial forecasting and predictive analytics",
      "Quantitative analysis and modeling"
    ],
    tags: ["Python", "ARIMA", "Forecasting"],
    color: "bg-yellow-500/10 text-yellow-700",
  },
  {
    icon: BarChart3,
    title: "Forecasting Barclays Stock Price using ARIMA",
    description: "Predicted future stock prices using ARIMA modeling to understand financial market behavior and performance trends.",
    highlights: [
      "Tools: Python, Pandas, Matplotlib",
      "Mentor: Dr. James Daniel Paul P",
      "Finance and Machine Learning integration"
    ],
    tags: ["Finance", "Machine Learning", "Predictive Analytics"],
    color: "bg-red-500/10 text-red-700",
  },
  {
    icon: Globe,
    title: "Global Data Visualization for Barclays",
    description: "Created a global data visualization dashboard illustrating geographic distribution and regional insights using geospatial data.",
    highlights: [
      "Visualized data across multiple countries",
      "Strengthened understanding of data storytelling",
      "Presented insights using Tableau/Excel maps"
    ],
    tags: ["Data Visualization", "Tableau", "Global Finance"],
    color: "bg-orange-500/10 text-orange-700",
  },
];

export default function ProjectsSection() {
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
    <section id="projects" className="py-24 bg-background" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center" data-testid="text-projects-title">
            Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore my portfolio of data analysis, financial forecasting, and visualization projects
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={project.title}
                  className={`p-6 hover-elevate active-elevate-2 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  data-testid={`card-project-${index}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-md ${project.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-card-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-card-foreground uppercase tracking-wide">
                        Key Highlights
                      </p>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
