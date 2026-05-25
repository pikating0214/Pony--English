import fs from "node:fs";
import path from "node:path";

const outDir = new URL(".", import.meta.url).pathname;

const days = [
  day(1, "index.html", [
    mc("Your hands are ______ than mine.", ["bigger", "big", "biggest"], "bigger", "比较级：big -> bigger"),
    mc("That is ______ dinosaur in this hall.", ["taller", "the tallest", "tall"], "the tallest", "最高级前常用 the"),
    fill("I am 1.65 ______.", "metres", "身高单位"),
    mc("—How heavy are you? —I'm 48 ______.", ["metres", "kilograms", "years old"], "kilograms", "体重单位"),
    fill("What ______ are your shoes?", "size", "询问尺码"),
    mc("clean 的过去式应放在句子：I ______ my room yesterday.", ["clean", "cleaned", "cleans"], "cleaned", "一般过去时"),
    fill("We ______ TV last night.", "watched", "watch 的过去式"),
    mc("Did you ______ a film last Saturday?", ["saw", "see", "seeing"], "see", "Did 后面用动词原形"),
    fill("I didn't ______ my clothes yesterday.", "wash", "didn't 后面用动词原形"),
    mc("go fishing 的过去式短语是 ______.", ["went fishing", "goed fishing", "goes fishing"], "went fishing", "go -> went"),
    fill("I ______ off my bike and hurt my foot.", "fell", "fall 的过去式"),
    mc("—Where did you go? —I ______ to Turpan.", ["go", "went", "goes"], "went", "回答用过去式"),
    fill("How did you ______ there?", "go", "询问交通方式"),
    mc("There ______ no library in my old school.", ["was", "were", "are"], "was", "单数用 was"),
    fill("There ______ no computers in my time.", "were", "复数用 were"),
    mc("Before, I ______ quiet. Now, I am active.", ["am", "was", "were"], "was", "Before 说过去"),
    fill("I couldn't ______ my bike well before.", "ride", "couldn't 后面用动词原形"),
    mc("People couldn't ______ the Internet before.", ["use", "used", "using"], "use", "couldn't + 动词原形")
  ]),
  day(2, "day2.html", [
    mc("You look ______ than before.", ["strong", "stronger", "strongest"], "stronger", "比较级"),
    fill("My legs are ______ than yours.", "longer", "long 的比较级"),
    mc("Amy is taller than both of ______.", ["we", "us", "our"], "us", "of 后用 us"),
    fill("The dinosaur is ______ than both of us together.", "taller", "比较级 + than"),
    mc("—How old are you? —I'm ______.", ["12 years old", "42 kilograms", "1.56 metres"], "12 years old", "How old 问年龄"),
    fill("My shoes are size ______.", "37", "尺码用数字"),
    mc("Mary ______ her homework yesterday.", ["do", "did", "does"], "did", "do 的过去式"),
    fill("I ______ at home all weekend.", "stayed", "stay 的过去式"),
    mc("She ______ a cold last week.", ["had", "has", "have"], "had", "have 的过去式"),
    fill("John had a cold and ______ yesterday.", "slept", "sleep 的过去式"),
    mc("Did you ______ anything else?", ["do", "did", "does"], "do", "Did 后面用动词原形"),
    fill("We ______ camping last weekend.", "went", "go 的过去式"),
    mc("ride a bike 的过去式短语是 ______.", ["rode a bike", "rided a bike", "ride a bike"], "rode a bike", "ride -> rode"),
    fill("I ______ fresh food in Turpan.", "ate", "eat 的过去式"),
    mc("There ______ no gym in my school before.", ["was", "were", "is"], "was", "单数 gym"),
    fill("Before, I ______ short. Now, I am tall.", "was", "过去状态"),
    mc("Before I couldn't ______ fast.", ["run", "ran", "running"], "run", "couldn't + 原形"),
    fill("Now I ______ cycling every day.", "go", "go cycling")
  ]),
  day(3, "day3.html", [
    mc("heavy 的比较级是 ______.", ["heavyer", "heavier", "heaviest"], "heavier", "辅音字母+y，变 y 为 i + er"),
    fill("This tiger is ______ than that tiger.", "smaller", "small 的比较级"),
    mc("Amy is the ______ one in our class.", ["tall", "taller", "tallest"], "tallest", "最高级"),
    fill("Your feet are bigger than ______.", "mine", "名词性物主代词"),
    mc("—How tall are you? —I'm ______.", ["1.65 metres", "48 kilograms", "12 years old"], "1.65 metres", "How tall 问身高"),
    fill("He ______ his room yesterday.", "cleaned", "clean 的过去式"),
    mc("I ______ tea in the afternoon.", ["drink", "drank", "drinks"], "drank", "drink 的过去式"),
    fill("I ______ a film last night.", "saw", "see 的过去式"),
    mc("I didn't ______ by bus yesterday.", ["go", "went", "goes"], "go", "didn't + 原形"),
    fill("Did you ______ TV last night?", "watch", "Did + 原形"),
    mc("take pictures 的过去式短语是 ______.", ["took pictures", "taked pictures", "takes pictures"], "took pictures", "take -> took"),
    fill("My parents ______ gifts in Turpan.", "bought", "buy 的过去式"),
    mc("—Who did you go with? —I went with my ______.", ["parents", "plane", "beach"], "parents", "Who 问人"),
    fill("We went there by ______.", "plane", "交通方式"),
    mc("There ______ no dining hall before.", ["was", "were", "are"], "was", "单数 dining hall"),
    fill("There ______ no stars on the Internet before.", "were", "复数 stars"),
    mc("Before, she ______ short hair. Now she has long hair.", ["had", "has", "have"], "had", "过去用 had"),
    fill("People couldn't ______ computers before.", "use", "couldn't + 原形")
  ]),
  day(4, "day4.html", [
    mc("thin 的比较级是 ______.", ["thiner", "thinner", "thinest"], "thinner", "重读闭音节双写 n"),
    fill("My fish is ______ than Sarah's.", "smaller", "比较级"),
    mc("This is ______ dinosaur in the hall.", ["the tallest", "taller", "tall"], "the tallest", "最高级"),
    fill("Who is ______, Zhang Peng or the dinosaur?", "taller", "两者比较"),
    mc("My uncle is two ______ younger than my father.", ["metres", "years", "kilograms"], "years", "年龄差"),
    fill("Yesterday I ______ my clothes.", "washed", "wash 的过去式"),
    mc("The day before yesterday, I ______ at home.", ["stay", "stayed", "stays"], "stayed", "过去时间"),
    fill("The book ______ interesting.", "was", "过去状态"),
    mc("—Did you like it? —Yes, I ______.", ["am", "do", "did"], "did", "Did 问 did 答"),
    fill("I didn't ______ a cold last week.", "have", "didn't + 原形"),
    mc("hurt my foot 的过去式短语是 ______.", ["hurt my foot", "hurted my foot", "hurts my foot"], "hurt my foot", "hurt 过去式不变"),
    fill("I ______ a horse last holiday.", "rode", "ride 的过去式"),
    mc("—How was the beach? —It ______ beautiful.", ["is", "was", "were"], "was", "过去感受"),
    fill("Did you ______ to Turpan?", "go", "Did + 原形"),
    mc("There ______ no computers or Internet in my time.", ["was", "were", "is"], "were", "复数/并列名词"),
    fill("Before, he didn't ______ reading books.", "like", "didn't + 原形"),
    mc("Now he ______ glasses.", ["wears", "wore", "wear"], "wears", "Now 用一般现在时"),
    fill("Before I couldn't swim. Now I ______ swim well.", "can", "现在能力")
  ]),
  day(5, "day5.html", [
    mc("smart 的比较级是 ______.", ["smarter", "smartest", "more smart"], "smarter", "一般 + er"),
    fill("The sky gets lower and ______.", "lower", "比较级 and 比较级"),
    mc("Your bags are bigger than ______.", ["you", "mine", "he's"], "mine", "比较对象一致"),
    fill("It is ______ than walking.", "faster", "fast 的比较级"),
    mc("What ______ are your shoes?", ["heavy", "size", "old"], "size", "询问尺码"),
    fill("Tom ______ a toy car yesterday.", "made", "make 的过去式"),
    mc("read a book 的过去式短语是 ______.", ["read a book", "readed a book", "reads a book"], "read a book", "read 拼写不变"),
    fill("We ______ our stay at the hotel.", "enjoyed", "enjoy 的过去式"),
    mc("Did Sarah ______ an email yesterday?", ["write", "wrote", "writes"], "write", "Did + 原形"),
    fill("I ______ not wash the dishes yesterday.", "did", "否定句：did not + 原形"),
    mc("fall off my bike 的过去式是 ______.", ["fell off my bike", "fallen off my bike", "fall off my bike"], "fell off my bike", "fall -> fell"),
    fill("We ______ swimming over the holiday.", "went", "went swimming"),
    mc("—What happened? —I ______ my foot.", ["hurt", "hurts", "hurted"], "hurt", "hurt 过去式不变"),
    fill("Who did you go ______?", "with", "go with"),
    mc("There ______ no grass before.", ["was", "were", "are"], "was", "不可数/单数结构"),
    fill("Before, I ______ like dogs.", "didn't", "过去否定"),
    mc("Before, I was quiet. Now I ______ active.", ["am", "was", "were"], "am", "Now 用现在"),
    fill("How do you ______ that?", "know", "固定句型")
  ]),
  day(6, "day6.html", [
    mc("long 的比较级是 ______.", ["longer", "longger", "longest"], "longer", "一般 + er"),
    fill("Those dresses are ______ than these ones.", "nicer", "nice -> nicer"),
    mc("Amy is ______ than both of us.", ["tall", "taller", "tallest"], "taller", "比较级 + than"),
    fill("That's the ______ dinosaur in this hall.", "tallest", "最高级"),
    mc("—How heavy are you? —I'm ______.", ["48 kilograms", "1.65 metres", "12 years old"], "48 kilograms", "How heavy 问体重"),
    fill("Look! The girl is ______ kungfu.", "doing", "Look 表示正在进行"),
    mc("My father ______ to music last night.", ["listen", "listens", "listened"], "listened", "过去时间"),
    fill("She ______ to the cinema with her friends yesterday.", "went", "go 的过去式"),
    mc("Did you ______ a film last Saturday?", ["see", "saw", "seeing"], "see", "Did + 原形"),
    fill("I ______ at home all day yesterday.", "stayed", "stay 的过去式"),
    mc("go camping 的过去式是 ______.", ["went camping", "goed camping", "goes camping"], "went camping", "go -> went"),
    fill("I ______ lots of pictures at the beach.", "took", "take 的过去式"),
    mc("—How did you go there? —We went there by ______.", ["plane", "parents", "mule"], "plane", "交通工具"),
    fill("It looks ______ a mule.", "like", "look like"),
    mc("There ______ no computer or Internet in my time.", ["was", "were", "are"], "was", "no computer or Internet 作整体"),
    fill("There ______ no gyms before.", "were", "复数 gyms"),
    mc("Before, I ______ quiet. Now, I'm active.", ["am", "was", "were"], "was", "Before 过去"),
    fill("People couldn't ______ the Internet before.", "use", "couldn't + 原形"),
    mc("Now I ______ cycling every day.", ["go", "went", "goes"], "go", "Now + 一般现在时"),
    fill("We are all ______ now.", "different", "Unit 4 核心句")
  ]),
  day(7, "day7.html", [
    mc("short 的比较级是 ______.", ["shorter", "shortest", "more short"], "shorter", "一般 + er"),
    fill("My shadow is getting ______ and longer.", "longer", "比较级 and 比较级"),
    mc("The rabbit is ______ than the elephant.", ["smaller", "smallest", "small"], "smaller", "比较级 + than"),
    fill("This is the ______ hall in our school.", "biggest", "big 最高级双写 g + est"),
    mc("—What size are your shoes? —My shoes are ______.", ["size 37", "37 kilograms", "1.37 metres"], "size 37", "What size 问尺码"),
    fill("Your feet are bigger than ______.", "mine", "比较对象一致，用 mine"),
    mc("I ______ my room last Monday.", ["clean", "cleaned", "cleans"], "cleaned", "过去时间用过去式"),
    fill("We ______ tea and watched TV yesterday.", "drank", "drink 的过去式"),
    mc("Did you ______ anything else?", ["do", "did", "does"], "do", "Did 后面用动词原形"),
    fill("She didn't ______ a film last night.", "see", "didn't 后面用动词原形"),
    mc("ride a horse 的过去式短语是 ______.", ["rode a horse", "rided a horse", "ride a horse"], "rode a horse", "ride -> rode"),
    fill("I ______ gifts for my parents.", "bought", "buy 的过去式"),
    mc("—Where did you go? —We ______ to the beach.", ["went", "go", "goes"], "went", "回答过去经历用过去式"),
    fill("How ______ you go there?", "did", "How did you go there?"),
    mc("There ______ no dining hall in my old school.", ["was", "were", "are"], "was", "单数 dining hall"),
    fill("There ______ no computers before.", "were", "复数 computers"),
    mc("Before, I ______ like badminton. Now I like it.", ["didn't", "don't", "wasn't"], "didn't", "过去不喜欢用 didn't like"),
    fill("Before, I couldn't ______ cycling well.", "go", "couldn't + 动词原形"),
    mc("Now she ______ very active in class.", ["is", "was", "were"], "is", "Now 用现在"),
    fill("Tell us ______ your school, please.", "about", "Tell us about...")
  ])
];

function day(dayNumber, file, questions) {
  return {
    file,
    day: dayNumber,
    title: `Units 1-4 Review Challenge ${dayNumber}`,
    subtitle: "综合复习：比较级、最高级、一般过去时、旅行问答、Then and now",
    focus: [
      "Unit 1 比较级/最高级",
      "Unit 2 一般过去时",
      "Unit 3 旅行问答",
      "Unit 4 过去和现在",
      "基础词形和语法"
    ],
    questions
  };
}

function mc(prompt, options, answer, hint = "") {
  return { type: "mc", prompt, options, answer, hint };
}

function fill(prompt, answer, hint = "") {
  return { type: "fill", prompt, answer, hint };
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderQuestion(question, index) {
  const number = index + 1;
  const hint = question.hint ? `<p class="hint">知识点：${escapeHtml(question.hint)}</p>` : "";

  if (question.type === "mc") {
    return `
      <article class="question" data-answer="${escapeHtml(question.answer)}">
        <div class="q-head"><span class="q-num">${number}</span><strong>选择题：${escapeHtml(question.prompt)}</strong></div>
        ${hint}
        <div class="options">
          ${question.options.map((option, optionIndex) => {
            const letter = String.fromCharCode(65 + optionIndex);
            return `<label class="option"><input type="radio" name="q${number}" value="${escapeHtml(option)}"><span>${letter}. ${escapeHtml(option)}</span></label>`;
          }).join("")}
        </div>
        <div class="feedback"></div>
      </article>`;
  }

  return `
    <article class="question" data-answer="${escapeHtml(question.answer)}">
      <div class="q-head"><span class="q-num">${number}</span><strong>填空题：${escapeHtml(question.prompt)}</strong></div>
      ${hint}
      <input class="text-answer" type="text" aria-label="第${number}题输入框" placeholder="输入一个单词或短语">
      <div class="feedback"></div>
    </article>`;
}

function renderNav(currentDay) {
  return days.map((dayItem) => {
    const isCurrent = dayItem.day === currentDay ? " current" : "";
    return `<a class="nav-link${isCurrent}" href="${dayItem.file}">Day ${dayItem.day}</a>`;
  }).join("");
}

function renderPage(dayItem) {
  const total = dayItem.questions.length;
  const previous = days.find((item) => item.day === dayItem.day - 1);
  const next = days.find((item) => item.day === dayItem.day + 1);

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day ${dayItem.day} - ${escapeHtml(dayItem.title)}</title>
  <style>
    :root {
      --ink: #233142;
      --muted: #667085;
      --line: #d9e2ec;
      --paper: #fffdf7;
      --brand: #2364aa;
      --brand-dark: #173f70;
      --accent: #f59f00;
      --soft: #eef7ff;
      --right: #237a3b;
      --wrong: #b42318;
      --shadow: 0 12px 28px rgba(35, 49, 66, 0.12);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: Arial, "Microsoft YaHei", sans-serif;
      color: var(--ink);
      background: linear-gradient(180deg, #edf6ff 0%, #fff8e8 100%);
      line-height: 1.6;
    }

    header {
      background: var(--brand);
      color: white;
      padding: 22px 16px 16px;
    }

    .wrap {
      width: min(980px, 100%);
      margin: 0 auto;
    }

    h1 {
      margin: 0 0 8px;
      font-size: 28px;
      line-height: 1.18;
      letter-spacing: 0;
    }

    h2 {
      margin: 0 0 10px;
      font-size: 21px;
      letter-spacing: 0;
    }

    p { margin: 0 0 10px; }

    .subtitle {
      max-width: 800px;
      margin: 0;
      color: #eaf6ff;
      font-size: 15px;
    }

    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .nav-link {
      display: inline-flex;
      align-items: center;
      min-height: 34px;
      padding: 5px 10px;
      border: 1px solid rgba(255,255,255,0.55);
      border-radius: 8px;
      color: white;
      text-decoration: none;
      font-weight: 700;
      font-size: 14px;
    }

    .nav-link.current {
      background: white;
      color: var(--brand-dark);
    }

    main { padding: 16px 16px 42px; }

    .panel {
      background: rgba(255,255,255,0.96);
      border: 1px solid var(--line);
      border-radius: 8px;
      box-shadow: var(--shadow);
      padding: 16px;
      margin-bottom: 14px;
    }

    .meta-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .meta-box {
      min-height: 84px;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 11px;
      background: var(--paper);
    }

    .meta-box strong {
      display: block;
      margin-bottom: 4px;
      color: var(--brand-dark);
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }

    .chip {
      border-radius: 999px;
      background: var(--soft);
      border: 1px solid #bfdbfe;
      color: #17446f;
      padding: 4px 9px;
      font-weight: 700;
      font-size: 13px;
    }

    .score-card {
      position: sticky;
      top: 0;
      z-index: 4;
      display: flex;
      align-items: center;
      gap: 12px;
      justify-content: space-between;
      background: white;
      border: 1px solid var(--line);
      border-radius: 8px;
      box-shadow: 0 7px 18px rgba(35, 49, 66, 0.12);
      padding: 12px;
      margin-bottom: 14px;
    }

    .score {
      font-size: 20px;
      color: var(--brand-dark);
      font-weight: 800;
      white-space: nowrap;
    }

    .progress {
      flex: 1;
      height: 12px;
      overflow: hidden;
      border-radius: 999px;
      background: #edf2f7;
    }

    .progress-fill {
      width: 0;
      height: 100%;
      background: linear-gradient(90deg, var(--brand), var(--accent));
      transition: width 0.2s ease;
    }

    .rank {
      min-width: 138px;
      text-align: right;
      font-weight: 700;
      color: #344054;
    }

    .question {
      border-top: 1px solid var(--line);
      padding: 13px 0;
    }

    .question:first-of-type { border-top: 0; }

    .q-head {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      margin-bottom: 6px;
    }

    .q-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 28px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--brand);
      color: white;
      font-weight: 800;
      font-size: 14px;
    }

    .options {
      display: grid;
      gap: 8px;
      margin-top: 8px;
    }

    .option {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      min-height: 42px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #ffffff;
      padding: 9px 10px;
      cursor: pointer;
    }

    input[type="radio"] {
      margin-top: 5px;
      accent-color: var(--brand);
    }

    .text-answer {
      width: 100%;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 10px;
      font: inherit;
      background: white;
      margin-top: 8px;
    }

    .hint {
      color: var(--muted);
      font-size: 14px;
      margin-top: -2px;
    }

    .feedback {
      min-height: 22px;
      margin-top: 8px;
      font-size: 14px;
      font-weight: 800;
    }

    .feedback.right { color: var(--right); }
    .feedback.wrong { color: var(--wrong); }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 14px;
    }

    button,
    .page-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      border: 0;
      border-radius: 8px;
      padding: 10px 14px;
      background: var(--brand);
      color: white;
      font: inherit;
      font-weight: 800;
      text-decoration: none;
      cursor: pointer;
    }

    .secondary { background: #475467; }

    button:hover,
    .page-btn:hover {
      background: var(--brand-dark);
    }

    .result {
      display: none;
      border: 2px solid var(--brand);
    }

    .result.show { display: block; }

    .privacy {
      border: 1px dashed #98a2b3;
      background: #f8fafc;
      color: #344054;
      font-size: 14px;
    }

    @media (max-width: 720px) {
      h1 { font-size: 23px; }
      .meta-grid { grid-template-columns: 1fr; }
      .score-card {
        align-items: stretch;
        flex-direction: column;
      }
      .score { white-space: normal; }
      .rank {
        min-width: 0;
        text-align: left;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="wrap">
      <h1>Day ${dayItem.day}: ${escapeHtml(dayItem.title)}</h1>
      <p class="subtitle">${escapeHtml(dayItem.subtitle)}</p>
      <nav aria-label="七天闯关导航">${renderNav(dayItem.day)}</nav>
    </div>
  </header>

  <main class="wrap">
    <section class="panel">
      <h2>今日任务</h2>
      <div class="meta-grid">
        <div class="meta-box"><strong>题量</strong>共 ${total} 题，只保留选择题和填空题。</div>
        <div class="meta-box"><strong>适合</strong>基础弱学生，每天综合复习同一批核心知识点。</div>
        <div class="meta-box"><strong>目标</strong>反复巩固词形、句型和语法，只做选择和填空。</div>
      </div>
      <div class="chips">${dayItem.focus.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}</div>
    </section>

    <section class="score-card" aria-live="polite">
      <div class="score">⭐ <span id="score">0</span> / ${total}</div>
      <div class="progress" aria-label="score progress"><div class="progress-fill" id="progressFill"></div></div>
      <div class="rank" id="rank">Start!</div>
    </section>

    <section class="panel">
      <h2>开始闯关</h2>
      ${dayItem.questions.map(renderQuestion).join("")}
      <div class="actions">
        <button type="button" id="checkBtn">检查结果</button>
        <button type="button" class="secondary" id="resetBtn">重新开始</button>
      </div>
    </section>

    <section class="panel result" id="resultBox">
      <h2 id="resultTitle">闯关结果</h2>
      <p id="resultText"></p>
    </section>

    <section class="panel privacy">
      <h2>老师和家长提示</h2>
      <p>页面只提示是否正确和需要回看的知识点。网页不收集姓名和成绩，建议学生完成后截图提交。</p>
      <div class="actions">
        ${previous ? `<a class="page-btn secondary" href="${previous.file}">上一天</a>` : ""}
        ${next ? `<a class="page-btn" href="${next.file}">下一天</a>` : ""}
      </div>
    </section>
  </main>

  <script>
    const total = ${total};
    const scoreEl = document.getElementById("score");
    const progressFill = document.getElementById("progressFill");
    const rankEl = document.getElementById("rank");
    const resultBox = document.getElementById("resultBox");
    const resultTitle = document.getElementById("resultTitle");
    const resultText = document.getElementById("resultText");

    function clean(value) {
      return String(value)
        .trim()
        .replace(/[’]/g, "'")
        .replace(/[。？！?.!,]/g, "")
        .replace(/\\s+/g, " ")
        .toLowerCase();
    }

    function answerOf(question) {
      const radio = question.querySelector("input[type='radio']:checked");
      if (radio) return radio.value;
      const text = question.querySelector(".text-answer");
      return text ? text.value : "";
    }

    function checkAnswers() {
      let score = 0;
      document.querySelectorAll(".question[data-answer]").forEach((question) => {
        const expected = question.dataset.answer;
        const actual = answerOf(question);
        const feedback = question.querySelector(".feedback");
        const isText = Boolean(question.querySelector(".text-answer"));
        const correct = isText ? clean(actual) === clean(expected) : actual === expected;

        if (correct) {
          score += 1;
          feedback.textContent = "Correct! 得到1星。";
          feedback.className = "feedback right";
        } else {
          feedback.textContent = "Try again. 请回看本题下面的知识点，再试一次。";
          feedback.className = "feedback wrong";
        }
      });
      updateScore(score);
      showResult(score);
    }

    function updateScore(score) {
      scoreEl.textContent = score;
      progressFill.style.width = (score / total * 100) + "%";
      if (score >= Math.ceil(total * 0.85)) {
        rankEl.textContent = "基础很稳";
      } else if (score >= Math.ceil(total * 0.65)) {
        rankEl.textContent = "继续巩固";
      } else {
        rankEl.textContent = "再练一遍";
      }
    }

    function showResult(score) {
      resultBox.classList.add("show");
      if (score >= Math.ceil(total * 0.85)) {
        resultTitle.textContent = "太棒了，今天过关！";
        resultText.textContent = "今天的综合知识点掌握得比较稳。下一步可以把错题句子读熟。";
      } else if (score >= Math.ceil(total * 0.65)) {
        resultTitle.textContent = "不错，还需要再巩固";
        resultText.textContent = "建议把错题对应的知识点读3遍，再重新做一遍。";
      } else {
        resultTitle.textContent = "别急，基础正在变稳";
        resultText.textContent = "先读知识点提示，再做题。每天重复练，正确率会慢慢上来。";
      }
      resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function resetPage() {
      document.querySelectorAll("input[type='radio']").forEach((input) => input.checked = false);
      document.querySelectorAll(".text-answer").forEach((input) => input.value = "");
      document.querySelectorAll(".feedback").forEach((feedback) => {
        feedback.textContent = "";
        feedback.className = "feedback";
      });
      resultBox.classList.remove("show");
      updateScore(0);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    document.getElementById("checkBtn").addEventListener("click", checkAnswers);
    document.getElementById("resetBtn").addEventListener("click", resetPage);
  </script>
</body>
</html>`;
}

for (const dayItem of days) {
  fs.writeFileSync(path.join(outDir, dayItem.file), renderPage(dayItem), "utf8");
}

console.log(`Generated ${days.length} comprehensive review HTML files.`);
