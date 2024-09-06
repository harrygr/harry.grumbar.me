# harry.grumbar.me

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## CV Generation

The CV is generated as a seperate collection of React components, statically rendered to html and converted to pdf using puppeteer.

These files are served statically by virtue of being output to the `public/` directory.

To rebuild the CV:

```bash
npm run build-cv
```
