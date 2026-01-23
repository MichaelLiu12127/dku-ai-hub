import { motion } from "framer-motion";
import { MessageSquare, BookOpen, GraduationCap, Settings, ArrowUpRight } from "lucide-react";

const allTools = [
  {
    name: "DKU AI Assistant",
    description: "A general-purpose AI assistant for writing, brainstorming, and problem-solving. Perfect for drafting documents, generating ideas, and tackling complex questions.",
    icon: MessageSquare,
    tag: "Writing",
  },
  {
    name: "AI Research Helper",
    description: "Supports literature review, summarization, and research ideation. Streamline your research workflow with intelligent document analysis.",
    icon: BookOpen,
    tag: "Research",
  },
  {
    name: "Teaching & Learning AI",
    description: "AI tools designed to enhance teaching materials and student learning. Create engaging content and personalized learning experiences.",
    icon: GraduationCap,
    tag: "Teaching",
  },
  {
    name: "Administrative AI Tools",
    description: "Tools that improve efficiency in university operations and workflows. Automate routine tasks and enhance productivity.",
    icon: Settings,
    tag: "Admin",
  },
];

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
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {allTools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={item}
              className="tool-card p-8 group cursor-pointer"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors shrink-0">
                  <tool.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <span className="tool-tag">{tool.tag}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Info Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12"
        >
          More tools are being added regularly. Check back for updates!
        </motion.p>
      </div>
    </section>
  );
};

export default ToolsGrid;
