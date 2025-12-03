# Bulldog Steel Fabrications — Build Instructions

Project root: ~/master Codex/projects/bulldog-steel-fabrications/
Structure:
- website/ (all web code, configs, docs)
- shared/resources/ (brand assets: logos, photos, business info, fonts, color palette)
- archive/ (anything kept but not in active use)

Goals:
- Launch a modern marketing site for bulldogsteelfabrications.net (steel fabrication services).
- Emphasize services, capability highlights, gallery/case studies, contact/quote form, trust signals.

Guidelines:
- Keep all implementation inside website/.
- Read shared/resources/ for brand assets; if missing, ask for: logo, brand colors, fonts, service list, contact details, service areas, testimonials, project photos.
- Use semantic HTML, accessible components, performant images (optimize, responsive srcset), and SEO basics (titles, meta descriptions, structured data where relevant).
- Avoid adding node_modules to git; keep .git at company root.
- Keep legal pages (privacy/terms) in website/ if added.

Deliverables (minimum):
- Home with hero, services overview, differentiators, CTA to contact/quote.
- Services detail page(s) for fabrication/welding/installation/etc.
- Gallery/portfolio with project cards and filters.
- About/company page with team/certifications/safety practices.
- Contact page with form + contact info + service area.
- 404 page.

Tech notes (flexible):
- Prefer Next.js/React if already set up; otherwise pick a static-first approach (Next.js, Astro, etc.). Keep TS if you start with it.
- Set up lint/format/test scripts; include basic CI checks if feasible.

Handoff:
- Document any env vars, build/run commands, and content edit instructions in README inside website/.
- Place reusable assets in shared/resources/ (fonts, colors, logos, copy docs, photos).
