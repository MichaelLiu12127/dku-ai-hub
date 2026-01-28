import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { Tool } from "@/data/tools";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolOverviewProps {
  tool: Tool;
}

const ToolOverview = ({ tool }: ToolOverviewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <section ref={ref} className="py-12 md:py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Brief Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-card h-full border-border/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                  Brief Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                  {tool.introduction}
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Primary Use Cases */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="glass-card h-full border-border/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                  Primary Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tool.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <span className="text-foreground/80 text-base md:text-lg">
                        {useCase}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolOverview;
