# Specification

## Summary
**Goal:** Update the site-wide text color palette so all text styles (body, headings, muted/secondary, links) use the new colors consistently across the single-page site.

**Planned changes:**
- Update theme text color tokens (CSS variables used by Tailwind) in `frontend/src/index.css` so semantic Tailwind classes (e.g., `text-foreground`, `text-muted-foreground`, `text-primary`, `text-secondary-foreground`) reflect the new palette site-wide.
- Audit all sections (Header, Hero, Services, Service Area, Photos, Contact, Footer, and the mobile Call To Action bar) to ensure text remains readable against backgrounds/overlays/cards, adjusting only component-level hard-coded text color classes when needed.
- Ensure any dark mode tokens (if present/used) remain coherent and readable after the color updates, without changing any user-facing text content, phone numbers, or links.

**User-visible outcome:** The website looks the same structurally, but text colors are updated consistently across all sections, with clear readability on all backgrounds (including hero overlay and the sticky mobile call bar).
