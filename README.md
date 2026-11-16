# GEOVA Technologies — Trust-led frontend

## Local setup (Windows 11, VS Code)

Install Node.js LTS. Open this folder in VS Code and run:

```bash
npm install
npm run dev
```

For production checks: `npm run build` and `npm run preview`.

## Launch checklist

- **Mailbox:** `info@geovatechnologies.com` is a proposed company address. Activate and verify the mailbox, domain ownership, SPF, DKIM and DMARC.
- **Enquiry handling:** The contact form opens a mail client fallback when `VITE_CONTACT_ENDPOINT` is absent, so no backend secret or SMTP configuration is exposed in the browser. A real backend endpoint should still be configured for production use.
- **Production contact endpoint:** Set `VITE_CONTACT_ENDPOINT` to a trusted HTTPS backend endpoint, and implement server-side input validation, rate limiting, spam protection, storage/retention controls and delivery acknowledgements. Do not put SMTP secrets in frontend variables.
- **Phone:** No phone number has been provided; do not publish a fabricated one.
- **Proof:** Add verified client-approved project screenshots, real case studies, named credentials, measurable results, partner logos and testimonials only when documented and authorized. None are fabricated here.
- **Privacy:** Publish an accurate privacy policy reflecting the actual contact backend, its processors and retention. The site includes dedicated Privacy and Terms pages, plus contact consent language.
- **SEO:** Update canonical and OG URL metadata after domain goes live; page title and description are set per route. Configure SPA fallback for React Router and verify deep links. Robots and sitemap placeholders are included for deployment.
- **Quality:** Run accessibility and keyboard tests, browser and mobile QA, performance audits and a production build before deployment.
- **Assets:** Official uploaded logo is bundled locally. Visual hero and GIS graphics are CSS-based.

## Scope

The site focuses on GEOVA capabilities, sectors, methodology and buyer outcomes. It intentionally avoids fictitious case studies, product launches, client logos, testimonials or impact statistics.
