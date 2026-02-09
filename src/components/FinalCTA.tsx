import { motion } from 'framer-motion';
import { FaBook, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const FinalCTA = () => {
  return (
    <>
      <section id="final-cta" className="py-20 md:py-28 gradient-hero relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-ark-yellow/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-ark-yellow/20 text-ark-yellow px-4 py-2 rounded-full mb-8"
            >
              <HiSparkles />
              <span className="font-semibold text-sm">Limited Time Offer</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ark-white mb-6">
              Start Your NEET Journey{' '}
              <span className="text-ark-yellow">the Right Way</span>
            </h2>

            <p className="text-ark-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Enroll in our Online or Offline programme and get <span className="text-ark-yellow font-semibold">6 FREE NEET Books</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+919876543210"
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 text-lg px-8 py-4"
              >
                <FaPhoneAlt />
                Enquire Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi,%20I%20am%20interested%20in%20the%20NEET%20UG%20Programme."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-ark-white/60 text-sm">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-ark-yellow transition-colors">
                <FaPhoneAlt />
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="sticky-cta-mobile">
        <a
          href="tel:+919876543210"
          className="btn-primary w-full inline-flex items-center justify-center gap-2 text-base py-3"
        >
          <FaPhoneAlt />
          Enquire Now
        </a>
      </div>
    </>
  );
};

export default FinalCTA;
