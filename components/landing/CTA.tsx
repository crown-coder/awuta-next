"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Users,
  Shield,
  Smartphone,
  CheckCircle,
} from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-8 shadow-sm"
          >
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              JOIN 10,000+ SUCCESSFUL USERS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight"
          >
            Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Commerce
            </span>{" "}
            Experience
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join the premier marketplace where innovation meets trust. Connect
            with verified partners, discover premium products, and grow your
            business with confidence.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Verified Network
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                Secure Platform
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm">
              <Smartphone className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">
                Mobile App
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">
                24/7 Support
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="group px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg shadow-lg hover:-translate-y-1"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/demo"
                className="group px-8 py-5 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-gray-300 hover:bg-white/50 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg hover:-translate-y-1"
              >
                Book a Demo
                <span className="text-blue-600 group-hover:scale-110 transition-transform">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* App Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <p className="text-sm text-gray-500 mb-6 font-medium">
              Also available on mobile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="#download-ios"
                className="group px-6 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-4"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 384 512"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>
              <a
                href="#download-android"
                className="group px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-4"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                  >
                    <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-100">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-100"
          >
            <p className="text-sm text-gray-500 mb-6 font-medium">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              <div className="text-xl font-bold text-gray-400">ACME</div>
              <div className="text-xl font-bold text-gray-400">GLOBEX</div>
              <div className="text-xl font-bold text-gray-400">INNOVA</div>
              <div className="text-xl font-bold text-gray-400">TECHNO</div>
              <div className="text-xl font-bold text-gray-400">VENTURE</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default CTA;
