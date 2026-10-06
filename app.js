const Humanizer = {
  synonymMap: {
    "important": ["critical", "essential", "vital", "crucial", "significant", "key", "pivotal"],
    "however": ["though", "yet", "still", "nevertheless", "despite this", "that said", "even so"],
    "therefore": ["so", "thus", "as a result", "consequently", "which means", "because of that"],
    "additionally": ["also", "plus", "on top of that", "furthermore", "moreover", "beyond that"],
    "because": ["since", "given that", "due to the fact that", "as", "considering"],
    "many": ["numerous", "several", "countless", "various", "plenty of", "a ton of"],
    "show": ["demonstrate", "reveal", "indicate", "display", "illustrate", "make clear"],
    "use": ["utilize", "employ", "leverage", "apply", "harness", "rely on"],
    "make": ["create", "produce", "generate", "form", "construct", "build"],
    "good": ["solid", "strong", "effective", "valuable", "worthwhile", "decent"],
    "bad": ["poor", "flawed", "weak", "subpar", "inadequate", "lacking"],
    "big": ["large", "substantial", "significant", "considerable", "massive", "sizable"],
    "small": ["minor", "slight", "modest", "minimal", "negligible", "marginal"],
    "help": ["assist", "support", "aid", "facilitate", "enable", "back up"],
    "change": ["shift", "alter", "modify", "adjust", "transform", "reshape"],
    "problem": ["issue", "challenge", "obstacle", "difficulty", "hurdle", "stumbling block"],
    "need": ["require", "demand", "necessitate", "call for", "hinge on"],
    "think": ["believe", "consider", "reckon", "suppose", "assume", "figure"],
    "understand": ["grasp", "comprehend", "recognize", "realize", "see", "parse"],
    "way": ["method", "approach", "manner", "strategy", "technique", "angle"],
    "find": ["discover", "identify", "uncover", "locate", "determine", "pin down"],
    "different": ["distinct", "varied", "diverse", "contrasting", "separate", "unlike"],
    "often": ["frequently", "regularly", "commonly", "routinely", "repeatedly", "time and again"],
    "start": ["begin", "initiate", "launch", "kick off", "set in motion", "get going"],
    "end": ["conclude", "finish", "wrap up", "complete", "bring to a close", "round out"],
    "look": ["examine", "inspect", "review", "analyze", "scrutinize", "take a look at"],
    "seem": ["appear", "feel", "come across as", "strike me as", "sound like"],
    "part": ["component", "element", "aspect", "segment", "piece", "slice"],
    "point": ["idea", "argument", "notion", "concept", "position", "takeaway"],
    "case": ["situation", "scenario", "instance", "context", "circumstance", "set of conditions"],
    "really": ["genuinely", "truly", "honestly", "literally", "actually", "straight up"],
    "very": ["incredibly", "remarkably", "notably", "particularly", "especially", "exceptionally"],
    "more": ["additional", "extra", "further", "added", "supplementary"],
    "most": ["a majority of", "nearly all", "the bulk of", "primarily", "largely"],
    "some": ["a few", "several", "certain", "a handful of", "various"],
    "also": ["additionally", "on top of that", "what's more", "as well", "to boot"],
    "but": ["yet", "though", "still", "even so", "that said", "having said that"],
    "like": ["similar to", "akin to", "reminiscent of", "along the lines of"],
    "about": ["regarding", "concerning", "around", "roughly", "approximately"],
    "thing": ["matter", "issue", "factor", "element", "detail", "aspect"],
    "people": ["individuals", "folks", "persons", "those", "everyone", "most"],
    "want": ["desire", "seek", "aim for", "hope for", "could use", "are after"],
    "try": ["attempt", "aim", "strive", "endeavor", "take a shot at", "go for"],
    "get": ["obtain", "acquire", "secure", "pick up", "land", "come away with"],
    "give": ["provide", "offer", "supply", "hand over", "deliver", "extend"],
    "keep": ["maintain", "retain", "preserve", "hold onto", "sustain", "stick with"],
    "let": ["allow", "permit", "enable", "open the door to", "make way for"],
    "work": ["function", "operate", "perform", "do the job", "get results", "pan out"],
    "ask": ["inquire", "question", "request", "probe", "find out", "look into"],
    "every": ["each", "every single", "all", "every last"],
    "few": ["a couple of", "a handful of", "scarcely any", "not many", "a sparse set of"],
    "high": ["elevated", "tall", "considerable", "steep", "peak", "upper-tier"],
    "low": ["reduced", "minimal", "modest", "bottom-tier", "slim", "depressed"],
    "new": ["recent", "fresh", "latest", "novel", "current", "up-to-date"],
    "old": ["previous", "former", "past", "aging", "long-standing", "veteran"],
    "first": ["initial", "opening", "lead-off", "primary", "earliest"],
    "last": ["final", "closing", "ultimate", "most recent", "trailing"],
    "long": ["extended", "lengthy", "drawn-out", "prolonged", "far-reaching"],
    "short": ["brief", "compact", "concise", "abbreviated", "truncated"],
    "easy": ["simple", "straightforward", "effortless", "uncomplicated", "accessible"],
    "hard": ["difficult", "challenging", "tough", "demanding", "rigorous"],
    "fast": ["quick", "rapid", "swift", "brisk", "accelerated"],
    "slow": ["gradual", "sluggish", "unhurried", "measured", "leisurely"],
    "happy": ["pleased", "content", "satisfied", "glad", "delighted"],
    "sad": ["unhappy", "down", "disheartened", "melancholic", "low"],
    "right": ["correct", "accurate", "proper", "fitting", "appropriate"],
    "wrong": ["incorrect", "mistaken", "flawed", "off base", "inaccurate"],
    "interesting": ["compelling", "intriguing", "fascinating", "notable", "worth looking at"],
    "clear": ["obvious", "evident", "apparent", "plain", "unmistakable"],
    "complex": ["intricate", "elaborate", "multi-layered", "sophisticated", "nuanced"],
    "simple": ["basic", "straightforward", "uncomplicated", "no-frills", "bare-bones"],
    "common": ["widespread", "prevalent", "typical", "standard", "routine"],
    "rare": ["uncommon", "scarce", "infrequent", "unusual", "hard to find"],
    "strong": ["powerful", "robust", "potent", "formidable", "solid"],
    "weak": ["feeble", "fragile", "flimsy", "inadequate", "lacking"],
  },
  starters: [
    "Look,", "Here's the thing —", "Honestly,", "To be fair,", "At the end of the day,",
    "What's interesting is that", "The reality is", "When you get down to it,",
    "It's worth noting that", "Arguably,", "From what I can tell,", "If you think about it,",
    "Now,", "That said,", "In practice,", "From a practical standpoint,",
    "The way I see it,", "What it comes down to is", "And honestly,",
    "The truth is", "If we're being real,", "Here's where it gets tricky —",
    "What stands out is that", "The bottom line is", "For what it's worth,",
    "Digging into it,", "Looking closer,", "At first glance,", "Step back and you'll see",
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
  },
  fillers: ["I mean,", "you know,", "well,", "right,", "look,", "honestly,"],
  hedging: ["probably", "likely", "in most cases", "for the most part", "generally"],
  _seed: null,
  _state: null,
  srand(seed) { this._seed = seed; this._state = seed; },
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
    let sentences = this.splitSentences(text);
    let result = [];
    for (let i = 0; i < sentences.length; i++) {
      let s = sentences[i].trim();
      if (!s) continue;
      s = this.applyContractions(s);
      s = this.swapSynonyms(s);
      if (this.chance(0.35) && this.isValidOpener(s)) { s = this.addStarter(s); }
      if (this.chance(0.10) && s.split(" ").length > 6) { s = this.injectFiller(s); }
      if (this.chance(0.12)) { s = this.addHedge(s); }
      if (s.split(" ").length <= 4 && i < sentences.length - 1) {
        let next = sentences[i + 1] ? sentences[i + 1].trim() : "";
        if (next) {
          s = s.replace(/[.!?]+$/, "") + ", and " + next.charAt(0).toLowerCase() + next.slice(1);
          i++;
        }
      }
      if (s.split(" ").length > 28 && s.includes(",")) {
        let parts = this.splitLongSentence(s);
        result.push(...parts);
        continue;
      }
      result.push(s);
    }
    let joined = result.join(" ");
    joined = this.cleanup(joined);
    return joined;
  },
  splitSentences(text) {
    let parts = text.match(/[^.!?]+[.!?]+|\S[^.!?]*$/g);
    return parts ? parts.map(s => s.trim()).filter(s => s) : [text];
  },
  applyContractions(s) {
    for (let [full, contracted] of Object.entries(this.contractions)) {
      let regex = new RegExp("\\b" + full.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "\\b", "gi");
      s = s.replace(regex, contracted);
    }
    return s;
  },
  swapSynonyms(s) {
    let words = s.split(/(\s+)/);
    for (let i = 0; i < words.length; i++) {
      let clean = words[i].toLowerCase().replace(/[^a-z']/g, "");
      if (this.synonymMap[clean] && this.chance(0.7)) {
        let replacement = this.pick(this.synonymMap[clean]);
        if (words[i][0] === words[i][0].toUpperCase()) {
          replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
        }
        let trailing = words[i].match(/[^a-zA-Z']+$/);
        words[i] = replacement + (trailing ? trailing[0] : "");
      }
    }
    return words.join("");
  },
  isValidOpener(s) {
    let first = s.split(" ")[0].toLowerCase();
    return !["look", "here's", "honestly", "the", "and", "but", "so", "well", "i", "you", "if"].includes(first.replace(/[^a-z']/g, ""));
  },
  addStarter(s) {
    let starter = this.pick(this.starters);
    let rest = s.charAt(0).toLowerCase() + s.slice(1);
    return starter + " " + rest;
  },
  injectFiller(s) {
    let words = s.split(" ");
    if (words.length < 5) return s;
    let pos = 3 + Math.floor(this.rand() * 3);
    if (pos >= words.length) pos = Math.floor(words.length / 2);
    let filler = this.pick(this.fillers);
    words.splice(pos, 0, filler);
    return words.join(" ");
  },
  addHedge(s) {
    let hedge = this.pick(this.hedging);
    let words = s.split(" ");
    let modals = ["is", "are", "was", "were", "will", "would", "could", "should", "can", "has", "have", "had", "does", "do", "did"];
    for (let i = 0; i < words.length; i++) {
      if (modals.includes(words[i].toLowerCase().replace(/[^a-z]/g, ""))) {
        words.splice(i + 1, 0, hedge);
        return words.join(" ");
      }
    }
    return s;
  },
  splitLongSentence(s) {
    let commaIdxs = [];
    for (let i = 0; i < s.length; i++) { if (s[i] === ",") commaIdxs.push(i); }
    if (commaIdxs.length === 0) return [s];
    let mid = s.length / 2;
    let best = commaIdxs.reduce((a, b) => Math.abs(b - mid) < Math.abs(a - mid) ? b : a);
    let first = s.substring(0, best).trim();
    let second = s.substring(best + 1).trim();
    if (!/[.!?]$/.test(first)) first += ".";
    if (!/[.!?]$/.test(second)) second += ".";
    second = second.charAt(0).toUpperCase() + second.slice(1);
    return [first, second];
  },
  cleanup(s) {
    s = s.replace(/\s{2,}/g, " ");
    s = s.replace(/\s+([,.!?;:])/g, "$1");
    s = s.replace(/([,.!?;:])([A-Za-z])/g, "$1 $2");
    s = s.charAt(0).toUpperCase() + s.slice(1);
    s = s.replace(/\b(\w+)\s+\1\b/gi, "$1");
    if (!/[.!?]$/.test(s.trim())) s = s.trim() + ".";
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
    Humanizer.srand(input.length * 7919);
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
