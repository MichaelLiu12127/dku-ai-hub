import { motion } from "framer-motion";

const ToolsBanner = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-subtle" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            All AI Tools
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
