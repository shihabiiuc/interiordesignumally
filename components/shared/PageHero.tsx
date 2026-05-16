import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
};

export default function PageHero({
  title,
  description,
  buttonText,
  buttonLink,
}: PageHeroProps) {
  return (
    <section className="bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-balance text-5xl  tracking-tight lg:text-6xl">
            {title}
          </h1>

          <p className="text-muted-foreground mt-6 max-w-2xl text-xl leading-8">
            {description}
          </p>

          {buttonText && buttonLink && (
            <div className="flex items-center gap-3 py-10">
              <Button asChild size="lg" className="pr-4.5">
                <Link
                  href={buttonLink}
                  className="bg-primary text-primary-foreground inline-flex rounded-lg px-3 py-3 font-medium transition hover:opacity-90"
                >
                  {buttonText}
                  <ChevronRight className="opacity-50" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
