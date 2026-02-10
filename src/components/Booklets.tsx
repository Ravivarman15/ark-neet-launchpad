import { motion } from 'framer-motion';
import { FaBook, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi2';

const phoneNumber = "917639399217";

const booklets = [
  {
    id: 'core-100',
    title: 'CORE 100',
    subtitle: '400+ Safety Net',
    price: 1499,
    speciality: ['High-frequency questions', 'Fast answering', 'Low risk', 'Builds minimum score'],
    use: ['Revise before every mock', 'Attempt first in exam', 'Revisit every 10–15 days'],
    outcome: '380–420 becomes stable',
    whatsappMessage: 'Hi ARK Team, I am interested in the CORE 100 booklet. Please share details.',
  },
  {
    id: 'bio-360',
    title: 'BIOLOGY 360 LOCK™',
    subtitle: 'Complete Mastery',
    price: 1999,
    speciality: ['NCERT statement mastery', 'Diagram dominance', 'Confusion pair elimination'],
    use: ['Revise every 7–10 days', 'Practice elimination', 'Final months main source'],
    outcome: '350–360 achievable',
    whatsappMessage: 'Hi ARK Team, I am interested in the BIOLOGY 360 LOCK booklet. Please share details.',
  },
  {
    id: 'ncert-line',
    title: 'NCERT LINE-BY-LINE',
    subtitle: 'Predictor',
    price: 1299,
    speciality: ['Every table covered', 'Footnotes highlighted', 'Hidden lines revealed'],
    use: ['Along with reading', 'Chapter completion', 'Before tests'],
    outcome: 'No surprises in exam',
    whatsappMessage: 'Hi ARK Team, I am interested in the NCERT LINE-BY-LINE booklet. Please share details.',
  },
  {
    id: 'pyq-forecaster',
    title: 'PYQ PATTERN',
    subtitle: 'Trend Forecaster',
    price: 999,
    speciality: ['15+ years analysis', 'Pattern recognition', 'Difficulty mapping'],
    use: ['After chapters', 'Monthly revisions'],
    outcome: 'Faster mark conversion',
    whatsappMessage: 'Hi ARK Team, I am interested in the PYQ PATTERN & TREND FORECASTER. Please share details.',
  },
  {
    id: 'trap-bank',
    title: 'TRAP & CONFUSION',
    subtitle: 'Bank',
    price: 699,
    speciality: ['Negative prevention', 'Elimination training', 'High ROI'],
    use: ['Before mocks', 'Final weeks'],
    outcome: 'Saves 40–70 marks',
    whatsappMessage: 'Hi ARK Team, I am interested in the TRAP & CONFUSION BANK. Please share details.',
  },
  {
    id: 'high-weight',
    title: 'HIGH WEIGHT',
    subtitle: 'Low Effort Areas',
    price: 899,
    speciality: ['Max marks per hour', 'Good for repeaters'],
    use: ['Last 6–8 months', 'Before tests'],
    outcome: '+80–110 improvement',
    whatsappMessage: 'Hi ARK Team, I am interested in the HIGH WEIGHT LOW EFFORT booklet. Please share details.',
  },
];

const bundles = [
  {
    name: 'BIOLOGY MASTER',
    subtitle: 'For Biology Excellence',
    price: 3499,
    includes: ['Biology 360', 'NCERT Line-by-Line', 'Trap Bank'],
    forWho: 'Weak in Biology • Parents seeking focused help',
    whatsappMessage: 'Hi ARK Team, I want the BIOLOGY MASTER BUNDLE. Please share details.',
    popular: false,
  },
  {
    name: '400+ FOUNDATION',
    subtitle: 'For Score Security',
    price: 2999,
    includes: ['CORE 100', 'Biology 360'],
    forWho: 'Repeaters • Minimum score anxiety',
    whatsappMessage: 'Hi ARK Team, I want the 400+ FOUNDATION BUNDLE. Please share details.',
    popular: false,
  },
  {
    name: 'FULL RANK BOOSTER',
    subtitle: 'Complete Coverage',
    price: 4999,
    includes: ['All 6 booklets'],
    forWho: 'Serious aspirants • 600+ target',
    whatsappMessage: 'Hi ARK Team, I want the FULL RANK BOOSTER. Please share details.',
    popular: true,
  },
];

const Booklets = () => {
  return (
    <section id="booklets" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-ark-yellow/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-ark-yellow/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-ark-yellow font-semibold text-sm uppercase tracking-wider">
            Targeted Boosters
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            High-Impact Booklets
          </h2>
          <p className="text-muted-foreground text-lg">
            Strategic study materials designed to maximize your mark conversion. Use with our programme for maximum impact.
          </p>
        </motion.div>

        {/* Booklet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {booklets.map((booklet, index) => (
            <motion.div
              key={booklet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="bg-ark-white rounded-2xl p-6 shadow-card hover:shadow-yellow transition-all duration-300 group booklet-card"
            >
              {/* Header with Icon & Price */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-ark-blue flex items-center justify-center group-hover:bg-ark-yellow transition-colors">
                  <FaBook className="text-xl text-ark-white group-hover:text-ark-blue" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-ark-blue">₹{booklet.price}</div>
                </div>
              </div>

              {/* Title */}
              <div className="mb-5">
                <h3 className="text-lg font-bold text-foreground">{booklet.title}</h3>
                <p className="text-sm text-ark-yellow font-semibold">{booklet.subtitle}</p>
              </div>

              {/* Speciality */}
              <div className="mb-5 pb-5 border-b border-border">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                  Speciality
                </h4>
                <ul className="space-y-2">
                  {booklet.speciality.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-ark-yellow rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to Use */}
              <div className="mb-5 pb-5 border-b border-border">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                  How to Use
                </h4>
                <ul className="space-y-2">
                  {booklet.use.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-ark-blue rounded-full flex-shrink-0 mt-1"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="mb-6 p-4 rounded-xl bg-ark-yellow/10 border border-ark-yellow/20">
                <div className="flex items-center gap-2 text-sm font-semibold text-ark-blue">
                  <HiCheckCircle className="text-ark-yellow" />
                  {booklet.outcome}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() =>
                  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(booklet.whatsappMessage)}`, '_blank', 'noopener,noreferrer')
                }
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <FaWhatsapp />
                Enquire
                <FaArrowRight className="text-xs" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Total Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-ark-white rounded-2xl p-8 shadow-card mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-ark-yellow flex items-center justify-center">
              <HiCheckCircle className="text-lg text-ark-blue" />
            </span>
            Total Impact (Estimated)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'NCERT Line-by-Line', marks: '220–260' },
              { label: 'PYQ Trend', marks: '120–150' },
              { label: 'Trap Bank', marks: '40–70' },
              { label: 'High Weight Areas', marks: '80–110' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-secondary hover:bg-ark-yellow/10 transition-colors">
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-ark-yellow">{item.marks}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-ark-blue">
            <p className="text-ark-white text-center">
              <span className="text-sm text-ark-white/80">TOTAL WITH STRATEGIC USE</span>
              <br />
              <span className="text-2xl font-bold text-ark-yellow">460–590 marks</span>
            </p>
          </div>
        </motion.div>

        {/* Bundles Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-ark-yellow font-semibold text-sm uppercase tracking-wider">
              Smart Combinations
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Booklet Bundles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bundles.map((bundle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-2xl p-8 shadow-card transition-all duration-300 group ${
                  bundle.popular ? 'bg-ark-blue text-ark-white border-2 border-ark-yellow' : 'bg-ark-white'
                }`}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ark-yellow text-ark-blue text-xs font-bold px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h4 className={`text-xl font-bold mb-1 ${bundle.popular ? 'text-ark-white' : 'text-foreground'}`}>
                  {bundle.name}
                </h4>
                <p className={`text-sm mb-6 ${bundle.popular ? 'text-ark-white/80' : 'text-muted-foreground'}`}>
                  {bundle.subtitle}
                </p>

                {/* Price */}
                <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: bundle.popular ? 'rgba(255,255,255,0.1)' : '#f3f4f6' }}>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${bundle.popular ? 'text-ark-white/80' : 'text-muted-foreground'} mb-1`}>
                    Price
                  </p>
                  <p className={`text-3xl font-bold ${bundle.popular ? 'text-ark-white' : 'text-ark-blue'}`}>
                    ₹{bundle.price}
                  </p>
                </div>

                {/* Includes */}
                <div className="mb-6">
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${bundle.popular ? 'text-ark-white/80' : 'text-muted-foreground'}`}>
                    Includes
                  </p>
                  <ul className="space-y-2">
                    {bundle.includes.map((item, i) => (
                      <li key={i} className={`text-sm flex items-center gap-2 ${bundle.popular ? 'text-ark-white/90' : 'text-foreground'}`}>
                        <HiCheckCircle className={bundle.popular ? 'text-ark-yellow' : 'text-ark-yellow'} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* For Who */}
                <p className={`text-xs mb-6 p-3 rounded-lg ${bundle.popular ? 'bg-ark-white/10 text-ark-white/80' : 'bg-secondary text-muted-foreground'}`}>
                  {bundle.forWho}
                </p>

                {/* CTA */}
                <button
                  onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(bundle.whatsappMessage)}`, '_blank', 'noopener,noreferrer')}
                  className={`w-full inline-flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                    bundle.popular
                      ? 'bg-ark-yellow text-ark-blue hover:bg-ark-white'
                      : 'bg-ark-blue text-ark-white hover:bg-ark-yellow hover:text-ark-blue'
                  }`}
                >
                  <FaWhatsapp />
                  Get Bundle
                  <FaArrowRight className="text-xs" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Should Buy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-ark-white rounded-2xl p-8 shadow-card mb-12"
        >
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">Who Should Buy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Weak in Biology',
                points: ['Need NCERT mastery & diagrams', 'Parents seeking targeted help', 'Want predictable improvement'],
              },
              {
                title: 'Repeaters / Droppers',
                points: ['Need minimum-guarantee score', 'Focus on high-return chapters', 'Limited time left'],
              },
              {
                title: 'Serious Aspirants',
                points: ['Aiming for 600+ score', 'Want complete coverage', 'Need systematic approach'],
              },
            ].map((segment, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-secondary hover:bg-ark-yellow/10 transition-colors">
                <h4 className="font-bold text-foreground mb-4">{segment.title}</h4>
                <ul className="space-y-2">
                  {segment.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-ark-yellow rounded-full flex-shrink-0 mt-1.5"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <button
            onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi ARK Team, I want to buy booklets. Please share details.')}`, '_blank', 'noopener,noreferrer')}
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 cursor-pointer"
          >
            <FaWhatsapp className="text-xl" />
            Start With Booklets Now
            <FaArrowRight className="text-sm" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Booklets;
