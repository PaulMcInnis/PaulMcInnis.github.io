import puppeteer from 'puppeteer-core';
import { resolve } from 'path';

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});

const page = await browser.newPage();
await page.goto(`file://${resolve('dist/resume/index.html')}`, { waitUntil: 'networkidle0' });

await page.pdf({
  path: 'public/PaulMcInnis.pdf',
  format: 'Letter',
  margin: { top: '0.5in', bottom: '0.5in', left: '0.6in', right: '0.6in' },
  displayHeaderFooter: false,
  printBackground: true,
});

await browser.close();
console.log('PDF generated: public/PaulMcInnis.pdf');
