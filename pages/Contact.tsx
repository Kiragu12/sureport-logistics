import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    MapPin, Phone, Mail, Clock, Send, MessageCircle,
    Building2, Globe2, CheckCircle, ArrowRight, Loader2
} from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const offices = [
        {
            city: 'Nairobi (HQ)',
            address: 'Westlands Business Park, 4th Floor, Waiyaki Way',
            phone: '+254 704 515 905',
            email: 'nairobi@sureportlogistics.com',
            hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
            isHQ: true
        },
        {
            city: 'Mombasa',
            address: 'Nyali Centre, Links Road',
            phone: '+254 741 234 567',
            email: 'mombasa@sureportlogistics.com',
            hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
            isHQ: false
        },
        {
            city: 'London',
            address: '45 Canary Wharf, London E14 5AB',
            phone: '+44 20 7946 0958',
            email: 'uk@sureportlogistics.com',
            hours: 'Mon - Fri: 9:00 AM - 5:00 PM GMT',
            isHQ: false
        }
    ];

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
                            <MessageCircle className="w-4 h-4 mr-2" />
                            We're Here to Help
                        </div>
                        <h1 className="font-heading font-extrabold text-5xl md:text-6xl mb-6">Get in Touch</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                            Have questions about shipping? Need a custom quote? Our team is ready to assist you with all your logistics needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ----------------- QUICK CONTACT BAR ----------------- */}
            <section className="bg-white relative -mt-8 z-20">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <a href="tel:+254704515905" className="flex items-center group hover:bg-blue-50 p-4 rounded-xl transition-colors">
                            <div className="bg-primary/10 p-4 rounded-xl mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Call Us</p>
                                <p className="font-bold text-primaryDark">+254 704 515 905</p>
                            </div>
                        </a>
                        <a href="mailto:info@sureportlogistics.com" className="flex items-center group hover:bg-blue-50 p-4 rounded-xl transition-colors">
                            <div className="bg-primary/10 p-4 rounded-xl mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Email Us</p>
                                <p className="font-bold text-primaryDark">info@sureportlogistics.com</p>
                            </div>
                        </a>
                        <a
                            href="https://wa.me/254704515905"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center group hover:bg-green-50 p-4 rounded-xl transition-colors"
                        >
                            <div className="bg-[#25D366]/10 p-4 rounded-xl mr-4 group-hover:bg-[#25D366] transition-colors">
                                <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                                <p className="font-bold text-primaryDark">Chat Now</p>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ----------------- MAIN CONTACT SECTION ----------------- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Send a Message</span>
                            <h2 className="font-heading font-extrabold text-4xl text-primaryDark mb-6">Let's Start a Conversation</h2>
                            <p className="text-secondary mb-8 text-lg">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                                >
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="font-bold text-xl text-green-800 mb-2">Message Sent!</h3>
                                    <p className="text-green-600">Thank you for reaching out. We'll be in touch shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-primaryDark mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-primaryDark mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-primaryDark mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                                                placeholder="+254 700 000 000"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-primaryDark mb-2">Subject *</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all bg-white"
                                            >
                                                <option value="">Select a topic</option>
                                                <option value="quote">Request a Quote</option>
                                                <option value="tracking">Shipment Tracking</option>
                                                <option value="support">Customer Support</option>
                                                <option value="partnership">Business Partnership</option>
                                                <option value="other">Other Inquiry</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-primaryDark mb-2">Your Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none"
                                            placeholder="Tell us how we can help..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto bg-accent hover:bg-accentHover text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Office Locations */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Our Offices</span>
                            <h2 className="font-heading font-extrabold text-4xl text-primaryDark mb-8">Visit Us</h2>

                            <div className="space-y-6">
                                {offices.map((office, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-2xl border transition-all hover:shadow-soft ${office.isHQ
                                                ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20'
                                                : 'bg-white border-gray-100'
                                            }`}
                                    >
                                        <div className="flex items-start">
                                            <div className={`p-3 rounded-xl mr-4 ${office.isHQ ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}>
                                                {office.isHQ ? <Building2 className="w-6 h-6" /> : <Globe2 className="w-6 h-6" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center mb-2">
                                                    <h3 className="font-heading font-bold text-xl text-primaryDark">{office.city}</h3>
                                                    {office.isHQ && (
                                                        <span className="ml-3 bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded-full">
                                                            Headquarters
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="space-y-2 text-secondary">
                                                    <p className="flex items-start">
                                                        <MapPin className="w-4 h-4 mr-2 mt-1 text-gray-400 shrink-0" />
                                                        {office.address}
                                                    </p>
                                                    <p className="flex items-center">
                                                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                                                            {office.phone}
                                                        </a>
                                                    </p>
                                                    <p className="flex items-center">
                                                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                                                        <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                                                            {office.email}
                                                        </a>
                                                    </p>
                                                    <p className="flex items-center">
                                                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                                        {office.hours}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8191831895043!2d36.80477491475404!3d-1.2635390990653956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec4!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1699300000000!5m2!1sen!2ske"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sureport Logistics Location"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ----------------- CTA SECTION ----------------- */}
            <section className="py-20 bg-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-heading font-extrabold text-3xl text-primaryDark mb-4">Prefer a Quick Chat?</h2>
                    <p className="text-secondary mb-8 text-lg">
                        Connect with us instantly on WhatsApp for real-time support and quick responses.
                    </p>
                    <a
                        href="https://wa.me/254704515905?text=Hello%20Sureport!%20I%20have%20a%20question%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-green-500/20 transition-all transform hover:-translate-y-1"
                    >
                        <MessageCircle className="w-6 h-6 mr-3" />
                        Start WhatsApp Chat
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Contact;
