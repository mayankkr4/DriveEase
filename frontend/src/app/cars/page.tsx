"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const cars = [
  {
    id: 1,
    name: "Mahindra Scorpio N",
    type: "SUV",
    location: "Delhi",
    price: "₹3,500/day",
    image:
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio/mahindra-scorpio-6-1766743994.png?w=520&q=40"
  },
  {
    id: 2,
    name: "Mahindra XUV700",
    type: "SUV",
    location: "Mumbai",
    price: "₹4,200/day",
    image:
      "https://acko-cms.ackoassets.com/2024_XUV_700_a943551b1e.png",
  },
  {
    id: 3,
    name: "Maruti Brezza",
    type: "SUV",
    location: "Bhopal",
    price: "₹2,200/day",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Brezza/10400/1770885013083/front-left-side-47.jpg",
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    type: "SUV",
    location: "Indore",
    price: "₹5,000/day",
    image:
      "https://gaadiwaadi.com/wp-content/uploads/2026/02/Next-Gen-Toyota-Fortuner-Rendered-1260x720.jpg",
  },
  {
    id: 5,
    name: "Hyundai Creta",
    type: "SUV",
    location: "Pune",
    price: "₹2,800/day",
    image:
      "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/Highlights/mob/cretagalleryb1.jpg",
  },
  {
    id: 6,
    name: "Tata Harrier",
    type: "SUV",
    location: "Jaipur",
    price: "₹3,300/day",
    image:
      "https://spn-sta.spinny.com/blog/20230217180351/Harrier-red-1160x769.webp?compress=true&quality=80&w=1200&dpr=2.6",
  },
];

export default function CarsPage() {

    const searchParams = useSearchParams();
  
    const location = searchParams.get("location") || "";  

    const filteredCars = cars.filter((car) => {

        if(location==="") return true;
      
        return car.location.toLowerCase()===location.toLowerCase();
      
      });

  return (
    <div className="bg-gray-100 min-h-screen pt-28">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16">
        <h1 className="text-5xl font-bold text-center">
          Find Your Perfect Car
        </h1>

        <p className="text-center mt-4 text-lg">
          Rent Premium SUVs at Affordable Prices
        </p>
      </div>

      {/* Search */}
      <div className="max-w-6xl mx-auto mt-10 px-5">
        
      </div>

      {/* Cars */}
      <div className="max-w-7xl mx-auto py-12 px-5 grid md:grid-cols-3 gap-8">

        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold">
                  {car.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  {car.type}
                </p>

                <p className="mt-2 text-lg">
                  📍 {car.location}
                </p>

                <p className="text-blue-600 font-bold text-2xl mt-4">
                  {car.price}
                </p>

                <Link href={`/cars/${car.id}`}>
                  <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-20">
            <h2 className="text-4xl font-bold text-red-600">
              🚫 No Cars Available
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              No cars found for "<b>{location}</b>"
            </p>
          </div>
        )}

      </div>
    </div>
  );
}