import Link from "next/link";
import { ThumbsUp, Camera, Building2, Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfoGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Column 1 */}
          <div className="rounded-2xl border bg-muted/30 p-6 transition hover:shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Mobile + WhatsApp</p>
                  <Link
                    href="tel:01845556200"
                    className="font-medium hover:text-primary"
                  >
                    01845556200
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <Link
                    href="mailto:umallyinterior@gmail.com"
                    className="font-medium hover:text-primary"
                  >
                    umallyinterior@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="rounded-2xl border bg-muted/30 p-6 transition hover:shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Address</h3>

            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <p className="text-muted-foreground leading-6">
                Circle Ambia Point, 19 E Rampura, Dhaka 1219.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="rounded-2xl border bg-muted/30 p-6 transition hover:shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="space-y-4 text-sm">
              <Link
                href="https://www.facebook.com/interiordesignumally/"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <ThumbsUp className="h-4 w-4" />
                Facebook
              </Link>

              <Link
                href="https://www.instagram.com/interiordesignumally"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Camera className="h-4 w-4" />
                Instagram
              </Link>

              <Link
                href="https://www.linkedin.com/showcase/interiordesigncompany/"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Building2 className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
