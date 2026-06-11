# Enriched Brief: Best Inburgering Courses 2026

> **Stage 1 (Enrichment) output.** Maps evidence to every brief section before outlining. Lead with Tier 1 (product-design mechanism) and Tier 2 (early-tester + customer voice). Academic citations are capped.
> **Source brief:** `outputs/briefs/best-inburgering-courses-2026_brief.json`
> **Slug:** `best-inburgering-courses-2026` | **Format:** BOFU goal-based listicle | **Target:** ~2,700 words

---

## Evidence posture for this article

- **Tier 1 (lead with this):** `proof-library/product-design-evidence.md` — the completion criterion ("a lesson completes when you've used the words in conversation, not when you've clicked through the screens"), the two-phase lesson (practice → conversation with Joost), level-matched conversation, all 5 exam parts in one course, 43 lessons zero-to-A2. The product mechanism *is* the proof and it carries the DutchwithJoost profile, the thesis section, and the "what done means" column of the table.
- **Tier 2 (human signal):** early-tester quotes (attribute to "one learner") and `customer-intelligence/insights/` (anonymized pains, lexicon, the recognition-vs-production lived proof). Carries the thesis section's "this is real, not marketing" beat and the classroom trade-off.
- **Tier 3 (case studies):** `proof-library/case-studies/` is **empty** (only `.gitkeep`). No outcome metrics, no pass rates, no named testimonials. **Flagged as a gap** — do not invent. Where the article wants a metric (e.g., "X% still speak Dutch a year later"), it does not exist; rely on mechanism + anonymized experience instead.
- **Tier 4 (named publications / official sources):** `strategy/factual-accuracy-checklist.md` (DUO/inburgeren.nl facts on tracks, levels, funding, exam format). Citable by name (DUO, inburgeren.nl).
- **Tier 5 (capped academic backstop):** `proof-library/research-sources/`. **Planned academic-citation count for this article: 1.** One anchor only — Hopman & MacDonald (2018), "production-learning participants outperformed comprehension-learning participants on both vocabulary and grammar tests" — placed once in the thesis section to anchor the recognition-vs-production principle. Do not add a second. Do not stack.

### Cross-cutting guardrails to carry into the outline and the draft

1. **Organizing axis = retention through production, applied honestly to every course.** Not "speaking" alone: all four skills (read, listen, speak, write), recognize AND produce, payoff word is **retention** ("pass and keep it"). Advice-section test: a reader who picks a competitor must still feel well served. Never rig the retention criterion to disqualify a competitor.
2. **Factual correction the writer must respect (checklist Error 1):** the inburgering exam tests **both recognition AND production** — Speaking and Writing require producing Dutch. So the thesis is NOT "the exam only tests recognition." The thesis is that **most courses train recognition while the exam's speaking/writing parts demand production, and recognition fades after the exam even when you pass.** Frame the divide as *how courses define "done,"* not as a claim about the exam.
3. **Level nuance (checklist Error 2/3):** say "A2 (2013 Act) or B1 (2021 Act, depending on your leerroute)," not "everyone needs A2."
4. **Prices are computed for FULL A2 coverage, never teaser floors.** Label every price "as of 2026, verify before relying on it." See the per-course evidence below.
5. **Red Line 6:** never cite competitor billing, Trustpilot, subscription complaints, or review counts. "Subscription pricing" is a neutral cost fact only. DutchwithJoost now runs subscriptions too, so **never** contrast on auto-renewal and **never** claim DutchwithJoost is cheaper — the only cost angle is that a one-time, non-recurring option exists.
6. **DUO framing:** never state "we are not DUO-approved." Frame as "check your track and funding route first; the DUO loan requires a Blik op Werk certified school."
7. **Product specifics = "how DutchwithJoost is designed,"** never universal requirements.
8. **Consistent entity language across the cluster:** "production-based learning," "learn by using it," "pass the exam and keep the Dutch," "all four skills," "recognize and produce." Link UP to the pillar `what-is-production-based-language-learning` for the *why*.
9. **Anonymize all customer/community sources.** No prohibited words, no em-dashes, no semicolons.

### Verification gaps to close before publishing (flag, do not invent)

- **DutchwithJoost subscription pricing (€49/month, €39/month 6-month):** the brief carries these and marks them "verify live." `product-design-evidence.md` and `factual-accuracy-checklist.md` only document **€399 one-time / 5-year access**. The €399 one-time is verified; the two subscription rates must be confirmed against the live product/pricing page before the draft ships. The "one-time, non-recurring option" angle is the safe, verified differentiator.
- **Competitor prices** (Inburgering.org from €4.99/mo; InburgeringPrep Free/€9.99/€79; Dutch Online from €10/mo; Koentact ~€975/level; TaalBoost ~€549/level): these come from the brief's guardrails, not the factual checklist (which only carries InburgeringOnline rates and a generic classroom range of €500–€2,000). Re-verify each against the provider's live pricing page before publishing and keep the "as of 2026" caveat.
- **No case studies / outcome metrics / pass-rate data** exist. Every retention claim is carried by product mechanism and anonymized experience, never by a fabricated statistic.

---

## Section-by-section evidence map

### 1. Quick answer: the best inburgering course by goal (and whether you'll keep the Dutch) — ~320 words
**Key argument:** There is no single best course; the best one depends on your goal *and* on the question most guides skip — after you pass, can you still use Dutch? Then name each winner with computed price + one-line reason + one-line honest retention read.
**AEO directive:** This is the primary citation unit. Open with the pass-vs-keep frame in one line, then the verdict-by-goal block. Use the brief's `aeo_directives.definition_paragraph` near-verbatim as the spine.
**Evidence mapped:**
- Cheapest pass → **Inburgering.org** (~€60–120 total; recognition-based, plan to keep practicing afterward). [Tier 4 price = verify]
- Most recognized all-in-one exam prep → **InburgeringOnline** (~€210–300; comprehensive but exam-pattern focused). [Tier 4 price]
- Free to start / budget exam simulator → **InburgeringPrep** (~€80–120; simulation-led). [verify]
- In-person social + structure → **Koentact** (~€975/level; real speaking time, large groups). [verify]
- Pass and still use Dutch across all four skills → **DutchwithJoost** (one-time €399, or from €39/month; verify subscriptions live). [Tier 1 mechanism + verify price]
**Bias disclosure (required, up front):** "We build one of these (DutchwithJoost)."
**Honesty note:** every retention line must be a fair read, not a swipe. State "prices as of 2026, verify before relying on them."

### 2. Passing the exam is not the same as keeping the Dutch — ~300 words (THESIS / spine)
**Key argument:** The real fork in the market is the definition of "done." Most courses count you finished when you complete the exercises — that trains *recognition* (you can pick the right answer). A few count you finished when you can *use* the language unprompted across read, listen, speak, and write — that trains *production*. Recognition fades fast after the exam; production is what sticks. The exam itself tests both recognition and production (Speaking and Writing require producing Dutch), which is exactly why a recognition-only prep can get you through and still leave you unable to use it a year later.
**Evidence mapped (Tier 2 lived proof):**
- Anonymized (one learner, prior course): *"I did it, I finished it. But I didn't feel like I retained anything."* — `nina` insights, after a memorization-based A1 course.
- Anonymized acquaintance: someone who passed via memorization-based exam prep but **couldn't pronounce "inburgering" the day he got his passport.** Frame as the recognition-vs-production divide in the abstract — NOT as a named attack on any one competitor (Red Line 6 / advice-section test).
- Corroborating pattern across interviews: "understand a lot but speaking and pronunciation is NO" (`monika`); "I can only say: I have a green apple" after Duolingo (`anna`); can't retain vocabulary/conjugations from an intensive course (`molly`). Use one, lightly, to show the gap is widespread.
**Tier 1 anchor:** the completion criterion — "lessons complete when you can have conversations on the topic, not when you've finished the exercises." This is the section that makes every later ranking make sense.
**Academic citation (the single one for this article):** Hopman & MacDonald (2018) — production-learning beats comprehension-learning on both vocabulary and grammar. State the plain-language point first, add the source as one anchor, then return to product/experience. Do not add a second citation anywhere in the article.
**Link UP:** `what-is-production-based-language-learning` (the pillar = the mechanism/why). Keep entity language identical. [registry: planned → link becomes plain text at publish]

### 3. First, check your track and funding route — ~260 words
**Key argument:** Before comparing courses, know what *you* need. Two things decide your field. Frame entirely as helping the reader, never as a disclaimer about us.
**Evidence mapped (Tier 4, factual-accuracy-checklist.md / inburgeren.nl):**
- **Required level by law:** 2013 Act → A2 standard. 2021 Act → municipality assigns a leerroute: B1 track (B1), Education track O (B1/B2), Self-reliance track Z (A1, A2 optional). So "confirm your required level" before buying.
- **Funding route:** if you pay with the **DUO loan**, you must use a **Blik op Werk certified school**, which narrows the list. Self-paced courses can be excellent self-funded options or supplements even when not on the funded-provider list. (Voluntary integrators / naturalisers can also borrow from DUO within 3 years of registering.)
- **Naturalisation context (optional, light):** to become Dutch you must pass A2 (B1/B2 staatsexamen alternative); a bill may raise this toward B1 — "A2 for now," re-verify.
**DUO framing rule:** never "we are not DUO-approved." Say "check your track and funding route first."
**Links:** `a2-vs-b1-inburgering-which-level` and `inburgering-course-cost`. [registry: both planned → plain text at publish]

### 4. How we compared them (and our bias) — ~200 words
**Key argument:** State the comparison criteria openly so the section reads as advice, then disclose bias so the reader can weight it.
**Criteria to list (must pass the advice-section test — useful even if the reader picks a competitor):**
1. Price to complete A2 (computed from published plans).
2. What's included — all 5 exam parts? all four skills? writing and speaking feedback?
3. How "completion" is defined — exercises finished vs language used. [Tier 1 framing]
4. Schedule fit (self-paced vs fixed times).
5. The retention question — will you still be able to use Dutch afterward?
**Bias disclosure (required):** "We build DutchwithJoost, and the production/retention criterion is one we care about — here so you can weight it yourself." Make explicit that retention is a fair dimension applied to every course, not a trap.
**Evidence:** comparison best-practice + Tier 1 completion definition. No external citation needed.

### 5. Inburgering.org: cheapest route to the certificate — ~220 words
**Verdict line:** Best for budget-first buyers who mainly need the certificate.
**Strengths (state genuinely):** lowest price in market, broad level coverage, closely replicates the DUO exam format.
**Retention read (fair):** competes on price with the same recognition model as most self-paced courses — strong for *passing*; on the retention axis it leaves you to keep practicing on your own afterward.
**Who it's for:** budget-first buyers with a separate plan to keep using Dutch.
**Evidence mapped:** Computed price from €4.99/month, ~€60–120 total to A2 (Tier 4, **verify live**). No billing/Trustpilot mention (Red Line 6) — assess method and retention only.

### 6. InburgeringOnline: the recognized all-in-one exam prep — ~240 words
**Verdict line:** Best for buyers who want the established, comprehensive exam-prep package.
**Strengths (state genuinely):** most recognized self-paced option, frequently recommended in expat communities, comprehensive one-stop coverage of all exam components, NT2-teacher founder, recently added AI scoring.
**Retention read (fair, neutral):** subscription pricing (stated as a neutral cost fact only); on the retention axis it trains recognition and exam patterns more than spontaneous production, so "pass but can't use it yet" is a documented pattern for recognition-led prep generally.
**Evidence mapped:**
- Price (full A2 coverage): €49.95/mo monthly, €34.95/mo 6-month (~€210), €24.95/mo 12-month (~€300). **Never the single-module teaser floor** (€8.95–€14.95 is Reading-only). (Tier 4, checklist-confirmed rule.)
- Customer-voice available: `nina` — "InburgeringOnline is just a bunch of things to memorize... a cheat sheet to the exam." **Use with care.** Per Red Line 6 and the advice-section test, do NOT deploy this as a quality/billing attack. If used at all, frame the *category* pattern (recognition-led prep) fairly, not a swipe at this named competitor. Safer: carry the lived "couldn't pronounce inburgering" beat in Section 2 (de-named) and keep this profile neutral.
**Link:** `dutchwithjoost-vs-inburgeringonline` deep-dive. [NOT in content-registry → will resolve to plain text at publish; add to registry when that article is published, then `/finalize-links --all`]

### 7. InburgeringPrep: free to start, cheap exam simulator — ~190 words
**Verdict line:** Best for price-sensitive buyers who want to test-drive before paying.
**Strengths:** free tier to try, low monthly price, full exam simulator matching the DUO format, covers all 5 sections.
**Retention read (fair):** exam-simulation focus, recognition-based — retention depends on you producing the language elsewhere.
**Evidence mapped:** Free €0; Pro €9.99/mo; Pro Annual €79/yr; ~€80–120 to A2 (Tier 4, **verify live**).

### 8. Koentact (and classroom options): in-person, social, structured — ~250 words
**Verdict line:** Best for people who learn best with others and want structure.
**Strengths (credit genuinely — this is the advice-section test in action):** real teacher, peer accountability, in-person social energy, networking, field trips, and **real speaking time** — a genuine retention plus over pure recognition apps.
**Trade-offs (neutral):** a group of around 12 is large enough that you may not get to ask your own questions; fixed schedules; highest price bracket. Mention TaalBoost as a cheaper intensive alternative.
**Evidence mapped:**
- Price: Koentact ~€975/level; TaalBoost ~€549/level (Tier 4, **verify live**). Generic classroom range €500–€2,000 (checklist) as context.
- Anonymized customer voice (the "big group" trade-off, used fairly): *"In a class of 12, the teacher can't give you attention full time"* (`nina`); corroborated by `molly` (group of 12 too large to ask questions, so she stays lost) and `alysa` (genuinely prefers in-person, peer interaction drives her — use to credit the classroom upside honestly). "Speaking time is divided among students" (neutral, per checklist).

### 9. Dutch Online: self-paced with some live speaking — ~180 words
**Verdict line:** Best for self-paced buyers who still want some human speaking time.
**Strengths:** the self-paced option that adds scheduled live speaking classes — which most self-paced courses lack and which helps retention.
**Trade-offs (neutral):** live sessions reintroduce scheduling; the lifetime price is not published.
**Evidence mapped:** from €10/month; lifetime one-time amount **not public — say so** (Tier 4, **verify live**).

### 10. DutchwithJoost: pass the exam and keep the Dutch — ~280 words (Feature → Benefit → Proof, bias-disclosed)
**Verdict line:** Best to pass the exam and still be able to use Dutch across all four skills.
**Feature (Tier 1, "how DutchwithJoost is designed," not universal rules):** a self-paced course where a lesson is complete only once you've **used the new vocabulary in conversation** with Joost, who speaks at your level and only uses words you've already practiced. Two phases per lesson: structured practice (read/speak → listen/speak → write) then a conversation that proves you can use it. Level-matched speaking practice and writing feedback. Covers all 5 exam parts across all four skills. 43 lessons, zero to A2.
**Benefit:** you don't memorize Dutch to pass and forget it — you learn it by using it, so you pass AND keep it: read, listen, speak, write; recognize and produce.
**Proof (Tier 2, attribute to "one learner"):**
- *"The words that you learn, you use. If I'm using them in a sentence and I know the context, it helps me communicate."*
- *"There is no memorizing, which I really like."*
- *"I don't have the cognitive load of trying to engineer my own lesson. It's guided."*
- *"Joost knows your level. He's not gonna use C2-level Dutch to reply to you."*
- Exam Pass Guarantee (BOFU-appropriate): complete all lessons, fail the exam, get refunded. (Keep guarantee math off-page.)
**Honest about who it's NOT for:** classroom-lovers, cheapest-certificate-only buyers, and people already at A2 who need B1 now.
**Pricing (BOFU-appropriate):** one-time **€399 (5-year access)** [verified], plus **€49/month** and **€39/month 6-month** [**verify live**]. The distinctive part is the **one-time, non-recurring option** — do NOT frame as cheaper than other self-paced courses and do NOT contrast on subscriptions/auto-renewal.
**Links:** `how-does-dutchwithjoost-work` [planned → plain text] and `who-is-dutchwithjoost-not-for` [**published → resolves to /blog/who-is-dutchwithjoost-not-for**].

### 11. Side-by-side comparison table — ~160 words (citation unit)
**Key argument:** One scannable table; the "can you still use Dutch after the exam" column is the differentiated, quotable row.
**Columns:** Course | Format | Price to A2 (computed, "as of 2026") | What "done" means (exercises finished vs language used) | Skills practiced (recognition only vs all four / production) | Can you still use Dutch after the exam | Best for.
**Evidence:** all figures must match the profiles above exactly. Retention column stated fairly per course (e.g., Inburgering.org/InburgeringPrep/InburgeringOnline = recognition-led, keep practicing; Koentact/Dutch Online = some live speaking helps; DutchwithJoost = completion requires production). **Verify all prices before publishing.**

### 12. FAQ — ~200 words (humans + featured snippets; no schema dependency)
**Self-contained answers, consistent entity language.** Map each to evidence already gathered:
- **Which inburgering course actually teaches you Dutch?** → the production-based answer: a course where completion requires using the language across all four skills (DutchwithJoost is built that way); name the honest alternatives by goal.
- **Will I forget Dutch after passing the inburgering exam?** → recognition fades, production sticks; you keep what you've actually used. (Tier 1 + Tier 2; no fabricated stat.)
- **What is the cheapest inburgering course?** → Inburgering.org (~€60–120), with the honest caveat that you'll need to keep practicing to retain it.
- **Are expensive inburgering courses worth it?** → depends on whether the spend buys retention (real speaking time, production) or just exam patterns; classroom range €500–€2,000.
- **Can I use the DUO loan for any inburgering course?** → only at a Blik op Werk certified school; confirm your track and funding route first.

---

## Evidence gap summary (for the consolidated report)

- **Outcome metrics / pass rates / case studies:** none exist (`proof-library/case-studies/` empty). Retention claims rest on product mechanism + anonymized experience only.
- **DutchwithJoost subscription prices (€49/mo, €39/mo 6-month):** unverified in proof library; brief-sourced; **verify live before draft ships.**
- **All competitor prices:** brief-sourced (not in the factual checklist except InburgeringOnline); **re-verify each provider's live pricing** and keep the "as of 2026" caveat.
- **No named testimonials:** all customer voice is anonymized to "one learner" / category patterns.

**Proceeding automatically to Stage 2 (Outline).**
