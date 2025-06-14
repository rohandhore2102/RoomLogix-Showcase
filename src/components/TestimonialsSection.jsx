// Testimonials Section Component
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Star
    } from 'lucide-react';
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Jayashree Dhore",
            role: "Property Owner, Pune",
            avatar: "https://ui-avatars.com/api/?name=Jayashree+Dhore&background=1E1E2F&color=F9D923&rounded=true&size=128&bold=true",
            rating: 5,
            text: "Managing tenants used to be a mess. Now I can track rent, electricity, and payments in one tap!"
        },
        {
            name: "Gunwant Veer",
            role: "Part-Time Landlord, Lonavala",
            avatar: "https://ui-avatars.com/api/?name=Gunwant+Veer&background=3D3D66&color=FF9F1C&rounded=true&size=128&bold=true",
            rating: 5,
            text: "I love how simple it is. I added all my room data in minutes, and monthly rent tracking just works."
        },
        {
            name: "Pandurang Padale",
            role: "First-Time Renter, Baner",
            avatar: "https://ui-avatars.com/api/?name=Pandurang+Padale&background=3D3D66&color=FF9F1C&rounded=true&size=128&bold=true",
            rating: 5,
            text: "As a beginner landlord, I needed something hassle-free. This app saved me from spreadsheets and confusion."
        }
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="reviews" ref={ref} className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        What Users
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Say</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Join thousands of satisfied users worldwide
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-white/80 mb-6 italic leading-relaxed">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                        <div>
                                            <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                            <p className="text-white/60 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TestimonialsSection;