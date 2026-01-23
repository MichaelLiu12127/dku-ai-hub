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
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              About <span className="text-primary">Our Mission</span>
            </h2>
            
            <div className="glass-card p-8 md:p-12 text-center">
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-5">
                Duke Kunshan University is committed to exploring the thoughtful and responsible use of artificial intelligence.
              </p>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
                By providing access to curated AI tools, DKU aims to support innovation while maintaining strong academic values and ethical standards.
              </p>
            </div>
          </motion.div>
          
          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground/70 text-base">
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
