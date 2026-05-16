import PageHero from "@/components/shared/PageHero";
import Testimonial from "@/components/testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Client Testimonials"
        description="Discover what our clients say about working with us. We take pride in delivering interior spaces that meet expectations, reflect personal style, and stand the test of time."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <Testimonial />
    </>
  );
}
