import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Get in <span className="text-primary">Touch</span>
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10">
            For questions or support regarding DKU AI tools, please contact:
          </p>
          
          <motion.a
            href="mailto:ai-support@dukekunshan.edu.cn"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass-card hover:bg-primary/10 transition-colors group"
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
