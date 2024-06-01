import AboutCompany from "@/components/HomePage/AboutCompany";
import CheckAvailabilty from "@/components/HomePage/CheckAvailabilty";
import HeroSection from "@/components/HomePage/HeroSection";
import PopularActivity from "@/components/HomePage/PopularActivity";
import PopularService from "@/components/HomePage/PopularService";
import Image from "next/image";

export default function Home() {
  return (
       <>
         <HeroSection />
         <AboutCompany />
         <CheckAvailabilty />
         <PopularActivity />
         <PopularService />
       </>
  );
}
