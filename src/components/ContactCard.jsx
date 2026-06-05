/**
 * Contact info row: icon + label + value, optionally wrapped in an <a>.
 *
 * icon     — Lucide icon component
 * label    — small uppercase label (e.g. "Email")
 * value    — display text (e.g. "info@ourvillarentals.com")
 * href     — if set, wraps in <a>
 * external — adds target="_blank" rel="noopener noreferrer"
 * dark     — light text for dark backgrounds (default false = dark text)
 */
export default function ContactCard({ icon: Icon, label, value, href, external, dark = false }) {
  const colors = dark
    ? { label: 'rgba(250,248,244,0.30)', value: 'rgba(250,248,244,0.65)' }
    : { label: '#9aA090',                value: '#1C2B3A' }

  const inner = (
    <div className="flex items-start gap-3">
      <Icon
        size={14}
        style={{ color: '#C9A96E', flexShrink: 0, marginTop: 3 }}
        strokeWidth={1.5}
      />
      <div>
        <p
          className="uppercase"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.67rem',
            color: colors.label,
            fontWeight: 300,
            letterSpacing: '0.14em',
            marginBottom: 2,
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.875rem',
            color: colors.value,
            fontWeight: 400,
          }}
        >
          {value}
        </p>
      </div>
    </div>
  )

  if (!href) return <div>{inner}</div>

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block transition-opacity duration-200 hover:opacity-70"
    >
      {inner}
    </a>
  )
}
