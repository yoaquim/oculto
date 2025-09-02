'use client'

interface ShinyTextProps {
  children: string
  className?: string
  color?: string
}

export function ShinyText({ children, className = '', color = '#ff1d74' }: ShinyTextProps) {
  return (
    <span 
      className={`relative inline-block ${className}`}
      style={{
        color: color,
        background: `linear-gradient(120deg, ${color} 0%, ${color} 40%, #ffffff 50%, ${color} 60%, ${color} 100%)`,
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'shine 3s linear infinite',
      }}
    >
      {children}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </span>
  )
}