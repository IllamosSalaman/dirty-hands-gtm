# Tue June 23, Cheatsheet: Join the small talk at a Dutch party

> **Type:** cheatsheet
> **Theme:** smiling and nodding while the talk runs too fast, here the small talk you can't enter
> **Setting:** a kid's birthday party
> **Persona:** Belonging + Family (Molly, couldn't make Dutch friends; "meet people who are not expats")
> **Positioning thread:** functional everyday Dutch you can use tomorrow, judgment-free
> **Render:** Cheatsheet. props: `remotion/props/2026-06-22/join-the-small-talk.json`. run `/instagram-render join-the-small-talk`
> **Status:** approved

## Rules for this post (keep edits on-rails)

- Dutch: A1 default, grammatically correct, usable; informal register (`je`/`jij`) for a party; every phrase passes the Dutch check and appears in the **Dutch check** table; flagged for a native check (Joost) before posting.
- Remotion renders the cover headline and the phrase cards. Leave text out of the generated cover image. No Canva.
- No em-dash anywhere: not in the props JSON, the slides, the caption, or the pinned comment.
- Cover image prompt carries the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Caption, cover headline, the "when" subheads, and pinned comment pass the **Voice check**: no stacked AI-slop sentence shapes; reads aloud like one person talking.
- Phrases cover the real arc: open, ask, keep it going, recover a name, step away. Each usable at a real party tomorrow.

## Dutch check

| #   | Dutch line                    | Level | Correct? | Note                                                                            |
| --- | ----------------------------- | ----- | -------- | ------------------------------------------------------------------------------- |
| 1   | Hoi, ik ben Maya. En jij?     | A1    | yes      | Greeting + `zijn` + elliptical question; informal `jij` fits a party.           |
| 2   | Van wie is dit feestje?       | A1    | yes      | Simple `van wie` question, all high-frequency; natural opener.                  |
| 3   | Ken jij hier veel mensen?     | A1    | yes      | Inversion yes/no question, `kennen` present; finds common ground.               |
| 4   | Wat leuk! Vertel eens.        | A1    | yes      | Exclamation + imperative with the softener `eens`; keeps the talk going.        |
| 5   | Sorry, hoe heet je?           | A1    | yes      | Question-word question, `heten` present, `je` informal; recovers a missed name. |
| 6   | Ik ga even wat drinken halen. | A1    | yes      | `gaan` + separable `halen` at end, softener `even`; a friendly exit line.       |

## Voice check

Checked caption, cover headline, the "when" subheads, pinned comment. Clean: dropped a tricolon in the caption ("how to start, keep going, and leave") and led with the one hard part (the opener). Cover headline is plain, not a curiosity gap. Opens on the snack-table moment, closes on a concrete send.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/join-the-small-talk/)

COVER IMAGE (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080x1350, the Instagram feed ratio): Joost at a kid's birthday party, standing near a table with a coffee in hand, smiling and half-turned as if about to greet someone. Paper garlands and balloons strung above, a cake and cups on the table, other guests suggested softly. Match the STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects). Reproduce JOOST exactly from joost-reference. Frame Joost in the UPPER HALF of the image, kept high. The cover crops to a horizontal band across the top and fades the lower part into a solid colour panel that holds the headline, so keep Joost high and leave the lower third empty. No text in the image. The headline is rendered by Remotion.

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

Save it as: remotion/public/2026-06-22/join-the-small-talk/cover.png
(No Canva. The phrase slides are rendered by Remotion from props, with crisp Dutch text.)

## WHAT REMOTION PRODUCES

A branded carousel: cover (your image + the headline/kicker/sub overlaid) + one card per phrase (NL hero line, EN translation, a WHEN panel) + a save/send CTA slide. One PNG per slide. Props: remotion/props/2026-06-22/join-the-small-talk.json.

The phrases (also written into props):

1. Hoi, ik ben Maya. En jij? (Hi, I'm Maya. And you?) when: opening with someone new
2. Van wie is dit feestje? (Whose party is this?) when: an easy first question
3. Ken jij hier veel mensen? (Do you know many people here?) when: finding common ground
4. Wat leuk! Vertel eens. (How nice! Tell me more.) when: keeping it going after they answer
5. Sorry, hoe heet je? (Sorry, what's your name?) when: you missed their name, everyone does
6. Ik ga even wat drinken halen. (I'm going to grab a drink.) when: a friendly way to step away

## RENDER (after Status: approved and cover.png saved)

/instagram-render join-the-small-talk
(or, manually: cd remotion && npx remotion render src/index.ts Cheatsheet out/2026-06-22/join-the-small-talk --sequence --image-format=png --props=props/2026-06-22/join-the-small-talk.json)

## CAPTION (paste into Instagram)

How to make small talk in Dutch at a party
You know the spot by the snack table. Everyone is chatting in Dutch and you are holding a drink, waiting for a gap that does not come. The hardest part is the first line, so that is where these six start. Get the opener out and the questions come easier, and there is a clean line for stepping away when you have had enough.
Save these before the next birthday party. Send them to whoever you always go with.
Start learning Dutch with Joost: link in bio.

Keywords woven: Dutch small talk, Dutch party phrases, make Dutch friends, small talk in Dutch, learn Dutch as an expat

## PINNED COMMENT

"What do you usually do when you're stuck at the edge of a Dutch party?"
