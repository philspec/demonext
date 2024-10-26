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
