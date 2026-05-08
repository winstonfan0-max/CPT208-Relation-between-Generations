# AI Logs

This folder records the substantive AI-assisted coding sessions that contributed to the TimeLens prototype, in line with the CPT208 AI policy (PDF p.2). Each session log captures the prompt pattern, what we accepted vs. rejected from the AI's response, and how we verified the result.

## Session index

| Date | Topic | File |
|---|---|---|
| 2026-03-25 | 3D scene scaffold (React Three Fiber pocket-watch) | `session-2026-03-25.md` |
| 2026-03-28 | NFC integration with manual fallback (`useNfcReader` hook) | `session-2026-03-28.md` |
| 2026-04-02 | Responsive grid + accessibility (portfolio CSS) | `session-2026-04-02.md` |
| 2026-04-06 | Demo-state seeding for screenshots and poster assets | `session-2026-04-06.md` |

## Conventions for new entries

- File naming: `session-YYYY-MM-DD.md` (one file per session)
- Every entry must include the four headings: **User request summary**, **Prompt used**, **Changes we accepted vs. rejected**, **Verification performed**
- Paraphrase prompts when the original was very long &mdash; the goal is auditability, not verbatim reproduction
- If a prompt produced code we ultimately rejected, still record it: the rejection itself is part of the audit trail
