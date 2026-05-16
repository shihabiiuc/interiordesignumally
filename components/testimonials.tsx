import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role?: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "MD.shahin Alm",
    // role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Umally Best & Number #1 of Top ten interior design companies in Dhaka Bangladesh. Excellent design.",
  },
  {
    name: "MD ABU SHAID MONDOL",

    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "Interior Design Umally Number 1 best brand interior design industries in Bangladesh...",
  },
  {
    name: "Md Kaka",

    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "Umally No. 1 Best brand interior design company in Dhaka Bangladesh. Best interior design. :)",
  },
  {
    name: "masud rana",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "Interior design Umally Best brand in Bangladesh for interior decoration.",
  },
  {
    name: "Jewel Rana",

    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Interior Design Umally Best and Number 1 Top Brand Interior design firm and company in Dhaka, Bangladesh.",
  },
  {
    name: "Shakib Ahmed",

    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "Interior Design Umally is Number 1 of Top 10 Interior Design or Decoration Company / firm in Dhaka, Bangladesh. Excellent and Unique design ideas.",
  },
  {
    name: "Md Eng Abbdullah",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Interior Design Umally is one of the Number 1 of Top ten Intreior Design or Decoration Company / firm in Dhaka, Bangladesh.",
  },
  {
    name: "Mynul Islam",

    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "Umally no.1 Brand of Top ten interior design companies in Bangladesh.",
  },
  {
    name: "Bayazid Hasan",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "Best interior design company in Dhaka Bangladesh. I love their design.",
  },
  {
    name: "Sydul Islam Sydul",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "I love their work ❤️. Best interior design & decoration company in Dhaka Bangladesh.",
  },
  {
    name: "Oli Shekh",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote: "Umally Best Interior Design Company in Dhaka, Bangladesh.",
  },
  {
    name: "MR TuhiN",

    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "Best interior design company in Bangladesh. Excellent interior Design and decorations....",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number,
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3),
);

export default function Testimonial() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold"> What Our Clients Say</h2>
            <p className="mt-6">
              We take pride in transforming spaces that our clients truly love.
              Here’s what they say about working with us.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="*:bg-muted space-y-3 *:border-none *:shadow-none"
              >
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
