import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FadeIn direction="up">
          <Skills />
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <Projects />
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <Certifications />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
