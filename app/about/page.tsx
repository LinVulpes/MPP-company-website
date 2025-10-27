"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-dark)] mb-6 text-balance">
                            Empowering Myanmar Through Print and Packing
                        </h1>
                        <p className="text-lg md:text-xl text-[var(--text-light)] mb-8 font-body">
                            Your trusted print and packaging partner delivering quality, agility, and reliability in every detail.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" className="bg-[var(--cyan)] hover:bg-[var(--cyan)]/90">
                                Learn
                            </Button>
                            <Button size="lg" variant="outline">
                                Explore
                            </Button>
                        </div>
                    </motion.div>

                    {/* Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative max-w-5xl mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Large top image */}
                            <div className="md:col-span-2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2016_9%20-%201%20%283%29-vboiGZJqYJaN2YueMZpCBGxPeWrCz4.jpg"
                                    alt="Industrial printing machinery"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom left - Logo/Branding */}
                            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-3xl font-bold mb-2">INTELLIGENT</div>
                                    <div className="text-2xl font-bold">DIGITAL</div>
                                    <div className="mt-4">
                                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 via-magenta-400 to-yellow-400 rounded-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom right - Printing in action */}
                            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                                <Image src="/printing-press-with-colorful-cmyk-ink-rollers.jpg" alt="Printing process" fill className="object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Core Business Groups */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6">
                            Our core business groups
                        </h2>
                        <p className="text-lg text-[var(--text-light)] max-w-4xl mx-auto font-body">
                            Delivering tailored solutions across printing, packaging, and educational technologies designed to meet
                            your business needs with precision and innovation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Intelligent Print Solutions */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/modern-printing-equipment-with-cmyk-colors.jpg"
                                alt="Intelligent print solutions"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="text-sm font-semibold text-[var(--cyan)] mb-3">Intelligent Print</div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                                    Intelligent print solutions for modern businesses
                                </h3>
                                <p className="text-sm text-gray-200 mb-4 font-body">
                                    Cutting-edge printing technology and solutions tailored for contemporary business needs
                                </p>
                                <Button variant="link" className="text-white p-0 h-auto">
                                    Learn More →
                                </Button>
                            </div>
                        </motion.div>

                        {/* Business Solutions with Integrity */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/professional-business-team-collaborating-in-office.jpg"
                                alt="Business solutions with integrity"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="text-sm font-semibold text-[var(--magenta)] mb-3">Ethical Trust</div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Business solutions with integrity</h3>
                                <p className="text-sm text-gray-200 mb-4 font-body">
                                    Delivering trusted business solutions that prioritize ethical practices and client success
                                </p>
                                <Button variant="link" className="text-white p-0 h-auto">
                                    Learn More →
                                </Button>
                            </div>
                        </motion.div>

                        {/* Modern Educational Technology */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="group relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/students-using-tablets-in-modern-classroom.jpg"
                                alt="Modern educational technology solutions"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="text-sm font-semibold text-[var(--yellow)] mb-3">Edu-Tech</div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                                    Modern educational technology solutions
                                </h3>
                                <p className="text-sm text-gray-200 mb-4 font-body">
                                    Innovative educational technology empowering the next generation of learners
                                </p>
                                <Button variant="link" className="text-white p-0 h-auto">
                                    Learn More →
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <p className="text-lg text-[var(--text-light)] leading-relaxed font-body mb-8">
                            Founded in 2016, <strong className="text-[var(--text-dark)]">Myanmar Print & Pack (MMP)</strong> is a
                            leading public company providing integrated solutions across printing, packaging, and educational
                            technology. We deliver exceptional value through our Intelligent Print Solutions, Ethical Trust Business
                            Group, and Edu-Tech divisions, driving sustainable growth and innovation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6">Main Supplier</h3>
                            <div className="bg-gradient-to-br from-[var(--cyan)]/10 to-[var(--cyan)]/5 border-2 border-[var(--cyan)] p-8 rounded-xl">
                                <p className="text-xl font-bold text-[var(--text-dark)]">APP Sinarmas</p>
                                <p className="text-sm text-[var(--text-light)] mt-2 font-body">
                                    Our trusted partner for premium paper products
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6">Partner Banks</h3>
                            <div className="space-y-4">
                                {["MAB", "AYA Bank", "KBZ Bank"].map((bank, index) => (
                                    <div
                                        key={bank}
                                        className="bg-gradient-to-r from-[var(--magenta)]/10 to-[var(--magenta)]/5 border-l-4 border-[var(--magenta)] p-4 rounded-lg"
                                    >
                                        <p className="font-bold text-[var(--text-dark)]">{bank}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
