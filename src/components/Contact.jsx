import React, { useState, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_gj4bbid',
      'template_reop7xg',
      formRef.current,
      'EQwbd4UJkIbrm4P7M'
    ).then(() => {
      setStatus('success');
      formRef.current.reset();
    }).catch(() => {
      setStatus('error');
    });
  };

  return (
    <section id="contact" className="py-24 bg-cinema-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h4 className="text-cinema-orange font-mono text-sm uppercase tracking-widest mb-4">// Contact</h4>
            <h2 className="text-5xl font-black text-white mb-8">
              Let's Work <br /> Together.
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-md">
              I'm currently available for freelance work and full-time positions. If you have a project that needs some creative touch, get in touch.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Email</span>
                  <a href="mailto:mohaslam861@gmail.com" className="text-white text-lg font-bold hover:text-cinema-orange transition-colors">mohaslam861@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Location</span>
                  <span className="text-white text-lg font-bold">Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f0f] p-8 md:p-12 border border-gray-800">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full bg-black border border-gray-800 p-4 text-white focus:border-cinema-orange outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full bg-black border border-gray-800 p-4 text-white focus:border-cinema-orange outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  className="w-full bg-black border border-gray-800 p-4 text-white focus:border-cinema-orange outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {status === 'success' && (
                <p className="text-green-400 text-sm font-bold uppercase tracking-widest">✅ Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm font-bold uppercase tracking-widest">❌ Something went wrong. Try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-cinema-orange hover:text-white transition-all w-full disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
