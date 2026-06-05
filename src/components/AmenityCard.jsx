/**
 * Amenity / feature card.
 *
 * variant  — 'full' (icon + expanding gold rule + title + desc)
 *          — 'minimal' (icon + label only, centered)
 * icon     — Lucide icon component
 * title    — card heading
 * desc     — optional description (only shown in 'full' variant)
 */
export default function AmenityCard({ icon: Icon, title, desc, variant = 'full' }) {
  if (variant === 'minimal') {
    return (
      <div
        className="flex flex-col items-center gap-3 py-7 px-4 text-center"
        style={{ border: '1px solid #E8DFD0', backgroundColor: '#FFFFFF' }}
      >
        <Icon size={20} style={{ color: '#C9A96E' }} strokeWidth={1.5} />
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.73rem',
            color: '#1C2B3A',
            fontWeight: 400,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </span>
      </div>
    )
  }

  return (
    <div
      className="group p-7 md:p-8 h-full"
      style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8DFD0' }}
    >
      <Icon size={20} style={{ color: '#C9A96E' }} strokeWidth={1.5} />

      {/* Expanding gold rule on hover */}
      <div
        className="my-4 transition-all duration-300 group-hover:w-8"
        style={{ width: 20, height: 1, backgroundColor: '#C9A96E' }}
      />

      <h3
        className="mb-2.5"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.2rem',
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
            fontSize: '0.82rem',
            color: '#6B7C5C',
            fontWeight: 300,
            lineHeight: 1.85,
          }}
        >
          {desc}
        </p>
      )}
    </div>
  )
}
