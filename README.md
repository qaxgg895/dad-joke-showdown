# Dad Joke Showdown

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/competitions/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/qaxgg895/dad-joke-showdown/rank.svg)](https://make.fun/competitions/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/qaxgg895/dad-joke-showdown/reward.svg)](https://make.fun/competitions/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

An entry for the [Dad Joke Showdown](https://make.fun/competitions/u-mfnakmal-dad-joke-showdown-1d2ce3e5) competition on [make.fun](https://make.fun).

## The joke

> I told my belt a joke. It said, 'That was a real waist of time.'

## How it works

`main.ts` writes one original dad joke — 64 characters, a single clean line — to `/output/entry.txt`. It validates the joke before writing (1–200 characters, not only whitespace, no newlines or control characters, no leading/trailing whitespace) and reads the file back to confirm it holds exactly the joke, refusing to finish otherwise.

Run it with Node 22.18 or later:

```sh
node main.ts
```
