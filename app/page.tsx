import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/app/comp/Navbar";
import Footer from "@/app/comp/Footer";
import SearchBar from "@/app/comp/SearchBar";

export default async function Home() {
  const { data: stores } = await supabase.from("stores").select("*");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ✅ Navigation Bar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Shop & Donate Cashback 💸
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Earn cashback from your favorite stores and automatically donate a portion to charity.
        </p>
        <div className="max-w-md mx-auto">
          <SearchBar />
        </div>
      </div>

      {/* ✅ Store Grid */}
      <section className="px-8 py-8 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
          {stores?.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
            >
              {/* Store Logo */}
              <div className="flex-1 flex items-center justify-center mb-4">
                <img
                  src={store.logo_url}
                  alt={store.name}
                  className="h-13 w-13 object-contain"
                />
              </div>
              
              {/* Store Info */}
              <div className="text-center w-full">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {store.name}
                </h2>
                <p className="text-green-600 text-base font-bold mb-3">
                  {store.cashback_rate}% cashback
                </p>
                <a
                  href={store.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </main>
  );
}