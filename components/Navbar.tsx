"use client"

import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-black">
          AutoBotWa
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-600 hover:text-black transition">
            Home
          </a>
          <a href="#features" className="text-gray-600 hover:text-black transition">
            Features
          </a>
         
          <a href="#testimonials" className="text-gray-600 hover:text-black transition">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black transition">
            Contact
          </a>
        </div>

        <button className="hidden cursor-pointer md:inline-flex rounded-lg bg-black px-5 py-2 text-white font-medium hover:bg-blue-900 transition">
          Get Started
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
          aria-label="Toggle menu"
        >
          <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col gap-4 p-6 border-b">
          <a href="#home" className="text-gray-600 hover:text-black transition py-2">
            Home
          </a>
          <a href="#features" className="text-gray-600 hover:text-black transition py-2">
            Features
          </a>
         
          <a href="#testimonials" className="text-gray-600 hover:text-black transition py-2">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black transition py-2">
            Contact
          </a>
          <button className="rounded-lg bg-black cursor-pointer active:scale-95 px-5 py-2 text-white font-medium hover:bg-gray-900 transition w-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}
