const BG = {
  cream:       '#FAF8F4',
  white:       '#FFFFFF',
  navy:        '#1C2B3A',
  dark:        '#0F1A24',
  olive:       '#5C6E50',
  sand:        '#E8DFD0',
  transparent: 'transparent',
}

const SPACING = {
  none: '',
  xs:   'py-10 md:py-14',
  sm:   'py-12 md:py-16',
  md:   'py-16 md:py-20 lg:py-24',
  lg:   'py-20 md:py-24 lg:py-28',
  xl:   'py-24 md:py-32 lg:py-36',
}

/**
 * Reusable section wrapper with standardised max-width and padding.
 *
 * bg        — preset key from BG map, or a raw CSS colour string
 * spacing   — preset key from SPACING map
 * narrow    — use max-w-4xl instead of max-w-7xl
 * className — extra classes on the inner container div
 */
export default function SectionContainer({
  bg = 'cream',
  spacing = 'lg',
  narrow = false,
  className = '',
  style: extraStyle = {},
  children,
  ...props
}) {
  const backgroundColor = BG[bg] ?? bg

  return (
    <section style={{ backgroundColor, ...extraStyle }} {...props}>
      <div
        className={`${narrow ? 'max-w-4xl' : 'max-w-7xl'} mx-auto px-5 md:px-8 lg:px-12 ${SPACING[spacing]} ${className}`}
      >
        {children}
      </div>
    </section>
  )
}
