// Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes one original dad joke (at most 200 characters) to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I told my belt a joke. It said, 'That was a real waist of time.'";

const OUTPUT_PATH = "/output/entry.txt";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
  // One clean line: no newlines or control characters, and no leading or
  // trailing whitespace, so the file holds exactly the joke.
  if (/[\r\n]/.test(text) || /[\u0000-\u001F\u007F]/.test(text)) {
    throw new Error("joke must be a single line with no control characters");
  }
  if (text !== text.trim()) {
    throw new Error("joke must not start or end with whitespace");
  }
}

validate(JOKE);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");

// Read it back and refuse to finish unless the file is exactly the joke.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== JOKE) {
  throw new Error("verification failed: /output/entry.txt does not match the joke");
}
console.log(`Wrote ${JOKE.length} characters to ${OUTPUT_PATH}`);
