import { MapPin, PenSquare } from 'lucide-react'
import { Sidebar } from "../app/components/Sidebar"
import { AddressCard } from "../app/components/adress-card"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="bg-green-600 text-white p-4 rounded-lg mb-6 flex items-center gap-3">
          <MapPin className="w- h-6" />
          <h1 className="text-xl font-semibold">Saved address's</h1>
        </div>

        <div className="space-y-4">
          <AddressCard 
            isSelected
            pincode="507303"
            phone="7780417876"
            address="mig - 85, Sathpally, khammam,"
            city="Hyderabad, telengana"
            postalCode="500072"
          />
          
          <AddressCard 
            pincode="507303"
            phone="7757473773"
            address="mig - 85, Sathpally, khamm..."
          />

          <button className="w-full bg-white rounded-lg p-4 text-gray-600 flex items-center gap-3 hover:bg-gray-50 transition-colors border">
            <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
            Add new delivery Address
          </button>
        </div>
      </main>
    </div>
  )
}

