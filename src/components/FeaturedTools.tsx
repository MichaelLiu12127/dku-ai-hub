import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { tools } from "@/data/tools";
import { getToolIcon } from "@/components/icons/ToolIcons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturedTools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
        >
          Featured AI Tools
        </motion.h2>
        
        {/* Tools Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tools.map((tool) => {
            const IconComponent = getToolIcon(tool.id);
            
            return (
              <motion.div key={tool.id} variants={item}>
                <Link to={`/tools/${tool.slug}`}>
                  <div className="tool-card p-6 group cursor-pointer h-full flex flex-col">
                    <div className="mb-6">
                      <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors w-fit">
                        <IconComponent size={32} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    
                    <p className="text-foreground/70 text-base leading-relaxed flex-1">
                      {tool.shortDescription}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTools;
