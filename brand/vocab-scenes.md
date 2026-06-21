# Vocab Scenes — the grounding bank for `vocab-scene` posts

The source bank for the **`vocab-scene`** Instagram post type: one illustrated setting (a kitchen, the zoo,
the doctor's) with **labels pointing at the things in it**, each label a Dutch word + its English
translation. It is the gentlest, most save-able format we have, pure concrete A1 vocabulary tied to a place
the viewer actually goes.

This format also fits the existing **settings** model: a `vocab-scene` is literally "a day at {a setting}",
so it slots into a themed week as the on-theme or flex post for that setting.

> **Rendering (read this before authoring).** Per the build decision, **Remotion draws the labels, not the
> image generator.** The ChatGPT scene is generated **label-free** (no text in the image, the brand's #1
> production rule), and the `VocabScene` composition overlays crisp NL/EN callouts + arrows from props. So:
> - This bank supplies the **words** (NL with article + EN). It does **not** fix label positions.
> - **Positions are authored per post**, against the actual generated illustration, as `x`/`y` fractions
>   (0 to 1) in the props, with each label pointing at its object. That step lives in the runbook, because
>   it depends on where the generator put each object.
> - **Dutch + English only** (no Arabic, unlike the reference examples that inspired the format).
> - 8 to 12 labels per scene is the sweet spot: enough to be worth saving, not so many the frame is noise.

> **Level.** Concrete everyday nouns are squarely **A1**, so no carve-out applies here. Keep to the high,
> common items in a scene (the tap, the oven, the ticket), not rare ones. Articles matter: a wrong `de`/`het`
> on a rendered label is exactly what a native viewer catches, so each item below carries its article.

---

## Scene: Een dagje koken (A day in the kitchen)

Label-free image brief: a cosy kitchen, Joost cooking at the stove, calm everyday objects around the room,
space around each object for a callout. Items to label:

- de pan — the pan
- het fornuis — the stove
- de oven — the oven
- de koelkast — the fridge
- de kraan — the tap
- de pollepel — the ladle
- het mes — the knife
- de snijplank — the cutting board
- de vaatwasser — the dishwasher
- het bord — the plate
- de vork — the fork
- de theedoek — the tea towel

Handige zin (optional caption/closing): `Wat ben je aan het koken?` — What are you cooking?

## Scene: Een dagje naar de dierentuin (A day at the zoo)

Label-free image brief: a friendly zoo entrance and path, a few enclosures, a kiosk, calm and storybook.
Items to label:

- de ingang — the entrance
- het kaartje — the ticket
- de plattegrond — the map
- de wegwijzer — the signpost
- de giraf — the giraffe
- de olifant — the elephant
- de leeuw — the lion
- de flamingo — the flamingo
- de aap — the monkey
- de prullenbak — the bin
- de kiosk — the kiosk
- het ijsje — the ice cream

Handige zin: `Waar is de olifant?` — Where is the elephant?

## Scene: Bij de dokter (At the doctor's)

Label-free image brief: a calm GP waiting room and reception, Joost at the desk. Items to label:

- de wachtkamer — the waiting room
- de balie — the reception desk
- de afspraak — the appointment
- de huisarts — the GP
- de assistente — the assistant
- de weegschaal — the scales
- het recept — the prescription
- de pleister — the plaster
- de thermometer — the thermometer

Handige zin: `Ik heb een afspraak.` — I have an appointment.

## Scene: In de supermarkt (At the supermarket)

Label-free image brief: a bright supermarket aisle and checkout, Joost with a basket. Items to label:

- de winkelwagen — the trolley
- het mandje — the basket
- de kassa — the checkout
- de caissière — the cashier
- het schap — the shelf
- de aanbieding — the offer
- het pinapparaat — the card reader
- de tas — the bag
- de groente — the vegetables
- het fruit — the fruit

Handige zin: `Mag ik pinnen?` — Can I pay by card?

## Scene: Op het station (At the train station)

Label-free image brief: a clean Dutch train platform, a train arriving, signs and a ticket machine.
Items to label:

- het station — the station
- het perron — the platform
- het spoor — the track
- de trein — the train
- de kaartautomaat — the ticket machine
- de OV-chipkaart — the travel card
- de incheckpaal — the check-in post
- de roltrap — the escalator
- het bord — the departures board
- de conducteur — the conductor

Handige zin: `Van welk spoor vertrekt de trein?` — Which platform does the train leave from?

## Scene: In de woonkamer (In the living room)

Label-free image brief: a warm, lived-in living room, Joost on the couch. Items to label:

- de bank — the couch
- de tafel — the table
- de stoel — the chair
- de lamp — the lamp
- de televisie — the television
- het raam — the window
- de gordijnen — the curtains
- de plant — the plant
- de kast — the cupboard
- de klok — the clock

Handige zin: `Doe je het raam even dicht?` — Could you close the window?

---

## How a `vocab-scene` post uses this bank

- **One scene per post.** Cover/poster = the labeled illustration (rendered by `VocabScene`). Optionally a
  second slide recapping the words as a list, then the CTA slide.
- The runbook's image step asks ChatGPT for the scene **with no text and with breathing room around each
  object**, so labels have somewhere to sit.
- The props carry each label as `{nl, en, x, y, point}` (label box position + the point its arrow targets);
  positions are set against the generated image, not taken from this bank.
- Pick 8 to 12 items; cut to the clearest ones if the frame gets busy.
- Caption line 1 = a searchable keyword ("Dutch kitchen vocabulary", "Dutch words at the doctor").
- Pin a comment that pulls a reply ("which word is new to you?").

---

## Adding a scene

A scene is just a setting plus 8 to 12 concrete, high-frequency items with correct articles. Reuse the
week's settings where you can (the bakery, the pharmacy, the café), so a vocab-scene can be the flex post
for that week's theme. Verify any uncertain article against [woordenlijst.org](https://woordenlijst.org)
or [vandale.nl](https://www.vandale.nl) before publishing.
