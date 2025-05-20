import FellowshipStatus from "@/components/home/adbanner";
import VideoBanner from "@/components/home/banner";
import LearningModules from "@/components/home/fellowship";
import ExperientialLearning from "@/components/home/imagebanner";
import TestimonialsMob from "@/components/home/mobtestimonials";
import Offerings from "@/components/home/offering";
import Testimonials from "@/components/home/testonomial";

export default function Home() {
  return (
    <div className="bg-white ">
      <VideoBanner />
      <Offerings />
      <LearningModules />
      <div className="hidden md:block">

        <Testimonials />
      </div>
      <div className="block sm:hidden space-y-4">
        <TestimonialsMob />
      </div>
      <FellowshipStatus />
      <ExperientialLearning />
    </div>
  );
}
