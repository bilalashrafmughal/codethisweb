import Navbar from "@/components/sections/Navbar";
import BusinessHero from "@/components/Home/BusinessHero";
import ProblemSolving from "@/components/Home/ProblemSolving";
import BusinessServices from "@/components/Home/BusinessServices";
import SimpleSolutions from "@/components/Home/SimpleSolutions";
import { services } from "@/constants/services";
import Projects from "@/components/sections/Projects";
import Reviews from "@/components/sections/Reviews";
import Approach from "@/components/sections/Approach";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full bg-white dark:bg-black">
      <Navbar />
      <div className="space-y-0">
        <BusinessHero />
        <BusinessServices services={services} limit={3} />
        <ProblemSolving />
        <SimpleSolutions />
        <Projects />
        <Reviews />
        <Approach />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
