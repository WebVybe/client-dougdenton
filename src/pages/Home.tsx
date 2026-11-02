import { Link } from 'react-router-dom'
import DecorPanel from '../components/DecorPanel'
import { bio, business, homeHighlights, services } from '../content/business'
import dougHeadshot from '../assets/images/doug-headshot.jpg'

const serviceTiles = services.slice(0, 3)

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero — real photo (Doug at his Babolat stringing machine in his
          mobile pro shop), one headline, one primary CTA. */}
      <section className="relative">
        <DecorPanel
          rounded={false}
          className="h-[62vh] min-h-[420px] w-full sm:h-[74vh]"
          src={dougHeadshot}
          alt="Doug Denton stringing a racquet on his Babolat machine inside his mobile pro shop"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent">
          <div className="mx-auto w-full max-w-6xl px-6 pb-12 sm:pb-16">
            <p className="eyebrow mb-3 text-ace">{business.base}</p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-paper sm:text-5xl">
              {business.tagline}
            </h1>
            <p className="mt-4 max-w-lg text-paper/90">{business.credentialLine}</p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link to="/contact" className="btn-primary !bg-ace !text-navy-deep hover:!bg-[#b4c426]">
                Get In Touch
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:decoration-paper"
              >
                See Services & Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience — the headline credential, in his own words. */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">40+ years stringing</p>
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            Tour-level stringing, for every player
          </h2>
          <p className="mt-5 text-lg text-slate">{bio.experience}</p>
          <p className="mt-4 text-slate">{bio.philosophy}</p>
          <Link to="/about" className="mt-5 inline-block text-sm font-semibold text-navy hover:underline">
            Read more about Doug →
          </Link>
        </div>
      </section>

      {/* Highlights band */}
      <section className="border-y border-black/10 bg-cloud">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 sm:grid-cols-3">
            {homeHighlights.map((h) => (
              <div key={h} className="flex gap-3">
                <span className="mt-1 text-ace-deep">✓</span>
                <p className="text-ink">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3">What Doug offers</p>
            <h2 className="text-2xl font-extrabold text-ink">Services & Pricing</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-navy hover:underline">
            See full pricing →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {serviceTiles.map((cat, i) => (
            <Link key={cat.id} to={`/services#${cat.id}`} className="group block">
              <DecorPanel
                variant={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}
                className="h-48 w-full transition-transform duration-300 group-hover:scale-[1.02]"
                alt={cat.title}
              />
              <h3 className="mt-4 text-lg font-bold text-ink">{cat.title}</h3>
              <p className="mt-1 text-sm text-slate">{cat.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl bg-navy px-8 py-14 text-center">
          <h2 className="text-2xl font-extrabold text-paper sm:text-3xl">
            Same stringer, same calibrated machine, every time.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-cloud/90">
            Reach out to book stringing, a lesson, or ask about mobile service.
          </p>
          <Link to="/contact" className="btn-primary mt-7 inline-flex !bg-ace !text-navy-deep hover:!bg-[#b4c426]">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
