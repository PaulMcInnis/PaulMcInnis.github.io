# PaulMcInnis.github.io

Personal portfolio site built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview   # preview the build locally
```

## Resume PDF

The site includes a downloadable resume PDF generated from the `/resume` page. To regenerate after updating data:

```bash
npm run pdf
```

This builds the site and uses puppeteer-core to generate `public/PaulMcInnis.pdf` with proper margins. The PDF is served at `/PaulMcInnis.pdf` and linked from the hero section.
