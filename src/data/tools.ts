export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface Tool {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  category: string;
  introduction: string;
  useCases: string[];
  documentation: string[];
  accessTitle: string;
  accessText: string;
  accessButtonText: string;
  accessNote: string;
  securityStatus: string;
  securityDescription: string[];
  tokenUsagePercent: number;
  tokenUsageLabel: string;
  tokenHelperText: string;
  faqs: ToolFAQ[];
  relatedToolIds: string[];
}

export const tools: Tool[] = [
  {
    id: "dku-ai-assistant",
    slug: "dku-ai-assistant",
    name: "DKU AI Assistant",
    tagline: "An AI-powered assistant for writing, ideation, and everyday problem-solving.",
    shortDescription: "A general-purpose AI assistant for writing, brainstorming, and problem-solving.",
    category: "Writing",
    introduction: "DKU AI Assistant is a general-purpose AI tool designed to support the Duke Kunshan University community in writing, brainstorming, and analytical tasks.",
    useCases: [
      "Writing and editing assistance",
      "Idea generation and brainstorming",
      "Code and logic explanation",
      "Academic and administrative support"
    ],
    documentation: [
      "DKU AI Assistant provides conversational AI capabilities that help users generate text, refine ideas, and explore solutions efficiently.",
      "The tool is suitable for drafting documents, summarizing content, refining language, and exploring new ideas. Users should always review and verify AI-generated content before use, especially in academic or official contexts."
    ],
    accessTitle: "Access This Tool",
    accessText: "This tool is available to Duke Kunshan University faculty, staff, and students.",
    accessButtonText: "Apply for Access",
    accessNote: "DKU credentials are required. Access approval may vary by user role.",
    securityStatus: "University-Approved",
    securityDescription: [
      "This tool follows Duke Kunshan University's data security and privacy guidelines.",
      "Sensitive or confidential information should not be entered unless explicitly permitted by university policy."
    ],
    tokenUsagePercent: 65,
    tokenUsageLabel: "65% of allocated tokens used",
    tokenHelperText: "Token usage is shared across the DKU community and resets monthly.",
    faqs: [
      {
        question: "What is this tool mainly used for?",
        answer: "It is designed for writing support, idea generation, and general AI assistance."
      },
      {
        question: "Can I use this tool for academic work?",
        answer: "Yes, but AI-generated content should be reviewed and used in accordance with course and university policies."
      },
      {
        question: "Is my data stored or reused?",
        answer: "Usage data is handled according to university data protection standards."
      },
      {
        question: "Who can I contact for support?",
        answer: "Please contact the DKU AI support team for assistance."
      }
    ],
    relatedToolIds: ["ai-research-helper", "teaching-learning-ai", "administrative-ai-tools"]
  },
  {
    id: "ai-research-helper",
    slug: "ai-research-helper",
    name: "AI Research Helper",
    tagline: "AI-powered research assistance for literature review and academic exploration.",
    shortDescription: "Supports literature review, summarization, and research ideation.",
    category: "Research",
    introduction: "AI Research Helper is designed to assist researchers and students at Duke Kunshan University with literature discovery, summarization, and research ideation.",
    useCases: [
      "Literature review and discovery",
      "Research paper summarization",
      "Citation and reference assistance",
      "Research question formulation"
    ],
    documentation: [
      "AI Research Helper leverages advanced AI capabilities to help users navigate academic literature more efficiently.",
      "The tool can summarize research papers, identify key themes, and assist in formulating research questions. All AI-generated insights should be verified against primary sources."
    ],
    accessTitle: "Access This Tool",
    accessText: "This tool is available to Duke Kunshan University faculty, staff, and students.",
    accessButtonText: "Apply for Access",
    accessNote: "DKU credentials are required. Access approval may vary by user role.",
    securityStatus: "University-Approved",
    securityDescription: [
      "This tool follows Duke Kunshan University's data security and privacy guidelines.",
      "Sensitive or confidential information should not be entered unless explicitly permitted by university policy."
    ],
    tokenUsagePercent: 42,
    tokenUsageLabel: "42% of allocated tokens used",
    tokenHelperText: "Token usage is shared across the DKU community and resets monthly.",
    faqs: [
      {
        question: "What is this tool mainly used for?",
        answer: "It is designed for literature review, research summarization, and academic ideation."
      },
      {
        question: "Can I use this tool for academic work?",
        answer: "Yes, but AI-generated content should be reviewed and used in accordance with course and university policies."
      },
      {
        question: "Is my data stored or reused?",
        answer: "Usage data is handled according to university data protection standards."
      },
      {
        question: "Who can I contact for support?",
        answer: "Please contact the DKU AI support team for assistance."
      }
    ],
    relatedToolIds: ["dku-ai-assistant", "teaching-learning-ai", "administrative-ai-tools"]
  },
  {
    id: "teaching-learning-ai",
    slug: "teaching-learning-ai",
    name: "Teaching & Learning AI",
    tagline: "AI tools designed to enhance teaching materials and student learning experiences.",
    shortDescription: "AI tools designed to enhance teaching materials and student learning.",
    category: "Teaching",
    introduction: "Teaching & Learning AI provides educators and students at Duke Kunshan University with AI-powered tools to enhance course materials and learning experiences.",
    useCases: [
      "Course material development",
      "Interactive learning support",
      "Assessment creation assistance",
      "Personalized learning recommendations"
    ],
    documentation: [
      "Teaching & Learning AI offers a suite of tools designed to support both educators and students in the learning process.",
      "Educators can use the tool to develop course materials, create assessments, and provide personalized feedback. Students can leverage it for study support and concept exploration."
    ],
    accessTitle: "Access This Tool",
    accessText: "This tool is available to Duke Kunshan University faculty, staff, and students.",
    accessButtonText: "Apply for Access",
    accessNote: "DKU credentials are required. Access approval may vary by user role.",
    securityStatus: "University-Approved",
    securityDescription: [
      "This tool follows Duke Kunshan University's data security and privacy guidelines.",
      "Sensitive or confidential information should not be entered unless explicitly permitted by university policy."
    ],
    tokenUsagePercent: 78,
    tokenUsageLabel: "78% of allocated tokens used",
    tokenHelperText: "Token usage is shared across the DKU community and resets monthly.",
    faqs: [
      {
        question: "What is this tool mainly used for?",
        answer: "It is designed for course development, learning support, and educational enhancement."
      },
      {
        question: "Can I use this tool for academic work?",
        answer: "Yes, but AI-generated content should be reviewed and used in accordance with course and university policies."
      },
      {
        question: "Is my data stored or reused?",
        answer: "Usage data is handled according to university data protection standards."
      },
      {
        question: "Who can I contact for support?",
        answer: "Please contact the DKU AI support team for assistance."
      }
    ],
    relatedToolIds: ["dku-ai-assistant", "ai-research-helper", "administrative-ai-tools"]
  },
  {
    id: "administrative-ai-tools",
    slug: "administrative-ai-tools",
    name: "Administrative AI Tools",
    tagline: "AI solutions for improving efficiency in university operations and workflows.",
    shortDescription: "Tools that improve efficiency in university operations and workflows.",
    category: "Admin",
    introduction: "Administrative AI Tools help Duke Kunshan University staff streamline operations, automate routine tasks, and improve workflow efficiency.",
    useCases: [
      "Document processing and organization",
      "Workflow automation",
      "Data analysis and reporting",
      "Communication assistance"
    ],
    documentation: [
      "Administrative AI Tools provide a range of capabilities designed to support university operations and administrative workflows.",
      "These tools can assist with document processing, data analysis, scheduling, and communication tasks. Users should ensure compliance with university policies when handling sensitive information."
    ],
    accessTitle: "Access This Tool",
    accessText: "This tool is available to Duke Kunshan University faculty, staff, and students.",
    accessButtonText: "Apply for Access",
    accessNote: "DKU credentials are required. Access approval may vary by user role.",
    securityStatus: "University-Approved",
    securityDescription: [
      "This tool follows Duke Kunshan University's data security and privacy guidelines.",
      "Sensitive or confidential information should not be entered unless explicitly permitted by university policy."
    ],
    tokenUsagePercent: 31,
    tokenUsageLabel: "31% of allocated tokens used",
    tokenHelperText: "Token usage is shared across the DKU community and resets monthly.",
    faqs: [
      {
        question: "What is this tool mainly used for?",
        answer: "It is designed for administrative support, workflow automation, and operational efficiency."
      },
      {
        question: "Can I use this tool for academic work?",
        answer: "Yes, but AI-generated content should be reviewed and used in accordance with course and university policies."
      },
      {
        question: "Is my data stored or reused?",
        answer: "Usage data is handled according to university data protection standards."
      },
      {
        question: "Who can I contact for support?",
        answer: "Please contact the DKU AI support team for assistance."
      }
    ],
    relatedToolIds: ["dku-ai-assistant", "ai-research-helper", "teaching-learning-ai"]
  }
];

export const getToolBySlug = (slug: string): Tool | undefined => {
  return tools.find(tool => tool.slug === slug);
};

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export const getRelatedTools = (toolId: string): Tool[] => {
  const tool = getToolById(toolId);
  if (!tool) return [];
  return tool.relatedToolIds
    .map(id => getToolById(id))
    .filter((t): t is Tool => t !== undefined);
};
