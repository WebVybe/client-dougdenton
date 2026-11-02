import { Link } from 'react-router-dom'
import { services } from '../content/business'

export default function Services() {
  return (
    <div className="page-transition mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow mb-3">Services & Pricing</p>
      <h1 className="text-4xl font-extrabold text-ink">What Doug Offers</h1>
      <p className="mt-4 max-w-xl text-slate">
        Stringing pricing below is current. Lesson rates, grip repair, and mobile service pricing are being
        finalized — reach out for a quote on those for now.
      </p>

      <div className="mt-12 space-y-16">
        {services.map((cat) => (
          <div key={cat.id} id={cat.id} className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-navy">{cat.title}</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate">{cat.intro}</p>

            <div className="mt-6 divide-y divide-black/5 rounded-2xl border border-black/10 bg-white">
              {cat.items.map((item) => (
                <div key={item.name} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div>
                    <p className="font-medium text-ink">{item.name}</p>
                    <p className="mt-1 text-sm text-slate">{item.description}</p>
                  </div>
                  {item.price ? (
                    <div className="shrink-0 text-right">
                      <p className="text-lg font-extrabold text-navy">{item.price}</p>
                      {item.priceNote && <p className="text-xs text-slate">{item.priceNote}</p>}
                    </div>
                  ) : (
                    <span className="placeholder-note shrink-0">Contact for pricing</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/contact" className="btn-primary inline-flex">
          Get In Touch
        </Link>
      </div>
    </div>
  )
}
