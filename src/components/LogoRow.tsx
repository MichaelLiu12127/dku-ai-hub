import { motion } from "framer-motion";
import { tools } from "@/data/tools";
import { getToolIcon } from "@/components/icons/ToolIcons";

const LogoRow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex items-center justify-center gap-8 md:gap-16"
    >
      {tools.map((tool, index) => {
        const IconComponent = getToolIcon(tool.id);
        
        return (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="p-4 md:p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <IconComponent size={40} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default LogoRow;
