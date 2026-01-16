'use client';
import { usePathname } from "next/navigation";
import React from 'react';
// Importing specific icons from react-icons
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaPhoneAlt, 
  FaRegEnvelope 
} from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    const currentYear = new Date().getFullYear();
      const pathname = usePathname();
    if(pathname.startsWith('/dashboard')) return <></>
    if(pathname.startsWith('/login')) return <></>

    return (
        <footer className="bg-gray-300 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
            {/* Updated to match your 1860px design requirement */}
            <div className="container mx-auto px-5 lg:px-10 xl:px-20 max-w-465">
                
                {/* Top Section: Brand & Navigation */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                            AuraMart<span className="text-blue-600">.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
                            Elevating your lifestyle through curated collections. Experience the future of shopping with premium quality and unparalleled service.
                        </p>
                        <div className="flex gap-5">
                            <SocialIcon icon={<FaFacebookF size={18} />} href="#" />
                            <SocialIcon icon={<FaInstagram size={18} />} href="#" />
                            <SocialIcon icon={<FaTwitter size={18} />} href="#" />
                            <SocialIcon icon={<FaYoutube size={18} />} href="#" />
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <FooterColumn 
                            title="Shop" 
                            links={["New Arrivals", "Best Sellers", "Special Offers"]} 
                        />
                        <FooterColumn 
                            title="Support" 
                            links={["Shipping Policy", "Return & Exchange", "FAQ"]} 
                        />
                        <FooterColumn 
                            title="Company" 
                            links={["Our Story", "Careers","Sustainability"]} 
                        />
                        <div className="space-y-6">
                            <h4 className="font-bold text-slate-900 dark:text-white text-lg border-b border-slate-100 dark:border-slate-800 pb-2">
                                Contact Us
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <IoLocationOutline size={20} className="text-blue-600 shrink-0" />
                                    <span>123 Fashion Ave, NY 10001</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <FaPhoneAlt size={16} className="text-blue-600 shrink-0" />
                                    <span>+1 (555) 000-1234</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <FaRegEnvelope size={18} className="text-blue-600 shrink-0" />
                                    <span>hello@auramart.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-slate-200 dark:border-slate-800 mb-10" />

                {/* Newsletter & Bottom Bar */}
                <div className="flex flex-col xl:flex-row justify-between items-center gap-8">

                    <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <div className="flex gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                            <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
                            <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
                            <a href="#" className="hover:text-blue-600 transition">Cookies</a>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            © {currentYear} AuraMart Inc. All rights reserved.
                        </p>
                    </div>

                    {/* Payment Methods */}
                    <div className="flex gap-6 grayscale opacity-50 hover:opacity-100 transition-opacity">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, links }) => (
    <div className="space-y-6">
        <h4 className="font-bold text-slate-900 dark:text-white text-lg border-b border-slate-100 dark:border-slate-800 pb-2">
            {title}
        </h4>
        <ul className="space-y-3">
            {links.map((link) => (
                <li key={link}>
                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const SocialIcon = ({ icon, href }) => (
    <a 
        href={href} 
        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;