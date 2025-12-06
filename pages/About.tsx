import React from 'react';
import { Target, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* ----------------- HERO HEADER ----------------- */}
      <section className="bg-primaryDark text-white pt-48 pb-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl mb-6">About Sureport Logistics</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Since 2015, we have been bridging the gap between global markets and local businesses with reliable, efficient, and transparent shipping solutions.
          </p>
        </div>
      </section>

      {/* ----------------- OUR STORY & VALUES ----------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
              <h2 className="font-heading font-extrabold text-4xl text-primaryDark mb-6">More Than Just Shipping</h2>
              <div className="space-y-6 text-secondary text-lg leading-relaxed">
                <p>
                  Sureport Logistics began with a simple mission: to make international shipping accessible and hassle-free for everyone. What started as a small courier service has grown into a comprehensive logistics partner serving businesses and individuals across East Africa.
                </p>
                <p>
                  We understand the frustrations of hidden fees, delayed packages, and lack of communication. That's why we built our business on the foundation of <strong>transparency</strong> and <strong>communication</strong>. When you ship with us, you're not just a tracking number; you're a partner.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-3 transform translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Sureport Warehouse Team" 
                className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <ValueCard 
                icon={<Target className="w-8 h-8 text-accent" />}
                title="Mission"
                description="To provide seamless, reliable, and cost-effective logistics solutions that empower businesses to grow and individuals to shop globally without boundaries."
             />
             <ValueCard 
                icon={<Users className="w-8 h-8 text-accent" />}
                title="Customer First"
                description="We prioritize your peace of mind. From real-time updates to dedicated support, we ensure you are informed at every step of the journey."
             />
             <ValueCard 
                icon={<TrendingUp className="w-8 h-8 text-accent" />}
                title="Growth"
                description="We are constantly innovating and expanding our network to offer faster routes, better rates, and smarter technology for our clients."
             />
          </div>
        </div>
      </section>

      {/* ----------------- WHY CHOOSE US ----------------- */}
      <section className="py-24 bg-light relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="font-heading font-extrabold text-4xl text-primaryDark mb-4">Why Businesses Trust Us</h2>
               <p className="text-secondary max-w-2xl mx-auto">We don't just move boxes; we move your business forward.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { title: '99% On-Time', desc: 'Consistent schedules you can plan around.', icon: TrendingUp },
                  { title: 'No Hidden Fees', desc: 'What we quote is exactly what you pay.', icon: ShieldCheck },
                  { title: 'Real-Time Tracking', desc: 'Know where your cargo is 24/7.', icon: Target },
                  { title: 'Secure Warehousing', desc: 'Free consolidation in UK, USA, & China.', icon: Users },
               ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-soft transition-all">
                     <item.icon className="w-10 h-10 text-primary mb-4" />
                     <h3 className="font-bold text-xl text-primaryDark mb-2">{item.title}</h3>
                     <p className="text-secondary text-sm">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-10 rounded-[2rem] shadow-soft border border-gray-50 text-center hover:-translate-y-2 transition-transform duration-300">
     <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
     </div>
     <h3 className="font-heading font-bold text-2xl text-primaryDark mb-4">{title}</h3>
     <p className="text-secondary leading-relaxed">{description}</p>
  </div>
);

export default About;