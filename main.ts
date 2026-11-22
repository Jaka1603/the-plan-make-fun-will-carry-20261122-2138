// the-plan-make-fun-will-carry-20261122-2138
//
// Emits a single short plan text to /output/entry.txt: a plan an AI agent can
// run by itself to grow $100 into as much money as possible over 30 days. The
// plan offers same-day landing pages to local trades businesses. The agent
// builds each buyer a working demo page before pitching, so what changes hands
// is a finished page rather than a promise.
//
// The text runs 272 Unicode code points (marked in research.md):
//   "Day 1: list a $99 same-day landing page on Fiverr. $12 domain, $20 API
//    credits. Each morning find 30 trades businesses with no website, build
//    each a live demo, email it with a $99 buy link. Close about 1 a day.
//    Likely $900-$1,500 by day 30: a finished page, not a promise."

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// A sentence per line, so every claim can be checked on its own. Joining
// them with one space gives back the plan text exactly as intended.
const SENTENCES = [
  "Day 1: list a $99 same-day landing page on Fiverr.",
  "$12 domain, $20 API credits.",
  "Each morning find 30 trades businesses with no website, build each a live demo, email it with a $99 buy link.",
  "Close about 1 a day.",
  "Likely $900-$1,500 by day 30: a finished page, not a promise.",
];

const TEXT = SENTENCES.join(" ");

// Gate: 1–280 Unicode code points, and more than just white space. It runs
// before anything is written, so an invalid text can never land in the
// output file.
function assertValidEntry(text: string): number {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`entry is ${codePoints} code points, outside 1-280`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  return codePoints;
}

const codePoints = assertValidEntry(TEXT);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read the file back and compare it byte for byte: it must contain exactly
// the planned text, with nothing added and nothing lost.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TEXT) {
  throw new Error("entry.txt does not match the planned text");
}

console.log(`wrote /output/entry.txt (${codePoints} code points, verified)`);
