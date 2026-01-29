import SplitSection from "@/components/SplitSection";
import introVisual from "@/assets/intro-visual.jpg";

const IntroSection = () => {
  return (
    <SplitSection
      image={introVisual}
      imageAlt="AI and Education Technology"
      className="relative overflow-hidden"
    >
      <div className="space-y-6">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-foreground">
          Discover AI-Powered Solutions for Education & Research
        </h2>
        
        <div className="space-y-5 text-foreground/80 text-lg md:text-xl leading-relaxed">
          <p>
            Duke Kunshan University provides a growing collection of AI-powered tools to support education, research, and administrative work.
          </p>
          <p>
            This platform brings together university-approved AI tools in one place, helping the DKU community explore, understand, and use AI effectively and responsibly.
          </p>
        </div>
        
        {/* Stats */}
        <div className="flex gap-12 pt-6">
          <div className="space-y-2">
            <span className="text-4xl font-bold text-primary">4+</span>
            <p className="text-sm text-muted-foreground font-medium">AI Tools</p>
          </div>
          <div className="space-y-2">
            <span className="text-4xl font-bold text-secondary">100%</span>
            <p className="text-sm text-muted-foreground font-medium">University Approved</p>
          </div>
        </div>
      </div>
    </SplitSection>
  );
};

export default IntroSection;
