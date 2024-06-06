import AboutMe from "@/components/about-me";
import Educations from "@/components/educations";
import FirstScreen from "@/components/first-screen";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <section>
      <FirstScreen />
      <AboutMe />
      <Skills />
      <Educations />
      <Portfolio />
    </section>
  );
}
