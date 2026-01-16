import { Suspense } from "react"; // 1. Import Suspense
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
import { ProductGridSkeletonTwo } from "@/Components/skelenton/productGridSkelentonTwo";



export default function Home() {
  return (
    <div>
      <section className="min-h-[calc(100vh-100px)] pt-20">
        <HeroBanner /> 
        
        <div className="py-20">
          <h1 className="lg:text-5xl text-3xl text-center pb-16 font-bold">
            Our Featured Products
          </h1>
          <Suspense fallback={<ProductGridSkeletonTwo />}>
            <Products />
          </Suspense>
        </div>

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