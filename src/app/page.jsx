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
     <section className="min-h-[calc(100vh-100px)] pt-20">
      <HeroBanner></HeroBanner>
      <div>
        <h1 className="text-5xl text-center py-30 font-bold ">Our Feauter Product</h1>
        <Products></Products>
      </div>
      <OurStory></OurStory>
      <ShippingPolicy></ShippingPolicy>
      <Brands></Brands>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
     </section>
    </div>
  );
}
