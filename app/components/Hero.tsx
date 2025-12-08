"use client"

import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const slides = [
  {
    image: "/images/AMP.jpg",
    title: "Integrated Printing &\nPackaging Solutions\nfor a Sustainable\nFuture",
    description:
      "Myanmar Print & Pack delivers comprehensive, innovative, and ethical printing, packaging, and educational technology solutions. We are committed to driving growth and sustainability for our clients and stakeholders.",
  },
  {
    image: "/images/printing-paper-color.png",
    title: "Quality Print Solutions\nfor Modern\nBusinesses",
    description:
      "From premium paper trading to state-of-the-art printing equipment, we provide end-to-end solutions that deliver exceptional results for your business needs.",
  },
  {
    image: "/images/packaing-and-transporting.png",
    title: "Innovative Packaging\nSolutions That\nMake an Impact",
    description:
      "Our advanced packaging technologies and expert team ensure your products stand out with professional, high-quality packaging that protects and promotes your brand.",
  },
  {
    image: "/educational-technology-classroom-with-tablets.jpg",
    title: "Educational Technology\nfor Tomorrow's\nLearners",
    description:
      "Empowering education through cutting-edge technology solutions that enhance learning experiences and prepare students for a digital future.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt="Industrial printing machinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10">
        <div className="max-w-3xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
                {slides[currentSlide].title}
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg mb-8 text-white/90">
                {slides[currentSlide].description}
              </p>

              {/* Navigation Dots */}
              <div className="flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide
                      ? "bg-white"
                      : "bg-transparent border-2 border-white hover:bg-white/30"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/*  Navigation Dots Section */}
        <div className="relative flex items-center gap-6 mb-12">
          {/* Stationary Line */}
          <div className="absolute -top-2 left-0 -translate-x-[18vw] w-[16vw] h-0.5 bg-white/30" />
        </div>

        <div className="max-w-3xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--dark-blue)] text-white px-3 py-4 rounded-[10px] flex items-center gap-2 font-semibold shadow-sm"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div >
    </section >
  )
}
