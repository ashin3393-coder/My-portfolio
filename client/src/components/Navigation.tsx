import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    window.location.href = "/api/download-resume";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl md:text-2xl font-bold text-foreground hover-elevate active-elevate-2 px-3 py-2 -ml-3 rounded-md transition-colors"
              data-testid="link-home"
            >
              Ashin Tom
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-experience"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-contact"
              >
                Contact
              </button>
              <Button
                onClick={handleDownloadResume}
                size="sm"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden pt-20">
          <div className="flex flex-col items-center gap-6 p-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-mobile-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-mobile-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-mobile-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-mobile-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
            <Button onClick={handleDownloadResume} data-testid="button-mobile-download-resume">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
