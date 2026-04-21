import React, { lazy } from 'react'
import { FadeIn } from './FadeIn'
import Image from 'next/image'
import { SectionHeading } from './SectionHeading'
const STATS = [
  {
    value: '15+',
    label: 'Years Experience',
  },
  {
    value: '200+',
    label: 'Projects Completed',
  },
  {
    value: '500+',
    label: 'Happy Clients',
  },
  {
    value: '$2B+',
    label: 'Property Value',
  },
]
export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-navy-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              title="Building Legacies, Not Just Homes"
              centered={false}
            />
            <FadeIn delay={0.2}>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 font-light">
                Binimoy Holdings Ltd. is a premier real estate development
                company dedicated to creating extraordinary living spaces. With
                a commitment to architectural brilliance and uncompromising
                quality, we transform prime locations into landmark properties.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 font-light">
                Our philosophy is rooted in transparency, trust, and a deep
                understanding of modern luxury. Every project we undertake is a
                testament to our dedication to excellence and our passion for
                elevating the standard of living.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {STATS.map((stat, index) => (
                  <div key={index} className="border-l-2 border-gold-500 pl-4">
                    <div className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left" className="relative">
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/binimoyHoldings.jpeg"
                alt="Luxury interior"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 border-2 border-gold-500 m-6 rounded-sm pointer-events-none opacity-50" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-navy-800 p-8 shadow-2xl rounded-sm border border-gray-100 dark:border-navy-700 hidden md:block">
              <div className="font-display text-2xl font-bold text-gold-600 dark:text-gold-500 mb-2">
                Excellence
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                In every detail
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
