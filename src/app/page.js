

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [productId, setProductId] = useState('')

  useEffect(() => {
    console.log('Home page opened')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (productId) {
      window.location.href = `/products/${productId}`
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <h1 className="text-4xl font-bold">Welcome to Demo Next</h1>
      
      <nav className="flex flex-col gap-4 items-center">
        <Link 
          href="/about"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          About Us
        </Link>
        
        <Link 
          href="/products"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Products
        </Link>
      </nav>
    </div>
  )
}
