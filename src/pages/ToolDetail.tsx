import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolBanner from "@/components/tool-detail/ToolBanner";
import ToolOverview from "@/components/tool-detail/ToolOverview";
import ToolDocumentation from "@/components/tool-detail/ToolDocumentation";
import ToolAccess from "@/components/tool-detail/ToolAccess";
import ToolSecurity from "@/components/tool-detail/ToolSecurity";
import ToolTokenUsage from "@/components/tool-detail/ToolTokenUsage";
import ToolFAQ from "@/components/tool-detail/ToolFAQ";
import RelatedTools from "@/components/tool-detail/RelatedTools";
import { getToolBySlug } from "@/data/tools";

const ToolDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? getToolBySlug(slug) : undefined;
  
  // Redirect to tools page if tool not found
  if (!tool) {
    return <Navigate to="/tools" replace />;
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ToolBanner tool={tool} />
        <ToolOverview tool={tool} />
        <ToolDocumentation tool={tool} />
        <ToolAccess tool={tool} />
        <ToolSecurity tool={tool} />
        <ToolTokenUsage tool={tool} />
        <ToolFAQ tool={tool} />
        <RelatedTools tool={tool} />
      </main>
      <Footer />
    </div>
  );
};

export default ToolDetail;
