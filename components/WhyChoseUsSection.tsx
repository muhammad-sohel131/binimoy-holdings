import React, { lazy } from 'react'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'
import Image from 'next/image'
import { BiMap, BiShield, BiUser } from 'react-icons/bi'
import { BsEye } from 'react-icons/bs'
const POINTS = [
  {
    icon: BiShield,
    title: 'Unwavering Trust',
    description:
      'Built on a foundation of integrity, we deliver on our promises with complete transparency in every transaction.',
  },
  {
    icon: BsEye,
    title: 'Complete Transparency',
    description:
      'Clear communication, honest pricing, and no hidden fees. We keep you informed at every step of the journey.',
  },
  {
    icon: BiMap,
    title: 'Prime Locations',
    description:
      'We carefully select the most sought-after neighborhoods to ensure your investment grows in value.',
  },
  {
    icon: BiUser,
    title: 'Expert Team',
    description:
      'Our seasoned professionals bring decades of market knowledge and architectural expertise to every project.',
  },
]
export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="py-24 bg-white dark:bg-navy-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/binimoyHoldings.jpeg"
                alt="Modern architecture"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1000}
                height={500}
              />
              <div className="absolute inset-0 bg-gray-900/10 dark:bg-navy-900/20" />
            </div>
          </FadeIn>

          <div>
            <SectionHeading title="Why Choose Binimoy" centered={false} />

            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              {POINTS.map((point, index) => {
                const Icon = point.icon
                return (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="flex flex-col gap-3">
                      <Icon className="w-8 h-8 text-gold-500" />
                      <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
                        {point.description}
                      </p>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
