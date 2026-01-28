/*
 Image optimization script using sharp.
 Usage: npm run optimize:images
 It reads images from `src/assets/tech/` and writes optimized variants to `public/icons/`.
 Requires `sharp` installed as a dev dependency: `npm install --save-dev sharp`
*/
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = path.resolve(process.cwd(), 'src', 'assets', 'tech');
const outDir = path.resolve(process.cwd(), 'public', 'icons');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => /\.png$|\.jpg$|\.jpeg$|\.svg$/i.test(f));

const sizes = [512, 1024, 2048];

async function processFile(file) {
  const inPath = path.join(srcDir, file);
  const name = path.parse(file).name;

  // produce webp and avif at multiple sizes
  for (const size of sizes) {
    const outWebp = path.join(outDir, `${name}-${size}.webp`);
    const outAvif = path.join(outDir, `${name}-${size}.avif`);
    try {
      await sharp(inPath)
        .resize(size)
        .webp({ quality: 85 })
        .toFile(outWebp);

      await sharp(inPath)
        .resize(size)
        .avif({ quality: 60 })
        .toFile(outAvif);
      console.log(`Wrote ${outWebp} and ${outAvif}`);
    } catch (err) {
      console.error('skipping', inPath, err.message);
    }
  }
}

(async () => {
  for (const f of files) {
    await processFile(f);
  }
  console.log('Image optimization completed.');
})();
