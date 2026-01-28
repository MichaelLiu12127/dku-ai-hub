import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText } from "lucide-react";
import { Tool } from "@/data/tools";

interface ToolDocumentationProps {
  tool: Tool;
}

const ToolDocumentation = ({ tool }: ToolDocumentationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <section ref={ref} className="py-12 md:py-16 relative">
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Detailed Documentation
            </h2>
          </div>
          
          {/* Documentation Content */}
          <div className="glass-card p-6 md:p-8 space-y-4">
            {tool.documentation.map((paragraph, index) => (
              <p
                key={index}
                className="text-foreground/80 text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolDocumentation;
