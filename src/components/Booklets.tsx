import { motion } from 'framer-motion';
import { FaBook, FaWhatsapp, FaRupeeSign, FaCheck, FaStar } from 'react-icons/fa';

const phoneNumber = "917639399217";

const booklets = [
  {
    id: 'core-100',
    title: 'CORE 100 – 400+ SAFETY NET',
    price: 1499,
    speciality: ['High-frequency', 'Fast answering', 'Low risk', 'Builds minimum guarantee score'],
    use: ['Revise before every mock', 'Attempt first in exam', 'Revisit every 10–15 days'],
    outcome: ['Confidence boost', 'Faster start', '380–420 becomes stable'],
    whatsappMessage: 'Hi ARK Team, I want the CORE 100 booklet. Please share details and purchase link.',
  },
  {
    id: 'bio-360',
    title: 'BIOLOGY 360 LOCK™',
    price: 1999,
    speciality: ['NCERT statement mastery', 'Diagram dominance', 'Confusion pair elimination'],
    use: ['Revise every 7–10 days', 'Practice elimination', 'Final months main source'],
    outcome: ['Predictable biology', 'Fewer mistakes', '350–360 achievable'],
    whatsappMessage: 'Hi ARK Team, I want the BIOLOGY 360 LOCK booklet. Please share details and purchase link.',
  },
  {
    id: 'ncert-line',
    title: 'NCERT LINE-BY-LINE PREDICTOR',
    price: 1299,
    speciality: ['Tables', 'Footnotes', 'Hidden lines'],
    use: ['Along with reading', 'Chapter completion', 'Before tests'],
    outcome: ['No surprises', 'Better accuracy'],
    whatsappMessage: 'Hi ARK Team, I want the NCERT LINE-BY-LINE PREDICTOR booklet. Please share details and purchase link.',
  },
  {
    id: 'pyq-forecaster',
    title: 'PYQ PATTERN & TREND FORECASTER',
    price: 999,
    speciality: ['Repeated concepts', 'Pattern recognition', 'Difficulty mapping'],
    use: ['After chapters', 'Monthly revisions'],
    outcome: ['Faster recognition', 'Better mark conversion'],
    whatsappMessage: 'Hi ARK Team, I want the PYQ PATTERN & TREND FORECASTER booklet. Please share details and purchase link.',
  },
  {
    id: 'trap-bank',
    title: 'TRAP & CONFUSION BANK',
    price: 699,
    speciality: ['Negative prevention', 'Elimination training', 'High ROI'],
    use: ['Before mocks', 'Final weeks'],
    outcome: ['Saves 40–70 marks'],
    whatsappMessage: 'Hi ARK Team, I want the TRAP & CONFUSION BANK booklet. Please share details and purchase link.',
  },
  {
    id: 'high-weight',
    title: 'HIGH WEIGHT LOW EFFORT AREAS',
    price: 899,
    speciality: ['Max marks per hour', 'Good for repeaters'],
    use: ['Last 6–8 months', 'Before tests'],
    outcome: ['+80–110 improvement'],
    whatsappMessage: 'Hi ARK Team, I want the HIGH WEIGHT LOW EFFORT AREAS booklet. Please share details and purchase link.',
  },
];

const Booklets = () => {
  return (
    <section id="booklets" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-ark-yellow font-semibold text-sm uppercase tracking-wider">Booklets & Booster Packs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">High-impact Booklets — Small Time, Big Marks</h2>
          <p className="text-muted-foreground text-lg">Targeted booklets created for maximum mark-conversion. Use them strategically with our programme.</p>
        </motion.div>

        {/* Booklet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {booklets.map((b, idx) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative bg-ark-white rounded-2xl p-6 border-2 border-transparent hover:border-ark-yellow hover:shadow-yellow transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-ark-blue flex items-center justify-center">
                    <FaBook className="text-xl text-ark-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{b.title}</h3>
                    <div className="text-sm text-muted-foreground mt-1">Price: <span className="font-semibold text-foreground">₹{b.price}</span></div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-2 bg-ark-yellow/10 text-ark-yellow px-3 py-1 rounded-full text-xs font-semibold">{b.outcome[0]}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-foreground font-semibold mb-2">Speciality</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {b.speciality.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-ark-yellow rounded-full mt-2"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="text-sm text-foreground font-semibold mb-2">How to use</div>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {b.use.map((u, i) => (
                    <li key={i}>{u}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="text-sm text-foreground font-semibold mb-2">Outcome</div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {b.outcome.map((o, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheck className="text-ark-yellow" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(b.whatsappMessage)}`, '_blank', 'noopener,noreferrer')}
                  className="btn-primary inline-flex items-center gap-2 px-4 py-2"
                >
                  <FaWhatsapp />
                  WhatsApp
                </button>
                <button
                  onClick={() => alert('Add to cart flow or checkout integration')}
                  className="btn-secondary inline-flex items-center gap-2 px-4 py-2"
                >
                  Buy ₹{b.price}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-ark-blue/95 rounded-2xl p-6 text-ark-white mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold">Total Impact (Estimated)</h3>
              <p className="text-ark-white/80 mt-2">NCERT Line-by-Line → <span className="font-semibold">220–260</span>  •  PYQ → <span className="font-semibold">120–150</span>  •  Trap → <span className="font-semibold">40–70</span>  •  High Weight → <span className="font-semibold">80–110</span></p>
            </div>
            <div className="text-right">
              <div className="text-sm text-ark-yellow font-semibold">TOTAL → 460–590 marks</div>
              <div className="text-xs text-ark-white/80 mt-2">Strategic use across mocks and revision cycles</div>
            </div>
          </div>
        </motion.div>

        {/* Bundles */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div className="relative bg-ark-white rounded-2xl p-6 border-2 border-transparent hover:border-ark-yellow hover:shadow-yellow transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold">BIOLOGY MASTER BUNDLE</h4>
                  <div className="text-sm text-muted-foreground mt-1">Includes: Biology 360, NCERT Line-by-Line, Trap Bank</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">₹3,499</div>
                  <div className="text-sm text-ark-yellow font-semibold">Save ₹?*</div>
                </div>
              </div>

              <div className="mb-4 text-sm text-muted-foreground">Who: Weak in Biology • Parents want improvement</div>

              <div className="flex items-center gap-3 mt-4">
                <button onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi ARK Team, I want the BIOLOGY MASTER BUNDLE.')}`, '_blank') } className="btn-primary inline-flex items-center gap-2 px-4 py-2"><FaWhatsapp/> WhatsApp</button>
                <button onClick={() => alert('Proceed to checkout') } className="btn-secondary inline-flex items-center gap-2 px-4 py-2">Enroll</button>
              </div>
            </motion.div>

            <motion.div className="relative bg-ark-white rounded-2xl p-6 border-2 border-transparent hover:border-ark-yellow hover:shadow-yellow transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold">400+ FOUNDATION BUNDLE</h4>
                  <div className="text-sm text-muted-foreground mt-1">Includes: CORE 100, Biology 360</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">₹2,999</div>
                  <div className="text-sm text-ark-yellow font-semibold">Smart for repeaters</div>
                </div>
              </div>

              <div className="mb-4 text-sm text-muted-foreground">Who: Repeaters • Minimum score anxiety</div>

              <div className="flex items-center gap-3 mt-4">
                <button onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi ARK Team, I want the 400+ FOUNDATION BUNDLE.')}`, '_blank') } className="btn-primary inline-flex items-center gap-2 px-4 py-2"><FaWhatsapp/> WhatsApp</button>
                <button onClick={() => alert('Proceed to checkout') } className="btn-secondary inline-flex items-center gap-2 px-4 py-2">Enroll</button>
              </div>
            </motion.div>

            <motion.div className="relative bg-ark-white rounded-2xl p-6 border-2 border-ark-yellow shadow-yellow transition-all duration-300">
              <div className="absolute -top-3 left-4 bg-ark-yellow text-ark-blue text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>

              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold">FULL RANK BOOSTER (MOST POPULAR)</h4>
                  <div className="text-sm text-muted-foreground mt-1">Includes: All booklets</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">₹4,999</div>
                  <div className="text-sm text-ark-yellow font-semibold">Best value</div>
                </div>
              </div>

              <div className="mb-4 text-sm text-muted-foreground">Who: Serious aspirants • 600+ target</div>

              <div className="flex items-center gap-3 mt-4">
                <button onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi ARK Team, I want the FULL RANK BOOSTER bundle.')}`, '_blank') } className="btn-primary inline-flex items-center gap-2 px-4 py-2"><FaWhatsapp/> WhatsApp</button>
                <button onClick={() => alert('Proceed to checkout') } className="btn-secondary inline-flex items-center gap-2 px-4 py-2">Enroll</button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Who Should Buy */}
        <motion.div className="bg-ark-white rounded-2xl p-6 border-2 border-transparent">
          <h3 className="text-lg font-bold mb-3">Who Should Buy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-sm text-muted-foreground">
              <div className="font-semibold text-foreground mb-2">Weak in Biology</div>
              <ul className="space-y-1 list-inside">
                <li>Need diagram and NCERT mastery</li>
                <li>Parents seeking targeted help</li>
              </ul>
            </div>
            <div className="text-sm text-muted-foreground">
              <div className="font-semibold text-foreground mb-2">Repeaters</div>
              <ul className="space-y-1 list-inside">
                <li>Need a minimum-guarantee score</li>
                <li>Focus on high-return chapters</li>
              </ul>
            </div>
            <div className="text-sm text-muted-foreground">
              <div className="font-semibold text-foreground mb-2">Serious Aspirants</div>
              <ul className="space-y-1 list-inside">
                <li>Aim for 600+ with full coverage</li>
                <li>Want predictable mark gains</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3">
            <button onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi ARK Team, I want to buy booklets.')}`, '_blank') } className="btn-primary inline-flex items-center gap-2 px-6 py-3"><FaWhatsapp/> WhatsApp Us</button>
            <button onClick={() => alert('Proceed to enroll') } className="btn-secondary inline-flex items-center gap-2 px-6 py-3">Enroll Now</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Booklets;
