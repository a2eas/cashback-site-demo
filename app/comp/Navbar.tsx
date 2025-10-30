"use client";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">CashBack+</h1>

      <div className="flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Stores</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Offers</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Profile</a>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Sign In
      </button>
    </nav>
  );
}
