import Image from "next/image";

const services = [
  {
    title: "Home Interior Design",
    image: "/images/505678442_1171947388065706_2589774414553635882_n.jpg",
  },
  {
    title: "Office Interior Design",
    image: "/images/484424517_1110616287532150_5481557371188024762_n.jpg",
  },
  {
    title: "Kitchen Design & Renovation",
    image: "/images/656859265_1404524854807957_1503720245345143238_n.jpg",
  },
  {
    title: "Bathroom Remodeling",
    image: "/images/96773151_2624588421142403_1718014264456773632_n.jpg",
  },
  {
    title: "3D Interior Visualization",
    image: "/images/97011471_2620498261551419_3406169572674371584_n.jpg",
  },
  {
    title: "Furniture Design",
    image: "/images/96657930_2620498111551434_4169383697805475840_n.jpg",
  },
  {
    title: "Space Planning & Consultation",
    image: "/images/95902154_2617381941863051_2022100302655651840_n.jpg",
  },
  {
    title: "Turnkey Project Execution",
    image: "/images/512742303_1184754950118283_6403779381284615733_n.jpg",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight">
            Your One Stop Shop for Interior Design
          </h2>
          <p className="text-muted-foreground mt-4 mx-auto max-w-2xl text-lg leading-8">
            We provide complete interior design solutions tailored to your
            lifestyle, space, and budget.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-2xl bg-muted/30"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-medium tracking-tight group-hover:text-primary transition">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
