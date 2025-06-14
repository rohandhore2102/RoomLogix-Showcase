import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Laptop } from 'lucide-react'; // changed icon

// Download Section Component
const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="download" ref={ref} className="py-20 relative">
     
      <div className="absolute inset-0 "></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Transform?</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Get this Room Rent Management App tailored for property owners. Reach out to the developer directly.
          </p>

          <motion.a
            href="https://d1yh3zqy4qqnef.cloudfront.net/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-2xl font-semibold text-lg shadow-2xl shadow-cyan-500/25 transition-all duration-300"
          >
            <Laptop className="mr-3 h-6 w-6" />
            Contact Developer
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
