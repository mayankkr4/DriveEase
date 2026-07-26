"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const cars = [
  {
    id: "1",
    name: "Mahindra Scorpio N",
    brand: "Mahindra",
    price: "₹3,500/day",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9leFoEgJn2NwNwbOWj1c-VF4LB33-PvSTca9NTwP14Q&s=10",
    gallery: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4u2o3jdbzy9rxbj-RJAGKKWib2zSDkV8i2UJSJj73lw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhMq9PuQ11f5UhTOwUsLOFWMdz0jw-sOdP7TMdbkLhg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkboo-9BpoSXIINyHqEW2saqZ33cwO9kfYKUqYmGdbQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUo8Zo7S2Ro4KzJkWJzS8L53EvrO5ElXGjKUN8HVUhw&s=10",
    ],
    location: "Delhi",
    fuel: "Diesel",
    transmission: "Manual",
    seats: "7",
    mileage: "16 km/l",
    description:
      "Mahindra Scorpio N is a premium SUV perfect for city drives and long road trips with spacious seating and powerful performance.",
  },

  {
    id: "2",
    name: "Mahindra XUV700",
    brand: "Mahindra",
    price: "₹4,200/day",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbw2ZUYl6KzaV-HXPCIni6WsSpwQnSGC1bwunrwza_TA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2smc4z9_v6EWRxQOPjmWfERjhqAsbWsq6ADcqRhcTGw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFoTsFqMhD6Vu4zuVUcvc4DQ0owvn01qPSKwDShR1Nsg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEq_ixRIJlvaiOni5YlIij5aDtuchZR9Nw-F0iu93dCw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZr4AYthzBfnfWxhnQMZfycq4LNXCsUwSftpUHBVaCFw&s=10",
    ],
    location: "Mumbai",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: "7",
    mileage: "17 km/l",
    description:
      "Luxury SUV with ADAS, panoramic sunroof and premium interiors.",
  },

  {
    id: "3",
    name: "Maruti Brezza",
    brand: "Maruti Suzuki",
    price: "₹2,200/day",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3pYO4OYIb708URkV0PfqeLyzzqPDMm4UzuLzB1fLLjQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76r5EpZl2GZI0vIexqzdLSBcS2Rh9QUP57rKhlqFasQ&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnyUkb1My6Y8eNWe57ITMWMfTTHJ1sZm0A8_HWV4DNQ&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfNgmFggQlgLQRMpMuO_c0HFuCSh4y_8bp0uvm14MlQ&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmw8nc2qT35ukwCTmIgMFmOKCR-B9t13mNbzxB9RE9Cw&s=10",
    ],
    location: "Bhopal",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: "5",
    mileage: "20 km/l",
    description:
      "Perfect compact SUV for city driving with excellent mileage.",
  },
  {
    id: "4",
    name: "Toyota Fortuner",
    brand: "Toyota",
    price: "₹5000/day",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_66yRXXRDqNO0Vra6xOxQtvzJ9xERl4pZWq1YVJzjA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgIoXiUcT9X10ypefgTUPBzPdlzarWCKoMt3LdNmNKg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3Lww-KUlHzEBfGrOrqOjqFttXv9VwPB1_MPxVzR8Ew&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLa2OhUMhma3DnyJStv65XzYzQGOPMuBYG9_hTA-3pA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcTf6J-gllHL-fukrHUugw_GB7H0Z-ioOTzcUJfw6UA&s=10",
    ],
    location: "Indore",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: "7",
    mileage: "14.6 km/l",
    description:
      "Perfect compact SUV for city driving with excellent mileage.",
  },
  {
  id: "5",
    name: "Hyundai Creta",
    brand: "Hyundai",
    price: "₹2,800/day",
    image:
      "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/Highlights/mob/cretagalleryb1.jpg",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzEidepJwWwjTY3QIyP0MXVLow4XWgzOf5oxEjed-lQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyvweVi3bsaMGDFch2XH-Kz5wVRQinOabkDiSlrB1SKQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbOjK6sVXfqc-FMg_E-qQ1YG_PXLLdfqW7z-CORr3fg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIrrLeFb_yNowmhiHZeMAuV1XR4e26uwOcWvZqTQDoQ&s=10",
    ],
    location: "pune",
    fuel: "Diesel",
    transmission: "manual",
    seats: "5",
    mileage: "21 km/l",
    description:
      "Perfect compact SUV for city driving with excellent mileage.",
  },
];

export default function CarDetailsPage() {
  const params = useParams();

  const car = cars.find((item) => item.id === params.id);

  if (!car) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-red-600">
          Car Not Found
        </h1>

        <Link href="/cars">
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
            Back to Cars
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      {/* Main Image */}

      <img
        src={car.image}
        alt={car.name}
        className="w-full h-[500px] object-cover rounded-xl"
      />

      {/* Car Info */}

      <div className="mt-8">

        <h1 className="text-5xl font-bold">
          {car.name}
        </h1>

        <p className="text-3xl text-blue-600 font-bold mt-3">
          {car.price}
        </p>

        <p className="mt-6 text-lg text-gray-600">
          {car.description}
        </p>

      </div>

      {/* Specifications */}

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="bg-gray-100 p-5 rounded-lg">
          <h2 className="font-bold text-xl mb-3">
            Specifications
          </h2>

          <p><b>Brand :</b> {car.brand}</p>

          <p><b>Fuel :</b> {car.fuel}</p>

          <p><b>Transmission :</b> {car.transmission}</p>

          <p><b>Seats :</b> {car.seats}</p>

          <p><b>Mileage :</b> {car.mileage}</p>

          <p><b>Pickup :</b> {car.location}</p>

        </div>

        <div className="bg-gray-100 p-5 rounded-lg">

          <h2 className="font-bold text-xl mb-3">
            Features
          </h2>

          <ul className="space-y-2">

            <li>✅ Air Conditioning</li>

            <li>✅ Bluetooth</li>

            <li>✅ GPS Navigation</li>

            <li>✅ Reverse Camera</li>

            <li>✅ Power Steering</li>

            <li>✅ Music System</li>

          </ul>

        </div>

      </div>

      {/* Gallery */}

      <h2 className="text-3xl font-bold mt-12 mb-5">
        Car Gallery
      </h2>

      <div className="grid md:grid-cols-4 gap-5">

        {car.gallery.map((img, index) => (

          <img
            key={index}
            src={img}
            className="rounded-lg h-48 w-full object-cover"
          />

        ))}

      </div>

      {/* Reviews */}

      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">

        <h2 className="text-3xl font-bold mb-5">

          Customer Reviews

        </h2>

        <p>⭐⭐⭐⭐⭐ Amazing SUV for family trip.</p>

        <p className="text-gray-500">
          — Rahul Sharma
        </p>

        <br />

        <p>⭐⭐⭐⭐⭐ Clean vehicle and smooth ride.</p>

        <p className="text-gray-500">
          — Priya Verma
        </p>

      </div>

      {/* Buttons */}

      <div className="mt-12 flex gap-5">

        <Link href="/checkout">

          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg">

            Book Now

          </button>

        </Link>

        <Link href="/cars">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg">

            Back

          </button>

        </Link>

      </div>

    </div>
  );
}