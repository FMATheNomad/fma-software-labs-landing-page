export const products = [
  {
    id: 3,
    name: "RupiahPulse",
    slug: "rupiahpulse",
    tagline: "Real-Time Rupiah Health Index",
    description:
      "Real-time web app that tracks, analyzes, and predicts the Indonesian Rupiah's health against USD. Live exchange rates, market data, macro-economic indicators, news sentiment analysis, and AI-powered predictions.",
    longDescription:
      "RupiahPulse monitors USD/IDR exchange rates in real-time, aggregates market data (DXY, crude oil), macro-economic indicators (inflation, FX reserves, trade balance), and news sentiment from GDELT. Computes a composite Health Index (0-100) from 7 weighted factors with rule-based natural language explanations in Indonesian. Features linear regression predictions with 95% confidence intervals for 1m/3m/6m/1y horizons.",
    status: "live",
    category: "ai",
    cta: { text: "View Dashboard", url: "https://rupiahpulse.up.railway.app" },
    tags: ["Finance", "Dashboard", "Real-time", "Data", "Rupiah"],
    logoPath: "/assets/rupiahpulse-favicon.svg",
    github: "https://github.com/FMATheNomad/rupiahpulse",
    features: [
      "Live USD/IDR exchange rate (5-min updates)",
      "Composite Health Index (0-100) from 7 factors",
      "Rule-based NLG explanations in Bahasa Indonesia",
      "Interactive charts with Apache ECharts",
      "Linear regression predictions (1m/3m/6m/1y)",
      "GDELT news aggregation with sentiment scoring",
      "Dark/light theme + EN/ID language toggle",
      "Docker + Railway deployment ready",
    ],
    tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Apache ECharts", "GDELT"],
  },
  {
    id: 4,
    name: "Minicrane",
    slug: "minicrane",
    tagline: "Manajemen Proyek Konstruksi untuk Kontraktor Indonesia",
    description:
      "WhatsApp-first, AI-powered construction project management platform. QR attendance, material logging, progress tracking, AI RAB generator, and WhatsApp bot for field workers.",
    longDescription:
      "Minicrane is a construction project management platform built for Indonesian contractors. Features QR code attendance with selfie, material cost tracking, progress photo timeline, AI-powered RAB (Rencana Anggaran Biaya) generation via DeepSeek with Excel export, and a WhatsApp bot for mandor to submit attendance and updates directly from the field.",
    status: "dev",
    category: "ai",
    cta: { text: "View Dashboard", url: "https://uyuhanjaya.up.railway.app" },
    tags: ["Construction", "WhatsApp", "AI", "Project Management", "Indonesia"],
    logoPath: "/assets/uyuhan-favicon.svg",
    github: "https://github.com/FMATheNomad/uyuhan-jaya",
    features: [
      "QR code attendance with selfie photo",
      "Material logging with cost tracking",
      "Progress photo timeline & percentage",
      "AI RAB generator (DeepSeek → Excel)",
      "WhatsApp bot for field workers (mandor)",
      "Role-based dashboards (Owner/Kontraktor/Mandor)",
      "AI cash flow & progress analysis",
      "Docker + Railway deployment ready",
    ],
    tech: ["Python", "FastAPI", "React", "TypeScript", "WhatsApp Baileys", "DeepSeek AI", "PostgreSQL", "Vite"],
  },
  {
    id: 1,
    name: "JatuhTempo",
    slug: "jatuhtempo",
    tagline: "AI-Powered Debt Management",
    description:
      "Smart debt management assistant powered by AI. Upload bill screenshots and let AI extract the details — amount, platform, due date. Get automatic reminders before you miss a payment.",
    longDescription:
      "JatuhTempo is an AI-powered debt management assistant for Indonesian users. Upload a screenshot of your bill, and the AI (DeepSeek) extracts the amount, platform, and due date automatically. Supports Akulaku, Kredivo, Shopee PayLater, and more. Get reminders at H-7, H-3, H-1, and on due date. Track all your debts, view monthly summaries, and never miss a payment again.",
    status: "park",
    category: "finance",
    cta: { text: "Open Dashboard", url: "https://jatuhtempo.up.railway.app" },
    tags: ["AI", "Telegram", "Finance", "OCR", "Debt Management"],
    logoPath: "/assets/jatuhtempo-productlogo.webp",
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
  {
    id: 2,
    name: "DebtWar",
    slug: "debtwar",
    tagline: "Social Chaos Economy MMO",
    description:
      "The most chaotic debt-collection game on Telegram. Lend, collect, trap, sabotage, and dominate the underground economy. Build your gang, set traps, and rise through the ranks in this social MMO.",
    longDescription:
      "DebtWar is a social chaos economy MMO where players lend, borrow, and collect debts in a cutthroat underground economy. With features like credit scores, banks, lootboxes, traps, spy systems, casino games, and gang wars, every move you makes ripples through the ecosystem. Built for Telegram with a rich command system and deep progression mechanics.",
    status: "park",
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
  { type: "success", message: "JatuhTempo — AI-Powered Debt Management [IN DEV]", delay: 2400 },
  { type: "success", message: "DebtWar — Social Chaos Economy MMO [PARKED]", delay: 3200 },
  { type: "success", message: "RupiahPulse — Real-Time Rupiah Health Index [ONLINE]", delay: 4000 },
  { type: "success", message: "Minicrane — Konstruksi Project Management [IN DEV]", delay: 4800 },
  { type: "info", message: "Loading digital product catalog...", delay: 5600 },
  { type: "success", message: "5 AI Debug Toolkits loaded — Python, JS, TS, Go, Java", delay: 6400 },
  { type: "success", message: "System ready. 4 products + 5 digital toolkits deployed.", delay: 7200 },
  { type: "prompt", message: "fma@labs:~$ ./deploy --next-product", delay: 8000 },
  { type: "cursor", message: "", delay: 8800 },
];
