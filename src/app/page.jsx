import Navbar from "@/Components/Header/Navbar";
import Benefits from "@/Components/home/Benefits";
import Brands from "@/Components/home/Brands";
import FAQ from "@/Components/home/FAQ";
import Footer from "@/Components/home/Footer";
import HeroBanner from "@/Components/home/HeroBanner";
import OurStory from "@/Components/home/OurStory";
import ShippingPolicy from "@/Components/home/ShippingPolicy";
import Testimonials from "@/Components/home/Testimonials";
import Products from "@/Components/products/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div >
     <section>
      <HeroBanner></HeroBanner>
      <Products></Products>
      <Brands></Brands>
      <OurStory></OurStory>
      <ShippingPolicy></ShippingPolicy>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Footer></Footer>
     </section>
    </div>
  );
}
