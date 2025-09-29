"use client";
import React, { useEffect, useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-3">{children}</p>;
}

function Section({ id, title, kicker, children }: { id?: string; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <Container>
        {kicker && <Kicker>{kicker}</Kicker>}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">{title}</h2>
        <div className="mt-6 sm:mt-8">{children}</div>
      </Container>
    </section>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a href="#apply" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold bg-[#D40030] text-white">Apply</a>
      <a href="#info" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold border border-gray-200">Register for info session</a>
    </div>
  );
}

function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-2xl border border-gray-200 shadow-lg bg-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-sm">
            <span className="font-semibold">Join the pioneer 2026 cohort</span>
            <span className="text-gray-600"> — selective, hands-on, mentor-led.</span>
          </div>
          <div className="flex gap-2">
            <a href="#apply" className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-[#D40030] text-white">Apply</a>
            <a href="#info" className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold border border-gray-200">Info session</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D40030]/10">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" strokeWidth="2" stroke="#D40030"><path d="M5 12l4 4L19 6"/></svg>
    </span><span className="text-sm text-gray-800">{children}</span></li>
  );
}

function Accordion({ items }: { items: { title: string; body: React.ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
      {items.map((it, i) => (
        <div key={i}>
          <button className="w-full text-left px-5 py-4 flex items-center justify-between" onClick={() => setOpen(open === i ? null : i)}>
            <span className="font-semibold text-gray-900">{it.title}</span>
            <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${open===i ? 'rotate-180' : ''}`} fill="none" strokeWidth="1.5" stroke="currentColor"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div className={`px-5 pb-5 text-sm text-gray-700 ${open===i ? 'block' : 'hidden'}`}>{it.body}</div>
        </div>
      ))}
    </div>
  );
}

export default function StartupSemesterLanding() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="font-extrabold tracking-tight">Startup Semester</div>
            <nav className="flex items-center gap-6 text-sm">
              <a className="hover:underline" href="#about">About</a>
              <a className="hover:underline" href="#mentors">Mentors</a>
              <a className="hover:underline" href="#timeline">Timeline</a>
              <a className="hover:underline" href="/disciples">Disciples</a>
              <a className="inline-flex items-center justify-center rounded-lg px-3.5 py-2.5 text-sm font-semibold bg-[#D40030] text-white" href="#apply">Apply</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Build like a founder while you’re still in uni.</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">A selective, hands‑on programme where students research, design and ship to real users with mentors. Learn to build with AI, move fast, and think globally.</p>
            <div className="mt-6"><CTAButtons/></div>
            <p className="mt-2 text-xs text-gray-500">Pioneer cohort · 2026 · recruiting now.</p>
          </div>
          <div className="md:pl-6">
            <div className="rounded-2xl border border-gray-200 p-4 bg-white">
              <svg viewBox="0 0 560 260" className="w-full h-56 rounded-xl border border-gray-200">
                <rect x="0" y="0" width="560" height="260" fill="#fff"/>
                <rect x="24" y="24" width="280" height="20" rx="6" fill="#0F172A" opacity="0.9"/>
                <rect x="24" y="56" width="360" height="10" rx="5" fill="#0F172A" opacity="0.1"/>
                <rect x="24" y="74" width="420" height="10" rx="5" fill="#0F172A" opacity="0.08"/>
                <rect x="24" y="92" width="300" height="10" rx="5" fill="#0F172A" opacity="0.08"/>
                <rect x="24" y="122" width="100" height="24" rx="12" fill="#D40030" opacity="0.9"/>
                <rect x="140" y="122" width="130" height="24" rx="12" fill="#0F172A" opacity="0.08"/>
              </svg>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-gray-200 p-3"><div className="font-semibold">Learn</div><p className="text-gray-600 mt-1">AI‑accelerated building, discovery → delivery, growth basics.</p></div>
                <div className="rounded-lg border border-gray-200 p-3"><div className="font-semibold">Do</div><p className="text-gray-600 mt-1">Ship weekly to users with mentor feedback.</p></div>
                <div className="rounded-lg border border-gray-200 p-3"><div className="font-semibold">Team</div><p className="text-gray-600 mt-1">Work in pods across product, design and engineering.</p></div>
                <div className="rounded-lg border border-gray-200 p-3"><div className="font-semibold">Career</div><p className="text-gray-600 mt-1">Prep for startup roles; get exposure via Disciples.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-3">What you’ll do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Go end‑to‑end: from problem to shipped product</h2>
          <div className="mt-6 sm:mt-8 grid md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              <Check>Identify problems worth solving and validate with real users</Check>
              <Check>Prototype fast with modern tooling and AI</Check>
              <Check>Ship weekly and instrument analytics</Check>
              <Check>Work like an early‑stage team (pods, ownership, outcomes)</Check>
            </ul>
            <ul className="space-y-2">
              <Check>Learn from operators and founders who’ve done it</Check>
              <Check>Build a portfolio that shows ability, not just GPA</Check>
              <Check>Meet peers who want non‑linear, global careers</Check>
              <Check>Optionally explore roles via Disciples</Check>
            </ul>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="font-semibold mb-2">The cohort’s project</div>
              <p className="text-sm text-gray-700">You’ll also get the chance to contribute to <a className="underline" href="/disciples">Disciples</a> — a talent platform matching startup‑ready students to roles. Short problem brief, real users, real outcomes.</p>\n            </div>
          </div>
        </div>
      </section>

      <section id="mentors" className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-3">Mentors & facilitators</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">You’ll learn from people who build</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="h-24 w-24 rounded-full bg-gray-100 border border-gray-200" />
                <div className="mt-3 text-sm font-semibold">Mentor Name</div>
                <p className="text-sm text-gray-700">One‑line credential goes here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-3">Student projects</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Shipped by student teams</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              { name: 'SakuraSpeak', url: 'https://sakuraspeak.app/', blurb: 'AI speaking practice for Japanese learners — built by a student pod.' },
              { name: 'Snowball Habits', url: 'https://www.snowballhabits.com/', blurb: 'Habit coach turning small wins into momentum — built by a student team.' },
            ].map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener" className="rounded-2xl border border-gray-200 bg-white p-6 block">
                <div className="w-full h-40 rounded-xl border border-gray-200 bg-white"></div>
                <div className="mt-3">
                  <div className="text-sm font-semibold">{p.name}</div>
                  <p className="text-sm text-gray-700">{p.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-3">Timeline</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Pioneer Cohort — 2026 (indicative)</h2>
          <ol className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { t: 'Applications open', d: 'Now' },
              { t: 'Info sessions', d: 'Weekly' },
              { t: 'Interviews', d: 'Nov 2025 – Jan 2026' },
              { t: 'Cohort kickoff', d: 'Feb 2026' },
              { t: 'Sprints', d: 'Mar – Jun 2026' },
              { t: 'Demo Day', d: 'Jul 2026' },
            ].map((s, i) => (
              <li key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-sm font-semibold">{s.t}</div>
                <div className="text-sm text-gray-700">{s.d}</div>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-[12px] text-gray-500">Exact dates follow the master plan; subject to final university calendars.</p>
        </div>
      </section>

      <section id="benefits" className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-3">Why this path</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">A faster way to learn than a safe ladder</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="font-semibold">Learn to build with AI</div><p className="text-sm text-gray-700 mt-1">Treat AI as leverage across discovery, design and code.</p></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="font-semibold">Founder‑speed, not coursework</div><p className="text-sm text-gray-700 mt-1">Weekly shipping, user feedback, real accountability.</p></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="font-semibold">Network that pays off</div><p className="text-sm text-gray-700 mt-1">Mentors and peers who think bigger than the “iron rice bowl”.</p></div>
          </div>
        </div>
      </section>

      <section id="eligibility" className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-3">Eligibility & Selection</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Who we’re looking for</h2>
          {Accordion({ items: [
            { title: 'Who can apply', body: <ul className="list-disc pl-5 space-y-1"><li>University students (all years, all majors)</li><li>Comfortable learning new tools quickly</li><li>Evidence of initiative (projects, clubs, freelancing)</li></ul> },
            { title: 'Time commitment', body: <p>Designed to fit alongside full‑time study. Expect a steady weekly cadence and a few key milestones.</p> },
            { title: 'Stipend', body: <p>We’ll share details if applicable; learning and portfolio outcomes are primary.</p> },
            { title: 'Cohort cap', body: <p>Selective, small‑group model so mentors can go deep.</p> },
            { title: 'How we decide', body: <p>Signals over grades: shipped work, grit, curiosity, teamwork.</p> },
          ]})}
        </div>
      </section>

      <section id="founders" className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-3">Founders</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Who’s behind Startup Semester</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              { name: 'Liat Beng', url: 'https://www.linkedin.com/in/liatbeng/' },
              { name: 'Victor Nan', url: 'https://www.linkedin.com/in/vicnan/' },
            ].map((f) => (
              <a key={f.name} href={f.url} target="_blank" rel="noopener" className="rounded-2xl border border-gray-200 bg-white p-6 flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gray-100 border border-gray-200" />
                <div>
                  <div className="text-sm font-semibold">{f.name}</div>
                  <p className="text-sm text-gray-700">Builder‑first education for global hustlers.</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="info" className="py-6 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-sm"><span className="font-semibold">Join a 20‑min overview</span> — meet the team, ask anything.</div>
            <a href="#" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold bg-[#D40030] text-white">Register for info session</a>
          </div>
        </div>
      </section>

      <section id="apply" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-semibold">Ready to build for real?</div>
              <p className="text-sm text-gray-700">Apply now — we review applications weekly.</p>
            </div>
            <CTAButtons/>
          </div>
        </div>
      </section>

      <StickyCTA/>

      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-600">© {new Date().getFullYear()} Startup Semester</p>
            <nav className="flex items-center gap-5 text-gray-700">
              <a href="#apply" className="hover:underline">Apply</a>
              <a href="#info" className="hover:underline">Info session</a>
              <a href="/disciples" className="hover:underline">Disciples</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
