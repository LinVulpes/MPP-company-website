"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2016_9%20-%201%20%283%29-vboiGZJqYJaN2YueMZpCBGxPeWrCz4.jpg"
          alt="Industrial printing machinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Integrated Printing &<br />
            Packaging Solutions
            <br />
            for a Sustainable
            <br />
            Future
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
            Founded in 2016, Myanmar Print & Pack (MPP) is a leading public company providing integrated solutions
            across printing, packaging, and educational technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-[var(--cyan)] text-white hover:bg-[var(--cyan)]/90 flex items-center gap-2"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  )
}
