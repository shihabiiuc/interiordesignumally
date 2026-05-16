import PageHero from "@/components/shared/PageHero";
import ContactInfoGrid from "@/components/contact-info";
import Testimonial from "@/components/testimonials";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a project in mind or need expert interior design advice? Get in touch with our team and we’ll help you turn your ideas into a beautifully designed space."
      />
      <ContactInfoGrid />
      <hr />
      <Testimonial />
    </>
  );
}
