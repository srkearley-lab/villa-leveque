import { useState } from 'react'
import { Link } from 'react-router-dom'

// shadcn/ui-style variant system — applied to villa brand colours
const VARIANTS = {
  primary: {
    base:  { backgroundColor: '#C9A96E', color: '#0F1A24', border: 'none' },
    hover: { backgroundColor: '#b8935a' },
  },
  'outline-dark': {
    base:  { backgroundColor: 'transparent', color: '#1C2B3A', border: '1px solid #1C2B3A' },
    hover: { backgroundColor: '#1C2B3A', color: '#FAF8F4' },
  },
  'outline-light': {
    base:  { backgroundColor: 'transparent', color: 'rgba(250,248,244,0.80)', border: '1px solid rgba(255,255,255,0.35)' },
    hover: { backgroundColor: 'rgba(255,255,255,0.08)', color: '#FAF8F4', border: '1px solid rgba(255,255,255,0.65)' },
  },
  ghost: {
    base:  { backgroundColor: 'transparent', color: '#C9A96E', border: 'none' },
    hover: { color: '#1C2B3A' },
  },
}

// Sizes calibrated to minimum 44px touch target (WCAG 2.5.5)
const SIZES = {
  sm: { padding: 'px-6 py-3',    minHeight: '40px', fontSize: '0.75rem' },
  md: { padding: 'px-8 py-3.5',  minHeight: '44px', fontSize: '0.75rem' },
  lg: { padding: 'px-10 py-4',   minHeight: '52px', fontSize: '0.8125rem' },
}

export default function CTAButton({
  variant = 'primary',
  size = 'lg',
  to,
  href,
  external,
  className = '',
  children,
  ...props
}) {
  const [hovered, setHovered] = useState(false)
  const { base, hover } = VARIANTS[variant] ?? VARIANTS.primary
  const { padding, minHeight, fontSize } = SIZES[size] ?? SIZES.lg

  const style = {
    fontFamily: 'Manrope, sans-serif',
    fontSize,
    fontWeight: 500,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    minHeight,
    transition: 'all 0.2s ease',
    ...(hovered ? { ...base, ...hover } : base),
  }

  const cls = `inline-flex items-center justify-center gap-2 select-none whitespace-nowrap ${padding} ${className}`.trim()
  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  if (to) return <Link to={to} style={style} className={cls} {...handlers} {...props}>{children}</Link>
  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={style}
        className={cls}
        {...handlers}
        {...props}
      >
        {children}
      </a>
    )
  }
  return <button type="button" style={style} className={cls} {...handlers} {...props}>{children}</button>
}
