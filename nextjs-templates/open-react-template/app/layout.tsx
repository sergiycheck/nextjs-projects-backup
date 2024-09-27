import "./css/style.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Craft studio",
  description:
    "Craft Studio: Shaping the future of software development with cutting-edge technologies, best practices, and artificial intelligence. We are a leading software agency committed to delivering innovative solutions that redefine possibilities. Join us in crafting the next generation of technology.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable} ${architects_daughter.variable} font-inter antialiased 
          bg-gray-900 text-gray-200 tracking-tight`}
      >
        <main className="flex flex-col min-h-screen ">
          <Header />

          {props.children}
        </main>
      </body>
    </html>
  );
}
