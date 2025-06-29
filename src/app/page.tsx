import { Suspense } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import EducationSection from "@/components/sections/education-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import LeadershipSection from "@/components/sections/leadership-section";
import CertificationsSection from "@/components/sections/certifications-section";
import SkillsSection from "@/components/sections/skills-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/footer";

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <div className="container max-w-7xl mx-auto px-4 md:px-8 space-y-28 py-24">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <LeadershipSection />
          <CertificationsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </Suspense>
      <Footer />
    </main>
  );
}