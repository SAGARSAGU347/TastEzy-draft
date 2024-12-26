import { Star } from 'lucide-react'
import Image from "next/image"
import { Sidebar } from "../components/Sidebar"
import { ProductCard } from "../components/product-card"
import { StoreCard } from "../components/store-card"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Favorite Products</h2>
          <ProductCard />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Favorite Storess</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <StoreCard />
            <StoreCard />
          </div>
        </section>
      </main>
    </div>
  )
}

