import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HelpCircle, ChevronDown, Search, Package, Plane, Ship,
    CreditCard, Clock, Shield, MapPin, MessageCircle, ArrowRight,
    FileText, Truck, Globe2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    title: string;
    icon: React.ReactNode;
    faqs: FAQItem[];
}

const faqData: FAQCategory[] = [
    {
        title: 'Shipping & Delivery',
        icon: <Package className="w-6 h-6" />,
        faqs: [
            {
                question: 'How do I get my warehouse address?',
                answer: 'Once you sign up with Sureport Logistics, we provide you with free warehouse addresses in the UK, USA, China, and Dubai. Simply use these addresses when shopping online, and your packages will be delivered to our warehouse for consolidation and shipping to Kenya.'
            },
            {
                question: 'How long does air freight take?',
                answer: 'Our express air freight typically takes 3-5 business days from the time your package arrives at our warehouse. We have weekly departures from all our locations to ensure fast and reliable delivery.'
            },
            {
                question: 'How long does sea freight take?',
                answer: 'Sea freight takes approximately 4-6 weeks depending on the origin. This is the most cost-effective option for large or heavy shipments that are not time-sensitive.'
            },
            {
                question: 'Do you deliver to my location in Kenya?',
                answer: 'Yes! We offer door-to-door delivery across Kenya. Whether you\'re in Nairobi, Mombasa, Kisumu, or any other town, we\'ll deliver directly to your doorstep or preferred pickup location.'
            },
            {
                question: 'Can I consolidate multiple packages?',
                answer: 'Absolutely! We offer free consolidation at all our warehouses. Shop from multiple stores, and we\'ll combine your packages into one shipment to save you money on shipping costs.'
            }
        ]
    },
    {
        title: 'Pricing & Payments',
        icon: <CreditCard className="w-6 h-6" />,
        faqs: [
            {
                question: 'How are shipping costs calculated?',
                answer: 'Shipping costs are calculated based on the greater of actual weight or volumetric weight (L × W × H / 5000 for air). We offer competitive rates starting from $15/kg for air freight and $8 per CBM for sea freight.'
            },
            {
                question: 'Are there any hidden fees?',
                answer: 'No hidden fees! Our quotes include shipping, customs clearance, and delivery. The only additional costs might be government duties and taxes, which we clearly communicate upfront before you confirm your shipment.'
            },
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept M-Pesa, bank transfers, credit/debit cards, and PayPal. For business clients, we also offer credit terms and cargo financing options.'
            },
            {
                question: 'Do you offer cargo financing?',
                answer: 'Yes! We offer cargo financing for qualified businesses. Pay for your goods and shipping costs over time with flexible repayment terms. Contact our team to learn more about eligibility.'
            },
            {
                question: 'Can I get a quote before shipping?',
                answer: 'Yes! Use our online quote calculator to get an instant estimate, or contact us with your shipment details for a detailed quotation. Quotes are free and come with no obligation.'
            }
        ]
    },
    {
        title: 'Customs & Compliance',
        icon: <Shield className="w-6 h-6" />,
        faqs: [
            {
                question: 'How does customs clearance work?',
                answer: 'We handle all customs clearance on your behalf using our licensed KRA agents. You\'ll need to provide your KRA PIN and a copy of your ID. We prepare all documentation and ensure your goods clear smoothly.'
            },
            {
                question: 'What documents do I need?',
                answer: 'For personal imports, you\'ll need your KRA PIN and ID copy. For business imports, you\'ll also need your business registration certificate and import license if applicable.'
            },
            {
                question: 'How much are import duties?',
                answer: 'Import duties vary based on the product category, typically ranging from 0% to 25% of the CIF value, plus 16% VAT. We can provide an estimate before shipping so you can budget accordingly.'
            },
            {
                question: 'What items are prohibited?',
                answer: 'Items like weapons, illegal drugs, counterfeit goods, and certain chemicals cannot be shipped. Visit our Prohibited Items page for a complete list and always check before purchasing.'
            },
            {
                question: 'What if my goods are held at customs?',
                answer: 'If there are any issues at customs, our team will immediately contact you with the requirements. We work closely with KRA to resolve issues quickly and minimize delays.'
            }
        ]
    },
    {
        title: 'Tracking & Support',
        icon: <MapPin className="w-6 h-6" />,
        faqs: [
            {
                question: 'How do I track my shipment?',
                answer: 'Once your package is in our system, you\'ll receive a unique tracking number. Use this on our website or WhatsApp to get real-time updates on your shipment\'s location and status.'
            },
            {
                question: 'How often do you provide updates?',
                answer: 'We send automatic updates at every major milestone: package received at warehouse, departure, customs clearance, and delivery. You can also request updates anytime via WhatsApp.'
            },
            {
                question: 'What if my package is damaged?',
                answer: 'We take great care in handling all packages. However, if damage occurs, please report it within 24 hours of delivery. We offer cargo insurance for valuable items and will work to resolve any issues promptly.'
            },
            {
                question: 'How can I contact customer support?',
                answer: 'We\'re available via WhatsApp (+254 704 515 905), email (info@sureportlogistics.com), or phone during business hours. Our support team typically responds within 1-2 hours.'
            },
            {
                question: 'What are your operating hours?',
                answer: 'Our Nairobi office is open Monday to Friday, 8:00 AM - 6:00 PM, and Saturday 9:00 AM - 1:00 PM. Our WhatsApp support is available extended hours for urgent inquiries.'
            }
        ]
    }
];

const FAQ: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const toggleItem = (categoryIndex: number, faqIndex: number) => {
        const key = `${categoryIndex}-${faqIndex}`;
        setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // Filter FAQs based on search term
    const filteredFAQs = faqData.map(category => ({
        ...category,
        faqs: category.faqs.filter(
            faq =>
                faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category =>
        activeCategory ? category.title === activeCategory && category.faqs.length > 0 : category.faqs.length > 0
    );

    const totalResults = filteredFAQs.reduce((acc, cat) => acc + cat.faqs.length, 0);

    return (
        <div className="overflow-x-hidden bg-white">
            {/* ----------------- HERO HEADER ----------------- */}
            <section className="bg-primaryDark text-white pt-48 pb-24 relative overflow-hidden">
                {/* Background Patterns */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-orange-300 text-sm font-bold mb-6 border border-white/20">
                            <HelpCircle className="w-4 h-4 mr-2" />
                            Help Center
                        </div>
                        <h1 className="font-heading font-extrabold text-5xl md:text-6xl mb-6">Frequently Asked Questions</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                            Find quick answers to common questions about our shipping services, pricing, and processes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ----------------- SEARCH BAR ----------------- */}
            <section className="bg-white relative -mt-8 z-20">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="h-6 w-6 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for answers... (e.g., 'tracking', 'payment', 'delivery time')"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-16 pr-6 py-6 rounded-2xl border border-gray-200 shadow-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-lg transition-all bg-white"
                        />
                        {searchTerm && (
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                {totalResults} result{totalResults !== 1 ? 's' : ''}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ----------------- CATEGORY FILTERS ----------------- */}
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeCategory === null
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            All Topics
                        </button>
                        {faqData.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(category.title)}
                                className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center ${activeCategory === category.title
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ----------------- FAQ ACCORDION ----------------- */}
            <section className="py-16 bg-light">
                <div className="max-w-4xl mx-auto px-4">
                    {filteredFAQs.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-300"
                        >
                            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
                            <p className="text-gray-400 text-sm mt-2">Try different keywords or browse all categories.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setActiveCategory(null); }}
                                className="mt-6 text-primary font-bold hover:underline"
                            >
                                Clear search
                            </button>
                        </motion.div>
                    ) : (
                        <div className="space-y-8">
                            {filteredFAQs.map((category, categoryIndex) => (
                                <motion.div
                                    key={categoryIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="bg-primary/10 p-3 rounded-xl mr-4 text-primary">
                                            {category.icon}
                                        </div>
                                        <h2 className="font-heading font-bold text-2xl text-primaryDark">{category.title}</h2>
                                    </div>

                                    <div className="space-y-4">
                                        {category.faqs.map((faq, faqIndex) => {
                                            const isOpen = openItems[`${categoryIndex}-${faqIndex}`];
                                            return (
                                                <div
                                                    key={faqIndex}
                                                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-soft transition-all"
                                                >
                                                    <button
                                                        onClick={() => toggleItem(categoryIndex, faqIndex)}
                                                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                                                    >
                                                        <span className="font-bold text-primaryDark pr-4">{faq.question}</span>
                                                        <motion.div
                                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="shrink-0"
                                                        >
                                                            <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-gray-400'}`} />
                                                        </motion.div>
                                                    </button>
                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <div className="px-6 pb-5 text-secondary leading-relaxed border-t border-gray-100 pt-4">
                                                                    {faq.answer}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ----------------- QUICK LINKS ----------------- */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading font-extrabold text-3xl text-primaryDark mb-4">Quick Links</h2>
                        <p className="text-secondary">Jump to commonly needed resources</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link
                            to="/quote"
                            className="group p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl hover:shadow-soft transition-all hover:-translate-y-1"
                        >
                            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <FileText className="w-7 h-7 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="font-bold text-xl text-primaryDark mb-2">Get a Quote</h3>
                            <p className="text-secondary text-sm mb-4">Calculate shipping costs for your package</p>
                            <span className="text-primary font-bold text-sm flex items-center group-hover:underline">
                                Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </Link>

                        <Link
                            to="/prohibited"
                            className="group p-8 bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10 rounded-2xl hover:shadow-soft transition-all hover:-translate-y-1"
                        >
                            <div className="bg-red-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                                <Shield className="w-7 h-7 text-red-500 group-hover:text-white" />
                            </div>
                            <h3 className="font-bold text-xl text-primaryDark mb-2">Prohibited Items</h3>
                            <p className="text-secondary text-sm mb-4">Check what cannot be shipped</p>
                            <span className="text-red-500 font-bold text-sm flex items-center group-hover:underline">
                                View List <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </Link>

                        <Link
                            to="/contact"
                            className="group p-8 bg-gradient-to-br from-accent/5 to-transparent border border-accent/10 rounded-2xl hover:shadow-soft transition-all hover:-translate-y-1"
                        >
                            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                                <MessageCircle className="w-7 h-7 text-accent group-hover:text-white" />
                            </div>
                            <h3 className="font-bold text-xl text-primaryDark mb-2">Contact Support</h3>
                            <p className="text-secondary text-sm mb-4">Get help from our team</p>
                            <span className="text-accent font-bold text-sm flex items-center group-hover:underline">
                                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ----------------- CTA SECTION ----------------- */}
            <section className="py-20 bg-primaryDark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="font-heading font-extrabold text-3xl mb-4">Still Have Questions?</h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Our team is ready to help you with any questions not covered here.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/254704515905"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Chat on WhatsApp
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center bg-white text-primaryDark px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1 hover:bg-gray-100"
                        >
                            Contact Form
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
