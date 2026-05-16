import Image from "next/image";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight">
            Our Recent Projects
          </h2>

          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg leading-8">
            Explore some of our premium interior design and decoration projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt="Interior Design Project"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
