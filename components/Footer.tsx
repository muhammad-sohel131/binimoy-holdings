import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-navy-950 pt-16 pb-8 border-t border-gray-800 dark:border-navy-800 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <LuBuilding2 className="w-8 h-8 text-gold-500" />
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                BINIMOY
              </span>
            </Link>
            <p className="text-gray-400 text-sm font-light text-center md:text-left max-w-md">
              Crafting luxury living spaces and building legacies through
              uncompromising quality and architectural excellence.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 dark:bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white dark:hover:text-navy-900 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 dark:bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white dark:hover:text-navy-900 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 dark:bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white dark:hover:text-navy-900 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 dark:bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white dark:hover:text-navy-900 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Binimoy Holdings Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-gray-500 hover:text-gold-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gold-500 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
