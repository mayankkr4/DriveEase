export default function LocationsPage() {
    const locations = [
      "Delhi",
      "Mumbai",
      "Bhopal",
      "Indore",
      "Pune",
      "Jaipur",
      "Bangalore",
      "Hyderabad",
      "Bihar"
    ];
  
    return (
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Locations
        </h1>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {locations.map((city) => (
            <div
              key={city}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:bg-blue-600 hover:text-white transition"
            >
              <h2 className="text-xl font-semibold">{city}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }