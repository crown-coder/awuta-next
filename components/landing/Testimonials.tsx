"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  TrendingUp,
  Shield,
  ShoppingBag,
  Store,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  BarChart3,
  Users,
  Target,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

/* =======================
   Types
======================= */

type TestimonialType = "vendor" | "buyer";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  stats: string;
  color: string;
  gradient: string;
  type: TestimonialType;
}

interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
}

interface StarRatingProps {
  rating: number;
}

/* =======================
   Component
======================= */

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const testimonials: Testimonial[] = [
    {
      name: "Aisha M.",
      role: "Premium Vendor",
      company: "Artisan Crafts Co.",
      avatar: "AM",
      content:
        "Awuta transformed our business overnight. We reached 3x more customers in the first month alone. The platform's vendor tools are incredibly intuitive and the support team is phenomenal.",
      rating: 5,
      stats: "+300% growth",
      color: "from-blue-500 to-cyan-500",
      gradient:
        "bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-500/5",
      type: "vendor",
    },
    {
      name: "Samuel O.",
      role: "Enterprise Buyer",
      company: "Global Retail Group",
      avatar: "SO",
      content:
        "The quality of vendors on Awuta is unmatched. I found reliable suppliers for our entire product line. The verification process gives us complete confidence in every transaction.",
      rating: 5,
      stats: "50+ vendors sourced",
      color: "from-purple-500 to-pink-500",
      gradient:
        "bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-500/5",
      type: "buyer",
    },
    {
      name: "Janet K.",
      role: "Fashion Buyer",
      company: "Style Collective",
      avatar: "JK",
      content:
        "The user experience is exceptional. From discovery to purchase, everything feels seamless. The direct communication feature saved us weeks in sourcing time.",
      rating: 5,
      stats: "4.9/5 experience",
      color: "from-emerald-500 to-green-500",
      gradient:
        "bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-emerald-500/5",
      type: "buyer",
    },
    {
      name: "Michael R.",
      role: "Tech Vendor",
      company: "Innovate Solutions",
      avatar: "MR",
      content:
        "The analytics dashboard helped us optimize our listings and increase conversions by 45%. Awuta isn't just a marketplace—it's a growth partner.",
      rating: 5,
      stats: "45% conversion lift",
      color: "from-amber-500 to-orange-500",
      gradient:
        "bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-amber-500/5",
      type: "vendor",
    },
    {
      name: "Sarah L.",
      role: "Procurement Manager",
      company: "Urban Retail",
      avatar: "SL",
      content:
        "Finally, a platform that understands both vendor and buyer needs. The transparency and communication tools have revolutionized how we source products.",
      rating: 5,
      stats: "80% time saved",
      color: "from-indigo-500 to-violet-500",
      gradient:
        "bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-indigo-500/5",
      type: "buyer",
    },
    {
      name: "David T.",
      role: "E-commerce Director",
      company: "Home Essentials",
      avatar: "DT",
      content:
        "Our sales increased by 150% after joining Awuta. The platform's reach and credibility have opened doors to markets we couldn't access before.",
      rating: 5,
      stats: "150% sales growth",
      color: "from-rose-500 to-pink-500",
      gradient:
        "bg-gradient-to-br from-rose-500/20 via-pink-500/10 to-rose-500/5",
      type: "vendor",
    },
  ];

  const stats: StatItem[] = [
    {
      value: "4.9",
      label: "Platform Rating",
      icon: Star,
      color: "from-amber-500 to-yellow-500",
      gradient:
        "bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-amber-500/5",
    },
    {
      value: "10K+",
      label: "Happy Users",
      icon: TrendingUp,
      color: "from-emerald-500 to-green-500",
      gradient:
        "bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-emerald-500/5",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: CheckCircle,
      color: "from-blue-500 to-cyan-500",
      gradient:
        "bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-500/5",
    },
    {
      value: "500+",
      label: "Business Partners",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      gradient:
        "bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-500/5",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const StarRating = ({ rating }: StarRatingProps) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50/20 to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
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
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              TRUSTED BY THOUSANDS
            </span>
          </div>
        </motion.div>

        <motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Stories of{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Success
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses and buyers who have transformed their
            operations with Awuta.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className={`relative ${stat.gradient} backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 text-center hover:shadow-xl transition-all duration-300 group`}
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

        {/* Carousel Section */}
        <div className="relative mb-20">
          {/* Navigation Buttons */}
          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-between z-10 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 pointer-events-auto -translate-x-6"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 pointer-events-auto translate-x-6"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </div>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6 lg:gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-full lg:w-1/3 flex-shrink-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group overflow-hidden">
                    {/* Background Glow */}
                    <div
                      className={`absolute inset-0 ${testimonial.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Quote Icon */}
                    <div className="relative mb-6">
                      <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-500 transition-colors" />
                    </div>

                    {/* Rating */}
                    <div className="relative mb-6">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Content */}
                    <p className="relative text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>

                    {/* User Info */}
                    <div className="relative flex items-center gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                              {testimonial.role}
                            </p>
                          </div>
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm ${
                              testimonial.type === "vendor"
                                ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20"
                                : "bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20"
                            }`}
                          >
                            {testimonial.type === "vendor" ? (
                              <Store className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                            ) : (
                              <ShoppingBag className="w-3 h-3 text-purple-500 dark:text-purple-400" />
                            )}
                            <span
                              className={`text-xs font-medium ${
                                testimonial.type === "vendor"
                                  ? "text-blue-600 dark:text-blue-400"
                                  : "text-purple-600 dark:text-purple-400"
                              }`}
                            >
                              {testimonial.type === "vendor"
                                ? "Vendor"
                                : "Buyer"}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <div className="relative mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {testimonial.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.slice(0, 3).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 dark:from-gray-900 dark:to-gray-800 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800 dark:border-gray-700 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full translate-y-32 -translate-x-32 blur-3xl" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 dark:from-emerald-500/20 dark:to-cyan-500/20 border border-emerald-500/20 dark:border-emerald-500/30 mb-6">
                  <Shield className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-sm font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                    FEATURED SUCCESS STORY
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    From Startup to Market Leader{" "}
                  </span>
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    in 6 Months
                  </span>
                </h3>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  "Awuta provided the platform and tools we needed to scale our
                  business globally. The vendor support team helped us optimize
                  our listings, and we saw immediate results."
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    ET
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      Elena Torres
                    </h4>
                    <p className="text-gray-300">CEO, EcoTextiles Global</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold text-white">400%</div>
                    <div className="text-sm text-gray-300">Revenue Growth</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 dark:from-emerald-500/20 dark:to-green-500/20 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold text-white">25+</div>
                    <div className="text-sm text-gray-300">
                      Countries Reached
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Impact Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-gray-900/10 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold text-white">
                          Platform Impact
                        </div>
                        <div className="text-sm text-gray-300">
                          Average improvement after joining
                        </div>
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        89%
                      </div>
                    </div>

                    {[
                      { label: "Customer Reach", value: 92, icon: Target },
                      { label: "Sales Growth", value: 85, icon: TrendingUp },
                      { label: "Operational Efficiency", value: 78, icon: Zap },
                      { label: "Customer Satisfaction", value: 95, icon: Star },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <item.icon className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-300">
                              {item.label}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-white">
                            {item.value}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 dark:bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.5 + index * 0.1,
                            }}
                            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Ready to Write Your{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Story?
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of successful businesses and buyers transforming
            commerce with Awuta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/stories"
              className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:scale-[1.02] transition-all duration-300 font-semibold text-lg"
            >
              Read More Stories
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
