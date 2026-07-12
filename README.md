# WeGame React PWA

A responsive React foundation for the Frontend Engineering Challenge.

## Included

- Responsive full-screen landing sections
- Sticky desktop navigation and mobile menu
- Scroll-aware section rail
- Accessible download modal
- Web app manifest and install icons
- Service worker with app-shell caching
- Custom offline fallback

## Run locally

```bash
npm install
npm run dev
```

The service worker registers only in production:

```bash
npm run build
npm run preview
```

Open the preview URL, then use the browser's application tools to inspect the manifest, service worker, cache, and offline behavior.

## Next steps

Replace the placeholder gradients and cards with optimized assets captured from the live reference. Add PNG icons at 192×192 and 512×512 before production launch for the broadest install compatibility.
