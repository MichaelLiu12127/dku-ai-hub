import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can use these AI tools?",
    answer: "These tools are available to Duke Kunshan University faculty, staff, and students.",
  },
  {
    question: "Are these tools officially approved by the university?",
    answer: "Yes. The tools listed on this platform are reviewed and supported by DKU.",
  },
  {
    question: "Do these tools require special accounts?",
    answer: "Some tools may require DKU credentials or separate registration.",
  },
  {
    question: "How should AI be used responsibly?",
    answer: "Users are expected to follow DKU's policies on ethical and responsible AI use.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-foreground/75 text-lg md:text-xl">
            Find answers to common questions about DKU AI Tools.
          </p>
        </motion.div>
          
          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base md:text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pb-5 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
