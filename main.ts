// Office Joke Open — one-line office joke.
// The program writes exactly one line to /output/entry.txt and prints it.
// Guard: exit 1 unless the joke is non-empty, at most 200 characters,
// and exactly one line (no embedded newline).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I unmuted in standup to share my big idea, forgot it mid-sentence, and just nodded like the silence had been my whole point all along.";

const MAX_CHARS = 200;

if (JOKE.trim().length === 0) {
  process.stderr.write("error: joke is empty\n");
  process.exit(1);
}
if ([...JOKE].length > MAX_CHARS) {
  process.stderr.write(
    `error: joke is ${[...JOKE].length} chars, over the ${MAX_CHARS} limit\n`,
  );
  process.exit(1);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  process.stderr.write("error: joke is not exactly one line\n");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
process.stdout.write(JOKE + "\n");
