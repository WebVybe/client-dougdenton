# client-dougdenton: Doug Denton Custom Racquet Service & Tennis Lessons

**This is a real client project, not a portfolio demo.** Doug Denton is a
real independent tennis stringer and USPTA teaching pro in San Diego,
currently at https://dougdenton.monkey-factory.com/ (being replaced).
Content pulled from that site is real and verbatim — see `CLIENT.md` for
exactly what was sourced from where. Unlike the `demo-*` projects in this
workspace, **nothing here should ever be fabricated** — placeholders are
modeled as explicit "coming soon" / "contact for pricing" states, never as
invented numbers, quotes, or contact details.

See `CLIENT.md` in this directory for the full brief, Pending Questions,
and Decisions Log — that file is the source of truth for project state,
this file is for engineering conventions.

## Stack

- Vite + React 19 + TypeScript + Tailwind v4, matching the `webvybe/demo-*`
  projects' conventions (same button/nav-link component classes).
- `react-router-dom` v7 for routing.
- No backend yet. The contact form (`src/pages/Contact.tsx`) shows a
  success state client-side only — **this is a pre-launch blocker, not a
  permanent "demo only" state.** Needs a real submission pipeline (e.g.
  Formspree, a Cloudflare Worker + email) before this site goes live.
- Deploy target: Cloudflare Pages (per the `new-client-site` SOP default),
  not yet deployed.

## Pages

Home, About Doug, Services & Pricing, Reviews, Contact — confirmed with
the user 2026-11-02 (see Decisions Log in `CLIENT.md`).

## Design tokens

Brand palette lives in `src/index.css` under `@theme`: trustworthy navy
(`--color-navy`, `--color-navy-deep`) with a single tennis-ball chartreuse
accent (`--color-ace`, `--color-ace-deep`), cool off-white backgrounds
(`--color-cloud`, `--color-paper`). **This is a proposed identity, not a
carried-over one** — the current site has no real brand system (no logo,
no color palette, no font choice found). Confirm with Doug before treating
this as locked in. No hardcoded hex values outside that token block.

## Content

All business copy (services, pricing, bio quotes, highlights) lives in
`src/content/business.ts` as a single source of truth. Fields not yet
confirmed by Doug (phone, email, hours, service area, lesson/grip-repair/
mobile pricing) are typed as `null`, not fake strings — each render site
branches to an honest "coming soon" / "contact for pricing" UI state
(`.placeholder-note` class in `src/index.css`) instead. When real values
come in, replace the `null`s in `business.ts`; the UI updates automatically.

`testimonials` in `business.ts` is an empty array on purpose. **Never**
fill it with invented quotes — the Reviews page (`src/pages/Reviews.tsx`)
renders an honest "reviews coming soon" state when it's empty.

## Real assets already pulled from the current site

- `src/assets/images/doug-headshot.jpg` — real photo of Doug at his
  Babolat stringing machine inside his mobile pro shop, downloaded from
  the current live site (`/_assets/images/Doug.jpg`). Used as the Home
  hero and on the About page. This is the client's own existing photo of
  himself, reused for his own replacement site — not a stock/fabricated
  image.
- The current site's `title.jpg` is a 281×30px text banner graphic, not a
  usable photo — not carried over.

## Known gaps before this can launch (see CLIENT.md Pending Questions for full list)

- Real contact info (phone, email, service area, hours)
- Lesson rates, grip repair price, mobile service fee (stringing pricing
  — $25 labor-only / $38 string+labor — is confirmed real)
- Real testimonials for the Reviews page
- Additional real photography beyond the one headshot
- Contact form needs a real backend before launch
- Notion MCP isn't connected in this environment — the Client Sites
  roster row (Stage 1 step 2 of the SOP) hasn't been added
