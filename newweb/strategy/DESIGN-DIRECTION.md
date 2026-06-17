# EZVMS — Design Direction (v2 Landing Page)

> **Build target:** one self-contained `index.html`, inline `<style>` + vanilla JS. No build step, no frameworks, no external JS deps. Google Fonts via the existing `<link>`. This document is implementation-ready: every component lists concrete sizing, color, spacing, and interaction states reusing the current palette.
>
> **Audience for this site:** enterprise workforce-program owners, MSP operations leaders, and procurement/VMO buyers currently running **SAP Fieldglass, Beeline, Flextrack, or IQNavigator** — people who are skeptical that "free" enterprise software can be real and safe.
>
> **Two hooks, repeated everywhere:** (1) it's genuinely **FREE — no catch**; (2) **Agentic AI does the busywork**. Every section must reinforce at least one.

---

## 0. Design tokens (carry forward, do not re-pick)

Keep the current system exactly. Centralize it in `:root` this time so we stop inlining hexes.

```css
:root{
  /* brand */
  --accent:#2563EB;        /* primary blue */
  --accent-700:#1D4FD7;    /* hover/pressed */
  --accent-050:#EEF3FE;    /* tint panels */
  --accent-025:#F5F8FF;    /* faint tint */
  /* ink + text */
  --ink:#0B1220;           /* headings / near-black */
  --text:#37415A;          /* primary body */
  --text-2:#4A5468;        /* secondary body */
  --text-3:#59647A;        /* tertiary / nav */
  --muted:#8A93A8;         /* labels, captions */
  --faint:#A4AEC0;         /* timestamps, hints */
  /* surfaces + lines */
  --bg:#FFFFFF;
  --panel:#F5F7FC;         /* alternating section bg */
  --panel-2:#FAFBFE;       /* rail / nested */
  --line:#E2E8F1;          /* default border */
  --line-2:#E7EBF3;        /* faint border */
  --line-blue:#C4D7F6;     /* blue-tinted border */
  --line-blue-2:#B7CFF6;   /* card emphasis border */
  /* status */
  --green:#16A34A;
  --green-bg:#E7F6EE;
  --warn:#D97706;          /* NEW — for "legacy/risk" cells, used sparingly */
  --warn-bg:#FEF3E6;
  /* radii + shadow */
  --r-sm:9px; --r:12px; --r-md:14px; --r-lg:18px; --r-xl:24px; --r-pill:999px;
  --shadow-card:0 1px 2px rgba(11,18,32,.04), 0 8px 24px -16px rgba(11,18,32,.18);
  --shadow-float:0 26px 64px -30px rgba(11,18,32,.22);
  /* type */
  --font-display:'Space Grotesk',sans-serif;
  --font-body:'Instrument Sans',sans-serif;
  --font-mono:'JetBrains Mono',monospace;
}
```

**Type scale (do not deviate):** display H1 `72px/1.0/-0.04em`, section H2 `42px/1.06/-0.03em`, big CTA H2 `52px/1.03/-0.035em`, card title `18px/600`, body lead `18px/1.6`, body `15–16px/1.55`, label/eyebrow mono `12px uppercase .14em` accent.

**One new accent we are allowed:** a **warm amber** (`--warn #D97706`) used ONLY to color the "legacy VMS" side of comparisons (a faint red-flag / caution tone). It must never appear on EZVMS's own surfaces. This single restraint does more for "we're the modern one" than any amount of gradient.

---

## 1. Design thesis

**The story in one line:** *"The first VMS that looks like it was built this decade — and it costs nothing."*

Fieldglass, Beeline, IQNavigator and Flextrack all share a visual language: dense gray gradients, beveled buttons, tab-bars, 11px Arial, table-on-table-on-table. They *look* like 2009 enterprise software, and buyers read that — correctly — as "this will be slow, manual, and expensive." Our entire visual advantage is **calm, confident, software-grade minimalism**: lots of white, one disciplined blue, mono labels that signal "engineering, not marketing," and live/animated proof that the product actually *does* things.

Three moves keep us from reading as a "cheap free startup":

1. **Proof over claims.** Free + AI is a claim everyone distrusts. We counter with *running artifacts*: the Autopilot console streaming real workflow steps, a savings counter that ticks against the user's own numbers, a side-by-side that names competitors explicitly. Specificity ("REQ-4827 cleared in 40s", "$82/hr ↓6%") reads as a real system, not a demo reel.
2. **Enterprise trust furniture.** SOC 2 / ISO badges, SSO/SAML, source-code escrow, data residency, and the **ApTask 16-year credibility band** are given real estate — not buried. Legacy buyers need permission to believe "free" is safe. We give it institutionally.
3. **Restraint as the flex.** No dark-mode neon, no glassmorphism soup, no AI-template hero blob. White background, one blue, generous whitespace, mono micro-labels, hairline borders. The confidence is in what we *don't* add. (Bold/Dark variants stay as the design-switcher alternates; **Light is the canonical enterprise face.**)

**Why we beat them visually:** they out-feature us in legacy checkboxes; we out-*feel* them on every screen a buyer actually looks at. Modern type pairing + whitespace + live motion = "this team ships." That is the whole game against incumbents whose own marketing sites look like SharePoint.

**Emotional arc of the page:** *Curiosity ("free? really?") → Recognition ("oh, this is what my VMS should feel like") → Proof ("the AI is doing my job for me") → Math ("here's what I save, in my numbers") → Safety ("and it won't get me fired") → Low-risk next step ("30-min migration assessment").*

---

## 2. Page architecture — section-by-section wireframe

Order matters: hook → proof → modern-feel → competitor-specific → money → trust → catch → action. Sections marked **[NEW]** are additions; others **evolve** the existing build. Container is `max-width:1200px; padding:96px 32px` for standard sections; alternate `--bg` / `--panel` backgrounds for rhythm.

### 2.1 Sticky Nav — **EVOLVE** (+ "Switch from [VMS]" dropdown) **[NEW element]**
- Layout: left `EZVMS` wordmark + 4 mono links (`platform · pricing · compare · developers`); right = `Switch from ▾` dropdown, `sign in`, `Book a demo` pill.
- Keep the existing scroll-depth behavior (bg `0.72→0.9` alpha, border `#E7EBF3→#D5DDEA`).
- **NEW:** a `Switch from ▾` dropdown listing **Fieldglass / Beeline / Flextrack / IQNavigator / Other**. Selecting one (a) scrolls to the Comparison section and (b) preselects that competitor's tab. This is the spine that connects nav → comparison → calculator.
- Add a hairline mono micro-banner option above nav on first load: `// 100% FREE — no licensing fees, no % of spend` (dismissible, `localStorage`).

### 2.2 Hero — **EVOLVE** (keep the Autopilot console; it's the best asset)
- Layout: 2-col grid `1fr 1fr`, gap 56px, vertically centered. Left = copy; right = **Autopilot console** (unchanged engine, lightly upgraded — see §3.1).
- Eyebrow pill: `● AI-NATIVE WORKFORCE OS`.
- H1 (two lines, current treatment): line 1 ink **"100% Free VMS."**, line 2 accent **"No catch, no fine print."**
- Sub-lead (600): *"The AI-first VMS that automates the entire requisition-to-pay workflow."* Then body: the "only thing you'll ever pay for is migration" line (keep).
- CTAs: primary pill `Get started free →`, secondary outline `Book a 30-min demo`.
- Trust micro-row under CTAs: `no credit card · no lock-in · migrate from any platform`.
- **NEW** small reassurance strip *below* the console on mobile, or as a 4th foot-stat: `SOC 2 · SSO/SAML · escrow-protected`.

### 2.3 Logo Wall / Social Proof Band — **[NEW]**
- Full-width, `--panel` background, thin top+bottom hairline. `padding:40px 32px`.
- Centered mono eyebrow: `// TRUSTED ACROSS ENTERPRISE WORKFORCE PROGRAMS`.
- A single row of 6–8 monochrome (`--muted`, opacity .65) client/industry logos OR, until real logos clear legal, **category chips** ("Fortune 500 IT services", "Global MSP", "Healthcare staffing", "Public sector") so it never looks empty.
- Optional: a slow horizontal marquee (CSS `@keyframes` translateX, paused on hover, disabled under reduced-motion).

### 2.4 Value Strip — **EVOLVE** (keep 4-up stat row)
- Keep the 4-column stat band (`50%+ less admin`, `minutes not hours`, `real-time visibility`, `automated supplier comms`). Make the lead number of each **count up** when scrolled into view (reuse the Autopilot `bumpTally` easing).

### 2.5 "No Catch" Band — **EVOLVE**
- Keep: *"Read the fine print. There isn't any."* + 4 check-pills.
- **NEW:** make this band the anchor target for the FAQ "the catch" question — add `id="no-catch"`.

### 2.6 Who It's For — **EVOLVE** (4 cards: Enterprise / MSP / Suppliers / Programs)
- Keep the 4-card grid and hover lift. Tighten copy toward switchers ("running a legacy VMS? here's your seat").

### 2.7 AI Workforce Agents — **EVOLVE** into a "Watch an agent work" moment **[NEW interaction]**
- Keep the eyebrow and the 10-tile capability grid, but add the **mini agent demo** above it (see §3.3): a compact, replayable "before vs after" that shows one requisition going from 6 manual emails → 1 autopilot run.

### 2.8 Competitor Comparison — **[NEW: tabbed per-competitor switcher]**
- This is the new centerpiece for switchers. Mono eyebrow `// HOW WE COMPARE`.
- H2: *"Everything you pay extra for, included — and modernized."*
- **Tab bar:** `Fieldglass · Beeline · Flextrack · IQNavigator · Generic VMS`. Selecting a tab swaps the right column header + the row values + a one-line "switcher note" per competitor.
- Below the tabs: the comparison table (§4.1). Legacy column tinted with `--warn`, EZVMS column tinted `--accent-050`.
- Deep-linkable from the nav `Switch from ▾` dropdown.

### 2.9 ROI / Savings Calculator — **[NEW signature]**
- `--panel` bg. Eyebrow `// WHAT YOU'D SAVE`. H2: *"Put in your numbers. Watch the line drop to zero."*
- Layout 2-col: left = inputs (sliders + select); right = animated result card with the **count-up savings bar** (§3.2). See component spec §4.3.

### 2.10 Open API — **EVOLVE** (keep the code-card)
- Keep `requisitions.create` code panel. Add a small tab to flip the panel between `REST`, `Webhook`, and `MCP / agent tool` snippets to underline "AI-native + API-first."

### 2.11 Migration Timeline — **[NEW]**
- Eyebrow `// SWITCHING IS EASIER THAN STAYING`. H2: *"From [Fieldglass] to live in ~30 days. We do the lifting."*
- Horizontal 4-step timeline (Assess → Migrate data → Parallel run → Cut over), each a node on a connecting line with a duration chip. Reads competitor name from the same state as the comparison tabs.

### 2.12 Security / Trust Band — **[NEW]**
- White bg, hairline top. Eyebrow `// ENTERPRISE-GRADE BY DEFAULT`.
- Row of trust badges (§4.6): SOC 2 Type II, ISO 27001, SSO/SAML/SCIM, Data residency (US/EU), Source-code escrow, 99.9% uptime. Each = icon + label + one-line detail on hover.
- Short reassurance paragraph: *"Free does not mean fragile. EZVMS runs on the same controls enterprises require from any paid VMS — audited, encrypted, escrow-protected."*

### 2.13 ApTask Credibility — **[NEW]**
- `--accent-050` panel. 2-col: left = narrative, right = stat tiles.
- H2: *"Free, because ApTask already gets paid to run programs like yours."* (This is the answer to "what's the catch" — the business model, stated plainly.)
- Stats: `16+ yrs workforce programs`, `$X B+ spend under management`, `N+ enterprise clients`, `Backed, not bootstrapped`.
- This section converts the scariest objection ("free = unsustainable") into the strongest trust signal.

### 2.14 Pricing — **EVOLVE** (2 cards: Free Forever / Continuous Innovation)
- Keep the two-card structure. Strengthen the `NO CATCH` flag and tie the "10% of current VMS spend" add-on visually to the calculator output.

### 2.15 "The Catch" FAQ Accordion — **[NEW]**
- Eyebrow `// THE PART YOU'RE SKEPTICAL ABOUT`. H2: *"Okay — what's the catch?"*
- Accordion (§4.4). First item open by default: **"Is it really free?"** Other items: *How do you make money? · What does migration cost? · Is my data safe / who owns it? · What if ApTask changes the deal? (escrow) · Do I have to use the AI agents? · How is this different from [Fieldglass]?*

### 2.16 Testimonials — **[NEW, optional/placeholder-safe]**
- 2–3 quote cards (role + program size, monochrome avatar initial). If no real quotes yet, render as outcome cards ("Cut req-to-fill from 21d → 9d") rather than fake names. Never invent attributed people.

### 2.17 Demo CTA — **EVOLVE** (keep gradient panel)
- Keep. Headline *"Modernize your workforce program. In 30 minutes."* Wire primary button to the existing booking modal.

### 2.18 Footer — **EVOLVE** (keep 4-col + "all systems operational" dot)

---

## 3. Signature interactive moments

### 3.1 Autopilot Console v2 (EVOLVE the hero centerpiece)
Keep the entire existing engine (module rail, streaming feed, `bumpTally` count-up, live clock, IntersectionObserver start, reduced-motion fallback). Three targeted upgrades:

1. **Caret + typing on the active line.** The newest feed line types its action text at ~32ms/char before the next line drops in. Reuse the existing `ez-feed` entrance; add a 1ch blinking caret (`ez-blink`, already defined) that disappears once the line completes. Gives "an agent is typing right now" energy without changing the data model.
2. **"Why this matters" tooltip on each module.** Hovering a rail module (`.ezap-mod`) shows a 1-line popover (`position:absolute`, `--shadow-float`, 220px) e.g. *"Screen & match — replaces ~6.8 analyst-hrs/req of resume triage."* Keyboard-focusable. Pure CSS/JS, no lib.
3. **Speed control + "Run again" affordance.** Tiny mono control in the console head: `1× / 2×` toggle multiplies the step interval, and a `↻ replay` icon restarts at module 0. Lets a demoing salesperson control pacing on a call. Persist choice in memory only (no storage needed).

Behavior unchanged otherwise: 8 modules, ~780ms/step, +saved chip → tally bump, loop with a 1.7s reset pause.

### 3.2 Cost-to-Zero Savings Bar (NEW — the calculator's payoff)
The emotional climax. When the calculator recomputes, animate a two-bar comparison:

- **Layout:** two stacked horizontal bars in the result card. Top bar = "Your current VMS" (filled `--warn`, width ∝ current annual cost). Bottom bar = "EZVMS" (filled `--accent`, width ∝ EZVMS cost — which is migration-only, so it renders as a thin sliver near zero).
- **Animation:** on input change (debounced 120ms), the legacy bar grows from current→new width over 700ms (`cubic-bezier(.22,1,.36,1)`); the EZVMS bar stays ~near-zero. The big **"You save"** number above count-ups using the existing `bumpTally` cubic-out easing (`1 - (1-p)^3`, ~900ms) from old→new value, formatted `$1,240,000` / `en-US`.
- **Punch line:** once settled, a `--green-bg` pill fades in: `↓ 100% of licensing + % of spend`. Under reduced-motion, set widths and final number instantly, skip the count-up.
- **Why it works:** the buyer sees *their own* number get crushed to a sliver. It's the comparison table made visceral and personal.

### 3.3 "Watch an agent work" mini-demo (NEW — §2.7)
A compact, replayable before/after for a single requisition.

- **Layout:** 2 panels side by side. Left "The old way" = a faux email thread / task list of **6 manual steps** (post to suppliers, chase submissions, dedupe, schedule, compliance, offer) shown as static gray rows with tiny clock chips totaling e.g. `~9 hrs over 6 days`. Right "With EZVMS Autopilot" = the same 6 steps collapsing into **1 autopilot run** that checks them off in sequence with a single `~14 min` chip.
- **Trigger:** a center `▶ Run autopilot` button. On click: left rows dim; right rows check off top→bottom at ~260ms each (green check, `ez-feed` entrance); a connecting arrow animates left→right; final `saved 8.7 hrs on one req` pill pops.
- **Replayable:** button becomes `↻ Run again`. Auto-plays once on first scroll-in (IntersectionObserver, same pattern as hero), then waits for user.
- Reduced-motion: render the right side pre-completed with the final pill visible.

> **Wow ranking (recommend leading with these three):** (1) **Cost-to-Zero Savings Bar** — most persuasive, ties money to *their* numbers; (2) **Competitor tab switcher** — directly disarms "but I'm on Fieldglass"; (3) **Autopilot Console v2** — already our best asset, now interactive on a sales call.

---

## 4. Component specs

### 4.1 Comparison table + per-competitor tab switcher
**Tabs**
- Container: pill row, `gap:8px`, wrap on mobile. Each tab: `--font-mono 13px`, `padding:9px 16px`, `border:1px solid var(--line)`, `border-radius:var(--r-pill)`, `color:var(--text-3)`, `background:#fff`.
- States: hover `border-color:var(--line-blue-2)`. **Active** `background:var(--accent); color:#fff; border-color:var(--accent)`. Focus-visible: `outline:2px solid var(--accent); outline-offset:2px`.
- `role="tablist"`, each tab `role="tab" aria-selected`, panel `role="tabpanel"`. Arrow-key navigation between tabs.

**Table** (reuse current structure: `grid-template-columns:1.6fr 1fr 1fr`, `border-radius:var(--r-md)`, hairline rows `--line-2`)
- Header row: blank · `[COMPETITOR NAME]` (mono, `--warn`) · `EZVMS` (mono, `--accent`, cell bg `--accent-050`, left border `--line-blue`).
- ~9 rows: Annual licensing fees · % of spend · AI agents · Open APIs · ERP integrations · Implementation cost · Innovation cadence · Source-code escrow · Vendor lock-in.
- Legacy cell: `color:var(--text-3)`; when value is a negative ("Charged", "Six-figure", "Yes/lock-in"), prefix a small `--warn` caution dot. EZVMS cell: `color:var(--accent)`, value "Included / None / No", optional `✓`.
- **Per-competitor data** lives in a JS object `COMP = { fieldglass:{label, note, rows:{licensing:'Charged',...}}, beeline:{...}, ... }`. Switching a tab: fade table body `opacity 1→0 (120ms)`, swap text, fade back in; update the competitor name in §2.11 Migration Timeline header via the same state. Keep example values plausible and clearly framed as "typical legacy VMS" (avoid unverifiable hard $ claims about a named vendor — use "Charged / Six-figure / Limited" qualitative language to stay defensible).
- One-line switcher note under the table, e.g. Fieldglass: *"Coming from Fieldglass? We import your suppliers, rate cards, and approval chains."*

### 4.2 (Covered above — Autopilot console; no new spec)

### 4.3 ROI / Savings Calculator
**Inputs (left col, stacked, gap 22px):**
- **Annual contingent spend** — range slider, `$1M – $500M`, step `$1M`, default `$25M`. Show live value in a mono chip to the right of the label.
- **Current VMS model** — select: `% of spend (default 2%)` / `Flat license`. If "% of spend": a second slider `0.5%–3%`, default `2%`. If "Flat": a slider `$50k–$2M`, default `$300k`.
- **# of workers / reqs per year** — slider `100–25,000`, default `2,500` (drives the *hours saved* secondary output, not the dollar bar).
- Slider track: `height:6px; background:var(--line); border-radius:var(--r-pill)`. Filled portion `var(--accent)`. Thumb: `20px` circle, `#fff`, `border:2px solid var(--accent)`, `box-shadow:var(--shadow-card)`; active thumb `box-shadow:0 0 0 6px rgba(37,99,235,.14)`. Style via `accent-color:var(--accent)` as the no-JS baseline, custom thumb as progressive enhancement.

**Output (right col, result card `--shadow-card`, `--r-lg`, padding 28px):**
- Big number: **"You save"** `$X / year` — `--font-display 700 46px`, accent. Count-up on change (§3.2).
- The Cost-to-Zero two-bar viz (§3.2).
- Secondary tiles row: `Analyst-hrs saved / yr` (workers × ~1.3 hr/req factor), `Payback`, `EZVMS cost` (= migration $1k–$10k, "one-time").
- Footnote mono `--faint 10.5px`: *"Estimate based on your inputs. EZVMS core platform is $0; you pay only one-time migration if you need it."*
- Compute formula (transparent, no hidden multipliers): `legacyAnnual = model==='pct' ? spend*pct : flat; ezvmsAnnual = 0; youSave = legacyAnnual; barLegacyW = 100%; barEzvmsW = max(1.5%, migration/legacyAnnual*100)`.

### 4.4 "The Catch" FAQ accordion
- Item: `border-bottom:1px solid var(--line-2)`; header is a full-width `<button>` `padding:22px 4px`, `--font-display 600 18px`, `color:var(--ink)`, flex space-between with a `+ / −` glyph (rotate `45deg` on open, `transition:transform .25s`).
- Body: `max-height` transition (0 → measured `scrollHeight`px) over `.3s ease`, `--font-body 15.5px/1.65 var(--text-2)`, padding-bottom 22px. Use `max-height` (not `height:auto`) so it animates.
- States: hover header `color` stays ink, chevron `--accent`. Focus-visible outline accent. `aria-expanded` on button, `role="region"` body with `aria-labelledby`.
- First item open on load. Single-open or multi-open both fine — recommend **multi-open** (less fighting the UI).

### 4.5 Pricing cards — keep current, two refinements
- Free card border `--line-blue-2`, `NO CATCH` flag `background:var(--accent); color:#fff`. Innovation card gradient `linear-gradient(180deg,var(--accent-050),#fff)`.
- Add a `Most teams stop here →` micro-caption under the Free card price so the optional add-on never reads as a bait-and-switch.

### 4.6 Trust / security badges
- Each badge: `display:flex; gap:10px; align-items:center; border:1px solid var(--line); border-radius:var(--r); padding:14px 16px; background:#fff`. Icon in a `28px` `--accent-050` rounded square, accent stroke (reuse the inline-SVG style from the booking modal — `stroke="currentColor" stroke-width="2"`). Label `--font-display 600 14px`; on hover, a one-line `--text-3 13px` detail expands (or a tooltip).
- Grid: `repeat(auto-fit, minmax(180px,1fr))`, gap 12px. Do **not** fabricate certifications — if SOC 2 is "in progress", label it *"SOC 2 Type II — in progress"* honestly.

### 4.7 Testimonial / logo wall
- Logo wall: see §2.3. Quote card: `--r-md`, `--line`, padding 28px; quote `--font-display 500 18px/1.5 var(--ink)`; attribution row = `28px` `--accent-050` circle with initial + role/program-size `--font-mono 11px --muted`.

### 4.8 Sticky nav + "Switch from [VMS]" dropdown
- Dropdown button: `--font-mono 13px`, `Switch from ▾`, `color:var(--text-3)`. Menu reuses the design-switcher menu styling (`--r-md`, `--shadow-float`, `padding:5px`, items `padding:10px 14px` hover `--panel`).
- Items: Fieldglass / Beeline / Flextrack / IQNavigator / Other. On click: set comparison + migration state to that competitor, `scrollIntoView({behavior:'smooth'})` to `#compare`, activate the matching tab. Close on outside click (reuse existing `document.click` close pattern).
- Keep the existing top-right **Light/Bold/Dark** design switcher (Bold=`v3.html`, Dark=`v1.html`) exactly as-is.

---

## 5. Responsive, accessibility, motion, and do/don'ts

### Responsive breakpoints
- **≥1024px:** full 2-col heroes, 4-up grids, side-by-side calculator.
- **≤980px:** Autopilot rail narrows to 152px (current behavior); 4-up grids → 2-up; comparison keeps 3 columns but tighten padding to `12px 14px`.
- **≤760px:** all 2-col grids stack (copy above visual); calculator inputs above output; booking modal info pane hidden (current behavior); comparison table becomes a **per-row stacked card** layout (label, then legacy vs EZVMS as two chips) — never a horizontally-scrolling table.
- **≤560px:** Autopilot rail `display:none` (current); H1 `clamp(40px,11vw,72px)`; tab bar scrolls horizontally with snap.
- Use `clamp()` for H1/H2 so type never overflows on small screens. Min tap target `44×44px` for all buttons, tabs, slider thumbs, accordion headers.

### Accessibility
- Color contrast: body text on white passes AA; do **not** put `--muted (#8A93A8)` on `--panel` for anything load-bearing — captions only. The `--warn` legacy cells must not be the *only* signal — pair with text/icon.
- Semantics: one `<h1>`, sections use `<h2>`. Tabs = `tablist/tab/tabpanel` + arrow keys. Accordion = `button[aria-expanded]`. Sliders = native `<input type="range">` with `<label>` + `aria-valuetext` showing the formatted value. Dropdowns = `aria-expanded`, Esc to close, focus trap not required (menu, not modal).
- Booking modal already has `role="dialog" aria-modal`; keep focus management.
- The Autopilot console keeps its descriptive `aria-label` summarizing the workflow; it's decorative/`aria-hidden` on the rail — screen readers get the summary, not the stream.
- Every interactive element needs a visible `:focus-visible` ring (`outline:2px solid var(--accent); outline-offset:2px`).

### Motion / reduced-motion
- Honor `@media (prefers-reduced-motion: reduce)` everywhere: Autopilot renders a static mid-state (already implemented), savings bar/numbers snap to final, count-ups disabled, marquee paused, accordion still toggles (it's functional, not decorative), scroll-reveal sets `opacity:1` immediately.
- Default motion budget: entrances ≤700ms, micro-interactions ≤250ms, easings `cubic-bezier(.22,1,.36,1)` (entrances) and `cubic-bezier(1-(1-p)^3)` count-up. No parallax, no scroll-jacking, no autoplaying sound.

### Do / Don't (anti-"generic AI template" guardrails)
**DO**
- Keep the mono `//` eyebrows — they're our signature and read "engineering."
- Use real, specific artifacts (REQ IDs, rates, durations, named competitors) — specificity = credibility.
- Lead sections with whitespace and a single idea; let one blue carry the emphasis.
- State the business model plainly (ApTask section) — honesty *is* the differentiator here.
- Animate to *prove a point* (savings dropping, agent finishing work), never for decoration.

**DON'T**
- No purple→blue→pink gradient hero, no glassmorphism cards, no glowing orbs/blobs, no 3D isometric clip-art.
- No dark hero on the canonical Light page (that's the Dark switcher variant's job).
- No emoji as iconography; use the existing inline-SVG stroke icons.
- No more than ~2 type weights visible per section; never introduce a 4th typeface.
- No fabricated logos, fake testimonials, or unverifiable hard-dollar claims about named competitors — qualitative ("Charged / Six-figure / Limited") stays defensible and still wins.
- No carousel that hides content; no modal on load; no cookie-wall theater.
- Don't gradient-fill the EZVMS comparison column in `--warn` — warm amber is *exclusively* the legacy side.

---

## 6. Build notes (so it stays one file, no framework)
- One `<style>` block; move all repeated inline styles into classes + the `:root` tokens above. Inline styles only for true one-offs.
- One IIFE per interactive module (matches current pattern): `autopilot`, `calc`, `compareTabs`, `faq`, `switchDropdown`, `agentDemo`, `reveal`, `nav`, `countup`. Share a single `IntersectionObserver` helper and a single `bumpTally`-style `animateNumber(el, from, to, dur)` util.
- State that crosses sections (selected competitor) lives in one module-scoped variable + a tiny pub/sub (`document.dispatchEvent(new CustomEvent('ez:competitor',{detail}))`) so nav dropdown, comparison tabs, and migration timeline stay in sync without a framework.
- Reuse: `ez-feed`, `ez-blink`, `ez-bar` keyframes; the booking modal; the design switcher; the scroll-reveal `[data-reveal]` observer; the sticky-nav scroll handler. Don't rebuild what already works.
