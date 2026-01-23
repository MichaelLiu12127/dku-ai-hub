import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">DKU AI Tools</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © Duke Kunshan University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
