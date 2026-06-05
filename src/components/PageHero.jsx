/**
 * Reusable hero for inner pages (not the homepage).
 * Renders a full-width image with a dark gradient and bottom-aligned text.
 *
 * image      — src URL
 * alt        — img alt text
 * height     — CSS height value, default '65vh'
 * minHeight  — CSS min-height value, default '480px'
 * label      — small uppercase label above the gold rule
 * title      — main h1 text (first line)
 * titleBreak — optional second line, separated by <br />
 * subtitle   — optional paragraph below the heading
 */
export default function PageHero({
  image,
  alt,
  height = '65vh',
  minHeight = '480px',
  label,
  title,
  titleBreak,
  subtitle,
}) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ height, minHeight }}
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(15,26,36,0.12) 0%, rgba(15,26,36,0.72) 100%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pb-14 md:pb-20 text-white">
        {label && (
          <p
            className="uppercase mb-5"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.42)',
              fontWeight: 300,
              letterSpacing: '0.35em',
            }}
          >
            {label}
          </p>
        )}

        <div style={{ width: 40, height: 1, backgroundColor: '#C9A96E', marginBottom: 20 }} />

        <h1
          className="font-light"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 1.05,
            color: '#FAF8F4',
          }}
        >
          {title}
          {titleBreak && <><br />{titleBreak}</>}
        </h1>

        {subtitle && (
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.52)',
              marginTop: 18,
              maxWidth: '52ch',
              lineHeight: 1.8,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
