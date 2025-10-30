import { supabase } from "@/lib/supabaseClient"

export default async function Home() {
  const { data: stores } = await supabase.from("stores").select("*")

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Shop & Donate Cashback 💸
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stores?.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
          >
            <img src={store.logo_url} alt={store.name} className="h-16 mb-4" />
            <h2 className="text-lg font-semibold">{store.name}</h2>
            <p className="text-green-600 mt-2">
              {store.cashback_rate}% cashback
            </p>
            <a
              href={store.redirect_url}
              target="_blank"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Shop Now
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}
