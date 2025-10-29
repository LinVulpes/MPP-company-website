"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

const newsItems = [
    {
        id: "sustainable-printing-2024",
        date: "March 15, 2024",
        title: "New Sustainable Printing Technology Launched",
        description:
            "We're proud to announce our latest eco-friendly printing solutions that reduce environmental impact by 40%.",
        image: "/modern-printing-press-technology.jpg",
    },
    {
        id: "sustainable-printing-2024",
        date: "March 10, 2024",
        title: "Partnership with Leading Educational Institutions",
        description:
            "Expanding our Edu-Tech division with new partnerships to bring innovative learning solutions to schools.",
        image: "/classroom-tablets.png",
    },
    {
        id: "sustainable-printing-2024",
        date: "March 5, 2024",
        title: "Industry Excellence Award 2024",
        description: "Myanmar Print & Pack recognized for outstanding contribution to the printing and packaging industry.",
        image: "/business-award-trophy.jpg",
    },
    {
        id: "sustainability-award-2024",
        date: "Oct. 25, 2025",
        title: "Event Title",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
        image: "/corporate-award-ceremony.jpg",
    },
]

export default function LatestNews() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerPage = 3

    const totalPages = Math.ceil(newsItems.length / itemsPerPage)
    const canGoPrev = currentIndex > 0
    const canGoNext = currentIndex < totalPages - 1

    const handlePrev = () => {
        if (canGoPrev) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if (canGoNext) {
            setCurrentIndex(currentIndex + 1)
        }
    }
    const visibleItems = newsItems.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

    return (
        <section className="section-padding bg-white">
            <div className="container">
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] whitespace-nowrap">Events & Latest News</h2>
                        <div className="h-[2px] bg-gray-300 flex-1"></div>
                    </div>
                </div>

                <div className="relative">
                    {/* Left Navigation Button */}
                    <button
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${canGoPrev
                            ? "border-[var(--text-dark)] bg-white hover:bg-[var(--text-dark)] hover:text-white text-[var(--text-dark)]"
                            : "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                        aria-label="Previous events"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {visibleItems.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Link
                                    href={`/events/${item.id}`}
                                    className="block border-2 border-gray-300 hover:border-[var(--cyan)] transition-colors duration-300 group bg-white"
                                >
                                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold mb-3 text-[var(--text-dark)] group-hover:text-[var(--cyan)] transition-colors min-h-[3.5rem]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[var(--text-light)] mb-4 leading-relaxed text-sm line-clamp-3 flex-grow min-h-[4.5rem]">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-[var(--text-light)] text-sm mt-auto">
                                            <Calendar className="w-4 h-4 shrink-0" />
                                            <time>{item.date}</time>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        onClick={handleNext}
                        disabled={!canGoNext}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${canGoNext
                            ? "border-[var(--text-dark)] bg-white hover:bg-[var(--text-dark)] hover:text-white text-[var(--text-dark)]"
                            : "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                        aria-label="Next events"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[var(--text-dark)] w-8" : "bg-gray-300"
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
