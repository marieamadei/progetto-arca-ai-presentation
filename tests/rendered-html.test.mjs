import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Progetto Arca AI narrative", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="it">/i);
  assert.match(html, /<title>Progetto Arca AI/);
  assert.match(html, /Dati che spiegano/);
  assert.match(html, /Luma non aspetta soltanto una domanda/);
  assert.match(html, /Un calo di €356\.089/);
  assert.match(html, /67,9%/);
  assert.match(html, /High Value Donor/);
  assert.match(html, /Entra in Progetto Arca AI/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("aligns the case with Luma's updated scope and diagnostic threshold", async () => {
  const html = await (await render()).text();
  const caseStudy = html.match(/<section class="case-study section"[\s\S]*?<\/section>/)?.[0];
  assert.ok(caseStudy, "The case study is present");
  for (const text of [
    "One-Off altri canali", "−48,6%", "€732.591", "€376.501",
    "almeno €5.000", "−€356.089", "−€249.302", "−€241.669",
    "14 donazioni", "11 donatori", "€461.669", "4 donazioni", "3 donatori", "€220.000",
    "70,0% del calo di One-Off altri canali",
    "67,9% del calo di One-Off altri canali",
    "96,9% del calo di Altro / trasversale",
    "Limite dell’analisi", "non una soglia di segmentazione HVD",
  ]) {
    assert.ok(caseStudy.includes(text), `Missing case detail: ${text}`);
  }
  assert.doesNotMatch(caseStudy, /395\.307|10\.000|216\.669|86,9%|54,8%|63,1%|One-Off (?:complessivo|totale)/);
  assert.equal((249302 / 356089 * 100).toFixed(1), "70.0");
  assert.equal((241669 / 356089 * 100).toFixed(1), "67.9");
  assert.equal((241669 / 249302 * 100).toFixed(1), "96.9");
  assert.equal(461669 - 220000, 241669);
});

test("exposes the key presentation anchors", async () => {
  const response = await render();
  const html = await response.text();
  for (const id of ["top", "idea", "fondazione", "luma", "evidenza", "demo"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
});
