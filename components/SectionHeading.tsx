import { FadeIn } from './FadeIn'
interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}
export function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <FadeIn className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <div
        className={`h-1 w-20 bg-gold-500 mb-6 ${centered ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg font-light leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
