import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { personalInfo } from '../data/constants';

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});

  // ── Form field state ──────────────────────────────────────────────────────────
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // ── Validation ────────────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Handle input change ───────────────────────────────────────────────────────
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear the field error on typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  // ── Handle submit via EmailJS ─────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    if (!validate()) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        'service_jreugqk',
        'template_r6dai2i',
        formRef.current,
        'L8ecq2M01T4fwEtLx'
      );
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  // ── Shared input classes ──────────────────────────────────────────────────────
  const inputClasses =
    'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-[#8892b0] focus:border-[#00eeff] focus:ring-1 focus:ring-[#00eeff] outline-none transition-all w-full';

  // ── Contact detail items ──────────────────────────────────────────────────────
  const contactDetails = [
    { icon: <FaEnvelope />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FaPhone />, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <FaMapMarkerAlt />, label: personalInfo.location },
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: personalInfo.github, label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-4 md:px-8 lg:px-16 bg-slate-50 dark:bg-[#0a192f]"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section Heading ─────────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-[#ccd6f6]">
            Get In <span className="text-[#00eeff]">Touch</span>
          </h2>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#00eeff] via-[#7c3aed] to-[#ec4899]" />
        </motion.div>

        {/* ── Two-Column Layout ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ─ Left: Contact Info ─────────────────────────────────────────────── */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-[#ccd6f6] mb-4">
              Let's work together!
            </h3>
            <p className="text-slate-600 dark:text-[#8892b0] mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through the form or any of the channels below.
            </p>

            {/* Contact Details */}
            <ul className="space-y-5 mb-10">
              {contactDetails.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-4 group"
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#00eeff] text-lg group-hover:shadow-[0_0_15px_rgba(0,238,255,0.3)] transition-shadow">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-600 dark:text-[#8892b0] hover:text-[#00eeff] dark:hover:text-[#00eeff] transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-slate-600 dark:text-[#8892b0]">
                      {item.label}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-[#8892b0] hover:text-[#00eeff] hover:border-[#00eeff] hover:shadow-[0_0_15px_rgba(0,238,255,0.5)] transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ─ Right: Contact Form ────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="relative p-6 md:p-8 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-lg border border-black/5 dark:border-white/10"
            >
              {/* Name */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-700 dark:text-[#ccd6f6] mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-700 dark:text-[#ccd6f6] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-700 dark:text-[#ccd6f6] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-[#ccd6f6] mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project…"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#00eeff] via-[#7c3aed] to-[#ec4899] 
                hover:shadow-[0_0_25px_rgba(0,238,255,0.5)] disabled:opacity-60 disabled:cursor-not-allowed transition-shadow duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* ── Success / Error Toasts ───────────────────────────────────── */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center"
                >
                  ✅ Message sent successfully!
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center"
                >
                  ❌ Failed to send. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
