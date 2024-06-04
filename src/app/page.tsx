import AboutMe from '@/components/about-me'
import FirstScreen from '@/components/first-screen'
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <FirstScreen/>
      <AboutMe/>
    </section>
  );
}
