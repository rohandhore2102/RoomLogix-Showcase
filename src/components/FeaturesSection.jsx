import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Zap,
    Shield,
    Heart,
    TrendingUp,
    Clock,
    Globe,
    
} from 'lucide-react';


// Features Section Component
const FeaturesSection = () => {
    const features = [
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Effortless Management",
            description: "Easily manage tenants, rent collection, and electricity bills in one place with a smooth and responsive experience.",
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Secure Data Handling",
            description: "All tenant and payment data is securely stored on your device using encryption-ready local storage (Hive DB).",
            gradient: "from-green-400 to-emerald-500"
        },
        {
            icon: <Heart className="h-8 w-8" />,
            title: "User-Friendly Interface",
            description: "Simple, clean, and intuitive layout designed for quick access to room, rent, and light bill information without clutter.",
            gradient: "from-pink-400 to-rose-500"
        },
        {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Smart Billing Insights",
            description: "Track rent and electricity usage history per room, per month. Helps landlords stay organized and make informed decisions.",
            gradient: "from-blue-400 to-indigo-500"
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Monthly Data Sync",
            description: "Automatically creates a new month’s record for each tenant with last month's data pre-filled — no manual work needed.",
            gradient: "from-purple-400 to-violet-500"
        },
        {
            icon: <Clock className="h-8 w-8" />,
            title: "Save Time, Stay in Control",
            description: "Add, update, or remove tenants in seconds. Built-in reminders and monthly selection make rent tracking effortless.",
            gradient: "from-cyan-400 to-teal-500"
        }
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="features" ref={ref} className="py-20 relative" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Powerful
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Features</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Everything you need to transform your mobile experience
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="relative h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                                    <div className={`bg-gradient-to-r ${feature.gradient} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="text-white">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default FeaturesSection;