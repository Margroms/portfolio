"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type IntroPhase = "logo" | "done";

export default function WelcomeAnimationLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const shouldShowIntroOnEntry = pathname === "/";

  const [hasPlayedIntro, setHasPlayedIntro] = useState(
    Boolean(prefersReducedMotion) || !shouldShowIntroOnEntry
  );
  const [phase, setPhase] = useState<IntroPhase>(
    Boolean(prefersReducedMotion) || !shouldShowIntroOnEntry ? "done" : "logo"
  );

  useEffect(() => {
    if (prefersReducedMotion || !shouldShowIntroOnEntry || hasPlayedIntro) {
      setPhase("done");
      setHasPlayedIntro(true);
      return;
    }

    const timeout = window.setTimeout(() => {
      setPhase("done");
      setHasPlayedIntro(true);
    }, 2200);

    return () => window.clearTimeout(timeout);
  }, [hasPlayedIntro, prefersReducedMotion, shouldShowIntroOnEntry]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  return (
    <>
      <motion.div
        initial={false}
        animate={
          phase === "done"
            ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
            : { opacity: 0, y: 10, scale: 0.985, filter: "blur(14px)" }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-screen flex flex-col"
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="welcome-intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-[#121212]"
          >
            {/* Orange radial glow matching brand color #FF9B50 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,155,80,0.18),transparent_55%)]" />
            {/* Subtle diagonal highlight */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,155,80,0.06),transparent_45%)]" />
            {/* Subtle grid matching site background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:14px_24px]" />

            <div className="relative z-10 flex h-full items-center justify-center px-6">
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.28, filter: "blur(18px)" }}
                animate={{
                  opacity: [0, 0.35, 0.85, 1],
                  scale: [0.28, 0.58, 1.12, 1],
                  filter: ["blur(18px)", "blur(10px)", "blur(2px)", "blur(0px)"],
                }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 1.15,
                  delay: 0.1,
                  ease: "easeOut",
                  times: [0, 0.42, 0.82, 1],
                }}
                style={{ transformPerspective: 1200 }}
                className="relative h-36 w-36 md:h-44 md:w-44"
              >
                <Image
                  src="/logo/logo.png"
                  alt="Margros"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_48px_rgba(255,155,80,0.45)]"
                />
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
