import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SplitSectionProps {
  title?: string;
  children: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
  id?: string;
}

const SplitSection = ({ 
  title, 
  children, 
  image, 
  imageAlt, 
  reverse = false,
  className = "",
  id 
}: SplitSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="section-container">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
          >
            {title}
          </motion.h2>
        )}
        
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`space-y-8 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {children}
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
