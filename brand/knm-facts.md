# KNM verified fact base — the single source of truth for *what is actually true*

> **Role in this repo (dirty-hands-gtm).** This is the grounding bank for the `knm-quiz` Instagram
> post type: `/instagram-content` reads an indicator's entry here and writes a one-question A2 quiz
> (3 options, one correct) from it. Never invent a civic fact for a KNM quiz; pull it from here.
> The layer table and file paths below (`src/reference/...`, `knm-reference-cards.ts`, `lessons/**`)
> belong to the DutchwithJoost **app** repo this file came from, not this one. They are kept for
> provenance; in this repo only the verified facts (Themes 1 to 6) and the exam format are used.

This document holds the **verified civic facts** behind each KNM indicator. It is the layer between the
*scope* and the *teaching*:

| Layer | Where | What it is |
|---|---|---|
| **Scope** | `src/reference/knm-eindtermen.ts` | The legally-binding objectives (Staatscourant 2024-15802). *What must be known* — but in bureaucratic form, **not the facts.** |
| **Facts (this doc)** | `docs/knm-facts.md` | The **verified, sourced facts** that answer each objective. Precise, with citations + dates. |
| **Teaching** | `knm-reference-cards.ts` (cards) · `lessons/**` (dialogues) | The A2 / dialogue *renderings* of the facts. Simplified for learners. |

## How to use this (the rule)

- **Before authoring a KNM reference card or a KNM-tagged lesson line, read the indicator's entry here.**
  Write the card/line *from* these facts. Never re-derive a civic fact from memory.
- Every fact carries a **source** and a **verified date**. If a fact has no source yet (`◯`), treat it as
  *unconfirmed* — verify against an official source before relying on it, then upgrade it to `✅`.
- **⚠️ = volatile** (amount, percentage, body name, recent policy change). Re-check the source before each
  exam cycle; the date tells you how stale it is. When a volatile fact changes, **update it here first**,
  then re-check every card/lesson that renders it.
- The card simplifies; this doc keeps the *precise* truth. (Card says "het eerste deel van je zorgkosten";
  here we record the exact €385 + who's exempt + that it changes yearly.)

**Status legend:** `✅` verified against an official source (cited) · `◯` from author knowledge / standard,
source still to be attached · `⚠️` volatile, re-check.

> **Eindterm-grounded facts.** When a fact is stated **directly in a deelindicator**, the eindtermen file
> *is* the official source — it is the **in-force** document (Stcrt 2024-15802, effective 1 July 2025), so
> anything in it is **current and in scope by definition**. Those facts are `✅`, cited to the indicator;
> a faithful rendering needs no extra confirmation. Only facts you add **beyond** the eindterm text
> (real-world detail, amounts, body names, procedures) need a separate external source. Most remaining `◯`
> marks below are direct renders and are therefore eindterm-grounded; `◯` is reserved for the genuinely
> extrapolated bits.

## Authoritative sources (use these, in this order of trust)

1. **Official / legal:** [Rijksoverheid.nl](https://www.rijksoverheid.nl), the responsible body per topic
   (Huurcommissie, Zorginstituut, UWV, Belastingdienst, Kiesraad, DUO, Milieu Centraal), and the
   eindtermen text ([Stcrt 2024-15802](https://zoek.officielebekendmakingen.nl/stcrt-2024-15802.html)).
2. **Civic-education:** [ProDemos](https://www.prodemos.nl), [Canon van Nederland](https://www.canonvannederland.nl).
3. **Exam-style reference:** [inburgeren.nl](https://www.inburgeren.nl) (DUO). Third-party practice
   (knmoefenen.nl etc.) is *style only*, never a fact source.

## Exam format (verified 2026-06-20)

- **45 multiple-choice questions, 3 options (A/B/C), one correct.** ~40–45 min, on computer.
- **Pass = 60% (27/45).** Theme-organized. Some images (*beeldmateriaal*).
- Questions test **concepts**, not figures that change yearly (so a card teaches "the first part you pay
  yourself," not "€385"). Source: [inburgeren.nl kennisexamens](https://www.inburgeren.nl/examen-doen/inhoud-kennisexamens.jsp).
- The deck's `buildMock(45)` + 3-option questions mirror this exactly.

---

# Theme 1 — Werk en inkomen  *(verified 2026-06-20)*

### 1.1.1 — Regelingen werk en inkomen
- Je moet je inspannen om **zelf inkomen** te verwerven. Nieuwkomers kunnen zich op werk voorbereiden via de **Module Arbeidsmarkt en Participatie (MAP)** (onderdeel inburgering) of via **scholing**. ✅ *(direct in eindterm 1.1.1, Stcrt 2024-15802 — dus actueel en in scope)*
### 1.1.2 — Werk/vacatures vinden
- Via je **eigen netwerk**, **online vacaturebanken** (bv. werk.nl), inschrijven bij **uitzendbureaus**; sollicitatie met **cv / sollicitatiebrief / (online) formulier**; bereid het **sollicitatiegesprek** voor; vragen over werk + arbeidsvoorwaarden worden gewaardeerd. ◯
### 1.1.3 — Kansen op de arbeidsmarkt
- Beïnvloed door **vooropleiding, werkervaring, beschikbaarheid, motivatie en beheersing van het Nederlands**. ◯
### 1.1.4 — Diplomawaardering
- Buitenlands diploma laten **waarderen** via **IDW (Internationale Diplomawaardering)** — het portaal van **Nuffic** (vo + hoger onderwijs) en **SBB** (vmbo/mbo). Toont met welk Nederlands niveau je diploma vergelijkbaar is. ✅ *(Rijksoverheid, Nuffic, IDW)*
### 1.1.5 — Belang van (bij)scholing
- (Bij)scholing **vergroot je kansen** op de arbeidsmarkt. ◯
### 1.1.6 — Eisen van de werkgever
- Een werkgever mag **competentie-eisen** stellen, inclusief eisen aan **taal- en communicatievaardigheden**. ◯
### 1.1.7 — UWV / gemeente / vangnet  ✅
- **Mét arbeidsverleden** + werkloos → meteen naar **UWV** (inschrijven + **WW-uitkering** aanvragen, met DigiD; WW-eis: ≥26 van laatste 36 weken gewerkt). **Zónder arbeidsverleden** → **gemeente** (**bijstandsuitkering**). Overleg met UWV/gemeente over scholing kan. Blijf je inspannen voor inkomen.
- **Vangnet** (tijdelijk): bijstand, WW, **arbeidsongeschiktheidsuitkering** (WIA/WAO), toeslagen. *(UWV, werk.nl, Juridisch Loket)*
### 1.1.8 — Rechten/plichten uitkeringsgerechtigden
- Rechten **én** plichten. **Passend aangeboden werk** moet in principe geaccepteerd. **Wijzigingen in inkomen/situatie doorgeven** (gevolgen voor de uitkering). ◯
### 1.2.1 — Arbeidsovereenkomst + cao  ✅
- **Arbeidsovereenkomst** = rechten/plichten van werknemer + werkgever (werktijden, salaris, verlof, ziekte, arbeidsomstandigheden, veiligheid). **CAO** (collectief, per sector) bestaat voor veel sectoren en mag **nooit slechter dan de wet**. Recht om te **onderhandelen**. **Beoordelingsgesprek** mogelijk.
- **Contracttypes:** **vast** (onbepaalde tijd), **tijdelijk** (bepaalde tijd), **uitzendcontract**. Tijdelijk → vast na **3 contracten of 3 jaar** (tenzij cao anders). **Deeltijd** komt veel voor (NL = hoogste deeltijdpercentage). *(Rijksoverheid)*
### 1.2.2 — Werknemersparticipatie
- **Ondernemingsraad (OR)** / medezeggenschapsraad en **personeelsvereniging**. **Vakbonden** komen op voor rechten/belangen van werknemers en sluiten cao's af. ◯
### 1.2.3 — Premies en belasting  ✅
- Werkgever houdt **loonheffing** (loonbelasting + premies volksverzekeringen: AOW/Anw/Wlz) in op het salaris en draagt die af aan de **Belastingdienst**. Premies **werknemersverzekeringen** (WW/WIA) betaalt de werkgever zelf. Inhouden mag niet onder het **minimumloon**. *(Rijksoverheid, Ondernemersplein)*
### 1.3.1 — Discriminatie verboden  ✅
- Discriminatie op het werk is **wettelijk verboden** (Algemene wet gelijke behandeling), door werkgever én collega's. Hulp: **vertrouwenspersoon**, **vakbond**, **antidiscriminatievoorziening (ADV)**, **College voor de Rechten van de Mens** (beoordeelt individuele klachten). *(College voor de Rechten van de Mens)*
### 1.4.1 — Eigen bedrijf starten  ✅
- **Inschrijving bij de Kamer van Koophandel (KvK)** is **verplicht** (Handelsregister), ook voor zzp (binnen 1 week). **Recht op uitkering vervalt** in principe bij KvK-inschrijving → eerst **overleggen** met uitkeringsinstantie/gemeente. KvK biedt **ondersteuning**. Als zelfstandige regel je **zelf** je **pensioen** + **arbeidsongeschiktheidsverzekering (AOV)**. *(KvK, CBS)* ⚠️ Verplichte AOV voor zzp (wet BAZ) is in de maak, op zijn vroegst **2030** — nu nog zelf regelen.

---

# Theme 2 — Omgangsvormen, waarden en normen

### 2.1.1 — Omgangsvormen verschillen per groep
- Omgangsvormen, waarden en normen verschillen per sociale groep, regio, generatie en sociaaleconomische klasse. Je stelt je op de hoogte van de gewoontes van een context door te observeren en vragen te stellen. ◯

### 2.1.2 — Directheid
- Veel Nederlanders communiceren **direct**: ze zeggen duidelijk wat ze denken/willen en zeggen ook "nee". Dit is doorgaans niet onbeleefd of vijandig bedoeld. ◯

### 2.1.3 — Afspraken en op tijd komen
- Afspraken maak je **van tevoren** (werk, instanties, zorgverleners). **Op tijd komen** en een afspraak **tijdig afzeggen** worden gewaardeerd. ◯

### 2.1.4 — Samenlevingsvormen
- Het **huwelijk** staat open voor partners van gelijk geslacht sinds **1 april 2001** (Nederland was het eerste land ter wereld). ✅ *(Rijksoverheid)*
- **Geregistreerd partnerschap** (sinds 1998) en huwelijk zijn beide **wettelijk** geregeld; rechten grotendeels gelijk. ◯
- **Ongehuwd samenwonen** komt veel voor (eventueel met een samenlevingscontract). ◯

### 2.1.5 — Officiële feest- en gedenkdagen
- Officiële feestdagen: Nieuwjaarsdag (1 jan), Goede Vrijdag, Eerste/Tweede Paasdag, **Koningsdag 27 april** (⚠️ verschuift naar **26 april** als 27 april een zondag is), Bevrijdingsdag 5 mei, Hemelvaartsdag, Eerste/Tweede Pinksterdag, Eerste/Tweede Kerstdag (25–26 dec). ◯
- **Dodenherdenking 4 mei** (gedenkdag): 20.00 uur **2 minuten stilte**. **Bevrijdingsdag 5 mei** (1945): viering van de vrijheid. ◯
- ✅ **"Officiële feestdag" ≠ automatisch een vrije/betaalde dag** — er is **geen wettelijk recht**; of je vrij bent en of het loon doorbetaald wordt, hangt af van je **cao/werkgever**. **Bevrijdingsdag (5 mei):** in veel cao's alleen vrij **1× per 5 jaar** (lustrumjaren 2025, 2030); in de **publieke sector en het onderwijs** elk jaar vrij. *(Rijksoverheid – arbeidsovereenkomst en cao, 2026-06-20)*
- In sommige kringen: Sinterklaas (5 dec), Carnaval (zuiden), Suikerfeest/Eid (einde ramadan), Keti Koti (1 juli, herdenking afschaffing slavernij). ◯

### 2.2.1 — Verenigingen en vrijwilligerswerk
- Nederland kent veel maatschappelijke, culturele en sportieve **verenigingen/organisaties**. **Vrijwilligerswerk** en lidmaatschap helpen een sociaal netwerk op te bouwen. ◯

### 2.2.2 — Gebruiken bij familiegebeurtenissen
- **Verjaardag:** feliciteren (ook de andere familieleden); koffie met gebak; soms een cadeau (kringverjaardag is typisch NL). ◯
- **Geboorte:** beschuit met muisjes (roze/blauw); geboortekaartje; kraambezoek. ◯
- **Slagen examen:** schooltas aan de vlag buiten. ◯
- **Bruiloft:** feliciteren, cadeau of geld. ◯
- **Overlijden:** condoleren, condoleancekaart, begrafenis of crematie. ◯

---

# Theme 3 — Wonen

### 3.1.1 — Eerste woning + huurcontract
- De **eerste woning** loopt voor veel nieuwkomers via het **aanbod van de gemeente** (wachtlijst), tenzij je je voegt bij familie die al woonruimte heeft. ◯
- **Huurcontract** = schriftelijke afspraak met huurprijs, regels en opzegtermijn; lees het vóór ondertekening. ◯
- De **woningmarkt verschilt sterk per gemeente**. ◯

### 3.1.2 — Huurdersrechten
- Huurders hebben **wettelijke rechten**; de verhuurder moet zich aan wet + contract houden (onderhoud, geen onterechte huurverhoging). ✅
- Hulp bij geschillen: **Huurcommissie** — onafhankelijke geschilbeslechter voor **huurprijs, servicekosten, onderhoud, jaarlijkse huurverhoging**; voor de huurder **€25**, geen advocaat nodig. ✅ *(Huurcommissie)*
- **Juridisch Loket** — **gratis** juridisch advies, verwijst zo nodig door (ook naar de Huurcommissie). ✅ *(Juridisch Loket)*
- ⚠️ Maximale huurverhoging **vrije sector 2026 = 4,4%** (jaarlijks vastgesteld). *(Rijksoverheid/Huurcommissie)*

### 3.1.3 — Een andere woning zoeken
- Drie wegen: **sociale huur** (woningcorporatie; inkomensgrens; inschrijven + wachttijd), **vrije/particuliere huursector**, en **koop** (makelaar, hypotheek). ◯
- **Snel inschrijven** als woningzoekende (wachttijden). Formuleer een **woonwens** passend bij situatie + inkomen. Beschikbaarheid verschilt **per regio**. ◯

### 3.2.1 — Energie, water, internet
- Je bent **zelf verantwoordelijk** voor aansluiting van energie (gas/stroom), water en internet. ◯
- **Energie + internet/telefoon:** je **kiest zelf** een leverancier/provider. ◯
- **Water:** **geen vrije keuze** — je krijgt het **regionale drinkwaterbedrijf** dat bij je woonplaats hoort (o.a. Vitens, PWN, Dunea, Brabant Water, Evides, WML, Waternet, Oasen); je meldt je daar aan. ✅ *(regionaal monopolie; algemeen bekend / drinkwaterbedrijven)*
- **Meterstanden** doorgeven; bij **storing** de leverancier bellen. ◯

### 3.2.2 — Energiekosten en besparen
- Kosten van energie/water **fluctueren**. De rekening toont **verbruik + kosten**. ◯
- Besparen is goed voor het **milieu** en houdt de rekening lager. ◯
- Energiecontract: **vast** vs. **variabel** tarief; verschillende **looptijden**. ◯

### 3.3.1 — Afval scheiden
- Afvalstromen: **papier/karton**, **glas** (glasbak), **gft** (groente-, fruit- en tuinafval), **pmd** (plastic, metaal, drankkartons), **restafval** (wordt verbrand); daarnaast textiel, klein chemisch afval (kca), e-waste. ✅ *(Milieu Centraal)*
- Regels (inzameling, dagen, soms **diftar**) verschillen **per gemeente**. ◯
- Scheiden maakt **recycling** mogelijk → spaart grondstoffen, energie en CO₂. ✅ *(Milieu Centraal)*
- ⚠️ **PMD-regels uitgebreid per 1 jan 2026** (o.a. koffiecups van aluminium/plastic, lege spuitbussen). *(Milieu Centraal)*

---

# Theme 4 — Gezondheid en gezondheidszorg

### 4.1.1 — Huisarts als eerste aanspreekpunt
- De **huisarts** is het **eerste aanspreekpunt** (poortwachter). Zelf kiezen + inschrijven; afspraak per telefoon. ✅
- De **praktijkondersteuner (POH)** ondersteunt de huisarts; je kunt er ook met **psychische klachten** terecht (POH-GGZ). ◯
- **Recht op een tolk.** ⚠️ Wie de tolk in de zorg betaalt is door de jaren gewijzigd — eindterm geeft het *recht*; **verify** current funding. ◯
- **Medisch beroepsgeheim:** info wordt alleen **met toestemming** van de cliënt gedeeld. ◯

### 4.1.2 — Apotheek
- **Receptgeneesmiddelen:** recept van (huis)arts nodig → ophalen bij de **apotheek**. ✅
- **Zelfzorgmiddelen** (bv. paracetamol) mogen **zonder recept** bij de **drogist**/apotheek. ◯

### 4.1.3 — Tandarts
- **Tandarts** zelf kiezen; regelmatige **controle** gebruikelijk (meestal 1–2× per jaar); **mondhygiënist** voor gebitsreiniging. ◯
- ⚠️ Tandartszorg voor **volwassenen zit niet in het basispakket** (zie 4.4.1).

### 4.1.4 — Zwangerschap en geboorte
- **Verloskundige:** begeleidt zwangerschap + bevalling. ◯
- **Kraamzorg:** verzorgt moeder + baby **thuis** de eerste dagen na de geboorte (~8–10 dagen). ◯
- **Consultatiebureau** (jeugdgezondheidszorg): volgt groei/ontwikkeling en geeft **vaccinaties** (Rijksvaccinatieprogramma). ◯ *(confirmed by Wesley 2026-06-20)*

### 4.2.1 — Doorverwijzing
- De huisarts **verwijst door** naar **medisch specialist** (ziekenhuis) of **GGZ**. NL = **poortwachterssysteem**: meestal eerst huisarts, dan met verwijzing naar de specialist. ✅

### 4.3.1 — Huisartsenpost
- **Huisartsenpost (HAP):** spoedeisende huisartsenzorg in **avond/nacht/weekend**. **Altijd eerst bellen.** Voor klachten die niet kunnen wachten, maar geen levensgevaar. ✅

### 4.3.2 — 112
- **112** = nationaal **alarmnummer** (ambulance, brandweer, politie) bij **levensbedreigende** spoed. ✅
- Minder ernstig → huisarts(enpost). (Politie geen spoed: **0900-8844**; zelfmoordpreventie: **113**.) ◯

### 4.4.1 — Zorgverzekering, basispakket, eigen risico  ✅ *(Rijksoverheid / Zorginstituut, 2026-06-20)*
- **Zorgverzekering verplicht** vanaf **18 jaar**; je kiest zelf een zorgverzekeraar en mag **elk jaar wisselen** (opzeggen vóór 1 jan, overstappen vóór 1 feb). Kinderen <18 zijn **gratis** meeverzekerd.
- **Basispakket** (wettelijk, voor iedereen gelijk): o.a. huisarts, ziekenhuis/medisch-specialist, wijkverpleging, zwangerschaps- en geboortezorg, GGZ, geneesmiddelen.
- **Tandarts + fysiotherapie** zitten in het basispakket **alleen voor kinderen tot 18**; volwassenen verzekeren zich daarvoor **aanvullend** (vrijwillig).
- **Eigen risico** ⚠️(jaarlijks): het **eerste deel** van de basispakket-kosten per jaar betaal je zelf — **€385 (2024–2026)**. **Huisarts** is **uitgezonderd** (kost geen eigen risico); kinderen <18 betalen **geen** eigen risico. Mag **gespreid** betaald worden. Vrijwillig te verhogen tot **€885** voor lagere premie. *(politiek besproken om te verlagen vanaf 2027 — re-check)*
- **Eigen bijdrage:** een deel van bepaalde kosten dat je zelf betaalt (los van het eigen risico).
- **Premie:** maandelijks aan de verzekeraar; lage inkomens kunnen **zorgtoeslag** krijgen (Belastingdienst). ◯

### 4.4.2 — Declareren
- **Declareren:** soms stuurt de zorgverlener de rekening **direct** naar de verzekeraar; soms dien je de **nota zelf** in (meestal online). Bewaar rekeningen. ◯

### 4.4.3 — Digitale zorgadministratie
- Veel zorgadministratie (afspraken, declaraties, overstappen) gaat **digitaal** (online/app). ◯

### 4.4.4 — DigiD
- **DigiD** = persoonlijke **inlog voor overheid + zorg**; nodig voor aanvragen/declareren van veel voorzieningen. ◯
- Hulp: **bibliotheek (Informatiepunt Digitale Overheid / IDO)**, gemeente. ◯ *(confirmed by Wesley 2026-06-20)*

### 4.5.1 — Welzijn via gemeente / wijkteam
- **Gemeenteloket / wijkteam** bieden **welzijnsvoorzieningen** voor iedereen: hulp bij **schulden/armoede**, **eenzaamheid/sociaal isolement**, maatschappelijke **participatie**, en **hulp thuis** (Wmo: ouderen, langdurig zieken, mensen met een beperking). ◯

---

# Theme 5 — Geschiedenis en geografie  *(verified 2026-06-20; fact-dense + sensitive history)*

### 5.1.1 — Geschiedenis + overblijfselen  ✅
- **Gouden Eeuw (17e eeuw):** door **scheepvaart en handel** economische + culturele bloei; herkenbaar in **schilderkunst** (Rembrandt, Vermeer) en **architectuur** (grachtenpanden).
- **Slavernijverleden:** Nederland stichtte **koloniën**, maakte mensen tot **slaaf**, verhandelde hen en zette hen op **plantages** te werk. **Slavernij afgeschaft 1863** (Suriname/Antillen); **Keti Koti** (1 juli) herdenkt dit. **Staatsexcuses:** premier Rutte **19 dec 2022**, Koning **1 juli 2023**. ⚑ sensitive
- **Water:** lange traditie van leven met waterdreiging → **polders, molens, dijken, Deltawerken**.
- **Symbolen:** volkslied = **Wilhelmus** (oudste ter wereld, ~1572); **vlag** = drie horizontale banen **rood-wit-blauw**. *(Canon van Nederland, Rijksoverheid, Britannica)*
### 5.1.2 — Recente geschiedenis  ✅  ⚑ sensitive
- **WWII:** Nederland **bezet door Duitsland 1940–1945** (invasie 10 mei 1940; bevrijding/capitulatie 5 mei 1945). **Holocaust:** systematische moord op Joden door de nazi's; **veel Nederlandse Joden vermoord**. **Antisemitisme bij wet verboden.**
- **1945 bevrijd; 4 mei Dodenherdenking, 5 mei Bevrijdingsdag** (zie ook 2.1.5).
- **Naoorlogse immigratie:** uit voormalige koloniën, arbeidsmigranten, vluchtelingen.
- **Internationale samenwerking:** **EU, NAVO, VN**.
- **Sinds de jaren 60:** individuele vrijheid, emancipatie, tolerantie, zelfbeschikking.
- **Wettelijk geregeld:** **homohuwelijk (2001, NL eerste land), euthanasie (wet 2001, in werking 2002), abortus (Wet afbreking zwangerschap, 1981/in werking 1984)**. *(Canon van Nederland, historiek, denederlandsegrondwet)*
### 5.2.1 — Plaatsen en provincies  ✅
- **Amsterdam = hoofdstad**; **Den Haag = zetel van regering + parlement** (en waar de koning werkt, Hoge Raad, internationale hoven).
- **12 provincies (+ hoofdsteden):** Groningen (Groningen), Friesland (Leeuwarden), Drenthe (Assen), Overijssel (Zwolle), Flevoland (Lelystad), Gelderland (Arnhem), Utrecht (Utrecht), Noord-Holland (**Haarlem**, niet Amsterdam), Zuid-Holland (**Den Haag**, niet Rotterdam), Zeeland (Middelburg), Noord-Brabant ('s-Hertogenbosch/Den Bosch), Limburg (Maastricht).
- Eigen regio: belangrijkste steden + mogelijkheden voor wonen/werk/opleiding (lokaal — niet generiek te beschrijven). *(Wikipedia provincies, Britannica)*
### 5.2.2 — Openbaar vervoer  ✅
- Reizen met **trein (NS), bus, tram, metro**: **in- en uitchecken** bij elke reis. Vervoersbewijzen: **OV-chipkaart** of contactloos met **bankpas/telefoon (OVpay)**, of een **e-ticket/los kaartje**. ⚠️ OV-chipkaart wordt uitgefaseerd (volledig gestopt ~2027); OVpay is het nieuwe systeem. Reis plannen via **9292** / NS-app. *(9292, OV-chipkaart.nl)*

# Theme 6 — Instanties  *(verified 2026-06-20)*

### 6.1.1 — Digitaal contact met de overheid
- Overheidscontact gaat meestal **digitaal**. Veilig met je **burgerservicenummer (BSN)** + **DigiD**; info online vinden, afspraken online maken. Hulp bij digitaal contact via o.a. bibliotheek (IDO) / gemeente. ✅ *(eindterm 6.1.1)*
### 6.1.2 — Andere instanties
- Naast de overheid: **Nibud**, **schuldhulpverlening**, **voedselbank**, **GGD**, **Juridisch Loket**, **maatschappelijk werk**, **jeugdzorg**. ✅ *(eindterm 6.1.2)*
### 6.2.1 — Wijzigingen doorgeven (BRP)
- Wijzigingen in de gezinssamenstelling doorgeven aan de gemeente (**BRP = Basisregistratie Personen**): geboorte, huwelijk, samenwonen, echtscheiding, overlijden, verhuizing, migratie; erkenning kind; kan **uitkeringen/toeslagen** beïnvloeden. ✅ *(eindterm 6.2.1)*
### 6.2.2 — Officiële documenten  ✅
- **Paspoort/identiteitskaart:** bij de **gemeente**. **Rijbewijs:** aanvragen bij de **gemeente** ná het rijexamen bij het **CBR** (kaart gemaakt door RDW). **Verblijfsvergunning:** bij de **IND** (Immigratie- en Naturalisatiedienst). *(Rijksoverheid, CBR, IND)*
### 6.2.3 — Verblijfsvergunning en naturalisatie  ✅
- Verschillende soorten **verblijfsvergunningen** (bepaalde/onbepaalde tijd), aanvragen bij de **IND**. **Naturalisatie** (Nederlander worden): indienen via de **gemeente**, beslissing door de IND.
- **Dubbele nationaliteit:** bij naturalisatie moet je **in principe afstand doen** van je oude nationaliteit (Rijkswet op het Nederlanderschap), **tenzij** een uitzondering geldt (o.a. huwelijk met Nederlander, geboren in NL, vluchtelingenstatus, afstand onmogelijk/onredelijk; minderjarigen die meenaturaliseren). *(IND, Rijksoverheid)*
### 6.2.4 — Gemeentelijke belastingen
- Gemeente int o.a. **ozb** (onroerendezaakbelasting), **rioolheffing**, **afvalstoffenheffing**, **parkeerbelasting**. ✅ *(eindterm 6.2.4)*
### 6.3.1 — Salarisstrook en jaaropgave
- Je krijgt een (digitale) **salarisstrook** + **jaaropgave**. **Bruto** = vóór belasting, **netto** = wat je ontvangt. Jaaropgave **minstens 5 jaar bewaren**. ✅ *(eindterm 6.3.1)*
### 6.3.2 — Belasting betalen/terugkrijgen
- Soms bijbetalen, soms terugkrijgen → **aangifte inkomstenbelasting** (vaak verplicht). Hulp beschikbaar (Belastingdienst e.a.). Belastinggeld → onderwijs, zorg, wegen, overheid, politie, rechtspraak. ✅ *(eindterm 6.3.2)*
### 6.3.3 — Toeslagen en kinderbijslag  ✅
- **Belastingdienst (Dienst Toeslagen)** verstrekt **zorgtoeslag, huurtoeslag, kinderopvangtoeslag** (+ kindgebonden budget). Zelf aanvragen via Mijn Toeslagen (DigiD). **Inkomensverandering tijdig doorgeven** (anders terugbetalen). **Kinderbijslag** via de **SVB (Sociale Verzekeringsbank)** — officieel geen toeslag. *(Belastingdienst, SVB)*
### 6.4.1 — Politie  ✅
- Politie: **beschermen, toezicht, handhaven**; aanwijzingen **opvolgen**. **Verplicht aangifte** bij een heel ernstig misdrijf (moord, doodslag, verkrachting, ontvoering). Hulp ook bij overlast, ongevallen, diefstal, geweld, oplichting, discriminatie. **112** bij spoed.
- **Identificatieplicht vanaf 14 jaar** (in het openbaar vervoer vanaf **12**): geldig ID tonen als politie/bevoegd gezag erom vraagt. *(Rijksoverheid, Wet op de identificatieplicht)*
### 6.5.1 — Bezwaar / ombudsman  ✅
- **Bezwaar** mogelijk tegen slechte behandeling/discriminatie door de overheid (incl. politie). Klachten over overheidsoptreden: **gemeentelijke ombudsman** of de **Nationale ombudsman** (UWV, Belastingdienst, politie, gemeente; eerst zelf klagen bij de instantie). **Corruptie** is **verboden en strafbaar**. *(Nationale ombudsman)*
### 6.5.2 — Juridische hulp  ✅
- Juridische hulp via **advocaten** of het **Juridisch Loket** (gratis advies). Laag inkomen → **gesubsidieerde rechtsbijstand** ("toevoeging", Raad voor Rechtsbijstand): je betaalt een **eigen bijdrage** passend bij je inkomen. *(Rijksoverheid, Juridisch Loket, rvr.org)*
### 6.6.1 — Verzekeringen
- Verzekeren tegen risico's is gebruikelijk; sommige **verplicht**: **zorgverzekering** (verplicht, 18+); **motorvoertuig** → **WA-verzekering verplicht** + **motorrijtuigenbelasting**; **huiseigenaar** → **opstalverzekering** verplicht. Een gewone **WA-aansprakelijkheidsverzekering** is **niet verplicht maar wel zeer wenselijk**. Zelf aanvragen + **schade declareren**. ✅ *(eindterm 6.6.1)*

# Theme 7 — Staatsinrichting en rechtsstaat  *(verified 2026-06-20; highest accuracy load + sensitive values)*

### 7.1.1 — Staatsinrichting  ✅
- **Koninkrijk** met koningshuis; **Koning = Willem-Alexander**, vooral **ceremoniële** functie (bestuurt niet zelf). **Democratische rechtsstaat**; **parlement = 2 Kamers** (Tweede Kamer 150 + Eerste Kamer 75). **Parlement + regering maken samen de wetten**. Meerdere **politieke partijen**; partijen vormen een **regering** met **ministers**.
- **Minister-president** (premier) geeft leiding aan de ministers. ⚠️ **VOLATILE — nu Rob Jetten (D66), sinds 23 feb 2026 (kabinet-Jetten, na verkiezingen okt 2025); was Dick Schoof.** Re-check na elke kabinetswisseling. *(Parlement.com)*
- **Drie bestuursniveaus:** rijk, provincies, gemeenten (elk eigen taken). *(eindterm + Parlement.com)*
### 7.1.2 — Europese Unie
- Nederland is **lid van de EU** en moet EU-afspraken/regels nakomen. Voor burgers: **vrij verkeer van personen en goederen**, vrije vestiging in lidstaten, deelname aan **Europese verkiezingen**. ✅ *(eindterm 7.1.2)*
### 7.1.3 — Scheiding der machten (trias politica)  ✅
- **Wetgevende** (regering + Staten-Generaal: wetten maken), **uitvoerende** (regering/ministers: wetten uitvoeren), **rechterlijke** (onafhankelijke rechters: rechtspreken) macht. Ze **controleren elkaar** → niemand heeft alle macht. (In NL strikt genomen *spreiding*: de regering heeft ook wetgevende taken.) Een rechterlijke uitspraak **accepteren**, maar **hoger beroep** mogelijk. *(ProDemos, Denederlandsegrondwet)*
### 7.1.4 — Kiesrecht  ✅
- **Actief kiesrecht** = mogen stemmen; **passief kiesrecht** = gekozen kunnen worden (vanaf 18; in NL vallen ze samen). Verkiezingen: **gemeenteraad, provinciale staten, Tweede Kamer, Europees Parlement, waterschappen**, + **referenda**. **Niet-Nederlanders met ≥5 jaar legaal verblijf** mogen meedoen aan **gemeenteraadsverkiezingen** (EU-burgers direct). *(Kiesraad, ProDemos)*
### 7.2.1 — Gelijkwaardigheid man/vrouw
- Mannen en vrouwen zijn **voor de wet gelijkwaardig** en moeten gelijk behandeld worden; **dezelfde kansen** (scholing, arbeid, ontplooiing). ✅ *(eindterm 7.2.1)* ⚑ values
### 7.2.2 — Vrijheid van meningsuiting
- De wet **beschermt** vrijheid van meningsuiting, **maar** je mag niets zeggen/schrijven dat **bij wet verboden** is (bv. discriminatie, aanzetten tot haat). Sommige uitingen kunnen als **kwetsend** ervaren worden. ✅ *(eindterm 7.2.2)*
### 7.2.3 — Godsdienstvrijheid
- Iedereen mag **zelf** een godsdienst/levensbeschouwing/idealen kiezen (of niet geloven). **De wetten van de staat staan boven die van religie en traditie.** Overheid mengt zich **niet** in interne zaken van geloofsgenootschappen, **zolang die zich aan de wet houden**. ✅ *(eindterm 7.2.3)* ⚑ values
### 7.2.4 — Artikel 1 Grondwet  ✅
- **Artikel 1**: gelijke behandeling in gelijke gevallen; **verbod op discriminatie** wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, **handicap**, **seksuele gerichtheid** "of op welke grond dan ook". (Handicap + seksuele gerichtheid sinds wijziging **22 feb 2023**.) Discriminatie melden bij een **meldpunt** (antidiscriminatievoorziening) + **politie**. *(Denederlandsegrondwet, Rijksoverheid)*
### 7.2.5 — Privacy
- Privacy beschermd door de wet. Deel alleen **persoonsgegevens die een instantie nodig heeft**; recht om je gegevens **in te zien** en zo nodig te **wijzigen**. ✅ *(eindterm 7.2.5)*
### 7.2.6 — Lichamelijke integriteit
- De wet beschermt de **integriteit van het lichaam**; **alle ongewenste intimiteit en geweld zijn strafbaar**: huiselijk geweld, eer­gerelateerd geweld (eerwraak), kindermishandeling (slaan van kinderen), meisjesbesnijdenis, geweld op straat. (Hulp/meldpunt: **Veilig Thuis**, politie/112.) ✅ *(eindterm 7.2.6)* ⚑ sensitive
### 7.2.7 — Orgaandonatie  ✅
- Sinds de **nieuwe Donorwet (1 juli 2020) = Actief Donorregistratiesysteem**: iedereen staat na overlijden **in principe** organen af, **tenzij** je in het **Donorregister** anders vastlegt (wel/geen donor, of een ander laten beslissen). Wie niets vastlegt, komt op **"geen bezwaar"**. *(Rijksoverheid, Donorregister)*
### 7.2.8 — Zelfbeschikkingsrecht  ⚑ values
- Vrouwen (net als mannen) hebben **zelfbeschikkingsrecht**: zelf beslissen over je **eigen leven en lichaam** — o.a. opleiding, werk, **partnerkeuze**, met wie je trouwt, en of/wanneer je kinderen wilt; **niemand** mag dat voor je beslissen of je dwingen. ✅ *(eindterm 7.2.8; Movisie)*

# Theme 8 — Onderwijs en opvoeding  *(verified 2026-06-20)*

### 8.1.1 — Opbouw van het onderwijssysteem (0–18+)
- **0–4 jr:** ontwikkelingsgericht aanbod — kinderopvang, peuterspeelzaal, voorschoolse educatie (vve).
- **Basisschool:** 4–12 jr (groep 1 t/m 8). **Voortgezet onderwijs** (vanaf ~12): **vmbo** (4 jr, voorbereidend op mbo), **havo** (5 jr → hbo), **vwo** (6 jr → universiteit). Daarna **mbo** (4 niveaus), **hbo**, **wo** (universiteit).
- **Speciaal onderwijs** voor leerlingen met een speciale zorgvraag. Bij doorstroom naar vervolgonderwijs kunnen **toelatingseisen** (diploma's) gelden. ✅ *(Nuffic, Onderwijsloket, Rijksoverheid)*

### 8.1.2 — Vrijheid van onderwijs
- **Artikel 23 Grondwet:** vrijheid van onderwijs. **Openbare** scholen (van de overheid, algemeen toegankelijk, neutraal) en **bijzondere** scholen (opgericht vanuit een **levensbeschouwing**, bv. religie, of een **onderwijsvisie**, bv. Montessori/Jenaplan). Beide worden **gelijk door de overheid bekostigd** (sinds 1917). ✅ *(Denederlandsegrondwet, art. 23)*

### 8.1.3 — Leerplicht en kwalificatieplicht
- **Leerplicht: 5–16 jr.** Begint op de 1e dag van de maand ná de 5e verjaardag; loopt t/m het einde van het schooljaar (1 aug–31 juli) waarin het kind 16 wordt. De meeste kinderen starten al op hun 4e.
- **Kwalificatieplicht: 16–18 jr** zolang er nog geen **startkwalificatie** is (minimaal diploma **havo, vwo of mbo niveau 2**); eindigt bij startkwalificatie of op 18 jr.
- Door de school vastgestelde **vakantietijden zijn bindend** (geen vakantie buiten de schoolvakanties zonder toestemming; "luxverzuim" → boete). ✅ *(Rijksoverheid – leerplicht/kwalificatieplicht)*

### 8.1.4 — Voorschoolse educatie / buitenschoolse opvang
- **Voorschoolse educatie (vve):** voor jonge kinderen (vaak 2,5–4 jr), gericht op taal/ontwikkeling, bij peuterspeelzaal/kinderopvang; vaak via de **gemeente**.
- **Buitenschoolse opvang (bso):** opvang vóór/na schooltijd.
- **Bekostiging:** werkende ouders kunnen **kinderopvangtoeslag** krijgen (Belastingdienst). ◯ *(toeslag-detail nog te bevestigen; vve-bekostiging via gemeente)*

### 8.1.5 — Verplichte les over seksualiteit en seksuele diversiteit
- Scholen in **basis- en voortgezet onderwijs** (en speciaal onderwijs) zijn sinds **eind 2012** (Staatsblad 2012, 470) **verplicht** aandacht te besteden aan **seksualiteit** en **seksuele diversiteit** (kerndoel 38 PO / kerndoel 43 VO). De school bepaalt **zelf hoe**. ✅ *(Rijksoverheid, seksuelevorming.nl, Stb 2012-470)*

### 8.2.1 — Ouders verantwoordelijk voor het gedrag van hun kind
- Ouders zijn **wettelijk verantwoordelijk** voor het gedrag van hun minderjarige kind; eindterm: **tot het 16e jaar juridisch aansprakelijk**. (BW 6:169 nuance: <14 jr → ouders volledig (risico)aansprakelijk; 14–15 → tenzij zij het niet konden voorkomen; 16–17 → het kind zelf.) ◯⚠️ *(volg de eindterm "tot 16"; nuance genoteerd)*

### 8.2.2 — Ouderbetrokkenheid
- Scholen verwachten **betrokkenheid** van ouders. **Overlegmomenten:** oudergesprekken (10-minuten-/rapportgesprekken), ouderavond. Ouders kunnen **vrijwillig** helpen bij schoolactiviteiten. ◯ *(standaard)*

### 8.2.3 — Opvoedingsondersteuning
- Hulp via **gemeente**, **Centrum voor Jeugd en Gezin (CJG)**, **jeugdzorg**, **huisarts**, **school**. De **Raad voor de Kinderbescherming** kan ingrijpen, maar schakelt **alleen bij ernstige signalen de rechter** in. ◯ *(CJG/Raad — standaard)*

### 8.3.1 — Kosten van onderwijs
- Aan onderwijs zijn kosten verbonden: **(vrijwillige) ouderbijdrage**, **leermiddelen/spullen** (in VO zijn de schoolboeken **gratis**), **reiskosten**, en op het mbo vanaf 18 jr **lesgeld**. ◯
### 8.3.2 — Vergoedingen / kwijtschelding
- De **vrijwillige ouderbijdrage** is écht vrijwillig: sinds de **wet van 1 aug 2021** mag een school een kind **niet uitsluiten** van activiteiten als ouders niet (kunnen) betalen; dit moet in de schoolgids staan. ✅ *(Onderwijsinspectie, AVS)*
- Hulp met kosten: **gemeente** (o.a. bijzondere bijstand, stadspas), **Stichting Leergeld**; je kunt bij de school **vermindering of kwijtschelding** aanvragen. ✅ *(Leergeld)*

### 8.3.3 — Tegemoetkoming studiekosten (DUO)
- Voor school-/studiekosten kun je een aanvraag indienen bij **DUO (Dienst Uitvoering Onderwijs)**: **studiefinanciering** (mbo niveau 3–4, hbo, wo, vanaf 18 jr) en tegemoetkoming voor scholieren. Aanvragen meestal online met **DigiD**. ◯ *(DUO = eindterm; standaard)*

---

## Maintenance

- When the **eindtermen** change, re-transcribe `knm-eindtermen.ts`, then revisit affected entries here.
- When a **volatile fact** (⚠️) changes (amounts, percentages, body names), update it **here first** with a
  new verified date, then re-check the card (`knm-reference-cards.ts`) and any lesson that renders it.
- Upgrade `◯ → ✅` whenever you attach an official source. The goal is **every fact ✅ with a citation.**
