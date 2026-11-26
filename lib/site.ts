// Single source of truth for Driftmark's site content.
// Used by the homepage, service pages, sitemap, JSON-LD and llms.txt so they never drift apart.

export const SITE_URL = "https://www.driftmark.co.tz";

const whatsappMessage =
  "Hello Driftmark, I am coming from your website. I would like to talk about automating a workflow.";

export const contact = {
  email: "hello@driftmark.co.tz",
  phone: "+255 682 152 148",
  phoneHref: "tel:+255682152148",
  whatsappNumber: "255682152148",
  whatsappHref: `https://wa.me/255682152148?text=${encodeURIComponent(whatsappMessage)}`,
  location: "Rose Garden Road, Dar Village Office Park, Mikocheni, Dar es Salaam, Tanzania",
  street: "Rose Garden Road, Dar Village Office Park, Mikocheni",
  city: "Dar es Salaam",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/driftmark-technologies/" },
  { label: "Instagram", href: "https://www.instagram.com/driftmark_tz/" },
  { label: "TikTok", href: "https://www.tiktok.com/@driftmark_tz" },
];

export const tagline =
  "A Tanzanian AI and software engineering company. We build AI agents that organise your data and automate your workflows.";

/* ─── Services ─────────────────────────────────────────────────────── */

export type Service = {
  slug: string;
  href: string;
  title: string;
  /** H1 on the service page, written the way people search. */
  heading: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  summary: string;
  intro: string;
  offerings: { title: string; body: string }[];
  product?: { name: string; href: string; body: string; external?: boolean };
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    href: "/ai-automation",
    title: "AI Agents & Automation",
    heading: "AI agents and chatbots that automate your business workflows",
    metaTitle: "AI Agents, Chatbots & Automation in Tanzania | Driftmark",
    metaDescription:
      "Driftmark builds AI agents, WhatsApp chatbots and agentic AI systems for Tanzanian businesses: they organise your data and automate your workflows.",
    image: "/images/ai.jpg",
    summary:
      "AI agents that read your documents and messages, follow your rules and do the repetitive work, with your team approving what matters.",
    intro: "",
    offerings: [],
    faqs: [],
  },
  {
    slug: "data-analytics",
    href: "/services/data-analytics",
    title: "Data & Analytics",
    heading: "Data analysis and document digitization in Tanzania",
    metaTitle: "Data Analysis & Document Digitization in Tanzania | Driftmark",
    metaDescription:
      "Data analysis, dashboards and document digitization for Tanzanian organisations. Driftmark turns paper and scattered records into data your team and AI can use.",
    image: "/images/data-analytics.jpg",
    summary:
      "We bring your records into one place, clean them, and turn them into dashboards and data your AI agents can work with.",
    intro:
      "Most organisations we meet have their information spread across paper files, spreadsheets, WhatsApp chats and separate systems that don't talk to each other. Before any AI can help, that data has to be collected, cleaned and put in one place. That is the work we do.",
    offerings: [
      {
        title: "Paper to digital (Nivora)",
        body: "We convert paper files, forms and archives into clean, structured digital records (Markdown and databases) that people can search and AI systems can read.",
      },
      {
        title: "Data engineering",
        body: "Pipelines that pull data from your systems, mobile money statements, spreadsheets and forms into a single, reliable store, updated automatically.",
      },
      {
        title: "Dashboards and reports",
        body: "Clear dashboards for the numbers your managers actually decide on, plus scheduled reports delivered by email or WhatsApp.",
      },
      {
        title: "AI-ready knowledge bases",
        body: "Your policies, manuals and records organised so an AI assistant can answer staff and customer questions from your own information, not guesses.",
      },
    ],
    product: {
      name: "Nivora",
      href: "/services/data-analytics",
      body: "Nivora is our paper-to-AI service. Send us the files, and we return structured, searchable data ready for your systems and your AI.",
    },
    faqs: [
      {
        question: "Can you digitise our paper records?",
        answer:
          "Yes. Through Nivora we convert paper files, forms and archives into structured digital records (Markdown and databases) that are searchable and ready for AI. We agree the format, the fields and how sensitive documents are handled before we start.",
      },
      {
        question: "Do we need a data team to use the dashboards?",
        answer:
          "No. We build the pipelines and dashboards, set them to update automatically, and train the people who will use them.",
      },
    ],
  },
  {
    slug: "software-engineering",
    href: "/services/software-engineering",
    title: "Software Engineering",
    heading: "Software development company in Dar es Salaam, Tanzania",
    metaTitle: "Software Development Company in Tanzania | Driftmark",
    metaDescription:
      "Driftmark is a software development company in Dar es Salaam: web applications, mobile apps, integrations and business systems for Tanzanian organisations.",
    image: "/images/software-engineering.jpg",
    summary:
      "Web platforms, mobile apps and internal systems, designed for how your team and your customers actually work.",
    intro:
      "We design, build and run software for organisations in Tanzania: customer-facing platforms, internal tools and the integrations that connect them. We build our own products the same way, so we know what it takes to keep software running after launch.",
    offerings: [
      {
        title: "Web applications and platforms",
        body: "Customer portals, booking and ordering systems, and internal tools, built to work well on the phones your customers use.",
      },
      {
        title: "Mobile apps",
        body: "Android and iOS apps for your customers or your field teams, connected to the same systems as your web platform.",
      },
      {
        title: "Integrations",
        body: "Connecting your systems to mobile money, SMS, WhatsApp, accounting software and government services through their APIs.",
      },
      {
        title: "Run and support",
        body: "We host, monitor and maintain what we build, so it keeps working after launch day.",
      },
      {
        title: "School management system (Atlas)",
        body: "Our own school management system for Tanzanian schools: fees and arrears, attendance, marks, report cards and SMS to parents.",
      },
    ],
    product: {
      name: "Atlas and Shopi",
      href: "https://atlasgo.co.tz",
      external: true,
      body: "Our own products, Atlas (school management) and Shopi (shop-in-a-link for social sellers), are built and run by the same team that builds client software.",
    },
    faqs: [
      {
        question: "Do you build both web and mobile apps?",
        answer:
          "Yes. We build web applications, Android and iOS apps, and the back-end systems and integrations behind them.",
      },
      {
        question: "Can you take over and improve an existing system?",
        answer:
          "Yes. We start by reviewing the code and how it is hosted, then agree a plan to stabilise, improve or rebuild it.",
      },
    ],
  },
  {
    slug: "cloud",
    href: "/services/cloud",
    title: "Cloud",
    heading: "Cloud computing services in Tanzania",
    metaTitle: "Cloud Computing Services in Tanzania | Driftmark",
    metaDescription:
      "Cloud computing services for Tanzanian organisations: set-up, migration and operations. Driftmark keeps your systems secure, fast and affordable in the cloud.",
    image: "/images/cloud.jpg",
    summary:
      "Cloud set-up, migration and day-to-day operations that keep your systems fast, secure and affordable.",
    intro:
      "Moving to the cloud should make your systems more reliable and easier to change, not more expensive. We plan the move, migrate your applications and data, and run them afterwards with monitoring, backups and cost control.",
    offerings: [
      {
        title: "Cloud architecture",
        body: "A set-up sized for your workload, with security, backups and room to grow designed in from the start.",
      },
      {
        title: "Migration",
        body: "Moving applications, databases and files from local servers or other providers with a clear plan and minimal downtime.",
      },
      {
        title: "Operations and cost control",
        body: "Monitoring, updates, backups and regular reviews of your cloud bill so you only pay for what you use.",
      },
      {
        title: "Infrastructure for AI",
        body: "The storage, compute and access controls your AI agents and data pipelines need to run safely.",
      },
    ],
    faqs: [
      {
        question: "Which cloud providers do you work with?",
        answer:
          "We choose the provider that fits your needs, budget and data requirements, and we design the set-up so you are not locked into one vendor unnecessarily.",
      },
      {
        question: "Can our data stay in a specific location?",
        answer:
          "Yes. We discuss where your data needs to be stored before we design the system, and build to that requirement.",
      },
    ],
  },
  {
    slug: "cybersecurity",
    href: "/services/cybersecurity",
    title: "Cyber Security",
    heading: "Cyber security and penetration testing in Tanzania",
    metaTitle: "Cyber Security & Penetration Testing in Tanzania | Driftmark",
    metaDescription:
      "Cyber security for Tanzanian organisations: agent-assisted penetration testing and hardening. Mkwawa by Driftmark finds weaknesses before attackers do.",
    image: "/images/cybersecurity.jpg",
    summary:
      "Security testing with AI agents, plus the hardening work to fix what we find.",
    intro:
      "Through Mkwawa, our security team uses AI agents to test your websites, applications and networks the way an attacker would, then reports what we find in plain language and helps you fix it.",
    offerings: [
      {
        title: "Penetration testing (Mkwawa)",
        body: "Agent-assisted testing of your websites, apps, APIs and networks, available on request.",
      },
      {
        title: "Clear reporting",
        body: "Every finding ranked by risk, with what it means for your business and the steps to fix it.",
      },
      {
        title: "Infrastructure hardening",
        body: "Closing the gaps we find: configuration, access control, updates, backups and monitoring.",
      },
      {
        title: "Retesting",
        body: "After the fixes are in, we test again to confirm the weaknesses are closed.",
      },
    ],
    product: {
      name: "Mkwawa",
      href: "/services/cybersecurity",
      body: "Mkwawa is our cybersecurity service: AI agents test your systems for weaknesses, on request.",
    },
    faqs: [
      {
        question: "What is agent-assisted penetration testing?",
        answer:
          "Our team uses AI agents to run the repetitive parts of a security test, such as scanning and probing your systems, so more time goes into analysing the results and helping you fix them.",
      },
      {
        question: "Will testing disrupt our systems?",
        answer:
          "We agree the scope, timing and rules of every test with you in writing before we start, so testing happens when and where you approve it.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
/** Services that live under /services/[slug] (AI automation has its own page). */
export const servicePages = services.filter((s) => s.href.startsWith("/services/"));

/* ─── Products ─────────────────────────────────────────────────────── */

export type Product = {
  name: string;
  number: string;
  description: string;
  href?: string;
  external?: boolean;
  linkLabel?: string;
};

export const products: Product[] = [
  {
    name: "Nivora",
    number: "/0.1",
    description:
      "Paper to AI-ready data. We digitise your paper files, forms and archives into clean, structured records that people can search and AI can read. Available on request.",
    href: "/services/data-analytics",
    linkLabel: "Learn about Nivora",
  },
  {
    name: "Mkwawa",
    number: "/0.2",
    description:
      "Agent-assisted security testing. Our team uses AI agents to test your websites, apps and systems for weaknesses, then helps you fix them. Available on request.",
    href: "/services/cybersecurity",
    linkLabel: "Learn about Mkwawa",
  },
  {
    name: "Shopi",
    number: "/0.3",
    description:
      "Your shop in one link. An online shop for sellers on Instagram, TikTok and WhatsApp: buyers order by themselves and pay with Lipa Namba or cash on delivery.",
    href: "https://shopi.tz",
    external: true,
    linkLabel: "Visit Shopi",
  },
  {
    name: "Atlas",
    number: "/0.4",
    description:
      "School management software for Tanzanian schools: fees and arrears, attendance, marks and report cards, and SMS to parents, in one place.",
    href: "https://atlasgo.co.tz",
    external: true,
    linkLabel: "Visit Atlas",
  },
  {
    name: "CV Chap Chap",
    number: "/0.5",
    description:
      "Build a professional CV in minutes. Helping job seekers in Tanzania and across Africa present their best selves and land the roles they deserve.",
    href: "https://www.cvchapchap.com/",
    external: true,
    linkLabel: "Visit CV Chap Chap",
  },
];

/* ─── Industries ───────────────────────────────────────────────────── */

export const industries = [
  "Government & Public Sector",
  "Banking & Financial Services",
  "Education",
  "Tourism & Hospitality",
  "Retail, Logistics & E-Commerce",
  "Healthcare",
  "Telecom, Media & Technology",
];

/* ─── How we work (shared by the AI and service pages) ─────────────── */

export const process = [
  {
    step: "01",
    title: "Discovery",
    body: "We map one workflow that costs your team time: who does it, which systems it touches and what a good result looks like.",
  },
  {
    step: "02",
    title: "Pilot",
    body: "We build and test the solution on that workflow, with your real data and your team, so you see results before you commit to more.",
  },
  {
    step: "03",
    title: "Run and scale",
    body: "We put it into daily use, monitor it, improve it and move on to the next workflow.",
  },
];

/* ─── Homepage FAQ ─────────────────────────────────────────────────── */

export const homeFaqs: { question: string; answer: string; link?: { href: string; label: string } }[] = [
  {
    question: "What does Driftmark Technologies do?",
    answer:
      "We are a Tanzanian AI and software engineering company. We build AI agents that automate business workflows, along with the data platforms, software, cloud systems and security testing behind them, for businesses and institutions in Tanzania.",
    link: { href: "/ai-automation", label: "How AI automation works" },
  },
  {
    question: "What is an AI agent?",
    answer:
      "An AI agent is software that can read information, make a decision within rules you set, and take an action in your systems, such as answering a customer on WhatsApp, entering an invoice or preparing a report. Agentic AI systems connect several agents to your data and tools, with people approving the steps that matter.",
  },
  {
    question: "Where is Driftmark based and who do you work with?",
    answer:
      "Our office is at Dar Village Office Park, Mikocheni, Dar es Salaam. We focus on businesses and institutions in Tanzania, and we also take on projects in other African countries, on-site or remotely.",
  },
  {
    question: "How much does an AI automation project cost?",
    answer:
      "It depends on the workflow and the systems involved. We scope and price every project after a short discovery call, and we usually recommend starting with one workflow so you can see results before you expand.",
  },
  {
    question: "Can AI agents work with the systems we already use?",
    answer:
      "Yes. We connect agents to the tools you already have, such as email, WhatsApp, spreadsheets, accounting software or your own database, instead of asking you to switch systems.",
  },
  {
    question: "Does Driftmark build its own software products?",
    answer:
      "Yes. We build and run Nivora (paper to AI-ready data), Mkwawa (agent-assisted security testing), Shopi (shop-in-a-link for social sellers), Atlas (school management) and CV Chap Chap (CV builder).",
  },
  {
    question: "How do I start a project with Driftmark?",
    answer:
      "Message us on WhatsApp at +255 682 152 148 or email hello@driftmark.co.tz. Tell us which task takes your team the most time, and we will reply the same day.",
  },
];

/* ─── Why now: TCRA Q3 2026 (quarter ending September 2026) ───────── */

export const tcraSource = {
  label: "TCRA Communications Sector Performance Report, quarter ending September 2026",
  href: "https://www.tcra.go.tz/publications/statistics",
};

export const tcraStats = [
  {
    value: "123.2M",
    label: "Telecom subscriptions",
    detail: "175.91 for every 100 people: more subscriptions than people.",
  },
  {
    value: "1,206 PB",
    label: "Data used in three months",
    detail: "Up 15.90% on the previous quarter.",
  },
  {
    value: "825.8M",
    label: "Mobile money transactions a month",
    detail: "Monthly average, up 18.05% on the previous quarter.",
  },
  {
    value: "−18.82%",
    label: "Domestic posted items",
    detail: "SMS traffic fell 5.71% and pay-TV decoders 10.71% in the same quarter.",
  },
  {
    value: "1.30M",
    label: "Machine-to-machine SIM cards",
    detail:
      "Up 5.47%. TCRA says this signals “gradual progress in the deployment of IoT and digital automation services.”",
  },
];
