import { PenSquare } from 'lucide-react';

export function AddressCard() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 border-gray-300"></div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <span>Delivering to -</span>
                <span className="font-medium">123456</span>
                <span className="text-gray-400">|</span>
                <span className="font-medium">9876543210</span>
              </div>
              <p className="text-gray-600">123 Street Name, Apartment 456</p>
              <p className="text-gray-600">CityName, 123456</p>
            </div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <span>edit</span>
              <PenSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
