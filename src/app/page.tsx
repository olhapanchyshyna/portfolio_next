import AboutMe from "@/components/about-me";
import Educations from "@/components/educations";
import FirstScreen from "@/components/first-screen";
import Skills from '@/components/skills'

export default function Home() {
  return (
    <section>
      <FirstScreen />
      <AboutMe />
      <Educations />
      <Skills />
    </section>
  );
}
