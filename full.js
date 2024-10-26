// File: app/layout.js
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vercel Analytics Demo',
  description: 'Testing Vercel functionalities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

// File: app/page.js
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

// File: app/components/EdgeComponent.js
'use client'

import { useState } from 'react'

export default function EdgeComponent() {
  const [count, setCount] = useState(0)
  const [ageData, setAgeData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCounter = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/edge/counter', { method: 'POST' })
      const data = await response.json()
      setCount(data.count)
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  const handleAgify = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/edge/agify')
      const data = await response.json()
      setAgeData(data)
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2">Counter: {count}</p>
        <button
          onClick={handleCounter}
          disabled={loading}
          className="px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-400"
        >
          Increment (Edge)
        </button>
      </div>
      
      <div>
        <button
          onClick={handleAgify}
          disabled={loading}
          className="px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-400"
        >
          Get Age Data (Edge)
        </button>
        {ageData && (
          <p className="mt-2">
            Name: {ageData.name}, Age: {ageData.age}, Count: {ageData.count}
          </p>
        )}
      </div>
    </div>
  )
}

// File: app/components/ServerlessComponent.js
'use client'

import { useState } from 'react'

export default function ServerlessComponent() {
  const [count, setCount] = useState(0)
  const [ageData, setAgeData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCounter = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/serverless/counter', { method: 'POST' })
      const data = await response.json()
      setCount(data.count)
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  const handleAgify = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/serverless/agify')
      const data = await response.json()
      setAgeData(data)
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2">Counter: {count}</p>
        <button
          onClick={handleCounter}
          disabled={loading}
          className="px-4 py-2 text-white bg-green-500 rounded disabled:bg-gray-400"
        >
          Increment (Serverless)
        </button>
      </div>
      
      <div>
        <button
          onClick={handleAgify}
          disabled={loading}
          className="px-4 py-2 text-white bg-green-500 rounded disabled:bg-gray-400"
        >
          Get Age Data (Serverless)
        </button>
        {ageData && (
          <p className="mt-2">
            Name: {ageData.name}, Age: {ageData.age}, Count: {ageData.count}
          </p>
        )}
      </div>
    </div>
  )
}

// File: app/components/ClientComponent.js
'use client'

import { useState } from 'react'

export default function ClientComponent() {
  const [count, setCount] = useState(0)
  const [ageData, setAgeData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCounter = () => {
    setCount(prev => prev + 1)
  }

  const handleAgify = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://api.agify.io/?name=sai')
      const data = await response.json()
      setAgeData(data)
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2">Counter: {count}</p>
        <button
          onClick={handleCounter}
          className="px-4 py-2 text-white bg-purple-500 rounded"
        >
          Increment (Client)
        </button>
      </div>
      
      <div>
        <button
          onClick={handleAgify}
          disabled={loading}
          className="px-4 py-2 text-white bg-purple-500 rounded disabled:bg-gray-400"
        >
          Get Age Data (Client)
        </button>
        {ageData && (
          <p className="mt-2">
            Name: {ageData.name}, Age: {ageData.age}, Count: {ageData.count}
          </p>
        )}
      </div>
    </div>
  )
}

// File: app/api/edge/counter/route.js
export const runtime = 'edge'

let counter = 0

export async function POST() {
  counter++
  return Response.json({ count: counter })
}

// File: app/api/edge/agify/route.js
export const runtime = 'edge'

export async function GET() {
  const response = await fetch('https://api.agify.io/?name=sai')
  const data = await response.json()
  return Response.json(data)
}

// File: app/api/serverless/counter/route.js
let counter = 0

export async function POST() {
  counter++
  return Response.json({ count: counter })
}

// File: app/api/serverless/agify/route.js
export async function GET() {
  const response = await fetch('https://api.agify.io/?name=sai')
  const data = await response.json()
  return Response.json(data)
}