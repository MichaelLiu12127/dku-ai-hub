import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Ethical Standards",
    description: "Maintaining strong academic values in AI adoption.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Exploring cutting-edge AI solutions for education.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Supporting the entire DKU community.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
          >
            About Our Mission
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border/50 rounded-2xl p-10 md:p-14 text-center shadow-lg mb-16"
          >
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              Duke Kunshan University is committed to exploring the thoughtful and responsible use of artificial intelligence.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              By providing access to curated AI tools, DKU aims to support innovation while maintaining strong academic values and ethical standards.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8"
              >
                <div className="inline-flex p-5 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70 text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
