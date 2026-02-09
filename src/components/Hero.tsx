import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-ark-yellow/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-ark-yellow/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-ark-white/10 backdrop-blur-sm border border-ark-white/20 rounded-full px-4 py-2 mb-8"
          >
            <HiSparkles className="text-ark-yellow" />
            <span className="text-ark-white/90 text-sm font-medium">
              NEET UG 2025-26 Admissions Open
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ark-white leading-tight mb-6"
          >
            Crack NEET with a{' '}
            <span className="text-ark-yellow">Structured,</span>{' '}
            <br className="hidden md:block" />
            Test-Driven Learning System
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-ark-white/80 mb-10"
          >
            Choose Your Path: <span className="text-ark-yellow font-semibold">Online</span> or <span className="text-ark-yellow font-semibold">Offline</span> | Physics • Chemistry • Biology
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#offline"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              Offline Programme
              <FaArrowRight className="text-sm" />
            </a>
            <a
              href="#online"
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              Online Programme
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-ark-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-ark-yellow rounded-full"></span>
              NCERT-Aligned
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-ark-yellow rounded-full"></span>
              Expert Faculty
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-ark-yellow rounded-full"></span>
              Continuous Testing
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
