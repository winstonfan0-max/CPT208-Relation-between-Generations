# Core Component Prompt Log (Gemini 2.5 Flash)

This document records how we decomposed our **team-designed prototype** into technical parts,
then used AI to implement each part with controllable prompts.

## 1) Decomposition Strategy

We first fixed the design logic ourselves (user roles, tangible trigger, reveal, dialogue, revisit),
then split implementation into 8 modules:

1. Scan landing screen
2. NFC tools modal
3. Scanning transition and unlock routing
4. 3D memory reveal scene
5. Cross-generation message panel
6. Memory map (collection view)
7. Add-memory form
8. Mobile interaction polish and bug fixes

AI was used for code scaffolding and debugging only; feature goals and design rationale stayed team-owned.

## 2) Primary Prompts by Module

### Prompt A — Scan Landing Screen
**Goal**: Build a mobile-first scan page with selected keepsake card and action buttons.

```text
Create a React mobile-first scan screen with:
1) selected memory card,
2) circular "Tap to Reveal" interaction target,
3) "NFC Tools" and "Map" actions,
4) clean visual hierarchy for one-hand use.
Keep interactions state-driven and easy to extend.
```

### Prompt B — NFC Tools Modal
**Goal**: Support NFC read/write guidance and fallback actions.

```text
Generate a React modal component for NFC tools.
Include:
- Web NFC capability status block,
- Start/stop scan controls,
- Memory list with "Write NFC tag" and "Open memory now",
- On-close callback and error status area.
Use defensive checks for unsupported devices.
```

### Prompt C — Scan Transition and Unlock Routing
**Goal**: Route a successful scan to unlock + reveal state.

```text
Implement a scan flow state machine:
scan -> scanning -> memory.
On success, unlock the selected memory item, set activeId, and navigate to memory view.
Add safe fallback for unknown tags.
```

### Prompt D — 3D Memory Reveal Scene
**Goal**: Display a high-fidelity 3D artifact reveal with controlled camera interaction.

```text
Build a React Three Fiber scene for a keepsake reveal:
- central animated object,
- soft lighting and contact shadow,
- subtle floating motion,
- no heavy GPU effects that break mobile performance.
```

### Prompt E — Cross-Generation Dialogue Panel
**Goal**: Add role-based message thread and quick replies.

```text
Create a bottom-sheet message panel for two roles (grandparent / grandchild):
- message timeline,
- quick reply chips,
- text input + send,
- role-aware labels and timestamps.
```

### Prompt F — Memory Map View
**Goal**: Show locked/unlocked items and allow revisit.

```text
Build a card-based map/collection screen:
- unlocked vs locked states,
- per-item metadata,
- actions: view memory / open dialogue / go to tap.
Use concise visual encoding for progress.
```

### Prompt G — Add-Memory Form
**Goal**: Allow adding new family memories with role and color metadata.

```text
Implement a mobile-friendly create-memory form with:
- title/year/story fields,
- color picker,
- quick-fill templates,
- save flow that appends into app state.
```

### Prompt H — Mobile Polish and Bug Fixes
**Goal**: Final stabilization for live demo.

```text
Debug touch interaction conflicts in mobile webview:
- prevent accidental event penetration between adjacent controls,
- make button hit-area explicit,
- avoid duplicate scan transitions from rapid taps,
- keep safe-area compatibility on modern phones.
Return minimal code patch only.
```

## 3) Verification Workflow

For each generated block, we verified:

1. **Functional check**: expected navigation path works (`scan -> tools` and `scan -> reveal` only when intended).
2. **Mobile check**: tap targets, no overlap mis-tap, no clipped controls on narrow screens.
3. **Build check**: `npm run build` passes and deployable assets are produced.
4. **Consistency check**: interactions still match portfolio system architecture and user journey.

## 4) Notes on Responsible Use

- AI output was treated as draft code, then manually reviewed and edited.
- We did not outsource project motivation, research conclusions, or human-centric rationale to AI.
- We retained final responsibility for correctness, accessibility, and requirement compliance.

