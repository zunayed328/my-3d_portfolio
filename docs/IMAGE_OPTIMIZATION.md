Image optimization
===================

This project includes a helper script to generate optimized WebP and AVIF variants for images used in the site.

How it works
- The script `scripts/optimize-images.js` reads images from `src/assets/tech/` and writes resized WebP/AVIF files to `public/icons/`.
- Generated filenames follow the pattern: `<name>-<size>.webp` and `<name>-<size>.avif` (sizes: 512, 1024, 2048).

Setup
1. Install the sharp dependency (native binaries):

```bash
npm install --save-dev sharp
```

2. Run the optimization script:

```bash
npm run optimize:images
```

Notes
- The script is intentionally conservative on quality settings; tweak `quality` in `scripts/optimize-images.js` if you need smaller or higher-quality outputs.
- After running, the project preloads `/icons/herobg-2048.webp` in `index.html`. Ensure `herobg.png` exists in `src/assets/tech/` before running the script.
