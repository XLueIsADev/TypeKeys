const QUOTES = [
  "The quick brown fox jumps over the lazy dog while the sun sets slowly behind the distant hills.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "Simplicity is the ultimate sophistication, and clarity of thought is the beginning of wisdom.",
  "A journey of a thousand miles begins with a single step, but the direction matters more than speed.",
  "The best way to predict the future is to invent it, one small decision at a time.",
  "Every great developer you know got there by solving problems they were unqualified to solve.",
  "Code is like humor. When you have to explain it, it is bad, so write it so it needs no words.",
  "The only way to do great work is to love what you do and keep showing up when it gets hard.",
  "Talk is cheap, show me the code, because ideas without execution are just dreams in disguise.",
  "First, solve the problem. Then, write the code. Then, make it fast enough to matter.",
  "Learning never exhausts the mind, it only sharpens the tools you carry into tomorrow.",
  "Perfection is achieved not when there is nothing more to add, but when nothing is left to take away.",
  "The quieter you become, the more you are able to hear, and the better you type when it counts.",
  "Any fool can write code that a computer understands. Good programmers write code humans understand.",
  "Success is the sum of small efforts repeated day in and day out without much fanfare.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "The secret of getting ahead is getting started, and the secret of finishing is not stopping.",
  "You miss one hundred percent of the shots you do not take, so take the shot and keep moving.",
  "Focus is not about saying yes to the right thing, it is about saying no to everything else.",
  "Small daily improvements over time lead to stunning results that surprise everyone but you.",
  "The mountains are calling and I must go, but the valley still holds everything I need.",
  "Not all those who wander are lost, some are simply looking for a better path forward.",
  "It does not matter how slowly you go as long as you do not stop moving toward the goal.",
  "In the middle of difficulty lies opportunity, but only for the one who keeps looking.",
  "We are what we repeatedly do, so excellence is not an act but a habit built over time.",
  "The future belongs to those who believe in the beauty of their dreams and act on them.",
  "Whether you think you can or you think you cannot, you are usually right either way.",
  "Do what you can, with what you have, where you are, and the rest will follow slowly.",
  "An investment in knowledge pays the best interest, though the returns arrive quietly.",
  "The only limit to our realization of tomorrow is our doubt of today, so doubt less.",
  "Happiness is not something ready made, it comes from your own actions and choices.",
  "The wound is the place where the light enters you, and healing begins from within.",
  "You cannot swim for new horizons until you have courage to lose sight of the shore.",
  "The two most important days in your life are the day you are born and the day you find out why.",
  "If you want to go fast go alone, if you want to go far go together with other people.",
  "It always seems impossible until it is done, and then it seems obvious in hindsight.",
  "Success is not final, failure is not fatal, it is the courage to continue that counts.",
  "The mind is everything. What you think you become, and what you believe you achieve.",
  "Life is what happens when you are busy making other plans, so pay attention to now.",
  "The journey is the reward, and the destination is only a brief pause along the way.",
  "You do not have to be great to start, but you do have to start to be great at it.",
  "Everything you can imagine is real somewhere, so imagine carefully and build bravely.",
  "The best time to plant a tree was twenty years ago. The second best time is now.",
  "A ship in harbor is safe, but that is not what ships are built for in the first place.",
  "If opportunity does not knock, build a door and knock loudly on it yourself instead.",
  "The only way to do great work is to love what you do and keep doing it every day.",
  "Do not wait for the perfect moment, take the moment and make it perfect through effort.",
  "You become what you give your attention to, so choose your focus with great care.",
  "The cave you fear to enter holds the treasure you seek, so walk in without hesitation.",
  "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
  "Courage is not the absence of fear, it is the judgment that something else matters more.",
  "If you are going through hell, keep going, because the only way out is forward.",
  "The most common way people give up their power is by thinking they do not have any.",
  "Change your thoughts and you change your world, one small decision at a time.",
  "What you get by achieving your goals is not as important as what you become by chasing them.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "You only live once, but if you do it right, once is more than enough to matter.",
  "Do not let yesterday take up too much of today, because today is all you really have.",
  "The way to get started is to quit talking and begin doing something small right now.",
  "A person who never made a mistake never tried anything new, so mistakes are progress.",
  "Everything negative, pressure, challenges, is all an opportunity for me to rise.",
  "I have not failed. I have just found ten thousand ways that will not work yet.",
  "The only person you are destined to become is the person you decide to be today.",
  "It is not the strongest that survives, but the one most responsive to change.",
  "The purpose of our lives is to be happy, and to help others find that same thing.",
  "Get busy living or get busy dying, there is no comfortable middle ground forever.",
  "You have power over your mind, not outside events. Realize this and you find strength.",
  "Life is really simple, but we insist on making it complicated for no good reason.",
  "The unexamined life is not worth living, and the unlived life is not worth examining.",
  "Waste no more time arguing about what a good person should be. Just be one today.",
  "Very little is needed to make a happy life. It is all within yourself and your way of thinking.",
  "When you arise in the morning, think of what a privilege it is to be alive and breathe.",
  "The happiness of your life depends upon the quality of your thoughts and your company.",
  "Accept the things to which fate binds you, and love the people with whom fate brings you together.",
  "If it is not right, do not do it. If it is not true, do not say it, no matter the cost.",
  "The best revenge is to be unlike the one who performed the injustice in the first place.",
  "Look well into yourself. There is a source of strength which will always spring up if you look.",
  "Nothing happens to any person that they are not fitted by nature to bear and grow from.",
  "Confine yourself to the present, and let the past and future take care of themselves.",
  "How much time he gains who does not look to see what his neighbor says or does or thinks.",
  "The impediment to action advances action. What stands in the way becomes the way forward.",
  "You always own the option of having no opinion. There is no need to be upset about things.",
  "Remember, you are but a small part of a whole, and the whole will go on without you.",
  "It is not death that a man should fear, but he should fear never beginning to live at all.",
  "Every moment think steadily as a Roman and a man to do what you have in hand with dignity.",
  "When you have trouble getting out of bed, remember that you have work to do as a human being.",
  "Receive without pride, let go without attachment, and the world becomes easier to carry.",
  "The soul becomes dyed with the color of its thoughts, so choose your thoughts carefully.",
  "Loss is nothing else but change, and change is nature's delight and the way things are.",
  "If you want to improve, be content to be thought foolish and stupid for a little while.",
  "No person is free who is not master of himself, so master yourself first before others.",
  "Wealth consists not in having great possessions, but in having few wants and clear goals.",
  "First say to yourself what you would be, and then do what you have to do to become it.",
  "It is impossible for a person to learn what they think they already know quite well.",
  "The key is not to prioritize what is on your schedule, but to schedule your priorities.",
  "Effective people are not problem minded, they are opportunity minded in every situation.",
  "Most of us spend too much time on what is urgent and not enough on what is important.",
  "You have to decide what your highest priorities are and have the courage to say no.",
  "The main thing is to keep the main thing the main thing, and to let the rest go.",
  "Begin with the end in mind, and the middle becomes much easier to navigate each day.",
  "Seek first to understand, then to be understood, and most conflicts will dissolve.",
  "Synergy means the whole is greater than the sum of its parts, when people truly work together.",
  "Sharpen the saw regularly, because a dull tool demands more effort for worse results.",
  "Private victories precede public victories, so do the inner work before the outer show.",
  "Your attitude, not your aptitude, will determine your altitude in life and in work.",
  "The difference between ordinary and extraordinary is that little extra effort every day.",
  "Nothing is impossible, the word itself says I am possible if you look closely at it.",
  "Keep your face always toward the sunshine and shadows will fall behind you every time.",
  "The best and most beautiful things in the world cannot be seen or even touched, only felt.",
  "You must be the change you wish to see in the world, starting with your own actions.",
  "The only impossible journey is the one you never begin, so begin it today with one step.",
  "It takes courage to grow up and become who you really are, not who others want you to be.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "To live is the rarest thing in the world. Most people exist, and that is all they do.",
  "Be yourself, everyone else is already taken, and the world needs your specific voice.",
  "Success usually comes to those who are too busy to be looking for it, just doing the work.",
  "Try not to become a person of success, but rather try to become a person of value.",
  "The people who are crazy enough to think they can change the world are the ones who do.",
  "If you cannot do great things, do small things in a great way and the rest will follow.",
  "Do not go through life with a catcher's mitt on both hands. Throw something back sometimes.",
  "The only way to find the limits of the possible is to go beyond them into the impossible."
];

const COMMON_WORDS = [
  "the","be","to","of","and","a","in","that","have","I","it","for","not","on","with","he","as",
  "you","do","at","this","but","his","by","from","they","we","say","her","she","or","an","will",
  "my","one","all","would","there","their","what","so","up","out","if","about","who","get","which",
  "go","me","when","make","can","like","time","no","just","him","know","take","people","into","year",
  "your","good","some","could","them","see","other","than","then","now","look","only","come","its",
  "over","think","also","back","after","use","two","how","our","work","first","well","way","even",
  "new","want","because","any","these","give","day","most","us","is","are","was","were","been","has",
  "had","did","does","said","made","went","got","took","came","saw","knew","thought","told","became",
  "showed","left","felt","put","brought","began","kept","held","wrote","stood","heard","let","meant",
  "set","met","ran","paid","sat","spoke","lay","led","read","grew","lost","fell","sent","built",
  "understood","drew","broke","spent","cut","rose","drove","bought","wear","chose","ate","found"
];

const EXTRA_WORDS = [
  "quick","brown","fox","jumps","lazy","dog","sun","sets","slowly","behind","distant","hills",
  "bright","quiet","sound","dream","build","learn","write","create","simple","clean","smooth",
  "focus","calm","fast","deep","warm","cool","fresh","clear","steady","small","large","world",
  "life","still","between","never","while","again","place","little","right","left","light","night",
  "music","story","water","house","paper","green","open","close","start","finish","begin","end",
  "path","road","river","ocean","mountain","valley","forest","field","sky","cloud","rain","snow",
  "wind","storm","fire","stone","sand","star","moon","planet","space","circle","square","line",
  "point","shape","color","shade","shadow","glow","shine","dark","pale","rich","poor","young",
  "old","happy","sad","angry","wild","tame","soft","hard","rough","sharp","dull","sweet","bitter",
  "sour","salty","stale","used","real","fake","true","false","kind","cruel","gentle","brave","shy",
  "bold","meek","wise","foolish","strong","weak","light","heavy","wide","narrow","thick","thin",
  "meow","purr","cat","paw","whisker","tail","soft","claw","stretch","nap"
];

const ALL_WORDS = COMMON_WORDS.concat(EXTRA_WORDS);
const NUMBERS = ["0","1","2","3","4","5","6","7","8","9","10","12","15","20","24","30","42","50","100","365"];
const PUNCT_END = [".", ".", ".", "!", "?", ",", ";", ":"];

const TIPS = [
  "accuracy matters more than speed",
  "press tab for a new test, esc to restart",
  "slow is smooth, smooth is fast",
  "your weak keys are tracked automatically",
  "capitals count — enable punctuation to practice them",
  "rest your wrists, not your keyboard",
  "speed follows accuracy, not the other way around",
  "click the logo a few times, see what happens",
  "the weak mode drills the letters you miss most"
];

const $ = (id) => document.getElementById(id);

const stageStart = $("stageStart");
const stageTest = $("stageTest");
const stageResults = $("stageResults");

const startTarget = $("startTarget");
const againBtn = $("againBtn");
const practiceWeakBtn = $("practiceWeakBtn");
const newTestBtn = $("newTestBtn");
const restartBtn = $("restartBtn");
const themeToggle = $("themeToggle");
const iconSun = $("iconSun");
const iconMoon = $("iconMoon");
const resetStatsBtn = $("resetStats");
const toastEl = $("toast");
const logoEl = $("logo");

const modeChips = document.querySelectorAll("#modeChips .chip");
const amountChips = document.querySelectorAll("#amountChips .chip");
const modChips = document.querySelectorAll("#modChips .chip");

const textDisplay = $("textDisplay");
const hiddenInput = $("hiddenInput");
const testArea = $("testArea");
const caret = $("caret");
const focusOverlay = $("focusOverlay");

const live = document.querySelector(".live");
const liveWpm = $("liveWpm");
const liveAcc = $("liveAcc");
const liveMistakes = $("liveMistakes");
const liveProgress = $("liveProgress");
const progressLabel = $("progressLabel");

const resWpm = $("resWpm");
const resAcc = $("resAcc");
const resRaw = $("resRaw");
const resMistakes = $("resMistakes");
const resChars = $("resChars");
const resTime = $("resTime");
const wpmChart = $("wpmChart");

const weakPanel = $("weakPanel");
const weakGrid = $("weakGrid");
const weakNote = $("weakNote");
const weakSub = $("weakSub");

const homeBest = $("homeBest");
const homeLast = $("homeLast");
const homeTip = $("homeTip");

const STATS_KEY = "typekeys-weak-stats";
const RUNS_KEY = "typekeys-runs";
const MAX_RUNS = 30;

function loadWeakStats() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_) { return {}; }
}

function saveWeakStats(stats) {
  try { localStorage.setItem(STATS_KEY, JSON.stringify(stats)); } catch (_) {}
}

function loadRuns() {
  try {
    const raw = localStorage.getItem(RUNS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) { return []; }
}

function saveRuns(runs) {
  try { localStorage.setItem(RUNS_KEY, JSON.stringify(runs.slice(0, MAX_RUNS))); } catch (_) {}
}

let weakStats = loadWeakStats();
let recentRuns = loadRuns();

function recordMiss(expected) {
  if (!expected) return;
  const key = expected.toLowerCase();
  weakStats[key] = (weakStats[key] || 0) + 1;
  saveWeakStats(weakStats);
}

function topWeakKeys(n = 6) {
  return Object.entries(weakStats)
    .filter(([k, v]) => v > 0 && /[a-z0-9]/.test(k))
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
}

function totalMisses() {
  return Object.values(weakStats).reduce((a, b) => a + b, 0);
}

function resetWeakStats() {
  weakStats = {};
  saveWeakStats(weakStats);
}

let config = {
  mode: "time",
  amount: 30,
  punctuation: false,
  numbers: false
};

let words = [];
let currentWordIndex = 0;
let currentCharIndex = 0;

let started = false;
let finished = false;
let startTime = null;
let timerRAF = null;

let totalTyped = 0;
let correctTyped = 0;
let mistakesTotal = 0;

let wpmHistory = [];
let lastSampleTime = 0;

let lastQuoteIndex = -1;
let lastWordSet = "";

let typedBuffer = [];
let meowTriggered = false;
let matrixTriggered = false;
let logoTaps = 0;
let logoTapTimer = null;

function randInt(n) { return Math.floor(Math.random() * n); }

function pickQuote() {
  if (QUOTES.length === 1) return QUOTES[0];
  let i;
  do { i = randInt(QUOTES.length); } while (i === lastQuoteIndex);
  lastQuoteIndex = i;
  return QUOTES[i];
}

function randomWord() {
  const pool = Math.random() < 0.55 ? COMMON_WORDS : ALL_WORDS;
  return pool[randInt(pool.length)];
}

function weightedWord() {
  const weak = topWeakKeys(20);
  if (!weak.length) return randomWord();

  if (Math.random() < 0.7) {
    const chars = weak.map(([k]) => k).filter(c => /[a-z0-9]/.test(c));
    if (!chars.length) return randomWord();

    for (let attempt = 0; attempt < 40; attempt++) {
      const target = chars[randInt(chars.length)];
      const candidates = ALL_WORDS.filter(w => w.toLowerCase().includes(target));
      if (candidates.length) return candidates[randInt(candidates.length)];
    }
    return randomWord();
  }
  return randomWord();
}

function applyMods(list) {
  const out = list.slice();

  if (config.numbers) {
    const count = Math.max(1, Math.round(out.length * 0.08));
    for (let i = 0; i < count; i++) {
      out[randInt(out.length)] = NUMBERS[randInt(NUMBERS.length)];
    }
  }

  if (config.punctuation) {
    for (let i = 0; i < out.length; i++) {
      const w = out[i];
      if (/^\d+$/.test(w)) continue;
      if (i === 0 || Math.random() < 0.14) {
        out[i] = w.charAt(0).toUpperCase() + w.slice(1);
      }
      if (i === out.length - 1 || Math.random() < 0.2) {
        out[i] = out[i] + PUNCT_END[randInt(PUNCT_END.length)];
      }
    }
  }

  return out;
}

function generateText() {
  if (config.mode === "quotes") return pickQuote();

  const count = config.mode === "words" || config.mode === "weak"
    ? config.amount
    : Math.max(config.amount * 3, 60);

  const picker = config.mode === "weak" ? weightedWord : randomWord;

  let attempts = 0;
  let joined = "";
  do {
    const list = [];
    for (let i = 0; i < count; i++) list.push(picker());
    joined = applyMods(list).join(" ");
    attempts++;
  } while (joined === lastWordSet && attempts < 4);

  lastWordSet = joined;
  return joined;
}

function buildDisplay(text) {
  textDisplay.innerHTML = "";
  words = [];
  currentWordIndex = 0;
  currentCharIndex = 0;

  const frag = document.createDocumentFragment();

  text.split(" ").forEach((wordStr) => {
    const wordEl = document.createElement("span");
    wordEl.className = "word";

    const letters = [];
    for (const ch of wordStr) {
      const l = document.createElement("span");
      l.className = "letter";
      l.textContent = ch;
      wordEl.appendChild(l);
      letters.push(l);
    }

    wordEl.dataset.letters = wordStr;
    frag.appendChild(wordEl);
    words.push({ el: wordEl, letters });
  });

  textDisplay.appendChild(frag);
  if (words[0] && words[0].letters[0]) {
    words[0].letters[0].classList.add("current");
  }
}

function moveCaret() {
  const word = words[currentWordIndex];
  if (!word) { caret.classList.add("hidden"); return; }
  caret.classList.remove("hidden");

  const letters = word.letters;
  let target, offset;

  if (currentCharIndex < letters.length) {
    target = letters[currentCharIndex];
    offset = 0;
  } else if (letters.length > 0) {
    target = letters[letters.length - 1];
    offset = target.getBoundingClientRect().width;
  } else {
    target = word.el;
    offset = 0;
  }

  const areaRect = testArea.getBoundingClientRect();
  const rect = target.getBoundingClientRect();

  caret.style.left = (rect.left - areaRect.left + offset) + "px";
  caret.style.top = (rect.top - areaRect.top) + "px";
  caret.style.height = rect.height + "px";
}

function caretTyping() {
  caret.classList.add("typing");
  clearTimeout(caretTyping._t);
  caretTyping._t = setTimeout(() => caret.classList.remove("typing"), 500);
}

function startTimer() {
  startTime = performance.now();
  lastSampleTime = 0;
  wpmHistory = [];
  live.classList.add("active");
  timerRAF = requestAnimationFrame(tick);
}

function computeStats(elapsedSec) {
  const minutes = Math.max(elapsedSec / 60, 0.001);
  const raw = Math.round((totalTyped / 5) / minutes);
  const net = Math.round((correctTyped / 5) / minutes);
  const acc = totalTyped > 0 ? Math.round((correctTyped / totalTyped) * 100) : 100;
  return { raw, net, acc };
}

function tick() {
  if (!started || finished) return;

  const elapsed = (performance.now() - startTime) / 1000;

  if (elapsed - lastSampleTime >= 1) {
    lastSampleTime = elapsed;
    const { raw, net } = computeStats(elapsed);
    wpmHistory.push({ t: elapsed, wpm: net, raw, errors: mistakesTotal });

    liveWpm.textContent = net;
    const acc = totalTyped > 0 ? Math.round((correctTyped / totalTyped) * 100) : 100;
    liveAcc.textContent = acc + "%";
    liveMistakes.textContent = mistakesTotal;
  }

  if (config.mode === "time") {
    const remaining = Math.max(0, config.amount - elapsed);
    liveProgress.textContent = Math.ceil(remaining);
    progressLabel.textContent = "/ " + config.amount;
    if (elapsed >= config.amount) { finishTest(); return; }
  } else {
    liveProgress.textContent = Math.min(currentWordIndex + 1, words.length);
    progressLabel.textContent = "/ " + words.length;
  }

  timerRAF = requestAnimationFrame(tick);
}

function trackEasterEgg(ch) {
  typedBuffer.push(ch.toLowerCase());
  if (typedBuffer.length > 8) typedBuffer.shift();
  const last = typedBuffer.join("");

  if (!meowTriggered && last.endsWith("meow")) {
    meowTriggered = true;
    showToast("meow ✦");
    homeBest.classList.add("bounce");
    setTimeout(() => homeBest.classList.remove("bounce"), 700);
  }

  if (!matrixTriggered && last.endsWith("matrix")) {
    matrixTriggered = true;
    textDisplay.classList.add("matrix");
    showToast("wake up ✦");
    setTimeout(() => textDisplay.classList.remove("matrix"), 4000);
  }
}

function handleChar(ch) {
  if (finished) return;
  const word = words[currentWordIndex];
  if (!word) return;

  if (!started) { started = true; startTimer(); }

  caretTyping();
  const expected = word.el.dataset.letters[currentCharIndex];
  const letterEl = word.letters[currentCharIndex];
  totalTyped++;
  trackEasterEgg(ch);

  if (ch === expected) {
    letterEl.classList.add("correct");
    letterEl.classList.remove("current");
    correctTyped++;
    currentCharIndex++;

    if (currentCharIndex < word.letters.length) {
      word.letters[currentCharIndex].classList.add("current");
    }
    moveCaret();
    checkDone();
  } else {
    if (expected === undefined) {
      mistakesTotal++;
      recordMiss(word.el.dataset.letters[word.letters.length - 1]);
      word.el.classList.add("wrong");
      return;
    }
    letterEl.classList.add("wrong");
    letterEl.classList.remove("current");
    mistakesTotal++;
    recordMiss(expected);
    currentCharIndex++;

    if (currentCharIndex < word.letters.length) {
      word.letters[currentCharIndex].classList.add("current");
    }
    word.el.classList.add("wrong");
    moveCaret();
    checkDone();
  }
}

function handleSpace() {
  if (finished) return;
  const word = words[currentWordIndex];
  if (!word) return;

  if (!started) { started = true; startTimer(); }

  typedBuffer = [];

  if (currentCharIndex < word.letters.length) {
    for (let i = currentCharIndex; i < word.letters.length; i++) {
      word.letters[i].classList.remove("current");
      word.letters[i].classList.add("wrong");
      recordMiss(word.letters[i].textContent);
      mistakesTotal++;
      totalTyped++;
    }
    word.el.classList.add("wrong");
  }

  if (currentWordIndex < words.length - 1) {
    currentWordIndex++;
    currentCharIndex = 0;
    words[currentWordIndex].letters[0].classList.add("current");
    moveCaret();
    checkDone();
  } else {
    finishTest();
  }
}

function handleBackspace() {
  if (finished) return;

  if (typedBuffer.length) typedBuffer.pop();

  if (currentCharIndex > 0) {
    currentCharIndex--;
    const word = words[currentWordIndex];
    const letterEl = word.letters[currentCharIndex];
    letterEl.classList.remove("correct", "wrong");
    const nextEl = word.letters[currentCharIndex + 1];
    if (nextEl) nextEl.classList.remove("current");
    letterEl.classList.add("current");
    word.el.classList.remove("wrong");
    moveCaret();
  } else if (currentWordIndex > 0) {
    currentWordIndex--;
    const word = words[currentWordIndex];
    currentCharIndex = word.letters.length;
    word.letters.forEach(l => l.classList.remove("current"));
    word.el.classList.remove("wrong");
    moveCaret();
  }
}

function checkDone() {
  if (config.mode !== "time" && currentWordIndex >= words.length - 1) {
    const lastWord = words[words.length - 1];
    if (currentCharIndex >= lastWord.letters.length) {
      finishTest();
    }
  }
}

function finishTest() {
  if (finished) return;
  finished = true;
  started = false;
  cancelAnimationFrame(timerRAF);

  const elapsed = (performance.now() - startTime) / 1000;
  const { raw, net, acc } = computeStats(elapsed);

  resWpm.textContent = net;
  resAcc.textContent = acc + "%";
  resRaw.textContent = raw;
  resMistakes.textContent = mistakesTotal;
  resChars.textContent = correctTyped;
  resTime.textContent = Math.round(elapsed) + "s";

  recentRuns.unshift({
    wpm: net,
    raw: raw,
    acc: acc,
    mode: config.mode,
    amount: config.amount,
    time: Math.round(elapsed),
    ts: Date.now()
  });
  if (recentRuns.length > MAX_RUNS) recentRuns.length = MAX_RUNS;
  saveRuns(recentRuns);

  caret.classList.add("hidden");
  drawChart();
  renderWeakPanel();

  setTimeout(() => {
    stageTest.classList.add("hidden");
    stageResults.classList.remove("hidden");
  }, 160);
}

function renderWeakPanel() {
  weakGrid.innerHTML = "";
  const top = topWeakKeys(6);
  const total = totalMisses();

  if (!top.length) {
    weakSub.textContent = "no data yet — keep typing and I'll track your misses";
    const empty = document.createElement("div");
    empty.className = "weak-empty";
    empty.textContent = "you have not missed any keys yet. that is a good sign.";
    weakGrid.appendChild(empty);
    weakNote.textContent = "";
    practiceWeakBtn.disabled = true;
    practiceWeakBtn.style.opacity = "0.4";
    practiceWeakBtn.style.cursor = "not-allowed";
    return;
  }

  practiceWeakBtn.disabled = false;
  practiceWeakBtn.style.opacity = "";
  practiceWeakBtn.style.cursor = "";
  weakSub.textContent = `${total} total miss${total === 1 ? "" : "es"} recorded across all your runs`;

  top.forEach(([key, count]) => {
    const cell = document.createElement("div");
    cell.className = "weak-key";

    const ch = document.createElement("span");
    ch.className = "weak-key-char";
    ch.textContent = key === " " ? "␣" : key;

    const cnt = document.createElement("span");
    cnt.className = "weak-key-count";
    cnt.textContent = count + "×";

    cell.appendChild(ch);
    cell.appendChild(cnt);
    weakGrid.appendChild(cell);
  });

  const worst = top[0][0];
  const niceWorst = worst === " " ? "space" : `"${worst}"`;
  weakNote.innerHTML = `worst key: <kbd>${niceWorst}</kbd> — hit <kbd>practice weaknesses</kbd> to drill it`;
}

function drawChart() {
  const dpr = window.devicePixelRatio || 1;
  const rect = wpmChart.getBoundingClientRect();
  if (rect.width === 0) return;

  wpmChart.width = rect.width * dpr;
  wpmChart.height = rect.height * dpr;

  const ctx = wpmChart.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const w = rect.width;
  const h = rect.height;
  const padL = 34, padR = 12, padT = 12, padB = 22;
  const chartW = w - padL - padR;
  const chartH = h - padT - padB;

  const css = getComputedStyle(document.documentElement);
  const accent = css.getPropertyValue("--accent").trim() || "#ffd166";
  const dim = css.getPropertyValue("--dim").trim() || "#666";
  const border = css.getPropertyValue("--border").trim() || "#222";

  ctx.clearRect(0, 0, w, h);

  if (!wpmHistory.length) return;

  const maxWpm = Math.max(...wpmHistory.map(p => Math.max(p.wpm, p.raw)), 10);
  const maxT = Math.max(...wpmHistory.map(p => p.t), 1);

  const xOf = (t) => padL + (t / maxT) * chartW;
  const yOf = (v) => padT + chartH - (v / maxWpm) * chartH;

  ctx.strokeStyle = border;
  ctx.lineWidth = 1;
  for (let i = 0; i <= 3; i++) {
    const y = padT + (chartH / 3) * i;
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(w - padR, y);
    ctx.stroke();

    const val = Math.round(maxWpm - (maxWpm / 3) * i);
    ctx.fillStyle = dim;
    ctx.font = "10px 'JetBrains Mono', monospace";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(val, padL - 8, y);
  }

  ctx.strokeStyle = border;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.moveTo(padL, padT + chartH);
  ctx.lineTo(w - padR, padT + chartH);
  ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.strokeStyle = accent;
  ctx.lineWidth = 2;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();
  wpmHistory.forEach((p, i) => {
    const x = xOf(p.t);
    const y = yOf(p.wpm);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  const grad = ctx.createLinearGradient(0, padT, 0, padT + chartH);
  grad.addColorStop(0, accent + "33");
  grad.addColorStop(1, accent + "00");
  ctx.lineTo(xOf(wpmHistory[wpmHistory.length - 1].t), padT + chartH);
  ctx.lineTo(xOf(wpmHistory[0].t), padT + chartH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.fillStyle = accent;
  wpmHistory.forEach((p) => {
    ctx.beginPath();
    ctx.arc(xOf(p.t), yOf(p.wpm), 2, 0, Math.PI * 2);
    ctx.fill();
  });
}

function renderHomeMeta() {
  if (!recentRuns.length) {
    homeBest.textContent = "no runs yet";
    homeLast.textContent = "";
    return;
  }

  const best = Math.max(...recentRuns.map(r => r.wpm));
  const last = recentRuns[0];
  const amountLabel = last.mode === "time" ? last.amount + "s" : last.amount + " words";

  homeBest.textContent = `best ${best} wpm`;
  homeLast.textContent = `last run — ${last.wpm} wpm, ${last.acc}%, ${amountLabel}`;
}

function renderHomeMetaAndTip() {
  renderHomeMeta();
}

let tipIndex = 0;
let tipTimer = null;

function showTip() {
  homeTip.classList.remove("show");
  setTimeout(() => {
    homeTip.textContent = TIPS[tipIndex % TIPS.length];
    homeTip.classList.add("show");
    tipIndex++;
  }, 300);
}

function startTips() {
  clearInterval(tipTimer);
  showTip();
  tipTimer = setInterval(showTip, 6000);
}

function stopTips() {
  clearInterval(tipTimer);
  homeTip.classList.remove("show");
}

function resetToStart() {
  cancelAnimationFrame(timerRAF);
  started = false;
  finished = false;
  startTime = null;
  totalTyped = 0;
  correctTyped = 0;
  mistakesTotal = 0;
  wpmHistory = [];
  lastSampleTime = 0;
  words = [];
  currentWordIndex = 0;
  currentCharIndex = 0;
  typedBuffer = [];

  textDisplay.innerHTML = "";
  textDisplay.classList.remove("matrix");
  caret.classList.add("hidden");
  hiddenInput.value = "";
  live.classList.remove("active");
  liveWpm.textContent = "0";
  liveAcc.textContent = "100%";
  liveMistakes.textContent = "0";
  liveProgress.textContent = "0";
  progressLabel.textContent = "/ " + config.amount;

  stageResults.classList.add("hidden");
  stageTest.classList.add("hidden");
  stageStart.classList.remove("hidden");

  renderHomeMetaAndTip();
  startTips();
}

function newTest() {
  cancelAnimationFrame(timerRAF);
  started = false;
  finished = false;
  startTime = null;
  totalTyped = 0;
  correctTyped = 0;
  mistakesTotal = 0;
  wpmHistory = [];
  lastSampleTime = 0;
  typedBuffer = [];

  stopTips();

  const text = generateText();
  buildDisplay(text);

  currentWordIndex = 0;
  currentCharIndex = 0;
  hiddenInput.value = "";
  live.classList.remove("active");
  liveWpm.textContent = "0";
  liveAcc.textContent = "100%";
  liveMistakes.textContent = "0";
  liveProgress.textContent = config.mode === "time" ? config.amount : "1";
  progressLabel.textContent = config.mode === "time" ? "/ " + config.amount : "/ " + words.length;

  stageStart.classList.add("hidden");
  stageResults.classList.add("hidden");
  stageTest.classList.remove("hidden");

  requestAnimationFrame(() => {
    moveCaret();
    hiddenInput.focus({ preventScroll: true });
  });
}

function focusTest() {
  hiddenInput.focus({ preventScroll: true });
}

let toastTimer = null;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

hiddenInput.addEventListener("input", (e) => {
  const val = e.target.value;
  if (val.length === 0) {
    handleBackspace();
  } else {
    for (let i = 0; i < val.length; i++) {
      const ch = val[i];
      if (ch === " ") handleSpace();
      else handleChar(ch);
    }
  }
  hiddenInput.value = "";
});

hiddenInput.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && hiddenInput.value === "") {
    handleBackspace();
    e.preventDefault();
  }
});

testArea.addEventListener("click", focusTest);
startTarget.addEventListener("click", newTest);

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    newTest();
  } else if (e.key === "Escape") {
    if (!stageTest.classList.contains("hidden")) newTest();
  } else if (
    !stageStart.classList.contains("hidden") &&
    !e.ctrlKey && !e.metaKey && !e.altKey &&
    e.key.length === 1
  ) {
    newTest();
  } else if (
    !stageTest.classList.contains("hidden") &&
    !e.ctrlKey && !e.metaKey && !e.altKey &&
    e.key.length === 1 &&
    document.activeElement !== hiddenInput
  ) {
    focusTest();
  }
});

restartBtn.addEventListener("click", () => {
  if (stageStart.classList.contains("hidden")) newTest();
});

againBtn.addEventListener("click", newTest);
newTestBtn.addEventListener("click", resetToStart);

practiceWeakBtn.addEventListener("click", () => {
  if (!topWeakKeys(1).length) return;
  config.mode = "weak";
  modeChips.forEach(c => c.classList.toggle("active", c.dataset.mode === "weak"));
  const amountSet = document.getElementById("amountChips");
  const divider1 = document.getElementById("divider1");
  const divider2 = document.getElementById("divider2");
  const modSet = document.getElementById("modChips");
  amountSet.style.display = "";
  divider1.style.display = "";
  divider2.style.display = "";
  modSet.style.display = "";
  amountChips.forEach(c => c.classList.remove("active"));
  let matched = false;
  amountChips.forEach(c => {
    if (c.dataset.amount === "25") { c.classList.add("active"); config.amount = 25; matched = true; }
  });
  if (!matched) amountChips[1].classList.add("active");
  newTest();
});

resetStatsBtn.addEventListener("click", () => {
  if (!confirm("Reset your weak-key history and recent runs? This can't be undone.")) return;
  resetWeakStats();
  recentRuns = [];
  saveRuns(recentRuns);
  renderWeakPanel();
  renderHomeMeta();
  resetStatsBtn.textContent = "cleared";
  setTimeout(() => { resetStatsBtn.textContent = "reset stats"; }, 1400);
});

hiddenInput.addEventListener("blur", () => {
  if (!stageTest.classList.contains("hidden")) focusOverlay.classList.add("show");
});
hiddenInput.addEventListener("focus", () => focusOverlay.classList.remove("show"));

modeChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    modeChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    config.mode = chip.dataset.mode;

    const amountSet = document.getElementById("amountChips");
    const divider1 = document.getElementById("divider1");
    const divider2 = document.getElementById("divider2");
    const modSet = document.getElementById("modChips");

    if (config.mode === "quotes") {
      amountSet.style.display = "none";
      divider1.style.display = "none";
      divider2.style.display = "none";
      modSet.style.display = "none";
    } else {
      amountSet.style.display = "";
      divider1.style.display = "";
      divider2.style.display = "";
      modSet.style.display = "";

      amountChips.forEach(c => c.classList.remove("active"));
      const def = config.mode === "time" ? "30" : "25";
      let matched = false;
      amountChips.forEach(c => {
        if (c.dataset.amount === def) {
          c.classList.add("active");
          config.amount = parseInt(def);
          matched = true;
        }
      });
      if (!matched) amountChips[1].classList.add("active");
    }

    resetToStart();
  });
});

amountChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    amountChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    config.amount = parseInt(chip.dataset.amount);
    resetToStart();
  });
});

modChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const key = chip.dataset.mod;
    config[key] = !config[key];
    chip.classList.toggle("active", config[key]);
    if (!stageStart.classList.contains("hidden")) return;
    newTest();
  });
});

/* logo easter egg: 5 quick clicks */
logoEl.addEventListener("click", () => {
  logoTaps++;
  clearTimeout(logoTapTimer);
  logoTapTimer = setTimeout(() => { logoTaps = 0; }, 1200);
  if (logoTaps >= 5) {
    logoTaps = 0;
    const toolbar = document.querySelector(".toolbar");
    toolbar.classList.add("flip");
    showToast("nice try ✦");
    setTimeout(() => toolbar.classList.remove("flip"), 900);
  }
});

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (theme === "dark") {
    iconSun.style.display = "";
    iconMoon.style.display = "none";
  } else {
    iconSun.style.display = "none";
    iconMoon.style.display = "";
  }
  try { localStorage.setItem("typeflow-theme", theme); } catch (_) {}
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  setTheme(current === "dark" ? "light" : "dark");
  if (!stageResults.classList.contains("hidden")) drawChart();
});

(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem("typeflow-theme"); } catch (_) {}
  setTheme(saved || "dark");
})();

window.addEventListener("resize", () => {
  if (!stageTest.classList.contains("hidden") && !finished) moveCaret();
  if (!stageResults.classList.contains("hidden")) drawChart();
});

progressLabel.textContent = "/ " + config.amount;
renderHomeMetaAndTip();
startTips();
