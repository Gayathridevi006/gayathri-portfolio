# Mistake log

## 2026-10-14

- I first tried to read the PDF skill from an outdated location under `~/.codex/skills`. The current skill was under `~/.codex/plugins/cache/openai-primary-runtime/pdf/...`. I corrected the path and read the skill before continuing. To avoid repeating this, use the active skills catalog path and check the resolved file location when the first path is missing.
- I used an unmatched zsh wildcard while checking for existing resume asset names; zsh aborted that part of the command. I used a follow-up listing and proceeded with the known asset path. To avoid repeating this, use `find` or a quoted wildcard when a match is not guaranteed.
