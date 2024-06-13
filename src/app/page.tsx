import { Contacts } from "@/features/contacts";
import { AboutMe } from "@/widgets/about-me";
import { Educations } from "@/widgets/education";
import { FirstScreen } from "@/widgets/first-screen";
import { Portfolio } from "@/widgets/portfolio";
import { SidePanel } from "@/widgets/side-panel";
import { Skills } from "@/widgets/skills";

export default function Home() {
  return (
    <section>
      <FirstScreen SidePanel={SidePanel} />
      <AboutMe />
      <Portfolio />
      <Educations />
      <Skills />
      <Contacts />
    </section>
  );
}
