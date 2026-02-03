const clients = [
  { name: 'Dahua', logo: 'https://integratedsupplies.net/img/clients/dah.jpg' },
  { name: 'Hikvision', logo: 'https://integratedsupplies.net/img/clients/hik.jpg' },
  { name: 'ZKTeco', logo: 'https://integratedsupplies.net/img/clients/zk.jpg' },
  { name: 'Lenovo', logo: 'https://integratedsupplies.net/img/clients/len.jpg' },
  { name: 'Sophos', logo: 'https://integratedsupplies.net/img/clients/sop.png' },
  { name: 'Partner 1', logo: 'https://integratedsupplies.net/img/clients/1.1.png' },
  { name: 'Partner 2', logo: 'https://integratedsupplies.net/img/clients/1.2.png' },
  { name: 'Partner 3', logo: 'https://integratedsupplies.net/img/clients/1.3.png' },
]

const Clients = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Partners & Clients
          </span>
          <h2 className="section-title mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="section-subtitle">
            Our clients are the country's leading organizations in both public and private sectors. 
            Our client references are the strongest testament to the exceptional results we deliver in partnership with them.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200 flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Client Image Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Join Our Growing Client Family
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our clients are the country's leading organisations both in the public and private sector. 
              Our client references are the strongest testament to the exceptional results we deliver 
              in partnership with them.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join our ever growing client family, as we endeavour to build the future today.
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Get Started Today
            </a>
          </div>
          <div>
            <img 
              src="https://integratedsupplies.net/img/970x970/client.jpg" 
              alt="Our Clients"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
