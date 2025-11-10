export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Ashin Tom Sebastian. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion and dedication
          </p>
        </div>
      </div>
    </footer>
  );
}
