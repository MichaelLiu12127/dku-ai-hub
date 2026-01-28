import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";
import { Tool } from "@/data/tools";
import { Badge } from "@/components/ui/badge";

interface ToolSecurityProps {
  tool: Tool;
}

const ToolSecurity = ({ tool }: ToolSecurityProps) => {
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
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-6 md:p-8">
            {/* Header with Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/15">
                  <ShieldCheck className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Data Security & Privacy
                </h2>
              </div>
              
              <Badge className="w-fit bg-secondary/15 text-secondary border-secondary/30 hover:bg-secondary/20">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                {tool.securityStatus}
              </Badge>
            </div>
            
            {/* Description */}
            <div className="space-y-3">
              {tool.securityDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-foreground/80 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolSecurity;
