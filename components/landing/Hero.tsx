"use client";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Shield,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Star,
  Apple,
  Zap,
  Lock,
  Award,
} from "lucide-react";
import { FaGooglePlay } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springOpacity = useSpring(opacity, springConfig);

  const [products] = useState([
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      description: "256GB - Deep Purple - Latest Apple Technology",
      price: "₦760,000",
      originalPrice: "₦850,000",
      discount: 11,
      rating: 4.9,
      reviewCount: 124,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop",
      tags: ["Premium", "New Arrival"],
      seller: "TechHub Store",
      verified: true,
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra",
      description: "512GB - Titanium Gray - AI Powered Features",
      price: "₦890,000",
      originalPrice: "₦950,000",
      discount: 6,
      rating: 4.7,
      reviewCount: 89,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop",
      tags: ["Premium", "AI Powered"],
      seller: "SmartDeals NG",
      verified: true,
    },
    {
      id: 3,
      title: "MacBook Pro M3",
      description: "16-inch, 1TB SSD - Space Black - Professional Grade",
      price: "₦2,150,000",
      originalPrice: "₦2,350,000",
      discount: 9,
      rating: 4.8,
      reviewCount: 256,
      category: "Computers",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop",
      tags: ["Apple", "Professional"],
      seller: "Apple Premium Reseller",
      verified: true,
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-tr from-green-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-tl from-orange-500/5 to-pink-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Premium Marketplace Experience
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                Curated
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Premium Products
              </span>
              <br />
              <span className="text-gray-600 dark:text-gray-400">
                For Your Lifestyle
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Discover verified products from trusted sellers with secure,
              seamless transactions. Experience shopping redefined.
            </p>

            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                {
                  icon: Shield,
                  text: "Verified Sellers",
                  color: "text-green-500",
                },
                { icon: Lock, text: "Secure Payments", color: "text-blue-500" },
                { icon: Zap, text: "Fast Delivery", color: "text-yellow-500" },
                {
                  icon: Award,
                  text: "Premium Quality",
                  color: "text-purple-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`p-2 rounded-lg bg-white/50 dark:bg-white/5 ${feature.color.replace(
                      "text",
                      "bg"
                    )}/10`}
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/products"
                className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-2xl flex items-center justify-center gap-3 font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#featured"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02]"
              >
                View Featured
              </Link>
            </motion.div>

            {/* App Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Also available on mobile
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <button className="flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all active:scale-95">
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 px-6 py-3 bg-white/10 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all active:scale-95">
                  <FaGooglePlay className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT – PRODUCT SLIDER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ y: springY, scale: springScale, opacity: springOpacity }}
            className="lg:w-1/2 relative"
          >
            <div className="relative h-[600px]">
              {/* Product Cards Container */}
              <div className="relative w-full h-full">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="absolute inset-0"
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      scale: currentSlide === index ? 1 : 0.95,
                      zIndex: currentSlide === index ? 10 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl h-full overflow-hidden border border-white/30 dark:border-white/10">
                      {/* Product Image */}
                      <div className="relative h-2/3 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />

                        {/* Discount Badge */}
                        {product.discount && (
                          <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                            -{product.discount}%
                          </div>
                        )}

                        {/* Verified Seller */}
                        {product.verified && (
                          <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium">
                              Verified
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-8">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {product.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                              {product.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-4">
                              {product.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300 dark:text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-medium">
                              {product.rating}
                            </span>
                          </div>
                        </div>

                        {/* Price & CTA */}
                        <div className="mt-6 flex justify-between items-center">
                          <div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white">
                              {product.price}
                            </div>
                            {product.originalPrice && (
                              <div className="text-lg text-gray-500 dark:text-gray-400 line-through">
                                {product.originalPrice}
                              </div>
                            )}
                          </div>

                          <button className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="font-semibold">View Details</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        setIsAutoPlaying(false);
                        setTimeout(() => setIsAutoPlaying(true), 10000);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
