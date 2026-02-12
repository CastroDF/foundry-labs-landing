export function GradientText({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`animate-shimmer bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #ff9a9e 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  )
}
