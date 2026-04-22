import React from 'react'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'
import { BiBuilding, BiKey } from 'react-icons/bi'
import { BsShieldCheck } from 'react-icons/bs'
const SERVICES = [
  {
    icon: BiKey,
    title: 'Property Buying',
    description:
      'Find your dream home or investment property with our expert guidance and exclusive access to premium listings.',
  },
  {
    icon: BiBuilding,
    title: 'Property Selling',
    description:
      'Maximize your property value with our strategic marketing, extensive network, and professional negotiation skills.',
  },
  {
    icon: BsShieldCheck,
    title: 'Property Management',
    description:
      'Comprehensive management services ensuring your investment is protected, maintained, and generating optimal returns.',
  },
]
export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50 dark:bg-navy-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive real estate solutions tailored to meet the highest standards of excellence."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="bg-white dark:bg-navy-800 p-10 rounded-sm border border-gray-200 dark:border-navy-700 hover:border-gold-500/50 dark:hover:border-gold-500/30 transition-colors group h-full shadow-sm hover:shadow-md">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-navy-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                    <Icon className="w-8 h-8 text-gold-500 group-hover:text-white dark:group-hover:text-navy-900 transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
