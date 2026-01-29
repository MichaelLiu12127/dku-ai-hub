import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { tools } from "@/data/tools";
import { getToolIcon } from "@/components/icons/ToolIcons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ToolsGrid = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {tools.map((tool) => {
            const IconComponent = getToolIcon(tool.id);
            
            return (
              <motion.div key={tool.id} variants={item}>
                <Link to={`/tools/${tool.slug}`}>
                  <div className="tool-card p-8 group cursor-pointer h-full">
                    <div className="flex items-start gap-6">
                      <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors shrink-0">
                        <IconComponent size={40} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {tool.name}
                        </h3>
                        
                        <p className="text-foreground/70 text-lg leading-relaxed">
                          {tool.shortDescription}
                        </p>
                        
                        <div className="flex items-center text-primary font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more
                          <ArrowUpRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
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

export default ToolsGrid;
