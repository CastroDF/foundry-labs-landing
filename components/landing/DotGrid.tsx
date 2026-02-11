export function DotGrid() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none opacity-15"
      style={{
        backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
  )
}
