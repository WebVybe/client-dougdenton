# Doug Denton Custom Racquet Service & Tennis Lessons

**Notion roster entry:** Not added yet — Notion MCP isn't connected in
this environment (see Pending Questions). [Client Sites](https://app.notion.com/p/0604199d7a3a4e45b00b836f66a8dbe3)
is the cross-client glance view once it is; this file is the source of
truth for project detail either way.

## Project Context

- **Business:** Independent mobile tennis/racquetball/squash stringer and
  USPTA teaching pro, serving the San Diego tennis community. Real
  business, real owner (Doug Denton) — not a portfolio demo.
- **Why this project:** Replacing an existing, dated 3-page WordPress-ish
  site (monkey-factory.com hosting) with a new 5-page site.
- **Existing site:** https://dougdenton.monkey-factory.com/ — Home, About
  Doug, Contact us. Being replaced.
- **Timeline / target launch:** Unknown — pending.
- **Budget/scope constraints:** Unknown — pending.

## Brief Summary

5-page boutique site for an independent tennis stringer: contact info and
owner experience/credentials are the two explicit must-haves from the
invocation. Scope not yet fully agreed — see Pending Questions.

## Content pulled from the existing site (verbatim, real — not fabricated)

**Home:**
- Headline: "Custom Racquet Service & Tennis Lessons"
- Services: custom tennis/racquetball/squash stringing, grip repair,
  string/grip/racquet recommendations, racquet cleaning & sanitization,
  frame/bumper-guard/grommet inspection, mobile pro shop
- "Unmatched quality, experience, and expertise"; "Same stringer, same
  calibrated machine"; careful attention to tension re: tennis elbow
- Nav: Home / About Doug / Contact us
- Includes a headshot photo of Doug; © 2015 Doug Denton

**About Doug:**
- "I started stringing racquets over 40 years ago."
- "I've recently strung for Rafael Nadal, Serena Williams, Andy Murray,
  and Maria Sharapova, along with about 75% of the current top 100 ATP
  and WTA players."
- Current ATP/WTA tour stringer; full-time USPTA teaching pro
- "I take pride in providing the same quality of service to the local San
  Diego tennis community as I do for all the top players in the world."

**Contact us (current site):** Page exists but exposes no actual phone,
email, address, or hours in the fetched markup — likely an image, a
Contact Form 7 embed, or a template page builder block that didn't
survive the fetch. **Real contact details still needed from Doug — not
on the current site as far as I could extract.**

**Not on the current site at all:** pricing, hours, service-area radius,
formal certifications beyond "USPTA teaching pro," testimonials/reviews,
any color palette or font choice, logo file.

## Design Path

Not yet resolved — likely Path C (no design reference) given the current
site has no real brand system, pending Doug's answer on brand assets.

## Live Site Status

- **Production URL:**
- **Staging URL:**
- **Last deploy:**
- **Last QA pass:**

## Brand Assets

- **Location:**
- **Logo files:** None found on current site
- **Brand colors (tokens):** None found on current site
- **Fonts:** None found on current site
- **Photo library:** Current site has one headshot photo of Doug; no
  other real photos (stringing setup, action shots) confirmed available

## Connectors & Credentials

| Service | Purpose | Where the real value lives | Owner |
|---------|---------|------------------------------|-------|
| Contact form → email | Deliver contact-form submissions | `.env.local` | TBD |

## Decisions Log

- 2026-11-02 — Scoped as a real client project (CLIENT.md + this
  directory), not a portfolio demo, given a named real business and a
  real existing site to replace — why: distinguishes from the
  `demo-*` fictional-brand builds also in this workspace.
- 2026-11-02 — Site map confirmed: Home, About Doug, Services & Pricing,
  Reviews & Testimonials, Contact (5 pages) — why: user clarified both
  "Services & Pricing" and "Reviews & Testimonials" as separate pages,
  not combined with existing Home/About/Contact.
- 2026-11-02 — No existing brand assets; establishing identity as part of
  this project (user confirmed).
- 2026-11-02 — Pricing will be listed on-site, real numbers (user
  confirmed, declined "contact for quote").
- 2026-11-02 — Stringing pricing (real, from user): customer supplies own
  string = $25 labor only; otherwise (string + labor) = $38.

## Pending Questions

- [ ] Remaining pricing: lesson rates, grip repair cost, any mobile
      service/travel fee — stringing price now known (see Decisions Log).
- [ ] Real contact info: phone, email, physical/service address, hours —
      not extractable from the current site.
- [ ] Real photos: any beyond the one headshot on the current site
      (stringing setup, action shots, racquets)? Per the Ground Rule, no
      fabricated/stock "as if real" photos of Doug or his setup.
- [ ] Real testimonials/reviews for the Reviews & Testimonials page — none
      fabricated; if none exist yet, page ships with an honest "reviews
      coming soon" placeholder instead.
- [ ] Timeline and budget constraints.
- [ ] Notion MCP isn't connected in this session — can't add the Client
      Sites roster row per Stage 1 step 2 until it is (or the user adds
      it manually).

## Links

- Repo: (not yet created)
- Figma (if Path A): n/a
