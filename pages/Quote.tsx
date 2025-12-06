import React, { useState } from 'react';
import { Calculator, ArrowRight, Info, Package } from 'lucide-react';

const Quote: React.FC = () => {
  // Calculator State
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [actualWeight, setActualWeight] = useState<number>(0);

  // Volumetric Weight Calculation (Standard Air Freight: L*W*H / 5000)
  const volumetricWeight = (length * width * height) / 5000;
  const chargeableWeight = Math.max(actualWeight, volumetricWeight);

  return (
    <div className="pt-32 pb-20 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primaryDark mb-6">Get a Shipping Quote</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">Fill out the form below and our team will provide you with a customized shipping quote within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* ----------------- QUOTE FORM ----------------- */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-soft border border-white p-8 md:p-10">
            <h2 className="font-heading font-bold text-2xl text-primaryDark mb-8 flex items-center">
                <span className="bg-blue-50 p-2 rounded-lg mr-3 text-primary">
                    <Package className="w-6 h-6" />
                </span>
                Shipment Details
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-sm font-bold text-secondary mb-2 group-focus-within:text-primary transition-colors">Full Name</label>
                  <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-secondary mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                  <input type="email" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                   <label className="block text-sm font-bold text-secondary mb-2 group-focus-within:text-primary transition-colors">Phone Number</label>
                   <input type="tel" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" placeholder="+254 7XX XXX XXX" />
                </div>
                <div className="group">
                   <label className="block text-sm font-bold text-secondary mb-2 group-focus-within:text-primary transition-colors">Cargo Type</label>
                   <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all">
                      <option>General Goods</option>
                      <option>Electronics</option>
                      <option>Fragile Items</option>
                      <option>Documents</option>
                   </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                   <label className="block text-sm font-bold text-secondary mb-2 group-focus-within:text-primary transition-colors">Origin</label>
                   <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all">
                      <option>Select Origin</option>
                      <option>China (Guangzhou)</option>
                      <option>United Kingdom (London)</option>
                      <option>USA (New York/Delaware)</option>
                      <option>UAE (Dubai)</option>
                   </select>
                </div>
                <div className="group">
                   <label className="block text-sm font-bold text-secondary mb-2">Destination</label>
                   <input type="text" value="Nairobi, Kenya" disabled className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed font-medium" />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-secondary mb-2 group-focus-within:text-primary transition-colors">Description of Goods</label>
                <textarea rows={4} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none" placeholder="Please describe your shipment items in detail..."></textarea>
              </div>

              <button type="submit" className="w-full bg-accent hover:bg-accentHover text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center text-lg transform hover:-translate-y-0.5">
                Submit Request <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* ----------------- WEIGHT CALCULATOR ----------------- */}
          <div className="lg:col-span-1">
            <div className="bg-primaryDark text-white rounded-[2rem] shadow-2xl p-8 sticky top-28 overflow-hidden relative">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <div className="flex items-center space-x-3 mb-8 relative z-10">
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 backdrop-blur-md">
                   <Calculator className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl">Weight Calculator</h3>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 text-sm text-blue-100 flex items-start backdrop-blur-sm">
                 <Info className="w-5 h-5 mr-3 shrink-0 text-accent" />
                 <p className="leading-relaxed">Air freight is charged on the greater of actual weight or volumetric weight.</p>
              </div>

              <div className="space-y-6 relative z-10">
                 <div className="grid grid-cols-3 gap-3">
                    <div>
                       <label className="text-xs font-bold text-blue-200 mb-2 block uppercase tracking-wider">Length</label>
                       <div className="relative">
                           <input 
                            type="number" 
                            value={length || ''} 
                            onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:bg-white/20 transition-all"
                           />
                           <span className="absolute right-2 top-3 text-xs text-white/40 pointer-events-none">cm</span>
                       </div>
                    </div>
                    <div>
                       <label className="text-xs font-bold text-blue-200 mb-2 block uppercase tracking-wider">Width</label>
                       <div className="relative">
                            <input 
                                type="number" 
                                value={width || ''} 
                                onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:bg-white/20 transition-all"
                            />
                            <span className="absolute right-2 top-3 text-xs text-white/40 pointer-events-none">cm</span>
                       </div>
                    </div>
                    <div>
                       <label className="text-xs font-bold text-blue-200 mb-2 block uppercase tracking-wider">Height</label>
                       <div className="relative">
                            <input 
                                type="number" 
                                value={height || ''} 
                                onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:bg-white/20 transition-all"
                            />
                            <span className="absolute right-2 top-3 text-xs text-white/40 pointer-events-none">cm</span>
                       </div>
                    </div>
                 </div>

                 <div>
                    <label className="text-xs font-bold text-blue-200 mb-2 block uppercase tracking-wider">Actual Weight</label>
                    <div className="relative">
                        <input 
                        type="number" 
                        value={actualWeight || ''} 
                        onChange={(e) => setActualWeight(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:bg-white/20 transition-all"
                        />
                        <span className="absolute right-3 top-3 text-xs text-white/40 pointer-events-none">kg</span>
                    </div>
                 </div>

                 <div className="pt-6 border-t border-white/10 space-y-3">
                    <div className="flex justify-between text-sm items-center">
                       <span className="text-blue-200">Volumetric Weight:</span>
                       <span className="font-mono bg-white/10 px-2 py-1 rounded text-xs">{volumetricWeight.toFixed(2)} kg</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold items-center bg-accent/20 p-4 rounded-xl border border-accent/20">
                       <span className="text-white text-base">Chargeable Weight</span>
                       <span className="font-mono text-accent">{chargeableWeight.toFixed(2)} kg</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Quote;