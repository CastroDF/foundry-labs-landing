'use client'

import { useEffect, useRef } from 'react'

export function Card3D({ index }: { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) return

    const delay = index * 100
    const duration = 4000
    let rafId: number
    let stopped = false

    const timeout = setTimeout(() => {
      const startTime = Date.now()

      const update = () => {
        if (stopped) return
        const progress = ((Date.now() - startTime) % duration) / duration
        const wave = Math.sin(progress * Math.PI * 2)
        const absWave = Math.abs(wave)

        el.style.transform = `rotateX(${wave * 22.5}deg) translateZ(${absWave * 25}px) scale(${1 + absWave * 0.05})`
        el.style.background = `rgba(255, ${240 - absWave * 15}, ${250 - absWave * 5}, ${0.4 + absWave * 0.4})`

        rafId = requestAnimationFrame(update)
      }

      rafId = requestAnimationFrame(update)
    }, delay)

    const onChange = () => {
      if (prefersReducedMotion.matches) {
        stopped = true
        cancelAnimationFrame(rafId)
        el.style.transform = ''
        el.style.background = ''
      }
    }
    prefersReducedMotion.addEventListener('change', onChange)

    return () => {
      stopped = true
      clearTimeout(timeout)
      cancelAnimationFrame(rafId)
      prefersReducedMotion.removeEventListener('change', onChange)
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      className="relative w-[60px] h-[300px] rounded border border-white/90"
      style={{
        boxShadow: '0 10px 30px rgba(118, 75, 162, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.5)',
        transformOrigin: 'center center',
      }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: 'linear-gradient(135deg, rgba(161, 140, 209, 0.2) 0%, rgba(251, 194, 235, 0.2) 100%)',
        }}
      />
    </div>
  )
}
