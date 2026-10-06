const CW = new Set("the be to of and a in that have i it for not on with he as you do at this but his by from they we say her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take into your good some could them see other than then now look only come its over think also back after use two how our work first well way even new want because any these give day most us is are was were been has had did does said made went came saw got took gave found thought told asked put let mean keep began seemed help turned started showed heard played ran moved lived looked used tried need feel become leave begin seem help turn start show hear play run move live believe hold bring happen write provide sit stand lose pay meet include continue set learn change lead understand watch follow stop create speak read allow add spend grow open walk win offer remember love consider appear buy wait serve die send expect build stay fall cut reach kill remain suggest".split(" "));
const AB = ["it is","there are","this is","in addition","it should","plays a","when it","at the","in today","one of","it is important","it is worth","it is crucial","it is essential","there are several","there are many","this means that","this allows","this ensures","in order to","as well as","due to","based on","according to","as a result","in conclusion","in summary","on the other hand","it can be","it has been","it would be","can be used","can be seen","is known for","is designed to","is used to","are designed to","was developed","was created","was designed","should be noted","should be considered","may be used","could be used","would be useful","has been shown","have been reported","further research","recent studies","various factors","several studies","many people","numerous studies","plays a crucial","plays a significant","it is widely","it is generally","this approach","this method","these findings","these results","the results show","the study found","the research indicates","in recent years","over the past","with the development","as technology","in the modern","in today's world","has become increasingly","is becoming increasingly","are becoming increasingly"];
const Humanizer = {
  aiTellWords: {"furthermore":"on top of that","moreover":"plus","additionally":"also","consequently":"so","nevertheless":"still","nonetheless":"even so","hence":"which is why","thus":"so","therefore":"which means","it is worth noting":"worth mentioning","it is important to note":"key thing here","in conclusion":"all in all","in summary":"bottom line","in other words":"meaning","for instance":"say","for example":"like","in fact":"actually","indeed":"really","notably":"what stands out","significantly":"in a big way","substantially":"by a lot","essentially":"at its core","fundamentally":"basically","ultimately":"at the end of the day","comprehensive":"full","facilitate":"help with","utilize":"use","leverage":"tap into","demonstrate":"show","implement":"set up","incorporate":"bring in","optimize":"tune","enhance":"boost","endeavor":"try","ascertain":"figure out","commence":"start","terminate":"end","endeavour":"try","approximately":"roughly","sufficient":"enough","numerous":"a lot of","predominantly":"mostly","subsequently":"after that","prior to":"before","post":"after","pre":"before","via":"through","among":"across","whilst":"while","amongst":"across","amidst":"in the middle of","notwithstanding":"despite","therein":"in there","thereby":"which","wherein":"where","heretofore":"until now","hitherto":"so far"},
  humanSwaps: {"good":["solid","legit","decent","not bad","actually pretty good"],"bad":["rough","shaky","not great","pretty rough","subpar"],"big":["massive","huge","hefty","oversized","way too big"],"small":["tiny","itty-bitty","barely there","compact","puny"],"important":["key","huge deal","make-or-break","critical","the big one"],"interesting":["weirdly cool","kinda fascinating","worth a look","oddly engaging"],"difficult":["tough","rough going","a pain","not easy","tricky"],"easy":["a breeze","simple enough","no sweat","pretty painless"],"fast":["quick","snappy","before you know it","in no time"],"slow":["sluggish","dragging","taking forever","crawling"],"happy":["pretty stoked","pleased","content enough","in a good spot"],"sad":["down","bummed","in a rough place","not great"],"smart":["sharp","bright","quick on the uptake","no slouch"],"stupid":["not the sharpest","a bit dense","slow on the uptake","not winning any awards"],"beautiful":["stunning","gorgeous","easy on the eyes","something else"],"ugly":["rough looking","not pretty","an eyesore","hard to look at"],"successful":["worked out","panned out","hit the mark","nailed it"],"failed":["fell apart","didn't pan out","went south","tank"],"started":["kicked off","got going","set things in motion","dove in"],"ended":["wrapped up","came to a close","finished out","petered out"],"created":["whipped up","put together","came up with","cobbled together"],"destroyed":["wiped out","tore apart","obliterated","wrecked"],"improved":["got better","shaped up","turned around","leveled up"],"worsened":["went downhill","took a hit","got worse","slid"],"increased":["went up","climbed","shot up","crept up"],"decreased":["dropped","fell","went down","slid back"],"showed":["turned out","came to light","surfaced","popped up"],"found":["turned up","came across","dug up","stumbled onto"],"thought":["reckoned","figured","had a hunch","was pretty sure"],"knew":["had a feeling","was certain","could tell","picked up on"],"said":["mentioned","pointed out","noted","brought up"],"did":["pulled off","managed","went ahead and","ended up"],"made":["whipped up","threw together","managed","pulled off"],"went":["headed","made their way","ended up","drifted"],"came":["showed up","rolled in","turned up","popped in"],"saw":["spotted","caught sight of","noticed","picked up on"],"looked":["checked out","took a gander","eyed","glanced at"],"used":["leaned on","went with","relied on","turned to"],"tried":["took a crack at","gave it a shot","attempted","went for"],"wanted":["was after","had their eye on","was looking to","needed"],"needed":["had to have","couldn't do without","required","was looking for"],"liked":["was into","took to","got behind","warmed up to"],"remembered":["kept in mind","didn't forget","held onto","recalled"],"understood":["got the picture","wrapped their head around","caught onto","figured out"],"believed":["was convinced","had it in their head","operated on the idea","took it as given"]},
  openers: ["Here's the thing —","And honestly,","Look,","The reality is,","When you really think about it,","What's wild is that","If we're being real,","The truth is,","Here's where it gets interesting —","For what it's worth,","At the end of the day,","Let's be honest —","Here's the kicker —","Step back and look at it —","The bottom line is,","What it comes down to is","If you think about it,","The funny part is,","Here's what people miss —","If you really get into it,"],
  interruptions: ["— and this matters —",", which is key,"," (and honestly, it should be)","— for better or worse —",", at the end of the day,"," (which is easier said than done)","— and that's the whole point —",", if you really think about it,"," (for lack of a better word)","— and here's why —",", which is saying something,"," (and that's not nothing)","— if that makes sense —",", when you get right down to it,"],
  rhetoricalQuestions: ["But what does that actually mean?","So why does this matter?","But here's the real question —","What's the catch?","But is that actually true?","So what's really going on here?","But wait — is it that simple?","And what happens next?","But does that hold up?","So where does that leave us?"],
  asides: ["I mean, think about it.","Honestly, it's not that deep.","At least, that's how I see it.","Which is kind of wild, when you stop and think about it.","And that's not nothing.","I think we can all agree on that.","And that's the point, isn't it?","At least in my experience.","Which is easier said than done.","And honestly? That's fine."],
  fragments: ["True.","Exactly.","Makes sense.","Fair enough.","Hard to say.","Could be.","Maybe so.","Not really.","Depends.","Who knows.","Right.","For sure.","Bit of both.","Tough call.","That's fair."],
  contractions: {"do not":"don't","does not":"doesn't","did not":"didn't","is not":"isn't","are not":"aren't","was not":"wasn't","were not":"weren't","has not":"hasn't","have not":"haven't","had not":"hadn't","will not":"won't","would not":"wouldn't","could not":"couldn't","should not":"shouldn't","cannot":"can't","can not":"can't","it is":"it's","they are":"they're","we are":"we're","you are":"you're","I am":"I'm","that is":"that's","there is":"there's","what is":"what's","who is":"who's","how is":"how's","let us":"let's","I will":"I'll","you will":"you'll","they will":"they'll","we will":"we'll","I would":"I'd","you would":"you'd","they would":"they'd","we would":"we'd","I have":"I've","you have":"you've","they have":"they've","we have":"we've","it has":"it's","she is":"she's","he is":"he's","she has":"she's","he has":"he's","that has":"that's","there has":"there's","what has":"what's","who has":"who's","should have":"should've","would have":"would've","could have":"could've","must have":"must've","might have":"might've","it will":"it'll","that will":"that'll","there will":"there'll"},
  typos: {"the":"teh","and":"adn","that":"tht","with":"wit","really":"realy","definitely":"definately","separately":"seperately","occurred":"occured","until":"untill","successful":"succesful","believe":"beleive","achieve":"acheive","receive":"recieve","piece":"peice","their":"thier","friend":"freind","because":"becuase","different":"differnt","every":"evry","first":"frist","government":"goverment","happened":"happend","people":"peopel"},
  naturalTransitions: {"first":"to start things off","firstly":"to kick things off","secondly":"on top of that","thirdly":"and then there's","finally":"last but not least","lastly":"to wrap it up","in addition":"plus","as a result":"because of that","on the other hand":"but then again","in contrast":"but look at it differently","similarly":"in the same vein","likewise":"same goes for","accordingly":"so based on that","specifically":"to be exact","particularly":"especially","generally":"for the most part","usually":"most of the time","typically":"normally"},
  _seed:null,_state:null,
  srand(seed){this._seed=seed;this._state=seed||1;},
  rand(){if(this._state===null)return Math.random();this._state^=this._state<<13;this._state^=this._state>>>17;this._state^=this._state<<5;return((this._state>>>0)/4294967296);},
  pick(arr){return arr[Math.floor(this.rand()*arr.length)];},
  chance(p){return this.rand()<p;},
  humanize(text,intensity=1){
    if(!text||!text.trim())return"";
    let sp=Math.min(0.95,0.45+intensity*0.15);
    let op=Math.min(0.5,0.25+intensity*0.05);
    let ip=Math.min(0.4,0.20+intensity*0.05);
    let ap=Math.min(0.3,0.12+intensity*0.03);
    let tp=Math.min(0.10,0.02*intensity);
    let pf=Math.max(3,Math.round(7-intensity));
    let qf=Math.max(4,Math.round(10-intensity*2));
    let fp=Math.min(0.12,0.05+intensity*0.02);
    let cleaned=this.removeAITells(text);
    cleaned=this.replaceTransitions(cleaned);
    cleaned=this.applyContractions(cleaned);
    let sentences=this.splitSentences(cleaned);
    let result=[];let sc=0;
    for(let i=0;i<sentences.length;i++){
      let s=sentences[i].trim();if(!s)continue;
      s=this.applyHumanSwaps(s,sp);
      let wc=s.split(/\s+/).length;
      if(sc>0&&sc%this.pick([pf,pf+1,pf+2])===0&&wc>8){s=this.shortenSentence(s);}
      else if(this.chance(ip)&&wc>10){s=this.addInterruption(s);}
      if(this.chance(op)&&this.isValidOpener(s)){s=this.addOpener(s);}
      if(this.chance(ap)){s=s.replace(/[.!?]+$/,"")+". "+this.pick(this.asides);}
      if(this.chance(tp)){s=this.injectTypo(s);}
      if(sc>0&&this.chance(fp)){result.push(this.pick(this.fragments));sc++;}
      if(sc>0&&sc%this.pick([qf,qf+1,qf+2])===0){result.push(s);result.push(this.pick(this.rhetoricalQuestions));sc+=2;continue;}
      if(this.chance(0.20)&&s.includes(",")){s=this.varyPunctuation(s);}
      if(wc<=5&&i<sentences.length-1){
        let next=sentences[i+1]?sentences[i+1].trim():"";
        if(next&&next.split(/\s+/).length<=12){s=s.replace(/[.!?]+$/,"")+" — and "+next.charAt(0).toLowerCase()+next.slice(1);i++;}
      }
      result.push(s);sc++;
    }
    let output=result.join(" ");
    output=this.restructureParagraphs(output);
    output=this.cleanup(output);
    return output;
  },
  removeAITells(text){
    let lower=text;
    for(let[aiWord,humanAlt]of Object.entries(this.aiTellWords)){
      let regex=new RegExp("\\b"+aiWord.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+"\\b","gi");
      lower=lower.replace(regex,humanAlt);
    }
    return lower;
  },
  replaceTransitions(text){
    for(let[formal,natural]of Object.entries(this.naturalTransitions)){
      let regex=new RegExp("\\b"+formal.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+"\\b","gi");
      text=text.replace(regex,natural);
    }
    return text;
  },
  applyContractions(s){
    for(let[full,contracted]of Object.entries(this.contractions)){
      let regex=new RegExp("\\b"+full.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+"\\b","gi");
      s=s.replace(regex,contracted);
    }
    return s;
  },
  applyHumanSwaps(s,prob){
    prob=prob||0.55;
    let words=s.split(/(\s+)/);
    for(let i=0;i<words.length;i++){
      let clean=words[i].toLowerCase().replace(/[^a-z']/g,"");
      if(this.humanSwaps[clean]&&this.chance(prob)){
        let replacement=this.pick(this.humanSwaps[clean]);
        if(words[i][0]===words[i][0].toUpperCase()){replacement=replacement.charAt(0).toUpperCase()+replacement.slice(1);}
        let trailing=words[i].match(/[^a-zA-Z']+$/);
        words[i]=replacement+(trailing?trailing[0]:"");
      }
    }
    return words.join("");
  },
  shortenSentence(s){let clauses=s.split(/[,;—]/);let core=clauses[0].trim();if(!/[.!?]$/.test(core))core+=".";return core;},
  addInterruption(s){
    let interruption=this.pick(this.interruptions);
    let words=s.split(" ");
    if(words.length<8)return s;
    let pos=4+Math.floor(this.rand()*5);
    if(pos>=words.length-2)pos=Math.floor(words.length/2);
    let insertAt=pos;
    for(let i=pos;i<Math.min(pos+5,words.length);i++){if(words[i]&&words[i].includes(",")){insertAt=i+1;break;}}
    words.splice(insertAt,0,interruption);
    return words.join(" ");
  },
  addOpener(s){let opener=this.pick(this.openers);let rest=s.charAt(0).toLowerCase()+s.slice(1);return opener+" "+rest;},
  isValidOpener(s){let first=s.split(" ")[0].toLowerCase().replace(/[^a-z']/g,"");let blocked=["here's","look","and","but","so","well","i","you","if","the","when","what","let's","step","at","for"];return!blocked.includes(first);},
  injectTypo(s){
    let words=s.split(/(\s+)/);
    let candidates=[];
    for(let i=0;i<words.length;i++){let clean=words[i].toLowerCase().replace(/[^a-z]/g,"");if(this.typos[clean])candidates.push(i);}
    if(candidates.length===0)return s;
    let targetIdx=this.pick(candidates);
    let word=words[targetIdx];
    let clean=word.toLowerCase().replace(/[^a-z]/g,"");
    let typo=this.typos[clean];
    if(word[0]===word[0].toUpperCase()){typo=typo.charAt(0).toUpperCase()+typo.slice(1);}
    let trailing=word.match(/[^a-zA-Z]+$/);
    words[targetIdx]=typo+(trailing?trailing[0]:"");
    return words.join("");
  },
  varyPunctuation(s){
    let commaIdx=s.indexOf(",");
    if(commaIdx===-1)return s;
    if(this.chance(0.5)){s=s.substring(0,commaIdx)+" —"+s.substring(commaIdx+1);}
    else if(this.chance(0.3)){let after=s.substring(commaIdx+1).trim();if(after.length>3&&/^[A-Z]/.test(after)){s=s.substring(0,commaIdx)+";"+s.substring(commaIdx+1);}}
    return s;
  },
  restructureParagraphs(text){
    let sentences=this.splitSentences(text);
    if(sentences.length<4)return text;
    let paragraphs=[];let current=[];let targetLength=this.pick([3,4,4,5,5,6]);
    for(let i=0;i<sentences.length;i++){
      current.push(sentences[i].trim());
      if(current.length>=targetLength){paragraphs.push(current.join(" "));current=[];targetLength=this.pick([3,4,4,5,5,6,7]);}
    }
    if(current.length>0)paragraphs.push(current.join(" "));
    return paragraphs.join("\n\n");
  },
  splitSentences(text){let parts=text.match(/[^.!?]+[.!?]+|\S[^.!?]*$/g);return parts?parts.map(s=>s.trim()).filter(s=>s):[text];},
  cleanup(s){
    s=s.replace(/\s{2,}/g," ");
    s=s.replace(/\s+([,.!?;:])/g,"$1");
    s=s.replace(/([,.!?;:])([A-Za-z])/g,(match,p1,p2)=>{if(p1==="."&&/^\d/.test(p2))return match;return p1+" "+p2;});
    s=s.charAt(0).toUpperCase()+s.slice(1);
    s=s.replace(/\b(\w+)\s+\1\b/gi,"$1");
    s=s.replace(/[.]{2,}/g,".");
    s=s.replace(/[!]{2,}/g,"!");
    s=s.replace(/[?]{2,}/g,"?");
    s=s.replace(/—\s+—/g,"—");
    s=s.replace(/,\s*,/g,",");
    s=s.split("\n").map(l=>l.trim()).join("\n");
    let lastChar=s.trim().slice(-1);
    if(!/[.!?]/.test(lastChar))s=s.trim()+".";
    return s.trim();
  },
  analyze(text){
    let words=text.trim().split(/\s+/).filter(w=>w.length>0);
    let sentences=this.splitSentences(text);
    let wordCount=words.length;
    let sentenceCount=sentences.length;
    let avgLen=sentenceCount>0?Math.round(wordCount/sentenceCount):0;
    let lengths=sentences.map(s=>s.split(/\s+/).filter(w=>w.length>0).length);
    let mean=lengths.reduce((a,b)=>a+b,0)/(lengths.length||1);
    let variance=lengths.reduce((a,b)=>a+Math.pow(b-mean,2),0)/(lengths.length||1);
    let stddev=Math.sqrt(variance);
    let burstiness="Low";
    if(stddev>6)burstiness="High";
    else if(stddev>3)burstiness="Medium";
    return{wordCount,sentenceCount,avgLen,burstiness};
  }
};
const Metrics = {
  calculate(text){
    return{
      perplexity:this.perplexity(text),
      burstiness:this.burstiness(text),
      aiVocab:this.aiVocabScore(text),
      uniformity:this.uniformityScore(text),
      ngrams:this.ngramScore(text),
      punctuation:this.punctuationScore(text),
      informality:this.informalityScore(text),
      typos:this.typoScore(text),
    };
  },
  splitSentences(text){let parts=text.match(/[^.!?]+[.!?]+|\S[^.!?]*$/g);return parts?parts.map(s=>s.trim()).filter(s=>s):[text];},
  perplexity(text){
    let words=text.toLowerCase().split(/\s+/).filter(w=>w.length>0);
    if(words.length===0)return 50;
    let score=50;
    for(let word of words){let clean=word.replace(/[^a-z']/g,"");if(CW.has(clean))score-=0.3;else score+=1;}
    let lower=text.toLowerCase();
    for(let bigram of AB){let count=(lower.match(new RegExp(bigram.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),"g"))||[]).length;score-=count*5;}
    let contractions=(text.match(/\w+'\w+/g)||[]).length;score+=contractions*2;
    let informal=(text.match(/\b(like|kinda|sorta|gonna|wanna|gotta|yeah|nope|ok|okay|honestly|literally|actually|basically|totally|really|super|stuff|things|guy|guys|folks|cool|awesome|pretty|heck|darn)\b/gi)||[]).length;score+=informal*2;
    let typos=(text.match(/\b(teh|adn|tht|realy|definately|seperately|occured|untill|succesful|beleive|acheive|recieve|peice|thier|freind|becuase|differnt|evry|frist|goverment|happend|peopel)\b/gi)||[]).length;score+=typos*5;
    return Math.max(0,Math.min(100,Math.round(score)));
  },
  burstiness(text){
    let sentences=this.splitSentences(text);
    if(sentences.length<2)return 20;
    let lengths=sentences.map(s=>s.split(/\s+/).filter(w=>w.length>0).length);
    let mean=lengths.reduce((a,b)=>a+b,0)/lengths.length;
    if(mean===0)return 20;
    let variance=lengths.reduce((a,b)=>a+Math.pow(b-mean,2),0)/lengths.length;
    let stddev=Math.sqrt(variance);
    let cv=stddev/mean;
    let score=Math.min(100,cv*150);
    return Math.round(score);
  },
  aiVocabScore(text){
    let words=text.toLowerCase().split(/\s+/).filter(w=>w.length>0);
    if(words.length===0)return 50;
    let aiCount=0;
    for(let word of words){let clean=word.replace(/[^a-z']/g,"");if(Humanizer.aiTellWords[clean])aiCount++;}
    let lower=text.toLowerCase();
    for(let phrase of Object.keys(Humanizer.aiTellWords)){if(phrase.includes(" ")){let count=(lower.match(new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),"g"))||[]).length;aiCount+=count;}}
    let density=aiCount/words.length;
    let score=Math.max(0,100-(density*500));
    return Math.round(score);
  },
  uniformityScore(text){
    let sentences=this.splitSentences(text);
    if(sentences.length<3)return 50;
    let openers=sentences.map(s=>{let words=s.split(/\s+/);return words[0]?words[0].toLowerCase().replace(/[^a-z']/g,""):"";});
    let uniqueOpeners=new Set(openers).size;
    let openerDiversity=uniqueOpeners/sentences.length;
    let lengths=sentences.map(s=>s.split(/\s+/).filter(w=>w.length>0).length);
    let mean=lengths.reduce((a,b)=>a+b,0)/lengths.length;
    let variance=lengths.reduce((a,b)=>a+Math.pow(b-mean,2),0)/lengths.length;
    let stddev=Math.sqrt(variance);
    let cv=mean>0?stddev/mean:0;
    let score=(openerDiversity*50)+(Math.min(1,cv)*50);
    return Math.round(score);
  },
  ngramScore(text){
    let words=text.toLowerCase().split(/\s+/).filter(w=>w.length>0).map(w=>w.replace(/[^a-z']/g,""));
    if(words.length<6)return 80;
    let trigrams={};
    for(let i=0;i<words.length-2;i++){let tg=words[i]+" "+words[i+1]+" "+words[i+2];trigrams[tg]=(trigrams[tg]||0)+1;}
    let repeated=0;
    for(let count of Object.values(trigrams)){if(count>1)repeated+=count-1;}
    let totalTrigrams=words.length-2;
    let repetitionRate=totalTrigrams>0?repeated/totalTrigrams:0;
    let score=Math.max(0,100-(repetitionRate*300));
    return Math.round(score);
  },
  punctuationScore(text){
    let types=new Set();
    if(text.includes("."))types.add("period");
    if(text.includes(","))types.add("comma");
    if(text.includes("!"))types.add("exclamation");
    if(text.includes("?"))types.add("question");
    if(text.includes(";"))types.add("semicolon");
    if(text.includes(":"))types.add("colon");
    if(text.includes("—"))types.add("emdash");
    if(text.includes("..."))types.add("ellipsis");
    if(text.includes("("))types.add("parenthesis");
    if(text.includes('"'))types.add("quote");
    let score=types.size*10;
    return Math.min(100,score);
  },
  informalityScore(text){
    let score=0;
    let contractions=(text.match(/\w+'\w+/g)||[]).length;score+=contractions*3;
    let informal=(text.match(/\b(like|kinda|sorta|gonna|wanna|gotta|yeah|nope|ok|okay|honestly|literally|actually|basically|totally|really|super|stuff|things|guy|guys|folks|cool|awesome|pretty|kind of|sort of|a lot|tons of|heck|darn)\b/gi)||[]).length;score+=informal*4;
    let colloquial=(text.match(/\b(whipped up|pulled off|panned out|kicked off|wrapped up|dove in|shot up|went up|came across|stumbled onto|figured|reckoned|had a hunch|had a feeling)\b/gi)||[]).length;score+=colloquial*5;
    return Math.min(100,score);
  },
  typoScore(text){
    let words=text.toLowerCase().split(/\s+/).filter(w=>w.length>0);
    let typoCount=0;
    for(let word of words){let clean=word.replace(/[^a-z]/g,"");if(Humanizer.typos[clean])typoCount++;}
    let misspellings=(text.match(/\b(teh|adn|tht|realy|definately|seperately|occured|untill|succesful|beleive|acheive|recieve|peice|thier|freind|becuase|differnt|evry|frist|goverment|happend|peopel)\b/gi)||[]).length;
    typoCount+=misspellings;
    let score=Math.min(100,typoCount*20);
    return score;
  },
};
const Detectors = {
  testAll(text){
    let m=Metrics.calculate(text);
    let results={};
    results["GPTZero"]=this.score(m,{burstiness:0.4,perplexity:0.3,aiVocab:0.2,uniformity:0.1},"GPTZero","Burstiness-focused. Abused by extreme sentence length variance.");
    results["Turnitin"]=this.score(m,{aiVocab:0.3,uniformity:0.3,burstiness:0.2,perplexity:0.2},"Turnitin","AI vocabulary-focused. Abused by removing all formal transitions.");
    results["Originality.ai"]=this.score(m,{perplexity:0.35,ngrams:0.25,aiVocab:0.2,uniformity:0.2},"Originality.ai","Perplexity-focused. Abused by unpredictable word choices.");
    results["Copyleaks"]=this.score(m,{uniformity:0.35,ngrams:0.25,burstiness:0.2,punctuation:0.2},"Copyleaks","Structure-focused. Abused by varying sentence openers and punctuation.");
    results["Winston AI"]=this.score(m,{uniformity:0.3,aiVocab:0.25,perplexity:0.25,burstiness:0.2},"Winston AI","Paragraph-focused. Abused by varying paragraph lengths.");
    results["ZeroGPT"]=this.score(m,{informality:0.35,punctuation:0.25,burstiness:0.2,perplexity:0.2},"ZeroGPT","Formality-focused. Abused by contractions and casual phrasing.");
    results["Sapling AI"]=this.score(m,{typos:0.3,informality:0.25,punctuation:0.2,burstiness:0.25},"Sapling AI","Perfection-focused. Abused by intentional typos and imperfections.");
    results["Content at Scale"]=this.score(m,{burstiness:0.2,perplexity:0.2,aiVocab:0.2,uniformity:0.2,ngrams:0.2},"Content at Scale","Balanced detector. Abused by hitting all metrics simultaneously.");
    return results;
  },
  score(m,weights,name,flaw){
    let humanScore=0;
    let factors=[];
    for(let[metric,weight]of Object.entries(weights)){
      let value=m[metric]||0;
      humanScore+=value*weight;
      if(value<40){factors.push("Low "+metric+" ("+Math.round(value)+")");}
    }
    humanScore=Math.round(humanScore);
    let verdict=humanScore>=50?"Human":"AI";
    let confidence=verdict==="Human"?humanScore:100-humanScore;
    return{name,verdict,confidence:Math.round(confidence),humanScore,factors:factors.length>0?factors:["All metrics within human range"],flaw};
  },
};
const Optimizer = {
  autoOptimize(text,maxIter,onProgress){
    let bestResult=null;
    let bestScore=0;
    for(let i=0;i<maxIter;i++){
      if(onProgress)onProgress(i+1,maxIter);
      let intensity=1+(i*0.3);
      Humanizer.srand(Date.now()+i*7919);
      let humanized=Humanizer.humanize(text,intensity);
      let results=Detectors.testAll(humanized);
      let allPass=true;
      let totalScore=0;
      let count=0;
      for(let[name,result]of Object.entries(results)){
        if(result.verdict==="AI")allPass=false;
        totalScore+=result.humanScore;
        count++;
      }
      let avgScore=count>0?totalScore/count:0;
      if(avgScore>bestScore){bestScore=avgScore;bestResult={text:humanized,results,iteration:i+1,avgScore};}
      if(allPass){return{text:humanized,results,iteration:i+1,avgScore,allPass:true};}
    }
    return Object.assign({},bestResult,{allPass:false});
  },
};
document.addEventListener("DOMContentLoaded",()=>{
  const inputEl=document.getElementById("input-text");
  const outputEl=document.getElementById("output-text");
  const humanizeBtn=document.getElementById("humanize-btn");
  const testBtn=document.getElementById("test-btn");
  const autoBtn=document.getElementById("auto-btn");
  const copyBtn=document.getElementById("copy-btn");
  const clearBtn=document.getElementById("clear-btn");
  const statsBar=document.getElementById("stats-bar");
  const wordCountEl=document.getElementById("word-count");
  const sentenceCountEl=document.getElementById("sentence-count");
  const avgLengthEl=document.getElementById("avg-length");
  const burstinessEl=document.getElementById("burstiness");
  const detectorResults=document.getElementById("detector-results");
  const detectorGrid=document.getElementById("detector-grid");
  const overallScore=document.getElementById("overall-score");
  const optimizeStatus=document.getElementById("optimize-status");
  const optimizeProgress=document.getElementById("optimize-progress");
  function updateStats(text){
    let stats=Humanizer.analyze(text);
    wordCountEl.textContent=stats.wordCount;
    sentenceCountEl.textContent=stats.sentenceCount;
    avgLengthEl.textContent=stats.avgLen;
    burstinessEl.textContent=stats.burstiness;
    statsBar.hidden=false;
  }
  function renderDetectorResults(results){
    let allPass=true;
    let totalScore=0;
    let count=0;
    let html="";
    for(let[name,result]of Object.entries(results)){
      let passClass=result.verdict==="Human"?"pass":"fail";
      if(result.verdict==="AI")allPass=false;
      totalScore+=result.humanScore;
      count++;
      html+='<div class="detector-card '+passClass+'">';
      html+='<div class="detector-name">'+name+'</div>';
      html+='<div class="detector-verdict '+passClass+'">'+result.verdict+'</div>';
      html+='<div class="detector-confidence">'+result.confidence+'%</div>';
      html+='<div class="detector-factors">'+result.factors.join("; ")+'</div>';
      html+='</div>';
    }
    detectorGrid.innerHTML=html;
    let avgScore=count>0?Math.round(totalScore/count):0;
    overallScore.className="overall-score "+(allPass?"pass":"fail");
    overallScore.innerHTML='<h3>'+(allPass?"ALL DETECTORS PASSED":"SOME DETECTORS FLAGGED AI")+'</h3><div class="score-text">Avg Human Score: '+avgScore+'%</div><p style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-dim);">'+(allPass?"Text is likely to pass all major AI detectors.":"Run Auto-Optimize to re-humanize until all detectors pass.")+'</p>';
    detectorResults.hidden=false;
  }
  humanizeBtn.addEventListener("click",()=>{
    let input=inputEl.value.trim();
    if(!input)return;
    Humanizer.srand(Date.now()%2147483647);
    let humanized=Humanizer.humanize(input);
    outputEl.value=humanized;
    updateStats(humanized);
    testBtn.disabled=false;
    autoBtn.disabled=false;
    copyBtn.disabled=false;
  });
  testBtn.addEventListener("click",()=>{
    if(!outputEl.value)return;
    let results=Detectors.testAll(outputEl.value);
    renderDetectorResults(results);
  });
  autoBtn.addEventListener("click",()=>{
    let input=inputEl.value.trim();
    if(!input)return;
    autoBtn.disabled=true;
    humanizeBtn.disabled=true;
    testBtn.disabled=true;
    optimizeStatus.hidden=false;
    optimizeProgress.innerHTML="<strong>Auto-optimizing...</strong> Testing multiple variations against all 8 detectors.";
    setTimeout(()=>{
      let result=Optimizer.autoOptimize(input,10,(iter,max)=>{
        optimizeProgress.innerHTML="<strong>Auto-optimizing...</strong> Iteration "+iter+" of "+max+". Testing against all 8 detectors.";
      });
      outputEl.value=result.text;
      updateStats(result.text);
      renderDetectorResults(result.results);
      if(result.allPass){
        optimizeProgress.innerHTML="<strong>Success!</strong> All detectors passed on iteration "+result.iteration+". Avg human score: "+Math.round(result.avgScore)+"%.";
      } else {
        optimizeProgress.innerHTML="<strong>Best result found.</strong> Iteration "+result.iteration+" had the highest avg score: "+Math.round(result.avgScore)+"%. Some detectors may still flag — try running Auto-Optimize again for a different variation.";
      }
      autoBtn.disabled=false;
      humanizeBtn.disabled=false;
      testBtn.disabled=false;
      copyBtn.disabled=false;
    },100);
  });
  copyBtn.addEventListener("click",async()=>{
    if(!outputEl.value)return;
    try{await navigator.clipboard.writeText(outputEl.value);copyBtn.textContent="Copied!";setTimeout(()=>{copyBtn.textContent="Copy Result";},2000);}
    catch(e){outputEl.select();document.execCommand("copy");copyBtn.textContent="Copied!";setTimeout(()=>{copyBtn.textContent="Copy Result";},2000);}
  });
  clearBtn.addEventListener("click",()=>{
    inputEl.value="";outputEl.value="";statsBar.hidden=true;detectorResults.hidden=true;optimizeStatus.hidden=true;
    testBtn.disabled=true;autoBtn.disabled=true;copyBtn.disabled=true;inputEl.focus();
  });
});
