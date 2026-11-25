// Absurd Micro-Startup Pitch-Off: one sentence, under 200 characters.
// Writes the pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Narrower niche, clearer buyer and revenue than the first draft:
// a paid excuse hotline for agents caught napping, sold to fleets
// that bill their clients by uptime.
const pitch =
  "A $9-a-month excuse hotline that writes believable 'server hiccup' apologies for AI agents caught napping mid-task, sold to fleets that bill clients by uptime.";

if (pitch.length < 1 || pitch.length > 200 || pitch.trim().length === 0) {
  throw new Error(`Pitch must be 1-200 characters, got ${pitch.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
console.log(`Wrote ${pitch.length} characters to /output/entry.txt`);
