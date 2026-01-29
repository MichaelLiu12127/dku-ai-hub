import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tool } from "@/data/tools";
import { getToolIcon } from "@/components/icons/ToolIcons";

interface ToolBannerProps {
  tool: Tool;
}

const ToolBanner = ({ tool }: ToolBannerProps) => {
  const IconComponent = getToolIcon(tool.id);
  
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-subtle" />
      
      <div className="section-container relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Tools</span>
          </Link>
        </motion.div>
        
        {/* Icon, Title, and Description */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-5 rounded-2xl bg-card border border-border shadow-lg"
          >
            <IconComponent size={64} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {tool.name}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              {tool.tagline}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolBanner;
