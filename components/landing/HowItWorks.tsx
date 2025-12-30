"use client";

import { motion } from "framer-motion";
import {
  Store,
  Search,
  Handshake,
  Shield,
  Package,
  CreditCard,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Users,
  Target,
  BarChart,
  Filter,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Store,
      title: "Vendors List Products",
      description:
        "Verified vendors showcase premium products with detailed descriptions, high-quality images, and transparent pricing on our secure platform.",
      features: [
        "Quality verification",
        "Real-time inventory",
        "Performance analytics",
      ],
      color: "from-blue-500 to-cyan-500",
      gradient:
        "bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-500/5",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: Search,
      title: "Buyers Discover & Explore",
      description:
        "Intelligent search and personalized recommendations help buyers find exactly what they need from trusted vendors in seconds.",
      features: ["AI-powered search", "Smart filters", "Personalized feeds"],
      color: "from-purple-500 to-pink-500",
      gradient:
        "bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-500/5",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      number: "03",
      icon: Handshake,
      title: "Secure Connection & Purchase",
      description:
        "Seamless communication, secure payment processing, and order tracking ensure a smooth transaction for both parties.",
      features: ["Encrypted chat", "Secure payments", "Order tracking"],
      color: "from-emerald-500 to-green-500",
      gradient:
        "bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-emerald-500/5",
      iconBg: "bg-gradient-to-br from-emerald-500 to-green-500",
    },
  ];

  const trustFeatures = [
    {
      icon: Shield,
      title: "Verified Vendors Only",
      description:
        "Rigorous verification ensures every vendor meets our quality and trust standards.",
      stats: "99.8% satisfaction rate",
      color: "text-blue-500",
      gradient: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: Package,
      title: "Quality Assurance",
      description:
        "Every product undergoes thorough quality checks before appearing on the platform.",
      stats: "100% inspected",
      color: "text-emerald-500",
      gradient: "from-emerald-500/20 to-emerald-500/5",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description:
        "Bank-level encryption protects all transactions and personal information.",
      stats: "SSL encrypted",
      color: "text-purple-500",
      gradient: "from-purple-500/20 to-purple-500/5",
    },
    {
      icon: Users,
      title: "Community Trust",
      description:
        "Join thousands of verified users in a trusted marketplace ecosystem.",
      stats: "50k+ members",
      color: "text-amber-500",
      gradient: "from-amber-500/20 to-amber-500/5",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Tools",
      description: "Analytics and insights to help vendors grow their business",
    },
    {
      icon: Filter,
      title: "Smart Discovery",
      description: "Advanced filtering and search for precise product finding",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Secure messaging between buyers and vendors",
    },
    {
      icon: BarChart,
      title: "Performance Metrics",
      description: "Real-time tracking of sales and customer engagement",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/30 dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent dark:via-gray-700/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              SIMPLE & SECURE PROCESS
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              How It{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A seamless, three-step process designed with security and efficiency
            in mind. Experience the future of marketplace transactions.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-20 lg:mt-32">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number Background */}
                <div className="absolute -top-6 -left-6 text-8xl font-bold text-gray-100 dark:text-gray-800/50 select-none">
                  {step.number}
                </div>

                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02]">
                  {/* Icon Container */}
                  <div
                    className={`inline-flex p-4 rounded-2xl ${step.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`w-14 h-14 ${step.iconBg} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {step.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-center gap-4 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/50"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {feature}
                        </span>
                        <CheckCircle className="w-4 h-4 text-emerald-500 ml-auto" />
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative Elements */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 ${step.gradient} rounded-full blur-2xl -z-10 opacity-30`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
              Built on{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                Trust & Security
              </span>
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Every aspect of our platform is designed with your security and
              success in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient}`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h4>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {feature.description}
                </p>

                <div className="text-sm font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {feature.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 mb-4">
                    <benefit.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a
              href="/signup"
              className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-2xl flex items-center justify-center gap-3 font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 min-w-[200px]"
            >
              <span>Start Selling Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/buyer-signup"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] min-w-[200px]"
            >
              Start Shopping
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Join 50,000+ vendors and buyers already using Awuta
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
