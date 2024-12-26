import Image from "next/image";
import { Star, Upload } from "lucide-react";

export default function OrderTracking() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-screen-lg mx-auto space-y-6">
        {/* Order Header */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm">
              Order Id:{" "}
              <span className="text-blue-600">ajd1323r34e3e3nn4r3322</span>
            </div>
            <button className="flex items-center gap-2 text-orange-500 border border-orange-500 px-4 py-2 rounded-lg">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polyline
                  points="7 10 12 15 17 10"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="12"
                  y1="15"
                  x2="12"
                  y2="3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Download invoice
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <div className="w-16 h-16 relative rounded-lg overflow-hidden">
              <Image
                src="/Delivery.png"
                alt="Restaurant"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium">Andhra Pickle Store</div>
              <div className="text-gray-600">Chicken Pickle (250 g)</div>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-medium mb-4">Delivery Address</h2>
          <div className="space-y-2">
            <div>Jagadeesh Reddy</div>
            <div className="text-gray-600">
              MIG-125, near hostel,<br />
              KPHB Colony, Hyderabad,<br />
              Telangana, 500072
            </div>
            <div className="text-gray-600">Phone Number: 77804xxxx6</div>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="relative">
            <div className="flex justify-between mb-4 flex-wrap">
              <div className="text-center flex-1">
                <div className="text-orange-500 font-medium">Order Confirmed</div>
                <div className="text-sm text-gray-500">19 Nov</div>
              </div>
              <div className="text-center flex-1">
                <div className="font-medium">Shipped</div>
                <div className="text-sm text-gray-500">11 Nov</div>
              </div>
              <div className="text-center flex-1">
                <div className="font-medium">Out for Delivery</div>
                <div className="text-sm text-gray-500">13 Nov</div>
              </div>
              <div className="text-center flex-1">
                <div className="font-medium">Delivered</div>
                <div className="text-sm text-gray-500">13 Nov</div>
              </div>
            </div>
            <div className="relative flex items-center justify-between">
              <div className="h-2 bg-orange-500 absolute left-0 right-0 top-1/2 -translate-y-1/2"></div>
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="w-4 h-4 bg-orange-500 rounded-full relative z-10"
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Rating Section */}
          <div className="bg-white p-4 rounded-lg shadow-md flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Rate the Item:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-gray-300" />
                  ))}
                </div>
              </div>
              <button className="flex items-center gap-2 text-gray-600 border px-4 py-2 rounded-lg">
                <Upload className="w-4 h-4" />
                Upload Images
              </button>
            </div>
            <textarea
              placeholder="Write Review"
              className="w-full h-32 border rounded-lg p-3 resize-none"
            ></textarea>
          </div>

          {/* Bill Invoice */}
          <div className="bg-white p-4 rounded-lg shadow-md flex-1">
            <h2 className="font-medium mb-4">Bill Invoice</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>MRP Total</span>
                <span>₹999</span>
              </div>
              <div className="flex justify-between text-blue-600">
                <span>Discount</span>
                <span>-₹333</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>
              <div className="flex justify-between">
                <span>Handling Fee</span>
                <span className="text-green-600">₹0 Free</span>
              </div>
              <div className="flex justify-between text-blue-600">
                <span>Coupon Discount</span>
                <span>-₹25</span>
              </div>
              <div className="flex justify-between font-medium bg-blue-50 p-2 rounded">
                <span>Grand Total</span>
                <span>₹696</span>
              </div>
              <div className="text-blue-600 text-sm">
                You have saved ₹358 on this order
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
