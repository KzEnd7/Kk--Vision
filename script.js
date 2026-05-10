const copy = {
  zh: {
    navAbout: "关于",
    navNow: "现在",
    navContact: "联系",
    heroTitle: "你好，我是孙康凯。",
    heroLine: "我很冷静，但 AI 很离谱。",
    heroSubcopy:
      "我用 AI、前端和设计直觉，把模糊想法快速做成可用、好看、甚至有点离谱的产品体验。",
    statementOne:
      "我擅长在信息还不完整的时候保持冷静，把看起来离谱的 AI 想法拆成可以执行的界面、流程和产品原型。",
    statementTwo:
      "我喜欢那种从一句话开始，几个小时后就能摸到真实产品的速度。不是为了炫技，而是为了更快判断一个想法是否值得继续。",
    statementThree:
      "我的个人审美偏向克制、清晰、可用：像工程师一样落地，像设计师一样在意细节，像创业者一样追结果。",
    timelineDate: "现在",
    timelineRole: "AI Native Builder / Vibecoder",
    timelineDesc:
      "正在探索 AI 生产力工具、个人自动化、前端体验和从想法到可运行产品的最短路径。",
    contactTitle: "保持冷静，开始构建。",
  },
  en: {
    navAbout: "About",
    navNow: "Now",
    navContact: "Contact",
    heroTitle: "Hi, I'm Kangkai Sun.",
    heroLine: "I stay calm. AI gets weird.",
    heroSubcopy:
      "I turn blurry ideas into usable, polished, occasionally unreasonable product experiences with AI, frontend craft, and product taste.",
    statementOne:
      "I stay calm while the problem is still vague, then translate strange AI ideas into interfaces, workflows, and working prototypes.",
    statementTwo:
      "I like the speed of starting with one sentence and touching a real product a few hours later. Not for spectacle, but to learn whether an idea deserves more time.",
    statementThree:
      "My taste is restrained, clear, and usable: shipped like an engineer, refined like a designer, and judged by momentum.",
    timelineDate: "Now",
    timelineRole: "AI Native Builder / Vibecoder",
    timelineDesc:
      "Exploring AI productivity tools, personal automation, frontend experiences, and the shortest path from idea to running product.",
    contactTitle: "Stay calm. Start building.",
  },
};

let currentLang = "zh";
const button = document.querySelector(".lang-toggle");
const label = document.querySelector("[data-lang-label]");

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[lang][key];
  });
  label.textContent = lang === "zh" ? "EN" : "中";
}

button.addEventListener("click", () => {
  applyLanguage(currentLang === "zh" ? "en" : "zh");
});

applyLanguage(currentLang);
