import Image from "next/image";

export default function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl overflow-hidden border bg-background">
            <Image
              src="/images/575166234_1292791342647976_4348923566294162263_n.jpg"
              alt="Residential Interior"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Residential Interior</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl overflow-hidden border bg-background">
            <Image
              src="/images/office-decoration.jpg"
              alt="Office Interior"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Office Interior</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl overflow-hidden border bg-background">
            <Image
              src="/images/484424517_1110616287532150_5481557371188024762_n.jpg"
              alt="Commercial Interior"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Commercial Interior</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl overflow-hidden border bg-background">
            <Image
              src="/images/512742303_1184754950118283_6403779381284615733_n.jpg"
              alt="Hospitality Interior"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Hospitality Interior</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
