import React from 'react';

const partners = [
  { name: "DIVINE IT", img: "/P-1.webp", desc: "Divine IT Limited is a Bangladeshi information technology company specializing in software development, system integration, and consultancy services. As our corporate partner, they collaborate with Leadswin Limited to provide comprehensive technical support for the Eduman software, including system updates, maintenance, and bug fixes." },
  { name: "SSLCOMMERZ", img: "/P-2.webp", desc: "SSLCOMMERZ is a leading fintech and payment automation company in Bangladesh that provides secure payment gateway services to businesses. As our corporate partner, they collaborate with Leadswin Limited to facilitate digital fee collection and support all types of online transactions with reliability and efficiency." },
  { name: "GUARDIAN LIFE", img: "/P-3.webp", desc: "Guardian Life is one of the leading life insurance companies in Bangladesh, dedicated to ensuring financial protection and well-being for families. As our corporate partner, they collaborate with Leadswin Limited under the EduCare initiative to provide health and educational insurance benefits for students." },
];

const CorporatePartners = () => {
  return (
    <section className=" pb-10 md:pb-20 pt-30 md:pt-40 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-green-800 text-4xl font-bold text-center mb-6 md:mb-16">Our Corporate Partners</h2>
     
        <div className="flex flex-col items-center gap-6 mb-10 md:mb-20">
        
          <div className="flex flex-wrap justify-center gap-6">
            {partners.slice(0, 2).map((partner, index) => (
              <div key={index} className="w-64 h-24 border border-gray-200 rounded-lg shadow-md flex items-center justify-center p-4 bg-white">
                <img src={partner.img} alt={partner.name} className="max-h-full object-contain" />
              </div>
            ))}
          </div>
          

          <div className="w-64 h-24 border border-gray-200 rounded-lg shadow-md flex items-center justify-center p-4 bg-white">
            <img src={partners[2].img} alt={partners[2].name} className="max-h-full object-contain" />
          </div>
        </div>
        <div className="space-y-10">
          {partners.map((partner, index) => (
            <div key={index}>
              <h3 className="text-green-800 text-2xl font-bold mb-3">{partner.name}</h3>
              <p className="text-gray-600 leading-relaxed text-justify">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporatePartners;