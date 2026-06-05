/**
 * Amenity / feature card — two display modes.
 *
 * variant='full'    — icon + expanding rule + title + description
 *                     Pattern: shadcn/ui card with villa brand styling
 * variant='minimal' — icon + label only, centred (used in At a Glance grids)
 *
 * icon  — Lucide icon component
 * title — card heading
 * desc  — description (full variant only)
 */
export default function AmenityCard({ icon: Icon, title, desc, variant = 'full' }) {
  if (variant === 'minimal') {
    return (
      <div
        className="flex flex-col items-center gap-3 py-8 px-5 text-center"
        style={{
          border: '1px solid #E8DFD0',
          backgroundColor: '#FFFFFF',
          minHeight: 110,
        }}
      >
        <Icon size={22} style={{ color: '#C9A96E' }} strokeWidth={1.4} />
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.75rem',
            color: '#1C2B3A',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            lineHeight: 1.4,
          }}
        >
          {title}
        </span>
      </div>
    )
  }

  // Full variant — shadcn/ui card pattern adapted to villa aesthetic
  return (
    <div
      className="group flex flex-col p-7 md:p-8 h-full"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E8DFD0',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#C9A96E'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#E8DFD0'}
    >
      <Icon size={24} style={{ color: '#C9A96E', flexShrink: 0 }} strokeWidth={1.4} />

      <div
        className="my-5 transition-all duration-300 group-hover:w-8"
        style={{ width: 24, height: 1, backgroundColor: '#C9A96E' }}
      />

      <h3
        className="mb-3"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.2rem, 2vw, 1.4rem)',
          color: '#1C2B3A',
          fontWeight: 400,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      {desc && (
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.9375rem',
            color: '#5A6B60',
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          {desc}
        </p>
      )}
    </div>
  )
}
