import { Link } from 'react-router-dom'
import { business } from '../content/business'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-navy text-cloud">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="text-lg font-extrabold text-paper">{business.shortName}</p>
            <p className="mt-2 max-w-[220px] text-sm text-cloud/80">{business.tagline}</p>
          </div>

          <div className="text-sm text-cloud/80">
            <p className="eyebrow mb-3">Contact</p>
            {business.phone || business.email ? (
              <>
                {business.phone && <p>{business.phone}</p>}
                {business.email && (
                  <p className="mt-1">
                    <a href={`mailto:${business.email}`} className="hover:text-paper">
                      {business.email}
                    </a>
                  </p>
                )}
              </>
            ) : (
              <p className="text-cloud/60">Contact details coming soon — use the contact form for now.</p>
            )}
            {business.serviceArea && <p className="mt-2">{business.serviceArea}</p>}
          </div>

          <div className="text-sm text-cloud/80">
            <p className="eyebrow mb-3">Hours</p>
            <p className="text-cloud/60">{business.hours ?? 'Coming soon'}</p>
          </div>

          <div className="text-sm text-cloud/80">
            <p className="eyebrow mb-3">Explore</p>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="hover:text-paper">
                  About Doug
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-paper">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-paper">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-paper">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-cloud/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}.</p>
          <p>Site built by WebVybe.</p>
        </div>
      </div>
    </footer>
  )
}
