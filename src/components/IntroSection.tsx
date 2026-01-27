import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import introVisual from "@/assets/intro-visual.jpg";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 gradient-subtle" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Discover AI-Powered Solutions for{" "}
              <span className="text-primary">Education & Research</span>
            </h2>
            
            <div className="space-y-5 text-foreground/85 text-lg md:text-xl leading-relaxed">
              <p>
                Duke Kunshan University provides a growing collection of AI-powered tools to support education, research, and administrative work.
              </p>
              <p>
                This platform brings together university-approved AI tools in one place, helping the DKU community explore, understand, and use AI effectively and responsibly.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="space-y-1">
                <span className="text-3xl font-bold text-primary">4+</span>
                <p className="text-sm text-muted-foreground">AI Tools</p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-bold text-secondary">100%</span>
                <p className="text-sm text-muted-foreground">University Approved</p>
              </div>
            </div>
          </motion.div>
          
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-primary">
              <img
                src={introVisual}
                alt="AI and Education Technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/12 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/12 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
