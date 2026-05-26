Copy/paste this updated prompt into your coding agent:

```txt
Build me a professional personal portfolio website from scratch.

Goal:
Create a clean, modern, visual, responsive portfolio website for me as a software developer / AI builder. The site should showcase who I am, what I build, and my strongest projects. The projects must feel like real product case studies, not just text descriptions.

The site should be polished enough to send to employers, clients, business owners, and potential collaborators.

Tech stack:
- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Responsive design
- Deployable to Vercel
- No backend required for version 1
- Use free/open-source packages only
- You may use lucide-react for icons if useful
- Avoid unnecessary dependencies

Professional positioning:
I am a software developer focused on AI applications, automation, Android apps, full-stack tools, voice assistants, RAG systems, and practical software for real businesses.

Brand/style:
- Modern developer portfolio
- AI/startup/product-builder feel
- Clean, sharp, and professional
- Dark mode preferred, but make it readable
- Use subtle gradients, glassy cards, soft borders, rounded corners
- Visual project sections should look like product landing pages
- Avoid looking like a generic resume template
- Mobile-first responsive design
- Smooth hover effects, but avoid heavy animations

Site routes:
Create these pages:

/
Home page

/projects
All projects page

/projects/[slug]
Individual case study pages

/about
About page

/contact
Contact page

Also include:
- Navbar
- Footer
- ProjectCard component
- ProjectHero component
- ProjectVisual component
- TechBadge component
- SectionHeading component
- ButtonLink component
- Resume download button pointing to /resume.pdf
- Placeholder resume.pdf in public folder if needed

Important visual requirement:
The projects need to be showcased visually.

Do not rely only on paragraphs.

For each project, create visual mockups using Tailwind/HTML/CSS if actual screenshots are not available.

Examples:
- Phone frame mockups for Android apps
- Dashboard-style cards
- Chat thread mockups
- Timeline diagrams
- Architecture flow diagrams
- Feature grids
- Data insight cards
- Calendar mockup
- Schedule cards
- Voice waveform/recording UI
- AI pipeline diagrams
- Notification/message UI cards

Make each project page visually distinct based on the product.

Homepage sections:

1. Hero section
Title:
“Hi, I’m Chamath.”

Subtitle:
“Software Developer building AI-powered apps, automation tools, and full-stack products.”

Description:
“I build practical software that turns ideas into working products — from AI assistants and Android apps to business automation tools, RAG systems, and voice-first experiences.”

Buttons:
- View Projects
- Download Resume
- Contact Me

Add a visual hero element:
Create a code/product dashboard-style mockup showing cards like:
- AI Assistant
- Android Apps
- Automation
- RAG Systems
- Voice + Vision

2. Featured Projects
Show these 3 main projects:
- WrenchDesk
- Tummy Tracker
- Casper On-Device AI Companion

Each card should have:
- Project name
- Short description
- Visual mockup thumbnail
- Tech badges
- “View Case Study” button

3. Skills section
Group skills into categories:

Frontend:
React, Next.js, TypeScript, Tailwind CSS

Android:
Kotlin, Jetpack Compose, Material 3, Room, Hilt, DataStore, CameraX

Backend/API:
Python, FastAPI, Flask, Node.js, REST APIs

AI/ML:
OpenAI API, Whisper, GPT-4o-mini, RAG, ChromaDB, embeddings, local LLMs, llama.cpp, ML Kit

Automation/Tools:
GitHub, Vercel, Docker, Raspberry Pi, Android Studio, Gradle, ADB, Firecrawl, AutoGen, MCP

4. About preview
Short paragraph:
“I like building useful products from scratch — especially tools that combine AI, automation, mobile apps, and real-world workflows.”

Link to /about.

5. Contact CTA
Text:
“Have a project, opportunity, or idea? Let’s talk.”

Button:
Contact Me

Projects data:
Create a central file:
lib/projects.ts

Do not hardcode project information in multiple places.

Each project object should include:

- title
- slug
- tagline
- shortDescription
- longDescription
- problem
- solution
- techStack
- features
- architecture
- visualType
- challenges
- outcome
- privacyNotes
- githubUrl
- demoUrl
- status
- category
- highlights

Use these project entries:

PROJECT 1

Title:
WrenchDesk

Slug:
wrenchdesk

Category:
Android AI Business Automation

Status:
Private prototype

Tagline:
“An AI-powered Android assistant for a solo mechanic.”

Short description:
“A private Android assistant that watches incoming customer messages, extracts job details, drafts appointments and replies, manages customer/vehicle history, and helps compare parts across suppliers.”

Long description:
“WrenchDesk is a private Android assistant built for a solo mechanic. It runs on his personal phone and helps turn messy customer conversations into organized work without changing how he already communicates. It reads incoming customer texts through SMS and notification access, understands repair requests with an LLM, creates appointment drafts, warns about double-booking, drafts replies, manages jobs, and keeps customer/vehicle history searchable.”

Problem:
“Solo mechanics often run their entire business through text messages, memory, and scattered notes. Customer names, vehicle details, repair requests, appointment times, prices, and parts information can easily get lost.”

Solution:
“WrenchDesk keeps the mechanic in control while reducing mental load. It does not auto-book or auto-send messages. Instead, it creates drafts the mechanic can Confirm, Edit, or Ignore.”

Tech stack:
- Kotlin
- Jetpack Compose
- Material 3
- Room
- DataStore
- OpenAI gpt-4o-mini
- Firecrawl
- OkHttp
- kotlinx.serialization
- Android SMS APIs
- NotificationListenerService
- Background SupervisorJob + IO

Features:
- Reads incoming SMS and notification-based messages
- Extracts customer, vehicle, repair, and proposed time
- Creates appointment drafts
- Warns about double-booked times
- Drafts outgoing replies for review
- Daily schedule
- Job duration, status, price, and notes
- Customer and vehicle history
- Parts hunting across suppliers using Firecrawl
- Messages tab with chat threads and compose/send support

Architecture:
- ai/ OpenAI client and prompts
- data/ Room entities, DAOs, repository
- scrape/ Firecrawl parts lookup
- sms/ SMS observer, notification listener, sender, message processor, schedule parser
- reminders/ appointment reminders
- ui/ Compose screens for today, inbox, jobs, parts, customers, drafts, settings

Challenges:
- Designing around a real mechanic’s existing workflow
- Avoiding dangerous automation by using drafts instead of auto-actions
- Parsing messy natural-language customer messages
- Detecting appointment conflicts
- Keeping the UI simple for a non-technical user
- Combining SMS, notifications, local storage, and AI safely

Outcome:
“Designed and built a practical AI workflow assistant for a real small-business use case, focused on reducing missed jobs, repeated typing, forgotten details, and scattered customer history.”

Privacy notes:
“Data is stored locally on the mechanic’s device. Outbound calls are limited to OpenAI for message understanding/reply drafting and Firecrawl for parts lookup.”

Visual direction:
Create a project visual with:
- Android phone frame
- Today schedule cards
- Incoming customer message card
- AI extracted fields: customer, vehicle, repair, time
- Confirm / Edit / Ignore buttons
- Parts comparison table showing supplier, price, availability, pickup time
- Chat-thread mockup

PROJECT 2

Title:
Tummy Tracker

Slug:
tummy-tracker

Category:
Android Health Tracking / Voice AI

Status:
Native Android prototype

Tagline:
“Voice meal logging and digestive symptom insights.”

Short description:
“A native Android app for tracking meals and digestive symptoms by voice, then surfacing personalized food-trigger insights using medically-informed digestive transit windows.”

Long description:
“Tummy Tracker is a native Android app for people who want to understand relationships between meals and digestive symptoms. Users speak what they ate, the app transcribes it with Whisper, and symptoms can be logged with one tap. Over time, the app correlates meals and symptoms using symptom-specific digestive windows rather than naive same-day matching.”

Problem:
“Food and symptom tracking is tedious, and simple food diaries often fail because users forget details or logs become too time-consuming. Basic correlation also creates misleading results when it ignores digestion timing.”

Solution:
“Tummy Tracker makes logging fast with voice input and one-tap symptom buttons. Its analytics engine uses different time windows for different symptoms, then weighs likely food triggers based on timing proximity.”

Tech stack:
- Kotlin 1.9.24
- Jetpack Compose
- Material 3
- Hilt
- Room
- Retrofit
- Moshi
- OkHttp
- MediaRecorder
- OpenAI whisper-1
- OpenAI gpt-4o-mini
- AlarmManager
- DataStore
- Foreground microphone service
- Min SDK 26
- Target SDK 34
- JVM 17
- Gradle 8.7
- AGP 8.5.2

Features:
- Voice meal logging
- Automatic silence detection
- Whisper transcription
- No confirmation step
- 60-second recording cap
- Persistent notification recording
- 8 symptom types
- Severity and notes
- Symptom-specific digestive windows
- Onset distribution histogram
- Food trigger scoring
- Common trigger highlighting
- Recent episode breakdowns
- Dashboard quick insights
- Calendar heatmap
- Meal-count dots
- History delete/reset options
- Meal-time reminders with exact alarms
- Reboot-safe reminders

Architecture:
- MVVM
- data/ Room, repositories, API layer
- domain/ audio, insights, correlation engine, SymptomAnalyzer
- ui/ dashboard, record, history, insights, calendar, settings, symptom
- StateFlow to collectAsState
- Compose Navigation

Challenges:
- Making tracking nearly frictionless
- Handling background recording safely
- Designing medically-informed but non-diagnostic analytics
- Creating useful food-trigger scoring
- Building a calendar visualization
- Preventing the app from feeling overwhelming

Outcome:
“Built a practical voice-first health tracking prototype that combines fast logging, structured symptom tracking, and personalized insight generation.”

Privacy notes:
“Audio files live in cacheDir and are deleted after transcription succeeds. API keys are stored in gitignored secrets.properties and injected through BuildConfig. All insights include a ‘not medical advice’ disclaimer.”

Visual direction:
Create a project visual with:
- Android phone frame
- Voice recording screen with waveform
- Meal log card
- Symptom grid with 8 icons/buttons
- Quick insight card: ‘Top possible trigger’
- Calendar heatmap mockup with red intensity days
- Histogram mockup for symptom onset timing
- Food trigger cards with likelihood scores and starred common triggers

PROJECT 3

Title:
Casper — On-Device AI Companion

Slug:
casper-on-device-ai-companion

Category:
Android AI Assistant / Local LLM / Voice + Vision

Status:
Experimental prototype

Tagline:
“An offline-first Jarvis-style AI companion running on Android.”

Short description:
“A fully on-device, always-listening AI assistant for a Samsung Galaxy A52 5G, using wake word detection, local LLM inference, streaming speech interaction, TTS, ambient memory, and camera-based observations.”

Long description:
“Casper is an on-device AI companion built for a Samsung Galaxy A52 5G. It wakes on the custom keyword ‘Casper’, streams speech-to-text, generates streaming responses with a local Qwen model through llama.cpp/JNI, and speaks responses back with Android TTS. Beyond chat, it passively observes the environment through camera and microphone, stores observations as long-term memory, and can offload heavier vision-language model queries to a laptop proxy.”

Problem:
“Most AI assistants depend heavily on cloud services and are not designed for persistent, private, ambient context. Building a useful personal assistant requires wake word activation, low-latency voice interaction, local inference, memory, vision, interruption handling, and reliable mobile background execution.”

Solution:
“Casper explores an offline-first architecture where the phone runs the core assistant locally. It combines wake word detection, streaming STT, local LLM inference, TTS, ambient memory, notification recall, and optional laptop-assisted vision.”

Tech stack:
- Kotlin
- Jetpack Compose
- Hilt
- Room
- CameraX
- Android SpeechRecognizer
- Android TextToSpeech
- Picovoice Porcupine
- llama.cpp
- JNI
- NDK
- CMake
- Qwen3-0.6B Q4_K_M
- ML Kit
- Python Flask monitor
- Ollama vision proxy
- PowerShell diagnostic scripts
- ADB
- Tailscale

Features:
- Custom “Casper” wake word
- Streaming speech-to-text
- Local LLM response generation
- Streaming token output
- Sentence-level TTS
- Barge-in detection with RMS thresholding
- Intent routing: vision, log save, log query, messages, general
- Web-search fallback using Google News RSS / DuckDuckGo
- Ambient scene observation
- CameraX still capture
- ML Kit labels, objects, OCR, colors
- Face recognition support
- Room-based activity logs
- 30-day observation retention
- Notification recall through NotificationListenerService
- Laptop-side VLM proxy for heavier visual queries
- Flask monitor UI for live debugging
- ADB/Tailscale development workflow

Architecture:
- companion-app Android app
- CompanionService foreground service
- monitor Flask web UI on port 7777
- wake_word_training scripts and datasets
- vision_proxy.py laptop-side VLM proxy
- NetworkLogStreamer for live phone-to-PC logs
- Room DB for activity logs and memory
- ModelManager to ensure only one heavy model is resident at a time

Engineering notes:
- add_special=false in llama_tokenize for ChatML to avoid BOS poisoning Qwen output
- Prompt decode chunked at n_batch=512 to avoid SIGABRT on long prompts
- Avoid VOICE_RECOGNITION AudioSource for ambient capture on this device
- arm64-v8a only
- CPU-only local LLM inference
- Flash attention disabled
- Context length 512
- 6 threads

Challenges:
- Running local AI on limited phone hardware
- Managing memory so only one heavy model is loaded at a time
- Wake word reliability
- Background Android service constraints
- Streaming STT, LLM, and TTS together
- Handling barge-in interruption
- Debugging JNI/llama.cpp crashes
- Building a live monitor/debugging workflow
- Balancing privacy, latency, and capability

Outcome:
“Built an experimental privacy-preserving Android AI companion that demonstrates wake-word conversation, local LLM responses, ambient memory, passive vision, and desktop-assisted debugging.”

Privacy notes:
“Casper is designed as offline-first and privacy-preserving. Core assistant functionality runs on-device. Heavier vision queries can be optionally offloaded to a trusted laptop proxy.”

Visual direction:
Create a project visual with:
- Android phone assistant screen
- Wake word status: Listening for “Casper”
- Voice transcript card
- Streaming response card
- Ambient memory timeline
- Camera observation card with labels/OCR/colors
- Local LLM pipeline diagram
- Phone-to-laptop VLM proxy diagram
- Debug monitor mockup with live logs

Projects page:
The /projects page should have:
- Page title: “Projects”
- Intro text explaining that these are practical AI/product experiments
- Filter or category tags if simple to implement
- Large project cards with visual thumbnails
- Each card should show status, category, description, highlights, and tech stack
- Cards should look like product previews

Individual project pages:
Each project detail page should include:

1. Project hero
- Title
- Tagline
- Category
- Status
- Short description
- Tech stack badges
- Main visual mockup

2. Problem / Solution section
Use two side-by-side cards on desktop.

3. Visual product walkthrough
Create a section that visually walks through the app:
- For WrenchDesk: message → AI extraction → appointment draft → schedule → parts lookup
- For Tummy Tracker: voice meal → symptom log → analytics → calendar → insights
- For Casper: wake word → STT → local LLM → TTS → ambient memory → vision proxy

4. Features grid
Use icon cards.

5. Architecture section
Use diagram-like cards or flow layout.

6. Challenges section
Use cards or bullet groups.

7. Outcome section
Use a strong summary paragraph.

8. Privacy/safety notes
Use a visually distinct callout.

9. Back to Projects button

Visual components to create:
- PhoneMockup component
- AppScreenMockup component
- FlowDiagram component
- FeatureGrid component
- ArchitectureCard component
- StatCard component
- TimelineMockup component
- CalendarHeatmapMockup component
- ChatMockup component
- PartsComparisonMockup component
- VoiceWaveformMockup component
- DebugMonitorMockup component

These can be pure Tailwind/React components with fake UI data. They do not need real screenshots.

Design ideas per project:

WrenchDesk:
Use colors that feel mechanic/business-like: dark background, amber/blue accents.
Visual elements:
- Customer text bubble
- AI extracted repair request
- Appointment draft card
- Schedule list
- Parts comparison table

Tummy Tracker:
Use health/dashboard feel: dark background with red/orange/green accents.
Visual elements:
- Recording waveform
- Meal card
- Symptom grid
- Trigger insight score
- Calendar heatmap
- Histogram bars

Casper:
Use futuristic AI/device feel: dark background with purple/cyan accents.
Visual elements:
- Assistant status orb
- Transcript/response stream
- Local model pipeline
- Ambient observation timeline
- Debug log monitor

About page:
Create a polished About page.

Content direction:
“I’m Chamath, a software developer focused on building useful software with AI, automation, Android, and full-stack technologies. I like turning ideas into prototypes and prototypes into real products. My work includes AI assistants, voice-first apps, local LLM experiments, RAG applications, mobile apps, and business automation tools.”

Include sections:
- What I build
- How I work
- Current focus
- Technologies I use
- Why I build

Tone:
Confident, practical, builder-focused.

Contact page:
Create:
- Email placeholder: your-email@example.com
- GitHub placeholder
- LinkedIn placeholder
- Simple contact form UI only, no backend
- CTA text:
“Have a project, opportunity, or idea? Reach out and let’s talk.”

SEO:
Add metadata:

Title:
“Chamath | Software Developer & AI Builder”

Description:
“Portfolio of Chamath, a software developer building AI-powered Android apps, automation tools, local AI assistants, RAG systems, and full-stack products.”

Add OpenGraph metadata with placeholder /og-image.png if needed.

File structure:

app/
  layout.tsx
  page.tsx
  about/
    page.tsx
  projects/
    page.tsx
    [slug]/
      page.tsx
  contact/
    page.tsx
  not-found.tsx

components/
  Navbar.tsx
  Footer.tsx
  ProjectCard.tsx
  ProjectHero.tsx
  ProjectVisual.tsx
  PhoneMockup.tsx
  FlowDiagram.tsx
  FeatureGrid.tsx
  TechBadge.tsx
  SectionHeading.tsx
  ButtonLink.tsx
  VisualMockups.tsx

lib/
  projects.ts

public/
  resume.pdf
  og-image.png

Implementation requirements:
1. Generate the full Next.js project code.
2. Use TypeScript cleanly.
3. Keep all project content editable in lib/projects.ts.
4. Create dynamic project pages from project data.
5. Create visually rich project mockups using React/Tailwind, not static lorem ipsum.
6. Make the website fully responsive.
7. Ensure all routes work.
8. Add proper 404 handling for missing project slugs.
9. Do not use lorem ipsum.
10. Do not make the projects sound fake or generic.
11. Make the site feel like a real developer/product-builder portfolio.
12. Avoid overclaiming that the apps are public products unless stated. Use terms like private prototype, native Android prototype, experimental prototype.
13. Include disclaimers where relevant, especially Tummy Tracker: “Not medical advice.”
14. Make the code deployable to Vercel without extra setup.
15. After building, provide instructions to run locally and deploy.

Local run instructions:
npm install
npm run dev

Deployment instructions:
- Push the repo to GitHub
- Import the repo into Vercel
- Deploy
- Add custom domain later through Vercel project settings

Before finishing, verify:
- No TypeScript errors
- No broken imports
- All pages load
- Project cards link to the correct detail pages
- Project detail pages render correct data
- Mobile layout looks good
- Visual mockups display properly
- Resume link exists
- Site does not look like a generic template
```

Also tell your coding agent this:

```txt
Do not just paste my project descriptions as huge walls of text. Turn each one into a polished visual case study with mock product screens, feature cards, flow diagrams, and architecture sections.
```
