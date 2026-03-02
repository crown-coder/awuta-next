"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Shield,
  CheckCircle,
  Star,
  ShoppingBag,
  Truck,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { icon: Shield, text: "Verified Sellers", count: "1K+" },
    { icon: Star, text: "Premium Products", count: "5K+" },
    { icon: CheckCircle, text: "Secure Payments", count: "100%" },
    { icon: Sparkles, text: "Quality Guaranteed", count: "24/7" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[rgb(0,10,0)] dark:via-[rgb(0,20,0)] dark:to-[rgb(0,10,0)]"
    >
      {/* Hero Banner Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        {/* Sophisticated Hero Image - Luxury retail concept */}
        <div className="relative w-full h-full">
          <Image
            src="/assets/banner.png"
            alt="Premium E-commerce Experience"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Sophisticated Gradient Overlay - maintaining your color scheme */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/30 dark:from-[rgb(0,10,0)]/95 dark:via-[rgb(0,10,0)]/70 dark:to-transparent" />

          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,199,97,0.03),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(91,199,97,0.03),transparent_50%)]" />
        </div>
      </motion.div>

      {/* Animated Gradient Background - maintaining your original */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-r from-[rgb(91,199,97)]/5 via-emerald-500/5 to-teal-500/5 dark:from-[rgb(91,199,97)]/10 dark:via-emerald-500/10 dark:to-teal-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Elements - more subtle and elegant */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0.1 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className={`absolute w-0.5 h-0.5 rounded-full ${
              i % 3 === 0
                ? "bg-[rgb(91,199,97)]/30"
                : i % 3 === 1
                  ? "bg-blue-500/30"
                  : "bg-purple-500/30"
            }`}
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content (maintaining your original) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Sophisticated badge */}
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[rgb(91,199,97)]/10 dark:bg-[rgb(91,199,97)]/20 rounded-full px-4 py-2 mb-8 border border-[rgb(91,199,97)]/20"
            >
              <Sparkles className="w-4 h-4 text-[rgb(91,199,97)]" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Premium Marketplace Since 2024
              </span>
            </motion.div> */}

            {/* Main Headline - maintaining your elegant typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <div className="text-sm md:text-base font-light tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-3 uppercase">
                Every
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[rgb(13,41,23)] dark:text-white">
                <span className="relative">
                  VENDOR
                  <motion.div
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-transparent via-[rgb(91,199,97)] to-transparent"
                  />
                </span>
              </h1>
              <div className="text-sm md:text-base font-light tracking-[0.3em] text-gray-500 dark:text-gray-400 mt-3 uppercase">
                Deserves The Spotlight
              </div>
            </motion.div>

            {/* Elegant Description - maintaining your original */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-lg"
            >
              Discover{" "}
              <span className="font-medium text-[rgb(13,41,23)] dark:text-white">
                verified products
              </span>{" "}
              from trusted sellers with{" "}
              <span className="font-medium text-[rgb(13,41,23)] dark:text-white">
                secure, seamless transactions
              </span>
              . Experience shopping redefined with premium quality and
              exceptional service.
            </motion.p>

            {/* CTA Buttons - maintaining your original styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/products"
                className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[rgb(91,199,97)] via-[rgb(75,170,80)] to-[rgb(91,199,97)] text-white font-medium hover:shadow-xl hover:shadow-[rgb(91,199,97)]/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-sm">
                  Start Shopping
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href="/explore"
                className="group px-8 py-4 rounded-full border-2 border-gray-900 dark:border-white/30 bg-transparent text-gray-900 dark:text-white font-medium hover:bg-gray-900 dark:hover:bg-white/10 hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-sm"
              >
                Explore Vendors
              </Link>
            </motion.div>

            {/* Trust Badges - minimalist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 text-xs text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
              <div className="w-px h-3 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-[rgb(91,199,97)]" />
                <span>SSL Secured</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats and Features (maintaining your original) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Feature Grid - maintaining your original with subtle enhancement */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group relative"
                  >
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-[rgb(91,199,97)]/30 dark:hover:border-[rgb(91,199,97)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[rgb(91,199,97)]/5">
                      <div className="flex flex-col items-start">
                        <Icon className="w-5 h-5 text-[rgb(91,199,97)] mb-3" />
                        <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">
                          {feature.count}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                          {feature.text}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Premium Features Card - mature addition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[rgb(91,199,97)]/10 rounded-full">
                  <Truck className="w-5 h-5 text-[rgb(91,199,97)]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    Premium Delivery Experience
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Free shipping on orders over $100 • 2-3 business days
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Subtle Brand Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[rgb(91,199,97)]/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 dark:text-gray-600"
        >
          <span className="text-[10px] uppercase tracking-widest mb-2">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600 dark:to-transparent" />
        </motion.div>
      </motion.div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[rgb(0,10,0)] dark:via-[rgb(0,10,0)]/50 dark:to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
