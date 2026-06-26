# DutchwithJoost — AEO Action Plan

_Compiled 2026-06-25. Working reference for Wesley + Claude. Scope: written articles and the off-page work that supports them. Instagram and Remotion are excluded except where they feed AEO. Sources for every claim here are the mid-2026 research we ran (Ahrefs, Princeton GEO, Semrush, SparkToro, Google SQRG, 5W EdTech index)._

## How to use this doc

- This is the shortlist of what actually moves AEO for this brand, ranked by leverage.
- "Status" tells us what the system already does versus what is new to build.
- The last section ("Where we start together") is the running to-do. Update it as we go.

---

## The one mental model (read this first)

AI answer engines can only cite content that is **public, crawlable, and text-rich** (no login, no paywall). That splits everything into two buckets:

- **AEO channels (get you cited):** your own site, Reddit, YouTube (brand mentions in titles, transcripts, descriptions), authoritative .nl / expat publications, review and comparison pages.
- **Audience and brand channels (grow the following, do NOT get cited):** private Facebook groups, Instagram. They help AEO only indirectly by raising branded search (a moderate signal), and they are your best source of customer intelligence and survey respondents.

Do not expect Instagram or private groups to get you cited. Do use them to build the audience you then survey, and to learn the exact phrases real expats use, which you then publish on public surfaces.

**The niche edge (a targeted bet, not a blanket one):** engines answer in the query's language and prefer same-language sources (Profound, 3.25B-citation study), so Dutch content is what gets cited for Dutch-language queries about the civic process (inburgering, DUO, IND, KNM), where the authority layer is already Dutch. The "Dutch is less saturated" upside is directionally supported but vendor-heavy and not Dutch-specific, so treat it as a bet to measure, not a fact. Scope it: human-quality Dutch on the cornerstone civic pages only, never machine-translated volume (a flagged spam pattern). Rule of thumb: English gets you discovered, Dutch gets you cited locally.

---

## Priority table

| # | Action | Why it matters | Impact | Effort | Status |
|---|--------|----------------|--------|--------|--------|
| 1 | Fix authorship and E-E-A-T (Wesley byline + bio + NT2 reviewer + schema) | Experience now outweighs credentials. YMYL needs visible trust. Cheap, gates the credibility of everything you publish. | High | Low | Partial |
| 2 | Original research and data, across the funnel (run as a **motion**) | Original statistics are the best-supported on-page lever (+41%, Princeton GEO, measured as prominence inside a generated answer). Data content earns ~3-4x more links than opinion/how-to (the "6.4x" figure is unverified, do not cite it). Not just TOFU: works at MOFU and BOFU. Biggest new-content win. | Very High | Medium | New |
| 3 | Confirm site is fully extractable, then go bilingual | Engines cite what they can read and what ranks. Pipeline already does most of this. Dutch versions open the less-crowded field. | High | Medium | Mostly built |
| 4 | Off-page presence: **Reddit motion** + **earned-mentions (digital PR) motion** | Third-party brand mentions are the top correlate of AI visibility, ~2x Domain Rating (Ahrefs 75k). Reddit is strongest on Perplexity and "best X" sole-source queries (volatile, not always #1 on Google AIO); editorial .nl mentions are a separate, repeatable play. | High | Medium (ongoing) | New |
| 5 | **YouTube mentions motion** (repurpose learning banks + get featured) | YouTube *mentions* (brand in title, transcript, description) are the single strongest *correlate* of AI visibility (0.737, Ahrefs 75k) — a marker of brand prominence, not a guaranteed lever. Slow but compounding. Banks already exist. | Med-High | Medium | New |
| 6 | Stand up a measurement loop | You are optimizing for AEO with no way to know if it works. | Medium | Low | New |
| 7 | Correct the FAQ-schema belief; keep Article/Author/Org schema | The FAQ-schema citation claim is outdated (rich results deprecated May 2026; engines ignore JSON-LD). Stops wasted effort. | Low | Very Low | Fix existing |
| 8 | Allow AI search crawlers in robots.txt; check the CDN | Accidental blocking is the most common cause of AI invisibility. Pure downside protection. | Low-Med | Low | Check |

**Do first:** #1 (cheap, high) and #2 (the big content lever, and what we'll build together). Everything else follows.

**Several of these run as motions, not one-off tasks.** A motion is a repeatable play with a cadence; it lives in `motions/` as its own runbook (objective, cadence, process, guardrails, success metric). The AEO motions, ranked by leverage:

- `motions/digital-pr.md` — earned .nl / expat editorial mentions (#4). The highest-leverage off-page play; third-party mentions are the top AI-visibility correlate.
- `motions/original-research.md` — proprietary and analyzed-public data assets across the funnel (#2). Produces the hooks the digital-PR motion distributes.
- `motions/reddit-presence.md` — genuinely helpful community answers at a cadence (#4).
- `motions/youtube-mentions.md` — get the brand name into YouTube content (#5).
- `motions/ai-visibility-tracking.md` — the monthly measurement loop (#6); lightweight.

**One-offs, not motions** (do once, do not dress up as recurring): author / E-E-A-T setup, robots.txt, the GA4 AI-referral segment, the schema-belief fix, and the initial Dutch translation of the cornerstone pages.

---

## 1. Authorship and E-E-A-T

Being a non-teacher is not a weakness, it is the edge. In 2026 demonstrated Experience outweighs formal credentials, because experience is the thing AI cannot fake.

- **Byline:** every article authored by "Wesley Lam, Founder." Real photo, real bio.
- **The bio is the builder-origin story:** you watched your co-founder struggle with memorization-based inburgering prep, diagnosed that it does not produce usable language, and built a course designed around producing the language. That specific first-hand narrative is stronger E-E-A-T than a teaching certificate.
- **Joost stays a mascot only.** He is the in-course teaching persona and the face of the Instagram reels. He is never the bylined human author and never gets a fabricated headshot presented as real staff. (Bylining a fictional persona is the exact "fake author / fake credentials" pattern Google's January 2025 rater guidelines flag as deceptive, and it is worst on YMYL.)
- **Add a real, named NT2-certified Dutch teacher as a "Reviewed by" reviewer**, with a visible "Last reviewed [date]" line. Experience from Wesley, formal expertise from the reviewer. This is the standard YMYL trust pattern.
- **Make the author entity machine-verifiable:** an author page at a stable URL, `Person` schema with `sameAs` pointing to LinkedIn + Instagram + any podcast or guest appearances, referenced from every article. `reviewedBy` schema pointing to the reviewer's own entity.

Next action: draft Wesley's author bio from the origin story (Claude can do this in the voice-guide style).

---

## 2. Original research and data (the headline new content)

Original data does not require student-outcome metrics. Two valid forms, both citable:

1. **Primary data:** your own survey of your audience. Most novel and link-worthy.
2. **Original analysis of public data:** compile, analyze, and visualize numbers that are scattered or buried (DUO / CBS) into an asset that did not exist before. The numbers are public; the asset is original.

The line that matters: **add, do not restate.** "According to a study, 60% of expats…" earns nothing. Assembling and visualizing official data into the definitive hub earns links and citations.

**Original research is not only a TOFU link-bait report. It works at every funnel stage, and for a conversion-focused brand the MOFU/BOFU versions matter more.** What changes is the question the data answers:

- **TOFU (awareness):** a broad "state of learning Dutch" stats report. Earns the most external links and press/.nl mentions; low buyer intent. (This is the survey, 2a.)
- **MOFU (JTBD, problem-aware):** data that answers what someone actively preparing asks. "How many months does it actually take to pass A2?" (your survey panel, split by native language). "Which exam part do people fail most?" (DUO publishes pass rates per part; nobody analyzes them into an answer). "How often do Dutch people switch to English on learners?" (survey stat). These get cited on the high-intent informational queries where buyers live, and they carry your differentiation.
- **BOFU (decision):** the maintained course comparison (2b) is itself BOFU original research, original because nobody keeps it current. "Full cost to pass inburgering across every route." Your own pass-rate data, once you have it. AI increasingly cites a single source on "best X / vs" queries, so being the maintained data source there is a moat.

Defensibility of data sources, rising: public/official (DUO, CBS, IND) → structured competitor testing you run → your audience survey → your own product/outcome data (tier-1, strongest E-E-A-T). Trade-off: TOFU reports earn more links, MOFU/BOFU data earns fewer links but more conversion-relevant citations. Run one TOFU flagship as the mention magnet, weight the rest toward MOFU/BOFU. This whole play runs as a **motion** (`motions/original-research.md`).

### 2a. Audience survey (primary, highest upside)

The hard part of survey research is a credible, hard-to-reach sample. You already own one: expats learning Dutch on Instagram and in the FB groups. This is where the private/audience channels finally pay into AEO.

- **Sample target:** 300 to 600 niche respondents is genuinely citable; aim for ~1,000 for press pickup (IamExpat, DutchReview).
- **Recruit from:** Instagram + Facebook groups + email list.
- **Candidate questions (pick the ones with surprising answers):** % who failed a specific exam part on the first try, biggest fear before the speaking exam, average months of study before booking, what made them give up on a previous method, how often Dutch people switch to English on them.
- **Publish as:** one flagship stats report (the citable asset) plus shorter articles that each pull one stat. Add named expert quotes from the NT2 reviewer (the +28% quotes lever) in the same report.
- **Honesty rules:** publish full methodology, label it an audience/community survey (not a national study), refresh annually so it becomes a recurring franchise.

### 2b. DUO data hub + course comparison (web-sourced, no audience needed, build now)

- **The definitive inburgering cost and structure hub,** sourced from official DUO/CBS data and kept current: five exam parts (Lezen, Luisteren, Schrijven, Spreken, KNM), costs (€50/part, €250 total via the 2021 route), pass mark 6/10, A2 or B1, what is auto-graded vs assessor-graded, validity of passed parts. Verify live numbers against DUO before publishing.
- **A maintained comparison of all inburgering course options** (price, level, format, what each includes). Original because nobody maintains it. Apply your own rule: criteria must be genuinely useful even if the reader picks a competitor.
- **Sourcing rules:** cite primary sources (DUO, CBS) by name, not other blogs. Add analysis or a visual so it is information gain, not duplication.

Next action: choose which of 2a or 2b we draft first.

---

## 3. Site extractability + bilingual

The pipeline already enforces most of the on-page rules. The new work is (a) confirming they are actually applied at the edit stage and (b) producing Dutch versions of the high-value pages.

**On-page AEO checklist (apply to every article):**

- Answer-first: a direct 40 to 60 word answer immediately after every H2/H3.
- Headings phrased as the natural-language questions people search.
- A definition sentence ("X is…") on first use of the key term.
- Self-contained passages under ~100 words (matches how retrieval chunks a page).
- Tables and lists for anything comparative (A1 vs A2 vs B1, course options).
- Original statistics and named quotes wherever possible.
- Primary sources cited by name.
- Real byline + reviewer + last-updated date.

**Bilingual priority:** translate the high-intent and YMYL pages into Dutch (real translation, never machine-translation-for-volume, which is a flagged spam pattern). Start with the DUO hub and the comparison.

---

## Content architecture: the hub-and-spoke question

**Verdict (this session's research):** hub-and-spoke is still good for AEO, but re-specified. Query fan-out (Google AI Mode splits one query into ~8-12 sub-questions and retrieves per sub-question) rewards covering every facet of a topic, which is the cluster's core idea. The 2017 mechanics are weak now: LLMs retrieve passages semantically and do not traverse your link graph, so the pillar↔spoke "link equity" mesh is not a citation lever (it still helps classic Google indexing, which gates ~38% of AI Overview citations). Page count correlates ~0.19 and length ~0.04 with AI visibility, and 53% of AI Overview citations are pages under 1,000 words, so thin spokes built for "cluster completeness" are a liability. Build for:

- **Facet coverage:** a hub page answers the sub-questions its topic fans out into.
- **Page-level answer-completeness:** every page stands alone (retrieval is passage/page-level).
- **Consolidate where a topic fans out; split only where intent is genuinely distinct.** Your pain-point BOFU pages (cost, vs, reviews) are correctly separate; the MOFU explainers that fan out are the ones to consolidate into hubs.
- **Internal links:** descriptive anchors plus semantic/indexing context, not an equity mesh.
- **Topical authority is the entry ticket; original data/perspective is the moat.**

**How your system handles it now: it does not, deliberately.** `research-brief` produces a flat backlog of independent single-keyword topics, scored and sorted descending. No `pillar` / `cluster` / `parent` / `related` field exists in the brief schema, the topic-backlog, or `content-registry.yaml` (entries carry only `status` + `title`). So it is neither the old mesh nor the new hub model: it is a flat keyword list with no architecture, whose default is to brief every high-scoring keyword as its own page.

| What the model needs | System today |
|---|---|
| Facet / fan-out coverage per page | Partial: passage-level self-contained FAQ answers only, no sub-question inventory |
| Page-level answer-completeness | Partial: enforced per passage, no page completeness bar |
| Deliberate hub-vs-spoke decision | Absent: no step asks the question; nothing merges or splits on purpose |
| Modern linking (descriptive anchors, topic graph) | Partial/old: word-count link budget + "pillar pages first" against a sitemap that may not exist |
| Thin-spoke safeguard (dedup, min-depth) | Absent: dedup runs on intelligence inputs only, never on output topics |
| Originality / information gain required | **Present:** `originality_nuggets` + `angle` + 20% differentiator weight. The half already aligned. |

This also explains the starved internal linking flagged earlier (~1 live link per article): with no topic-relationship model there is no graph to link along.

**How much of this to actually build:** the flat, originality-first, self-contained-page approach is already well-suited to AEO, so do not build a cluster architecture. The cluster-vs-flat question is second-order anyway: what moves AEO is each page being the best answer plus off-page mentions, not how pages are filed. Two cheap wins are worth it; the rest is over-engineering at this scale.

*Worth doing (cheap):*

1. **Add a `related` list** to each `content-registry.yaml` entry and to the brief schema, so the Internal Linker can insert relevant, descriptive-anchor links. This alone fixes the starved linking (~1 live link per article), and it makes fragmentation visible (five articles all `related` and all about cost is the signal to consolidate). This is a data-shape change to the JSON/YAML files, not JSON-LD markup, and not a content task.
2. **Add a facet / sub-question coverage check** to the brief or Outline stage, so each page is comprehensive on the sub-queries it fans into. A per-brief quality tweak, no architecture.

*Optional (skip unless volume scales):* a full `cluster` / `pillar` hierarchy, a consolidate + dedup engine, and a hub-vs-spoke decision step. Apply consolidation by hand only when you notice you are about to brief two near-duplicate pages.

*Already aligned, keep as is:* `originality_nuggets` + `angle` + 20% differentiator weight.

**Status:** New (small schema change). Low urgency. The `related`-list linking fix is the keystone: do it before scaling article volume so new pages link themselves in. Everything heavier is optional and likely not worth it at this scale.

---

## 4. Off-page: Reddit + .nl mentions

This is what your private FB and Instagram cannot do: get you cited by AI.

**Reddit runs as a motion** (`motions/reddit-presence.md`): a defined cadence of genuinely helpful answers, sourced from the real questions in your FB groups, in named subreddits. The motion exists to keep this authentic and safe. Seeding and self-promotion get you banned and are not cited. The play is helpfulness at a cadence, product mentioned only where it genuinely answers the question.

- **Reddit, authentically:** answer real questions in r/Netherlands, r/learnDutch, r/Amsterdam, and the Dutch r/thenetherlands. Reddit is the strongest-cited community source on Perplexity (~1 in 5 citations) and increasingly the *sole* source on "best course / vs" queries; it is more volatile on Google's AI surfaces, where Google's own properties, YouTube and Wikipedia often rival it. No seeding or spam.
- **.nl and expat earned mentions:** get DutchwithJoost mentioned on IamExpat, DutchReview, DutchNews.nl, university international offices, local press. One authoritative .nl mention beats many foreign ones for this market, and these are crawlable text AI can cite. The survey report (2a) is the natural hook for earning these.
- **LinkedIn:** a complete, brand-linked founder profile, for entity verification (feeds #1), not citations.

---

## 5. Repurpose learning content to YouTube

**Runs as a motion** (`motions/youtube-mentions.md`): a repeatable pipeline from a brand-bank topic to a question-titled video with an answer-first transcript and description. The lever is your brand name appearing in YouTube content (titles, transcripts, descriptions), the single strongest *correlate* of AI visibility (0.737, Ahrefs 75k). It is a correlation and a marker of overall brand prominence, so pair your own channel with getting featured or recommended on other Dutch-learning and expat channels. Your scenario reels stay on Instagram (brand and audience). Your **concept banks are the AEO video goldmine** because they map onto real search queries.

- **Sources:** `brand/modal-particles.md`, `brand/common-mistakes.md`, `brand/sound-more-dutch.md`, `brand/dutch-idioms.md`, `brand/knm-facts.md`.
- **Format:** short YouTube explainers titled as the exact question ("Niet vs geen: the simple rule", "What is on the KNM exam"), answer in the first 10 to 15 seconds, then detail. Real spoken transcript + a text description that restates the question and answer.
- **Sequence:** this compounds slowly. Do it after the site and original-research assets, not before.

---

## 6. Measurement loop

- **AI referral traffic:** a free GA4 segment for referrers like chatgpt.com, perplexity.ai, gemini. Small volume but converts ~1.2 to 3x better than organic.
- **AI share of voice:** pick ~20 key questions ("best way to learn Dutch for inburgering", "how to pass the speaking exam"), ask them across ChatGPT, Perplexity, Google AI, and Gemini once a month, record whether you appear vs competitors.
- **Reframe success:** judge informational content by citations and brand-search lift (~68% of searches are now zero-click), keep conversion goals on bottom-funnel comparison and decision pages.

---

## 7 + 8. Housekeeping fixes

- **FAQ schema:** correct the claim in `strategy/voice-guide.md` that FAQPage schema drives AI citations (it no longer does; FAQ rich results were deprecated May 2026 and engines ignore JSON-LD). Keep the FAQ *content* and question headings. Keep Article, Author, and Organization schema as plain SEO and E-E-A-T hygiene and to help new pages get indexed.
- **robots.txt:** allow the citation/retrieval crawlers (OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Claude-SearchBot, Claude-User, Googlebot, Applebot) and verify the CDN is not silently blocking them. **Correction:** ClaudeBot is Anthropic's *training* crawler, not its citation crawler, so it does not belong in the allow-for-citation list; to be cited by Claude you allow Claude-SearchBot and Claude-User. Decide separately whether to allow the training bots (GPTBot, Google-Extended, ClaudeBot, Applebot-Extended): allowing helps an unknown brand get known, blocking protects IP.

---

## What to stop or not over-invest in

- FAQ schema as a citation driver. (Keep the content, drop the belief.)
- llms.txt for Google and ChatGPT visibility (unsupported by both; minor value for Perplexity/Claude only).
- Treating Instagram or private FB groups as AEO channels.
- Restating other people's statistics and calling it research.
- Bylining the fictional Joost, fabricating credentials, or ever claiming an exam pass that has not happened.

---

## Honesty and proof guardrails

- You have **process proof now** (the method produces usable Dutch: your co-founder constructs correct sentences she never memorized) and **outcome proof later** (pass rates, once students reach the exam).
- Make the claim you can support (production-based learning works). Never claim anyone passed until it is true. You are not obligated to publish that the co-founder has not sat the exam yet; the reason is unrelated to the method.
- **Track student outcomes from day one** so that pass-rate data becomes proprietary original data later (this is your strongest future asset and feeds the annual survey).

---

## Where we start together

A clean first sprint, in order:

1. **Draft Wesley's author bio** from the origin story (low effort, unblocks E-E-A-T on every page).
2. **Pick the first original-research article** and build it here:
   - Option A: the **audience survey** flagship (needs the survey run first; highest upside).
   - Option B: the **DUO inburgering data hub** (buildable now from public data, no waiting).
3. **Set up the GA4 AI-referral segment** (15 minutes, starts the feedback loop).
4. **Draft the priority motions** as runbooks, in order of leverage: `motions/digital-pr.md` and `motions/original-research.md` first (the off-page engine and its fuel), then `motions/reddit-presence.md`, `motions/youtube-mentions.md`, and the lightweight `motions/ai-visibility-tracking.md`.

Open decision for Wesley: do we start with the author bio, the DUO data hub, designing the survey, or drafting the digital-PR / original-research motions?
