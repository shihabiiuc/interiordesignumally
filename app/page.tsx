import Image from "next/image";
import HeroSection from "@/components/hero-section-one";
import ServicesGrid from "@/components/work-type";
import LogoCloud from "@/components/logo-cloud";
import Gallery from "@/components/gallery";
import Testimonial from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <LogoCloud />
      <Gallery />
      <Testimonial />
    </>
  );
}
