import { Download, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import profilePhoto from "@assets/photo_1762786987596.jpeg";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    window.location.href = "/api/download-resume";
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(210, 40%, 96%) 0%, hsl(210, 30%, 98%) 50%, hsl(200, 35%, 97%) 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight" data-testid="text-name">
                Ashin Tom
                <br />
                Sebastian
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium" data-testid="text-title">
                Data & Marketing Professional
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg" data-testid="text-summary">
              Entry-level professional eager to explore and enhance career in data handling and marketing. 
              Specializing in analytical thinking and project management.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                data-testid="button-contact"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                data-testid="button-hero-download"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          <div
            className={`flex justify-center transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-full blur-2xl"></div>
              <img
                src={profilePhoto}
                alt="Ashin Tom Sebastian"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-card shadow-lg"
                data-testid="img-profile"
              />
            </div>
          </div>
        </div>

        <div
          className={`flex justify-center mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
