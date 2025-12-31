"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  MessageCircle,
  Bell,
  Users,
  CreditCard,
  TrendingUp,
  CheckCircle,
  Lock,
  Sparkles,
  Cpu,
  ArrowRight,
  ShieldCheck,
  LineChart,
  Globe2,
  SmartphoneIcon,
  ShieldOff,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Discovery",
      description:
        "AI-powered search and personalized recommendations deliver relevant products in milliseconds.",
      benefits: ["Smart filtering", "Instant results", "Personalized feeds"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient:
        "bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-500/5",
      delay: 0.1,
    },
    {
      icon: ShieldCheck,
      title: "Verified Trust System",
      description:
        "Multi-layered verification process ensures every vendor and product meets our quality standards.",
      benefits: [
        "Vendor verification",
        "Product certification",
        "User reviews",
      ],
      gradient: "from-emerald-500 to-green-500",
      bgGradient:
        "bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-emerald-500/5",
      delay: 0.2,
    },
    {
      icon: MessageCircle,
      title: "Smart Communication Hub",
      description:
        "Secure, encrypted messaging with AI-assisted responses and file sharing capabilities.",
      benefits: ["Encrypted chats", "File sharing", "Quick replies"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient:
        "bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-500/5",
      delay: 0.3,
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description:
        "Comprehensive analytics and management tools to optimize your business performance.",
      benefits: [
        "Sales analytics",
        "Inventory management",
        "Customer insights",
      ],
      gradient: "from-orange-500 to-amber-500",
      bgGradient:
        "bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-orange-500/5",
      delay: 0.4,
    },
    {
      icon: Globe2,
      title: "Global Marketplace",
      description:
        "Connect with buyers and vendors worldwide with multi-currency and language support.",
      benefits: ["Global reach", "Multi-currency", "Localized experience"],
      gradient: "from-indigo-500 to-violet-500",
      bgGradient:
        "bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-indigo-500/5",
      delay: 0.5,
    },
    {
      icon: Bell,
      title: "Intelligent Notifications",
      description:
        "Smart alerts and real-time updates keep you informed without overwhelming you.",
      benefits: ["Custom alerts", "Priority notifications", "Quiet hours"],
      gradient: "from-rose-500 to-pink-500",
      bgGradient:
        "bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-rose-500/5",
      delay: 0.6,
    },
  ];

  const platformFeatures = [
    {
      icon: Users,
      title: "For Buyers",
      items: [
        "Personalized product recommendations",
        "Secure payment protection",
        "Real-time order tracking",
        "Verified seller ratings",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "For Vendors",
      items: [
        "Advanced analytics dashboard",
        "Automated inventory management",
        "Marketing tools integration",
        "Performance insights",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: SmartphoneIcon,
      title: "Mobile Experience",
      items: [
        "Native iOS & Android apps",
        "Offline mode support",
        "Push notifications",
        "Touch ID/Face ID login",
      ],
      gradient: "from-emerald-500 to-green-500",
    },
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Full compliance with global data protection standards",
      stat: "100%",
    },
    {
      icon: CreditCard,
      title: "PCI DSS Certified",
      description: "Bank-level payment security certification",
      stat: "Tier 1",
    },
    {
      icon: Lock,
      title: "256-bit Encryption",
      description: "Military-grade encryption for all data",
      stat: "AES-256",
    },
    {
      icon: ShieldOff,
      title: "Zero Breaches",
      description: "Perfect security track record",
      stat: "0 incidents",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-linear-to-b from-white via-gray-50/20 to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-px bg-linear-to-r from-transparent via-gray-200/30 to-transparent dark:via-gray-700/20" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 mb-6">
            <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              PREMIUM FEATURES
            </span>
          </div>
        </motion.div>
        <motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Engineered for{" "}
            </span>
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Powerful tools and intelligent features that transform how buyers
            and vendors connect, built with cutting-edge technology and
            attention to detail.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 ${feature.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl ${feature.bgGradient} backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`w-14 h-14 bg-linear-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  {/* Animated Sparkle */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-2 -right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Sparkles
                      className={`w-8 h-8 bg-linear-to-br ${feature.gradient} bg-clip-text text-transparent`}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-linear-to-r ${feature.gradient}`}
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {benefit}
                        </span>
                        <CheckCircle className="w-4 h-4 text-emerald-500 ml-auto" />
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700 group-hover:via-gray-300 dark:group-hover:via-gray-600 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                Tailored for{" "}
              </span>
              <span className="bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                Everyone
              </span>
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Custom solutions designed to meet the unique needs of every user
              on our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {platformFeatures.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className={`relative bg-linear-to-b from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${platform.gradient}/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 bg-linear-to-br ${platform.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {platform.title}
                  </h4>
                </div>

                <ul className="space-y-4">
                  {platform.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="relative mt-2">
                        <div
                          className={`w-2 h-2 rounded-full bg-linear-to-r ${platform.gradient} group-hover/item:scale-125 transition-transform`}
                        />
                        <div
                          className={`absolute inset-0 w-2 h-2 rounded-full bg-linear-to-r ${platform.gradient} blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity`}
                        />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 flex-1">
                        {item}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security & Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-24 lg:mt-32"
        >
          <div className="bg-linear-to-br from-white/80 to-gray-50/80 dark:from-gray-800/30 dark:to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-emerald-500/10 to-cyan-500/10 dark:from-emerald-500/20 dark:to-cyan-500/20 border border-emerald-500/20 dark:border-emerald-500/30 mb-6">
                  <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-medium bg-linear-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    ENTERPRISE-GRADE SECURITY
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                    Your Data is{" "}
                  </span>
                  <span className="bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                    Protected
                  </span>
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                  We employ bank-level encryption, regular security audits, and
                  compliance with global data protection standards to ensure
                  complete peace of mind.
                </p>

                {/* Security Features Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {securityFeatures.map((security, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 + idx * 0.1 }}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/30 dark:border-gray-700/30"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <security.icon className="w-5 h-5 text-emerald-500" />
                        <span className="font-bold text-gray-900 dark:text-white">
                          {security.title}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {security.description}
                      </p>
                      <div className="text-2xl font-bold bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {security.stat}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Security Score Card */}
              <div className="relative">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        Security Score
                      </div>
                      <div className="text-4xl font-bold bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                        9.8/10
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="h-2.5 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "98%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 1.4 }}
                          className="h-full bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full"
                        />
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Industry-leading security rating
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                      <div className="text-center p-4 bg-linear-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-xl">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          99.9%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Uptime
                        </div>
                      </div>
                      <div className="text-center p-4 bg-linear-to-br from-emerald-500/5 to-green-500/5 dark:from-emerald-500/10 dark:to-green-500/10 rounded-xl">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          0
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Data Breaches
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl rotate-12 opacity-10 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-linear-to-r from-emerald-500 to-green-500 rounded-2xl -rotate-12 opacity-10 blur-xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
