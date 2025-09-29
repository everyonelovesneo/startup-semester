import React from "react";

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-3">{children}</p>;
}

function Section({ id, title, kicker, children }: { id?: string; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">{title}</h2>
      <div className="mt-6 sm:mt-8">{children}</div>
    </section>
  );
}

function Icon({ path }: { path: React.ReactNode }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white">
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-gray-800">{path}</svg>
    </span>
  );
}

function FlowVisual() {
  return (
    <svg viewBox="0 0 560 280" className="w-full h-56 md:h-64 rounded-xl border border-gray-200 bg-white">
      <defs>
        <linearGradient id="disc-grad" x1="0" x2="1">
          <stop offset="0" stopColor="#F8FAFC"/>
          <stop offset="1" stopColor="#FFFFFF"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="560" height="280" fill="url(#disc-grad)"/>
      <g stroke="#0F172A" strokeWidth="1.25" fill="#FFFFFF">
        <rect x="36" y="44" width="144" height="56" rx="10"/>
        <rect x="36" y="132" width="144" height="56" rx="10"/>
        <rect x="380" y="44" width="144" height="56" rx="10"/>
        <rect x="380" y="132" width="144" height="56" rx="10"/>
        <rect x="208" y="88" width="144" height="56" rx="10"/>
      </g>
      <g fill="#0F172A" fontFamily="Inter, ui-sans-serif" fontSize="12" fontWeight="600">
        <text x="52" y="76">Role posted</text>
        <text x="52" y="164">Shortlist</text>
        <text x="396" y="76">Hire & onboard</text>
        <text x="396" y="164">30/60/90 check‑ins</text>
        <text x="224" y="122">Meet candidates</text>
      </g>
      <g stroke="#0F172A" strokeWidth="1.25" fill="none">
        <path d="M180 72 H208"/>
        <path d="M352 116 H380"/>
        <path d="M180 160 H208"/>
        <path d="M352 160 H380"/>
      </g>
      <g fill="#0F172A">
        <path d="M208 72 l-6 -4 v8 z"/>
        <path d="M380 116 l-6 -4 v8 z"/>
        <path d="M208 160 l-6 -4 v8 z"/>
        <path d="M380 160 l-6 -4 v8 z"/>
      </g>
    </svg>
  );
}

function Logos() {
  const items = [
    { name: "Nova", w: 84 },
    { name: "Orbital", w: 92 },
    { name: "Kindred", w: 96 },
    { name: "Factor", w: 86 },
    { name: "Morphism", w: 104 },
    { name: "ArcJet", w: 84 },
  ];
  return (
    <div className="flex flex-wrap items-center gap-6 opacity-80">
      {items.map((b) => (
        <svg key={b.name} width={b.w} height="24" viewBox={`0 0 ${b.w} 24`} className="text-gray-800">
          <rect x="0.5" y="2.5" width="18" height="18" rx="4" fill="#FFFFFF" stroke="#E5E7EB" />
          <path d="M6 11 l4 -4 v8 z" fill="#0F172A" />
          <text x="24" y="16" fontFamily="Inter, ui-sans-serif" fontSize="12" fontWeight="700" fill="#0F172A">{b.name}</text>
        </svg>
      ))}
    </div>
  );
}

function Counters() {
  const stats = [
    { label: "FT hires matched", value: "—" },
    { label: "Student builders vetted", value: "—" },
    { label: "Avg. kickoff time", value: "—" },
    { label: "Offer acceptance", value: "—" },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-5 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 text-gray-800"><path d="M3 12h18"/><path d="M12 3v18"/></svg>
              </span>
              <div>
                <div className="text-xl font-extrabold tracking-tight">{s.value}</div>
                <div className="text-[12px] text-gray-600">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-gray-500">Placeholders shown — swap with live metrics when ready.</p>
      </div>
    </div>
  );
}

function PreviewThumb({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-40 rounded-xl border border-gray-200 bg-white">
      <defs>
        <linearGradient id="thumb" x1="0" x2="1">
          <stop offset="0" stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="320" height="160" fill="url(#thumb)" />
      <rect x="20" y="20" width="100" height="20" rx="6" fill="#0F172A" opacity="0.85" />
      <rect x="20" y="52" width="180" height="10" rx="5" fill="#0F172A" opacity="0.15" />
      <rect x="20" y="68" width="220" height="10" rx="5" fill="#0F172A" opacity="0.12" />
      <rect x="20" y="84" width="160" height="10" rx="5" fill="#0F172A" opacity="0.12" />
      <rect x="20" y="110" width="60" height="20" rx="10" fill="#0F172A" opacity="0.2" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base font-extrabold tracking-tight">Disciples</span>
            <span className="text-[10px] font-semibold text-gray-600 border border-gray-200 rounded-full px-2 py-0.5">Beta</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="/#how" className="hover:underline">Programme</a>
            <a href="#how" className="hover:underline">Matching</a>
            <a href="#value" className="hover:underline">Why</a>
            <a href="#proof" className="hover:underline">Projects</a>
            <a href="#join" className="hover:underline">Join</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="/" className="hidden sm:inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold border border-gray-200">Students</a>
            <a href="#join" className="inline-flex items-center justify-center rounded-lg px-3.5 py-2.5 text-sm font-semibold bg-gray-900 text-white">Join beta</a>
          </div>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Hire student builders who ship from week one.</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">Disciples matches startup‑ready students to full‑time and internship roles at early‑stage companies. Not a gig site — a path to first jobs with real ownership.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#join" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold bg-gray-900 text-white">Post a role</a>
              <a href="/" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold border border-gray-200">I’m a student</a>
            </div>
            <p className="mt-2 text-xs text-gray-500">Beta: no fees. 15‑minute onboarding. Light feedback requested.</p>
          </div>
          <div className="md:pl-6">
            <div className="rounded-2xl border border-gray-200 shadow-sm p-4">
              <FlowVisual/>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-gray-200 p-3">
                  <div className="font-semibold">Brief</div>
                  <p className="text-gray-600 mt-1">Goal, users, tools, guardrails.</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-3">
                  <div className="font-semibold">Match</div>
                  <p className="text-gray-600 mt-1">1–3 students or a pod.</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-3">
                  <div className="font-semibold">Start</div>
                  <p className="text-gray-600 mt-1">Optional micro‑task, then go.</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-3">
                  <div className="font-semibold">Ship</div>
                  <p className="text-gray-600 mt-1">Weekly delivery + metrics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Counters/>

      <div className="border-t border-b border-gray-200 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-6">
          <div className="text-xs text-gray-600">Pilot interest from</div>
          <Logos/>
        </div>
      </div>

      <Section id="how" kicker="Matching" title="From open role to first‑week impact — fast">
        <ol className="grid md:grid-cols-5 gap-4">
          <li className="rounded-2xl border border-gray-200 bg-white p-6">
            <Icon path={<><path d="M5 7h14M5 12h14M5 17h9"/></>}/>
            <div className="mt-2 font-semibold">Post a role</div>
            <p className="text-sm text-gray-700 mt-1">Share the problem, outcomes, tools and cadence (FT or internship).</p>
          </li>
          <li className="rounded-2xl border border-gray-200 bg-white p-6">
            <Icon path={<><path d="M4 7l7 7 9-9"/></>}/>
            <div className="mt-2 font-semibold">Get a shortlist</div>
            <p className="text-sm text-gray-700 mt-1">We surface 3–5 candidates trained inside Startup Semester.</p>
          </li>
          <li className="rounded-2xl border border-gray-200 bg-white p-6">
            <Icon path={<><circle cx="8" cy="8" r="3"/><path d="M15 4h6M15 8h6M3 21c0-3 2-5 5-5s5 2 5 5"/></>}/>
            <div className="mt-2 font-semibold">Meet candidates</div>
            <p className="text-sm text-gray-700 mt-1">15‑min intros + optional micro‑task to confirm fit.</p>
          </li>
          <li className="rounded-2xl border border-gray-200 bg-white p-6">
            <Icon path={<><path d="M5 12l4 4L19 6"/></>}/>
            <div className="mt-2 font-semibold">Hire & onboard</div>
            <p className="text-sm text-gray-700 mt-1">Start quickly with clear scope, tools and comms.</p>
          </li>
          <li className="rounded-2xl border border-gray-200 bg-white p-6">
            <Icon path={<><path d="M4 14v6h6"/><path d="M20 10A8 8 0 1 1 4 10"/></>}/>
            <div className="mt-2 font-semibold">Check‑ins</div>
            <p className="text-sm text-gray-700 mt-1">30/60/90‑day check‑ins to keep outcomes on track.</p>
          </li>
        </ol>
        <p className="mt-6 text-[13px] text-gray-600">We’ve matched trained students into full‑time roles at startups. This is about first jobs — not work delivery.</p>
      </Section>

      <Section id="roles" kicker="Roles" title="Role families we support">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {[
            {title:"Product & Market", desc:"Discovery, validation, GTM ops"},
            {title:"Design", desc:"UX, UI, prototyping"},
            {title:"Software", desc:"Frontend, backend, AI tooling"},
            {title:"Growth", desc:"Acquisition experiments, analytics"},
            {title:"Ops", desc:"Biz ops, research, support"},
          ].map((r) => (
            <div key={r.title} className="relative rounded-2xl border border-gray-200 bg-white p-5 pt-6">
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-gray-900/10 to-transparent" />
              <Icon path={<><rect x="5" y="5" width="14" height="14" rx="2"/></>}/>
              <div className="mt-2 font-semibold">{r.title}</div>
              <p className="text-sm text-gray-700">{r.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="value" kicker="Why Disciples" title="Not a gig site — a path to your first startup hires">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <Icon path={<><path d="M3 7h18M3 12h18M3 17h18"/></>}/>
            <div className="mt-2 font-semibold">Startup‑ready training</div>
            <p className="text-sm text-gray-700 mt-1">Candidates learn discovery → delivery, pods cadence and AI tooling through real product work.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <Icon path={<><path d="M12 2v20"/><path d="M2 12h20"/></>}/>
            <div className="mt-2 font-semibold">Signals that matter</div>
            <p className="text-sm text-gray-700 mt-1">Shipped projects, founder references and portfolio proof — not just GPA.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <Icon path={<><path d="M5 12l4 4L19 6"/></>}/>
            <div className="mt-2 font-semibold">Trial‑to‑hire (optional)</div>
            <p className="text-sm text-gray-700 mt-1">Start with a scoped trial when needed, then convert to FT or internship.</p>
          </div>
        </div>
      </Section>

      <Section id="proof" kicker="Student projects" title="Student‑built products shipped to market">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {name: "SakuraSpeak", blurb: "AI speaking practice for Japanese learners — built by a student pod.", url: "https://sakuraspeak.app/"},
            {name: "Snowball Habits", blurb: "Habit coach turning small wins into momentum — built by a student team.", url: "https://www.snowballhabits.com/"},
          ].map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener" className="rounded-2xl border border-gray-200 bg-white p-6 block">
              <PreviewThumb label={p.name}/>
              <div className="mt-3">
                <div className="text-sm font-semibold">{p.name}</div>
                <p className="text-sm text-gray-700">{p.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="join" kicker="Get started" title="Start hiring with Disciples">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>Post your role (problem, scope, tools, timeline).</li>
              <li>Get a shortlist and meet candidates within days.</li>
              <li>Hire with a 15‑minute onboarding. Beta has no fees.</li>
            </ol>
            <a href="#" className="mt-5 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold bg-gray-900 text-white">Post a role</a>
            <p className="mt-3 text-xs text-gray-500">Prefer a chat? <a href="#" className="underline">Book a 15‑min intro</a>. Not a gig marketplace or agency.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="text-sm font-semibold">What we handle</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Shortlisting & intros</li>
              <li>Schedule coordination</li>
              <li>Light documentation & cadence</li>
              <li>30/60/90‑day check‑ins</li>
            </ul>
          </div>
        </div>
      </Section>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-600">© {new Date().getFullYear()} Disciples · a Startup Semester project</p>
          <nav className="flex items-center gap-5 text-gray-700">
            <a href="/" className="hover:underline">Programme</a>
            <a href="#join" className="hover:underline">Post a role</a>
            <a href="#how" className="hover:underline">How it works</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
