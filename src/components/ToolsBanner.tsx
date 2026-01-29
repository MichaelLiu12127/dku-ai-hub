import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ToolsBanner = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-subtle" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/80">Complete Collection</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            All <span className="text-primary">AI Tools</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            Explore the complete list of AI tools available at Duke Kunshan University.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsBanner;
