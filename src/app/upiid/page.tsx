import { Sidebar } from "../components/Sidebar";
import { Trash2 } from "lucide-react";

export default function SavedPayments() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-gray-100 border-r border-gray-300 md:relative">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 bg-gray-50">
        {/* Saved UPI IDs Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Saved UPI IDs</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-3 rounded shadow-md">
              <span>jagadeesh@ybl</span>
              <button className="text-gray-400 hover:text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded shadow-md">
              <span>jagadeesh@ybl</span>
              <button className="text-gray-400 hover:text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Saved Cards Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Saved Cards</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-3 rounded shadow-md">
              <div>
                <h3 className="font-medium">HDFC Bank</h3>
                <p className="text-gray-500 text-sm">**** **** **** 1234</p>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded shadow-md">
              <div>
                <h3 className="font-medium">HDFC Bank</h3>
                <p className="text-gray-500 text-sm">**** **** **** 4321</p>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
