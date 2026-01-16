import Link from "next/link";
import { FaArrowLeft, FaMagnifyingGlass } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 relative overflow-hidden">
      
      {/* Background Decorative Text - Ultra Light Blue */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20rem] md:text-[30rem] font-black text-slate-50 leading-none">
          404
        </span>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        
        {/* Animated Icon Container */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-3xl bg-blue-50 flex items-center justify-center border border-blue-100 rotate-12 hover:rotate-0 transition-transform duration-500">
            <FaMagnifyingGlass className="text-blue-600 text-4xl" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
          Lost in the <span className="text-blue-600">Aura?</span>
        </h1>
        
        <p className="text-slate-500 text-lg mb-10 font-medium">
          The product or page you are looking for has vanished into thin air. Let's get you back to the collection.
        </p>

        {/* Flat Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/" 
            className="w-full sm:w-52 py-4 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <FaArrowLeft /> Back to Home
          </Link>

          <Link 
            href="/products" 
            className="w-full sm:w-52 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all active:scale-95"
          >
            View Products
          </Link>
        </div>

        {/* Small Footer Branding */}
        <p className="mt-16 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          AuraMart Premium E-Commerce
        </p>
      </div>
    </div>
  );
}