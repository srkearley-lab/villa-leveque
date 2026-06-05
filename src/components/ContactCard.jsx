/**
 * Contact info row: icon + label + value, optionally wrapped in an <a>.
 */
export default function ContactCard({ icon: Icon, label, value, href, external, dark = false }) {
  const colors = dark
    ? { label: 'rgba(250,248,244,0.38)', value: 'rgba(250,248,244,0.75)' }
    : { label: '#9aA090',                value: '#1C2B3A' }

  const inner = (
    <div className="flex items-start gap-3.5">
      <Icon size={15} style={{ color: '#C9A96E', flexShrink: 0, marginTop: 4 }} strokeWidth={1.5} />
      <div>
        <p
          className="uppercase mb-1"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.6875rem',
            color: colors.label,
            fontWeight: 500,
            letterSpacing: '0.16em',
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.9375rem',
            color: colors.value,
            fontWeight: 400,
            lineHeight: 1.5,
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
