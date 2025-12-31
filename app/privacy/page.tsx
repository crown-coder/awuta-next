"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  User,
  Database,
  Globe,
  Mail,
  Phone,
  RefreshCw,
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const PrivacyPolicy = () => {
  const lastUpdated = "January 15, 2024";
  const effectiveDate = "January 15, 2024";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content:
        "Awuta is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.",
      points: [
        "Applies to all users of Awuta services",
        "Covers information collected through our platform",
        "Explains your privacy rights and choices",
        "Compliant with global data protection regulations",
      ],
    },
    {
      id: "data-collection",
      title: "2. Information We Collect",
      content:
        "We collect various types of information to provide and improve our services.",
      points: [
        "Personal information (name, email, phone)",
        "Business information (company details, tax ID)",
        "Transaction data (purchase history, payment info)",
        "Usage data (device info, IP address, cookies)",
        "Communication data (messages, support tickets)",
      ],
    },
    {
      id: "collection-methods",
      title: "3. How We Collect Information",
      content:
        "We collect information through various methods when you interact with our platform.",
      points: [
        "Directly from you during registration",
        "Automatically through cookies and tracking technologies",
        "From third-party services (payment processors)",
        "Through communication with our support team",
        "Via analytics tools and monitoring systems",
      ],
    },
    {
      id: "data-usage",
      title: "4. How We Use Your Information",
      content:
        "We use collected information for specific, legitimate purposes related to our services.",
      points: [
        "To provide and maintain our services",
        "To process transactions and payments",
        "To communicate with you about your account",
        "To improve and personalize user experience",
        "To comply with legal obligations",
        "To prevent fraud and ensure security",
      ],
    },
    {
      id: "data-sharing",
      title: "5. Information Sharing & Disclosure",
      content:
        "We may share your information only in specific circumstances as outlined below.",
      points: [
        "With service providers and business partners",
        "For legal compliance and law enforcement",
        "During business transfers or mergers",
        "With your explicit consent",
        "In aggregated, anonymized form for analytics",
      ],
    },
    {
      id: "data-security",
      title: "6. Data Security",
      content:
        "We implement robust security measures to protect your personal information.",
      points: [
        "SSL/TLS encryption for all data transmissions",
        "Regular security audits and vulnerability testing",
        "Access controls and authentication measures",
        "Secure data storage with encryption at rest",
        "Employee training on data protection",
        "Incident response and breach notification procedures",
      ],
    },
    {
      id: "data-retention",
      title: "7. Data Retention",
      content:
        "We retain your personal information only for as long as necessary.",
      points: [
        "Active account data: Until account deletion",
        "Transaction records: 7 years for tax purposes",
        "Inactive accounts: Deleted after 24 months",
        "Backup data: Retained for 30 days",
        "Legal requirements may extend retention periods",
      ],
    },
    {
      id: "user-rights",
      title: "8. Your Privacy Rights",
      content:
        "You have specific rights regarding your personal information under applicable laws.",
      points: [
        "Right to access your personal data",
        "Right to correct inaccurate information",
        "Right to delete your personal data",
        "Right to restrict or object to processing",
        "Right to data portability",
        "Right to withdraw consent",
      ],
    },
    {
      id: "cookies",
      title: "9. Cookies & Tracking Technologies",
      content:
        "We use cookies and similar technologies to enhance your experience.",
      points: [
        "Essential cookies for platform functionality",
        "Analytics cookies to improve services",
        "Marketing cookies for personalized ads",
        "You can manage cookie preferences",
        "Opt-out options available for non-essential cookies",
      ],
    },
    {
      id: "third-party",
      title: "10. Third-Party Services",
      content:
        "We may use third-party services that collect information independently.",
      points: [
        "Payment processors (Stripe, PayPal)",
        "Analytics services (Google Analytics)",
        "Marketing and advertising partners",
        "Cloud service providers",
        "Each service has its own privacy policy",
      ],
    },
    {
      id: "children-privacy",
      title: "11. Children's Privacy",
      content:
        "Our services are not directed to individuals under the age of 18.",
      points: [
        "We do not knowingly collect data from children",
        "Users must be 18+ to create an account",
        "Parents can request deletion of child data",
        "Verification measures for age compliance",
        "Immediate action upon discovery of underage users",
      ],
    },
    {
      id: "international-transfers",
      title: "12. International Data Transfers",
      content:
        "Your information may be transferred to and processed in countries outside your residence.",
      points: [
        "Servers located in secure data centers",
        "Adequate safeguards for international transfers",
        "Standard Contractual Clauses for EU data",
        "Compliance with local data protection laws",
        "Transparency about data storage locations",
      ],
    },
    {
      id: "changes",
      title: "13. Changes to Privacy Policy",
      content:
        "We may update this Privacy Policy periodically to reflect changes in our practices.",
      points: [
        "Notification of significant changes via email",
        "Continued use constitutes acceptance",
        "Review of updates encouraged",
        "Change history maintained",
        "Effective date updated with each revision",
      ],
    },
    {
      id: "contact",
      title: "14. Contact Us",
      content:
        "For privacy-related questions or concerns, please contact our Data Protection Officer.",
      points: [
        "Email: privacy@awuta.com",
        "Phone: +234 1 700 0001",
        "Address: Data Protection Office, Awuta, Lagos, Nigeria",
        "Response time: 48 hours for privacy requests",
        "GDPR representative available for EU users",
      ],
    },
  ];

  const dataTypes = [
    {
      icon: User,
      title: "Personal Data",
      description: "Name, email, phone number, address",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Transaction Data",
      description: "Purchase history, payment information",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Eye,
      title: "Usage Data",
      description: "IP address, device info, browsing behavior",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: Shield,
      title: "Security Data",
      description: "Login attempts, security preferences",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const userRights = [
    { right: "Access", description: "View your personal data" },
    { right: "Correction", description: "Update inaccurate information" },
    { right: "Deletion", description: "Request data removal" },
    { right: "Portability", description: "Receive your data in usable format" },
    { right: "Objection", description: "Opt-out of processing" },
    { right: "Restriction", description: "Limit data processing" },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-emerald-500/10 to-cyan-500/10 dark:from-emerald-500/20 dark:to-cyan-500/20 border border-emerald-500/20 dark:border-emerald-500/30 mb-6">
            <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium bg-linear-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
              PRIVACY & SECURITY
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Privacy{" "}
            </span>
            <span className="bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            We take your privacy seriously. This policy explains how we collect,
            use, and protect your personal information when you use Awuta.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Shield className="w-4 h-4" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Lock className="w-4 h-4" />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Database className="w-4 h-4" />
              <span>Data Minimization</span>
            </div>
          </div>

          {/* Policy Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="text-gray-600 dark:text-gray-400">
              Last Updated: <span className="font-semibold">{lastUpdated}</span>
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Effective: <span className="font-semibold">{effectiveDate}</span>
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Version: <span className="font-semibold">2.1</span>
            </div>
          </div>
        </motion.div>

        {/* Data Types Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Data We Collect
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataTypes.map((data, index) => (
              <div
                key={index}
                className={`bg-linear-to-br ${data.color}/10 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 text-center hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-linear-to-br ${data.color}/20 mb-4`}
                >
                  <data.icon
                    className={`w-6 h-6 bg-linear-to-r ${data.color} bg-clip-text text-transparent`}
                  />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {data.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-sm rounded-3xl border border-blue-500/20 dark:border-blue-500/30 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Important Notice
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  By using Awuta, you consent to the collection, processing, and
                  storage of your personal information as described in this
                  Privacy Policy. We are committed to protecting your privacy
                  and being transparent about our data practices. Your trust is
                  important to us.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Policy Sections
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center justify-between p-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-linear-to-br from-emerald-500/10 to-cyan-500/10 dark:from-emerald-500/20 dark:to-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        {index + 1}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {section.title.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* User Rights Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-linear-to-br from-emerald-500/10 to-cyan-500/10 dark:from-emerald-500/20 dark:to-cyan-500/20 backdrop-blur-sm rounded-3xl border border-emerald-500/20 dark:border-emerald-500/30 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Your Privacy Rights
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {userRights.map((right, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {right.right}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {right.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Policy Sections */}
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
                  <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                    {index === 0 && <Shield className="w-7 h-7 text-white" />}
                    {index === 1 && <Database className="w-7 h-7 text-white" />}
                    {index === 2 && <Eye className="w-7 h-7 text-white" />}
                    {index === 3 && <User className="w-7 h-7 text-white" />}
                    {index === 4 && <Globe className="w-7 h-7 text-white" />}
                    {index === 5 && <Lock className="w-7 h-7 text-white" />}
                    {index === 6 && <Clock className="w-7 h-7 text-white" />}
                    {index === 7 && (
                      <CheckCircle className="w-7 h-7 text-white" />
                    )}
                    {index === 8 && <Cookie className="w-7 h-7 text-white" />}
                    {index === 9 && <Building className="w-7 h-7 text-white" />}
                    {index === 10 && <Child className="w-7 h-7 text-white" />}
                    {index === 11 && <Plane className="w-7 h-7 text-white" />}
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

        {/* Privacy Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-linear-to-br from-gray-900/90 to-gray-800/90 dark:from-gray-900 dark:to-gray-800 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800 dark:border-gray-700 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="bg-linear-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    Control Your Privacy
                  </span>
                </h3>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  You have control over your personal information. Access your
                  privacy settings to manage your data preferences, review what
                  information we have, and exercise your privacy rights.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/account/privacy"
                    className="group px-8 py-4 bg-white text-gray-900 rounded-2xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg"
                  >
                    <Settings className="w-5 h-5" />
                    Privacy Settings
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="mailto:privacy@awuta.com?subject=Privacy%20Request"
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl hover:border-white/50 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 font-semibold text-lg"
                  >
                    Contact Privacy Team
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Cookie Preferences", icon: Cookie },
                  { label: "Data Access", icon: Database },
                  { label: "Account Settings", icon: User },
                  { label: "Communication Preferences", icon: Mail },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-white/30 transition-colors"
                  >
                    <item.icon className="w-8 h-8 text-white mx-auto mb-3" />
                    <div className="text-sm font-medium text-white">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
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
              <span className="mx-2">•</span>
              <span className="inline-flex items-center gap-1">
                <Shield className="w-3 h-3 text-emerald-500" />
                GDPR Compliant
              </span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Terms & Conditions
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
const Clock = ({ className }: { className?: string }) => (
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
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Cookie = ({ className }: { className?: string }) => (
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
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Building = ({ className }: { className?: string }) => (
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
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const Child = ({ className }: { className?: string }) => (
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
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const Plane = ({ className }: { className?: string }) => (
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
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const Settings = ({ className }: { className?: string }) => (
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
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default PrivacyPolicy;
