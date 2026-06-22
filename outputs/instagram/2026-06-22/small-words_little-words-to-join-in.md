# Fri June 26, Small words: Little words to jump into a Dutch chat

> **Type:** small-words (ConceptGuide, variant `small-words`, cover marker SOUND MORE DUTCH)
> **Theme:** evergreen companion to the week, the texture that lets you join in
> **Setting:** n/a (evergreen reference post)
> **Persona:** Belonging learner who has correct Dutch but still sounds like a textbook (Anna good at grammar, can't sound natural)
> **Positioning thread:** you learn these by using them in conversation, not memorizing a list
> **Render:** ConceptGuide. props: `remotion/props/2026-06-22/little-words-to-join-in.json`. run `/instagram-render little-words-to-join-in`
> **Status:** approved

## Rules for this post (keep edits on-rails)

- Content pulled from `brand/sound-more-dutch.md`. Do not invent a word or a meaning.
- Dutch: each little word is the taught item (sanctioned above-A1 where it applies, e.g. `gezellig`); every example sentence around it stays A1 and glossed. Appears in the **Dutch check** table.
- `intro` is set to `null` for small-words (the cards speak for themselves). Keep it `null`, do not omit it (props merge over defaults).
- No em-dash anywhere: not in the props JSON, the slides, the caption, or the pinned comment.
- Cover image prompt carries the full Style Block + Negative prompt text inline, verbatim. Never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Caption, cover headline, card notes, pinned comment pass the **Voice check**: no stacked AI-slop sentence shapes; reads aloud like one person talking.
- One concept per card. Keep the "when to use it" notes plain and concrete.

## Dutch check

| #   | Dutch line         | Level | Correct? | Note                                                                            |
| --- | ------------------ | ----- | -------- | ------------------------------------------------------------------------------- |
| 1   | Nou, even denken.  | A1    | yes      | `nou` opener + `even` softener; "Well, let me think." All high-frequency.       |
| 2   | Gezellig, hè?      | A2    | yes      | `gezellig` is the taught untranslatable (sanctioned, glossed); `hè?` tag is A1. |
| 3   | Welnee, joh!       | A2    | yes      | `joh` is the taught friendly tag (sanctioned, glossed); informal, friends only. |
| 4   | Wacht even.        | A1    | yes      | Imperative + `even`; "Hold on a sec."                                           |
| 5   | Je komt toch?      | A1    | yes      | `toch` tag seeking a yes; present tense, informal `je`.                         |
| 6   | Het is goed, hoor. | A1    | yes      | `hoor` warm reassuring tag at the end; "It's totally fine."                     |

## Voice check

Checked caption, cover headline, card notes, pinned comment. Clean: rewrote a caption antithesis ("the fix is not more grammar, it is these words") into a plain comparison. Cover headline is concrete, not a curiosity gap. Card notes are short instructions, not slogans.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/little-words-to-join-in/)

COVER IMAGE (ChatGPT). Same cover treatment as the cheatsheet: Joost in the upper half, VERTICAL 4:5, the headline rendered by Remotion (leave text out of the image). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080x1350, the Instagram feed ratio): Joost chatting over coffee at a kitchen table, leaning in mid-conversation with a relaxed, friendly look, a coffee mug in hand. Match the STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects). Reproduce JOOST exactly from joost-reference. Frame Joost in the UPPER HALF of the image, kept high. The cover crops to a horizontal band across the top and fades the lower part into a solid colour panel that holds the headline, so keep Joost high and leave the lower third empty. No text in the image. The headline is rendered by Remotion.

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

Save it as: remotion/public/2026-06-22/little-words-to-join-in/cover.png

## WHAT REMOTION PRODUCES

A branded ConceptGuide carousel: cover (your image + headline/kicker/sub + the gold SOUND MORE DUTCH marker) + one card per word + a save/send CTA slide. One PNG per slide. Props: remotion/props/2026-06-22/little-words-to-join-in.json (variant, theme, cover, intro null, cards, cta).

The content (also written into props), pulled from `brand/sound-more-dutch.md`:

- variant: small-words
- intro: null
- cards (6):
  1. nou. well (gives you a second). ex: Nou, even denken. (Well, let me think.). note: Open a reply with it to buy a moment.
  2. hè?. right? / isn't it?. ex: Gezellig, hè? (Cosy, isn't it?). note: Stick it on the end to invite a yes.
  3. joh. friendly "hey / come on". ex: Welnee, joh! (Oh no, don't worry!). note: Warm, only with friends.
  4. even. for a sec (softens a request). ex: Wacht even. (Hold on a sec.). note: Drop it in to make any ask gentler.
  5. toch?. right? (you expect a yes). ex: Je komt toch? (You're coming, right?). note: Use it to check something you assume.
  6. hoor. reassuring, warm. ex: Het is goed, hoor. (It's totally fine.). note: Goes at the end to soften.

## RENDER (after Status: approved and cover.png saved)

/instagram-render little-words-to-join-in
(or, manually: cd remotion && npx remotion render src/index.ts ConceptGuide out/2026-06-22/little-words-to-join-in --sequence --image-format=png --props=props/2026-06-22/little-words-to-join-in.json)

## CAPTION (paste into Instagram)

Little Dutch words that make you sound like you belong
You can speak correct Dutch and still sound like a textbook. These six tiny words do more for how you sound than the next grammar rule: nou, hè, joh, even, toch, hoor. They carry almost no meaning. Add a "hè?" to the end of a sentence and the other person warms up right away. Pick one this week. A simple "even" before a request already helps.
Save this and try one tomorrow. Send it to whoever you practice with.
Start learning Dutch with Joost: link in bio.
Keywords woven: Dutch filler words, sound more Dutch, little Dutch words, Dutch small talk, learn Dutch as an expat

## PINNED COMMENT

"Which of these do you already use, and which one still feels weird to say?"
