"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Users, Building2, BookOpen, Award } from "lucide-react";
import { ShoppingBag, Store, Package, BarChart2, Headphones, Truck } from "lucide-react";
import { Monitor, Clock, Megaphone, Globe, Star, Zap } from "lucide-react";

const internshipItems = [
  { icon: <GraduationCap size={15} className="text-[#FF9B50] shrink-0" />, label: "50+ Students Placed", href: "https://internship.margros.in" },
  { icon: <Building2 size={15} className="text-[#FF9B50] shrink-0" />, label: "10+ Colleges Partnered", href: "https://internship.margros.in" },
  { icon: <Users size={15} className="text-[#FF9B50] shrink-0" />, label: "6+ Internship Domains", href: "https://internship.margros.in" },
  { icon: <BookOpen size={15} className="text-[#FF9B50] shrink-0" />, label: "Tech & Non-Tech Branches", href: "https://internship.margros.in" },
  { icon: <Award size={15} className="text-[#FF9B50] shrink-0" />, label: "Internships for 1st to Final Year", href: "https://internship.margros.in" },
  { icon: <BadgeCheck size={15} className="text-[#FF9B50] shrink-0" />, label: "100% Verified Certificates", href: "https://verify.margros.in" },
  { icon: <GraduationCap size={15} className="text-[#FF9B50] shrink-0" />, label: "BCom, Engineering & More", href: "https://internship.margros.in" },
  { icon: <Users size={15} className="text-[#FF9B50] shrink-0" />, label: "Software Dev · Marketing · Design", href: "https://internship.margros.in" },
];

const marketplaceItems = [
  { icon: <ShoppingBag size={15} className="text-[#FF9B50] shrink-0" />, label: "Marketplace — Live Now", href: "https://marketplace.margros.in" },
  { icon: <Store size={15} className="text-[#FF9B50] shrink-0" />, label: "Multi-Vendor Platform", href: "https://marketplace.margros.in" },
  { icon: <Package size={15} className="text-[#FF9B50] shrink-0" />, label: "Source Ingredients & Supplies", href: "https://marketplace.margros.in" },
  { icon: <Truck size={15} className="text-[#FF9B50] shrink-0" />, label: "Vendors & Suppliers Network", href: "https://marketplace.margros.in" },
  { icon: <BarChart2 size={15} className="text-[#FF9B50] shrink-0" />, label: "Built-in Analytics", href: "https://marketplace.margros.in" },
  { icon: <Headphones size={15} className="text-[#FF9B50] shrink-0" />, label: "Dedicated Support", href: "https://marketplace.margros.in" },
  { icon: <Store size={15} className="text-[#FF9B50] shrink-0" />, label: "Restaurant Owners Welcome", href: "https://marketplace.margros.in" },
  { icon: <ShoppingBag size={15} className="text-[#FF9B50] shrink-0" />, label: "Discover · Source · Grow", href: "https://marketplace.margros.in" },
];

const techItems = [
  { icon: <Monitor size={15} className="text-[#FF9B50] shrink-0" />, label: "RPOS — Restaurant POS System", href: "https://rpos.margros.in" },
  { icon: <Clock size={15} className="text-[#FF9B50] shrink-0" />, label: "Pre-Ordering System", href: "https://preordering.margros.in" },
  { icon: <Zap size={15} className="text-[#FF9B50] shrink-0" />, label: "Streamline Restaurant Operations", href: "https://rpos.margros.in" },
  { icon: <Megaphone size={15} className="text-[#FF9B50] shrink-0" />, label: "Restaurant Marketing Services", href: "https://margros.in" },
  { icon: <Globe size={15} className="text-[#FF9B50] shrink-0" />, label: "SEO · Social Media · PPC", href: "https://margros.in" },
  { icon: <Star size={15} className="text-[#FF9B50] shrink-0" />, label: "15+ Happy Clients", href: "https://margros.in" },
  { icon: <Monitor size={15} className="text-[#FF9B50] shrink-0" />, label: "Billing & Table Management", href: "https://rpos.margros.in" },
  { icon: <Clock size={15} className="text-[#FF9B50] shrink-0" />, label: "Reduce Wait Times with Pre-Orders", href: "https://preordering.margros.in" },
];

type Item = { icon: React.ReactNode; label: string; href: string };

const Separator = () => (
  <span className="mx-5 text-[#FF9B50] opacity-40 select-none text-xs shrink-0">◆</span>
);

function ScrollingStrip({ items, direction = "left" }: { items: Item[]; direction?: "left" | "right" }) {
  const doubled = [...items, ...items];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const duration = items.length * (isMobile ? 2 : 4);

  return (
    <div className="w-full bg-[#121212] py-3 overflow-hidden relative">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-[#FF9B50] transition-colors duration-200 px-1"
            >
              {item.icon}
              {item.label}
            </a>
            <Separator />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function InternshipMarquee() {
  return <div className="my-6 md:my-10"><ScrollingStrip items={internshipItems} direction="left" /></div>;
}

export function MarketplaceMarquee() {
  return <div className="my-6 md:my-10"><ScrollingStrip items={marketplaceItems} direction="right" /></div>;
}

export function TechMarquee() {
  return <div className="my-6 md:my-10"><ScrollingStrip items={techItems} direction="left" /></div>;
}
