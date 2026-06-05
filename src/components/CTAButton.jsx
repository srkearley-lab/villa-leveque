import { useState } from 'react'
import { Link } from 'react-router-dom'

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
    base:  { backgroundColor: 'transparent', color: 'rgba(250,248,244,0.72)', border: '1px solid rgba(255,255,255,0.32)' },
    hover: { backgroundColor: 'rgba(255,255,255,0.07)', color: '#FAF8F4', border: '1px solid rgba(255,255,255,0.58)' },
  },
  ghost: {
    base:  { backgroundColor: 'transparent', color: '#C9A96E', border: 'none' },
    hover: { color: '#FAF8F4' },
  },
}

const SIZES = {
  sm: { padding: 'px-5 py-2.5', minHeight: '36px' },
  md: { padding: 'px-7 py-3',   minHeight: '44px' },
  lg: { padding: 'px-10 py-4',  minHeight: '52px' },
}

const BASE = 'inline-flex items-center justify-center gap-2 transition-all duration-200 select-none'
const TEXT = 'font-medium text-[0.72rem] tracking-[0.18em] uppercase'

/**
 * Unified CTA button.
 *
 * variant   — primary | outline-dark | outline-light | ghost
 * size      — sm | md | lg
 * to        — renders as React Router <Link>
 * href      — renders as <a>
 * external  — adds target="_blank" rel="noopener noreferrer" when href is set
 * otherwise renders as <button>
 */
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
  const { base, hover } = VARIANTS[variant] || VARIANTS.primary
  const { padding, minHeight } = SIZES[size] || SIZES.lg

  const style = {
    fontFamily: 'Manrope, sans-serif',
    minHeight,
    ...(hovered ? { ...base, ...hover } : base),
  }

  const cls = `${BASE} ${TEXT} ${padding} ${className}`
  const handlers = { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) }

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
