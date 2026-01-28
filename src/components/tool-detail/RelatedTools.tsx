import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Grid3X3 } from "lucide-react";
import { Tool, getRelatedTools } from "@/data/tools";
import { getToolIcon } from "@/components/icons/ToolIcons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RelatedToolsProps {
  tool: Tool;
}

const RelatedTools = ({ tool }: RelatedToolsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const relatedTools = getRelatedTools(tool.id);
  
  if (relatedTools.length === 0) return null;
  
  return (
    <section ref={ref} className="py-12 md:py-16">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 rounded-lg bg-primary/10">
            <Grid3X3 className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Related Tools
          </h2>
        </motion.div>
        
        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedTools.map((relatedTool, index) => {
            const IconComponent = getToolIcon(relatedTool.id);
            
            return (
              <motion.div
                key={relatedTool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Link to={`/tools/${relatedTool.slug}`}>
                  <Card className="tool-card h-full group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                          <IconComponent size={32} />
                        </div>
                        <div className="flex-1">
                          <div className="tool-tag mb-2">{relatedTool.category}</div>
                          <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {relatedTool.name}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/75 text-sm md:text-base leading-relaxed mb-4">
                        {relatedTool.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedTools;
