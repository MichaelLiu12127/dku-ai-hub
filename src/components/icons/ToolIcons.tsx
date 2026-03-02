import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
  size?: number;
}

// ChatGPT-inspired icon (hexagonal/circular with inner pattern)
export const ChatGPTIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={cn("text-primary", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="hsl(var(--primary) / 0.1)" />
    <path
      d="M24 10C18.477 10 14 14.477 14 20v4c0 2.21 1.79 4 4 4h1v6l5-6h6c5.523 0 10-4.477 10-10s-4.477-10-10-10h-6z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="22" r="2" fill="currentColor" />
    <circle cx="28" cy="22" r="2" fill="currentColor" />
    <path
      d="M20 26c0 2.21 1.79 4 4 4s4-1.79 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Claude-inspired icon (abstract flowing/organic shape)
export const ClaudeIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={cn("text-primary", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="hsl(var(--secondary) / 0.1)" />
    <path
      d="M16 20c0-4.418 3.582-8 8-8s8 3.582 8 8"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M12 28c0-6.627 5.373-12 12-12s12 5.373 12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
    <circle cx="24" cy="28" r="6" stroke="currentColor" strokeWidth="2" fill="hsl(var(--secondary) / 0.2)" />
    <circle cx="24" cy="28" r="2" fill="currentColor" />
    <path
      d="M18 36l6-8 6 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Gemini-inspired icon (dual/star shape)
export const GeminiIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={cn("text-primary", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="hsl(var(--accent) / 0.1)" />
    {/* Four-pointed star */}
    <path
      d="M24 8L26.5 20.5L38 24L26.5 27.5L24 40L21.5 27.5L10 24L21.5 20.5L24 8Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="hsl(var(--primary) / 0.15)"
      strokeLinejoin="round"
    />
    {/* Inner star */}
    <path
      d="M24 14L25.5 21.5L32 24L25.5 26.5L24 34L22.5 26.5L16 24L22.5 21.5L24 14Z"
      fill="currentColor"
      opacity="0.4"
    />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
  </svg>
);

// GitHub Copilot-inspired icon (pilot/wings shape)
export const CopilotIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={cn("text-primary", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="hsl(var(--primary) / 0.1)" />
    <path
      d="M12 22c0-6.627 5.373-12 12-12s12 5.373 12 12v4c0 2-1 4-3 5l-9 5-9-5c-2-1-3-3-3-5v-4z"
      stroke="currentColor"
      strokeWidth="2"
      fill="hsl(var(--secondary) / 0.15)"
    />
    <ellipse cx="18" cy="22" rx="3" ry="4" fill="currentColor" opacity="0.8" />
    <ellipse cx="30" cy="22" rx="3" ry="4" fill="currentColor" opacity="0.8" />
    <ellipse cx="17" cy="21" rx="1" ry="1.5" fill="hsl(var(--background))" />
    <ellipse cx="29" cy="21" rx="1" ry="1.5" fill="hsl(var(--background))" />
    <path d="M8 26c2-2 4-3 6-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 26c-2-2-4-3-6-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Microsoft Copilot-inspired icon (infinity/ribbon shape)
export const MicrosoftCopilotIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={cn("text-primary", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="hsl(var(--primary) / 0.08)" />
    <path
      d="M14 24c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z"
      stroke="currentColor"
      strokeWidth="2"
      fill="hsl(var(--primary) / 0.15)"
    />
    <path
      d="M22 24c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z"
      stroke="currentColor"
      strokeWidth="2"
      fill="hsl(var(--secondary) / 0.15)"
    />
    <path d="M24 14v-2M24 36v-2M16 16l-1.5-1.5M33.5 33.5L32 32M12 24h-2M38 24h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
);

// Dify-inspired icon (workflow/nodes shape)
export const DifyIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={cn("text-primary", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="hsl(var(--accent) / 0.08)" />
    <rect x="10" y="12" width="10" height="10" rx="3" stroke="currentColor" strokeWidth="2" fill="hsl(var(--primary) / 0.15)" />
    <rect x="28" y="12" width="10" height="10" rx="3" stroke="currentColor" strokeWidth="2" fill="hsl(var(--secondary) / 0.15)" />
    <rect x="19" y="28" width="10" height="10" rx="3" stroke="currentColor" strokeWidth="2" fill="hsl(var(--primary) / 0.2)" />
    <path d="M17 22v3a3 3 0 003 3h0M31 22v3a3 3 0 01-3 3h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Map tool IDs to icons
export const toolIconMap: Record<string, React.FC<IconProps>> = {
  "dku-ai-assistant": ChatGPTIcon,
  "ai-research-helper": ClaudeIcon,
  "teaching-learning-ai": GeminiIcon,
  "administrative-ai-tools": CopilotIcon,
  "microsoft-copilot": MicrosoftCopilotIcon,
  "dify": DifyIcon,
};

export const allHeroIcons: { id: string; icon: React.FC<IconProps>; label: string }[] = [
  { id: "dku-ai-assistant", icon: ChatGPTIcon, label: "DKU AI Assistant" },
  { id: "ai-research-helper", icon: ClaudeIcon, label: "AI Research Helper" },
  { id: "teaching-learning-ai", icon: GeminiIcon, label: "Teaching & Learning AI" },
  { id: "administrative-ai-tools", icon: CopilotIcon, label: "Administrative AI" },
  { id: "microsoft-copilot", icon: MicrosoftCopilotIcon, label: "Microsoft Copilot" },
  { id: "dify", icon: DifyIcon, label: "Dify" },
];

export const getToolIcon = (toolId: string): React.FC<IconProps> => {
  return toolIconMap[toolId] || ChatGPTIcon;
};
