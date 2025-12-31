"use client";

import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  CheckCircle,
  Mail,
  Lock,
  Users,
  Globe,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const TermsAndConditions = () => {
  const lastUpdated = "January 15, 2024";
  const effectiveDate = "January 15, 2024";

  const sections = [
    {
      id: "agreement",
      title: "1. Agreement to Terms",
      content:
        "By accessing and using Awuta, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our platform.",
      points: [
        "You must be at least 18 years old to use our services",
        "You agree to provide accurate and complete information",
        "You are responsible for maintaining the confidentiality of your account",
      ],
    },
    {
      id: "services",
      title: "2. Our Services",
      content:
        "Awuta provides a marketplace platform connecting verified vendors with buyers for secure transactions.",
      points: [
        "Platform for product listings and discovery",
        "Secure payment processing services",
        "Verified vendor and buyer matching",
        "Dispute resolution services",
      ],
    },
    {
      id: "user-accounts",
      title: "3. User Accounts",
      content:
        "To access certain features, you must create an account with accurate and complete information.",
      points: [
        "You are responsible for all activities under your account",
        "You must notify us immediately of any security breach",
        "We reserve the right to suspend or terminate accounts that violate our terms",
        "Account information must be kept current and accurate",
      ],
    },
    {
      id: "vendor-responsibilities",
      title: "4. Vendor Responsibilities",
      content:
        "Vendors are responsible for the accuracy, quality, and legality of their product listings.",
      points: [
        "Accurate product descriptions and images",
        "Compliance with all applicable laws and regulations",
        "Timely shipping and order fulfillment",
        "Responsive customer service",
        "Product quality assurance and warranties",
      ],
    },
    {
      id: "buyer-responsibilities",
      title: "5. Buyer Responsibilities",
      content:
        "Buyers agree to use the platform responsibly and engage in good faith transactions.",
      points: [
        "Accurate shipping information",
        "Timely payment for purchased items",
        "Good faith communication with vendors",
        "Responsible use of the platform",
        "Compliance with return and refund policies",
      ],
    },
    {
      id: "payments",
      title: "6. Payments & Fees",
      content:
        "Awuta charges transaction fees for successful sales. All fees are transparently disclosed before purchase.",
      points: [
        "5% transaction fee on successful sales",
        "Payment processing through secure third-party providers",
        "Refunds processed within 7-14 business days",
        "Currency conversion fees may apply",
      ],
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual Property",
      content:
        "All content on Awuta is protected by intellectual property laws.",
      points: [
        "Platform content is owned by Awuta or licensed to us",
        "User-generated content remains the property of the user",
        "License granted to display user content on the platform",
        "Trademarks and logos are protected",
      ],
    },
    {
      id: "privacy",
      title: "8. Privacy",
      content:
        "Your privacy is important to us. Please review our Privacy Policy for information on how we collect, use, and protect your data.",
      points: [
        "Data collection and usage practices",
        "Cookies and tracking technologies",
        "Data sharing with third parties",
        "User data rights and controls",
        "Security measures and protocols",
      ],
    },
    {
      id: "termination",
      title: "9. Termination",
      content:
        "We may terminate or suspend your account immediately, without prior notice, for conduct that violates these Terms.",
      points: [
        "Violation of terms and conditions",
        "Fraudulent or illegal activity",
        "Harm to other users or the platform",
        "Extended account inactivity",
      ],
    },
    {
      id: "disclaimer",
      title: "10. Disclaimer of Warranties",
      content:
        "Awuta is provided 'as is' without warranties of any kind, either express or implied.",
      points: [
        "We do not guarantee uninterrupted or error-free service",
        "Content accuracy is the responsibility of users",
        "Third-party service provider limitations",
        "Marketplace nature of the platform",
      ],
    },
    {
      id: "limitation-liability",
      title: "11. Limitation of Liability",
      content:
        "To the maximum extent permitted by law, Awuta shall not be liable for certain damages.",
      points: [
        "Indirect or consequential damages",
        "Loss of data or profits",
        "Service interruptions",
        "Third-party actions",
        "Maximum liability limited to fees paid",
      ],
    },
    {
      id: "governing-law",
      title: "12. Governing Law",
      content:
        "These Terms shall be governed by the laws of the Federal Republic of Nigeria.",
      points: [
        "Jurisdiction in Lagos State, Nigeria",
        "Compliance with Nigerian consumer protection laws",
        "Dispute resolution through arbitration",
        "Local law variations may apply",
      ],
    },
    {
      id: "changes",
      title: "13. Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. We will notify users of significant changes.",
      points: [
        "30 days notice for significant changes",
        "Continued use constitutes acceptance",
        "Users responsible for reviewing updates",
        "Change history available upon request",
      ],
    },
    {
      id: "contact",
      title: "14. Contact Information",
      content:
        "For questions about these Terms, please contact our legal team.",
      points: [
        "Email: legal@awuta.com",
        "Phone: +234 1 700 0000",
        "Address: Awuta Legal Department, Lagos, Nigeria",
        "Response time: 3-5 business days",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900 pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 mb-6">
            <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              LEGAL DOCUMENT
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Terms &{" "}
            </span>
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Please read these terms carefully before using our platform. By
            accessing Awuta, you agree to be bound by these terms.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FileText className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Effective: {effectiveDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Globe className="w-4 h-4" />
              <span>Governing Law: Nigeria</span>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-linear-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm rounded-3xl border border-blue-500/20 dark:border-blue-500/30 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Important Notice
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  These Terms and Conditions constitute a legally binding
                  agreement between you and Awuta. We encourage you to read them
                  carefully and seek independent legal advice if needed. By
                  creating an account or using our services, you acknowledge
                  that you have read, understood, and agree to be bound by all
                  terms herein.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Table of Contents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center justify-between p-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-linear-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {index + 1}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {section.title.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="scroll-mt-32"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shrink-0">
                    {index === 0 && <FileText className="w-7 h-7 text-white" />}
                    {index === 1 && <Globe className="w-7 h-7 text-white" />}
                    {index === 2 && <Users className="w-7 h-7 text-white" />}
                    {index === 3 && <Package className="w-7 h-7 text-white" />}
                    {index === 4 && (
                      <ShoppingBag className="w-7 h-7 text-white" />
                    )}
                    {index === 5 && (
                      <CreditCard className="w-7 h-7 text-white" />
                    )}
                    {index === 6 && <Lock className="w-7 h-7 text-white" />}
                    {index === 7 && <Shield className="w-7 h-7 text-white" />}
                    {index === 8 && <XCircle className="w-7 h-7 text-white" />}
                    {index === 9 && (
                      <AlertCircle className="w-7 h-7 text-white" />
                    )}
                    {index === 10 && <Scale className="w-7 h-7 text-white" />}
                    {index === 11 && <Gavel className="w-7 h-7 text-white" />}
                    {index === 12 && (
                      <RefreshCw className="w-7 h-7 text-white" />
                    )}
                    {index === 13 && <Mail className="w-7 h-7 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                      {section.content}
                    </p>

                    {section.points && section.points.length > 0 && (
                      <ul className="space-y-3">
                        {section.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Acceptance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-linear-to-br from-gray-900/90 to-gray-800/90 dark:from-gray-900 dark:to-gray-800 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800 dark:border-gray-700 shadow-2xl text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="bg-linear-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Agreement Acceptance
              </span>
            </h3>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              By using Awuta, you acknowledge that you have read, understood,
              and agree to be bound by all terms and conditions outlined in this
              document. Your continued use of our platform constitutes ongoing
              acceptance of these terms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/privacy"
                className="group px-8 py-4 bg-white text-gray-900 rounded-2xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg"
              >
                <Shield className="w-5 h-5" />
                Privacy Policy
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="mailto:legal@awuta.com?subject=Terms%20and%20Conditions%20Inquiry"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl hover:border-white/50 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 font-semibold text-lg"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </motion.div>

        {/* Navigation Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} Awuta Data. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Add missing icon imports
const Calendar = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const Package = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const ShoppingBag = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

const CreditCard = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);

const XCircle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AlertCircle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Scale = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
    />
  </svg>
);

const Gavel = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    />
  </svg>
);

const RefreshCw = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

export default TermsAndConditions;
