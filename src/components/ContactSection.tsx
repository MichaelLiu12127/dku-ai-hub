import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-subtle" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex p-5 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="section-title text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/75 mb-12">
            For questions or support regarding DKU AI tools, please contact:
          </p>
          
          <motion.a
            href="mailto:ai-support@dukekunshan.edu.cn"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center gap-4 px-10 py-5 bg-card border border-border/50 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/30 transition-all group"
          >
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
              ai-support@dukekunshan.edu.cn
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
