// app/seller/[id]/SellerClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Shield,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  Users,
  Package,
  TrendingUp,
  MessageSquare,
  Phone,
  Mail,
  ArrowLeft,
  ShoppingBag,
  Heart,
  Eye,
  Award,
  Zap,
  Filter,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SUPABASE_PUBLIC_URL =
  "https://lrugfzihdezsucqxheyn.supabase.co/storage/v1/object/public/";

export default function SellerClient({
  seller,
  products,
}: {
  seller: any;
  products: any[];
}) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [sortBy, setSortBy] = useState<string>("featured");

  // Seller stats (mock data - would come from API in production)
  const sellerStats = {
    rating: 4.9,
    reviews: 256,
    products: products.length,
    responseRate: "98%",
    responseTime: "2 hours",
    joinedYear: new Date().getFullYear() - 2,
    totalSales: "1.2K+",
    repeatCustomers: "85%",
    verified: seller.business?.verified || false,
  };

  // Extract unique categories from products
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return (a.price?.value || 0) - (b.price?.value || 0);
        case "price-high":
          return (b.price?.value || 0) - (a.price?.value || 0);
        case "newest":
          return (
            new Date(b.createdAt || "").getTime() -
            new Date(a.createdAt || "").getTime()
          );
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const formatPrice = (price?: number) =>
    price ? `₦${price.toLocaleString()}` : "₦0";

  const sellerImage = seller.profile_photo_path
    ? `${SUPABASE_PUBLIC_URL}/${seller.profile_photo_path}`
    : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        {/* Seller Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-linear-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Seller Avatar */}
            <div className="relative">
              <img
                src={sellerImage}
                alt="Seller"
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop";
                }}
              />
              {sellerStats.verified && (
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-linear-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              )}
            </div>

            {/* Seller Info */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {seller.business?.name ||
                      `${seller.first_name} ${seller.last_name}`}
                  </h1>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(sellerStats.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {sellerStats.rating.toFixed(1)}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      ({sellerStats.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="group px-6 py-3 bg-linear-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </button>
                  <button className="group px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold">
                    <Phone className="w-4 h-4" />
                    Call Seller
                  </button>
                  <button className="group px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold">
                    <Heart className="w-4 h-4" />
                    Follow
                  </button>
                </div>
              </div>

              {seller.business?.description && (
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  {seller.business.description}
                </p>
              )}

              {/* Seller Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    value: seller.business?.location || "Lagos, Nigeria",
                  },
                  {
                    icon: Calendar,
                    label: "Joined",
                    value: `Member since ${sellerStats.joinedYear}`,
                  },
                  {
                    icon: Package,
                    label: "Products",
                    value: `${sellerStats.products} listed`,
                  },
                  {
                    icon: TrendingUp,
                    label: "Sales",
                    value: sellerStats.totalSales,
                  },
                ].map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-linear-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <detail.icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {detail.label}
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {detail.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Seller Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            {
              value: sellerStats.responseRate,
              label: "Response Rate",
              icon: Zap,
              color: "from-emerald-500 to-green-500",
            },
            {
              value: sellerStats.responseTime,
              label: "Response Time",
              icon: Clock,
              color: "from-blue-500 to-cyan-500",
            },
            {
              value: sellerStats.repeatCustomers,
              label: "Repeat Customers",
              icon: Users,
              color: "from-purple-500 to-pink-500",
            },
            {
              value: sellerStats.verified ? "Verified" : "Unverified",
              label: "Status",
              icon: Award,
              color: "from-amber-500 to-yellow-500",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-linear-to-br ${stat.color}/10 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 text-center hover:shadow-lg transition-all duration-300`}
            >
              <stat.icon
                className={`w-8 h-8 bg-linear-to-r ${stat.color} bg-clip-text text-transparent mx-auto mb-3`}
              />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Products Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Seller Products
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {products.length} premium products available
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Category:
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-transparent text-gray-900 dark:text-white font-medium focus:outline-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-transparent text-gray-900 dark:text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                <Grid
                  className={`w-4 h-4 ${
                    viewMode === "grid"
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                <List
                  className={`w-4 h-4 ${
                    viewMode === "list"
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid/List */}
        {viewMode === "grid" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      <img
                        src={
                          product.listing_media?.[0]?.path
                            ? `${SUPABASE_PUBLIC_URL}/${product.listing_media[0].path}`
                            : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop"
                        }
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {product.category || "Uncategorized"}
                        </span>
                        {product.featured && (
                          <span className="px-2 py-1 text-xs font-medium bg-linear-to-r from-amber-500/10 to-yellow-500/10 dark:from-amber-500/20 dark:to-yellow-500/20 text-amber-600 dark:text-amber-400 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 mb-2">
                        {product.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm mb-4">
                        {product.description || "No description available"}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {formatPrice(product.price?.value)}
                        </div>
                        <button className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                          <ShoppingBag className="w-4 h-4" />
                          <span className="font-semibold text-sm">View</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* List View */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ x: 4 }}
              >
                <Link href={`/product/${product.id}`}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-6">
                      {/* Image */}
                      <div className="relative w-24 h-24 lg:w-32 lg:h-32 shrink-0 rounded-2xl overflow-hidden">
                        <img
                          src={
                            product.listing_media?.[0]?.path
                              ? `${SUPABASE_PUBLIC_URL}/${product.listing_media[0].path}`
                              : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop"
                          }
                          alt={product.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop";
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {product.title}
                            </h3>
                            <div className="flex items-center gap-4 mb-3">
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {product.category || "Uncategorized"}
                              </span>
                              {product.featured && (
                                <span className="px-2 py-1 text-xs font-medium bg-linear-to-r from-amber-500/10 to-yellow-500/10 dark:from-amber-500/20 dark:to-yellow-500/20 text-amber-600 dark:text-amber-400 rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                              {product.description ||
                                "No description available"}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                              {formatPrice(product.price?.value)}
                            </div>
                            <button className="group inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                              <ShoppingBag className="w-4 h-4" />
                              <span className="font-semibold">
                                View Details
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {currentProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center mb-6">
              <Package className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              No products found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              This seller doesn't have any products in the selected category.
            </p>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center gap-2 mt-12"
          >
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl border border-gray-300 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-xl font-medium transition-all ${
                    currentPage === pageNum
                      ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl border border-gray-300 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
