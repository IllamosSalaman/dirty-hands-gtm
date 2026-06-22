# Sun June 28, Idiom: Dutch sayings you'll actually hear

> **Type:** idiom (ConceptGuide, variant `idiom`, cover marker DUTCH IDIOM)
> **Theme:** evergreen flex, the sayings that fly past you in a fast Dutch chat
> **Setting:** n/a (evergreen reference post)
> **Persona:** Belonging learner who wants to follow real spoken Dutch (Nina, integration)
> **Positioning thread:** real spoken Dutch, the language people actually use
> **Render:** ConceptGuide. props: `remotion/props/2026-06-22/dutch-sayings-you-will-hear.json`. run `/instagram-render dutch-sayings-you-will-hear`
> **Status:** approved

## Rules for this post (keep edits on-rails)

- Idioms pulled from `brand/dutch-idioms.md` → "Everyday idioms". Do not invent an idiom or a meaning. Literal gloss and real meaning both come from the bank.
- Dutch: the idiom is the taught item (sanctioned above-A1, always glossed). Example sentences stay short and glossed. Appears in the **Dutch check** table.
- `intro` is set to `null` for idiom (the cards speak for themselves). Keep it `null`, do not omit it.
- No em-dash anywhere: not in the props JSON, the slides, the caption, or the pinned comment.
- Cover image prompt carries the full Style Block + Negative prompt text inline, verbatim. Never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Caption, cover headline, pinned comment pass the **Voice check**: no stacked AI-slop sentence shapes; reads aloud like one person talking.
- Card order: idiom (hero) then the literal (the funny line) then the real meaning then one example.

## Dutch check

| #   | Dutch line                                 | Level      | Correct? | Note                                                                  |
| --- | ------------------------------------------ | ---------- | -------- | --------------------------------------------------------------------- |
| 1   | door de vingers zien                       | idiom (A2) | yes      | The taught idiom (sanctioned, glossed): to turn a blind eye.          |
| 2   | De docent zag de fout door de vingers.     | A2         | yes      | Example for the idiom; past tense `zag`. Glossed.                     |
| 3   | met de deur in huis vallen                 | idiom (A2) | yes      | The taught idiom (sanctioned, glossed): to get straight to the point. |
| 4   | Ik val maar met de deur in huis.           | A2         | yes      | Example; present tense, the idiom. Glossed.                           |
| 5   | de knoop doorhakken                        | idiom (A2) | yes      | The taught idiom (sanctioned, glossed): to make a decision.           |
| 6   | We moeten de knoop doorhakken.             | A2         | yes      | Modal + the idiom infinitive at the end. Glossed.                     |
| 7   | de puntjes op de i zetten                  | idiom (A2) | yes      | The taught idiom (sanctioned, glossed): to perfect the last details.  |
| 8   | Even de puntjes op de i zetten.            | A2         | yes      | Example with the softener `even`. Glossed.                            |
| 9   | het regent pijpenstelen                    | idiom (A2) | yes      | The taught idiom (sanctioned, glossed): it is pouring.                |
| 10  | Neem een jas mee, het regent pijpenstelen. | A2         | yes      | Imperative + the idiom. Glossed.                                      |

## Voice check

Checked caption, cover headline, pinned comment. Clean: caption opens on the concrete moment (people drop these in and you are lost) with one glossed example, closes on a concrete action (listen for one, save/send). One literal-vs-meaning contrast kept because it explains the idiom; no stacked shapes.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/dutch-sayings-you-will-hear/)

COVER IMAGE (ChatGPT). Same cover treatment as the cheatsheet: Joost in the upper half, VERTICAL 4:5, the headline rendered by Remotion (leave text out of the image). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080x1350, the Instagram feed ratio): Joost reading by a window with a small amused smile, as if he just heard a funny turn of phrase, a book or newspaper in hand and a coffee nearby. Match the STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects). Reproduce JOOST exactly from joost-reference. Frame Joost in the UPPER HALF of the image, kept high. The cover crops to a horizontal band across the top and fades the lower part into a solid colour panel that holds the headline, so keep Joost high and leave the lower third empty. No text in the image. The headline is rendered by Remotion.

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

Save it as: remotion/public/2026-06-22/dutch-sayings-you-will-hear/cover.png

## WHAT REMOTION PRODUCES

A branded ConceptGuide carousel: cover (your image + headline/kicker/sub + the gold DUTCH IDIOM marker) + one card per idiom + a save/send CTA slide. One PNG per slide. Props: remotion/props/2026-06-22/dutch-sayings-you-will-hear.json (variant, theme, cover, intro null, cards, cta).

The content (also written into props), pulled from `brand/dutch-idioms.md`:

- variant: idiom
- intro: null
- cards (5), each: term (idiom) + sub (literal) + meaning + one example:
  1. door de vingers zien. literal: to see through the fingers. meaning: to turn a blind eye, let it slide. ex: De docent zag de fout door de vingers. (The teacher let the mistake slide.)
  2. met de deur in huis vallen. literal: to fall into the house with the door. meaning: to get straight to the point. ex: Ik val maar met de deur in huis. (Let me get straight to the point.)
  3. de knoop doorhakken. literal: to chop through the knot. meaning: to finally make a decision. ex: We moeten de knoop doorhakken. (We have to make the call.)
  4. de puntjes op de i zetten. literal: to put the dots on the i. meaning: to perfect the final details. ex: Even de puntjes op de i zetten. (Just adding the finishing touches.)
  5. het regent pijpenstelen. literal: it is raining pipe stems. meaning: it is pouring. ex: Neem een jas mee, het regent pijpenstelen. (Bring a coat, it's pouring.)

## RENDER (after Status: approved and cover.png saved)

/instagram-render dutch-sayings-you-will-hear
(or, manually: cd remotion && npx remotion render src/index.ts ConceptGuide out/2026-06-22/dutch-sayings-you-will-hear --sequence --image-format=png --props=props/2026-06-22/dutch-sayings-you-will-hear.json)

## CAPTION (paste into Instagram)

Dutch idioms you'll actually hear (and what they really mean)
Dutch people drop these into normal conversation, and if you take them literally you are lost. "Even de knoop doorhakken" means to make a decision, not to chop a knot. Learn a handful and the next coffee chat makes more sense.
Listen for one of these this week and tell me where you caught it. Save these for the next time someone uses one on you, and send it to whoever is learning with you.
Start learning Dutch with Joost: link in bio.
Keywords woven: Dutch idioms, Dutch expressions, Dutch sayings, sound more Dutch, learn Dutch as an expat

## PINNED COMMENT

"Which Dutch saying made no sense to you the first time you heard it?"
