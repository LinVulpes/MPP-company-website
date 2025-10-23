"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex items-center justify-between h-20 overflow-visible">
          <div className="relative flex items-center justify-between h-20 overflow-visible">
            <a href="/" className="flex items-center space-x-2 overflow-visible">
              <img
                src="/logo.png"
                alt="Myanmar Print & Pack logo"
                className="w-32 h-32" // increased size and slightly shifted upward
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--text-dark)] hover:text-[var(--cyan)] px-3 py-2 text-sm font-medium transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault()
                    const targetId = item.href.slice(1)
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      const yOffset = -80
                      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
                      window.scrollTo({ top: y, behavior: "smooth" })
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button className="btn btn-primary">CONTACT US</button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--text-dark)] hover:text-[var(--cyan)] focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--text-dark)] hover:text-[var(--cyan)] block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  const targetId = item.href.slice(1)
                  const targetElement = document.getElementById(targetId)
                  if (targetElement) {
                    const yOffset = -80
                    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: "smooth" })
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full btn btn-primary mt-4">CONTACT US</button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
