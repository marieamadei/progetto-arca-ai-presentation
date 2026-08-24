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
  assert.match(html, /Un calo di €395\.307/);
  assert.match(html, /86,9%/);
  assert.match(html, /High Value Donor/);
  assert.match(html, /Entra in Progetto Arca AI/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("exposes the key presentation anchors", async () => {
  const response = await render();
  const html = await response.text();
  for (const id of ["top", "idea", "fondazione", "luma", "evidenza", "demo"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
});
