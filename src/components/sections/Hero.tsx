"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { easeSoft } from "@/lib/motion";
import { ArrowRightIcon, HeartIcon } from "../ui/SocialIcons";

/**
 * Hero de la page d'accueil :
 * - vidéo de fond en boucle, muette, autoplay ;
 * - overlay sombre léger pour la lisibilité ;
 * - image de secours si la vidéo ne charge pas (ou si reduced-motion) ;
 * - animations d'entrée (titre, sous-titre, boutons, indicateur de scroll).
 */
export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const showVideo = !reduced && !videoFailed;

  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.12, duration: 0.8, ease: easeSoft },
    }),
  };

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-charcoal">
      {/* Média de fond */}
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero-fallback.jpg"
            onError={() => setVideoFailed(true)}
            aria-hidden="true"
          >
            <source src="/videos/hero-loop.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/hero-fallback.jpg"
            alt="Des enfants souriants réunis autour de leurs activités à l'école."
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        {/* Overlay sombre léger pour la lisibilité */}
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Contenu */}
      <div className="container-x relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.p
            custom={0}
            variants={item}
            initial={reduced ? false : "hidden"}
            animate="visible"
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            <HeartIcon className="h-4 w-4 text-amber" />
            Depuis {site.founded}, aux côtés des enfants
          </motion.p>

          <motion.h1
            custom={1}
            variants={item}
            initial={reduced ? false : "hidden"}
            animate="visible"
            className="text-balance font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            {site.slogan}
          </motion.h1>

          <motion.p
            custom={2}
            variants={item}
            initial={reduced ? false : "hidden"}
            animate="visible"
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            Nous accompagnons les enfants les plus démunis par l&apos;éducation,
            la santé et la protection, pour leur offrir un avenir digne et plein
            d&apos;espoir.
          </motion.p>

          <motion.div
            custom={3}
            variants={item}
            initial={reduced ? false : "hidden"}
            animate="visible"
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/faire-un-don"
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 font-semibold text-charcoal shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-dark"
            >
              <HeartIcon className="h-5 w-5" />
              Faire un don
            </Link>
            <Link
              href="/nos-actions"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Découvrir nos actions
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      {!reduced && (
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.2em]">Défiler</span>
          <motion.span
            className="h-10 w-[1px] bg-white/40"
            animate={{ scaleY: [1, 0.3, 1], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
}
