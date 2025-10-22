"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-gray)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MP</span>
              </div>
              <span className="text-lg font-bold">Myanmar Print & Pack</span>
            </div>
            <p className="mb-4 text-white/70 text-sm leading-relaxed">
              Turning houses into homes, one design at a time. Leading provider of integrated printing and packaging
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[var(--cyan)] transition duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[var(--cyan)] transition duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[var(--cyan)] transition duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[var(--cyan)] transition duration-300">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-[var(--cyan)] transition duration-300 text-white/70">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[var(--cyan)] transition duration-300 text-white/70">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[var(--cyan)] transition duration-300 text-white/70">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-[var(--cyan)] transition duration-300 text-white/70">
                  Portfolio
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[var(--cyan)] transition duration-300 text-white/70">
                  Printing Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--cyan)] transition duration-300 text-white/70">
                  Packaging Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--cyan)] transition duration-300 text-white/70">
                  Educational Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--cyan)] transition duration-300 text-white/70">
                  Business Solutions
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <p className="text-white/70">Yangon, Myanmar</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--cyan)] flex-shrink-0" />
                <p className="text-white/70">+95 123 456 789</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--cyan)] flex-shrink-0" />
                <p className="text-white/70">info@myanmarpp.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Myanmar Print & Pack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
