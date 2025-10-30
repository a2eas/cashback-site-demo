"use client";

type OfferProps = {
  name: string;
  cashback: string;
  logo: string;
};

export default function OfferCard({ name, cashback, logo }: OfferProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <img src={logo} alt={name} className="h-12 w-12 object-contain mb-3" />
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-blue-600 font-bold mt-1">{cashback} cashback</p>
    </div>
  );
}
