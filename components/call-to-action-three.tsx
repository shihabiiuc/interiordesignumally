import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CalltoAction() {
  return (
    <section>
      <div className="bg-muted py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
            <span className="text-muted-foreground">
              Let’s Design Your Dream Space.
            </span>{" "}
            Something Extraordinary
          </h2>
          <p className="mt-4 text-lg">
            Whether it’s your home, office, or commercial space, we’re here to
            bring your vision to life with thoughtful and elegant interior
            design.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild className="pr-2">
              <Link href="/contact">
                Contact Us Today
                <ChevronRight
                  strokeWidth={2.5}
                  className="size-3.5! opacity-50"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" className="pl-2.5">
              <Link
                href="https://www.youtube.com/@interiordesignumally"
                target="_blank"
              >
                <Calendar className="!size-3.5 opacity-50" strokeWidth={2.5} />
                Work Samples
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
