
import Benefits from "@/Components/home/Benefits";
import Brands from "@/Components/home/Brands";
import FAQ from "@/Components/home/FAQ";

import HeroBanner from "@/Components/home/HeroBanner";
import OurStory from "@/Components/home/OurStory";
import ShippingPolicy from "@/Components/home/ShippingPolicy";
import Testimonials from "@/Components/home/Testimonials";
import TopProduct from "@/Components/home/TopProduct";

export default function Home() {
  return (
    <div>
      <section className="min-h-[calc(100vh-100px)] pt-20">
        <HeroBanner />
        <TopProduct></TopProduct>
        <OurStory />
        <ShippingPolicy />
        <Testimonials />
        <Benefits></Benefits>
        <Brands />
        <FAQ />
      </section>
    </div>
  );
}
