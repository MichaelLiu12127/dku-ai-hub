import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3 } from "lucide-react";
import { Tool } from "@/data/tools";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolTokenUsageProps {
  tool: Tool;
}

const ToolTokenUsage = ({ tool }: ToolTokenUsageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <section ref={ref} className="py-12 md:py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="glass-card border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                  Monthly Token Usage
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Usage Label */}
              <div className="flex items-center justify-between">
                <span className="text-foreground/80 text-base md:text-lg">
                  {tool.tokenUsageLabel}
                </span>
                <span className="text-primary font-semibold">
                  {tool.tokenUsagePercent}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <Progress 
                value={tool.tokenUsagePercent} 
                className="h-3 bg-muted"
              />
              
              {/* Helper Text */}
              <p className="text-muted-foreground text-sm">
                {tool.tokenHelperText}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolTokenUsage;
