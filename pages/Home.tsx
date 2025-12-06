import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, Ship, ShieldCheck, ArrowRight, 
  CheckCircle, Globe2, Package, Search, Map as MapIcon,
  MessageCircle, MapPin, ShoppingBag, Truck, Home as HomeIcon
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ShipmentUpdate } from '../types';

const updates: ShipmentUpdate[] = [
  { id: '1', message: 'Shipment #SP-8921 cleared customs', location: 'JKIA Nairobi', timestamp: 'Just now', type: 'customs' },
  { id: '2', message: 'Container #CN-221 departed port', location: 'Hamburg, DE', timestamp: '2 mins ago', type: 'departure' },
  { id: '3', message: 'Delivery completed for #SP-1102', location: 'Westlands, KE', timestamp: '5 mins ago', type: 'delivery' },
  { id: '4', message: 'Cargo Flight TK-445 landed', location: 'Dubai, UAE', timestamp: '12 mins ago', type: 'arrival' },
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'individual' | 'business'>('individual');
  const [currentUpdateIndex, setCurrentUpdateIndex] = useState(0);
  const location = useLocation();

  // Handle scroll from navigation state
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const elementId = (location.state as any).scrollTo;
      const element = document.getElementById(elementId);
      if (element) {
        // Small timeout to ensure DOM is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Rotating updates effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdateIndex((prev) => (prev + 1) % updates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative min-h-[95vh] flex items-center pt-32 overflow-hidden">
        {/* Background Wrapper */}
        <div className="absolute inset-0 z-0 bg-primaryDark">
           {/* 
              Brand Hero Image 
           */}
           <img 
            src="/hero-img.png"
            alt="Sureport Logistics Global Network" 
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
           />
           
           {/* Gradient Overlays for Text Readability */}
           {/* Heavy dark gradient on left for text, transparent on right to show image */}
           <div className="absolute inset-0 bg-gradient-to-r from-primaryDark via-primaryDark/90 to-transparent"></div>
           
           {/* Subtle bottom gradient to blend with next section */}
           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
           
           {/* Noise texture for depth */}
           <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-orange-300 text-sm font-bold mb-8 border border-white/20 shadow-lg">
                <span className="flex h-2 w-2 relative mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Global Reach, Local Expertise
              </div>
              <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 tracking-tight drop-shadow-sm">
                Your All-Round <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Logistics Partner</span>
              </h1>
              <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light shadow-black/5 drop-shadow-md">
                Seamless shipping solutions from cargo financing to door-to-door delivery. We handle everything with care and precision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote" className="bg-accent hover:bg-accentHover text-white px-8 py-4 rounded-full font-heading font-bold text-lg shadow-xl shadow-orange-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                {/* Whatsapp Button */}
                <a 
                  href="https://wa.me/254704515905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-heading font-bold text-lg shadow-xl shadow-green-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center group w-full sm:w-auto"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Hero Interactive Element (Live Stats) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative lg:mt-20"
            >
              {/* Added opacity/glass effect so the background image can be seen through slightly */}
              <div className="glass-panel-dark rounded-3xl p-8 relative overflow-visible border border-white/20 shadow-2xl backdrop-blur-xl bg-primaryDark/40 z-10">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
                
                <h3 className="text-white font-heading font-bold text-xl mb-6 flex items-center border-b border-white/10 pb-4">
                  <Globe2 className="w-5 h-5 mr-3 text-accent" />
                  Live Operations
                </h3>

                <div className="space-y-4">
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={updates[currentUpdateIndex].id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-inner hover:bg-white/15 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl backdrop-blur-sm ${
                            updates[currentUpdateIndex].type === 'arrival' ? 'bg-green-500/20 text-green-300' : 
                            updates[currentUpdateIndex].type === 'departure' ? 'bg-blue-500/20 text-blue-300' :
                            'bg-orange-500/20 text-orange-300'
                          }`}>
                            <Package className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-bold text-white text-sm tracking-wide">{updates[currentUpdateIndex].message}</p>
                            <p className="text-xs text-gray-300 mt-1 font-medium flex items-center">
                               <MapIcon className="w-3 h-3 mr-1" /> {updates[currentUpdateIndex].location}
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-white/80 bg-white/10 px-2 py-1 rounded-md">
                          {updates[currentUpdateIndex].timestamp}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                     <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-5 text-center group hover:border-accent/30 transition-colors backdrop-blur-sm">
                        <p className="text-3xl font-heading font-extrabold text-white group-hover:text-accent transition-colors">50+</p>
                        <p className="text-xs text-gray-300 uppercase font-bold tracking-widest mt-2">Countries</p>
                     </div>
                     <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-5 text-center group hover:border-accent/30 transition-colors backdrop-blur-sm">
                        <p className="text-3xl font-heading font-extrabold text-accent">99%</p>
                        <p className="text-xs text-gray-300 uppercase font-bold tracking-widest mt-2">Success Rate</p>
                     </div>
                  </div>
                </div>

                {/* Animated Truck Element - "Doing a delivery" */}
                <motion.img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/delivery-truck-5482635-4570535.png?f=webp"
                  alt="Delivery Truck"
                  className="absolute -bottom-16 -left-20 w-56 z-20 drop-shadow-2xl pointer-events-none"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    y: [0, -6, 0] // Gentle bobbing animation
                  }}
                  transition={{
                    x: { duration: 1.2, ease: "easeOut", delay: 0.6 },
                    opacity: { duration: 1, delay: 0.6 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----------------- HOW IT WORKS ----------------- */}
      <section className="py-24 bg-white relative" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-accent font-bold tracking-[0.2em] text-sm uppercase mb-3">Simple Process</h2>
              <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-primaryDark">How It Works</h3>
              <p className="text-secondary mt-4 max-w-2xl mx-auto">Get your goods delivered in 4 simple steps.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10"></div>

              {[
                { 
                  icon: <MapPin className="w-8 h-8 text-white" />, 
                  title: 'Get Address', 
                  desc: 'Sign up and get your free warehouse address in UK, USA, China, or Dubai.' 
                },
                { 
                  icon: <ShoppingBag className="w-8 h-8 text-white" />, 
                  title: 'Shop Online', 
                  desc: 'Shop from your favorite stores and use our warehouse address at checkout.' 
                },
                { 
                  icon: <Plane className="w-8 h-8 text-white" />, 
                  title: 'We Ship', 
                  desc: 'We receive your items, consolidate them, and ship via air or sea freight.' 
                },
                { 
                  icon: <HomeIcon className="w-8 h-8 text-white" />, 
                  title: 'We Deliver', 
                  desc: 'Clear customs and deliver directly to your doorstep in Kenya.' 
                }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                     <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-inner">
                        {step.icon}
                     </div>
                     <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white">
                       {idx + 1}
                     </div>
                  </div>
                  <h4 className="font-heading font-bold text-xl text-primaryDark mb-3">{step.title}</h4>
                  <p className="text-secondary text-sm leading-relaxed px-4">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ----------------- TAILORED SOLUTIONS ----------------- */}
      <section className="py-32 bg-light relative" id="services">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold tracking-[0.2em] text-sm uppercase mb-3">Tailored Solutions</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-primaryDark">Services Designed for You</h3>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full shadow-soft border border-gray-100 inline-flex">
              {['individual', 'business'].map((tab) => (
                <button 
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                    activeTab === tab ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-primary'
                    }`}
                >
                    For {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeTab === 'individual' ? (
              <>
                <ServiceCard 
                    icon={<Package className="w-8 h-8" />} 
                    title="Personal Shopping" 
                    desc="Shop from Amazon, Zara, or any global store. Use our warehouse addresses in UK, USA, or China and we'll deliver to your doorstep."
                    features={['Shop from any store', 'Consolidation available', 'Pay in local currency']}
                    link="/quote"
                    cta="Start Shipping"
                />
                 <ServiceCard 
                    icon={<Plane className="w-8 h-8" />} 
                    title="Express Air Freight" 
                    desc="Need it fast? Our weekly air freight departures ensure your packages arrive within 3-5 business days."
                    features={['Weekly departures', 'Real-time tracking', 'Inclusive clearing']}
                    link="/quote"
                    cta="Get Rates"
                />
              </>
            ) : (
              <>
                 <ServiceCard 
                    icon={<Ship className="w-8 h-8" />} 
                    title="Sea Freight & Containers" 
                    desc="Cost-effective solutions for bulk imports. We handle FCL and LCL with expert customs clearance."
                    features={['Competitive volume rates', 'Port-to-Door service']}
                    link="/quote"
                    cta="Request Quote"
                    isBusiness
                />
                 <ServiceCard 
                    icon={<ShieldCheck className="w-8 h-8" />} 
                    title="Cargo Financing" 
                    desc="Don't let capital constrain your growth. We offer financing for your cargo and duties."
                    features={['Quick approval', 'Flexible repayment']}
                    link="/quote"
                    cta="Learn More"
                    isBusiness
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ----------------- GLOBAL NETWORK (MAP) ----------------- */}
      <section className="py-24 bg-white relative overflow-hidden" id="tracking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-primaryDark font-heading font-extrabold text-3xl md:text-4xl mb-4">Our Global Network</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              With warehouses and partners across the globe, we ensure your cargo moves seamlessly from origin to destination.
            </p>
          </div>

          <div className="relative w-full h-[450px] md:h-[600px] bg-gradient-to-b from-blue-50 to-white rounded-[2.5rem] border border-blue-100 flex items-center justify-center overflow-hidden shadow-inner">
            {/* Map Image */}
            <div 
                className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-no-repeat bg-center mix-blend-multiply"
                style={{ filter: 'grayscale(100%) opacity(0.5)' }}
            ></div>

            {/* Map Points */}
            <MapPoint top="28%" left="49%" label="London Hub" />
            <MapPoint top="42%" left="58%" label="Dubai Hub" />
            <MapPoint top="35%" left="75%" label="Guangzhou Hub" />
            <MapPoint top="32%" left="25%" label="New York Hub" />
            
            {/* HQ */}
            <div className="absolute top-[55%] left-[56%] group cursor-pointer z-30">
              <div className="relative w-6 h-6 bg-primary rounded-full box-content border-4 border-white shadow-xl flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-primaryDark text-white font-bold text-xs px-4 py-2 rounded-full shadow-xl whitespace-nowrap z-20">
                  Nairobi HQ
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primaryDark rotate-45"></div>
              </div>
            </div>

            {/* Decorative Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
               <path d="M750,210 Q650,400 560,330" fill="none" stroke="#F47C20" strokeWidth="2" strokeDasharray="6,4" className="hidden lg:block animate-pulse"/> 
               <path d="M580,250 Q570,300 560,330" fill="none" stroke="#F47C20" strokeWidth="2" strokeDasharray="6,4" className="hidden lg:block animate-pulse"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ----------------- SECURITY & COMPLIANCE ----------------- */}
      <section className="py-24 bg-primaryDark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-6">Security & Customs Compliance</h2>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                   We operate with total transparency. Every shipment undergoes rigorous screening before leaving origin and is cleared by licensed KRA agents in Nairobi. We don't cut corners on compliance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="flex items-start">
                      <div className="bg-white/10 p-3 rounded-xl mr-4">
                        <ShieldCheck className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                         <h5 className="font-bold text-lg">KRA Compliant</h5>
                         <p className="text-sm text-gray-400 mt-1">Full documentation provided for all imports.</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <div className="bg-white/10 p-3 rounded-xl mr-4">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                         <h5 className="font-bold text-lg">Secure Warehousing</h5>
                         <p className="text-sm text-gray-400 mt-1">24/7 monitored facilities globally.</p>
                      </div>
                   </div>
                </div>
                <div className="mt-12">
                   <Link to="/prohibited" className="bg-white text-primaryDark px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block shadow-lg">
                      View Prohibited Items
                   </Link>
                </div>
              </div>
              <div className="relative">
                 <div className="glass-panel-dark p-8 rounded-3xl border border-white/20">
                    <h3 className="font-heading font-bold text-xl mb-6 flex items-center text-white">
                       <ShieldCheck className="mr-3 text-green-400" /> Compliance Checklist
                    </h3>
                    <ul className="space-y-4">
                       {['Proper Invoice Declaration', 'KRA Pin Validation', 'Safety Standards Check', 'Restricted Items Screening'].map((item, i) => (
                          <li key={i} className="flex items-center justify-between bg-black/20 p-4 rounded-xl border border-white/5">
                             <span className="font-medium text-gray-200">{item}</span>
                             <div className="bg-green-500/20 p-1 rounded-full">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                             </div>
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ----------------- CTA SECTION ----------------- */}
      <section className="py-24 bg-white" id="contact">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primaryDark mb-6">Ready to Ship with Sureport?</h2>
            <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers who trust us with their logistics needs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/quote" className="bg-accent hover:bg-accentHover text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1">
                  Get a Free Quote
               </Link>
               <button className="bg-white text-primaryDark border-2 border-primaryDark/10 hover:border-primaryDark hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-lg transition-all">
                  Contact Support
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

// Sub-components for cleaner code
const MapPoint = ({ top, left, label }: { top: string, left: string, label: string }) => (
    <div className="absolute group cursor-pointer" style={{ top, left }}>
        <div className="map-dot"></div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white text-primaryDark font-bold text-xs px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 translate-y-2 group-hover:translate-y-0 border border-gray-100">
            {label}
        </div>
    </div>
);

const ServiceCard = ({ icon, title, desc, features, link, cta, isBusiness }: any) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-soft hover:border-blue-100 transition-all duration-300 group"
    >
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${isBusiness ? 'bg-orange-50 text-accent group-hover:bg-accent group-hover:text-white' : 'bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white'}`}>
            {icon}
        </div>
        <h4 className="font-heading text-2xl font-bold text-primaryDark mb-4">{title}</h4>
        <p className="text-secondary leading-relaxed mb-8">{desc}</p>
        <ul className="space-y-3 mb-8">
            {features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center text-secondary font-medium text-sm">
                    <CheckCircle className={`w-5 h-5 mr-3 ${isBusiness ? 'text-accent' : 'text-primary'}`} /> 
                    {feature}
                </li>
            ))}
        </ul>
        <Link to={link} className={`font-bold hover:underline inline-flex items-center ${isBusiness ? 'text-accent' : 'text-primary'}`}>
            {cta} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"/>
        </Link>
    </motion.div>
);

export default Home;