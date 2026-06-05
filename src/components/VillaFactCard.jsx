/**
 * Villa stat card — used in the "At a Glance" horizontal bar.
 * Tailwind UI property template style: large value, small uppercase label.
 */
export default function VillaFactCard({ value, sub, bordered = false }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-8 px-5 text-center"
      style={{ borderRight: bordered ? '1px solid #E8DFD0' : 'none' }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.15rem, 2.5vw, 1.6rem)',
          color: '#1C2B3A',
          fontWeight: 400,
          display: 'block',
          lineHeight: 1.15,
          letterSpacing: '-0.01em',
        }}
      >
        {value}
      </span>
      {sub && (
        <span
          className="mt-2 uppercase block"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.6875rem',
            color: '#C9A96E',
            fontWeight: 600,
            letterSpacing: '0.18em',
          }}
        >
          {sub}
        </span>
      )}
    </div>
  )
}
