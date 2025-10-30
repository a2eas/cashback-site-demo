"use client";

export default function SearchBar() {
  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <input
        type="text"
        placeholder="Search for a store or brand..."
        className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
