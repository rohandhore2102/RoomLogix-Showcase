import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, MessageCircle } from 'lucide-react';
// Hero Section Component
const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <section
            ref={ref}
            className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background Light Orb */}
            <div
                className="absolute inset-0 opacity-30 z-0 transition-all duration-1000"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.08), transparent 50%)`,
                }}
            ></div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Tagline */}
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 mb-8">
                            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                            <span className="text-cyan-300 text-sm font-medium">
                                Revolutionary Mobile Experience
                            </span>
                        </div>

                        {/* Heading */}
                        

<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
  Meet Your{' '}
  <ShinyText
    text="Perfect App"
    speed={5}
    className="text-5xl md:text-7xl font-bold leading-tight"
  />
</h1>


                        {/* Description */}
                        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                            Transform your mobile experience with cutting-edge features,
                            intuitive design, and seamless performance that adapts to your lifestyle.
                        </p>

                        {/* CTA Button */}
                        <div className="flex justify-center lg:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://rohandhore-portfolio.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-cyan-500/30 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-center">
                                    <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                                    Contact Developer
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Hero Image */}
                <motion.div
                    className="relative flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="relative w-[360px] sm:w-[460px] lg:w-[560px] transform transition duration-500 hover:scale-105">
                        {/* Glow Background Behind Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse z-0" />
                        <img
                            src="/images/HeroPic.png"
                            alt="App Hero"
                            className="relative z-10 w-full "
                        />
                        {/* Floating Orb Animation */}
                        <motion.div
                            className="absolute -top-6 -right-6 w-16 h-16 bg-cyan-400 rounded-full opacity-30 blur-2xl"
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 10, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: 'easeInOut',
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;