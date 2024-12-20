'use client'

import { useState } from 'react'

export default function FetchButton() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await response.json()
      setUserData(data)
    } catch (error) {
      console.error('Fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={fetchData}
        className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Fetch User Data
      </button>

      <div className="mt-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">API Data:</h2>
        {loading ? (
          <p>Loading...</p>
        ) : userData ? (
          <div>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Company:</strong> {userData.company.name}</p>
          </div>
        ) : (
          <p>Click the button to load data</p>
        )}
      </div>
    </div>
  )
} 