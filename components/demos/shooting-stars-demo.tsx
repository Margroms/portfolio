import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Swift Execution & Delivery",
    description:
      "From website launches to event planning, we ensure fast execution—get your project completed in just 1-2 weeks!",
  },
  {
    icon: "/icons/design.svg",
    title: "Custom Solutions for Restaurants",
    description:
      "Whether it's a stunning website or a well-organized offline event, we design and execute solutions tailored to your needs.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Scalability & Continuous Support",
    description:
      "We help your restaurant grow—be it expanding your website, managing events, or scaling up operations effortlessly.",
  },
  {
    icon: "/icons/team.svg",
    title: "Dedicated Expert Team",
    description:
      "A skilled team specializing in digital and on-ground solutions to enhance your restaurant’s success.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Secure & Reliable Operations",
    description:
      "We ensure safe online transactions, data security, and smooth event execution with no hassles.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Data-Driven Decision Making",
    description:
      "Gain insights into website traffic, customer engagement, and event performance with real-time analytics.",
  },
  {
    icon: "/icons/flexible.svg",
    title: "Adaptable & Innovative Services",
    description:
      "Whether online or offline, we create flexible solutions that fit your restaurant’s unique challenges and goals.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Assistance & Problem-Solving",
    description:
      "From website issues to last-minute event troubleshooting, our support team is available round the clock.",
  },
  {
    icon: "/icons/money.svg",
    title: "Budget-Friendly, High-Quality Services",
    description:
      "We deliver premium services—websites, marketing, and event management—at affordable rates.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Our guarantees to you.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
  src={feature.icon}
  width={10000}
  height={10000}
  alt="icon"
  className="w-8 h-8 fill-current text-orange-500"
/>
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <br/>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
