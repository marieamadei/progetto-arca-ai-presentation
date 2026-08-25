import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const root = process.cwd();
const target = path.join(root, "docs");
const sourceUrl = process.env.STATIC_SOURCE_URL ?? "http://127.0.0.1:3000/";

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });

const response = await fetch(sourceUrl);
if (!response.ok) {
  throw new Error(`Unable to render ${sourceUrl}: ${response.status}`);
}

let html = await response.text();
const stylesheetTag = html.match(/<link\b[^>]*rel="stylesheet"[^>]*>/i)?.[0];
const stylesheetHref = stylesheetTag?.match(/href="([^"]+\.css)"/i)?.[1];

html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel="(?:modulepreload|preload)"[^>]*\/?>(?:\s*)/gi, "")
  .replace(/<link\b[^>]*rel="stylesheet"[^>]*\/?>(?:\s*)/i, '<link rel="stylesheet" href="./styles.css"/>')
  .replaceAll('="/assets/', '="./assets/')
  .replace(/\sdata-rsc-[a-z-]+="[^"]*"/gi, "")
  .replace("</head>", '<meta name="referrer" content="strict-origin-when-cross-origin"/></head>');

const cssDirectory = path.join(root, "dist/client/_next/static/css");
const cssEntries = (await readdir(cssDirectory)).filter((file) => file.endsWith(".css"));
const linkedCssEntry = stylesheetHref
  ? path.basename(new URL(stylesheetHref, sourceUrl).pathname)
  : undefined;
const cssEntry = linkedCssEntry && cssEntries.includes(linkedCssEntry)
  ? linkedCssEntry
  : cssEntries[0];
if (!cssEntry) {
  throw new Error("Unable to locate the built stylesheet.");
}

const cssSource = path.join(cssDirectory, cssEntry);
const css = (await readFile(cssSource, "utf8"))
  .replaceAll("url(/assets/", "url(./assets/");
const cssVersion = createHash("sha256").update(css).digest("hex").slice(0, 8);
html = html.replace('href="./styles.css"', `href="./styles.css?v=${cssVersion}"`);

await cp(path.join(root, "public/assets"), path.join(target, "assets"), {
  recursive: true,
});
await cp(path.join(root, "public/favicon.svg"), path.join(target, "favicon.svg"));
await writeFile(path.join(target, "styles.css"), css);
await writeFile(path.join(target, "index.html"), html);
await writeFile(path.join(target, "404.html"), html);
await writeFile(path.join(target, ".nojekyll"), "");

console.log(`GitHub Pages export created in ${target}`);
