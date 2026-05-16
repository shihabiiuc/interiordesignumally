import PageHero from "@/components/shared/PageHero";
import TeamSection from "@/components/team";
import Testimonial from "@/components/testimonials";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="We create premium interior spaces that combine beauty, comfort, and functionality."
        buttonText="Projects"
        buttonLink="/projects"
      />
      <TeamSection />
      <Testimonial />
    </>
  );
}
