import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Margros • Marketing • Tech • Marketplace • Internships •"
      default_velocity={2}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-[#FF9B50] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
