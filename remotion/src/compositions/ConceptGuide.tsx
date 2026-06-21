import React from 'react';
import {AbsoluteFill, CalculateMetadataFunction, Img, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../theme';
import {display, body} from '../fonts';
import {Wordmark, Counter, Dots} from '../components';

// One flexible carousel for four "language concept" post types. The variant drives only
// the cover marker pill and a couple of small accents; the slide structure is shared:
//   cover -> [optional intro] -> one card per concept -> CTA.
// Each card is intentionally loose so it can render a particle sense, a small-word, one
// side of a mistake pair, or an idiom (term + literal + meaning + examples + a tip).

export type ConceptVariant = 'particle' | 'small-words' | 'mistake' | 'idiom';

export type ConceptCard = {
  term: string; // the hero line: a sense label ("Nog = still"), a word, a side ("geen"), an idiom
  sub?: string; // secondary line under the term: the literal translation (idiom) or a short gloss
  meaning?: string; // a meaning or rule line
  examples?: {nl: string; en: string}[]; // 1-2 example pairs
  note?: string; // a "when to use it" / tip line, rendered as a gold-underline subhead
};

export type ConceptGuideProps = {
  variant: ConceptVariant;
  theme: string; // small kicker on each card, e.g. the word "nog" or "Common mistake"
  handle: string;
  coverImage: string; // watercolor cover (Joost), 4:5, same treatment as the cheatsheet
  cover: {kicker: string; title: string; sub: string};
  intro?: {title: string; body: string; points?: string[]}; // optional "what is X" slide
  cards: ConceptCard[];
  cta: {title: string; sub: string};
};

const PAD = 84;

const VARIANT_MARKER: Record<ConceptVariant, string> = {
  particle: 'LITTLE WORD',
  'small-words': 'SOUND MORE DUTCH',
  mistake: 'COMMON MISTAKE',
  idiom: 'DUTCH IDIOM',
};

export const conceptGuideDefaults: ConceptGuideProps = {
  variant: 'particle',
  theme: 'nog',
  handle: '@dutchwithjoost',
  coverImage: 'samples/bakery.png',
  cover: {kicker: 'ONE WORD, MANY MEANINGS', title: 'How to use "nog"', sub: 'The little word that does a lot.'},
  intro: {
    title: 'What is "nog" and how do you use it?',
    body: 'There is no single English match. The meaning shifts with where it sits and what it pairs with.',
    points: ['still', 'not yet', 'more / another', 'even (comparison)', 'only', 'a little longer'],
  },
  cards: [
    {term: 'Nog = still', meaning: 'When something keeps going.', examples: [{nl: 'Het regent nog.', en: 'It is still raining.'}, {nl: 'Ben je nog moe?', en: 'Are you still tired?'}], note: 'Use "nog" when something continues.'},
    {term: 'Nog = more', meaning: 'Add more of something.', examples: [{nl: 'Wil je nog koffie?', en: 'Do you want more coffee?'}, {nl: 'Zij is nog langer.', en: 'She is even taller.'}], note: 'Also strengthens a comparison.'},
    {term: 'Nog maar = only', examples: [{nl: 'Het is nog maar maandag.', en: 'It is only Monday.'}, {nl: 'Ik heb nog maar 3 euro.', en: 'I only have 3 euros left.'}], note: 'Often used to emphasize "only".'},
    {term: 'Nog = left', meaning: 'For time, distance, or quantity remaining.', examples: [{nl: 'Hoeveel tijd hebben we nog?', en: 'How much time do we have left?'}, {nl: 'Nog twee kilometer.', en: 'Two more kilometers.'}]},
  ],
  cta: {title: 'Want to learn more Dutch essentials?', sub: 'Join one of our courses and talk like a real Dutchie.'},
};

// One frame = one finished slide. cover + optional intro + cards + CTA.
export const calcConceptGuide: CalculateMetadataFunction<ConceptGuideProps> = ({props}) => ({
  durationInFrames: 1 + (props.intro ? 1 : 0) + props.cards.length + 1,
  fps: 1,
});

// Shrink the hero term when it is a long phrase (idioms) so it never overflows.
const termSize = (s: string): number => {
  const n = s.length;
  if (n <= 14) return 96;
  if (n <= 22) return 76;
  if (n <= 34) return 60;
  return 50;
};

const Cover: React.FC<{p: ConceptGuideProps}> = ({p}) => (
  <AbsoluteFill style={{backgroundColor: brand.bg}}>
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '56%'}}>
      <Img src={staticFile(p.coverImage)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}} />
      <AbsoluteFill style={{background: `linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 28%, ${brand.bg} 100%)`}} />
    </div>
    <div style={{position: 'absolute', top: PAD, left: PAD, display: 'flex', alignItems: 'center', gap: 18}}>
      <Wordmark handle={p.handle} />
      <div style={{background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 24, letterSpacing: 3, padding: '10px 20px', borderRadius: 999}}>{VARIANT_MARKER[p.variant]}</div>
    </div>
    <div style={{position: 'absolute', left: PAD, right: PAD, top: '57%', bottom: 140, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div style={{fontFamily: body, fontWeight: 800, fontSize: 30, letterSpacing: 4, color: brand.blue, marginBottom: 18}}>{p.cover.kicker}</div>
      <div style={{width: 96, height: 8, borderRadius: 999, background: brand.gold, marginBottom: 28}} />
      <div style={{fontFamily: display, fontWeight: 600, fontSize: 96, lineHeight: 1.02, color: brand.blue, marginBottom: 24}}>{p.cover.title}</div>
      <div style={{fontFamily: body, fontWeight: 500, fontSize: 42, lineHeight: 1.25, color: brand.ink}}>{p.cover.sub}</div>
    </div>
    <div style={{position: 'absolute', right: PAD, bottom: 64, fontFamily: body, fontWeight: 700, fontSize: 32, color: brand.blue}}>swipe →</div>
  </AbsoluteFill>
);

const IntroSlide: React.FC<{p: ConceptGuideProps; total: number}> = ({p, total}) => {
  const intro = p.intro!;
  return (
    <AbsoluteFill style={{backgroundColor: brand.bg, padding: PAD, display: 'flex', flexDirection: 'column'}}>
      <Wordmark handle={p.handle} />
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{fontFamily: display, fontWeight: 600, fontSize: 76, lineHeight: 1.05, color: brand.blue, marginBottom: 28}}>{intro.title}</div>
        <div style={{width: 96, height: 8, borderRadius: 999, background: brand.gold, marginBottom: 32}} />
        <div style={{fontFamily: body, fontWeight: 500, fontSize: 44, lineHeight: 1.32, color: brand.ink, marginBottom: intro.points ? 44 : 0}}>{intro.body}</div>
        {intro.points ? (
          <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            {intro.points.map((pt, k) => (
              <div key={k} style={{display: 'flex', alignItems: 'center', gap: 22}}>
                <span style={{flexShrink: 0, width: 18, height: 18, borderRadius: 999, background: brand.gold}} />
                <span style={{fontFamily: body, fontWeight: 600, fontSize: 42, color: brand.ink}}>{pt}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Dots active={1} total={total} />
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 28, color: brand.mutedInk}}>{p.handle}</div>
      </div>
    </AbsoluteFill>
  );
};

const CardSlide: React.FC<{p: ConceptGuideProps; i: number; dot: number; total: number}> = ({p, i, dot, total}) => {
  const c = p.cards[i];
  return (
    <AbsoluteFill style={{backgroundColor: brand.bg, padding: PAD, display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1}}>
        <Wordmark handle={p.handle} />
        <Counter i={i + 1} total={p.cards.length} />
      </div>
      <div style={{flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{position: 'absolute', top: -20, right: -10, fontFamily: display, fontWeight: 600, fontSize: 340, lineHeight: 1, color: 'rgba(0,37,219,0.06)', zIndex: 0}}>
          {String(i + 1).padStart(2, '0')}
        </div>
        <div style={{position: 'relative', zIndex: 1}}>
          <div style={{fontFamily: body, fontWeight: 700, fontSize: 26, letterSpacing: 4, color: brand.mutedInk, marginBottom: 20, textTransform: 'uppercase'}}>{p.theme}</div>
          <div style={{fontFamily: display, fontWeight: 600, fontSize: termSize(c.term), lineHeight: 1.04, color: brand.blue, marginBottom: c.sub ? 10 : 22}}>{c.term}</div>
          {c.sub ? <div style={{fontFamily: body, fontWeight: 500, fontStyle: 'italic', fontSize: 40, lineHeight: 1.2, color: brand.mutedInk, marginBottom: 20}}>{c.sub}</div> : null}
          {c.meaning ? <div style={{fontFamily: body, fontWeight: 500, fontSize: 42, lineHeight: 1.28, color: brand.ink, marginBottom: 30}}>{c.meaning}</div> : null}
          {c.examples ? (
            <div style={{display: 'flex', flexDirection: 'column', gap: 22, marginBottom: c.note ? 40 : 0}}>
              {c.examples.map((ex, k) => (
                <div key={k}>
                  <div style={{fontFamily: display, fontWeight: 600, fontSize: 52, lineHeight: 1.08, color: brand.blue}}>{ex.nl}</div>
                  <div style={{fontFamily: body, fontWeight: 500, fontSize: 38, lineHeight: 1.2, color: brand.ink}}>{ex.en}</div>
                </div>
              ))}
            </div>
          ) : null}
          {c.note ? (
            <div style={{maxWidth: 900}}>
              <div style={{display: 'inline-block', marginBottom: 14}}>
                <div style={{fontFamily: body, fontWeight: 700, fontSize: 30, color: brand.blue}}>When to use it</div>
                <div style={{height: 5, borderRadius: 999, background: brand.gold, marginTop: 8, width: '100%'}} />
              </div>
              <div style={{fontFamily: body, fontWeight: 500, fontSize: 38, lineHeight: 1.3, color: brand.ink}}>{c.note}</div>
            </div>
          ) : null}
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1}}>
        <Dots active={dot} total={total} />
        <div style={{fontFamily: body, fontWeight: 600, fontSize: 28, color: brand.mutedInk}}>{p.handle}</div>
      </div>
    </AbsoluteFill>
  );
};

const Cta: React.FC<{p: ConceptGuideProps; total: number}> = ({p, total}) => (
  <AbsoluteFill style={{backgroundColor: brand.blue, padding: PAD, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <div style={{marginBottom: 50}}>
      <Wordmark onDark handle={p.handle} />
    </div>
    <div style={{fontFamily: display, fontWeight: 600, fontSize: 92, lineHeight: 1.06, color: brand.white, marginBottom: 28}}>{p.cta.title}</div>
    <div style={{fontFamily: body, fontWeight: 500, fontSize: 44, lineHeight: 1.3, color: 'rgba(255,255,255,0.85)', marginBottom: 64}}>{p.cta.sub}</div>
    <div style={{alignSelf: 'flex-start', background: brand.gold, color: brand.goldText, fontFamily: body, fontWeight: 800, fontSize: 40, padding: '28px 48px', borderRadius: 999}}>
      Volg {p.handle} →
    </div>
    <div style={{position: 'absolute', left: PAD, bottom: PAD}}>
      <Dots active={total - 1} total={total} onDark />
    </div>
  </AbsoluteFill>
);

export const ConceptGuide: React.FC<ConceptGuideProps> = (props) => {
  const frame = useCurrentFrame();
  const hasIntro = Boolean(props.intro);
  const introCount = hasIntro ? 1 : 0;
  const total = 1 + introCount + props.cards.length + 1;
  if (frame === 0) return <Cover p={props} />;
  if (hasIntro && frame === 1) return <IntroSlide p={props} total={total} />;
  const cardIndex = frame - 1 - introCount;
  if (cardIndex < props.cards.length) return <CardSlide p={props} i={cardIndex} dot={frame} total={total} />;
  return <Cta p={props} total={total} />;
};
