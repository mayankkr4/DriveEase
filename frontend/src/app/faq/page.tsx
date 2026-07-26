export default function FAQPage() {
    const faqs = [
      {
        question: "How do I book a car?",
        answer:
          "Choose your preferred car, select your pickup and drop-off dates, then complete the booking process online.",
      },
      {
        question: "What documents are required?",
        answer:
          "A valid Driving License, Government ID proof, and payment confirmation are required before pickup.",
      },
      {
        question: "Can I cancel my booking?",
        answer:
          "Yes. You can cancel your booking from your dashboard. Cancellation charges may apply depending on the timing.",
      },
      {
        question: "Is fuel included in the rental price?",
        answer:
          "No. Fuel charges are not included unless specifically mentioned in the booking details.",
      },
      {
        question: "Do you provide roadside assistance?",
        answer:
          "Yes. We provide 24/7 roadside assistance for all active rentals.",
      },
      {
        question: "Can I extend my booking?",
        answer:
          "Yes. You can request an extension from your dashboard, subject to vehicle availability.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h1>
  
            <p className="mt-4 text-gray-600 text-lg">
              Everything you need to know about renting a car with DriveEase.
            </p>
          </div>
  
          {/* FAQ Cards */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-blue-600">
                  {faq.question}
                </h2>
  
                <p className="mt-3 text-gray-600 leading-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
  
          {/* Contact Section */}
          <div className="mt-16 bg-blue-600 rounded-2xl text-white p-10 text-center">
            <h2 className="text-3xl font-bold">
              Still have questions?
            </h2>
  
            <p className="mt-3 text-blue-100">
              Our support team is available 24/7 to help you with bookings,
              payments, or any rental-related queries.
            </p>
  
            <a
              href="/contact"
              className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    );
  }