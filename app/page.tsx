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
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

import { useState, useEffect } from "react";

const services = [
	{
		icon: "/images/s_6.png",
		title: "Restaurant Web Design & Development",
		description:
			"Give your restaurant a strong online presence with a beautifully designed website that attracts and engages customers.",
	},
	{
		icon: "/images/s_1.png",
		title: "Restaurant SEO Services",
		description:
			"Make your restaurant easily discoverable on Google and other search engines, bringing in more diners with top search rankings.",
	},
	{
		icon: "/images/s_5.png",
		title: "Food & Menu Content Creation",
		description:
			"Entice customers with mouth-watering food photography, engaging blogs, and compelling menu descriptions that boost sales.",
	},
	{
		icon: "/images/s_3.png",
		title: "Social Media Marketing for Restaurants",
		description:
			"Engage food lovers with eye-catching posts, promotions, and interactive campaigns that drive reservations and orders.",
	},
	{
		icon: "/images/s_4.png",
		title: "Restaurant Email Marketing",
		description:
			"Keep customers coming back with personalized email campaigns featuring promotions, new menu launches, and exclusive deals.",
	},
	{
		icon: "/images/s_2.png",
		title: "PPC Advertising for Restaurants",
		description:
			"Maximize your restaurant’s reach with targeted ads that bring in more reservations, takeaway orders, and online deliveries.",
	},
];

export default function Home() {
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
				className="rounded-[6px] top-5 sticky md:mx-auto z-50 
        w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
        justify-between py-6 px-4 md:px-8 mx-auto"
			>
				<Link href={"/"}>
					<Image
						src={"/logo/logo.png"}
						alt="Logo"
						width={5000}
						height={5000}
						className="w-40"
					/>
				</Link>

				<div className="absolute right-1/2 translate-x-1/2 transform">
					<div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
						{/* Commenting out Showcase link
            <Link href={"/showcase"} className="hover:text-[#FF9B50]">
              Showcase
            </Link>
            */}

						<ScrollLink
							to="services"
							smooth={true}
							className="hover:text-[#FF9B50]"
						>
							Services
						</ScrollLink>

						<div className="relative group">
							<span className="hover:text-[#FF9B50] cursor-pointer">
								Terms
							</span>
							<div className="absolute hidden group-hover:flex flex-col bg-white shadow-md w-[200px] rounded-md mt-2 z-50">
								<ul className="text-gray-700 text-md">
									<li>
										<Link
											href="/terms"
											className="block px-4 py-2 hover:text-[#FF9B50]"
										>
											Terms of Service
										</Link>
									</li>
									<li>
										<Link
											href="/privacy"
											className="block px-4 py-2 hover:text-[#FF9B50]"
										>
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link
											href="/refund"
											className="block px-4 py-2 hover:text-[#FF9B50]"
										>
											Cancellation & Refund
										</Link>
									</li>
									<li>
										<Link
											href="/shipping"
											className="block px-4 py-2 hover:text-[#FF9B50]"
										>
											Shipping & Delivery
										</Link>
									</li>
								</ul>
							</div>
						</div>
						{/* 
            <Link
              href={'/offers'}
              className="hover:text-[#FF9B50]"
            >
              Offers
            </Link> */}

						<ScrollLink
							to="guarentees"
							smooth={true}
							className="hover:text-[#FF9B50]"
						>
							Guarentees
						</ScrollLink>
					</div>
				</div>

				<div className="flex items-center gap-x-4">
					<a href="tel:9663377473" className="hidden lg:flex">
						<button className="px-4 py-2 rounded-md flex items-center gap-x-3">
							+91 9663377473
						</button>
					</a>

					<Link
						href={"/meeting"}
						className="
  py-3 
  px-6
  text-lg 
  hover:bg-[#FFB982]
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
					>
						Book a call
					</Link>
				</div>
			</Element>

			<main className="md:pb-10">
				<div className="px-4 md:px-0 w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] mx-auto mt-14">
					<AnimatedShinyTextDemo />

					<h1>
						<CoverDemo />
					</h1>
					<p
						className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
					>
						Turn your passion into success with{" "}
						<b>
							<u>Margros</u>
						</b>
						<br />
						Schedule a call with us to discuss your Marketing and get a quote in
						minutes
					</p>

					<div
						className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
					>
						<Link
							href="/meeting"
							className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#FFB982] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
						>
							Book a Call
						</Link>
						{/* Commenting out Showcase button
            <Link href={"/showcase"} className="bg-white py-3 px-10 md:px-16 ...">
              Showcase
            </Link>
            */}
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
						<BoxReveal boxColor={"#FF9B50"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
								<PiCheckBold className="text-xl text-[#FF9B50]" />
								Design
							</p>
						</BoxReveal>
						<BoxReveal boxColor={"#FF9B50"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
								<PiCheckBold className="text-xl text-[#FF9B50]" />
								Development
							</p>
						</BoxReveal>
						<BoxReveal boxColor={"#FF9B50"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
								<PiCheckBold className="text-xl text-[#FF9B50]" />
								Marketing
							</p>
						</BoxReveal>
						<BoxReveal boxColor={"#FF9B50"} duration={0.5}>
							<p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
								<PiCheckBold className="text-xl text-[#FF9B50]" />
								Strategy
							</p>
						</BoxReveal>
					</div>

					<div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
						<div className="md:w-2/5">
							<h1 className="text-2xl font-medium text-gray-600 w-4/5">
								Trusted by fast moving Restaurnts
							</h1>

							<div className="flex my-6 gap-x-5 w-full">
								<div>
									<h1 className="text-[#FF9B50] text-3xl md:text-5xl">
										<NumberTicker value={15} /> +
										<p className="text-gray-500 text-sm md:text-md">
											Happy Clients
										</p>
									</h1>
								</div>

								<div className="w-px bg-gray-300 self-stretch"></div>

								<div className="flex-1 min-w-0">
									<h1 className="text-[#FF9B50] text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
										<NumberTicker value={30} /> +
										<p className="text-gray-500 text-sm md:text-md">
											Projects Completed
										</p>
									</h1>
								</div>
							</div>
						</div>

						<section className="overflow-hidden mt-10 md:w-4/5">
							<InfiniteMovingLogos
								speed="slow"
								direction="left"
								items={[
									{
										logo: "/logo/logo1.png",
										name: "Logo",
									},
									{
										logo: "/logo/logo2.png",
										name: "Logo",
									},
									{
										logo: "/logo/logo3.png",
										name: "Logo",
									},
									{
										logo: "/logo/logo4.png",
										name: "Logo",
									},
									{
										logo: "/logo/logo5.png",
										name: "Logo",
									},
									{
										logo: "/logo/logo6.png",
										name: "Logo",
									},
								]}
							/>
						</section>
					</div>
				</div>
			</main>

			<Element name="services">
				<div className="px-4 md:px-0 w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] mx-auto">
					<h1>
						<WordPullUpDemo />
					</h1>
					<p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
						All of our services are designed to help your business stand out
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
						{services.map((service) => (
							<div
								key={service.title}
								className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
							>
								<Image
									src={service.icon}
									width={10000}
									height={10000}
									className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
									alt="image"
								/>
								<h1 className="text-xl font-medium">{service.title}</h1>
								<p className="text-gray-500">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</Element>

			<section className="py-20">
				<ScrollBasedVelocityDemo />
			</section>

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
						All of our services are designed to help your business to get
						noticed.
					</p>

					<div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
						<div className="w-full md:w-1/2 order-2 md:order-1">
							<AnimatedBeamMultipleOutputDemo />
						</div>
						<div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
							<BoxRevealDemo />
						</div>
					</div>
				</main>
			</Element>

			<section>
				<main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 
          w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] mx-auto px-4 md:px-0">
					<Image
						src={"/reviews/vrb_review.jpeg"}
						width={10000}
						height={10000}
						className=" md:w-1/3 rounded-md"
						alt="image"
					/>
					<div className="flex flex-col gap-y-5 md:w-1/2">
						<h1 className="text-lg md:text-2xl ">
							&quot;We&apos;ve been working with Margros for over 6 months and
							they&apos;ve been amazing to work with. They&apos;ve helped us
							grow our business and we couldn&apos;t be happier with the
							results. &quot;
						</h1>
						<div className="flex items-center gap-x-1">
							<IconStarFilled className="text-4xl text-yellow-500" />
							<IconStarFilled className="text-4xl text-yellow-500" />
							<IconStarFilled className="text-4xl text-yellow-500" />
							<IconStarFilled className="text-4xl text-yellow-500" />
							<IconStarFilled className="text-4xl text-yellow-500" />
						</div>

						<span className="text-xl font-medium">
							Vijay Kumar <br />
							Owner of VRB Hotel & Resto-Bar
						</span>
					</div>
				</main>
			</section>

			<Element name="guarentees">
				<ShootingStarsAndStarsBackgroundDemo />
			</Element>

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
						<Link
							href="/shipping"
							className="hover:text-[#FFB982] transition-colors"
						>
							Shipping & Delivery
						</Link>
					</div>
				</div>
				<div className="text-sm justify-center text-center pt-5 text-gray-500">
					© 2025 Margros. All Rights Reserved.
				</div>
			</footer>
		</div>
	);
}