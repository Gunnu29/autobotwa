import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-6">
              <span className="inline-block text-2xl font-semibold uppercase tracking-widest text-blue-900">
                Introducing AutoBotWa
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build landing pages in minutes — powered by AI
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-md text-lg text-gray-600">
              AutoBotWa lets you generate beautiful UI from plain text and
              deploy instantly to Vercel with a single click.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
              <button className="inline-flex items-center justify-center rounded-xl bg-black hover:bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-lg transition duration-200 cursor-pointer active:scale-95">
                Try Demo
              </button>
              <button className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition duration-200 hover:bg-gray-200 cursor-pointer active:scale-95">
                View on GitHub
              </button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex items-center justify-center w-full">
            <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/home_img.avif"
                alt="Hero Illustration"
                width={800} // required
                height={600} // required
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
