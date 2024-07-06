import Hero from "./components/Hero";
import Projescts from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe";
import Whatsapp from "./components/Whatsapp";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Projescts/>
      <Skills/>
      <ContactMe/>
      <Whatsapp/>
    </div>
   );
}
