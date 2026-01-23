import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolsBanner from "@/components/ToolsBanner";
import ToolsGrid from "@/components/ToolsGrid";

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ToolsBanner />
        <ToolsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
