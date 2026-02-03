
import { CheckCircle, Award, Users, Clock, Target, Eye, Heart } from 'lucide-react'
import Stats from './Stats';

const features = [
  { icon: CheckCircle, text: 'Certified IT Professionals' },
  { icon: Award, text: 'Industry Leading Solutions' },
  { icon: Users, text: 'Dedicated Support Team' },
  { icon: Clock, text: '24/7 Customer Service' },
]

const values = [
  { title: 'Passion', description: 'Driven by excellence in every project' },
  { title: 'Customer Satisfaction', description: 'Your success is our priority' },
  { title: 'Quality', description: 'Delivering world-class solutions' },
  { title: 'TeamWork', description: 'Collaborative approach to success' },
  { title: 'Innovation', description: 'Embracing cutting-edge technology' },
]

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission, Vision, Values */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Brief Look at the ISCL Family
          </h2>
        </div>
        {/* Animated Stats Section */}
        <Stats />

        {/* Mission, Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To Lead the ICT industry in providing quality, reliable products & Solutions to our customers within desired time limits through continuous improvement driven by the integrity, inspiration, innovation and team work of our staff.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                     <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the ideal ICT products & Solution provider in the East & Central Africa by the year 2030.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Our core values are an integral part of our culture and our guiding star: Passion, Customer Satisfaction, Quality, TeamWork & Innovation.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://integratedsupplies.net/img/640x380/team.jpg" 
                alt="ISCL Team" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />

              {/* Floating stats card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-secondary-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">100+</div>
                    <div className="text-gray-600">Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-primary-100 rounded-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Integrated Supplies & Consultancy Limited is a fully fledged company registered 
              and incorporated in Kenya. We offer complete solutions in Information & Communication 
              Technology to non-governmental organizations, government ministries, state corporations, 
              financial institutions, airlines, and the private sector.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We bring a fresh and innovative approach to solutions and services that we offer, 
              by acting as liaisons between the clients and the principal manufacturers. Our goal 
              is to exceed the expectations of every client by offering outstanding customer service, 
              increased flexibility, and greater value, thus optimizing system functionality and 
              improving operation efficiency.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Partner With Us
            </a>
          </div>
        </div>

        {/* Directors Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notes From Directors</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MM
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Moses Mbogoh</h4>
                  <p className="text-gray-600">Managing Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "As the Managing Director of ISCL it is my responsibility to build and maintain a 
                culture which supports our associates in their quest to provide quality Services to 
                their clients. We know our associates make a positive difference in the lives of their 
                clients because they are well trained, have strong values, and work in a firm which 
                believes that 'there is no right way to do a wrong thing'."
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JR
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Josephat Rurii</h4>
                  <p className="text-gray-600">Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "I believe our relationship with our clients is a sacred trust that must be honored. 
                All of our representatives are expected to live by the following pledge: 'I shall in 
                the light of all the circumstances surrounding my client, give him that service which, 
                had I been in the same circumstances, I would have applied to myself.'"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
