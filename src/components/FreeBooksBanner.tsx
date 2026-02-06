import { motion } from 'framer-motion';
import { FaBook, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { HiGift } from 'react-icons/hi2';

const FreeBooksBanner = () => {
  const benefits = [
    'NCERT-aligned study support',
    'Concept reinforcement materials',
    'MCQ practice & revision guides',
    'Designed for NEET pattern',
  ];

  return (
    <section id="free-books" className="py-20 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ark-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-ark-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="bg-ark-white rounded-2xl shadow-elevated overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Content */}
              <div className="p-8 md:p-10 lg:p-12">
                <div className="inline-flex items-center gap-2 bg-ark-yellow/10 text-ark-blue px-4 py-2 rounded-full mb-6">
                  <HiGift className="text-ark-yellow text-lg" />
                  <span className="font-semibold text-sm">Limited Time Offer</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-ark-blue mb-4">
                  Why ARK Gives{' '}
                  <span className="text-ark-yellow">6 FREE Books</span>
                </h2>

                <p className="text-muted-foreground mb-6">
                  We believe in empowering serious NEET aspirants with quality resources 
                  from day one. These books are designed to complement your preparation journey.
                </p>

                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-ark-yellow mt-1 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <a
                  href="#final-cta"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaBook />
                  Claim My Free Books
                  <FaArrowRight className="text-sm" />
                </a>

                <p className="text-xs text-muted-foreground mt-4">
                  * Available for serious aspirants only
                </p>
              </div>

              {/* Right - Visual */}
              <div className="bg-ark-blue p-8 md:p-10 lg:p-12 flex items-center justify-center relative">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block"
                  >
                    <div className="relative">
                      {/* Stack of books visual */}
                      <div className="flex flex-col items-center gap-2">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="w-32 h-8 rounded-sm shadow-lg flex items-center justify-center"
                            style={{
                              backgroundColor: i % 2 === 0 ? 'hsl(45 100% 51%)' : 'hsl(0 0% 100%)',
                              transform: `rotate(${(i - 2.5) * 2}deg)`,
                            }}
                          >
                            <FaBook className={i % 2 === 0 ? 'text-ark-blue' : 'text-ark-blue/60'} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-8"
                  >
                    <p className="text-5xl font-bold text-ark-yellow mb-2">6</p>
                    <p className="text-ark-white text-lg font-medium">FREE NEET Books</p>
                    <p className="text-ark-white/70 text-sm mt-2">Worth ₹2,999</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreeBooksBanner;
