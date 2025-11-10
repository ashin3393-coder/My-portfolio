import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
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
    <section id="contact" className="py-24 bg-background" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <Card className="p-8 max-w-2xl mx-auto" data-testid="card-contact">
            <div className="grid gap-6">
              <a
                href="mailto:ashin3393@gmail.com"
                className="flex items-center gap-4 p-4 rounded-md hover-elevate active-elevate-2 transition-all"
                data-testid="link-email"
              >
                <div className="p-3 bg-primary/10 rounded-md">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">ashin3393@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917604977119"
                className="flex items-center gap-4 p-4 rounded-md hover-elevate active-elevate-2 transition-all"
                data-testid="link-phone"
              >
                <div className="p-3 bg-primary/10 rounded-md">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+91 7604977119</p>
                </div>
              </a>

              <div className="flex gap-4 pt-4 justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12"
                  data-testid="button-linkedin"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/ashin-tom-sebastian-62a544317?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12"
                  data-testid="button-github"
                  asChild
                >
                  <a href="https://github.com/ashin3393-coder" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
