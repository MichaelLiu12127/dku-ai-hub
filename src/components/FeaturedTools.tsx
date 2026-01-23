import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, BookOpen, GraduationCap, Settings, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    name: "DKU AI Assistant",
    description: "A general-purpose AI assistant for writing, brainstorming, and problem-solving.",
    icon: MessageSquare,
    tag: "Writing",
  },
  {
    name: "AI Research Helper",
    description: "Supports literature review, summarization, and research ideation.",
    icon: BookOpen,
    tag: "Research",
  },
  {
    name: "Teaching & Learning AI",
    description: "AI tools designed to enhance teaching materials and student learning.",
    icon: GraduationCap,
    tag: "Teaching",
  },
  {
    name: "Administrative AI Tools",
    description: "Tools that improve efficiency in university operations and workflows.",
    icon: Settings,
    tag: "Admin",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturedTools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Featured <span className="text-primary">AI Tools</span>
          </h2>
          <p className="text-foreground/75 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our curated collection of AI-powered solutions designed for the DKU community.
          </p>
        </motion.div>
        
        {/* Tools Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={item}
              className="tool-card p-6 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <tool.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="tool-tag">{tool.tag}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              
              <p className="text-foreground/70 text-base leading-relaxed mb-4">
                {tool.description}
              </p>
              
              <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-medium hover:bg-primary/10 transition-colors"
          >
            View All Tools
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTools;
