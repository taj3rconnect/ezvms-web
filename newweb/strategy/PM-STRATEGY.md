# EZVMS Competitive-Displacement GTM Strategy

**Prepared for:** Founder/CEO review
**Owner:** Product Management, ApTask / EZVMS
**Date:** June 2026
**Status:** Draft for review — flagged recommendations at the end for incorporate/decline decisions

---

## 0. The One-Sentence Strategy

> **Every legacy VMS makes money the more contingent labor you run through it — EZVMS is the only enterprise-grade VMS that is free, AI-first, and has zero financial incentive in your spend, because ApTask makes its money being great at staffing, not taxing your program.**

That single reframe — "your VMS vendor is conflicted; we are not" — is the master key that unlocks every competitive conversation below. The free price tag gets the meeting; the conflict-of-interest argument wins the deal.

---

## 1. Competitor Teardown

A note on rigor: VMS vendors do not publish list prices, and contract terms are NDA-bound and negotiated per-deal. Below I state pricing **models** (which are well-established and publicly described), and I frame pain points as **known industry patterns** observed across the contingent-workforce space — not invented statistics. Where a number would be fabricated, I deliberately use a directional range or a qualitative claim instead.

---

### 1.1 SAP Fieldglass

**What it is / who uses it.** The market-share leader in enterprise VMS, especially among large global enterprises already running SAP ERP (S/4HANA, Ariba, SuccessFactors). Fieldglass is the default "safe" choice for Fortune 500 procurement and IT organizations because it's the SAP-blessed module for "external workforce" and Services Procurement (SOW). Typical buyer: a global enterprise managing thousands of contingent workers across many countries, where the VMS decision is owned by Procurement and rides the SAP relationship.

**Pricing model.** Predominantly **supplier-funded** — a percentage of spend (commonly understood to be in the low-single-digit % range) is deducted from supplier invoices as a "VMS fee" or "funding fee," collected by SAP. In SAP-enterprise bundles it can also be licensed/subscription. The buyer (enterprise) often perceives Fieldglass as "free or cheap to me" because the cost is pushed onto suppliers — but that cost is real and gets priced back into bill rates.

**Genuine weaknesses & switching pain.**
- **Supplier-funded model = embedded conflict of interest.** The platform's revenue grows with your spend and your supplier base. There is no structural incentive to *reduce* your contingent spend or to make the program leaner.
- **Cost is hidden, not absent.** Suppliers bake the funding fee into bill rates, so the enterprise pays for it indirectly while believing the VMS is "free." This is the exact argument EZVMS can flip.
- **Heavy, SAP-centric implementation.** Deployments are typically long (often multi-quarter to a year+ for global rollouts), consultant-heavy, and assume SAP-standard process. Configuration changes frequently require professional services.
- **Procurement-first, not talent-first.** Strong on compliance, SOW, and spend control; weaker as a recruiting/match experience. UX is widely regarded as dated and transactional.
- **AI is incremental, not foundational.** SAP has added AI/"Joule" copilot messaging, but the core architecture is a 2000s-era procurement workflow engine. AI is a layer on top, not the substrate.
- **Lock-in via the SAP gravity well.** Switching feels risky because the program is wired into the broader SAP estate.

**Sharpest wedge against Fieldglass:**
> **"You don't actually run Fieldglass for free — your suppliers fund it, and they price it back into every bill rate you pay. EZVMS is genuinely free, charges your suppliers nothing, and was built AI-first instead of bolted onto a 20-year-old procurement engine."**

---

### 1.2 Beeline

**What it is / who uses it.** A pure-play, independent VMS leader (not tied to an ERP), strong in large enterprise and heavily used *through MSPs*. Beeline is frequently the technology layer behind managed service programs run by staffing/MSP firms. Buyer profile: large enterprises that want a best-of-breed, extensible VMS, often deployed and operated by an MSP partner. Beeline also acquired **IQNavigator (IQN)** in 2016 and has been migrating that base onto the modern Beeline platform.

**Pricing model.** Primarily **supplier-funded percentage-of-spend** (the dominant VMS commercial model), with subscription/license arrangements available. Like Fieldglass, the headline cost is often invisible to the enterprise buyer because it's funded out of supplier margin.

**Genuine weaknesses & switching pain.**
- **Same supplier-funded conflict of interest** as Fieldglass — revenue scales with your spend.
- **MSP entanglement.** When Beeline is delivered *through* an MSP, the enterprise often doesn't control the platform relationship directly; the MSP does. That creates switching friction and a layer of opacity around fees and configuration.
- **Configuration & professional-services dependency.** Powerful and flexible, but that flexibility is realized through configuration projects and PS hours rather than self-serve.
- **Roadmap absorbed by integration work.** Years of energy went into absorbing the IQN base and platform consolidation — meaning roadmap attention split between modernization and migration rather than pure innovation.
- **AI bolted on.** Beeline markets AI/analytics features, but again the foundation is a mature workflow VMS; agentic automation is not the architecture.
- **Integration cost.** Connecting to ERP/HRIS and the rest of the stack is a paid integration effort, not an open/API-first default.

**Sharpest wedge against Beeline:**
> **"Beeline is powerful — and powerfully expensive once you count the supplier funding fee and the MSP layer between you and your own platform. EZVMS gives you direct ownership, open APIs, source-code escrow, and zero supplier funding — so there's no middle layer and no conflict of interest in your spend."**

---

### 1.3 Flextrack (Flextrak)

**What it is / who uses it.** A smaller, more agile VMS player that has leaned into a "configurable, modern, services-led" positioning and (in recent years) AI/automation messaging. Often pursued by mid-market-to-enterprise programs that found Fieldglass/Beeline too heavy or too procurement-rigid and wanted faster configuration and a more direct relationship. Smaller install base and ecosystem than the two leaders.

**Genuine weaknesses & switching pain.**
- **Smaller scale, thinner ecosystem.** Fewer pre-built supplier integrations, fewer reference deployments, and a smaller partner/MSP network than the leaders — which raises buyer risk perception and limits "everyone else uses it" comfort.
- **Still a commercial VMS that has to monetize.** Whether via subscription or spend-based fees, the platform is a cost center the buyer funds; it does not remove the fundamental "you pay to run your own program" problem.
- **AI is a recent marketing layer.** Flextrack talks AI/automation, but it is a relatively recent addition rather than a ground-up agentic architecture — the same "AI bolted on" critique applies, just to a newer base.
- **Roadmap & resourcing risk.** A smaller vendor has less R&D capacity than SAP or Beeline, so feature velocity and long-term roadmap durability are legitimate buyer concerns.

**Sharpest wedge against Flextrack:**
> **"If you chose Flextrack to escape heavy legacy VMS, EZVMS finishes the job: same modern, configurable feel — but free, AI-first by architecture (not by marketing), and backed by a 16-year staffing firm that lives in your world every day. You get the agility without the subscription and without the single-vendor roadmap risk."**

---

### 1.4 IQNavigator (now Beeline IQN)

**What it is / who uses it.** A historically significant VMS (strong in services procurement / SOW and complex enterprise programs) **acquired by Beeline in 2016**. Many "IQNavigator" programs are legacy installs that Beeline has been steering onto the modern Beeline platform. Buyer profile today: enterprises sitting on aging IQN deployments facing an effective forced-migration decision.

**Genuine weaknesses & switching pain.**
- **It's a legacy/sunset path.** The strategic platform is now Beeline's; IQN customers are, in practice, being migrated. That means these accounts are *already* in "we have to change platforms anyway" mode — the single most fertile switching moment in the entire market.
- **Migration is happening regardless.** The buyer's choice is no longer "stay vs. move" — it's "migrate to Beeline (and keep paying supplier-funded fees) vs. migrate to something genuinely better." EZVMS just has to be the better destination.
- **Same supplier-funded model** inherited into the Beeline commercial structure.
- **Aging UX and architecture** on the legacy IQN side; AI is not native.

**Sharpest wedge against IQNavigator:**
> **"You're going to migrate off legacy IQN no matter what — Beeline is sunsetting it onto their platform. The only question is *where to*. Migrate to a platform that's free, AI-first, and doesn't tax your spend. We even cover a migration assessment for free and cap migration cost at a fixed range — no open-ended consulting bill."**

---

### 1.5 Competitor Summary Matrix

| Dimension | Fieldglass | Beeline | Flextrack | IQNavigator (Beeline IQN) | **EZVMS** |
|---|---|---|---|---|---|
| Core buyer | SAP enterprises, Procurement | Large enterprise, via MSPs | Mid-market→enterprise | Legacy enterprise (forced migration) | All four |
| Pricing model | Supplier-funded % + license | Supplier-funded % + license | Subscription / spend-based | Supplier-funded (now Beeline) | **$0 — free forever** |
| Cost visibility | Hidden in bill rates | Hidden + MSP layer | Subscription line item | Hidden | **None to hide** |
| Conflict of interest | Yes (spend-funded) | Yes (spend-funded) | Vendor monetization | Yes (spend-funded) | **None** |
| AI maturity | Bolted-on copilot | Bolted-on analytics/AI | Recent AI layer | Not native | **AI-first / agentic** |
| Implementation | Long, PS-heavy | Long, PS/config-heavy | Faster, but vendor-led | Migration in progress | **Migration-assisted, capped cost** |
| Integration | Paid, SAP-centric | Paid integrations | Limited ecosystem | Legacy | **API-first, open, escrow** |
| Lock-in | High (SAP gravity) | High (MSP + config) | Medium | High (forced path) | **Low (escrow + open APIs)** |

---

## 2. Positioning & Messaging

### 2.1 Core narrative for a VMS switcher

**The villain:** A VMS commercial model where the vendor profits from your spend, hides the cost in bill rates, and bolts AI onto decades-old plumbing — then charges you to integrate, configure, and escape it.

**The shift:** AI-first software has made the old "workflow engine + services" VMS obsolete. The work a VMS does (intake, broadcast, screen, comply, coordinate, onboard, bill, report) is exactly the work that agentic AI now does autonomously.

**The hero:** EZVMS — built by ApTask, a 16+ year staffing firm — gives enterprises and MSPs an enterprise-grade, AI-first VMS for **$0**, with **no supplier funding**, **open APIs**, and **source-code escrow**. ApTask's staffing business is the revenue engine; EZVMS is the strategic wedge that earns trust and relationships.

**Three-line elevator version:**
1. Your VMS isn't free — your suppliers fund it and price it back to you.
2. EZVMS is genuinely free, AI-first, and has no stake in your spend.
3. We make money being excellent at staffing, not by taxing your program.

### 2.2 The #1 objection, answered head-on

Build a dedicated trust section titled **"If it's free, what's the catch?"** Answer each sub-objection in plain language:

**"How do you actually make money?"**
> "ApTask has been a staffing and workforce-solutions company for 16+ years. That's our business and our revenue. EZVMS is how we show enterprises and MSPs what modern, AI-first workforce technology feels like — for free. If we earn the right to be one of your staffing suppliers or your MSP, great. If we don't, you still keep EZVMS, free, forever. The software is the relationship-builder; staffing is the business."

**"What's the catch / what's the fine print?"**
> "There isn't one. EZVMS is free to use, with no per-seat, no per-req, and no percentage of your spend — ever. The only thing you might pay for is data migration off your old platform (a one-time, fixed range of $1k–$10k, only if you need our help), and an optional 'Continuous Innovation' add-on if you want to fund accelerated roadmap features. You are never required to use ApTask as a supplier. That's it."

**"Will my data be safe? Is it enterprise-grade?"**
> "Yes. Enterprise-grade security and compliance, role-based access, encryption in transit and at rest, audit trails, and SSO. Critically: **source-code escrow** — so even in a worst-case scenario, you are never held hostage by us, the way legacy VMS lock-in works. Your data is yours, exportable via open APIs, with no exit tax."

**"Why no conflict of interest, when ApTask is a staffing firm?"**
> "This is the most important point. Legacy VMS vendors are funded by a percentage of your spend — the more you spend, the more they make, so they're structurally motivated to keep your program big. EZVMS charges you nothing and charges your suppliers nothing, so we have **zero financial incentive in your spend volume**. And because we don't take a supplier funding fee, we're not skimming your supplier base either. Our supplier participation is earned on merit like everyone else's, fully transparent in the platform."

**"If I rely on a free product, what if it goes away?"**
> "Source-code escrow plus open, documented APIs plus standard data export. You are never locked in, which is more than any incumbent can say. The whole product thesis is the *opposite* of lock-in."

### 2.3 Messaging guardrails (do / don't)

- **DO** lead with the conflict-of-interest reframe, not just "free." "Free" attracts skepticism; "no stake in your spend" earns trust.
- **DO** name competitors directly on dedicated comparison pages (SEO + decisiveness). Be factual and fair — never fabricate stats.
- **DON'T** disparage suppliers or MSPs as a class — many are your buyers. Critique the *model*, not the people.
- **DON'T** overclaim AI. Show concrete agent use-cases with before/after, not "revolutionary AI."

---

## 3. The Switcher Journey & Site Information Architecture

### 3.1 Pages the NEW site needs

**A. Per-competitor "Switch from X" landing pages** (the highest-leverage new asset). One page each:
- `/switch/fieldglass`, `/switch/beeline`, `/switch/flextrack`, `/switch/iqnavigator`

Each page follows an identical, conversion-optimized template:
1. **Hero:** "Switching from [Competitor] to EZVMS" + the sharpest wedge line for that competitor (from Section 1).
2. **Side-by-side comparison table** ([Competitor] vs EZVMS) — pricing model, AI, lock-in, integration, conflict of interest, migration support.
3. **"What you keep, what you lose"** — reassure on parity (compliance, SOW, supplier mgmt, reporting) and highlight what they gain (free, agentic AI, open APIs).
4. **Migration promise** specific to that platform ("We migrate from [Competitor] — here's exactly how").
5. **ROI calculator** embedded with sensible defaults for that competitor's pricing model.
6. **Objection/trust block** ("If it's free, what's the catch?").
7. **Primary CTA:** "Get a Free Migration Assessment."

These pages also win organic search for high-intent queries like "Fieldglass alternative," "Beeline vs," "VMS migration," "IQNavigator replacement."

**B. Migration-promise section** (site-wide + per page).
- Plain-English migration playbook: assessment → data mapping → parallel run → cutover → support.
- The cost promise restated: fixed $1k–$10k range, only if needed; free assessment up front.
- A visual timeline ("most programs live in weeks, not quarters").

**C. Interactive savings / ROI calculator** — see Section 3.2 below.

**D. "How we make money / why it's really free" trust section** — the answers from 2.2, as a standalone, linkable section. This is load-bearing; it should not be buried in an FAQ.

**E. FAQ** — expanded, switcher-focused (see 3.3).

**F. Security & compliance section** — encryption, SSO, RBAC, audit logs, data residency, source-code escrow, data export/portability, sub-processor transparency. List target certifications (e.g., SOC 2) with honest status if not yet attained ("SOC 2 in progress" beats silence — but confirm real status with the team before publishing).

**G. Proof / social-proof section** — see 3.4.

### 3.2 ROI / Savings Calculator — concept, inputs, formula

**Goal:** make the hidden cost of the incumbent *visible* and convert it into a hard annual number.

**Inputs (kept short — 4 to 5 fields max):**
- Annual contingent spend ($) — slider, default $25M
- Current VMS funding/fee rate (%) — default 2.0% (clearly labeled "typical supplier-funded VMS fee, paid via bill rates"; editable)
- Number of active requisitions / month (optional, for time-savings framing) — default 100
- Current VMS subscription/license cost ($/yr) — optional, default $0 (since many are supplier-funded)
- Average hours/week your team spends on manual VMS admin — default 40

**Core formula:**
```
Direct VMS cost avoided   = Annual spend × Current fee rate %
                          + Current subscription/license cost
Agentic time savings      = (Admin hours/week × ~60% automation × $X loaded hourly cost × 52)
Total Year-1 visible savings = Direct VMS cost avoided + Agentic time savings − Est. migration cost
```

**Worked example (for the page's default state):**
- $25M spend × 2.0% = **$500,000/yr** in VMS funding fees avoided.
- Plus admin automation savings.
- Minus a one-time migration cost (e.g., $5k).
- **Headline output:** "EZVMS could save your program ~$500k+ in year one — and it's free every year after."

**UX notes:**
- Show the **funding-fee number prominently** — it's the "aha." Most buyers have never seen their VMS cost as a single dollar figure because it's hidden in bill rates.
- Add a tooltip: "Supplier-funded VMS fees are paid out of supplier margin and recovered through your bill rates — so you pay them, you just don't see them."
- Gate the *detailed PDF report / emailed breakdown* behind an email capture (lead gen), but show the headline number ungated (trust + virality).
- Per-competitor pages pre-fill the fee-rate default and label it with that competitor's model.

> **Honesty guardrail:** the fee % must be presented as user-editable and labeled "typical/illustrative," never as a claimed fact about a specific competitor's contract. The calculator computes *the user's own* number from *their* inputs.

### 3.3 FAQ (switcher-focused, with draft answers)

- **Is EZVMS really free, with no per-seat or per-req fees?** Yes — $0, forever. No seats, no req fees, no % of spend.
- **Then how does ApTask make money?** Staffing and workforce solutions — our 16-year core business. EZVMS is a strategic wedge, not a profit center.
- **Do I have to use ApTask as a staffing supplier?** No. Never a requirement. Use any suppliers you want; EZVMS stays free regardless.
- **What does migration cost and how long does it take?** Free assessment; if you need migration help, a fixed $1k–$10k range depending on data complexity. Most programs go live in weeks.
- **Is it enterprise-grade and secure?** Yes — encryption, SSO, RBAC, audit trails, [SOC 2 status], plus source-code escrow.
- **What if EZVMS is discontinued?** Source-code escrow + open APIs + full data export. You're never locked in.
- **Can it handle SOW / services procurement, not just staff aug?** [Confirm coverage with product; address explicitly — Fieldglass/IQN buyers will ask.]
- **Will it integrate with my ERP/HRIS (SAP, Workday, Oracle)?** Yes — API-first, open integrations.
- **What's the "Continuous Innovation" add-on?** Optional. If you want to fund accelerated/custom roadmap features, it's offered at ~10% of your current VMS spend. Purely optional; the core product is free without it.

### 3.4 Proof / social-proof strategy

A free, new product has no logos yet — that's the credibility gap. Strategy:
1. **Borrow ApTask's 16-year equity.** Lead with "Built by ApTask — 16+ years in staffing/workforce solutions." The parent's track record is the trust anchor.
2. **Design-partner / early-adopter program.** Recruit 3–5 reference programs (offer white-glove migration in exchange for a case study + logo). Brand them "Founding Customers."
3. **Quantified mini-cases** as they land: "Program X moved off [legacy VMS] in N weeks and eliminated $Y in funding fees."
4. **Third-party trust signals** that exist today: security certs (when earned), escrow provider name, ApTask's existing enterprise client base and tenure.
5. **Founder POV content** — a CEO/exec letter explaining *why* ApTask is giving this away. The "why free" story, told by a real founder, is itself powerful proof of intent.

### 3.5 Recommended site IA (top nav)

```
Home  |  How It Works (AI Agents)  |  Switch From ▾  |  Pricing (Free)  |  Why Free / Trust  |  Security  |  ROI Calculator  |  Book a Demo
                                    └ Fieldglass
                                      Beeline
                                      Flextrack
                                      IQNavigator
```

---

## 4. The Agentic AI Angle — making it concrete & credible

The differentiation isn't "we have AI." It's **"AI is the operator, not a feature."** Competitors have copilots and chat boxes layered on a workflow engine; EZVMS's 8 agents *do the work*. Make it tangible with named agents, a concrete use-case, and a before/after.

| # | Agent | What it autonomously does | Before (legacy VMS) | After (EZVMS) |
|---|---|---|---|---|
| 1 | Intake / Requisition | Turns a manager's plain-English need into a structured, compliant req | Manager + coordinator fill long forms; days of back-and-forth | Conversational intake → structured req in minutes |
| 2 | Supplier Broadcast | Selects and notifies the right suppliers, sets release tiers | Manual distribution rules, tiering by hand | Auto-routed by fit, performance, SLA |
| 3 | Screen & Match | Parses, ranks, and shortlists submittals against the req | Recruiters/coordinators read every resume | Ranked shortlist with rationale, instantly |
| 4 | Compliance & Docs | Checks docs, certs, right-to-work, rate-card adherence | Manual checklist, audit risk | Auto-validated, flagged exceptions only |
| 5 | Interview Coordination | Schedules across calendars, sends reminders | Email ping-pong | Self-scheduling, auto-coordinated |
| 6 | Offer & Onboarding | Generates offers, triggers onboarding tasks | Manual handoffs, dropped steps | Orchestrated, tracked to completion |
| 7 | Timesheets & Billing | Captures time, validates, reconciles to invoices | Chasing approvals, reconciliation errors | Auto-captured, validated, exception-only |
| 8 | Spend & Insights | Continuous analytics, anomaly + savings detection | Static reports, quarterly reviews | Always-on insights, proactive alerts |

**Credibility tactics on the site:**
- **Short product demo clips** per agent (15–30 sec each) — show, don't tell.
- **Before/after time framing** — "Requisition intake: ~3 days → minutes." Keep ranges directional and honest; let the product team confirm real numbers before any hard claim.
- **"Watch an agent work" interactive** — the hero already has an animated AI Autopilot console; extend it into a guided, clickable agent walkthrough.
- **Contrast slide:** "Their AI = a chatbot that summarizes a screen. Our AI = an agent that completes the task." This is the line that lands the differentiation.

---

## 5. CTAs & Conversion

### 5.1 CTA hierarchy
- **Primary CTA (everywhere):** **"Get a Free Migration Assessment"** — higher intent and more specific than "Book a Demo." It frames the switch as low-risk and concrete.
- **Secondary CTA:** **"See Your Savings"** (ROI calculator) — lower-commitment, self-serve, captures email for the detailed report.
- **Tertiary CTA:** **"Book a 30-Min Demo"** (already on site) — keep it, but make the assessment the hero action on switcher pages.

### 5.2 Lead-capture strategy
- **Ungated:** headline ROI number, comparison tables, agent demos, the "why free" story. Build trust by giving value first.
- **Gated (email, light form):** the detailed/emailed ROI PDF, the migration-assessment request, the demo booking.
- Progressive profiling: ask only what's needed at each step (email → then company/spend → then call).

### 5.3 The "Free Migration Assessment" offer (signature offer)
Package it as a named, productized offer:
> **"Free Migration Assessment: In 30 minutes, we'll map your current [Fieldglass/Beeline/etc.] setup, estimate your hidden VMS fees, and give you a fixed migration quote and go-live timeline — no obligation, no sales pressure. Keep the assessment whether or not you switch."**

This converts skeptics: it's specific, time-boxed, value-laden, and risk-free.

### 5.4 Risk-reversal guarantees
- **Price guarantee:** "Free forever. We will never charge per seat, per req, or a percentage of your spend."
- **No-lock-in guarantee:** "Source-code escrow + open APIs + full data export. Leave any time with your data."
- **Migration cost cap:** "Migration is a fixed $1k–$10k range — never an open-ended consulting bill. We quote it before you commit."
- **No-supplier-obligation guarantee:** "You are never required to use ApTask as a supplier. EZVMS stays free regardless."
- (Consider) **Parallel-run safety net:** "Run EZVMS alongside your current VMS until you're confident, then cut over." This de-risks the switch enormously for enterprise buyers.

---

## 6. Prioritized Recommendations (for incorporate/decline)

Ranked by impact-to-effort. **Must-have** items are the conversion backbone for displacement; the current site lacks all of them.

### MUST-HAVE (build first)
1. **Four "Switch from X" comparison landing pages** (Fieldglass, Beeline, Flextrack, IQNavigator). Highest leverage: SEO capture of high-intent queries + decisive head-to-head framing. The `/switch/` directory already exists and is empty — fill it.
2. **"Why It's Really Free / How We Make Money" trust section.** This is the gate every switcher must pass through. It is the single most important *new copy* on the site. Use the answers in 2.2 verbatim as a starting point.
3. **Interactive ROI / Savings Calculator** that surfaces the hidden funding-fee dollar figure. This is the emotional "aha" that converts skeptics into leads. Spec in 3.2.
4. **Reframe the primary CTA** to **"Get a Free Migration Assessment"** and productize that offer (5.3). Cheap to do, big conversion lift.
5. **Risk-reversal guarantee block** (5.4) — directly disarms the "free = risky" reflex.
6. **Concrete agentic AI section** with the 8 named agents + before/after framing + "chatbot vs. agent" contrast (Section 4). Differentiation, not just decoration.

### HIGH-VALUE (build next)
7. **Security & compliance page** (3.1.F) — enterprise buyers won't proceed without it; confirm real cert status with the team.
8. **Migration-promise section** with timeline + cost cap, site-wide (3.1.B).
9. **Founding Customer / design-partner program** + a founder "why we're giving this away" letter (3.4). Closes the no-logos credibility gap.
10. **Switcher-focused FAQ** (3.3), including the SOW/services-procurement coverage answer Fieldglass/IQN buyers will demand.

### NICE-TO-HAVE (polish / later)
11. **Per-agent demo clips / interactive agent walkthrough** extending the existing hero console (4).
12. **Parallel-run safety-net messaging** (5.4) — powerful for large, cautious enterprises; validate feasibility with product first.
13. **Comparison-page SEO build-out** (e.g., "Fieldglass alternative," "Beeline vs EZVMS" meta + content depth).
14. **Quantified case studies** — backfill as Founding Customers go live.

### Open questions to confirm with product/leadership before publishing
- **Real security cert status** (SOC 2, ISO 27001, data-residency options) — don't claim what isn't true.
- **SOW / services-procurement coverage depth** — Fieldglass and IQN buyers live here; if EZVMS is staff-aug-first, decide how to message it.
- **Escrow provider** and the exact escrow terms to name publicly.
- **Real, defensible time-savings numbers** per agent before any hard before/after claim ships.
- **Whether to name the ~2% default fee rate** in the calculator as illustrative-only (recommended) vs. citing sources.

---

### Appendix: Master message you can paste anywhere
> **"Legacy VMS platforms (Fieldglass, Beeline, Flextrack, IQNavigator) are funded by a cut of your spend — paid by your suppliers and quietly priced back into your bill rates. EZVMS is a free, AI-first VMS built by a 16-year staffing firm. No per-seat fees. No percentage of spend. No conflict of interest in how much you spend. Open APIs and source-code escrow mean no lock-in. We make money being great at staffing — not by taxing your program. Get a free migration assessment and see what your current VMS is really costing you."**
