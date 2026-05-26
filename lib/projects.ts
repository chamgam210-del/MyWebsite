export type ProjectVisualType = "wrenchdesk" | "tummy-tracker" | "casper";

export type MediaItem = {
  /** Path relative to /public, e.g. "/projects/wrenchdesk/01-inbox.png" */
  src: string;
  caption?: string;
  alt?: string;
  /** Defaults to "image". Use "video" for .mp4/.webm. */
  type?: "image" | "video";
};

export type TechGroup = { label: string; items: string[] };
export type LinkKind = "private-repo" | "demo-on-request" | "case-study-only" | "public";

export type Project = {
  title: string;
  slug: string;
  year: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
  /** One-sentence framing of the problem (used on home page block). */
  briefProblem: string;
  /** One-sentence framing of what was built. */
  briefBuilt: string;
  /** 3 concrete outcome bullets (replaces single quote). */
  outcomes: string[];
  /** One paragraph highlighting the most interesting technical decision. */
  techHighlight: string;
  /** Snapshot/ownership cards shown at top of detail page and home block. */
  snapshot: {
    role: string;
    platform: string;
    status: string;
    coreAi: string;
  };
  /** Tech grouped by category for cleaner rendering. */
  techGroups: TechGroup[];
  techStack: string[];
  features: string[];
  architecture: { area: string; description: string }[];
  visualType: ProjectVisualType;
  challenges: string[];
  outcome: string;
  privacyNotes: string;
  githubUrl?: string;
  demoUrl?: string;
  /** How to present external links: hides empty buttons gracefully. */
  linkKind: LinkKind;
  status: string;
  category: string;
  highlights: string[];
  engineeringNotes?: string[];

  /**
   * Real media. Leave fields blank until you have actual screenshots/video.
   * The site shows the Tailwind mockup + a friendly placeholder until then.
   * Drop your files in /public/projects/<slug>/ and add entries here.
   */
  media: {
    hero?: MediaItem;
    video?: MediaItem;
    screenshots: MediaItem[];
  };

  /** Suggested files — used to render placeholder prompts. */
  mediaSlots: {
    hero: string;
    video?: string;
    screenshots: { file: string; caption: string }[];
  };
};

export const projects: Project[] = [
  {
    title: "WrenchDesk",
    slug: "wrenchdesk",
    year: "2025",
    category: "Android · AI Business Automation",
    status: "Private prototype",
    tagline: "An AI-powered Android assistant for a solo mechanic.",
    shortDescription:
      "A private Android assistant that watches incoming customer messages, extracts job details, drafts appointments and replies, manages customer/vehicle history, and helps compare parts across suppliers.",
    longDescription:
      "WrenchDesk is a private Android assistant built for a solo mechanic. It runs on his personal phone and helps turn messy customer conversations into organized work without changing how he already communicates. It reads incoming customer texts through SMS and notification access, understands repair requests with an LLM, creates appointment drafts, warns about double-booking, drafts replies, manages jobs, and keeps customer/vehicle history searchable.",
    problem:
      "Solo mechanics often run their entire business through text messages, memory, and scattered notes. Customer names, vehicle details, repair requests, appointment times, prices, and parts information can easily get lost.",
    solution:
      "WrenchDesk keeps the mechanic in control while reducing mental load. It does not auto-book or auto-send messages. Instead, it creates drafts the mechanic can Confirm, Edit, or Ignore.",
    briefProblem:
      "A solo mechanic runs his entire business through text messages — customer details, vehicles, appointments, and parts get lost in the chat thread.",
    briefBuilt:
      "An Android assistant that reads incoming SMS, extracts job details with an LLM, drafts appointments and replies, and keeps a searchable customer history — all draft-first, never auto-sending.",
    outcomes: [
      "Reduces repeated typing across customer conversations",
      "Makes job and vehicle history instantly searchable",
      "Keeps the mechanic in control with draft-first AI actions",
    ],
    techHighlight:
      "Designed a draft-first AI workflow so the assistant can organize customer messages without taking risky actions like auto-booking or auto-sending — every AI output goes through Confirm / Edit / Ignore.",
    snapshot: {
      role: "Sole developer / product builder",
      platform: "Android",
      status: "Private prototype",
      coreAi: "Message understanding + reply drafting",
    },
    linkKind: "private-repo",
    techGroups: [
      { label: "Core", items: ["Kotlin", "Jetpack Compose", "Material 3", "Room", "DataStore"] },
      { label: "AI", items: ["OpenAI gpt-4o-mini", "Prompt templates"] },
      { label: "Android", items: ["SMS APIs", "NotificationListenerService", "Foreground service", "Exact alarms"] },
      { label: "Tools", items: ["Firecrawl", "OkHttp", "kotlinx.serialization", "Coroutines"] },
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Room",
      "DataStore",
      "OpenAI gpt-4o-mini",
      "Firecrawl",
      "OkHttp",
      "kotlinx.serialization",
      "Android SMS APIs",
      "NotificationListenerService",
      "Coroutines",
    ],
    features: [
      "Reads incoming SMS and notification-based messages",
      "Extracts customer, vehicle, repair, and proposed time",
      "Creates appointment drafts",
      "Warns about double-booked times",
      "Drafts outgoing replies for review",
      "Daily schedule view",
      "Job duration, status, price, and notes",
      "Customer and vehicle history",
      "Parts hunting across suppliers using Firecrawl",
      "Messages tab with chat threads and compose/send support",
    ],
    architecture: [
      { area: "ai/", description: "OpenAI client and prompt templates for extraction and reply drafting." },
      { area: "data/", description: "Room entities, DAOs, and repository layer for jobs, customers, vehicles." },
      { area: "scrape/", description: "Firecrawl-based parts lookup across supplier sites." },
      { area: "sms/", description: "SMS observer, notification listener, sender, message processor, schedule parser." },
      { area: "reminders/", description: "Appointment reminders with exact alarms." },
      { area: "ui/", description: "Compose screens for today, inbox, jobs, parts, customers, drafts, settings." },
    ],
    visualType: "wrenchdesk",
    challenges: [
      "Designing around a real mechanic's existing workflow",
      "Avoiding dangerous automation by using drafts instead of auto-actions",
      "Parsing messy natural-language customer messages",
      "Detecting appointment conflicts reliably",
      "Keeping the UI simple for a non-technical user",
      "Combining SMS, notifications, local storage, and AI safely",
    ],
    outcome:
      "Designed and built a practical AI workflow assistant for a real small-business use case, focused on reducing missed jobs, repeated typing, forgotten details, and scattered customer history.",
    privacyNotes:
      "Data is stored locally on the mechanic's device. Outbound calls are limited to OpenAI for message understanding/reply drafting and Firecrawl for parts lookup.",
    highlights: [
      "LLM-powered SMS understanding",
      "Confirm / Edit / Ignore safety model",
      "Cross-supplier parts comparison",
      "Local-first storage",
    ],
    media: { screenshots: [] },
    mediaSlots: {
      hero: "/projects/wrenchdesk/hero.png",
      video: "/projects/wrenchdesk/demo.mp4",
      screenshots: [
        { file: "/projects/wrenchdesk/01-inbox.png", caption: "Inbox with incoming customer SMS" },
        { file: "/projects/wrenchdesk/02-ai-extraction.png", caption: "AI extraction → confirm / edit / ignore" },
        { file: "/projects/wrenchdesk/03-schedule.png", caption: "Today's schedule with draft appointments" },
        { file: "/projects/wrenchdesk/04-parts.png", caption: "Parts comparison across suppliers" },
        { file: "/projects/wrenchdesk/05-customer.png", caption: "Customer & vehicle history" },
      ],
    },
  },
  {
    title: "Tummy Tracker",
    slug: "tummy-tracker",
    year: "2025",
    category: "Android · Health · Voice AI",
    status: "Native Android prototype",
    tagline: "Voice meal logging and digestive symptom insights.",
    shortDescription:
      "A native Android app for tracking meals and digestive symptoms by voice, then surfacing personalized food-trigger insights using medically-informed digestive transit windows.",
    longDescription:
      "Tummy Tracker is a native Android app for people who want to understand relationships between meals and digestive symptoms. Users speak what they ate, the app transcribes it with Whisper, and symptoms can be logged with one tap. Over time, the app correlates meals and symptoms using symptom-specific digestive windows rather than naive same-day matching.",
    problem:
      "Food and symptom tracking is tedious, and simple food diaries often fail because users forget details or logs become too time-consuming. Basic correlation also creates misleading results when it ignores digestion timing.",
    solution:
      "Tummy Tracker makes logging fast with voice input and one-tap symptom buttons. Its analytics engine uses different time windows for different symptoms, then weighs likely food triggers based on timing proximity.",
    briefProblem:
      "Food and symptom journaling is tedious, and naive same-day correlation produces misleading triggers because it ignores how long different symptoms actually take to appear.",
    briefBuilt:
      "A native Android app for voice meal logging and one-tap symptom tracking, with a correlation engine that uses symptom-specific digestive transit windows to score likely food triggers.",
    outcomes: [
      "Makes food tracking faster with voice-first logging",
      "Gives timing-aware trigger insights, not naive same-day matches",
      "Frames every insight as exploratory, not medical advice",
    ],
    techHighlight:
      "Built symptom-specific correlation windows instead of naive same-day matching, so trigger scoring considers digestion timing — a stomach-ache and a 48-hour reaction are weighed against different meal windows.",
    snapshot: {
      role: "Sole developer / product builder",
      platform: "Android",
      status: "Native Android prototype",
      coreAi: "Voice transcription + trigger analysis",
    },
    linkKind: "demo-on-request",
    techGroups: [
      { label: "Core", items: ["Kotlin 1.9.24", "Jetpack Compose", "Material 3", "Room", "Hilt", "DataStore"] },
      { label: "AI", items: ["OpenAI whisper-1", "OpenAI gpt-4o-mini"] },
      { label: "Android", items: ["MediaRecorder", "Foreground Service", "AlarmManager"] },
      { label: "Tools", items: ["Retrofit", "Moshi", "OkHttp"] },
    ],
    techStack: [
      "Kotlin 1.9.24",
      "Jetpack Compose",
      "Material 3",
      "Hilt",
      "Room",
      "Retrofit",
      "Moshi",
      "OkHttp",
      "MediaRecorder",
      "OpenAI whisper-1",
      "OpenAI gpt-4o-mini",
      "AlarmManager",
      "DataStore",
      "Foreground Service",
    ],
    features: [
      "Voice meal logging with automatic silence detection",
      "Whisper transcription with no confirmation step",
      "60-second recording cap",
      "Persistent notification recording",
      "8 symptom types with severity and notes",
      "Symptom-specific digestive windows",
      "Onset distribution histogram",
      "Food trigger scoring",
      "Common trigger highlighting",
      "Recent episode breakdowns",
      "Calendar heatmap with meal-count dots",
      "Meal-time reminders, reboot-safe exact alarms",
    ],
    architecture: [
      { area: "data/", description: "Room database, repositories, Retrofit API layer for OpenAI." },
      { area: "domain/", description: "Audio capture, insights engine, correlation, SymptomAnalyzer." },
      { area: "ui/", description: "Dashboard, record, history, insights, calendar, settings, symptom screens." },
      { area: "MVVM", description: "StateFlow → collectAsState, Compose Navigation, Hilt DI." },
    ],
    visualType: "tummy-tracker",
    challenges: [
      "Making tracking nearly frictionless",
      "Handling background recording safely",
      "Designing medically-informed but non-diagnostic analytics",
      "Creating useful food-trigger scoring",
      "Building a usable calendar visualization",
      "Preventing the app from feeling overwhelming",
    ],
    outcome:
      "Built a practical voice-first health tracking prototype that combines fast logging, structured symptom tracking, and personalized insight generation.",
    privacyNotes:
      "Audio files live in cacheDir and are deleted after transcription succeeds. API keys are stored in gitignored secrets.properties and injected through BuildConfig. All insights include a 'not medical advice' disclaimer.",
    highlights: [
      "Voice-first logging via Whisper",
      "Symptom-specific transit windows",
      "Calendar heatmap analytics",
      "Trigger scoring with timing weight",
    ],
    media: { screenshots: [] },
    mediaSlots: {
      hero: "/projects/tummy-tracker/hero.png",
      video: "/projects/tummy-tracker/demo.mp4",
      screenshots: [
        { file: "/projects/tummy-tracker/01-record.png", caption: "Voice recording with waveform" },
        { file: "/projects/tummy-tracker/02-meal.png", caption: "Transcribed meal entry" },
        { file: "/projects/tummy-tracker/03-symptoms.png", caption: "One-tap symptom logging" },
        { file: "/projects/tummy-tracker/04-insights.png", caption: "Food trigger insights" },
        { file: "/projects/tummy-tracker/05-calendar.png", caption: "Calendar heatmap" },
      ],
    },
  },
  {
    title: "Casper — On-Device AI Companion",
    slug: "casper-on-device-ai-companion",
    year: "2025",
    category: "Android · Local LLM · Voice + Vision",
    status: "Experimental prototype",
    tagline: "An offline-first Jarvis-style AI companion running on Android.",
    shortDescription:
      "A fully on-device, always-listening AI assistant for a Samsung Galaxy A52 5G, using wake word detection, local LLM inference, streaming speech interaction, TTS, ambient memory, and camera-based observations.",
    longDescription:
      "Casper is an on-device AI companion built for a Samsung Galaxy A52 5G. It wakes on the custom keyword 'Casper', streams speech-to-text, generates streaming responses with a local Qwen model through llama.cpp/JNI, and speaks responses back with Android TTS. Beyond chat, it passively observes the environment through camera and microphone, stores observations as long-term memory, and can offload heavier vision-language model queries to a laptop proxy.",
    problem:
      "Most AI assistants depend heavily on cloud services and are not designed for persistent, private, ambient context. Building a useful personal assistant requires wake word activation, low-latency voice interaction, local inference, memory, vision, interruption handling, and reliable mobile background execution.",
    solution:
      "Casper explores an offline-first architecture where the phone runs the core assistant locally. It combines wake word detection, streaming STT, local LLM inference, TTS, ambient memory, notification recall, and optional laptop-assisted vision.",
    briefProblem:
      "Most AI assistants depend on the cloud and lack persistent, private, ambient context — and shipping one fully on-device on consumer Android hardware means fighting memory, latency, and background-service limits.",
    briefBuilt:
      "An always-listening, offline-first AI companion for a Samsung Galaxy A52 5G — wake word, streaming voice, local Qwen LLM via llama.cpp/JNI, TTS, ambient memory, and optional laptop VLM offload over Tailscale.",
    outcomes: [
      "Demonstrates a fully local voice assistant pipeline on consumer Android",
      "Tests ambient memory and passive observation under real-world constraints",
      "Supports laptop-assisted VLM debugging via Tailscale offload",
    ],
    techHighlight:
      "Integrated wake word detection, streaming STT, local LLM inference, TTS, barge-in handling, and ambient memory under Android background-service constraints — only one heavy model resident at a time, careful JNI memory management, and a Flask monitor for live debugging.",
    snapshot: {
      role: "Sole developer / experimental builder",
      platform: "Android + laptop proxy",
      status: "Experimental prototype",
      coreAi: "Local LLM + wake word + ambient memory",
    },
    linkKind: "case-study-only",
    techGroups: [
      { label: "Core", items: ["Kotlin", "Jetpack Compose", "Hilt", "Room"] },
      { label: "AI", items: ["llama.cpp", "Qwen3-0.6B Q4_K_M", "Picovoice Porcupine", "ML Kit", "Ollama (laptop VLM)"] },
      { label: "Android", items: ["CameraX", "SpeechRecognizer", "TextToSpeech", "NotificationListenerService", "Foreground service"] },
      { label: "Native / Infra", items: ["JNI", "NDK", "CMake", "Python Flask", "Tailscale"] },
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Hilt",
      "Room",
      "CameraX",
      "Android SpeechRecognizer",
      "Android TextToSpeech",
      "Picovoice Porcupine",
      "llama.cpp",
      "JNI / NDK / CMake",
      "Qwen3-0.6B Q4_K_M",
      "ML Kit",
      "Python Flask",
      "Ollama",
      "Tailscale",
    ],
    features: [
      "Custom 'Casper' wake word",
      "Streaming speech-to-text",
      "Local LLM response generation with streaming tokens",
      "Sentence-level TTS",
      "Barge-in detection with RMS thresholding",
      "Intent routing: vision, log save, log query, messages, general",
      "Web-search fallback via Google News RSS / DuckDuckGo",
      "Ambient scene observation with CameraX",
      "ML Kit labels, objects, OCR, colors, faces",
      "Room-based activity logs with 30-day retention",
      "Notification recall via NotificationListenerService",
      "Laptop-side VLM proxy for heavier visual queries",
    ],
    architecture: [
      { area: "companion-app", description: "Android app and foreground CompanionService." },
      { area: "monitor", description: "Flask web UI on port 7777 for live debugging." },
      { area: "wake_word_training", description: "Scripts and datasets for the custom wake word." },
      { area: "vision_proxy.py", description: "Laptop-side VLM proxy (Ollama) for heavy vision queries." },
      { area: "NetworkLogStreamer", description: "Live phone-to-PC log streaming." },
      { area: "ModelManager", description: "Ensures only one heavy model is resident at a time." },
    ],
    visualType: "casper",
    engineeringNotes: [
      "add_special=false in llama_tokenize for ChatML to avoid BOS poisoning Qwen output",
      "Prompt decode chunked at n_batch=512 to avoid SIGABRT on long prompts",
      "Avoid VOICE_RECOGNITION AudioSource for ambient capture on this device",
      "arm64-v8a only, CPU-only inference, flash attention disabled",
      "Context length 512, 6 threads",
    ],
    challenges: [
      "Running local AI on limited phone hardware",
      "Managing memory so only one heavy model is loaded at a time",
      "Wake word reliability in noisy environments",
      "Background Android service constraints",
      "Streaming STT, LLM, and TTS together",
      "Handling barge-in interruption",
      "Debugging JNI/llama.cpp crashes",
      "Building a live monitor/debugging workflow",
      "Balancing privacy, latency, and capability",
    ],
    outcome:
      "Built an experimental privacy-preserving Android AI companion that demonstrates wake-word conversation, local LLM responses, ambient memory, passive vision, and desktop-assisted debugging.",
    privacyNotes:
      "Casper is designed as offline-first and privacy-preserving. Core assistant functionality runs on-device. Heavier vision queries can be optionally offloaded to a trusted laptop proxy.",
    highlights: [
      "Wake-word activated, fully on-device LLM",
      "Streaming STT → LLM → TTS pipeline",
      "Ambient vision + memory",
      "Laptop VLM offload via Tailscale",
    ],
    media: { screenshots: [] },
    mediaSlots: {
      hero: "/projects/casper-on-device-ai-companion/hero.png",
      video: "/projects/casper-on-device-ai-companion/demo.mp4",
      screenshots: [
        { file: "/projects/casper-on-device-ai-companion/01-listening.png", caption: "Wake word listening state" },
        { file: "/projects/casper-on-device-ai-companion/02-response.png", caption: "Streaming local LLM response" },
        { file: "/projects/casper-on-device-ai-companion/03-memory.png", caption: "Ambient memory timeline" },
        { file: "/projects/casper-on-device-ai-companion/04-vision.png", caption: "Camera observation card" },
        { file: "/projects/casper-on-device-ai-companion/05-monitor.png", caption: "Live debug monitor (Flask)" },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
