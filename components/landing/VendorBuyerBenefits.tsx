"use client";

import { motion } from "framer-motion";
import {
  Store,
  ShoppingBag,
  TrendingUp,
  Users,
  MessageSquare,
  Shield,
  CheckCircle,
  Target,
  BarChart,
  Zap,
  Globe,
  Star,
  ArrowRight,
  Sparkles,
  Award,
  Users2,
  BarChart3,
  Globe2,
  TargetIcon,
  MessageSquareText,
  ShieldCheck,
  ShoppingCart,
  TrendingUpIcon,
} from "lucide-react";

export default function VendorBuyerBenefits() {
  const vendorBenefits = [
    {
      icon: TrendingUpIcon,
      title: "Business Growth Engine",
      description:
        "Access thousands of potential buyers and scale your business with our smart marketplace algorithms.",
      metrics: "+300% average growth",
      color: "from-blue-500 to-cyan-500",
      gradient:
        "bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-500/5",
    },
    {
      icon: Users2,
      title: "Targeted Audience Reach",
      description:
        "Connect with buyers actively searching for products in your category through intelligent matching.",
      metrics: "95% relevant leads",
      color: "from-purple-500 to-pink-500",
      gradient:
        "bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-500/5",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Suite",
      description:
        "Real-time insights into sales performance, customer behavior, and market trends.",
      metrics: "50+ data points",
      color: "from-emerald-500 to-green-500",
      gradient:
        "bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-emerald-500/5",
    },
    {
      icon: Globe2,
      title: "Global Marketplace Access",
      description:
        "Expand your reach beyond local markets with multi-language and currency support.",
      metrics: "100+ countries",
      color: "from-amber-500 to-orange-500",
      gradient:
        "bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-amber-500/5",
    },
  ];

  const buyerBenefits = [
    {
      icon: ShieldCheck,
      title: "Verified Quality Assurance",
      description:
        "Every vendor undergoes rigorous verification to ensure product quality and reliability.",
      metrics: "100% verified vendors",
      color: "from-blue-500 to-indigo-500",
      gradient:
        "bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-blue-500/5",
    },
    {
      icon: TargetIcon,
      title: "Personalized Discovery",
      description:
        "AI-powered recommendations tailored to your preferences and shopping behavior.",
      metrics: "98% satisfaction rate",
      color: "from-purple-500 to-violet-500",
      gradient:
        "bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-purple-500/5",
    },
    {
      icon: MessageSquareText,
      title: "Direct Communication",
      description:
        "Real-time messaging with vendors to ask questions and clarify details before purchase.",
      metrics: "2-min average response",
      color: "from-emerald-500 to-teal-500",
      gradient:
        "bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-emerald-500/5",
    },
    {
      icon: Award,
      title: "Premium Shopping Experience",
      description:
        "Seamless browsing, secure payments, and reliable delivery tracking.",
      metrics: "4.9/5 user rating",
      color: "from-amber-500 to-orange-500",
      gradient:
        "bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-amber-500/5",
    },
  ];

  const platformStats = [
    {
      value: "10K+",
      label: "Active Vendors",
      icon: Store,
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    },
    {
      value: "500K+",
      label: "Monthly Buyers",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: Star,
      color: "from-emerald-500 to-green-500",
      gradient: "bg-gradient-to-br from-emerald-500/10 to-green-500/10",
    },
    {
      value: "4.8",
      label: "Platform Rating",
      icon: TrendingUp,
      color: "from-amber-500 to-orange-500",
      gradient: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50/20 to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              WIN-WIN ECOSYSTEM
            </span>
          </div>
        </motion.div>

        <motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Value for{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A balanced ecosystem designed to empower both vendors and buyers
            with powerful tools and transparent processes.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-20"
        >
          {platformStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className={`relative ${stat.gradient} backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 text-center hover:shadow-xl transition-all duration-300`}
            >
              <div className="inline-flex p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm mb-4">
                <stat.icon
                  className={`w-6 h-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vendor Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Card */}
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 lg:p-10 shadow-lg overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-500/5 rounded-3xl blur-xl opacity-50" />

              {/* Header */}
              <div className="flex items-center gap-4 lg:gap-6 mb-10 relative">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Store className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    For{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Vendors
                    </span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Everything you need to grow your business
                  </p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 lg:space-y-6 relative">
                {vendorBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="group flex items-start gap-4 lg:gap-6 p-4 lg:p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50"
                  >
                    <div
                      className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <benefit.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm lg:text-base">
                        {benefit.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20">
                        <Zap className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {benefit.metrics}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 pt-8 border-t border-gray-200/50 dark:border-gray-700/50 relative"
              >
                <a
                  href="/vendor-signup"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 font-semibold"
                >
                  Start Selling
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Buyer Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Card */}
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 lg:p-10 shadow-lg overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-500/5 rounded-3xl blur-xl opacity-50" />

              {/* Header */}
              <div className="flex items-center gap-4 lg:gap-6 mb-10 relative">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <ShoppingCart className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    For{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Buyers
                    </span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Smart shopping made simple and secure
                  </p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 lg:space-y-6 relative">
                {buyerBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="group flex items-start gap-4 lg:gap-6 p-4 lg:p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50"
                  >
                    <div
                      className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <benefit.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm lg:text-base">
                        {benefit.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-purple-500 dark:text-purple-400" />
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                          {benefit.metrics}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 pt-8 border-t border-gray-200/50 dark:border-gray-700/50 relative"
              >
                <a
                  href="/explore"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 font-semibold"
                >
                  Start Shopping
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Unified Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 lg:mt-24 relative"
        >
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 dark:from-gray-900 dark:to-gray-800 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800 dark:border-gray-700 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full translate-y-32 -translate-x-32 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    One Platform,{" "}
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Endless Opportunities
                  </span>
                </h3>
                <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
                  Join a thriving community where businesses grow and shoppers
                  find exactly what they need.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/signup"
                    className="group px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg"
                  >
                    Join the Community
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/demo"
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-xl hover:border-white/50 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 font-semibold text-lg"
                  >
                    Request a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
