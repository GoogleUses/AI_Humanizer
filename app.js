const Humanizer = {
  aiTellWords: {
    "furthermore": "on top of that",
    "moreover": "plus",
    "additionally": "also",
    "consequently": "so",
    "nevertheless": "still",
    "nonetheless": "even so",
    "hence": "which is why",
    "thus": "so",
    "therefore": "which means",
    "it is worth noting": "worth mentioning",
    "it is important to note": "key thing here",
    "in conclusion": "all in all",
    "in summary": "bottom line",
    "in other words": "meaning",
    "for instance": "say",
    "for example": "like",
    "in fact": "actually",
    "indeed": "really",
    "notably": "what stands out",
    "significantly": "in a big way",
    "substantially": "by a lot",
    "essentially": "at its core",
    "fundamentally": "basically",
    "ultimately": "at the end of the day",
    "comprehensive": "full",
    "facilitate": "help with",
    "utilize": "use",
    "leverage": "tap into",
    "demonstrate": "show",
    "implement": "set up",
    "incorporate": "bring in",
    "optimize": "tune",
    "enhance": "boost",
    "endeavor": "try",
    "ascertain": "figure out",
    "commence": "start",
    "terminate": "end",
    "endeavour": "try",
    "approximately": "roughly",
    "sufficient": "enough",
    "numerous": "a lot of",
    "predominantly": "mostly",
    "subsequently": "after that",
    "prior to": "before",
    "post": "after",
    "pre": "before",
    "via": "through",
    "among": "across",
    "whilst": "while",
    "amongst": "across",
    "amidst": "in the middle of",
    "notwithstanding": "despite",
    "therein": "in there",
    "thereby": "which",
    "wherein": "where",
    "heretofore": "until now",
    "hitherto": "so far",
  },
  humanSwaps: {
    "good": ["solid", "legit", "decent", "not bad", "actually pretty good"],
    "bad": ["rough", "shaky", "not great", "pretty rough", "subpar"],
    "big": ["massive", "huge", "hefty", "oversized", "way too big"],
    "small": ["tiny", "itty-bitty", "barely there", "compact", "puny"],
    "important": ["key", "huge deal", "make-or-break", "critical", "the big one"],
    "interesting": ["weirdly cool", "kinda fascinating", "worth a look", "oddly engaging"],
    "difficult": ["tough", "rough going", "a pain", "not easy", "tricky"],
    "easy": ["a breeze", "simple enough", "no sweat", "pretty painless"],
    "fast": ["quick", "snappy", "before you know it", "in no time"],
    "slow": ["sluggish", "dragging", "taking forever", "crawling"],
    "happy": ["pretty stoked", "pleased", "content enough", "in a good spot"],
    "sad": ["down", "bummed", "in a rough place", "not great"],
    "smart": ["sharp", "bright", "quick on the uptake", "no slouch"],
    "stupid": ["not the sharpest", "a bit dense", "slow on the uptake", "not winning any awards"],
    "beautiful": ["stunning", "gorgeous", "easy on the eyes", "something else"],
    "ugly": ["rough looking", "not pretty", "an eyesore", "hard to look at"],
    "successful": ["worked out", "panned out", "hit the mark", "nailed it"],
    "failed": ["fell apart", "didn't pan out", "went south", "tank"],
    "started": ["kicked off", "got going", "set things in motion", "dove in"],
    "ended": ["wrapped up", "came to a close", "finished out", "petered out"],
    "created": ["whipped up", "put together", "came up with", "cobbled together"],
    "destroyed": ["wiped out", "tore apart", "obliterated", "wrecked"],
    "improved": ["got better", "shaped up", "turned around", "leveled up"],
    "worsened": ["went downhill", "took a hit", "got worse", "slid"],
    "increased": ["went up", "climbed", "shot up", "crept up"],
    "decreased": ["dropped", "fell", "went down", "slid back"],
    "showed": ["turned out", "came to light", "surfaced", "popped up"],
    "found": ["turned up", "came across", "dug up", "stumbled onto"],
    "thought": ["reckoned", "figured", "had a hunch", "was pretty sure"],
    "knew": ["had a feeling", "was certain", "could tell", "picked up on"],
    "said": ["mentioned", "pointed out", "noted", "brought up"],
    "did": ["pulled off", "managed", "went ahead and", "ended up"],
    "made": ["whipped up", "threw together", "managed", "pulled off"],
    "went": ["headed", "made their way", "ended up", "drifted"],
    "came": ["showed up", "rolled in", "turned up", "popped in"],
    "saw": ["spotted", "caught sight of", "noticed", "picked up on"],
    "looked": ["checked out", "took a gander", "eyed", "glanced at"],
    "used": ["leaned on", "went with", "relied on", "turned to"],
    "tried": ["took a crack at", "gave it a shot", "attempted", "went for"],
    "wanted": ["was after", "had their eye on", "was looking to", "needed"],
    "needed": ["had to have", "couldn't do without", "required", "was looking for"],
    "liked": ["was into", "took to", "got behind", "warmed up to"],
    "remembered": ["kept in mind", "didn't forget", "held onto", "recalled"],
    "understood": ["got the picture", "wrapped their head around", "caught onto", "figured out"],
    "believed": ["was convinced", "had it in their head", "operated on the idea", "took it as given"],
  },
  openers: [
    "Here's the thing —",
    "And honestly,",
    "Look,",
    "The reality is,",
    "When you really think about it,",
    "What's wild is that",
    "If we're being real,",
    "The truth is,",
    "Here's where it gets interesting —",
    "For what it's worth,",
    "At the end of the day,",
    "Let's be honest —",
    "Here's the kicker —",
    "Step back and look at it —",
    "The bottom line is,",
    "What it comes down to is",
    "If you think about it,",
    "The funny part is,",
    "Here's what people miss —",
    "If you really get into it,",
  ],
  interruptions: [
    "— and this matters —",
    ", which is key,",
    " (and honestly, it should be)",
    "— for better or worse —",
    ", at the end of the day,",
    " (which is easier said than done)",
    "— and that's the whole point —",
    ", if you really think about it,",
    " (for lack of a better word)",
    "— and here's why —",
    ", which is saying something,",
    " (and that's not nothing)",
    "— if that makes sense —",
    ", when you get right down to it,",
  ],
  rhetoricalQuestions: [
    "But what does that actually mean?",
    "So why does this matter?",
    "But here's the real question —",
    "What's the catch?",
    "But is that actually true?",
    "So what's really going on here?",
    "But wait — is it that simple?",
    "And what happens next?",
    "But does that hold up?",
    "So where does that leave us?",
  ],
  asides: [
    "I mean, think about it.",
    "Honestly, it's not that deep.",
    "At least, that's how I see it.",
    "Which is kind of wild, when you stop and think about it.",
    "And that's not nothing.",
    "I think we can all agree on that.",
    "And that's the point, isn't it?",
    "At least in my experience.",
    "Which is easier said than done.",
    "And honestly? That's fine.",
  ],
  contractions: {
    "do not": "don't", "does not": "doesn't", "did not": "didn't",
    "is not": "isn't", "are not": "aren't", "was not": "wasn't",
    "were not": "weren't", "has not": "hasn't", "have not": "haven't",
    "had not": "hadn't", "will not": "won't", "would not": "wouldn't",
    "could not": "couldn't", "should not": "shouldn't", "cannot": "can't",
    "can not": "can't", "it is": "it's", "they are": "they're",
    "we are": "we're", "you are": "you're", "I am": "I'm",
    "that is": "that's", "there is": "there's", "what is": "what's",
    "who is": "who's", "how is": "how's", "let us": "let's",
    "I will": "I'll", "you will": "you'll", "they will": "they'll",
    "we will": "we'll", "I would": "I'd", "you would": "you'd",
    "they would": "they'd", "we would": "we'd", "I have": "I've",
    "you have": "you've", "they have": "they've", "we have": "we've",
    "it has": "it's", "she is": "she's", "he is": "he's",
    "she has": "she's", "he has": "he's", "that has": "that's",
    "there has": "there's", "what has": "what's", "who has": "who's",
    "should have": "should've", "would have": "would've",
    "could have": "could've", "must have": "must've",
    "might have": "might've", "it will": "it'll",
    "that will": "that'll", "there will": "there'll",
  },
  typos: {
    "the": "teh", "and": "adn", "that": "tht", "with": "wit",
    "really": "realy", "definitely": "definately", "separately": "seperately",
    "occurred": "occured", "until": "untill", "successful": "succesful",
    "believe": "beleive", "achieve": "acheive", "receive": "recieve",
    "piece": "peice", "their": "thier", "friend": "freind",
    "because": "becuase", "different": "differnt", "every": "evry",
    "first": "frist", "government": "goverment", "happened": "happend",
    "people": "peopel",
  },
  naturalTransitions: {
    "first": "to start things off", "firstly": "to kick things off",
    "secondly": "on top of that", "thirdly": "and then there's",
    "finally": "last but not least", "lastly": "to wrap it up",
    "in addition": "plus", "as a result": "because of that",
    "on the other hand": "but then again", "in contrast": "but look at it differently",
    "similarly": "in the same vein", "likewise": "same goes for",
    "accordingly": "so based on that", "specifically": "to be exact",
    "particularly": "especially", "generally": "for the most part",
    "usually": "most of the time", "typically": "normally",
  },
  _seed: null, _state: null,
  srand(seed) { this._seed = seed; this._state = seed || 1; },
  rand() {
    if (this._state === null) return Math.random();
    this._state ^= this._state << 13;
    this._state ^= this._state >>> 17;
    this._state ^= this._state << 5;
    return ((this._state >>> 0) / 4294967296);
  },
  pick(arr) { return arr[Math.floor(this.rand() * arr.length)]; },
  chance(p) { return this.rand() < p; },
  humanize(text) {
    if (!text || !text.trim()) return "";
    let cleaned = this.removeAITells(text);
    cleaned = this.replaceTransitions(cleaned);
    cleaned = this.applyContractions(cleaned);
    let sentences = this.splitSentences(cleaned);
    let result = [];
    let sentenceCount = 0;
    for (let i = 0; i < sentences.length; i++) {
      let s = sentences[i].trim();
      if (!s) continue;
      s = this.applyHumanSwaps(s);
      let wordCount = s.split(/\s+/).length;
      if (sentenceCount > 0 && sentenceCount % this.pick([4, 5, 6]) === 0 && wordCount > 8) {
        s = this.shortenSentence(s);
      } else if (this.chance(0.25) && wordCount > 10) {
        s = this.addInterruption(s);
      }
      if (this.chance(0.30) && this.isValidOpener(s)) { s = this.addOpener(s); }
      if (this.chance(0.15)) { s = s.replace(/[.!?]+$/, "") + ". " + this.pick(this.asides); }
      if (this.chance(0.02)) { s = this.injectTypo(s); }
      if (sentenceCount > 0 && sentenceCount % this.pick([7, 8, 9, 10]) === 0) {
        result.push(s);
        result.push(this.pick(this.rhetoricalQuestions));
        sentenceCount += 2;
        continue;
      }
      if (this.chance(0.20) && s.includes(",")) { s = this.varyPunctuation(s); }
      if (wordCount <= 5 && i < sentences.length - 1) {
        let next = sentences[i + 1] ? sentences[i + 1].trim() : "";
        if (next && next.split(/\s+/).length <= 12) {
          s = s.replace(/[.!?]+$/, "") + " — and " + next.charAt(0).toLowerCase() + next.slice(1);
          i++;
        }
      }
      result.push(s);
      sentenceCount++;
    }
    let output = result.join(" ");
    output = this.restructureParagraphs(output);
    output = this.cleanup(output);
    return output;
  },
  removeAITells(text) {
    let lower = text;
    for (let [aiWord, humanAlt] of Object.entries(this.aiTellWords)) {
      let regex = new RegExp("\\b" + aiWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "\\b", "gi");
      lower = lower.replace(regex, humanAlt);
    }
    return lower;
  },
  replaceTransitions(text) {
    for (let [formal, natural] of Object.entries(this.naturalTransitions)) {
      let regex = new RegExp("\\b" + formal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "\\b", "gi");
      text = text.replace(regex, natural);
    }
    return text;
  },
  applyContractions(s) {
    for (let [full, contracted] of Object.entries(this.contractions)) {
      let regex = new RegExp("\\b" + full.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "\\b", "gi");
      s = s.replace(regex, contracted);
    }
    return s;
  },
  applyHumanSwaps(s) {
    let words = s.split(/(\s+)/);
    for (let i = 0; i < words.length; i++) {
      let clean = words[i].toLowerCase().replace(/[^a-z']/g, "");
      if (this.humanSwaps[clean] && this.chance(0.55)) {
        let replacement = this.pick(this.humanSwaps[clean]);
        if (words[i][0] === words[i][0].toUpperCase()) {
          replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
        }
        let trailing = words[i].match(/[^a-zA-Z']+$/);
        words[i] = replacement + (trailing ? trailing[0] : "");
      }
    }
    return words.join("");
  },
  shortenSentence(s) {
    let clauses = s.split(/[,;—]/);
    let core = clauses[0].trim();
    if (!/[.!?]$/.test(core)) core += ".";
    return core;
  },
  addInterruption(s) {
    let interruption = this.pick(this.interruptions);
    let words = s.split(" ");
    if (words.length < 8) return s;
    let pos = 4 + Math.floor(this.rand() * 5);
    if (pos >= words.length - 2) pos = Math.floor(words.length / 2);
    let insertAt = pos;
    for (let i = pos; i < Math.min(pos + 5, words.length); i++) {
      if (words[i] && words[i].includes(",")) { insertAt = i + 1; break; }
    }
    words.splice(insertAt, 0, interruption);
    return words.join(" ");
  },
  addOpener(s) {
    let opener = this.pick(this.openers);
    let rest = s.charAt(0).toLowerCase() + s.slice(1);
    return opener + " " + rest;
  },
  isValidOpener(s) {
    let first = s.split(" ")[0].toLowerCase().replace(/[^a-z']/g, "");
    let blocked = ["here's", "look", "and", "but", "so", "well", "i", "you", "if", "the", "when", "what", "let's", "step", "at", "for"];
    return !blocked.includes(first);
  },
  injectTypo(s) {
    let words = s.split(/(\s+)/);
    let candidates = [];
    for (let i = 0; i < words.length; i++) {
      let clean = words[i].toLowerCase().replace(/[^a-z]/g, "");
      if (this.typos[clean]) candidates.push(i);
    }
    if (candidates.length === 0) return s;
    let targetIdx = this.pick(candidates);
    let word = words[targetIdx];
    let clean = word.toLowerCase().replace(/[^a-z]/g, "");
    let typo = this.typos[clean];
    if (word[0] === word[0].toUpperCase()) { typo = typo.charAt(0).toUpperCase() + typo.slice(1); }
    let trailing = word.match(/[^a-zA-Z]+$/);
    words[targetIdx] = typo + (trailing ? trailing[0] : "");
    return words.join("");
  },
  varyPunctuation(s) {
    let commaIdx = s.indexOf(",");
    if (commaIdx === -1) return s;
    if (this.chance(0.5)) {
      s = s.substring(0, commaIdx) + " —" + s.substring(commaIdx + 1);
    } else if (this.chance(0.3)) {
      let after = s.substring(commaIdx + 1).trim();
      if (after.length > 3 && /^[A-Z]/.test(after)) {
        s = s.substring(0, commaIdx) + ";" + s.substring(commaIdx + 1);
      }
    }
    return s;
  },
  restructureParagraphs(text) {
    let sentences = this.splitSentences(text);
    if (sentences.length < 4) return text;
    let paragraphs = [];
    let current = [];
    let targetLength = this.pick([3, 4, 4, 5, 5, 6]);
    for (let i = 0; i < sentences.length; i++) {
      current.push(sentences[i].trim());
      if (current.length >= targetLength) {
        paragraphs.push(current.join(" "));
        current = [];
        targetLength = this.pick([3, 4, 4, 5, 5, 6, 7]);
      }
    }
    if (current.length > 0) paragraphs.push(current.join(" "));
    return paragraphs.join("\n\n");
  },
  splitSentences(text) {
    let parts = text.match(/[^.!?]+[.!?]+|\S[^.!?]*$/g);
    return parts ? parts.map(s => s.trim()).filter(s => s) : [text];
  },
  cleanup(s) {
    s = s.replace(/\s{2,}/g, " ");
    s = s.replace(/\s+([,.!?;:])/g, "$1");
    s = s.replace(/([,.!?;:])([A-Za-z])/g, (match, p1, p2) => {
      if (p1 === "." && /^\d/.test(p2)) return match;
      return p1 + " " + p2;
    });
    s = s.charAt(0).toUpperCase() + s.slice(1);
    s = s.replace(/\b(\w+)\s+\1\b/gi, "$1");
    s = s.replace(/[.]{2,}/g, ".");
    s = s.replace(/[!]{2,}/g, "!");
    s = s.replace(/[?]{2,}/g, "?");
    s = s.replace(/—\s+—/g, "—");
    s = s.replace(/,\s*,/g, ",");
    s = s.split("\n").map(l => l.trim()).join("\n");
    let lastChar = s.trim().slice(-1);
    if (!/[.!?]/.test(lastChar)) s = s.trim() + ".";
    return s.trim();
  },
  analyze(text) {
    let words = text.trim().split(/\s+/).filter(w => w.length > 0);
    let sentences = this.splitSentences(text);
    let wordCount = words.length;
    let sentenceCount = sentences.length;
    let avgLen = sentenceCount > 0 ? Math.round(wordCount / sentenceCount) : 0;
    let lengths = sentences.map(s => s.split(/\s+/).filter(w => w.length > 0).length);
    let mean = lengths.reduce((a, b) => a + b, 0) / (lengths.length || 1);
    let variance = lengths.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (lengths.length || 1);
    let stddev = Math.sqrt(variance);
    let burstiness = "Low";
    if (stddev > 6) burstiness = "High";
    else if (stddev > 3) burstiness = "Medium";
    return { wordCount, sentenceCount, avgLen, burstiness };
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.getElementById("input-text");
  const outputEl = document.getElementById("output-text");
  const humanizeBtn = document.getElementById("humanize-btn");
  const copyBtn = document.getElementById("copy-btn");
  const clearBtn = document.getElementById("clear-btn");
  const statsBar = document.getElementById("stats-bar");
  const wordCountEl = document.getElementById("word-count");
  const sentenceCountEl = document.getElementById("sentence-count");
  const avgLengthEl = document.getElementById("avg-length");
  const burstinessEl = document.getElementById("burstiness");
  humanizeBtn.addEventListener("click", () => {
    let input = inputEl.value.trim();
    if (!input) return;
    Humanizer.srand(Date.now() % 2147483647);
    let humanized = Humanizer.humanize(input);
    outputEl.value = humanized;
    let stats = Humanizer.analyze(humanized);
    wordCountEl.textContent = stats.wordCount;
    sentenceCountEl.textContent = stats.sentenceCount;
    avgLengthEl.textContent = stats.avgLen;
    burstinessEl.textContent = stats.burstiness;
    statsBar.hidden = false;
    copyBtn.disabled = false;
  });
  copyBtn.addEventListener("click", async () => {
    if (!outputEl.value) return;
    try {
      await navigator.clipboard.writeText(outputEl.value);
      copyBtn.textContent = "Copied!";
      setTimeout(() => { copyBtn.textContent = "Copy Result"; }, 2000);
    } catch (e) {
      outputEl.select();
      document.execCommand("copy");
      copyBtn.textContent = "Copied!";
      setTimeout(() => { copyBtn.textContent = "Copy Result"; }, 2000);
    }
  });
  clearBtn.addEventListener("click", () => {
    inputEl.value = ""; outputEl.value = ""; statsBar.hidden = true; copyBtn.disabled = true; inputEl.focus();
  });
});

