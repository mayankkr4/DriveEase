export default function InsurancePage() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20">
  
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Insurance Details
        </h1>
  
        <div className="space-y-6 text-gray-700 leading-8">
  
          <p>
            Every vehicle listed on DriveEase is insured to provide a safe and
            reliable rental experience.
          </p>
  
          <h2 className="text-2xl font-semibold">
            Insurance Coverage
          </h2>
  
          <ul className="list-disc pl-6">
            <li>Third-Party Liability Coverage</li>
            <li>Accidental Damage Protection</li>
            <li>Theft Protection</li>
            <li>Natural Disaster Coverage</li>
          </ul>
  
          <h2 className="text-2xl font-semibold">
            Customer Responsibility
          </h2>
  
          <p>
            Customers are responsible for following traffic rules and ensuring
            proper use of the rented vehicle. Damages caused by negligence,
            driving under the influence, or illegal activities may not be
            covered by insurance.
          </p>
  
          <h2 className="text-2xl font-semibold">
            Accident Procedure
          </h2>
  
          <ul className="list-disc pl-6">
            <li>Ensure everyone's safety.</li>
            <li>Contact emergency services if required.</li>
            <li>Inform DriveEase immediately.</li>
            <li>Document the incident with photographs.</li>
            <li>Submit all required documents.</li>
          </ul>
  
        </div>
      </div>
    );
  }