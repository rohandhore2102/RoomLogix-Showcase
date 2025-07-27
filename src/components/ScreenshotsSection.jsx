import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScreenshotsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [mobileCurrentSlide, setMobileCurrentSlide] = useState(0);
    const [isMobileAutoPlaying, setIsMobileAutoPlaying] = useState(true);
    const desktopRef = useRef(null);
    const mobileRef = useRef(null);
    const startX = useRef(null);
    const isInView = useInView(desktopRef, { once: true, amount: 0.3 });
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const screenshots = [
        { id: 1, title: "Dashboard", image: "/images/pic1.webp", desc: "Clean, intuitive interface" },
        { id: 2, title: "Tenant Details", image: "/images/pic2.webp", desc: "Add, Edit Tenant Details" },
        { id: 3, title: "Rooms Management", image: "/images/pic3.webp", desc: "Manage Rooms, Rent, Lightbill" },
        { id: 4, title: "Tenant Management", image: "/images/pic4.webp", desc: "Manage Rent & Light Bill Of Tenant" },
        { id: 5, title: "Light Bill Calulator", image: "/images/pic5.webp", desc: "Auto Calculate Light Bill" },
        { id: 6, title: "Other Payments", image: "/images/pic6.webp", desc: "Manage Different Types Other Bills " },
        { id: 7, title: "Developed By", image: "/images/pic7.webp", desc: "Rohan Dhore" }
    ];

    // Desktop autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            if (isAutoPlaying) {
                setCurrentSlide((prev) => (prev + 1) % screenshots.length);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, screenshots.length]);

    // Mobile autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            if (isMobileAutoPlaying) {
                setMobileCurrentSlide((prev) => (prev + 1) % screenshots.length);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [isMobileAutoPlaying, screenshots.length]);

    const handleMouseDown = (e) => {
        startX.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        if (startX.current !== null) {
            const diff = startX.current - e.clientX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
                } else {
                    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
                }
                startX.current = null;
            }
        }
    };

    const handleTouchStart = (e) => {
        setIsMobileAutoPlaying(false);
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > 30) {
                if (diff > 0) {
                    setMobileCurrentSlide((prev) => (prev + 1) % screenshots.length);
                } else {
                    setMobileCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
                }
            }
        }
        setTimeout(() => setIsMobileAutoPlaying(true), 3000); // Resume autoplay after 3 seconds
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section id="screenshots" ref={desktopRef} className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Made for
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Room Owners</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Keep track of every room, every bill, and every tenant — right from your phone, anytime.
                    </p>
                </motion.div>

                {/* Desktop Carousel */}
                <div className="hidden md:block relative overflow-hidden">
                    <div
                        className="flex justify-center items-center cursor-grab active:cursor-grabbing"
                        style={{ perspective: '1000px' }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                    >
                        {screenshots.map((screenshot, index) => {
                            const offset = index - currentSlide;
                            const isActive = index === currentSlide;

                            let zIndex = 1;
                            if (isActive) zIndex = 3;
                            else if (offset === 1 || offset === -1) zIndex = 2;

                            return (
                                <motion.div
                                    key={screenshot.id}
                                    initial={{ opacity: 0, x: offset * 200, scale: 0.8, rotateY: offset * 30 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0.6,
                                        x: isActive ? 0 : offset * 250,
                                        scale: isActive ? 1 : 0.8,
                                        rotateY: isActive ? 0 : offset * 15,
                                        zIndex: zIndex
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute flex-shrink-0"
                                    style={{
                                        width: '300px',
                                        height: '600px',
                                        left: '50%',
                                        top: '50%',
                                        transform: `translate(-50%, -50%) translateX(${offset * 300}px) ${isActive ? 'scale(1.1)' : 'scale(0.9)'}`,
                                        boxShadow: isActive ? '0 25px 50px -12px rgba(0,0,0,0.5)' : 'none'
                                    }}
                                >
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                        <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-2xl">
                                            <img src={screenshot.image} alt={screenshot.title} className="w-full h-auto rounded-2xl shadow-lg" />
                                            <div className="mt-4 text-center">
                                                <h3 className="text-white font-semibold text-lg">{screenshot.title}</h3>
                                                <p className="text-white/60 text-sm">{screenshot.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                    <div className="h-[700px]"></div>
                    <div className="flex justify-center mt-8 space-x-2">
                        {screenshots.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => {
                                    setCurrentSlide(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125' : 'bg-white/30 hover:bg-white/50'
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Autoplay Slider */}
                <div className="md:hidden" ref={mobileRef}>
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{
                                x: -mobileCurrentSlide * 304 // 288px width + 16px margin
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {screenshots.map((screenshot, index) => (
                                <div key={screenshot.id} className="flex-shrink-0 w-72 mx-2">
                                    <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-2xl">
                                        <img src={screenshot.image} alt={screenshot.title} className="w-full h-auto rounded-2xl shadow-lg" />
                                        <div className="mt-4 text-center">
                                            <h3 className="text-white font-semibold text-lg">{screenshot.title}</h3>
                                            <p className="text-white/60 text-sm">{screenshot.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    
                    {/* Mobile Dots Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {screenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setMobileCurrentSlide(index);
                                    setIsMobileAutoPlaying(false);
                                    setTimeout(() => setIsMobileAutoPlaying(true), 3000);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === mobileCurrentSlide ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125' : 'bg-white/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScreenshotsSection;