import { Star } from 'lucide-react'
import Image from "next/image"



export function ProductCard() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex gap-16">
        <div className="relative w-64 h-64">
          <Image src="/pcikle.jpg"
            alt="Chicken Pickle"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div>
          <p className="text-gray-600 mb-1 flex items-center gap-4">
  Andhra pickle Store 
  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
  <span className="font-semibold">4.8</span>
  <span className="text-gray-500">(2132)</span>
</p>
<br/>
            <h3 className="text-2xl font-semibold mb-2">Chicken Pickle(250 g)</h3>
            <div className="flex items-center gap-2 mb-4">
             
            </div>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">₹329</span>
              <span className="text-gray-500 line-through">₹749</span>
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">30% OFF</span>
            </div>
          </div>
          <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors "style={{width: "20%"}}>
            Move to cart
          </button>
        </div>
      </div>
    </div>
  )
}

