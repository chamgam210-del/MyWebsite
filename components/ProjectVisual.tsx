import SectionHeading from "./SectionHeading";
import {
  WrenchDeskPhone,
  PartsComparison,
  WrenchDeskChat,
  TummyTrackerPhone,
  CalendarHeatmap,
  TriggerInsights,
  OnsetHistogram,
  CasperPhone,
  LocalLLMPipeline,
  VisionProxyDiagram,
  DebugMonitor,
} from "./VisualMockups";
import { FlowDiagram } from "./FlowDiagram";

export default function ProjectVisual({ visualType }: { visualType: string }) {
  if (visualType === "wrenchdesk") {
    return (
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Product walkthrough"
          title="From a text message to a confirmed job"
          description="WrenchDesk turns a raw SMS into an actionable, draft-only workflow — the mechanic stays in control end to end."
        />

        <div className="mt-10">
          <FlowDiagram
            steps={[
              { label: "Incoming SMS", sub: "customer message" },
              { label: "AI extraction", sub: "gpt-4o-mini" },
              { label: "Appointment draft", sub: "confirm / edit / ignore" },
              { label: "Today schedule", sub: "double-book aware" },
              { label: "Parts hunt", sub: "Firecrawl" },
            ]}
          />
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1.1fr]">
          <WrenchDeskPhone />
          <div className="space-y-6">
            <WrenchDeskChat />
            <PartsComparison />
          </div>
        </div>
      </section>
    );
  }

  if (visualType === "tummy-tracker") {
    return (
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Product walkthrough"
          title="Voice meal → symptom → personalized insight"
          description="Tummy Tracker keeps logging frictionless, then weighs likely triggers using symptom-specific digestive windows."
        />
        <div className="mt-10">
          <FlowDiagram
            steps={[
              { label: "Voice meal", sub: "Whisper transcribe" },
              { label: "Symptom tap", sub: "8 types · severity" },
              { label: "Correlation", sub: "transit windows" },
              { label: "Trigger scoring", sub: "weighted by timing" },
              { label: "Calendar + history", sub: "heatmap" },
            ]}
          />
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1.1fr]">
          <TummyTrackerPhone />
          <div className="space-y-6">
            <TriggerInsights />
            <OnsetHistogram />
            <CalendarHeatmap />
          </div>
        </div>
      </section>
    );
  }

  if (visualType === "casper") {
    return (
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Product walkthrough"
          title="Wake word to memory, fully on device"
          description="Casper runs a wake → STT → local LLM → TTS loop on the phone, with ambient memory and an optional laptop VLM offload."
        />
        <div className="mt-10">
          <FlowDiagram
            steps={[
              { label: "Wake word", sub: "Porcupine" },
              { label: "Streaming STT", sub: "Android SR" },
              { label: "Local LLM", sub: "Qwen / llama.cpp" },
              { label: "Streaming TTS", sub: "sentence-level" },
              { label: "Ambient memory", sub: "Room DB" },
              { label: "Vision proxy", sub: "laptop · Tailscale" },
            ]}
          />
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1.1fr]">
          <CasperPhone />
          <div className="space-y-6">
            <LocalLLMPipeline />
            <VisionProxyDiagram />
            <DebugMonitor />
          </div>
        </div>
      </section>
    );
  }

  return null;
}
