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