import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight">Startup Semester</div>
          <nav className="flex items-center gap-6 text-sm">
            <Link className="hover:underline" href="/disciples">Disciples</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Build like a founder while you’re still in uni.</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          A selective, hands-on programme where students research, design and ship to real users with mentors.
        </p>
        <div className="mt-6 flex gap-3">
          <a className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold bg-[#D40030] text-white" href="#apply">Apply</a>
          <a className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold border border-gray-200" href="#info">Register for info session</a>
        </div>
        <div className="mt-8 rounded-xl border border-gray-200 p-4">
          <p className="text-sm">Psst — Employers: looking to hire student builders? Visit <Link className="underline" href="/disciples">Disciples</Link>.</p>
        </div>
      </section>
    </main>
  )
}
