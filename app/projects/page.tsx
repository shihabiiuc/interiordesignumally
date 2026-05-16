import PageHero from "@/components/shared/PageHero";
import Gallery from "@/components/gallery";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Completed Projects"
        description="Explore a selection of our interior design projects across homes, offices, and commercial spaces. Each project reflects our commitment to thoughtful design, functionality, and timeless aesthetics."
        buttonText="Get Consultation"
        buttonLink="/contact"
      />

      <hr />
      <Gallery />
      <hr />
    </>
  );
}
