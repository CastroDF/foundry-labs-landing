'use client'

import { useState } from 'react'

interface ServiceCardProps {
  title: string
  description: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="block p-8 rounded-xl backdrop-blur-[10px] border no-underline transition-[transform,background-color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
      style={{
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        background: isHovered ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)',
        boxShadow: isHovered ? '0 15px 30px rgba(0, 0, 0, 0.05)' : 'none',
        borderColor: isHovered ? '#ddd' : 'white',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="text-xl font-semibold mb-2 text-ink">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed mt-4">{description}</p>
    </div>
  )
}
