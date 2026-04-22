import React, { useEffect, useState } from 'react'
import { useTheme } from './ThemeContext'
import { LuBuilding2 } from 'react-icons/lu'
import Link from 'next/link'
import { BiMoon } from 'react-icons/bi'
import { SiUnity } from 'react-icons/si'
import { FaX } from 'react-icons/fa6'
import { FcMenu } from 'react-icons/fc'
import Image from 'next/image'
const NAV_LINKS = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Update active section based on scroll position
      const sections = NAV_LINKS.map((link) => link.href.substring(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="Binimoy Logo" className="w-20 h-20" width={100} height={100}/>
            <span
              className={`font-display text-2xl font-bold tracking-wider ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
            >
              BINIMOY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-600 dark:hover:text-gold-400 ${activeSection === link.href.substring(1) ? 'text-gold-600 dark:text-gold-500' : isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'}`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-navy-800' : 'text-gray-200 hover:bg-white/10'}`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <BiMoon className="w-5 h-5" />
              ) : (
                <SiUnity className="w-5 h-5" />
              )}
            </button>
            <Link
              href="#contact"
              className="bg-gold-500 hover:bg-gold-600 text-white dark:text-navy-900 px-6 py-2 rounded-sm font-semibold transition-colors"
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'}`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <BiMoon className="w-5 h-5" />
              ) : (
                <SiUnity className="w-5 h-5" />
              )}
            </button>
            <button
              className={`${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaX className="w-6 h-6" />
              ) : (
                <FcMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-navy-800 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 border-t border-gray-100 dark:border-navy-700' : 'max-h-0'}`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-gold-600 dark:text-gold-500' : 'text-gray-600 dark:text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
