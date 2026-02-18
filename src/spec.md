# Specification

## Summary
**Goal:** Add the newly uploaded PMK Towing branding image to the existing Photos gallery on the homepage.

**Planned changes:**
- Add `Photo_1770974399544.png` to the existing frontend uploads/static assets path so it is reachable under `/assets/uploads/...`.
- Update `frontend/src/components/PhotosSection.tsx` to include a new photo entry for `/assets/uploads/Photo_1770974399544.png`.
- Provide clear English alt text for the new image describing the towing branding and contact number.

**User-visible outcome:** The homepage Photos section shows the newly added PMK Towing branding image alongside the existing gallery images on both mobile and desktop without layout issues.
