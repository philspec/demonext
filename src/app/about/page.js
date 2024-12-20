'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function About() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await response.json()
      console.log('Fetch completed on client side')
      setUserData(data)
    } catch (error) {
      console.error('Fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        
        <div className="prose mb-8">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
          
          <button
            onClick={fetchData}
            className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Fetch User Data
          </button>

          {/* Display fetched data */}
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

        <Link 
          href="/"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
} 