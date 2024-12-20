import Link from 'next/link'

export default function Product({ params }) {
  const productId = params.id

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Product {productId}</h1>
        
        <div className="prose mb-8">
          <p>This is the details page for product #{productId}</p>
        </div>

        <div className="flex gap-4">
          <Link 
            href="/products"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Back to Products
          </Link>
          
          <Link 
            href="/"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
} 