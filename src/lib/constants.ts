export const products = [
  {
    id: 1,
    name: "DebtWar",
    slug: "debtwar",
    tagline: "Social Chaos Economy MMO",
    description:
      "The most chaotic debt-collection game on Telegram. Lend, collect, trap, sabotage, and dominate the underground economy. Build your gang, set traps, and rise through the ranks in this social MMO.",
    longDescription:
      "DebtWar is a social chaos economy MMO where players lend, borrow, and collect debts in a cutthroat underground economy. With features like credit scores, banks, lootboxes, traps, spy systems, casino games, and gang wars, every move you makes ripples through the ecosystem. Built for Telegram with a rich command system and deep progression mechanics.",
    status: "live",
    category: "game",
    cta: { text: "Play on Telegram", url: "https://t.me/DebtWarBot" },
    tags: ["Game", "Telegram", "Social", "MMO", "Economy"],
    logoPath: "/assets/debtwar-productlogo.avif",
    github: "https://github.com/FMATheNomad/debtwar",
    features: [
      "Debt economy with 5% daily interest",
      "Credit score & bank system",
      "Advanced traps & sabotage",
      "Spy network & intelligence",
      "Casino: Slots, Blackjack, Roulette",
      "Gang/Mafia system with wars",
      "8 achievements + 10 titles/ranks",
      "Interactive NPCs & court system",
      "Seasonal leaderboards (30 days)",
      "Multi-language (ID/EN)",
    ],
    tech: ["Python", "python-telegram-bot", "PostgreSQL", "APScheduler"],
  },
  {
    id: 2,
    name: "JatuhTempo",
    slug: "jatuhtempo",
    tagline: "AI-Powered Debt Management",
    description:
      "Smart debt management assistant powered by AI. Upload bill screenshots and let AI extract the details — amount, platform, due date. Get automatic reminders before you miss a payment.",
    longDescription:
      "JatuhTempo is an AI-powered debt management assistant for Indonesian users. Upload a screenshot of your bill, and the AI (DeepSeek) extracts the amount, platform, and due date automatically. Supports Akulaku, Kredivo, Shopee PayLater, and more. Get reminders at H-7, H-3, H-1, and on due date. Track all your debts, view monthly summaries, and never miss a payment again.",
    status: "live",
    category: "finance",
    cta: { text: "Try on Telegram", url: "https://t.me/JatuhTempo_bot" },
    tags: ["AI", "Telegram", "Finance", "OCR", "Debt Management"],
    logoPath: "/assets/jatuhtempo-productlogo.png",
    github: "https://github.com/FMATheNomad/jatuhtempo",
    features: [
      "AI-powered OCR bill parsing",
      "Auto-detect platform, amount, due date",
      "Manual debt entry via Telegram",
      "Automatic reminders (H-7, H-3, H-1, D-Day)",
      "Monthly summaries & reports",
      "Installment support (e.g. 3/12)",
      "Multi-user support",
      "Category-based debt tracking",
      "FastAPI backend with async PostgreSQL",
      "Docker deployment ready",
    ],
    tech: ["Python", "FastAPI", "Aiogram", "PostgreSQL", "DeepSeek AI", "PaddleOCR"],
  },
];

export const companyInfo = {
  name: "FMA Software Labs",
  tagline: "Building AI-native micro-SaaS, micro-GaaS & digital product ecosystems",
  description:
    "We are an AI-native software lab building micro-SaaS, micro-GaaS, and digital products. Founded by a solo engineer with a vision to create futuristic digital ecosystems that blend social interaction, gamification, artificial intelligence, and developer tooling.",
  founded: "2024",
  location: "Remote-First",
  email: "hello@fmasoftwarelabs.com",
  social: {
    github: "https://github.com/FMATheNomad",
    twitter: "https://x.com/fmathenomad",
    telegram: "https://t.me/fmathenomad",
  },
};

export const promptProducts = [
  {
    id: "python-debug-toolkit",
    name: "AI Debug Toolkit for Python",
    description:
      "50 premium AI prompts for debugging Python code. Covers FastAPI, Django, data science, performance optimization, and production troubleshooting.",
    languages: ["Python"],
    links: {
      gumroad: "https://fmasoftwarelabs.gumroad.com/",
      payhip: "https://payhip.com/FMASoftwareLabs/",
    },
    price: "$5",
    image: "/assets/products/python-debug-toolkit.png",
  },
  {
    id: "js-debug-toolkit",
    name: "AI Debug Toolkit for JavaScript",
    description:
      "50 premium AI prompts for debugging JavaScript/Node.js code. Covers async bugs, memory leaks, React issues, and production stack traces.",
    languages: ["JavaScript", "Node.js"],
    links: {
      gumroad: "https://fmasoftwarelabs.gumroad.com/",
      payhip: "https://payhip.com/FMASoftwareLabs/",
    },
    price: "$5",
    image: "/assets/products/js-debug-toolkit.png",
  },
  {
    id: "ts-debug-toolkit",
    name: "AI Debug Toolkit for TypeScript",
    description:
      "50 premium AI prompts for debugging TypeScript code. Covers type errors, generics, strict mode migration, and framework-specific debugging.",
    languages: ["TypeScript"],
    links: {
      gumroad: "https://fmasoftwarelabs.gumroad.com/",
      payhip: "https://payhip.com/FMASoftwareLabs/",
    },
    price: "$5",
    image: "/assets/products/ts-debug-toolkit.png",
  },
  {
    id: "go-debug-toolkit",
    name: "AI Debug Toolkit for Go",
    description:
      "50 premium AI prompts for debugging Go applications. Covers goroutine leaks, profiling, HTTP handlers, and production incidents.",
    languages: ["Go"],
    links: {
      gumroad: "https://fmasoftwarelabs.gumroad.com/",
      payhip: "https://payhip.com/FMASoftwareLabs/",
    },
    price: "$5",
    image: "/assets/products/go-debug-toolkit.png",
  },
  {
    id: "java-debug-toolkit",
    name: "AI Debug Toolkit for Java",
    description:
      "50 premium AI prompts for debugging Java applications. Covers Spring Boot, Quarkus, virtual threads, and JVM internals.",
    languages: ["Java"],
    links: {
      gumroad: "https://fmasoftwarelabs.gumroad.com/",
      payhip: "https://payhip.com/FMASoftwareLabs/",
    },
    price: "$5",
    image: "/assets/products/java-debug-toolkit.png",
  },
];

export const terminalLogs: Array<{
  type: "info" | "success" | "prompt" | "cursor";
  message: string;
  delay: number;
}> = [
  { type: "info", message: "FMA Software Labs — boot sequence initiated", delay: 0 },
  { type: "success", message: "Kernel loaded: AI-native ecosystem engine v3.0.0", delay: 800 },
  { type: "info", message: "Mounting product ecosystem...", delay: 1600 },
  { type: "success", message: "DebtWar — Social Chaos Economy MMO [ONLINE]", delay: 2400 },
  { type: "success", message: "JatuhTempo — AI-Powered Debt Management [ONLINE]", delay: 3200 },
  { type: "info", message: "Loading digital product catalog...", delay: 4000 },
  { type: "success", message: "5 AI Debug Toolkits loaded — Python, JS, TS, Go, Java", delay: 4800 },
  { type: "info", message: "Initializing AI orchestration layer...", delay: 5600 },
  { type: "info", message: "Syncing distributed state...", delay: 6400 },
  { type: "success", message: "System ready. 2 SaaS/GaaS + 5 digital products deployed.", delay: 7200 },
  { type: "prompt", message: "fma@labs:~$ ./deploy --next-product", delay: 8000 },
  { type: "cursor", message: "", delay: 8800 },
];
