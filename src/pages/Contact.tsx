import { type FormEvent, useState } from 'react'
import { business } from '../content/business'

const INPUT_CLS =
  'w-full rounded-lg border border-black/10 bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-navy'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // NOT YET WIRED TO A REAL BACKEND. This is a pre-launch blocker, not a
    // "demo only" permanent state like the portfolio projects in this
    // workspace -- see CLIENT.md Connectors & Credentials and the
    // Pre-Launch Checklist (Stage 4) before this site goes live.
    setSubmitted(true)
  }

  return (
    <div className="page-transition mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow mb-3">Contact</p>
      <h1 className="text-4xl font-extrabold text-ink">Get In Touch</h1>
      <p className="mt-4 max-w-xl text-slate">
        Questions about stringing, lessons, or mobile service — send a message and Doug will follow up.
      </p>

      <div className="mt-10 grid min-w-0 gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0 rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-start gap-3 py-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-paper">✓</span>
              <h2 className="text-2xl font-extrabold text-ink">Message received</h2>
              <p className="max-w-sm text-slate">We'll follow up as soon as we can.</p>
              <p className="placeholder-note mt-2">
                Build note: this form isn't wired to a real inbox yet — confirm delivery before launch.
              </p>
              <button type="button" onClick={() => setSubmitted(false)} className="btn-secondary mt-2">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">First name</span>
                  <input required type="text" name="firstName" className={INPUT_CLS} />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">Last name</span>
                  <input required type="text" name="lastName" className={INPUT_CLS} />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">Email</span>
                  <input required type="email" name="email" className={INPUT_CLS} />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">Phone (optional)</span>
                  <input type="tel" name="phone" className={INPUT_CLS} />
                </label>
              </div>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">What can we help with?</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Stringing, lessons, mobile service, general question..."
                  className={INPUT_CLS}
                />
              </label>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
              </button>
              <p className="placeholder-note">
                Build note: form not yet connected to a real inbox — see CLIENT.md before launch.
              </p>
            </form>
          )}
        </div>

        <div className="min-w-0 space-y-8">
          <div>
            <p className="eyebrow mb-2">Phone</p>
            <p className="text-slate">{business.phone ?? 'Coming soon'}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Email</p>
            {business.email ? (
              <a href={`mailto:${business.email}`} className="text-slate hover:text-ink">
                {business.email}
              </a>
            ) : (
              <p className="text-slate">Coming soon — use the form for now.</p>
            )}
          </div>
          <div>
            <p className="eyebrow mb-2">Service Area</p>
            <p className="text-slate">{business.serviceArea ?? `${business.base} (exact service area TBD)`}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Hours</p>
            <p className="text-slate">{business.hours ?? 'Coming soon'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
