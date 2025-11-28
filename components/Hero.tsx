"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

          {/* LEFT SIDE — slides from LEFT only */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}   // from left
            animate={{ opacity: 1, x: 0 }}      // to normal
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block text-2xl font-semibold uppercase tracking-widest text-blue-900">
                Introducing AutoBotWa
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Build landing pages in minutes — powered by AI
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-6 max-w-md text-lg text-gray-600"
            >
              AutoBotWa lets you generate beautiful UI from plain text
              and deploy instantly to Vercel with a single click.
            </motion.p>

            {/* Buttons — stagger from LEFT */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="inline-flex items-center justify-center rounded-xl bg-black hover:bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-lg transition cursor-pointer active:scale-95"
              >
                Try Demo
              </motion.button>

              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition hover:bg-gray-200 cursor-pointer active:scale-95"
              >
                View on GitHub
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE — slides from RIGHT only */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}    // from right
            animate={{ opacity: 1, x: 0 }}      // to center
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/home_img.avif"
                alt="Hero Illustration"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
