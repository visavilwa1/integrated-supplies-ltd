import { useState } from 'react'
import { Network, Code, Camera, Sun, Phone, Zap, Car, ArrowRight, ChevronRight, ChevronDown, X } from 'lucide-react'

const services = [
  {
    icon: Network,
    title: 'Networks',
    shortDesc: 'Network infrastructure & administration',
    description: 'Maintaining and administering computer networks and related computing environments including systems software, applications software, hardware, and configurations. We provide end-to-end network solutions for enterprises.',
    features: [
      { name: 'Network Design', desc: 'Expert planning and design of network architecture tailored to your business needs. We create scalable, secure, and efficient network layouts.' },
      { name: 'Infrastructure Setup', desc: 'Complete installation and configuration of routers, switches, firewalls, and servers. We ensure optimal performance and reliability.' },
      { name: 'Maintenance & Support', desc: 'Ongoing network monitoring, troubleshooting, and maintenance services. Our 24/7 support keeps your systems running smoothly.' },
      { name: 'Security Implementation', desc: 'Robust security measures including firewalls, VPNs, intrusion detection, and encryption to protect your network from threats.' }
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Code,
    title: 'Software Solutions',
    shortDesc: 'Custom software development',
    description: 'Offering software solutions by studying information needs, conferring with users, and analyzing systems flow, data usage, and work processes. We develop tailored applications to meet your specific business requirements.',
    features: [
      { name: 'Custom Development', desc: 'Bespoke software applications built from scratch to address your unique business challenges and workflow requirements.' },
      { name: 'System Integration', desc: 'Seamlessly connect your existing systems and applications for improved data flow and operational efficiency.' },
      { name: 'Database Solutions', desc: 'Design, implementation, and optimization of databases for secure and efficient data storage and retrieval.' },
      { name: 'Technical Support', desc: 'Comprehensive software maintenance, updates, and technical assistance to keep your applications running optimally.' }
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: Camera,
    title: 'Surveillance Systems',
    shortDesc: 'CCTV & security monitoring',
    description: 'Installing and maintaining surveillance systems with monitoring equipment and comprehensive security solutions. We are authorized dealers for Hikvision and Dahua, providing world-class security infrastructure.',
    features: [
      { name: 'CCTV Installation', desc: 'Professional installation of high-definition cameras with optimal placement for maximum coverage and security monitoring.' },
      { name: 'Access Control', desc: 'Biometric systems, card readers, and smart locks to manage and restrict access to your premises securely.' },
      { name: 'Remote Monitoring', desc: 'View your security feeds from anywhere using mobile apps and web portals. Real-time alerts and notifications.' },
      { name: '24/7 Support', desc: 'Round-the-clock technical support and emergency response for all your security system needs.' }
    ],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-500',
    lightBg: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    icon: Sun,
    title: 'Solar PV',
    shortDesc: 'Renewable energy solutions',
    description: 'Solar cells and modules from top manufacturers, providing world-class renewable energy solutions. We partner with leading solar technology providers to deliver efficient and sustainable power systems.',
    features: [
      { name: 'Solar Installation', desc: 'Complete solar panel installation for residential and commercial properties. Grid-tied and off-grid solutions available.' },
      { name: 'System Design', desc: 'Custom solar system design based on your energy needs, roof structure, and budget. Maximize your energy savings.' },
      { name: 'Maintenance', desc: 'Regular cleaning, inspection, and maintenance to ensure optimal solar panel performance and longevity.' },
      { name: 'Energy Consultation', desc: 'Expert advice on energy efficiency, system sizing, ROI calculations, and available incentives.' }
    ],
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500',
    lightBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600'
  },
  {
    icon: Phone,
    title: 'Data & Voice',
    shortDesc: 'Communication infrastructure',
    description: 'Proactive experts in data and voice design, building stunning and rewarding digital communication experiences. We specialize in modern telephony and unified communication systems.',
    features: [
      { name: 'VoIP Solutions', desc: 'Internet-based phone systems that reduce costs and increase flexibility. Crystal-clear voice quality and advanced features.' },
      { name: 'PBX Systems', desc: 'Private branch exchange systems for efficient internal and external communication management.' },
      { name: 'Data Cabling', desc: 'Structured cabling for high-speed data transmission. Cat6, Cat6a, and fiber optic installations.' },
      { name: 'Communication Setup', desc: 'Complete unified communication solutions including video conferencing and collaboration tools.' }
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-500',
    lightBg: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: Zap,
    title: 'Electrical Installation',
    shortDesc: 'Complete electrical solutions',
    description: 'Complete electrical installation including cabling, switches, distribution boards, sockets, and light fittings. All wiring is subject to safety standards for design and installation.',
    features: [
      { name: 'Wiring & Cabling', desc: 'Professional electrical wiring for new constructions and renovations. High-quality materials and expert workmanship.' },
      { name: 'Distribution Boards', desc: 'Installation and upgrade of electrical distribution boards with proper circuit protection and labeling.' },
      { name: 'Safety Compliance', desc: 'All installations comply with Kenya Bureau of Standards and international electrical safety regulations.' },
      { name: 'Maintenance', desc: 'Regular electrical inspections, testing, and maintenance to ensure safety and prevent failures.' }
    ],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-500',
    lightBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600'
  },
  {
    icon: Car,
    title: 'Parking Management',
    shortDesc: 'Smart parking solutions',
    description: 'Access control systems, revenue management, security systems, boom barriers, and statistical information solutions. We provide complete parking management infrastructure for commercial properties.',
    features: [
      { name: 'Access Control', desc: 'Automated entry and exit systems with ticket dispensers, RFID readers, and license plate recognition.' },
      { name: 'Boom Barriers', desc: 'Durable automatic boom barriers with various arm lengths and speeds for different traffic volumes.' },
      { name: 'Revenue Systems', desc: 'Integrated payment systems including cash, card, and mobile payment options with detailed reporting.' },
      { name: 'Analytics', desc: 'Real-time occupancy tracking, usage statistics, and revenue reports for informed decision-making.' }
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-500',
    lightBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  }
]

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  const [expandedFeature, setExpandedFeature] = useState(null)

  const toggleFeature = (idx) => {
    setExpandedFeature(expandedFeature === idx ? null : idx)
  }

  const handleServiceChange = (index) => {
    setActiveService(index)
    setExpandedFeature(null)
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete ICT Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solutions in Information & Communication Technology 
            to organizations across Kenya, from government ministries to private sector enterprises.
          </p>
        </div>

        {/* Services Interactive Display - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-16">
          {/* Service Tabs */}
          <div className="col-span-4 space-y-3">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceChange(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                  activeService === index 
                    ? 'bg-white shadow-lg border-l-4 border-primary-600' 
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  activeService === index ? service.bgColor : service.lightBg
                }`}>
                  <service.icon className={`w-6 h-6 ${activeService === index ? 'text-white' : service.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${activeService === index ? 'text-gray-900' : 'text-gray-700'}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">{service.shortDesc}</p>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${
                  activeService === index ? 'text-primary-600 translate-x-1' : 'text-gray-400'
                }`} />
              </button>
            ))}
          </div>

          {/* Service Detail */}
          <div className="col-span-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full">
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${services[activeService].color}`}>
                  {(() => {
                    const Icon = services[activeService].icon
                    return <Icon className="w-8 h-8 text-white" />
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{services[activeService].title}</h3>
                  <p className="text-gray-600">{services[activeService].shortDesc}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="space-y-3 mb-6">
                {services[activeService].features.map((feature, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFeature(idx)}
                      className={`w-full flex items-center justify-between p-4 text-left transition-all ${
                        expandedFeature === idx ? 'bg-gray-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color}`}></div>
                        <span className="text-gray-800 font-medium">{feature.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${
                        expandedFeature === idx ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {expandedFeature === idx && (
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-gray-600 text-sm pl-5 border-l-2 border-primary-200 ml-1">
                          {feature.desc}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg transition-all group"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Services Grid - Mobile */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              <div className={`w-14 h-14 ${service.lightBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.shortDesc}</p>
              <a href="#contact" className="inline-flex items-center text-primary-600 font-semibold text-sm group/link">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to design and implement a tailored solution for your organization. 
              Contact us today for a free consultation.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all group">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
