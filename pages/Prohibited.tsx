import React from 'react';
import { AlertTriangle, Search, XCircle, Ban } from 'lucide-react';
import { ProhibitedItem } from '../types';

const prohibitedList: ProhibitedItem[] = [
  { category: 'Flammable Items', items: ['Perfumes (Alcohol-based)', 'Nail Polish', 'Lighters/Matches', 'Aerosol Cans'] },
  { category: 'Batteries & Electronics', items: ['Loose Lithium Batteries', 'Power Banks (Over 100Wh)', 'Defective Electronics'] },
  { category: 'Weapons', items: ['Firearms', 'Ammunition', 'Knives', 'Tactical Gear'] },
  { category: 'Drugs & Medicine', items: ['Illegal Narcotics', 'Prescription Drugs (without prescription)', 'Supplements (Unlabeled)'] },
  { category: 'Currency', items: ['Cash', 'Counterfeit Money', 'Blank Checks'] },
  { category: 'Perishables', items: ['Fresh Meat', 'Dairy Products', 'Vegetables'] },
];

const Prohibited: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredList = prohibitedList.map(cat => ({
    ...cat,
    items: cat.items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(cat => cat.items.length > 0);

  return (
    <div className="pt-32 pb-20 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center p-4 bg-red-100/50 rounded-full text-red-600 mb-6 border border-red-100">
              <Ban className="w-10 h-10" />
           </div>
          <h1 className="font-heading font-extrabold text-4xl text-primaryDark mb-4">Prohibited & Restricted Items</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
             To ensure safe and legal shipping, please review the list of items that cannot be shipped through Sureport Logistics.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative">
           <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
           </div>
           <input 
              type="text" 
              placeholder="Search for an item (e.g., Perfume, Batteries)..." 
              className="w-full pl-14 pr-6 py-5 rounded-full border border-gray-200 shadow-soft focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-lg transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredList.map((category, index) => (
              <div key={index} className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100 p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                 <h3 className="font-heading font-bold text-lg text-primaryDark mb-6 flex items-center">
                    <div className="bg-red-50 p-2 rounded-lg mr-3">
                        <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                    {category.category}
                 </h3>
                 <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                       <li key={idx} className="flex items-start text-secondary text-sm bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 mr-3 shrink-0"></span>
                          <span className="font-medium">{item}</span>
                       </li>
                    ))}
                 </ul>
              </div>
           ))}
        </div>

        {filteredList.length === 0 && (
           <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">No items found matching "{searchTerm}"</p>
              <p className="text-gray-400 text-sm mt-2">Try searching for something else or contact support.</p>
           </div>
        )}

        <div className="mt-20 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[2rem] p-10 text-center shadow-sm">
           <h4 className="font-heading font-bold text-primaryDark text-2xl mb-3">Not sure about an item?</h4>
           <p className="text-secondary mb-8 text-lg">Contact our support team before shipping to avoid delays or confiscation.</p>
           <a href="mailto:info@sureportlogistics.com" className="inline-flex items-center justify-center bg-white text-primaryDark border border-gray-200 px-8 py-3 rounded-full font-bold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                Contact Support <div className="w-2 h-2 bg-green-500 rounded-full ml-3 animate-pulse"></div>
           </a>
        </div>
      </div>
    </div>
  );
};

export default Prohibited;