import Link from 'next/link'
import FetchButton from '../components/FetchButton'

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        
        <div className="prose mb-8">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
          
          <FetchButton />
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