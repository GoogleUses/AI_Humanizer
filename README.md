# AI Humanizer Pro

Advanced client-side AI text humanizer with built-in detector simulators and auto-optimization.

## Features

### Humanizer Engine v3
- AI tell word elimination (removes "furthermore," "moreover," "utilize," etc.)
- Burstiness engineering (forced short punch sentences + fragments + long run-ons)
- Mid-sentence interruption injection (em-dashes, parentheticals)
- Typo injection (strong human signal — detectors read typos as human)
- Rhetorical question insertion (AI almost never asks questions mid-text)
- First-person aside injection ("I mean, think about it.")
- Sentence fragments ("True." "Exactly." "Depends.")
- Transition word replacement (formal → natural)
- Punctuation variation (em-dashes, semicolons, parentheticals)
- Paragraph restructuring (varied paragraph lengths)
- Contraction application (AI underuses contractions)
- Intensity parameter (1-3) controls transformation aggressiveness

### Detector Simulators (8 platforms)
Each simulator approximates the real detector's scoring methodology:
1. **GPTZero** — burstiness-focused (40% weight). Abused by extreme sentence length variance.
2. **Turnitin** — AI vocabulary-focused (30% weight). Abused by removing formal transitions.
3. **Originality.ai** — perplexity-focused (35% weight). Abused by unpredictable word choices.
4. **Copyleaks** — structure-focused (35% weight). Abused by varying sentence openers.
5. **Winston AI** — paragraph structure-focused (30% weight). Abused by varied paragraph lengths.
6. **ZeroGPT** — formality-focused (35% weight). Abused by contractions and casual phrasing.
7. **Sapling AI** — perfection-focused (30% weight). Abused by intentional typos.
8. **Content at Scale** — balanced (20% each). Abused by hitting all metrics simultaneously.

### Auto-Optimizer
- Runs up to 10 humanization passes with increasing intensity
- Tests each pass against all 8 detectors
- Returns the first result that passes all detectors
- Falls back to the highest-scoring result if no pass clears all detectors

## How Each Detector's Flaws Are Abused

### GPTZero
**Flaw:** Relies heavily on burstiness (sentence length variation).
**Abuse:** Force extreme sentence length variation — 1-word fragments mixed with 30+ word sentences. This spikes the standard deviation GPTZero measures, pushing burstiness into the "human" range.

### Turnitin
**Flaw:** Trained on academic AI text, expects formal vocabulary.
**Abuse:** Aggressively strip all formal vocabulary ("furthermore," "moreover," "utilize," "facilitate") and replace with informal alternatives. Without these markers, Turnitin's classifier struggles.

### Originality.ai
**Flaw:** High false positive rate on text with unusual word choices.
**Abuse:** Use unexpected synonyms and quirky phrasing that lowers the predictability score. The more unusual the word choices, the harder it is for Originality to classify as AI.

### Copyleaks
**Flaw:** Checks for repetitive sentence structures.
**Abuse:** Never use the same sentence structure twice — mix declarative, interrogative, and exclamatory sentences. Vary openers constantly so no two sentences start the same way.

### Winston AI
**Flaw:** Expects uniform paragraph lengths.
**Abuse:** Vary paragraph lengths from 1 sentence to 7 sentences. This breaks the structural patterns Winston AI looks for.

### ZeroGPT
**Flaw:** Trained on formal text, can't handle informality.
**Abuse:** Add contractions, slang, casual phrasing, and informal word choices. ZeroGPT's formality detector reads informal text as human.

### Sapling AI
**Flaw:** Expects perfect grammar and spelling.
**Abuse:** Inject intentional typos at a 2-10% rate. Sapling reads spelling errors as a strong human signal because AI never misspells.

### Content at Scale
**Flaw:** Uses a 3-channel balanced engine.
**Abuse:** Hit all metrics simultaneously — vary burstiness, perplexity, vocabulary, structure, and n-grams all at once. No single metric is perfect, but all being slightly off confuses the balanced classifier.

## Publish to GitHub Pages

1. Zip these files together
2. Upload to the root of your GitHub Pages repository
3. In Settings → Pages, choose Deploy from a branch, select the default branch and / (root)
4. The site entry point is index.html

## Files

- `index.html` — UI structure with detector results panel
- `styles.css` — Dark theme with detector result cards
- `app.js` — Humanizer v3 engine + Metrics calculator + 8 detector simulators + Auto-optimizer
- `README.md` — This file

After creating the zip file, please provide a download link for it.
