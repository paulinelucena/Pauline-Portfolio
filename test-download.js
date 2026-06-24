import https from 'https';
import fs from 'fs';

const url = 'https://paulinelucena27.github.io/Pauline-Portfolio/QuickBooksOnlineCertification.jpg';

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.log(`Failed to download: status ${res.statusCode}`);
    return;
  }
  
  const chunks = [];
  res.on('data', (chunk) => chunks.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(chunks);
    console.log(`Downloaded size: ${buffer.length} bytes`);
    console.log(`First 4 bytes: ${buffer.slice(0, 4).toString('hex')}`);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
