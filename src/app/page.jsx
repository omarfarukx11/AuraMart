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


export default function Home() {
  return (
    <div >
     <section>
      <HeroBanner></HeroBanner>
      <Products></Products>
      <OurStory></OurStory>
      <ShippingPolicy></ShippingPolicy>
      <Brands></Brands>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
     </section>
    </div>
  );
}
