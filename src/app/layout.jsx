import { Geist, Inter,  } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Header/Navbar";
import Footer from "@/Components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const poppins = Inter({
  weight: ["300", "400", "700", "900"],
});

export const metadata = {
  metadataBase: new URL("https://aura-mart-five.vercel.app"),

  title: {
    default: "AuraMart | Premium Modern E-Commerce Experience",
    template: "%s | AuraMart",
  },

  description:
    "Experience the future of shopping with AuraMart. Discover premium products, enjoy a seamless interface, and benefit from secure, lightning-fast delivery.",

  applicationName: "AuraMart",

  keywords: [
    "AuraMart",
    "premium online shopping",
    "modern ecommerce",
    "best online store",
    "secure shopping app",
    "luxury retail experience",
  ],

  authors: [{ name: "AuraMart Team" }],
  creator: "AuraMart",

  openGraph: {
    type: "website",
    siteName: "AuraMart",
    title: "AuraMart – Modern Online Shopping Experience",
    description:
      "Shop the latest trends with AuraMart. Fast, secure, and designed for a premium shopping experience.",
    url: "https://aura-mart-five.vercel.app/",
    images: [
      {
        url: "https://i.ibb.co.com/Fq3K2z5P/image.png", // Your provided website image
        width: 1200,
        height: 630,
        alt: "AuraMart Official Store Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AuraMart – Shop Smart, Live Better",
    description:
      "A premium collection of quality products at your fingertips. Experience AuraMart today.",
    images: ["https://i.ibb.co.com/Fq3K2z5P/image.png"],
  },

  icons: {
    icon: "./favicon.ico", 
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`${poppins.className}`}
      >
        <header className="fixed w-full top-0 z-50 ">
          <Navbar />
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}