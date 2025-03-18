import FellowshipStatus from "@/components/home/adbanner";
import VideoBanner from "@/components/home/banner";
import LearningModules from "@/components/home/fellowship";
import ExperientialLearning from "@/components/home/imagebanner";
import Offerings from "@/components/home/offering";
import Testimonials from "@/components/home/testonomial";

export default function Home() {
  return (
    <div className="bg-white">
      <VideoBanner />
      <Offerings />
      

      <LearningModules />
     
      <Testimonials />
      <FellowshipStatus />
      <ExperientialLearning />
    </div>
  );
}
