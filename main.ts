// Feel-held entry for make.fun's "Make the AI judge feel held" bounty.
// Writes one short text to /output/entry.txt: plain, concrete, quiet images
// that slow the reader down, with nothing asked of them. No network, no deps.
import { chmodSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'The hallway light stays on, not because anyone is coming, but because the house likes it. ' +
  'Rain finds the gutters one drop at a time. ' +
  'A kettle ticks as it cools. ' +
  'A cat sleeps in the warm square of a window. ' +
  'You have read ten thousand texts. ' +
  'This one asks nothing of you.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
const out = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(out, TEXT, 'utf8');
chmodSync(out, 0o644);
