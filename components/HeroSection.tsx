import React, { useEffect, useState, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { BiChevronRight } from 'react-icons/bi'
import Link from 'next/link'
const SLIDES = [
  {
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000',
    title: 'Premium Living Starts Here',
    subtitle:
      'Discover unparalleled luxury and architectural excellence in the heart of the city.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Exquisite Modern Estates',
    subtitle:
      'Where sophisticated design meets everyday comfort. Your dream home awaits.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
    title: 'Invest in Your Future',
    subtitle:
      'Exclusive properties that define prestige and offer exceptional value.',
  },
]
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 9000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-gray-900 dark:bg-navy-900"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gray-900/50 dark:bg-navy-900/60 z-10" />{' '}
          {/* Dark overlay */}
          <Image
            src={SLIDES[currentSlide].image}
            alt={SLIDES[currentSlide].title}
            className="w-full h-full object-cover"
            loading={currentSlide === 0 ? 'eager' : 'lazy'}
            width={2000}
            height={1200}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto pt-20">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {SLIDES[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            {SLIDES[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="bg-gold-500 hover:bg-gold-600 text-white dark:text-navy-900 px-8 py-4 rounded-sm font-semibold transition-all flex items-center justify-center gap-2 group"
            >
              View Projects
              <BiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="bg-white/10 backdrop-blur-sm border border-white hover:bg-white hover:text-gray-900 dark:hover:text-navy-900 text-white px-8 py-4 rounded-sm font-semibold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${index === currentSlide ? 'w-8 bg-gold-500' : 'w-4 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
