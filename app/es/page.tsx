import type { Metadata } from 'next'
import {
  NavBar,
  HeroSection,
  ServicesSection,
  Footer,
  DotGrid,
} from '@/components/landing'

export const metadata: Metadata = {
  title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
  description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
  openGraph: {
    title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
    description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    url: 'https://foundrylabs.com/es',
  },
  alternates: {
    canonical: 'https://foundrylabs.com/es',
    languages: {
      'en-US': 'https://foundrylabs.com',
      'es-AR': 'https://foundrylabs.com/es',
    },
  },
}

export default function SpanishHome() {
  return (
    <div className="antialiased">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm">
        Saltar al contenido principal
      </a>
      <DotGrid />
      <NavBar />
      <main id="main">
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
