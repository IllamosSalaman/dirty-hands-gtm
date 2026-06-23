# Mon June 22, Scenario reel: When the table talk gets too fast

> **Type:** scenario-reel
> **Theme:** smiling and nodding at a Dutch table while the talk runs too fast
> **Setting:** the in-laws' Sunday dinner table
> **Persona:** Belonging + Family, partner-visa family scrutiny (personas Pattern A, "I just sit there smiling because I can't follow the conversation")
> **Positioning thread:** learn by using, one line you can actually say (not memorize)
> **Render:** ScenarioReel. props: `remotion/props/2026-06-22/table-talk-too-fast.json`. run `/instagram-render table-talk-too-fast`
> **Status:** draft ← set to `approved` (after review + assets saved) to allow rendering

## Rules for this post (keep edits on-rails)

- Dutch: A1 default, grammatically correct, usable; register correct by context; every line passes the Dutch check and appears in the **Dutch check** table; flagged for a native check (Joost) before posting.
- Remotion renders the final asset. Do not assemble in CapCut/Canva. Crisp Dutch text is rendered, never baked into an AI image.
- No em-dash anywhere: not in the props JSON, the caption, the hook, the outro, or the pinned comment. Use a period, comma, colon, or parentheses.
- Image prompt carries the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Caption, hook, and outro pass the **Voice check**: no stacked AI-slop sentence shapes (antithesis "not X but Y", forced rule-of-three, grand opener/closer, curiosity-gap "here's why"); reads aloud like one person talking.
- Close on connection, not shame: the feeling is being left out and wanting in. The family is glad she asked.
- One small move only: ask them to slow down so she can join. No grammar lesson in the reel.

## Dutch check

| #   | Dutch line                                              | Level | Correct? | Note                                                                                                                                |
| --- | ------------------------------------------------------- | ----- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Zaterdag gaan we naar mijn zus. En zondag komt opa ook! | A1    | yes      | Two short main clauses with V2 inversion (A1 grammar); all high-frequency words. This is the fast family chatter she can't follow.  |
| 2   | Mag het iets langzamer? Ik wil graag meepraten.         | A1    | yes      | Elliptical modal request + modal `wil` with separable infinitive `meepraten` at the end. Neutral register, warm. The recovery line. |
| 3   | Natuurlijk. Geen probleem!                              | A1    | yes      | `geen` correctly negates indefinite noun `probleem` (niet/geen rule); both `natuurlijk` and `probleem` are A1. Warm, accepts her request.                                                  |
| 4   | Mag het iets langzamer? (outro takeaway)                | A1    | yes      | The one line to remember, same as line 2.                                                                                           |

## Voice check

Checked caption, hook, outro, pinned comment. Clean: hook opens on the dinner moment, caption opens on smiling-and-nodding and closes on a concrete send. Removed an early "it is not rude. One line does it" near-antithesis, rewrote as two plain sentences. No tricolon, no curiosity gap.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/table-talk-too-fast/)

STEP 1. Voice (ElevenLabs). Joost uses the Ido voice (ElevenLabs voice ID `dLPO5AsXc3FZDbTh1IKa`). Pick one warm Dutch voice for Maya and keep it for this reel only. Settings: Stability ~50, Similarity high, Style low, speed slightly slow. Render each line as its own file and save with these exact names (order matters):

remotion/public/2026-06-22/table-talk-too-fast/joost-1.mp3 "Zaterdag gaan we naar mijn zus. En zondag komt opa ook!" (EN: Saturday we're going to my sister's. And Sunday grandpa's coming too!)
remotion/public/2026-06-22/table-talk-too-fast/maya-2.mp3 "Mag het iets langzamer? Ik wil graag meepraten." (EN: Can it be a bit slower? I'd like to join in.)
remotion/public/2026-06-22/table-talk-too-fast/joost-3.mp3 "Natuurlijk. Geen probleem!" (EN: Of course. No problem!)
(Remotion measures each file's length automatically. You do not note durations.)

STEP 2. Scene image (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

A cozy Dutch family dining room on a Sunday, warm evening light, a 9:16 vertical two-shot. JOOST sits on the LEFT at the head of the table, mid-story, animated and warm, one hand lifted in a small gesture. A woman in her early thirties with shoulder-length dark hair and a mustard-and-grey knit sits on the RIGHT, listening with a polite, slightly lost smile, hands around a water glass. Between and behind them: a set table with plates, a casserole dish, candles, a bottle, a bread board, other family suggested softly out of focus. Keep the bottom third of the frame calmer and less detailed (subtitles render there). No text anywhere in the image.

Illustration style:
Warm, hand-drawn storybook illustration in a soft watercolor-and-ink style. Use
gentle pencil-like outlines, subtle paper texture, muted cozy colors, and light
watercolor washes. The image should feel slightly imperfect and handmade, as if
sketched with ink and colored by hand.

Characters:
Characters should have simple friendly faces. Eyes must be drawn only as small
solid dark circles or vertical oval dots. No pupils, no sclera, no iris, no
eyelashes, and no glossy or realistic eyes. Keep facial features minimal: a small
simple nose, soft blush on the cheeks, and a friendly understated expression. Use
rounded shapes, soft shadows, natural proportions, and expressive but simple
gestures. Clothing should have gentle fabric texture and small hand-drawn details.

Setting and background:
Cozy, calm, and lived-in. Include simple environmental details that support the
scene (furniture, plants, books, coffee cups, warm window light, shelves,
textiles, small everyday objects). Detailed enough to feel atmospheric, not so
busy that it distracts from the main moment.

Mood:
Warm, approachable, educational, calm, friendly, slightly whimsical, human, and
relatable.

Style keywords:
Children's book editorial illustration, loose ink linework, watercolor texture,
soft pastel palette, hand-sketched, slightly whimsical, clean but organic, cozy
everyday atmosphere.

Avoid realistic eyes, detailed pupils, sclera, iris, eyelashes, glossy eyes,
anime eyes, photorealism, 3D render, plastic texture, harsh outlines, sharp
digital gradients, overly perfect vector art, exaggerated cartoon expressions,
complex facial detail, hyperreal skin texture, dramatic lighting, cinematic
realism, overly polished digital art, cluttered composition, text in the image,
inconsistent character design.

Save it as the clip's anchor frame: remotion/public/2026-06-22/table-talk-too-fast/starting-frame.png (it is the begin = end frame for the clip; the render itself uses the clip, not this still).

STEP 3. Video (image-to-video; Seedance 1 Pro). Upload the Step 2 image as BOTH the begin frame AND the end frame (end frame = begin frame returns the clip to the scene for a clean loop, so never write "loop" into the prompt). Settings: 9:16, 10s, 720p. SILENT, no lip-sync. Seedance 1 Pro has NO negative-prompt field, so the prompt leads with the positive closed-mouth state. Paste this exact prompt:

Animate this still image with extremely subtle motion only. Maya, the woman on the right, keeps her mouth and lips unchanged and closed for the entire video; her face stays still, she gives a small polite nod and a tiny shift of her glass, then returns to the provided end-frame pose. Joost, the man at the head of the table on the left, keeps a soft, natural closed-mouth expression, lips closed the whole time, with one small warm hand gesture toward the table. No speech-like mouth movement, no mouth opening, no jaw motion. Static camera with very subtle ambient breathing motion. Candle flames flicker faintly. Warm, calm Sunday-dinner atmosphere. Preserve exact style, character design, composition, and lighting.

(No separate negative prompt. Full recipe: brand/brand-kit.md → Motion.)

Save the clip as: remotion/public/2026-06-22/table-talk-too-fast/clip.mp4
(Generate exactly ONE 10s clip. Remotion loops it to fill the dialogue.)

## WHAT REMOTION PRODUCES (no CapCut)

Remotion loops the clip, sequences the three voice lines with auto-detected timing, burns in NL/EN subtitles, emphasizes the recovery line in gold ("SAY THIS ↓"), shows the 3-second hook overlay, floats the "smiling and nodding..." tag on line 1, and adds the branded outro (DWJ logo mark + the one line to remember). The logo is baked into Remotion. Output: 9:16 MP4 with audio. Props: remotion/props/2026-06-22/table-talk-too-fast.json.

## RENDER (after Status: approved and all assets saved)

/instagram-render table-talk-too-fast
(or, manually: cd remotion && npx remotion render src/index.ts ScenarioReel out/2026-06-22/table-talk-too-fast/table-talk-too-fast.mp4 --props=props/2026-06-22/table-talk-too-fast.json)

## CAPTION (paste into Instagram)

How to keep up when Dutch table talk gets too fast
You have been smiling and nodding at your in-laws' table for an hour. You catch maybe half of it, and asking everyone to slow down feels rude, so you stay quiet. It is not rude at all. One short line does it: "Mag het iets langzamer? Ik wil graag meepraten." (Can it be a bit slower? I'd like to join in.) Most families are glad you asked.
Save this for the next Sunday dinner. Send it to whoever sits quietly next to you.
Start learning Dutch with Joost: link in bio.
Keywords woven: Dutch family dinner, follow fast Dutch, join the conversation in Dutch, Dutch for in-laws, learn Dutch as an expat

## PINNED COMMENT

"What does your family always talk about that you wish you could jump into?"
