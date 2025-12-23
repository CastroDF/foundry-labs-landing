export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-[1040px] mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-lg tracking-tight">Foundry Labs</div>
            <a
              href="mailto:hello@foundrylabs.com"
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[1040px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1] max-w-4xl">
            We design and build critical systems.
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Senior-led engineering firm. We help companies redesign workflows, build reliable systems, and execute complex projects with judgment first.
          </p>

          <div className="flex flex-wrap gap-4 mb-24">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors rounded-md"
            >
              Schedule a conversation
            </a>
            <a
              href="mailto:hello@foundrylabs.com"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Email us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 pt-12 border-t border-gray-200">
            <div>
              <div className="text-sm text-gray-500 mb-1">Seniority</div>
              <div className="text-2xl font-semibold text-gray-900">100%</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Handoffs</div>
              <div className="text-2xl font-semibold text-gray-900">Zero</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Decision speed</div>
              <div className="text-2xl font-semibold text-gray-900">Fast</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Communication</div>
              <div className="text-2xl font-semibold text-gray-900">Direct</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-[1040px] mx-auto">
          <p className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
            Most teams don't fail because of technology.
          </p>
          <p className="text-3xl md:text-5xl font-bold text-gray-400 leading-tight max-w-3xl">
            They fail because of poor decisions upstream.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What we do
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl">
            We work with founders and leadership teams on projects where quality, correctness, and execution matter.
          </p>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Workflow redesign</h3>
              <p className="text-gray-600">Designing and rebuilding operational workflows from the ground up.</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Critical systems</h3>
              <p className="text-gray-600">Building internal tools and mission-critical infrastructure.</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart automation</h3>
              <p className="text-gray-600">Automating complex processes without breaking them.</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid delivery</h3>
              <p className="text-gray-600">Shipping MVPs and production systems under real constraints.</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Project recovery</h3>
              <p className="text-gray-600">Taking over stalled or poorly executed projects.</p>
            </div>

            <div className="p-6 bg-gray-900 text-white rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Complex challenges</h3>
              <p className="text-gray-300">Have a unique technical problem? Let's talk about it.</p>
            </div>
          </div>

          <p className="text-xl font-medium text-gray-900">
            Decisions first. Software second.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How we work
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl">
            Most firms scale by adding people. We scale by making better decisions and using leverage responsibly.
          </p>

          <div className="space-y-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                1. Understand deeply
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                We map how work actually happens — not how it looks on slides.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                2. Design first
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Architecture, constraints, failure modes, and trade-offs come before code.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                3. Execute with leverage
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                We use modern tooling and automation internally to move faster — without sacrificing quality.
              </p>
            </div>
          </div>

          <p className="text-xl font-medium text-gray-900 border-l-4 border-gray-900 pl-6">
            Technology is a multiplier, not a replacement for judgment.
          </p>
        </div>
      </section>

      {/* Why Foundry Labs */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Foundry Labs
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            We operate like an internal strike team — not a vendor.
          </p>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Senior from day one
              </h3>
              <p className="text-gray-600">
                Only senior engineers. No juniors, no handoffs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Clear ownership
              </h3>
              <p className="text-gray-600">
                Full accountability. No confusion about who's responsible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast decisions
              </h3>
              <p className="text-gray-600">
                Direct communication. Rapid feedback loops.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lean operation
              </h3>
              <p className="text-gray-600">
                Built to operate efficiently, not inflated with overhead.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality first
              </h3>
              <p className="text-gray-600">
                Long-term system quality over short-term hacks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Founder-led
              </h3>
              <p className="text-gray-600">
                Talk to us, work with us. No middlemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About us
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
            <p>
              Foundry Labs was founded by two senior engineers from Rosario, Argentina, with strong academic backgrounds in engineering and economics, and hands-on experience building real systems in high-constraint environments.
            </p>
            <p>
              We've worked across startups, internal platforms, and complex operational projects where failure is expensive and shortcuts don't survive reality.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-300 max-w-3xl">
            <p className="text-xl font-medium text-gray-900">
              We're deeply involved in every engagement. If you talk to Foundry Labs, you talk to the people doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Who this is for
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Good Fit */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                A good fit if you:
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Need senior judgment, not more headcount</li>
                <li>• Face operational or technical complexity</li>
                <li>• Care about long-term system quality</li>
                <li>• Want speed without chaos</li>
                <li>• Prefer working with experienced engineers</li>
              </ul>
            </div>

            {/* Not a Fit */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Probably not a fit if you:
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Are looking for the cheapest option</li>
                <li>• Want a large outsourced team</li>
                <li>• Expect delivery without involvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How we engage
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Clear, focused, and direct.
          </p>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fixed scope</h3>
              <p className="text-gray-600">Clear deliverables and timelines from day one.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Short, focused cycles</h3>
              <p className="text-gray-600">Intensive engagements that deliver results quickly.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct collaboration</h3>
              <p className="text-gray-600">Work directly with the founders — no middlemen.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No lock-in</h3>
              <p className="text-gray-600">Flexible, project-based work. No long-term contracts.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-300">
            <p className="text-xl font-medium text-gray-900">
              No bloated teams. No unnecessary overhead. Just senior engineering when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Let's talk
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Have a complex problem to solve, or a system that needs to be built properly? We should talk.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@foundrylabs.com"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors rounded-md"
            >
              Schedule a conversation
            </a>
            <a
              href="mailto:hello@foundrylabs.com"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Email us: hello@foundrylabs.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-[1040px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="font-semibold text-lg mb-2">Foundry Labs</div>
              <p className="text-sm text-gray-600">
                Senior Engineering & Systems Design
              </p>
            </div>
            
            <div className="text-sm text-gray-600">
              <div className="mb-2">
                <a
                  href="mailto:hello@foundrylabs.com"
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                >
                  hello@foundrylabs.com
                </a>
              </div>
              <div>
                Based in Rosario, Argentina — Working globally
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Foundry Labs
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

