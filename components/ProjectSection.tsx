import React, { lazy } from 'react'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'
import Image from 'next/image'
import { BiMapPin } from 'react-icons/bi'
const PROJECTS = [
  {
    id: 1,
    title: 'The Sapphire Heights',
    location: 'Gulshan Avenue, Dhaka',
    price: '$1.2M - $3.5M',
    status: 'Ongoing',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Emerald Residences',
    location: 'Banani, Dhaka',
    price: '$850K - $2.1M',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Oasis Villas',
    location: 'Baridhara Diplomatic Zone',
    price: '$2.5M - $5.0M',
    status: 'Ongoing',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Lumina Towers',
    location: 'Dhanmondi, Dhaka',
    price: '$600K - $1.5M',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Azure Skyline',
    location: 'Uttara, Dhaka',
    price: '$500K - $1.2M',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
  },
]
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-navy-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore our portfolio of exclusive properties designed for those who appreciate the finer things in life."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <article className="group bg-gray-50 dark:bg-navy-900 rounded-sm overflow-hidden border border-gray-200 dark:border-navy-700 hover:border-gold-500/50 dark:hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/50">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm text-gold-600 dark:text-gold-400 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <BiMapPin className="w-4 h-4 mr-1 text-gold-500" />
                    {project.location}
                  </div>
                  {/* <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-navy-700">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      Price Range
                    </span>
                    <span className="text-gray-900 dark:text-white font-semibold">
                      {project.price}
                    </span>
                  </div> */}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block border border-gold-500 text-gold-600 dark:text-gold-500 hover:bg-gold-500 hover:text-white dark:hover:text-navy-900 px-8 py-3 rounded-sm font-semibold transition-all"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
