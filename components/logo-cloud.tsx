import Image from "next/image";
import one from "./images/companies/aeealogao.webp";

export default function LogoCloud() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-4xl font-semibold tracking-tight">
          You're in Good Company
        </h2>
        <p className="text-muted-foreground text-lg leading-8">
          We’ve had the honor of working with some of the leading brands and
          companies in Bangladesh. Through our innovative, eco-conscious, and
          premium interior design solutions, we have transformed their spaces
          into inspiring environments. Their trust and satisfaction continue to
          motivate us to deliver some of the finest interior design and
          implementation services in Bangladesh.
        </p>
        <div className="**:fill-foreground mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <Image
            src="/images/companies/aeealogao.webp"
            alt=""
            width={80}
            height={80}
          />
          <Image
            src="/images/companies/213147_433aacbc686c484895c8d891cba930bfmv2-1.webp"
            alt=""
            width={80}
            height={80}
          />
          <Image
            src="/images/companies/Debonair-Logo-1.webp"
            alt=""
            width={80}
            height={80}
          />
          <Image
            src="/images/companies/Dgency-Logo.webp"
            alt=""
            width={80}
            height={80}
          />
          <Image
            src="/images/companies/GMC-Studies-Logo.webp"
            alt=""
            width={80}
            height={80}
          />
          <Image
            src="/images/companies/Summit-Tower-BD.webp"
            alt=""
            width={80}
            height={80}
          />
        </div>
      </div>
    </section>
  );
}
