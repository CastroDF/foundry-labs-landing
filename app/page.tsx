import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-paper/80 backdrop-blur-sm z-50 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="font-medium tracking-tight text-ink">Foundry Labs</div>
            <a
              href="mailto:hello@foundrylabs.com"
              className="text-sm text-gray-600 hover:text-ink transition-colors px-4 py-2 rounded-full hover:bg-gray-100/50"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Two Column */}
      <section className="pt-24 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-ink mb-6 leading-[1.1]">
                We design and build critical systems
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Senior-led engineering firm helping companies redesign workflows, build reliable systems, and execute complex projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-paper bg-ink hover:bg-gray-800 transition-colors rounded-lg"
                >
                  Schedule a conversation
                </a>
                <a
                  href="mailto:hello@foundrylabs.com"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 hover:text-ink hover:bg-gray-100/50 transition-colors rounded-lg"
                >
                  Email us
                </a>
              </div>

              {/* Selected Experience */}
              <div className="pt-8 border-t border-gray-200/60">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">Selected experience</p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-white border border-gray-200/60 rounded-full text-sm text-gray-600">
                    Fintech platforms
                  </div>
                  <div className="px-4 py-2 bg-white border border-gray-200/60 rounded-full text-sm text-gray-600">
                    Healthcare systems
                  </div>
                  <div className="px-4 py-2 bg-white border border-gray-200/60 rounded-full text-sm text-gray-600">
                    Enterprise tools
                  </div>
                  <div className="px-4 py-2 bg-white border border-gray-200/60 rounded-full text-sm text-gray-600">
                    AI-assisted tooling
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Proof Panel - Engagement Snapshot */}
            <div className="lg:pl-8">
              <div className="bg-white border border-gray-200/60 rounded-2xl shadow-sm overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200/60 bg-gray-50/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="text-xs text-gray-500 ml-2">Engagement snapshot</div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-ink mb-4">Typical engagement flow</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="text-xs font-medium text-gray-400 mt-0.5 w-16 flex-shrink-0">Week 1-2</div>
                        <div className="text-sm text-gray-600">Discovery & process mapping</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-medium text-gray-400 mt-0.5 w-16 flex-shrink-0">Week 3-4</div>
                        <div className="text-sm text-gray-600">Architecture & system design</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-medium text-gray-400 mt-0.5 w-16 flex-shrink-0">Week 5-8</div>
                        <div className="text-sm text-gray-600">Implementation & iteration</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-medium text-gray-400 mt-0.5 w-16 flex-shrink-0">Week 9+</div>
                        <div className="text-sm text-gray-600">Deployment & handoff</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60">
                    <h4 className="text-xs font-semibold text-gray-500 mb-3">Key deliverables</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>Technical architecture docs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>Working production system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>Knowledge transfer</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prior Experience */}
      <section className="py-12 px-6 lg:px-12 border-y border-gray-200/60 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-3">
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
              Prior experience
            </p>
            <p className="text-xs text-gray-400 font-light italic">
              Work performed by founders in previous roles
            </p>
          </div>
          <div className="overflow-hidden relative mt-5">
            <div className="flex items-center justify-center gap-12 lg:gap-16 flex-wrap">
              {/* Rue Gilt Groupe */}
              <div className="flex-shrink-0 opacity-50 hover:opacity-70 transition-opacity flex items-center grayscale">
                <Image
                  src="/rgg.svg"
                  alt="Rue Gilt Groupe"
                  width={160}
                  height={56}
                  className="h-12 w-auto"
                />
              </div>
              
              {/* Letsbit */}
              <div className="flex-shrink-0 opacity-50 hover:opacity-70 transition-opacity flex items-center grayscale">
                <Image
                  src="/lb-finanzas.png"
                  alt="Let's Bit"
                  width={160}
                  height={48}
                  className="h-10 w-auto"
                />
              </div>
              
              {/* Paytient */}
              <div className="flex-shrink-0 opacity-50 hover:opacity-70 transition-opacity flex items-center grayscale">
                <Image
                  src="/paytient.svg"
                  alt="Paytient"
                  width={140}
                  height={48}
                  className="h-10 w-auto"
                />
              </div>
              
              {/* HomeVision */}
              <div className="flex-shrink-0 opacity-50 hover:opacity-70 transition-opacity flex items-center grayscale">
                <Image
                  src="/homevision.svg"
                  alt="HomeVision"
                  width={140}
                  height={48}
                  className="h-10 w-auto"
                />
              </div>
              
              {/* Eve Vehicles */}
              <div className="flex-shrink-0 opacity-50 hover:opacity-70 transition-opacity flex items-center grayscale">
                <Image
                  src="/eve.png"
                  alt="Eve Vehicles"
                  width={200}
                  height={64}
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Reduced */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-3xl lg:text-4xl font-semibold text-ink leading-tight mb-2">
            Most teams don't fail because of technology
          </p>
          <p className="font-serif text-3xl lg:text-4xl font-semibold text-gray-400 leading-tight">
            They fail because of poor decisions upstream
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-6">
              What we do
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We work with founders and leadership teams on projects where quality, correctness, and execution matter.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-gray-200/60 rounded-2xl hover:border-gray-300 transition-colors">
              <h3 className="text-lg font-semibold text-ink mb-3">Workflow redesign</h3>
              <p className="text-gray-600 leading-relaxed">Designing and rebuilding operational workflows from the ground up.</p>
            </div>

            <div className="p-8 bg-white border border-gray-200/60 rounded-2xl hover:border-gray-300 transition-colors">
              <h3 className="text-lg font-semibold text-ink mb-3">Critical systems</h3>
              <p className="text-gray-600 leading-relaxed">Building internal tools and mission-critical infrastructure.</p>
            </div>

            <div className="p-8 bg-white border border-gray-200/60 rounded-2xl hover:border-gray-300 transition-colors">
              <h3 className="text-lg font-semibold text-ink mb-3">Smart automation</h3>
              <p className="text-gray-600 leading-relaxed">Automating complex processes without breaking them.</p>
            </div>

            <div className="p-8 bg-white border border-gray-200/60 rounded-2xl hover:border-gray-300 transition-colors">
              <h3 className="text-lg font-semibold text-ink mb-3">Rapid delivery</h3>
              <p className="text-gray-600 leading-relaxed">Shipping MVPs and production systems under real constraints.</p>
            </div>

            <div className="p-8 bg-white border border-gray-200/60 rounded-2xl hover:border-gray-300 transition-colors">
              <h3 className="text-lg font-semibold text-ink mb-3">Project recovery</h3>
              <p className="text-gray-600 leading-relaxed">Taking over stalled or poorly executed projects.</p>
            </div>

            <div className="p-8 bg-gray-50 border border-gray-200/60 rounded-2xl">
              <h3 className="text-lg font-semibold text-ink mb-3">Complex challenges</h3>
              <p className="text-gray-600 leading-relaxed">Have a unique technical problem? Let's talk about it.</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="font-serif text-2xl font-semibold text-ink">
              Decisions first. Software second.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-24 px-6 lg:px-12 bg-white border-y border-gray-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-6">
              How we work
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Most firms scale by adding people. We scale by making better decisions and using leverage responsibly.
            </p>
          </div>

          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="flex gap-8">
              <div className="text-sm font-medium text-gray-300 pt-1 w-12 flex-shrink-0">01</div>
              <div>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  Understand deeply
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We map how work actually happens — not how it looks on slides.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-sm font-medium text-gray-300 pt-1 w-12 flex-shrink-0">02</div>
              <div>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  Design first
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Architecture, constraints, failure modes, and trade-offs come before code.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-sm font-medium text-gray-300 pt-1 w-12 flex-shrink-0">03</div>
              <div>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  Execute with leverage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We use modern tooling and automation internally to move faster — without sacrificing quality.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 pt-12 border-t border-gray-200/60">
            <p className="font-serif text-xl font-semibold text-ink max-w-2xl mx-auto">
              Technology is a multiplier, not a replacement for judgment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Foundry Labs */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-6">
              Why Foundry Labs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We operate like an internal strike team — not a vendor.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">
                Senior from day one
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Only senior engineers. No juniors, no handoffs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">
                Clear ownership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Full accountability. No confusion about who's responsible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">
                Fast decisions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Direct communication. Rapid feedback loops.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">
                Lean operation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built to operate efficiently, not inflated with overhead.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">
                Quality first
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Long-term system quality over short-term hacks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">
                Founder-led
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Talk to us, work with us. No middlemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 px-6 lg:px-12 bg-white border-y border-gray-200/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12 text-center">
            About us
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
            <p>
              Foundry Labs was founded by two senior engineers from Rosario, Argentina.
            </p>
            <p>
              Before founding the firm, we worked on early-stage products, mature platforms at scale, and complex internal systems — gaining experience in environments where correctness, reliability, and execution truly matter.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200/60 text-center">
            <p className="text-xl font-semibold text-ink">
              We're deeply involved in every engagement. If you talk to Foundry Labs, you talk to the people doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-16 text-center">
            Who this is for
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-ink mb-6">
                A good fit if you:
              </h3>
              <ul className="space-y-4 text-gray-600 leading-relaxed">
                <li>Need senior judgment, not more headcount</li>
                <li>Face operational or technical complexity</li>
                <li>Care about long-term system quality</li>
                <li>Want speed without chaos</li>
                <li>Prefer working with experienced engineers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink mb-6">
                Probably not a fit if you:
              </h3>
              <ul className="space-y-4 text-gray-600 leading-relaxed">
                <li>Are looking for the cheapest option</li>
                <li>Want a large outsourced team</li>
                <li>Expect delivery without involvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-24 px-6 lg:px-12 bg-white border-y border-gray-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-16">
              How we engage
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto mb-16">
            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">Fixed scope</h3>
              <p className="text-gray-600 leading-relaxed">Clear deliverables and timelines from day one.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">Short, focused cycles</h3>
              <p className="text-gray-600 leading-relaxed">Intensive engagements that deliver results quickly.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">Direct collaboration</h3>
              <p className="text-gray-600 leading-relaxed">Work directly with the founders — no middlemen.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">No lock-in</h3>
              <p className="text-gray-600 leading-relaxed">Flexible, project-based work. No long-term contracts.</p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-200/60">
            <p className="font-serif text-xl font-semibold text-ink">
              No bloated teams. No unnecessary overhead.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
            Let's talk
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Have a complex problem to solve, or a system that needs to be built properly? We should talk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="mailto:hello@foundrylabs.com"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-paper bg-ink hover:bg-gray-800 transition-colors rounded-lg"
            >
              Schedule a conversation
            </a>
            <a
              href="mailto:hello@foundrylabs.com"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 hover:text-ink hover:bg-gray-100/50 transition-colors rounded-lg"
            >
              Email us
            </a>
          </div>

          <p className="text-sm text-gray-500">
            hello@foundrylabs.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t border-gray-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 text-center md:text-left">
            <div>
              <div className="font-semibold text-ink mb-1">Foundry Labs</div>
              <p className="text-sm text-gray-500">
                Senior Engineering & Systems Design
              </p>
            </div>
            
            <div className="text-sm text-gray-500">
              <div className="mb-1">
                <a
                  href="mailto:hello@foundrylabs.com"
                  className="text-ink hover:text-gray-600 transition-colors"
                >
                  hello@foundrylabs.com
                </a>
              </div>
              <div>
                Based in Argentina • Working globally
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200/60 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Foundry Labs
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
