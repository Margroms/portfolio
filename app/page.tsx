"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

import { useState, useEffect } from "react";
import { Megaphone, Monitor, Clock, GraduationCap, BadgeCheck, ShoppingBag, Menu, X } from "lucide-react";
import { InternshipMarquee, MarketplaceMarquee, TechMarquee } from "@/components/ui/marquee-strip";

const services = [
	{
		icon: "/images/s_6.png",
		title: "Restaurant Marketing",
		description:
			"Full-stack digital marketing for restaurants — web design, SEO, social media, PPC, email campaigns, and content creation to grow your brand online.",
	},
	{
		icon: "/images/s_1.png",
		title: "Tech Products",
		description:
			"Purpose-built software for the restaurant industry — a powerful POS system for seamless billing and a pre-ordering platform to reduce wait times.",
	},
	{
		icon: "/images/s_3.png",
		title: "Marketplace",
		description:
			"A unified platform connecting restaurant owners, vendors, and suppliers. Discover products, source ingredients, and grow your business — all in one place.",
	},
	{
		icon: "/images/s_5.png",
		title: "Internship Program",
		description:
			"Real-world internships across tech, marketing, design, BCom, and more — for students from 1st year to final year. Every intern gets a verified certificate.",
	},
];

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div
			className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
		>
			<Element
				name="top"
				className={`rounded-2xl top-5 sticky md:mx-auto z-50
        w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] flex flex-col
        py-4 px-4 md:px-8 mx-auto transition-all duration-300
        border border-white/30
        ${scrolled
					? "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] saturate-150"
					: "bg-white/40 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
				}`}
			>
				{/* Main navbar row */}
				<div className="flex items-center justify-between w-full">
					<Link href={"/"}>
						<Image src={"/logo/logo.png"} alt="Logo" width={5000} height={5000} className="w-32 md:w-40" />
					</Link>

					{/* Desktop nav */}
					<div className="hidden md:flex gap-x-8 items-center text-gray-700 font-medium text-base cursor-pointer">
						<ScrollLink to="services" smooth={true} offset={-150} className="hover:text-[#FF9B50] cursor-pointer">Services</ScrollLink>
						<ScrollLink to="ecosystem" smooth={true} offset={-150} className="hover:text-[#FF9B50] cursor-pointer">Ecosystem</ScrollLink>
						<a href="https://internship.margros.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9B50]">Internships</a>
						<div className="relative group">
							<span className="hover:text-[#FF9B50] cursor-pointer flex items-center gap-1">
								Legal
								<svg className="w-3 h-3 mt-0.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
							</span>
							<div className="absolute top-full left-0 pt-3 hidden group-hover:block z-50 w-[200px]">
								<ul className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.10)] rounded-xl text-gray-700 text-sm overflow-hidden">
									<li><Link href="/terms" className="block px-4 py-2.5 hover:bg-[#FF9B50]/10 hover:text-[#FF9B50] transition-colors">Terms of Service</Link></li>
									<li className="border-t border-gray-100"><Link href="/privacy" className="block px-4 py-2.5 hover:bg-[#FF9B50]/10 hover:text-[#FF9B50] transition-colors">Privacy Policy</Link></li>
									<li className="border-t border-gray-100"><Link href="/refund" className="block px-4 py-2.5 hover:bg-[#FF9B50]/10 hover:text-[#FF9B50] transition-colors">Cancellation & Refund</Link></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="flex items-center gap-x-3">
						<a href="tel:9663377473" className="hidden lg:flex text-sm text-gray-600">+91 9663377473</a>
						<Link href={"/meeting"} className="py-2 px-4 md:px-6 text-sm md:text-base hover:bg-[#FFB982] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200">
							Book a call
						</Link>
						{/* Hamburger */}
						<button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
							{mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>
				</div>

				{/* Mobile dropdown menu */}
				{mobileMenuOpen && (
					<div className="md:hidden flex flex-col gap-y-1 pt-3 pb-1 border-t border-gray-100 mt-3 text-gray-700 font-medium text-base">
						<ScrollLink to="services" smooth={true} offset={-150} className="py-2 hover:text-[#FF9B50] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Services</ScrollLink>
						<ScrollLink to="ecosystem" smooth={true} offset={-150} className="py-2 hover:text-[#FF9B50] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Ecosystem</ScrollLink>
						<a href="https://internship.margros.in" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#FF9B50]" onClick={() => setMobileMenuOpen(false)}>Internships</a>
						<Link href="/terms" className="py-2 hover:text-[#FF9B50]" onClick={() => setMobileMenuOpen(false)}>Terms of Service</Link>
						<Link href="/privacy" className="py-2 hover:text-[#FF9B50]" onClick={() => setMobileMenuOpen(false)}>Privacy Policy</Link>
						<Link href="/refund" className="py-2 hover:text-[#FF9B50]" onClick={() => setMobileMenuOpen(false)}>Cancellation & Refund</Link>
						<a href="tel:9663377473" className="py-2 text-gray-500">+91 9663377473</a>
					</div>
				)}
			</Element>

			<main className="md:pb-10">
				<div className="px-4 md:px-0 w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] mx-auto mt-6 md:mt-14">
					<AnimatedShinyTextDemo />

					<h1>
						<CoverDemo />
					</h1>
					<p
						className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
					>
						From marketing to technology, marketplaces to internships —{" "}
						<b>
							<u>Margros</u>
						</b>{" "}
						builds ecosystems that help businesses and people grow.
						<br />
						Schedule a call to explore how we can work together.
					</p>

					<div className="flex md:justify-center items-center">
						<Link
							href="/meeting"
							className="w-full md:w-auto text-center py-3 px-10 md:px-16 text-base md:text-xl hover:bg-[#FFB982] rounded-[6px] border-2 border-black bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
						>
							Book a Call
						</Link>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
						<BoxReveal boxColor={"#FF9B50"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
								<PiCheckBold className="text-xl text-[#FF9B50]" />
								Marketing
							</p>
						</BoxReveal>
						<BoxReveal boxColor={"#FF9B50"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
								<PiCheckBold className="text-xl text-[#FF9B50]" />
								Tech Products
							</p>
						</BoxReveal>
						<BoxReveal boxColor={"#FF9B50"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
								<PiCheckBold className="text-xl text-[#FF9B50]" />
								Marketplace
							</p>
						</BoxReveal>
						<BoxReveal boxColor={"#FF9B50"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
								<PiCheckBold className="text-xl text-[#FF9B50]" />
								Internships
							</p>
						</BoxReveal>
					</div>

					<div className="md:flex items-center justify-between gap-y-2 my-6 gap-x-16 mx-auto">
						<div className="md:w-1/4 shrink-0">
							<p className="text-lg font-medium text-gray-500">
								Trusted by fast-growing businesses
							</p>
							<div className="flex mt-3 gap-x-4 items-center">
								<div>
									<p className="text-[#FF9B50] text-2xl font-bold">
										<NumberTicker value={15} />+
									</p>
									<p className="text-gray-400 text-xs">Happy Clients</p>
								</div>
								<div className="w-px bg-gray-300 self-stretch"></div>
								<div>
									<p className="text-[#FF9B50] text-2xl font-bold">
										<NumberTicker value={30} />+
									</p>
									<p className="text-gray-400 text-xs">Projects Completed</p>
								</div>
							</div>
						</div>

						<section className="overflow-hidden mt-6 md:mt-0 flex-1">
							<InfiniteMovingLogos
								speed="slow"
								direction="left"
								items={[
									{ logo: "/logo/logo1.png", name: "Logo" },
									{ logo: "/logo/logo2.png", name: "Logo" },
									{ logo: "/logo/logo3.png", name: "Logo" },
									{ logo: "/logo/logo4.png", name: "Logo" },
									{ logo: "/logo/logo5.png", name: "Logo" },
									{ logo: "/logo/logo6.png", name: "Logo" },
								]}
							/>
						</section>
					</div>
				</div>
			</main>

			<InternshipMarquee />

			<Element name="services">
				<div className="px-4 md:px-0 w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] mx-auto pt-8 md:pt-0">
					<h1>
						<WordPullUpDemo />
					</h1>
					<p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
						From restaurant marketing to tech products — our services are built to help you grow
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						{services.map((service) => (
							<div
								key={service.title}
								className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-6 cursor-pointer hover:scale-105 transition-transform rounded-xl"
							>
								<Image
									src={service.icon}
									width={10000}
									height={10000}
									className="object-contain bg-gray-100 p-6 w-full h-48 rounded-md"
									alt={service.title}
								/>
								<h3 className="text-xl font-semibold">{service.title}</h3>
								<p className="text-gray-500">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</Element>

			{/* Internship Section */}
			<section className="px-4 md:px-0 w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] mx-auto my-10 md:my-20">
				<div className="md:flex items-center justify-between gap-x-16">
					<div className="md:w-1/2 space-y-6">
						<span className="inline-block bg-[#FF9B50] text-white text-sm font-medium px-4 py-1 rounded-full">
							Now Accepting Applications
						</span>
						<h2 className="text-3xl md:text-5xl font-medium">
							Launch Your Career with a{" "}
							<span className="text-[#FF9B50]">Margros Internship</span>
						</h2>
						<p className="text-gray-500 text-xl">
							We offer real-world internships across multiple domains — not just tech. Whether you&apos;re a BCom student, an engineering final year, or just starting out in 1st year, there&apos;s a place for you at Margros.
						</p>
						<div className="grid grid-cols-2 gap-4">
							{[
								"Software Development",
								"Digital Marketing",
								"Business & BCom",
								"UI/UX Design",
								"Sales & Outreach",
								"Content Creation",
							].map((domain) => (
								<div key={domain} className="flex items-center gap-x-2 text-gray-700 font-medium">
									<PiCheckBold className="text-[#FF9B50] text-lg flex-shrink-0" />
									{domain}
								</div>
							))}
						</div>
						<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
							<a
								href="https://internship.margros.in"
								target="_blank"
								rel="noopener noreferrer"
								className="text-center py-3 px-8 text-base hover:bg-[#FFB982] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200"
							>
								Apply Now
							</a>
							<a
								href="https://verify.margros.in"
								target="_blank"
								rel="noopener noreferrer"
								className="text-center py-3 px-8 text-base border-2 border-gray-300 rounded-[6px] text-gray-700 hover:border-[#FF9B50] hover:text-[#FF9B50] transition duration-200"
							>
								Verify Certificate
							</a>
						</div>
					</div>

					{/* Image + stats stacked */}
					<div className="md:w-1/2 mt-10 md:mt-0 flex flex-col gap-5">
						<div className="relative rounded-2xl overflow-hidden shadow-xl">
							<Image
								src="/howitworks.png"
								alt="Student holding internship certificate"
								width={800}
								height={600}
								className="w-full object-cover rounded-2xl"
							/>
							{/* overlay badge */}
							<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-md">
								<BadgeCheck size={18} className="text-[#FF9B50]" />
								<span className="text-sm font-semibold text-gray-800">Verified Certificates Issued</span>
							</div>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
							{[
								{ label: "Domains", value: "6+" },
								{ label: "Students", value: "50+" },
								{ label: "Colleges", value: "10+" },
								{ label: "Verified", value: "100%" },
							].map((stat) => (
								<div key={stat.label} className="bg-gray-100 rounded-xl p-4 text-center">
									<p className="text-[#FF9B50] text-2xl font-bold">{stat.value}</p>
									<p className="text-gray-500 mt-1 text-xs">{stat.label}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Our Ecosystem / Platforms Section */}
			<Element name="ecosystem">
			<section className="px-4 md:px-0 w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] mx-auto mt-10 md:mt-24 mb-6 md:mb-10">
				<div className="md:text-center mb-8 md:mb-14">
					<span className="inline-block text-sm font-semibold tracking-widest text-[#FF9B50] uppercase mb-3">What We&apos;ve Built</span>
					<h2 className="text-3xl md:text-5xl font-medium">
						The Margros <span className="text-[#FF9B50]">Ecosystem</span>
					</h2>
					<p className="py-4 md:w-1/2 mx-auto text-xl text-gray-500">
						Six platforms. One company. Built to serve restaurants, vendors, and students alike.
					</p>
				</div>

				{/* Featured Marketplace card — full width */}
				<a
					href="https://marketplace.margros.in"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 mb-6 rounded-2xl bg-[#0f0f0f] border border-neutral-800 overflow-hidden hover:border-[#FF9B50] transition-all duration-300 cursor-pointer"
				>
					{/* Glow */}
					<div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FF9B50] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

					<div className="md:w-1/2 space-y-4 z-10">
						<div className="flex items-center gap-3">
							<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF9B50] to-[#e8792a] flex items-center justify-center text-white shadow-lg"><ShoppingBag size={26} strokeWidth={1.8} /></div>
							<span className="text-xs font-bold tracking-widest text-[#FF9B50] uppercase bg-[#FF9B50]/10 border border-[#FF9B50]/30 px-3 py-1 rounded-full">Live Now</span>
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-white">Margros Marketplace</h3>
						<p className="text-gray-400 text-base leading-relaxed">
							A unified platform bringing together restaurant owners, vendors, and suppliers — discover products, source ingredients, and grow your business, all in one place.
						</p>
						<span className="inline-flex items-center gap-2 text-[#FF9B50] font-medium text-sm group-hover:gap-3 transition-all duration-200">
							marketplace.margros.in <span>→</span>
						</span>
					</div>

					<div className="w-full md:w-1/2 z-10 grid grid-cols-2 md:grid-cols-3 gap-3">
						{["Vendors", "Restaurants", "Suppliers", "Analytics", "Ordering", "Support"].map((tag) => (
							<div key={tag} className="bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-center text-gray-400 text-xs font-medium group-hover:border-[#FF9B50]/30 transition-colors duration-300">
								{tag}
							</div>
						))}
					</div>
				</a>

				{/* 5-card grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{([
						{
							icon: <Megaphone size={22} strokeWidth={1.8} className="text-[#FF9B50]" />,
							title: "Restaurant Marketing",
							desc: "Full-stack digital marketing — SEO, social media, PPC, content, and more.",
							domain: "margros.in",
							href: "https://margros.in",
						},
						{
							icon: <Monitor size={22} strokeWidth={1.8} className="text-[#FF9B50]" />,
							title: "RPOS — Point of Sale",
							desc: "A powerful POS system built for restaurants to streamline operations and billing.",
							domain: "rpos.margros.in",
							href: "https://rpos.margros.in",
						},
						{
							icon: <Clock size={22} strokeWidth={1.8} className="text-[#FF9B50]" />,
							title: "Pre-Ordering System",
							desc: "Let customers pre-order meals in advance — reduce wait times and boost efficiency.",
							domain: "preordering.margros.in",
							href: "https://preordering.margros.in",
						},
						{
							icon: <GraduationCap size={22} strokeWidth={1.8} className="text-[#FF9B50]" />,
							title: "Internship Platform",
							desc: "Real-world internships for students across tech, marketing, BCom, and more.",
							domain: "internship.margros.in",
							href: "https://internship.margros.in",
						},
						{
							icon: <BadgeCheck size={22} strokeWidth={1.8} className="text-[#FF9B50]" />,
							title: "Certificate Verification",
							desc: "Colleges and lecturers can instantly verify the authenticity of Margros internship certificates.",
							domain: "verify.margros.in",
							href: "https://verify.margros.in",
						},
					] as const).map((item) => (
						<a
							key={item.title}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col gap-4 p-6 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-[#FF9B50] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
						>
							<div className="w-11 h-11 rounded-xl bg-neutral-800 flex items-center justify-center">
								{item.icon}
							</div>
							<div className="space-y-1">
								<h3 className="text-lg font-bold text-white">{item.title}</h3>
								<p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
							</div>
							<span className="inline-flex items-center gap-1 text-[#FF9B50] text-sm font-semibold group-hover:gap-2 transition-all duration-200 mt-auto">
								{item.domain} <span>→</span>
							</span>
						</a>
					))}
				</div>
			</section>
			</Element>

			<MarketplaceMarquee />

			<Element name="process">
				<main className="px-4 md:px-0 w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] mx-auto">
					<h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
						Our{" "}
						<span className="text-[#FF9B50] flex gap-x-1 items-center">
							{" "}
							<Image
								src={"/icons/squiggle.svg"}
								width={10000}
								height={10000}
								className="w-6"
								alt="image"
							/>
							Creative
							<Image
								src={"/icons/star.svg"}
								width={10000}
								height={10000}
								className="w-6 mb-8"
								alt="image"
							/>
						</span>{" "}
						Process
					</h1>

					<p className="text-center
          py-4 md:w-1/2 mx-auto
          text-xl md:text-2xl text-gray-500">
						A simple, transparent process — from first conversation to final delivery.
					</p>

					<div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
						<div className="hidden md:block w-full md:w-1/2 order-2 md:order-1">
							<AnimatedBeamMultipleOutputDemo />
						</div>
						<div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
							<BoxRevealDemo />
						</div>
					</div>
				</main>
			</Element>


			<Element name="guarantees">
				<ShootingStarsAndStarsBackgroundDemo />
			</Element>

			<TechMarquee />

			<section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
				<LetsMakeThingsHappenSection />
			</section>

			<footer className="bg-[#fafafa] py-10 px-4 md:px-0 border-t">
				<div className="flex flex-col justify-between gap-y-3 
          w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] mx-auto">
					<h1 className="text-3xl md:text-5xl font-medium ">
						<Image
							src={"/logo/logo.png"}
							width={10000}
							height={10000}
							className="w-40"
							alt="image"
						/>{" "}
					</h1>
					<p className="text-left  text-xl  text-gray-500">+91 9663377473</p>
					<p className="text-left  text-xl  text-gray-500">
						margrosmarketing@gmail.com
					</p>
				</div>

				<div className="flex flex-col md:flex-row md:justify-center items-center gap-4 mt-10">
					<div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
						<Link
							href="/terms"
							className="hover:text-[#FFB982] transition-colors"
						>
							Terms of Service
						</Link>
						<span className="hidden md:inline">|</span>
						<Link
							href="/privacy"
							className="hover:text-[#FFB982] transition-colors"
						>
							Privacy Policy
						</Link>
						<span className="hidden md:inline">|</span>
						<Link
							href="/refund"
							className="hover:text-[#FFB982] transition-colors"
						>
							Cancellation & Refund
						</Link>
						<span className="hidden md:inline">|</span>
						<a
							href="https://verify.margros.in"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-[#FFB982] transition-colors"
						>
							Verify Certificate
						</a>
						<span className="hidden md:inline">|</span>
						<a
							href="https://internship.margros.in"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-[#FFB982] transition-colors"
						>
							Internships
						</a>
					</div>
				</div>
				<div className="text-sm justify-center text-center pt-5 text-gray-500">
					© 2025 Margros. All Rights Reserved.
				</div>
			</footer>
		</div>
	);
}