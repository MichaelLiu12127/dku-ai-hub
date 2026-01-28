import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Info } from "lucide-react";
import { Tool } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolAccessProps {
  tool: Tool;
}

const ToolAccess = ({ tool }: ToolAccessProps) => {
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
          <Card className="border-gradient overflow-hidden">
            <div className="gradient-primary p-1">
              <div className="bg-card rounded-t-[calc(var(--radius)-4px)]">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                    {tool.accessTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6 pb-8">
                  <p className="text-foreground/80 text-base md:text-lg">
                    {tool.accessText}
                  </p>
                  
                  <Button size="lg" className="btn-hero">
                    {tool.accessButtonText}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <div className="flex items-start justify-center gap-2 text-muted-foreground">
                    <Info className="w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-sm">{tool.accessNote}</p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolAccess;
