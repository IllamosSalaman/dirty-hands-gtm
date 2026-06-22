# Wed June 24, Quiz: You walk into the kringverjaardag

> **Type:** quiz (correct-answer culture quiz)
> **Theme:** smiling and nodding at a Dutch gathering, here the custom nobody explained
> **Setting:** the kringverjaardag (the Dutch birthday circle)
> **Persona:** Belonging + Family, first Dutch birthday (Nina belonging; integration)
> **Positioning thread:** Dutch opens real life here, not just the exam
> **Render:** Quiz. props: `remotion/props/2026-06-22/kringverjaardag.json`. run `/instagram-render kringverjaardag`
> **Status:** approved

## Rules for this post (keep edits on-rails)

- This is a correct-answer quiz: the custom has a right answer, so `correct` is set. (Reflex "which one is you" quizzes omit it; this is not one.)
- Civic/culture fact verified against `brand/knm-facts.md`: "Verjaardag: feliciteren (ook de andere familieleden); koffie met gebak; kringverjaardag is typisch NL." Do not invent the custom.
- Dutch: the question is A1; the reveal teaches one cultural phrase (sanctioned, glossed). Appears in the **Dutch check** table.
- No em-dash anywhere: not in the props JSON, the slides, the caption, the engagement prompt, or the pinned comment.
- Scenario image prompt carries the full Style Block + Negative prompt text inline, verbatim. Never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Engagement prompt asks for a reason or a story, never bare A/B. Caption/engagement prompt/comment pass the **Voice check**.
- Warmth, not "you got it wrong": the custom surprises everyone the first time.

## Dutch check

| #   | Dutch line                    | Level | Correct? | Note                                                                                                                                                       |
| --- | ----------------------------- | ----- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Wie feliciteer je?            | A1    | yes      | Question-word question, `feliciteren` present tense, `je` informal; the on-screen question.                                                                |
| 2   | Gefeliciteerd met je dochter! | A2    | yes      | The cultural phrase the post teaches (sanctioned, glossed): congratulating a relative. `met je dochter` is correct; informal `je` fits a family gathering. |

## Voice check

Checked caption, scenario line, engagement prompt, pinned comment. Clean: engagement prompt asks for a story ("did you find out the awkward way?") instead of bare A/B. Caption opens on the concrete moment (circle of chairs, everyone looking) and closes on a concrete send. No curiosity-gap or grand frame.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/kringverjaardag/)

SCENARIO IMAGE (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080x1350, the Instagram feed ratio): Joost stepping into a Dutch living room for a birthday, a ring of chairs around the edge of the room with several relatives seated, a small table with coffee cups and a cake (koffie met gebak), a "Hieperdepiep" style paper garland on the wall. Joost is mid-step, friendly and a little unsure where to start. Match the STYLE of style-ref-1 and style-ref-2. Reproduce JOOST exactly from joost-reference. The question overlay sits CENTRED over a dark scrim covering the whole image, so framing is flexible. Keep the mid-frame from being too busy behind the large question. No text in the image. The question is rendered by Remotion.

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

Save it as: remotion/public/2026-06-22/kringverjaardag/scenario.png

## WHAT REMOTION PRODUCES

Three slides: a scenario cover with the question overlaid, an options slide (A/B/C cards), and a reveal slide (the correct answer + one-line teach). Props: remotion/props/2026-06-22/kringverjaardag.json.

The quiz (also written into props):

- Scenario line: "You arrive at a Dutch birthday. There's a circle of chairs and everyone looks up."
- Question: "Wie feliciteer je?" (EN: Who do you congratulate?)
- Options: A) Only the birthday person B) Everyone, not just the birthday person C) No one until someone greets you
- Correct: B
- Reveal: You congratulate the family too, not only the jarige (the birthday person). A warm "Gefeliciteerd met je dochter!" (Congrats on your daughter!) does it. Then sit down for coffee and cake.

## RENDER (after Status: approved and scenario.png saved)

/instagram-render kringverjaardag
(or, manually: cd remotion && npx remotion render src/index.ts Quiz out/2026-06-22/kringverjaardag --sequence --image-format=png --props=props/2026-06-22/kringverjaardag.json)

## ENGAGEMENT PROMPT (overlay / caption)

"Tell me about your first Dutch birthday. Did you know to congratulate everyone, or did you find out the awkward way?"

## CAPTION (paste into Instagram)

What to say at a Dutch birthday (the kringverjaardag)
You walk in, there is a circle of chairs, and everyone looks up at you. At a Dutch birthday you do not only congratulate the birthday person. You congratulate the family too: "Gefeliciteerd met je dochter." (Congrats on your daughter.) Then you take a seat for coffee and cake. It feels strange the first time, and after that it is the easiest Dutch you will use all year.
Save this before your next uitnodiging (invitation). Send it to anyone headed to their first Dutch verjaardag (birthday).
Start learning Dutch with Joost: link in bio.
Keywords woven: kringverjaardag, Dutch birthday customs, gefeliciteerd, Dutch culture for expats, KNM inburgering

## PINNED COMMENT

"What surprised you most at your first Dutch birthday party?"
