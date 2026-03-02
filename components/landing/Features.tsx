"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Lock,
  Sparkles,
  TrendingUp,
  Users,
  Star,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.4],
  );
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  const features = [
    {
      title: "Smart Discovery",
      description: "AI-powered search finds exactly what you're looking for",
      benefits: ["Personalized results", "Smart filters", "Instant matching"],
      icon: Sparkles,
      color: "from-emerald-400 to-[rgb(91,199,97)]",
    },
    {
      title: "Verified Trust",
      description: "Every vendor and product meets our quality standards",
      benefits: [
        "Vendor verification",
        "Product certification",
        "User reviews",
      ],
      icon: Shield,
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Secure Communication",
      description: "Encrypted messaging with file sharing capabilities",
      benefits: [
        "End-to-end encryption",
        "Secure file sharing",
        "Real-time chat",
      ],
      icon: Lock,
      color: "from-purple-400 to-pink-500",
    },
  ];

  const userGroups = [
    {
      title: "For Buyers",
      image: "/assets/pic1.png",
      gradient: "from-emerald-500/20 to-[rgb(91,199,97)]/10",
      icon: Users,
      items: [
        "Personalized recommendations",
        "Secure payment protection",
        "Real-time order tracking",
        "Verified seller ratings",
      ],
    },
    {
      title: "For Vendors",
      image: "/assets/pic3.png",
      gradient: "from-blue-500/20 to-indigo-500/10",
      icon: TrendingUp,
      items: [
        "Analytics dashboard",
        "Inventory management",
        "Marketing tools",
        "Performance insights",
      ],
    },
    {
      title: "Mobile Experience",
      image: "/assets/pic2.png",
      gradient: "from-purple-500/20 to-pink-500/10",
      icon: Globe,
      items: [
        "iOS & Android apps",
        "Offline mode support",
        "Push notifications",
        "Biometric login",
      ],
    },
  ];

  const securityFeatures = [
    { label: "GDPR Compliant", value: "100%", icon: CheckCircle },
    { label: "PCI DSS Certified", value: "Tier 1", icon: Shield },
    { label: "256-bit Encryption", value: "AES-256", icon: Lock },
    { label: "Security Score", value: "9.8/10", icon: Star },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 bg-white dark:bg-[rgb(0,25,0)] overflow-hidden"
    >
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 -right-20 w-80 h-80 bg-[rgb(91,199,97)]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(91,199,97,0.02)_1px,transparent_1px),linear-gradient(rgba(91,199,97,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(91,199,97,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Header with refined typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3 bg-[rgb(91,199,97)]/10 px-4 py-2 rounded-full mb-6 border border-[rgb(91,199,97)]/20"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[rgb(91,199,97)] animate-pulse" />
            <span className="text-xs font-medium text-[rgb(13,41,23)] dark:text-[rgb(91,199,97)] tracking-widest uppercase">
              Why Choose Us
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[rgb(13,41,23)] dark:text-white tracking-tight mb-4">
            Designed for{" "}
            <span className="relative">
              <span className="font-medium text-[rgb(91,199,97)]">
                Modern Commerce
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-[rgb(91,199,97)] to-transparent"
              />
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Intelligent tools that transform how buyers and vendors connect in
            today's marketplace.
          </p>
        </motion.div>

        {/* Main Features Grid - Sleek Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-28 md:mb-36">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card Background with gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:border-[rgb(91,199,97)]/30 transition-all duration-500">
                  {/* Icon with gradient */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 mb-6`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Feature number - subtle */}
                  <div className="absolute top-6 right-6 text-4xl font-light text-gray-200 dark:text-gray-800">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  <h3 className="text-xl font-medium text-[rgb(13,41,23)] dark:text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-center gap-3 text-sm group/item"
                      >
                        <CheckCircle className="w-4 h-4 text-[rgb(91,199,97)] flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Subtle learn more link */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <button className="text-xs text-[rgb(91,199,97)] hover:text-[rgb(71,169,77)] transition-colors flex items-center gap-1 group/btn">
                      Learn more
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* User Groups Section - Professional Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-28 md:mb-36"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-1 h-1 rounded-full bg-[rgb(91,199,97)]" />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-widest uppercase">
                Tailored Solutions
              </span>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-light text-[rgb(13,41,23)] dark:text-white mb-2">
              Built for{" "}
              <span className="font-medium text-[rgb(91,199,97)]">
                Everyone
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive tools for every user on our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {userGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  {/* Card with gradient border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${group.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm hover:border-[rgb(91,199,97)]/30 transition-all duration-300">
                    {/* Image container with overlay */}
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-50`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-[rgb(91,199,97)]" />
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-[rgb(91,199,97)]/10 rounded-full blur-2xl" />
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl" />
                    </div>

                    <h4 className="text-lg font-medium text-[rgb(13,41,23)] dark:text-white mb-4 flex items-center gap-2">
                      {group.title}
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </h4>

                    <ul className="space-y-3">
                      {group.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="flex items-start gap-3 text-sm group/item"
                        >
                          <div className="w-1 h-1 rounded-full bg-[rgb(91,199,97)] mt-2 group-hover/item:scale-150 transition-transform" />
                          <span className="text-gray-600 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Security Section - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background decoration */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(91,199,97)]/5 via-transparent to-blue-500/5 rounded-3xl blur-2xl" />

          <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-[rgb(91,199,97)]/10 px-3 py-1 rounded-full mb-6"
                >
                  <Lock className="w-3 h-3 text-[rgb(91,199,97)]" />
                  <span className="text-xs font-medium text-[rgb(13,41,23)] dark:text-[rgb(91,199,97)]">
                    Enterprise-Grade Security
                  </span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-light text-[rgb(13,41,23)] dark:text-white mb-6"
                >
                  Your Data is{" "}
                  <span className="font-medium text-[rgb(91,199,97)]">
                    Protected
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                >
                  We employ bank-level encryption, regular security audits, and
                  compliance with global data protection standards to ensure
                  complete peace of mind.
                </motion.p>

                {/* Security Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {securityFeatures.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-[rgb(91,199,97)]/30 transition-all"
                      >
                        <Icon className="w-4 h-4 text-[rgb(91,199,97)] mb-2" />
                        <div className="text-xl font-light text-[rgb(13,41,23)] dark:text-white mb-1">
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {item.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column - Security Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative aspect-square">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[rgb(91,199,97)]/20 animate-pulse" />

                  {/* Inner circle with stats */}
                  <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-[rgb(91,199,97)]/10 to-blue-500/10 flex items-center justify-center backdrop-blur-sm border border-[rgb(91,199,97)]/20">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.3 }}
                        className="text-5xl md:text-6xl font-light text-[rgb(13,41,23)] dark:text-white mb-2"
                      >
                        99.9%
                      </motion.div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Uptime
                      </div>

                      {/* Security badges */}
                      <div className="flex justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[rgb(91,199,97)]/20 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-[rgb(91,199,97)]" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Lock className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Orbiting elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 rounded-full bg-[rgb(91,199,97)]" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <button className="group inline-flex items-center gap-2 text-[rgb(13,41,23)] dark:text-white hover:text-[rgb(91,199,97)] transition-colors">
            <span className="text-sm font-medium">Explore all features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
