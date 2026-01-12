import Benefits from "@/Components/home/Benefits";
import Hero from "@/Components/home/Hero";
import Integrations from "@/Components/home/Integrations";
import Pricing from "@/Components/home/Pricing";
import Team from "@/Components/home/Team";
import Image from "next/image";

export default function Home() {
  return (
    <div >
     <section>
      <Hero></Hero>
      <Benefits></Benefits>
      <Pricing></Pricing>
      <Integrations></Integrations>
      <Team></Team>
     </section>
    </div>
  );
}
