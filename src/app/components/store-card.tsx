import { Star } from 'lucide-react';
import Image from 'next/image';

export function StoreCard() {
  return (
    <div className="bg-white rounded-lg overflow-hidden col-4">
      <div className="relative w-full h-48"> {/* Ensure height for the relative container */}
        <Image
          src="/pro.png" // Path to your image in the public folder
          alt="Store Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Andhra Pickles & Snacks</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">4.8</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>starts from ₹299</span>
          <span>best seller</span>
        </div>
      </div>
    </div>
  );
}
