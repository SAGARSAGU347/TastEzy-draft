import { CircleUser, ShoppingBag, MapPin, Heart, CreditCard, HeadphonesIcon, FileText } from 'lucide-react'
import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white">
      <nav className="flex flex-col">
        <Link 
          href="#" 
          className="flex items-center gap-3 p-4 border-b hover:bg-gray-50"
        >
          <CircleUser className="w-5 h-5" />
          <span>Profile</span>
        </Link>
        
        <Link 
          href="#" 
          className="flex items-center gap-3 p-4 border-b hover:bg-gray-50"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Orders</span>
        </Link>
        
        <Link 
          href="#" 
          className="flex items-center gap-3 p-4 border-b hover:bg-gray-50"
        >
          <MapPin className="w-5 h-5" />
          <span>Address</span>
        </Link>
        
        <Link 
          href="#" 
          className="flex items-center gap-3 p-4 border-b hover:bg-gray-50"
        >
       
          <Heart className="w-5 h-5" />
          <span>favorite</span>
        </Link>
        
        <Link 
          href="#" 
          className="flex items-center gap-3 p-4 border-b hover:bg-gray-50"
        >
          <CreditCard className="w-5 h-5" />
          <span>Saved Payments</span>
        </Link>
        
        <Link 
          href="#" 
          className="flex items-center gap-3 p-4 border-b hover:bg-gray-50"
        >
          <HeadphonesIcon className="w-5 h-5" />
          <span>Customer Care</span>
        </Link>
        
        <Link 
          href="#" 
          className="flex items-center gap-3 p-4 border-b hover:bg-gray-50"
        >
          <FileText className="w-5 h-5" />
          <span>General terms</span>
        </Link>
      </nav>
    </aside>
  )
}

