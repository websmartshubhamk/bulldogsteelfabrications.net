# TASKS — Bulldog Steel Fabrications (Website)

1. Confirm project structure: website/, shared/resources/, archive/.
2. Collect brand assets: logo, colors, fonts, imagery, certifications, contact details, service list, service areas.
3. Place assets and brand notes into shared/resources/.
4. Choose tech stack (Next.js/React recommended); note choice in README.
5. Initialize package.json and gitignore inside website/; exclude node_modules/.next/.turbo/dist.
6. Add lint/format scripts (eslint/prettier or biome); set up TypeScript if using TS.
7. Configure path aliases if helpful.
8. Set up basic CI commands (lint/test/build) in README.
9. Plan sitemap: Home, Services, Service Detail, Portfolio/Gallery, About, Contact, 404, optional Blog.
10. Define global color and typography tokens (align with brand) in theme or CSS variables.
11. Import fonts per brand; fall back to safe fonts.
12. Build layout shell with header, nav, footer, main content area.
13. Add responsive nav with mobile menu.
14. Add CTA buttons (primary/secondary) styles.
15. Create hero component with headline, subcopy, primary CTA.
16. Add trust badges/certifications if available.
17. Create services overview section (cards with icon/text/CTA).
18. Build service detail template (hero, summary, capabilities, process, FAQs, CTA).
19. Add at least 3 service detail pages (e.g., fabrication, welding, installation).
20. Create differentiators section (quality, safety, turnaround, custom work).
21. Build process/timeline component (steps from consult to install).
22. Add industries/markets served section if applicable.
23. Build gallery/portfolio grid with filters/tags (fabrication type/material).
24. Implement lightbox or modal for gallery items (optional but preferred).
25. Add case study detail template (problem/solution/results/photos) if content allows.
26. Create testimonials section with client quotes; include source details if available.
27. Add stats/counters section (years, projects, certifications) if provided.
28. Build About page (story, team, safety standards, equipment list).
29. Add equipment/capabilities list (materials, thickness, processes, machines).
30. Create Contact page with form (name, email, phone, project details) and required-field validation.
31. Add contact info block (phone, email, address, service area map/embed).
32. Add quote CTA buttons linking to contact form.
33. Configure form handling target (API route/service); document how to set env vars.
34. Add 404 page with link back to home and CTA.
35. Implement header/footer with quick links, contact, and social (if provided).
36. Add sticky contact/quote CTA for mobile (optional).
37. Optimize images (compression, responsive sizes, correct formats).
38. Set up favicon and social share image placeholders.
39. Add SEO basics: title/description per page, canonical, robots directives.
40. Add Open Graph/Twitter metadata for main pages.
41. Implement structured data where relevant (Organization, LocalBusiness, Breadcrumb).
42. Ensure accessible semantics: headings order, labels, alt text, focus states.
43. Add skip-to-content link and focus outlines.
44. Ensure color contrast meets WCAG AA.
45. Add loading states for forms and async content.
46. Add error states/validation messages for forms.
47. Set up analytics placeholder (e.g., GA/Matomo); document env vars.
48. Add basic performance optimizations (code splitting, image lazy-load, font strategy).
49. Add sitemap.xml and robots.txt generation/configuration.
50. Add README in website/ with setup, scripts, env vars, and content editing notes.
51. Add content model (YAML/JSON/MD) for services/portfolio if using static content.
52. Add utility for pulling shared/resources brand tokens into the app.
53. Write unit tests for key components (buttons, forms, nav) if framework allows.
54. Add integration test for navigation and contact form happy path.
55. Run lint/format and fix issues.
56. Run tests and fix failures.
57. Validate forms in multiple browsers/viewports.
58. Do responsive QA: mobile, tablet, desktop for all templates.
59. Do accessibility pass (keyboard nav, screen reader sanity check).
60. Do performance check (Lighthouse/Web Vitals) and address key findings.
61. Populate pages with provided copy/assets; mark TODOs where content is missing.
62. Move any unused/legacy items to archive/ with a note if needed.
63. Prepare launch checklist (DNS, hosting, redirects if any) in README.
64. Final pass: verify links, CTAs, metadata, and contact details.
