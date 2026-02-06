import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FreeBooksBanner from '@/components/FreeBooksBanner';
import AboutProgramme from '@/components/AboutProgramme';
import Subjects from '@/components/Subjects';
import WhoShouldJoin from '@/components/WhoShouldJoin';
import ProgrammeStructure from '@/components/ProgrammeStructure';
import PerformanceTracking from '@/components/PerformanceTracking';
import OfflineProgramme from '@/components/OfflineProgramme';
import OnlineProgramme from '@/components/OnlineProgramme';
import ProgrammeOptions from '@/components/ProgrammeOptions';
import StudentOutcomes from '@/components/StudentOutcomes';
import WhyARK from '@/components/WhyARK';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <FreeBooksBanner />
      <AboutProgramme />
      <Subjects />
      <WhoShouldJoin />
      <ProgrammeStructure />
      <PerformanceTracking />
      <OfflineProgramme />
      <OnlineProgramme />
      <ProgrammeOptions />
      <StudentOutcomes />
      <WhyARK />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
