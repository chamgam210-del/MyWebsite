import PhoneMockup from "./PhoneMockup";
import {
  MessageSquare,
  Calendar,
  Wrench,
  CheckCircle2,
  Edit3,
  X as XIcon,
  Mic,
  Pause,
  Activity,
  Cpu,
  Eye,
  Camera,
  Bot,
  Send,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

/* ===========================
   WRENCHDESK MOCKUPS
=========================== */

export function WrenchDeskPhone() {
  return (
    <PhoneMockup accent="amber">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-amber-300/80">
              Today · Tue
            </div>
            <div className="text-lg font-semibold">Schedule</div>
          </div>
          <div className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-200">
            4 jobs
          </div>
        </div>

        {/* incoming message */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40">
            <MessageSquare className="h-3 w-3" /> New SMS · Maria K.
          </div>
          <div className="rounded-xl bg-white/[0.05] p-2.5 text-[11px] leading-snug text-white/85">
            “Hey, my 2015 Civic is making a grinding noise when I brake. Can you
            squeeze me in Thursday afternoon?”
          </div>

          <div className="mt-3 rounded-xl border border-amber-400/20 bg-amber-400/[0.06] p-2.5">
            <div className="text-[10px] uppercase tracking-widest text-amber-200/80">
              AI extracted
            </div>
            <div className="mt-1.5 grid grid-cols-2 gap-1.5 text-[11px]">
              <Field k="Customer" v="Maria K." />
              <Field k="Vehicle" v="2015 Honda Civic" />
              <Field k="Repair" v="Front brakes" />
              <Field k="Time" v="Thu PM" />
            </div>
          </div>

          <div className="mt-3 flex items-center gap-1.5">
            <PillBtn icon={<CheckCircle2 className="h-3 w-3" />} label="Confirm" tone="emerald" />
            <PillBtn icon={<Edit3 className="h-3 w-3" />} label="Edit" tone="amber" />
            <PillBtn icon={<XIcon className="h-3 w-3" />} label="Ignore" tone="rose" />
          </div>
        </div>

        {/* schedule cards */}
        <div className="space-y-2">
          <ScheduleRow time="9:00" customer="Devon R." job="Oil + filter" status="done" />
          <ScheduleRow time="11:30" customer="Aisha P." job="Coolant flush" status="active" />
          <ScheduleRow time="14:00" customer="Maria K." job="Brake inspect" status="draft" />
          <ScheduleRow time="16:30" customer="Sam T." job="Battery swap" status="next" />
        </div>
      </div>
    </PhoneMockup>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[9px] uppercase tracking-widest text-white/40">{k}</div>
      <div className="text-white">{v}</div>
    </div>
  );
}

function PillBtn({
  icon,
  label,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  tone: "emerald" | "amber" | "rose";
}) {
  const tones = {
    emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    amber: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    rose: "border-rose-400/30 bg-rose-400/10 text-rose-200",
  }[tone];
  return (
    <button
      className={`flex flex-1 items-center justify-center gap-1 rounded-full border px-2 py-1 text-[10px] font-medium ${tones}`}
    >
      {icon} {label}
    </button>
  );
}

function ScheduleRow({
  time,
  customer,
  job,
  status,
}: {
  time: string;
  customer: string;
  job: string;
  status: "done" | "active" | "next" | "draft";
}) {
  const dot = {
    done: "bg-emerald-400",
    active: "bg-amber-400 animate-pulseSoft",
    next: "bg-white/50",
    draft: "bg-violet-400",
  }[status];
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
      <div className="w-10 text-[10px] font-medium text-white/60">{time}</div>
      <div className={`h-2 w-2 rounded-full ${dot}`} />
      <div className="flex-1">
        <div className="text-[11px] font-medium">{customer}</div>
        <div className="text-[10px] text-white/50">{job}</div>
      </div>
      {status === "draft" && (
        <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-1.5 py-0.5 text-[9px] text-violet-200">
          Draft
        </span>
      )}
    </div>
  );
}

export function PartsComparison() {
  const parts = [
    { sup: "PartsCity", price: "$58.40", avail: "In stock", pickup: "1h", best: true },
    { sup: "AutoZone", price: "$64.99", avail: "In stock", pickup: "2h" },
    { sup: "RockAuto", price: "$49.20", avail: "Ships 2d", pickup: "—" },
    { sup: "NAPA", price: "$71.10", avail: "Low stock", pickup: "3h" },
  ];
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">
            Parts hunt · Firecrawl
          </div>
          <div className="text-sm font-semibold">
            Front brake pads — 2015 Honda Civic
          </div>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-200">
          4 suppliers
        </span>
      </div>
      <div className="overflow-hidden rounded-xl border border-white/5">
        <div className="grid grid-cols-4 gap-2 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-wider text-white/40">
          <div>Supplier</div>
          <div>Price</div>
          <div>Availability</div>
          <div>Pickup</div>
        </div>
        {parts.map((p) => (
          <div
            key={p.sup}
            className={`grid grid-cols-4 gap-2 px-3 py-2.5 text-xs ${
              p.best ? "bg-amber-400/[0.06] text-amber-100" : "text-white/80"
            }`}
          >
            <div className="font-medium">
              {p.sup}{" "}
              {p.best && (
                <span className="ml-1 rounded-full bg-amber-400/20 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-amber-200">
                  best
                </span>
              )}
            </div>
            <div>{p.price}</div>
            <div className="text-white/60">{p.avail}</div>
            <div className="text-white/60">{p.pickup}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WrenchDeskChat() {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">Maria K.</div>
          <div className="text-[10px] text-white/40">2015 Civic · 3 jobs</div>
        </div>
        <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-2 py-0.5 text-[10px] text-violet-200">
          Reply drafted
        </span>
      </div>
      <div className="space-y-2 text-[12px]">
        <Bubble side="them">
          Grinding noise when braking, Thursday afternoon?
        </Bubble>
        <Bubble side="me">Yep, I can do Thursday 2pm. Brake inspect.</Bubble>
        <Bubble side="them">Perfect — see you then.</Bubble>
        <div className="rounded-xl border border-violet-400/20 bg-violet-400/[0.06] p-2.5 text-[11px]">
          <div className="mb-1 text-[10px] uppercase tracking-widest text-violet-200/80">
            AI draft reply
          </div>
          <p className="text-white/85">
            “Thanks Maria — confirmed for Thu 2pm. I’ll quote after I see the
            pads. Bring it in around 1:50.”
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <button className="flex-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 py-1 text-[10px] text-emerald-200">
              Send
            </button>
            <button className="flex-1 rounded-full border border-white/10 bg-white/5 py-1 text-[10px] text-white/70">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "me" | "them"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "me" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-1.5 ${
          side === "me"
            ? "bg-amber-400/20 text-amber-100"
            : "bg-white/[0.06] text-white/85"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ===========================
   TUMMY TRACKER MOCKUPS
=========================== */

export function TummyTrackerPhone() {
  return (
    <PhoneMockup accent="rose">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-rose-300/80">
              Voice log
            </div>
            <div className="text-lg font-semibold">Recording meal…</div>
          </div>
          <div className="rounded-full border border-rose-400/30 bg-rose-400/10 px-2 py-0.5 text-[10px] text-rose-200">
            00:14
          </div>
        </div>

        {/* waveform */}
        <div className="flex h-24 items-center justify-center gap-1 rounded-2xl border border-white/10 bg-gradient-to-b from-rose-500/10 to-transparent p-4">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="block w-1 rounded-full bg-gradient-to-t from-rose-400 to-orange-300"
              style={{
                height: `${20 + Math.abs(Math.sin(i * 0.7)) * 60}%`,
                opacity: 0.5 + (i % 3) * 0.15,
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70">
            <Pause className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-gradient-to-br from-rose-500 to-orange-400 p-3 text-white shadow-glow">
            <Mic className="h-5 w-5" />
          </button>
        </div>

        {/* last meal */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <div className="text-[10px] uppercase tracking-widest text-white/40">
            Logged 12 min ago
          </div>
          <div className="mt-1 text-[12px] text-white/85">
            “Two slices of pepperoni pizza, side salad with ranch, large coke.”
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {["pizza", "dairy", "soda", "lettuce"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* symptom grid */}
        <div>
          <div className="mb-1.5 text-[10px] uppercase tracking-widest text-white/40">
            Log symptom
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { e: "🤢", l: "Nausea" },
              { e: "💨", l: "Gas" },
              { e: "🔥", l: "Heart" },
              { e: "💩", l: "Loose" },
              { e: "🌀", l: "Cramps" },
              { e: "🥱", l: "Fatigue" },
              { e: "🤕", l: "Bloat" },
              { e: "💧", l: "Reflux" },
            ].map((s) => (
              <button
                key={s.l}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] py-1.5 text-[9px] text-white/70 transition hover:bg-rose-400/10"
              >
                <span className="text-base">{s.e}</span>
                <span>{s.l}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
}

export function CalendarHeatmap() {
  const intensities = [
    0, 1, 0, 2, 1, 0, 0, 0, 2, 3, 1, 0, 1, 0, 1, 2, 3, 4, 2, 1, 0, 0, 1, 1, 2,
    3, 2, 1, 0, 1,
  ];
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">
            Calendar heatmap
          </div>
          <div className="text-sm font-semibold">Symptom intensity · last 30d</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-white/50">
          mild
          {[0, 1, 2, 3, 4].map((n) => (
            <span
              key={n}
              className="h-3 w-3 rounded-sm"
              style={{
                background: `rgba(244,63,94,${0.1 + n * 0.18})`,
              }}
            />
          ))}
          severe
        </div>
      </div>
      <div className="grid grid-cols-10 gap-1.5">
        {intensities.map((v, i) => (
          <div
            key={i}
            className="aspect-square rounded-md border border-white/5"
            style={{
              background:
                v === 0
                  ? "rgba(255,255,255,0.03)"
                  : `rgba(244,63,94,${0.15 + v * 0.18})`,
            }}
            title={`Day ${i + 1}: ${v}`}
          />
        ))}
      </div>
    </div>
  );
}

export function TriggerInsights() {
  const items = [
    { food: "Dairy", score: 0.82, common: true, evt: 9 },
    { food: "Spicy food", score: 0.64, common: true, evt: 6 },
    { food: "Soda", score: 0.49, common: false, evt: 4 },
    { food: "Onions", score: 0.31, common: false, evt: 3 },
  ];
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-3 flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-rose-300" />
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">
            Possible triggers
          </div>
          <div className="text-sm font-semibold">Weighted by digestion timing</div>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((it) => (
          <div key={it.food} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5">
                <span className="font-medium text-white">{it.food}</span>
                {it.common && (
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-1.5 py-0.5 text-[9px] text-amber-200">
                    ★ common
                  </span>
                )}
              </span>
              <span className="text-white/60">{it.evt} events</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-rose-400 to-orange-300"
                style={{ width: `${it.score * 100}%` }}
              />
            </div>
            <div className="mt-1 text-right text-[10px] text-white/40">
              likelihood {Math.round(it.score * 100)}%
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] text-white/40">
        Not medical advice. Insights are exploratory and personal.
      </p>
    </div>
  );
}

export function OnsetHistogram() {
  const bars = [3, 5, 8, 12, 18, 22, 16, 11, 7, 4, 2];
  const max = Math.max(...bars);
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-3 flex items-center gap-2">
        <Activity className="h-4 w-4 text-rose-300" />
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">
            Onset distribution
          </div>
          <div className="text-sm font-semibold">Time from meal → symptom</div>
        </div>
      </div>
      <div className="flex h-32 items-end gap-1.5">
        {bars.map((b, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-rose-500/80 to-rose-300/60"
            style={{ height: `${(b / max) * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-white/40">
        <span>0h</span>
        <span>3h</span>
        <span>6h</span>
        <span>10h</span>
      </div>
    </div>
  );
}

/* ===========================
   CASPER MOCKUPS
=========================== */

export function CasperPhone() {
  return (
    <PhoneMockup accent="cyan">
      <div className="space-y-3">
        {/* status orb */}
        <div className="flex flex-col items-center pt-2">
          <div className="relative h-24 w-24">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 opacity-30 blur-xl animate-pulseSoft" />
            <div className="absolute inset-2 rounded-full border border-white/20 bg-gradient-to-br from-violet-500/40 to-cyan-400/40" />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-300 to-cyan-200" />
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-widest text-cyan-200/80">
            Listening for “Casper”
          </div>
          <div className="text-sm font-semibold">on-device · 0% cloud</div>
        </div>

        {/* transcript */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <div className="mb-1 text-[10px] uppercase tracking-widest text-white/40">
            Transcript
          </div>
          <div className="text-[12px] text-white/85">
            “Casper, what was that book on the table earlier?”
          </div>
        </div>

        {/* streaming response */}
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] p-3">
          <div className="mb-1 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-cyan-200/80">
            <Bot className="h-3 w-3" /> Local LLM · Qwen3-0.6B
          </div>
          <p className="text-[12px] leading-snug text-white/90">
            I saw a paperback at 4:32pm — cover read{" "}
            <span className="rounded bg-white/10 px-1">“Deep Work”</span> by
            Cal Newport
            <span className="animate-pulseSoft text-cyan-300">▍</span>
          </p>
        </div>

        {/* ambient memory timeline */}
        <div>
          <div className="mb-1.5 text-[10px] uppercase tracking-widest text-white/40">
            Ambient memory
          </div>
          <div className="space-y-1.5">
            <MemRow t="4:32p" e="Saw book: Deep Work" tone="cyan" />
            <MemRow t="3:10p" e="Notification: Slack from Eli" tone="violet" />
            <MemRow t="2:45p" e="Voice: meeting reminder" tone="white" />
            <MemRow t="1:20p" e="Vision: coffee mug, keyboard" tone="cyan" />
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
}

function MemRow({
  t,
  e,
  tone,
}: {
  t: string;
  e: string;
  tone: "cyan" | "violet" | "white";
}) {
  const c =
    tone === "cyan"
      ? "bg-cyan-400"
      : tone === "violet"
      ? "bg-violet-400"
      : "bg-white/60";
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-[11px]">
      <span className={`h-1.5 w-1.5 rounded-full ${c}`} />
      <span className="w-10 text-white/50">{t}</span>
      <span className="text-white/80">{e}</span>
    </div>
  );
}

export function LocalLLMPipeline() {
  const stages = [
    { i: <Mic className="h-4 w-4" />, l: "Wake word", s: "Porcupine" },
    { i: <Activity className="h-4 w-4" />, l: "Streaming STT", s: "Android SR" },
    { i: <Cpu className="h-4 w-4" />, l: "Local LLM", s: "Qwen / llama.cpp" },
    { i: <Send className="h-4 w-4" />, l: "TTS stream", s: "Android TTS" },
  ];
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">
            On-device pipeline
          </div>
          <div className="text-sm font-semibold">Voice → response in &lt;1.5s</div>
        </div>
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] text-cyan-200">
          arm64-v8a · CPU
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {stages.map((s) => (
          <div
            key={s.l}
            className="rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent p-3"
          >
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-cyan-200">
              {s.i}
            </div>
            <div className="mt-2 text-xs font-medium">{s.l}</div>
            <div className="text-[10px] text-white/50">{s.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VisionProxyDiagram() {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-3">
        <div className="text-[10px] uppercase tracking-widest text-white/40">
          Optional laptop offload
        </div>
        <div className="text-sm font-semibold">Phone ↔ Laptop VLM proxy (Tailscale)</div>
      </div>
      <div className="grid grid-cols-3 items-center gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
          <Camera className="mx-auto h-5 w-5 text-cyan-200" />
          <div className="mt-1 text-xs font-medium">Phone CameraX</div>
          <div className="text-[10px] text-white/50">ML Kit labels/OCR</div>
        </div>
        <div className="relative h-12">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-cyan-400/60 via-violet-400/60 to-cyan-400/60" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/30 bg-violet-400/10 px-2 py-0.5 text-[10px] text-violet-200">
            VLM query
          </div>
        </div>
        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.06] p-3 text-center">
          <Eye className="mx-auto h-5 w-5 text-violet-200" />
          <div className="mt-1 text-xs font-medium">Laptop Ollama</div>
          <div className="text-[10px] text-white/50">Heavier VLM model</div>
        </div>
      </div>
    </div>
  );
}

export function DebugMonitor() {
  const lines = [
    { t: "12:04:11", lv: "INFO", c: "wake_word fired (conf=0.91)" },
    { t: "12:04:12", lv: "INFO", c: "stt: partial=\"what was that book\"" },
    { t: "12:04:13", lv: "INFO", c: "llm: load qwen-0.6b ctx=512" },
    { t: "12:04:14", lv: "WARN", c: "vision: laptop proxy degraded — retrying" },
    { t: "12:04:14", lv: "INFO", c: "tts: stream sentence 1 (240ms)" },
    { t: "12:04:15", lv: "OK", c: "tokens/s=18.4 mem=412MB" },
  ];
  return (
    <div className="glass rounded-2xl p-4 font-mono text-[11px]">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-2 text-[10px] uppercase tracking-widest text-white/40">
            monitor · :7777
          </span>
        </div>
        <span className="text-[10px] text-white/40">live</span>
      </div>
      <div className="space-y-1 rounded-lg bg-black/40 p-3">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-white/30">{l.t}</span>
            <span
              className={
                l.lv === "WARN"
                  ? "text-amber-300"
                  : l.lv === "OK"
                  ? "text-emerald-300"
                  : "text-cyan-300"
              }
            >
              [{l.lv}]
            </span>
            <span className="text-white/80">{l.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===========================
   GENERIC HERO DASHBOARD
=========================== */

export function HeroDashboard() {
  const tiles = [
    { l: "AI Assistant", s: "wake → llm → tts", i: <Bot className="h-4 w-4" />, tone: "violet" },
    { l: "Android Apps", s: "Kotlin · Compose", i: <Wrench className="h-4 w-4" />, tone: "amber" },
    { l: "Automation", s: "scrape · schedule · alert", i: <Activity className="h-4 w-4" />, tone: "emerald" },
    { l: "RAG Systems", s: "embed · retrieve · cite", i: <Cpu className="h-4 w-4" />, tone: "cyan" },
    { l: "Voice + Vision", s: "STT · ML Kit · VLM", i: <Eye className="h-4 w-4" />, tone: "rose" },
    { l: "Live ops", s: "monitor · logs", i: <AlertTriangle className="h-4 w-4" />, tone: "violet" },
  ];
  const tones: Record<string, string> = {
    violet: "from-violet-500/20 to-violet-500/0 text-violet-200",
    amber: "from-amber-500/20 to-amber-500/0 text-amber-200",
    emerald: "from-emerald-500/20 to-emerald-500/0 text-emerald-200",
    cyan: "from-cyan-500/20 to-cyan-500/0 text-cyan-200",
    rose: "from-rose-500/20 to-rose-500/0 text-rose-200",
  };
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-grid-fade blur-2xl" />
      <div className="glass rounded-3xl p-4 shadow-glow">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60">
            chamath · workspace
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {tiles.map((t) => (
            <div
              key={t.l}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${tones[t.tone]} p-3.5 transition hover:border-white/20`}
            >
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                {t.i}
              </div>
              <div className="mt-2.5 text-sm font-medium text-white">{t.l}</div>
              <div className="text-[11px] text-white/55">{t.s}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <Stat label="Projects" value="6+" />
          <Stat label="Languages" value="Kotlin · TS · Py" />
          <Stat label="Focus" value="AI · Mobile · Auto" />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div className="text-[10px] uppercase tracking-widest text-white/40">
        {label}
      </div>
      <div className="mt-0.5 text-sm font-medium text-white">{value}</div>
    </div>
  );
}

/* ===========================
   CARD THUMBNAILS (small)
=========================== */

export function WrenchDeskThumb() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 to-bg" />
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative grid h-full grid-cols-5 gap-2 p-4">
        <div className="col-span-3 space-y-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
            <div className="text-[9px] uppercase tracking-widest text-white/40">
              Incoming SMS
            </div>
            <div className="mt-1 text-[10px] text-white/80">
              “2015 Civic — grinding when I brake. Thu PM?”
            </div>
          </div>
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.06] p-2.5">
            <div className="text-[9px] uppercase tracking-widest text-amber-200/80">
              AI extracted
            </div>
            <div className="mt-1 grid grid-cols-2 gap-1 text-[9px] text-white/80">
              <div>Maria K.</div>
              <div>Civic</div>
              <div>Brakes</div>
              <div>Thu PM</div>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="flex-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 py-0.5 text-center text-[8px] text-emerald-200">
              Confirm
            </span>
            <span className="flex-1 rounded-full border border-white/10 bg-white/5 py-0.5 text-center text-[8px] text-white/60">
              Edit
            </span>
          </div>
        </div>
        <div className="col-span-2 space-y-1.5">
          <div className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] p-1.5 text-[8px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 9:00 Devon
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] p-1.5 text-[8px]">
            <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-amber-400" /> 11:30 Aisha
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-violet-400/20 bg-violet-400/[0.06] p-1.5 text-[8px]">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" /> 14:00 Maria
          </div>
        </div>
      </div>
    </div>
  );
}

export function TummyThumb() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 to-bg" />
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative grid h-full grid-cols-5 gap-2 p-4">
        <div className="col-span-3 space-y-2">
          <div className="flex h-12 items-center justify-center gap-0.5 rounded-xl border border-white/10 bg-rose-500/5 p-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="block w-0.5 rounded-full bg-gradient-to-t from-rose-400 to-orange-300"
                style={{ height: `${20 + Math.abs(Math.sin(i)) * 60}%` }}
              />
            ))}
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-[9px] text-white/80">
            “Pepperoni pizza + soda”
          </div>
          <div className="grid grid-cols-4 gap-1">
            {["🤢", "💨", "🔥", "🌀"].map((e) => (
              <div
                key={e}
                className="flex aspect-square items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-sm"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-5 gap-0.5">
          {Array.from({ length: 25 }).map((_, i) => {
            const v = [0, 1, 0, 2, 3, 0, 1, 2, 4, 1][i % 10];
            return (
              <div
                key={i}
                className="aspect-square rounded-sm"
                style={{
                  background:
                    v === 0
                      ? "rgba(255,255,255,0.05)"
                      : `rgba(244,63,94,${0.15 + v * 0.18})`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function CasperThumb() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-bg to-cyan-500/10" />
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative flex h-full items-center justify-center gap-4 p-4">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 opacity-50 blur-xl animate-pulseSoft" />
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-violet-300 to-cyan-200" />
        </div>
        <div className="space-y-1.5">
          <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] px-2 py-1 text-[9px] text-cyan-100">
            “Casper, what was that book?”
          </div>
          <div className="rounded-lg border border-violet-400/20 bg-violet-400/[0.06] px-2 py-1 text-[9px] text-violet-100">
            Local LLM · Qwen3-0.6B
          </div>
          <div className="flex gap-1 font-mono text-[8px] text-emerald-300">
            <span>[OK]</span>
            <span className="text-white/50">tokens/s 18.4</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectThumb({ visualType }: { visualType: string }) {
  if (visualType === "wrenchdesk") return <WrenchDeskThumb />;
  if (visualType === "tummy-tracker") return <TummyThumb />;
  if (visualType === "casper") return <CasperThumb />;
  return null;
}
