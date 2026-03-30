interface TrustLineProps {
  centered?: boolean
}

export default function TrustLine({ centered = false }: TrustLineProps) {
  return (
    <p
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '0.8125rem',
        fontWeight: 500,
        color: 'var(--text-muted)',
        letterSpacing: '0.02em',
        textAlign: centered ? 'center' : 'left',
      }}
    >
      Used by coaches, executives, and teams on{' '}
      <span style={{ color: 'var(--blue-electric)', fontWeight: 600 }}>over 4 continents</span>.
    </p>
  )
}
