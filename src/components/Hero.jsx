import { useState, useEffect } from 'react'
import { ArrowRight, Play, CheckCircle, Network, Camera, Sun, Zap, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "Complete ICT Solutions",
    subtitle: "for Your Business Growth",
    description: "Transform your organization with cutting-edge technology solutions. From network infrastructure to software development.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    icon: Network
  },
  {
    title: "Security & Surveillance",
    subtitle: "Systems You Can Trust",
    description: "Protect what matters most with our advanced CCTV and access control solutions. Authorized Hikvision & Dahua dealer.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80",
    icon: Camera
  },
  {
    title: "Solar PV Solutions",
    subtitle: "Powering a Sustainable Future",
    description: "Harness the power of the sun with our premium solar installations. Reduce costs and go green.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
    icon: Sun
  },
  {
    title: "Electrical Installation",
    subtitle: "Professional & Safe",
    description: "Complete electrical solutions for commercial and residential properties. Safety-compliant installations.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80",
    icon: Zap
  }
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const CurrentIcon = slides[currentSlide].icon

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40"></div>
        </div>
      ))}

      {/* Animated Particles/Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] border border-white/5 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/20">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                <CurrentIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/90 text-sm font-medium">Leading ICT Solutions in East Africa</span>
            </div>
            
            {/* Animated Title */}
            <div className="overflow-hidden mb-4">
              <h1 
                key={currentSlide}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up"
              >
                {slides[currentSlide].title}
                <span className="block mt-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p 
              key={`desc-${currentSlide}`}
              className="text-base sm:text-lg text-white/70 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              {slides[currentSlide].description}
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start">
              {['Quality Assured', 'Expert Team', '24/7 Support', 'Best Prices'].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white/80">
                  <div className="w-5 h-5 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a 
                href="#services" 
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full text-sm font-medium overflow-hidden transition-all hover:shadow-xl hover:shadow-primary-500/30"
              >
                <span className="relative z-10">Explore Services</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/30 hover:bg-white hover:text-gray-900 transition-all"
              >
                <Play className="w-4 h-4" />
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:block">
            <div className="relative space-y-4">
              {/* Service Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group bg-gradient-to-br from-primary-500/20 to-primary-600/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-500/20 hover:border-primary-400/40 transition-all cursor-default">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Network className="w-5 h-5 text-primary-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">ICT Solutions</h4>
                  <p className="text-white/50 text-xs">Network & Infrastructure</p>
                </div>
                
                <div className="group bg-gradient-to-br from-secondary-500/20 to-secondary-600/10 backdrop-blur-sm rounded-2xl p-5 border border-secondary-500/20 hover:border-secondary-400/40 transition-all cursor-default">
                  <div className="w-10 h-10 bg-secondary-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Camera className="w-5 h-5 text-secondary-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">Security Systems</h4>
                  <p className="text-white/50 text-xs">CCTV & Access Control</p>
                </div>
                
                <div className="group bg-gradient-to-br from-amber-500/20 to-amber-600/10 backdrop-blur-sm rounded-2xl p-5 border border-amber-500/20 hover:border-amber-400/40 transition-all cursor-default">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Sun className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">Solar Energy</h4>
                  <p className="text-white/50 text-xs">Sustainable Power</p>
                </div>
                
                <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm rounded-2xl p-5 border border-blue-500/20 hover:border-blue-400/40 transition-all cursor-default">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">Electrical Works</h4>
                  <p className="text-white/50 text-xs">Professional Installation</p>
                </div>
              </div>

              {/* Partner Logos */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <p className="text-white/40 text-xs text-center mb-3">Authorized Partners</p>
                <div className="flex items-center justify-center gap-6">
                  <img src="https://integratedsupplies.net/img/clients/hik.jpg" alt="Hikvision" className="h-8 object-contain rounded bg-white p-1 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://integratedsupplies.net/img/clients/dah.jpg" alt="Dahua" className="h-8 object-contain rounded bg-white p-1 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://integratedsupplies.net/img/clients/zk.jpg" alt="ZKTeco" className="h-8 object-contain rounded bg-white p-1 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://integratedsupplies.net/img/clients/len.jpg" alt="Lenovo" className="h-8 object-contain rounded bg-white p-1 opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-gradient-to-r from-primary-500 to-secondary-500' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      </div>
    </section>
  )
}

export default Hero
