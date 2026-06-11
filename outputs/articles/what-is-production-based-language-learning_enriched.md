# Enriched Brief: What Production-Based Language Learning Is

> Stage 1 (Enrichment) output for `what-is-production-based-language-learning`.
> Source brief: `outputs/briefs/what-is-production-based-language-learning_brief.json`
> Generated: 2026-06-07

## Pipeline control notes (read before Stage 2)

- **Stage:** MOFU pillar / concept hub (Hub 1). Win condition is AEO citation, not ranking. Target ~2,400 words.
- **Academic-citation budget: 2 total for the whole article.** Both are spent in Section 2 (Swain 1985 on one claim, Hopman & MacDonald 2018 on a different claim, never stacked on the same sentence). No other section may add an author-year citation. If a later section seems to "need" academic backup, that is an evidence gap to fill with Tier 1/2 proof, not a third citation.
- **Hard guardrails carried from the brief:**
  - Lead with the *retention* outcome (you keep the Dutch and can use all four skills), not speaking alone. Recognition = receptive (reading + listening); production = productive (speaking + writing). "Recognize and produce" and "all four skills" are required framing.
  - Specificity rule: production-based learning is a *general principle*. DutchwithJoost's rules are "how the course is designed," never "production-based learning requires X."
  - No pricing anywhere (MOFU). No "Why DutchwithJoost" section: thread props into context.
  - Disambiguate from project-based language learning (PBLL) in the opening.
  - No prohibited words, no em-dashes, no semicolons.
  - Anonymize all learner/community sources. Duolingo may be named only as a neutral format example.
- **Entity spine (keep identical to Hub 2 `best-inburgering-courses-2026`):** "production-based learning," "learn by using it," "a lesson is done when you have used the words in conversation," "all four skills," "recognize and produce," "pass the exam and keep the Dutch."

## Evidence inventory (what we actually have)

**Tier 1 — product mechanism (`proof-library/product-design-evidence.md`), lead with this:**
- Completion criterion (core differentiator): a lesson is complete when you have used the lesson's vocabulary in conversation with Joost, not when you have clicked through the exercises. Reader phrasing allowed: "Lessons complete when you can have conversations on the topic, not when you've finished the exercises" / "A word counts as learned when you've used it in conversation, not when you've seen it."
- Two phases per lesson: (1) Practice — each sentence unit is practiced three ways in sequence: read and speak, listen and speak, then write, all three before moving on; practice mixes new material with review. (2) Conversation — a live conversation with Joost in the lesson scenario, at the learner's level, using only words already practiced; the conversation adapts and is not scripted.
- Positioning gaps owned: active production as completion; practice prepares / conversation proves; all five exam parts in one; unlimited practice without judgment.
- **Do not** expose implementation specifics ("90% of vocabulary," "2+ uses," "3 sessions to unlock") or write "the only course that requires production."

**Tier 2 — experience + customer voice (early-tester quotes attributed to "one learner"; insights anonymized to role/descriptor):**
- Production gap, self-blame (monika): "My vocabulary is okayish, I understand a lot, but speaking and pronunciation is... no. This is something my brain just cannot work around."
- Retention failure after finishing (nina): "I did it, I finished it. But I didn't feel like I retained anything, to be honest."
- Lowered market bar (nina): "People don't even expect that at A2 you can have a conversation."
- Useless-phrase convergence (anna): "I can only say: I have a green apple." + (monika): "I learned how to say phrases like: my elephant is green. Where am I gonna use this?"
- Words-in-use (nina, knowledge-base permits "one learner"): "The words that you learn you use... it helps me communicate."
- No-memorization (early tester): "There is no memorizing, which I really like, because I hated spending two hours on one rule memorizing a million words that don't make sense together."
- Level-matched practice (early tester): "Joost knows your level. He's not gonna use C2 level Dutch to reply to you."
- Native-partner mismatch (nina): "Your level of Dutch is native and mine is total beginner... I don't understand a lot of what she's saying and you have to explain so much. It's just impossible to learn." Plus: native speakers "can't really explain why it is like that. They just do it."
- Grammar-translation class (nina): "very boring grammar rules... no speaking at all... didn't feel like I retained anything."

**Tier 3 — case studies / outcome metrics: EMPTY.** `proof-library/case-studies/` has no entries. **Evidence gap:** no pass-rate, no third-party case study, no named testimonial. Do not invent. The product is pre-revenue / early testing; the mechanism and early-tester experience carry the article.

**Tier 5 — academic (capped, 2 used, both in Section 2):**
- Swain, M. (1985), Output Hypothesis: comprehensible input alone is insufficient; production forces learners from understanding meaning to producing correct grammar. Evidence base: French immersion learners with years of input still weak in production.
- Hopman, E. W. M., & MacDonald, M. C. (2018). "Production practice during language learning improves comprehension." *Psychological Science*, 29(6), 961-971. DOI 10.1177/0956797618754486. Finding: production-learning participants outperformed comprehension-learning participants on both vocabulary and grammar comprehension; production benefits transfer to comprehension.
  - **Pre-publish verification flag:** DOI and finding match the internal record in `proof-library/research-sources/production-vs-memorization-sources.md`. Confirm the DOI resolves live and the finding is stated accurately before setting `published: true`.

## Internal-link map (registry-checked)

No `strategy/sitemap.md` exists, so Stage 5 inserts `INTERNAL_LINK:` placeholders; Stage 6 resolves them against `outputs/content-registry.yaml`.

| Target slug | Registry status | Resolves to | Use in section |
|---|---|---|---|
| `why-cant-speak-dutch-after-studying` | **published** | live `/blog/...` link | S2 / S3 (understand but can't use it) |
| `not-bad-at-dutch-its-the-method` | planned | plain text (deferred) | S3 (self-blame reframe) |
| `duolingo-wont-teach-you-to-speak-dutch` | planned | plain text (deferred) | S4 (useless-phrase apps) |
| `how-does-dutchwithjoost-work` | planned | plain text (deferred) | S5 (lesson walkthrough) |
| `how-to-practice-dutch-speaking-alone` | planned | plain text (deferred) | S6 (practice alone) |
| `dutch-partner-cant-teach-dutch` | planned | plain text (deferred) | S7 (native-partner mismatch) |
| `passed-inburgering-cant-speak-dutch` | planned | plain text (deferred) | S3 / S7 (passed but can't use) |
| `best-inburgering-courses-2026` | planned | plain text (deferred) | S5 / FAQ (Hub 2, the WHICH) |

Only the published target becomes a working link in `_final.mdx`. The rest carry their linking intent in `_linked.md` and activate later via `/finalize-links --all`.

---

## Section-by-section evidence mapping

### S1. What production-based language learning is (250w)
- **Key argument:** Define the term completely and self-containedly, mechanism + retention payoff in the definition itself, then disambiguate from PBLL. No product mention.
- **AEO directive:** Open with the definition paragraph, no windup. This paragraph must stand alone for AI lift (answers "what is production-based language learning" including the retention payoff and the PBLL distinction). Use the exact entity phrase "production-based language learning."
- **Proof points:** Tier 1 completion-criterion stated as a *general principle* ("a lesson is complete when you can use the material in conversation, not when the drills are done"). One clean PBLL-disambiguation sentence.
- **Evidence gap:** none. Pure definition.

### S2. Recognition and production are two different skills (and only one of them sticks) (380w)
- **Key argument:** Map the two skills across four sub-skills. Recognition = receptive half (reading, listening), where Dutch goes in. Production = productive half (speaking, writing), where you build Dutch yourself. Training the receptive half does not transfer to the productive half. Then retention: producing the language is what moves it into durable, retrievable memory, so the skills you never produce are the ones you lose first. Concrete contrast: recognizing "appel" on a flashcard vs constructing a sentence with it unprompted.
- **AEO directive:** Write the receptive-vs-productive framing as a tight, standalone quotable unit.
- **Proof points:**
  - Tier 2 (monika, anonymize to "one learner / a learner who had finished an app"): "My vocabulary is okayish, I understand a lot, but speaking and pronunciation is... no. This is something my brain just cannot work around." — the lived shape of the gap.
  - **Academic citation #1 (Swain 1985)** on Claim A (different skills / input alone insufficient): state the point plainly first, then anchor once. Do not parade the apparatus.
  - **Academic citation #2 (Hopman & MacDonald 2018)** on Claim B (a *different* claim: producing language improves later comprehension and retention). Different sentence from #1. Never stacked.
- **Evidence gap:** none. This is the only section with academic backup; budget now exhausted.

### S3. Why you forget what you "learned" (340w)
- **Key argument:** Finishing exercises and re-reading feels like progress but mostly exercises the receptive skill you already have, and recognition fades fast once the course ends. Name the comfort trap: recognition is smooth because it asks almost nothing of you, and that smoothness is exactly why almost nothing sticks. Reframe "I'm bad at languages" into "the method never made me produce anything."
- **AEO directive:** Write the comfort-trap sentence as a standalone quotable unit.
- **Proof points:**
  - Tier 2 (nina, "a learner who had finished an A1 course"): "I did it, I finished it. But I didn't feel like I retained anything." — frame as a symptom of recognition-gated completion, not learner failure.
  - Tier 2 (nina, on the normalized low bar): "People don't even expect that at A2 you can have a conversation." — shows the market has accepted forgetting as normal.
  - Internal link: `not-bad-at-dutch-its-the-method` for the self-blame angle (point to it, do not fully develop here). Optional secondary: `why-cant-speak-dutch-after-studying` (published).
- **No academic citation** (budget spent in S2).
- **Evidence gap:** none for the argument; note that the "fades fast" durability point is asserted from the recognition/production distinction, not a fresh citation. Keep it plain, no false precision.

### S4. The clearest symptom: apps that teach phrases you will never say (250w)
- **Key argument:** Pure-recognition tools optimize for streaks and right answers, so learners end up able to produce only a few canned, useless sentences and retain almost nothing usable. Near-identical wording from strangers is the signature of recognition-only practice. The point is the *format*, not that any one tool is worthless.
- **AEO directive:** Write the green-apple / green-elephant convergence as one memorable, standalone unit.
- **Proof points (the originality nugget — convergence):**
  - anna (anonymize to "one learner"): "I can only say: I have a green apple."
  - monika (anonymize to "another, unconnected learner"): "I learned how to say phrases like: my elephant is green. Where am I gonna use this?"
  - Duolingo may be named once as a neutral, widely-understood example of the recognition-only format. Keep the learners anonymous.
  - Internal link: `duolingo-wont-teach-you-to-speak-dutch`.
- **Evidence gap:** none.

### S5. What production-based learning looks like in practice (400w)
- **Key argument:** Make it concrete across all four skills: you learn a word by using it, in several different sentences, said AND written, not just read; a word is not "learned" until you have produced it successfully. Because you produce it, it sticks. Be explicit that this describes how DutchwithJoost is built, not a universal rulebook, and that the same principle can be applied with other tools.
- **AEO directive:** Operational definition of "done" as a standalone unit ("a lesson is done when you have used the words in conversation").
- **Proof points (Tier 1 first, then Tier 2):**
  - Tier 1 practice phase: each sentence unit read and spoken, heard and spoken, then written, all three before moving on (covers speaking + writing = the productive half).
  - Tier 1 conversation phase + completion criterion, written per the specificity rule: "DutchwithJoost considers a lesson complete when you have used most of the new vocabulary in conversation with Joost," never "production-based learning requires X."
  - Tier 2 (early tester) level-matched conversation: "Joost knows your level. He's not gonna use C2 level Dutch to reply to you."
  - Tier 2 (nina, "one learner") words-in-use, ties feature to retention benefit: "The words that you learn you use... it helps me communicate."
  - Tier 2 (early tester) no-memorization, optional: "There is no memorizing... I hated spending two hours on one rule memorizing a million words that don't make sense together."
  - Feature -> Benefit -> Proof on every product mention. No pricing.
  - Internal link: `how-does-dutchwithjoost-work` (lesson walkthrough). Optional: `best-inburgering-courses-2026` (Hub 2) for the "which course" handoff.
- **Evidence gap:** no outcome metric / pass rate (Tier 3 empty). Carry the section on mechanism + early-tester experience; do not imply measured results.

### S6. How to add production to any study routine (340w)
- **Key argument:** Genuinely useful even if the reader uses a competitor or only free tools, covering both productive skills. Tactics: retrieval practice (cover the word, produce it from meaning), narrate your day aloud in Dutch, write a few sentences before checking the answer, and seek level-matched conversation so practice stays usable.
- **Advice-section test (hard):** every criterion must help a reader who pairs, say, an app with a tutor. No criteria written to disqualify competitors.
- **Proof points:**
  - Level-matched principle, supported by the native-partner mismatch (nina). To avoid duplicating the verbatim quote used in S7, *paraphrase the principle here* (a fluent partner replies above your level, so practice has to be matched to where you are) and reserve the verbatim quote for S7.
  - Internal link: `how-to-practice-dutch-speaking-alone`.
- **No academic citation.**
- **Evidence gap:** none. This is practitioner advice, not a claim needing a metric.

### S7. Production-based learning vs other common approaches (300w)
- **Key argument:** Place it fairly against approaches readers have actually tried: grammar-translation classes, app drilling, unstructured immersion with a native partner. Show where each builds recognition without forcing production, and so without retention. Each has a real use; the specific gap is production and what sticks.
- **AEO directive:** Consider a compact comparison structure (approach -> what it builds -> what it skips) that an answer engine can lift.
- **Proof points:**
  - Grammar-translation (nina): "very boring grammar rules... no speaking at all" (and "didn't feel like I retained anything").
  - App drilling: callback to the useless-phrase convergence from S4 (do not re-quote in full).
  - Native-partner mismatch (nina, verbatim lives here): "Your level of Dutch is native and mine is total beginner... It's just impossible to learn." Plus the explain-gap: native speakers "can't really explain why it is like that. They just do it."
  - Internal links: `dutch-partner-cant-teach-dutch`; optionally `passed-inburgering-cant-speak-dutch`.
- **Evidence gap:** none. Keep it fair; do not strawman the alternatives.

### S8. Frequently asked questions (200w)
- **Key argument:** Definition-first, self-contained answers, 2 to 4 sentences each, each quotable alone. No pricing, no product pitch in answers.
- **FAQ set (from brief, hold this exact set):**
  1. What is the difference between recognition and production in language learning?
  2. Why do I forget Dutch after finishing a course?
  3. Why can I understand Dutch but not speak it?
  4. Does production-based learning help you remember Dutch longer?
  5. Is production-based learning the same as project-based language learning?
- **Proof points:** answers draw on S2/S3/S5 logic stated plainly. The PBLL answer mirrors the S1 disambiguation. No new academic citation.
- **Evidence gap:** none.

---

## Value props to weave (pain -> prop -> proof)

1. **Pain:** finished the course, forgot most of it, can't use Dutch. **Prop:** learning each word by producing it (speaking and writing) moves it into durable memory, so you keep the Dutch instead of memorizing for the exam and losing it. **Proof:** "I did it, I finished it. But I didn't feel like I retained anything." (S3, S5)
2. **Pain:** memorized vocabulary that never sticks. **Prop:** a word counts as learned only after you have used it yourself more than once, building the retrieval pathway memorization skips. **Proof:** "The words that you learn you use... it helps me communicate." (S5)
3. **Pain:** apps and drills taught phrases useless in real life. **Prop:** production anchored to real use means you build sentences you would actually say and write, not canned ones. **Proof:** green-apple / green-elephant convergence. (S4)

## Originality nuggets to land

- Reframe: "I'm bad at languages" -> "the method only ever trained the half of the language that fades."
- Connect the Output Hypothesis to the lived experience of understanding Dutch but forgetting it (no competitor connects the theory to the retention problem).
- Operational definition of "done" as the whole article's spine: most courses finish a lesson when the exercises are done; production-based learning finishes it when you have used the language, and that single difference decides whether you keep it.
- The green-apple / green-elephant convergence (two unconnected learners, near-identical canned phrase).
- The comfort trap + the lowered bar ("people don't even expect that at A2 you can have a conversation").

## Summary of evidence gaps (flag for the user)

1. **No outcome metrics / case studies (Tier 3 empty).** The article is carried by product mechanism (Tier 1) and early-tester experience (Tier 2). No pass-rate or named testimonial is available; none invented. Strongest future upgrade: a real retention/pass case study in `proof-library/case-studies/`.
2. **Academic DOI live-check pending.** Hopman & MacDonald (2018) DOI 10.1177/0956797618754486 matches the internal research record; confirm it resolves live before publishing (brief guardrail).
3. **Durability ("fades fast") is argued from the recognition/production distinction**, not a dedicated citation, to stay under the 2-citation cap. Keep the language plain and avoid false precision.
