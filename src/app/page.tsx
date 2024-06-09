
import { AboutMe } from "@/widgets/about-me";
import { Contacts } from "@/features/contacts";
import { FirstScreen } from '@/widgets/first-screen'
import { Skills } from '@/widgets/skills'
import { Educations } from '@/widgets/education'
import { Portfolio } from '@/widgets/portfolio'
import { SidePanel } from '@/widgets/side-panel'

export default function Home() {
  return (
    <section>
      <FirstScreen SidePanel={SidePanel}/>
      <AboutMe />
      <Skills />
      <Educations />
      <Portfolio />
      <Contacts />
    </section>
  );
}
