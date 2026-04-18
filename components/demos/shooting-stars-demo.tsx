"use client";

import React, { useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: "/image1.png",
    title: "Swift Execution & Delivery",
    description:
      "From product launches to marketing campaigns, we move fast — most projects are delivered within 1–2 weeks.",
  },
  {
    id: 2,
    icon: "/image2.png",
    title: "Scalability & Continuous Support",
    description:
      "Our platforms are built to scale with you — from your first customer to your thousandth, we grow with you.",
  },
  {
    id: 3,
    icon: "/image3.png",
    title: "Secure & Reliable Operations",
    description:
      "We ensure data security, safe transactions, and reliable uptime across all our platforms and services.",
  },
  {
    id: 4,
    icon: "/image4.png",
    title: "Data-Driven Decision Making",
    description:
      "Every decision we make is backed by real data — from marketing analytics to product usage insights.",
  },
  {
    id: 5,
    icon: "/image5.png",
    title: "Budget-Friendly, High-Quality",
    description:
      "Premium services at accessible prices — whether you're a business owner, a student, or a growing startup.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => setOpenId(id);

  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-4 md:px-6">
      <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white">
        Our guarantees to you.
      </h2>
      <p className="relative z-10 mt-3 text-center text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
        We ensure the highest quality of work, with the fastest delivery times.
      </p>

      <div className="relative z-10 mt-10 w-full xl:w-4/5 2xl:w-[68%] mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Accordion */}
        <div className="w-full md:w-1/2">
          {features.map((feature) => {
            const isOpen = openId === feature.id;
            return (
              <div key={feature.id} className="border-b border-neutral-700">
                <button
                  onClick={() => toggle(feature.id)}
                  className="w-full flex items-center justify-between py-5 text-left gap-3 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-neutral-800 flex items-center justify-center shrink-0 overflow-hidden">
                      <Image
                        src={feature.icon}
                        width={40}
                        height={40}
                        alt={feature.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span
                      className={`text-base md:text-lg font-semibold transition-colors ${
                        isOpen ? "text-white" : "text-neutral-400"
                      }`}
                    >
                      {feature.title}
                    </span>
                  </div>
                  {!isOpen && (
                    <span className="text-neutral-400 shrink-0 text-xl leading-none">+</span>
                  )}
                </button>

                {isOpen && (
                  <div className="pb-5">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                    {/* Icon preview on mobile */}
                    <div className="mt-4 md:hidden flex items-center justify-center h-64 rounded-xl bg-white overflow-hidden">
                      <Image
                        src={feature.icon}
                        width={240}
                        height={240}
                        alt={feature.title}
                        className="w-4/5 h-4/5 object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Icon preview on desktop */}
        <div className="hidden md:flex w-1/2 items-center justify-center rounded-2xl bg-white aspect-[4/3]">
          {openId !== null && (
            <Image
              src={features.find((f) => f.id === openId)?.icon ?? features[0].icon}
              width={400}
              height={400}
              alt="Feature icon"
              className="w-4/5 h-4/5 object-contain transition-all duration-300"
            />
          )}
        </div>
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
