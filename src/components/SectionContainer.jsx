/**
 * Site-wide section wrapper.
 *
 * bg       — 'cream' | 'white' | 'navy' | 'dark' | 'olive' | 'sand' | 'transparent' | raw CSS colour
 * size     — 'sm' | 'md' | 'lg'  (vertical padding)
 * narrow   — max-w-3xl instead of max-w-[1280px]
 * full     — no inner container (full-bleed content)
 */

const BG = {
  cream:       '#FAF8F4',
  white:       '#FFFFFF',
  navy:        '#1C2B3A',
  dark:        '#0F1A24',
  olive:       '#5C6E50',
  sand:        '#E8DFD0',
  transparent: 'transparent',
}

// 80px → 96px → 120px desktop  (matches user's 80–120px spec)
const SIZE = {
  sm:  'py-16 md:py-20',
  md:  'py-20 md:py-24 lg:py-28',
  lg:  'py-24 md:py-28 lg:py-32',
}

// Legacy alias so old `spacing` prop still works
const SPACING_ALIAS = {
  xs:  'sm',
  sm:  'sm',
  md:  'md',
  lg:  'lg',
  xl:  'lg',
  none: null,
}

export default function SectionContainer({
  bg = 'cream',
  size,
  spacing,          // legacy
  narrow = false,
  full = false,
  className = '',
  style: extraStyle = {},
  children,
  ...props
}) {
  const backgroundColor = BG[bg] ?? bg

  // Resolve size: new `size` prop takes priority, then legacy `spacing`, then 'md'
  const resolved = size ?? SPACING_ALIAS[spacing] ?? 'md'
  const paddingClass = resolved ? SIZE[resolved] ?? SIZE.md : ''

  const containerClass = full
    ? `${paddingClass} ${className}`.trim()
    : `${narrow ? 'max-w-3xl' : 'max-w-[1280px]'} mx-auto px-5 md:px-8 lg:px-12 ${paddingClass} ${className}`.trim()

  return (
    <section style={{ backgroundColor, ...extraStyle }} {...props}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  )
}
