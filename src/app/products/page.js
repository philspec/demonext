import Link from 'next/link'
import ProductForm from '../components/ProductForm'

export default function Products() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        
        <ProductForm />

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