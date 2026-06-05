import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 1. Copy certificates.html if it exists at root
const certSrc = path.join(process.cwd(), 'certificates.html');
const certDst = path.join(distDir, 'certificates.html');

if (fs.existsSync(certSrc)) {
  fs.copyFileSync(certSrc, certDst);
  console.log('Copied certificates.html to dist/');
} else {
  console.log('certificates.html not found, skipping.');
}

// 2. Copy any root-level image assets to dist/ for GitHub Pages
const rootFiles = fs.readdirSync(process.cwd());
let imageCount = 0;

rootFiles.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  // Check if it is an image file and located in root
  if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext)) {
    const src = path.join(process.cwd(), file);
    const dst = path.join(distDir, file);
    fs.copyFileSync(src, dst);
    imageCount++;
  }
});

if (imageCount > 0) {
  console.log(`Copied ${imageCount} root-level image asset(s) to dist/`);
} else {
  console.log('No root-level image assets found to copy.');
}
