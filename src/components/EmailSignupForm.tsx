import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaBook } from 'react-icons/fa';
import { FormEvent, useState } from 'react';

interface EmailSignupFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  variant?: 'default' | 'minimal';
}

const EmailSignupForm = ({
  title = "Get Your FREE NEET Success Kit",
  subtitle = "Enter your details below to unlock all 6 booklets + personalized study guide",
  buttonText = "Get My Free Kit Now",
  variant = 'default'
}: EmailSignupFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to email service (Brevo, MailChimp, etc.)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-2 rounded-lg border border-border bg-secondary focus:outline-none focus:ring-2 focus:ring-ark-yellow text-sm"
            required
          />
          <button
            type="submit"
            className="bg-ark-yellow text-ark-blue font-bold py-2 px-4 rounded-lg hover:bg-ark-yellow/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Get It Free
            <FaArrowRight className="text-xs" />
          </button>
        </form>
        <p className="text-xs text-muted-foreground">✅ No spam ever</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-ark-white rounded-2xl p-8 shadow-elevated border-2 border-ark-yellow/30"
    >
      <h3 className="text-2xl font-bold text-foreground mb-2 text-center flex items-center justify-center gap-2">
        <FaBook className="text-ark-yellow" />
        <span>{title}</span>
      </h3>
      <p className="text-center text-muted-foreground mb-6">
        {subtitle}
      </p>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <FaCheckCircle className="text-ark-yellow text-5xl mx-auto mb-4" />
          <h4 className="text-xl font-bold text-foreground mb-2">
            Almost there! 🎉
          </h4>
          <p className="text-muted-foreground">
            Check your email for the download link. It usually arrives in 2-5 minutes.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-border bg-secondary focus:outline-none focus:ring-2 focus:ring-ark-yellow"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-border bg-secondary focus:outline-none focus:ring-2 focus:ring-ark-yellow"
              required
            />
          </div>

          <select
            className="w-full px-4 py-3 rounded-lg border border-border bg-secondary focus:outline-none focus:ring-2 focus:ring-ark-yellow"
            defaultValue=""
            required
          >
            <option value="">Select Your Class</option>
            <option value="class-11">Class 11 (Fresh Start)</option>
            <option value="class-12">Class 12 (Final Year)</option>
            <option value="dropper">Dropper/Repeater</option>
          </select>

          <button
            type="submit"
            className="w-full bg-ark-yellow text-ark-blue font-bold py-3 px-6 rounded-lg hover:bg-ark-yellow/90 transition-colors flex items-center justify-center gap-2 text-lg"
          >
            <FaArrowRight /> {buttonText}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            ✅ No spam — just resources. Unsubscribe anytime.
          </p>
        </form>
      )}
    </motion.div>
  );
};

export default EmailSignupForm;
