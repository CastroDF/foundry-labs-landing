import { ServiceCard } from './ServiceCard'

const services = [
  {
    title: 'AI Integration & Automation',
    description:
      'Seamlessly embedding LLMs into your existing stack. We automate complex workflows to reclaim thousands of hours of human potential.',
  },
  {
    title: 'Technical Architecture',
    description:
      'Building the skeleton for scale. We design robust, future-proof systems for non-tech companies needing to modernize rapidly.',
  },
  {
    title: 'Premium Landing Pages',
    description:
      'High-performance front-ends that convert. We combine WebGL, smooth motion, and pixel-perfect design to elevate your brand perception.',
  },
  {
    title: 'Workflow Orchestration',
    description:
      'Connecting disparate tools into a unified symphony. We eliminate data silos and manual data entry through intelligent APIs.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-surface relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-medium tracking-tight">Capabilities</h2>
          <span className="text-sm uppercase tracking-widest text-gray-400">Systems over Services</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
