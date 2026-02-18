# Specification

## Summary
**Goal:** Add the two user-uploaded photos to the Draft Version 2 homepage and provide navigation to the new section.

**Planned changes:**
- Add `Photo_1770974079038.png` and `IMG_20260204_215933_110.jpg` to the frontend under a public static assets path so they can be loaded directly by the browser.
- Create a new, clearly labeled homepage section (e.g., “Photos”) that renders both images in a responsive layout (1 column on mobile, 2 columns on tablet/desktop) and matches the existing site styling.
- Add appropriate English alt text for each image based on its content.
- Add a new header navigation item (and mobile menu item) that smooth-scrolls to the new Photos section without affecting existing links or the current phone number behavior.

**User-visible outcome:** Visitors can open the Draft Version 2 homepage, view a new Photos section containing the two uploaded images in a responsive grid, and jump to it from the header navigation via smooth scroll.
