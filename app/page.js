'use client'

import EdgeComponent from './components/EdgeComponent'
import ServerlessComponent from './components/ServerlessComponent'
import ClientComponent from './components/ClientComponent'

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Vercel Analytics Demo</h1>
      
      <div className="space-y-8">
        <section className="p-4 border rounded">
          <h2 className="mb-4 text-xl font-semibold">Edge Function Demo</h2>
          <EdgeComponent />
        </section>

        <section className="p-4 border rounded">
          <h2 className="mb-4 text-xl font-semibold">Serverless Function Demo</h2>
          <ServerlessComponent />
        </section>

        <section className="p-4 border rounded">
          <h2 className="mb-4 text-xl font-semibold">Client-side Demo</h2>
          <ClientComponent />
        </section>
      </div>
    </main>
  )
}
