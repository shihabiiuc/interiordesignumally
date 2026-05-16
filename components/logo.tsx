import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={40}
      height={40}
      className={cn("h-auto w-auto", className)}
      priority
    />
  );
};
