import { Link } from 'react-router-dom'
import { testimonials } from '../content/business'

export default function Reviews() {
  return (
    <div className="page-transition mx-auto max-w-4xl px-6 py-16">
      <p className="eyebrow mb-3">Reviews</p>
      <h1 className="text-4xl font-extrabold text-ink">What Players Say</h1>

      {testimonials.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-black/15 bg-cloud px-8 py-16 text-center">
          <p className="text-lg font-semibold text-ink">Reviews coming soon</p>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate">
            We're collecting real client reviews for this page — nothing fabricated goes here. If you've worked
            with Doug and are willing to share a quick quote, let us know through the contact form.
          </p>
          <Link to="/contact" className="btn-primary mt-7 inline-flex">
            Share a Review
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.quote} className="rounded-2xl border border-black/10 bg-white p-6">
              <p className="text-ink">"{t.quote}"</p>
              <p className="mt-3 text-sm font-semibold text-slate">{t.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
