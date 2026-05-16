import PageHero from "@/components/shared/PageHero";
import ServiceGrid from "@/components/service-grid";
import CalltoAction from "@/components/call-to-action-three";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="From residential interiors to office decoration, we provide complete design solutions."
        buttonText="Get Consultation"
        buttonLink="/contact"
      />
      <ServiceGrid />
      <CalltoAction />
      <hr />
    </>
  );
}
