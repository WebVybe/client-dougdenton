import { Link } from 'react-router-dom'
import { bio, business } from '../content/business'
import dougHeadshot from '../assets/images/doug-headshot.jpg'

export default function About() {
  return (
    <div className="page-transition">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-3">About Doug</p>
            <h1 className="text-4xl font-extrabold text-ink sm:text-5xl">{business.credentialLine}</h1>
            <p className="mt-5 text-slate">{bio.experience}</p>
            <p className="mt-4 text-slate">{bio.approach}</p>
            <p className="mt-4 text-slate">{bio.philosophy}</p>
            <p className="mt-6 text-lg font-bold text-navy">Doug Denton</p>
          </div>
          <img
            src={dougHeadshot}
            alt="Doug Denton at his Babolat stringing machine inside his mobile pro shop"
            className="h-80 w-full rounded-2xl object-cover object-top sm:h-[28rem]"
          />
        </div>
      </section>

      <section className="border-y border-black/10 bg-cloud">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="eyebrow mb-3">Credentials</p>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-extrabold text-navy">40+</p>
              <p className="mt-1 text-sm text-slate">Years stringing racquets</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-navy">ATP / WTA</p>
              <p className="mt-1 text-sm text-slate">Tour stringer</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-navy">USPTA</p>
              <p className="mt-1 text-sm text-slate">Full-time teaching pro</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
          Same quality, local San Diego community or top-100 tour player
        </h2>
        <Link to="/contact" className="btn-primary mt-6 inline-flex">
          Get In Touch
        </Link>
      </section>
    </div>
  )
}
