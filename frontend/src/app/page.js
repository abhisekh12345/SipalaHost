import Counterup from "@/components/Allcomponents/Counterup";
import ReadyToTravel from "@/components/Allcomponents/ReadyToTravel";
import Footer from "@/components/Footer";
import AboutCompany from "@/components/HomePage/AboutCompany";
import CheckAvailabilty from "@/components/HomePage/CheckAvailabilty";
import HeroSection from "@/components/HomePage/HeroSection";
import NewsBlog from "@/components/HomePage/NewsBlog";
import PopularActivity from "@/components/HomePage/PopularActivity";
import PopularService from "@/components/HomePage/PopularService";
import PopularTourPlace from "@/components/HomePage/PopularTourPlace";
import TeamMember from "@/components/HomePage/TeamMember";
import Testomonial from "@/components/HomePage/Testomonial";
import Image from "next/image";


export default function Home() {
  return (
       <>
         <HeroSection />
         <AboutCompany />
         <CheckAvailabilty />
         <PopularActivity />
         <PopularService />
         <ReadyToTravel />
         <Counterup />
         <TeamMember />
         <PopularTourPlace />
         <Testomonial />
         <NewsBlog />
         <Footer />
       </>
  );
}
