/**
 * Stat / fact card for use inside a 3-column grid.
 *
 * value    — primary display text (e.g. "3 Bedrooms")
 * sub      — gold label below (e.g. "All En-Suite")
 * bordered — adds a right border for divider effect (all but last column)
 */
export default function VillaFactCard({ value, sub, bordered = false }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-7 px-4 text-center"
      style={{ borderRight: bordered ? '1px solid #E8DFD0' : 'none' }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(0.95rem, 2.2vw, 1.35rem)',
          color: '#1C2B3A',
          fontWeight: 400,
          display: 'block',
          lineHeight: 1.2,
        }}
      >
        {value}
      </span>
      {sub && (
        <span
          className="mt-1.5 uppercase"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.67rem',
            color: '#C9A96E',
            fontWeight: 500,
            letterSpacing: '0.16em',
            display: 'block',
          }}
        >
          {sub}
        </span>
      )}
    </div>
  )
}
