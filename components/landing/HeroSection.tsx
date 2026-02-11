'use client'

import { useEffect, useRef } from 'react'
import { Card3D } from './Card3D'
import { GradientText } from './GradientText'

const CARD_INDICES = Array.from({ length: 40 }, (_, i) => i)

export function HeroSection() {
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardsContainerRef.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) return

    const handleScroll = () => {
      const scrollX = window.scrollY * 0.5
      el.style.transform = `translate(-50%, -50%) rotateZ(-30deg) rotateY(20deg) translateX(${scrollX}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const onChange = () => {
      if (prefersReducedMotion.matches) {
        window.removeEventListener('scroll', handleScroll)
        el.style.transform = 'translate(-50%, -50%) rotateZ(-30deg) rotateY(20deg) translateX(0px)'
      }
    }
    prefersReducedMotion.addEventListener('change', onChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      prefersReducedMotion.removeEventListener('change', onChange)
    }
  }, [])

  return (
    <header className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-full h-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden z-0 pointer-events-none" style={{ perspective: '1000px' }}>
        <div
          ref={cardsContainerRef}
          className="absolute top-1/2 left-1/2 w-[400vw] flex justify-center gap-5"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translate(-50%, -50%) rotateZ(-30deg) rotateY(20deg) translateX(0px)',
          }}
        >
          {CARD_INDICES.map((i) => (
            <Card3D key={i} index={i} />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl h-full flex flex-col justify-center pointer-events-none">
        <div className="max-w-2xl mt-12 pointer-events-auto">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1.1] mb-8 text-balance">
            Architecting <br />
            <GradientText className="font-serif italic font-normal">
              Intelligence
            </GradientText>
          </h1>
        </div>

        <div className="self-end max-w-sm text-right mt-12 md:mt-0 md:absolute md:bottom-32 md:right-10 pointer-events-auto">
          <p className="text-gray-500 text-lg leading-relaxed font-light">
            We build bespoke AI systems for companies that value craft over commodity. Speed without sacrifice.
          </p>
          <div className="mt-6 flex justify-end gap-4 items-center">
            <span className="text-sm font-medium tracking-wide">Iago & Diego</span>
            <div className="h-px w-12 bg-gray-300" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs tracking-widest uppercase text-gray-400 opacity-80 pointer-events-none">
        Scroll Down
        <div className="mt-2 w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center animate-bounce-slow">
          <svg aria-hidden="true" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
            <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </header>
  )
}
