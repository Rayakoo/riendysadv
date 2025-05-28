import AboutMain from "@/components/common/about-main";
import BiodataSection from "@/components/common/biodata";
import VideoMain from "@/components/common/video-main";

export default function About() {
  return (
     <div className="min-h-screen bg-black text-white relative">
          
          <BiodataSection />
          <VideoMain />
       
          <AboutMain />
         
        </div>
  );
}