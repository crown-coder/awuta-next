"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import { Apple, Menu, X, Smartphone, ChevronRight } from "lucide-react";
import { FaGooglePlay } from "react-icons/fa";

type AppDownloadButtonProps = {
  platform: "ios" | "android";
  icon: ComponentType<{ className?: string }>;
  label: string;
  subLabel?: string;
  className?: string;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const AppDownloadButton: React.FC<AppDownloadButtonProps> = ({
    icon: Icon,
    label,
    subLabel,
    className = "",
  }) => (
    <button
      className={`
        group flex items-center gap-3 px-4 py-3 rounded-xl
        bg-linear-to-br from-white/10 to-white/5
        backdrop-blur-sm border border-white/20
        hover:from-white/20 hover:to-white/10
        hover:border-white/30
        active:scale-95 transition-all duration-200
        ${className}
      `}
    >
      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
        <Icon className="w-6 h-6" />
      </div>

      <div className="text-left">
        <div className="text-xs opacity-80">{subLabel ?? "Download on"}</div>
        <div className="font-semibold text-sm">{label}</div>
      </div>

      <ChevronRight className="w-4 h-4 ml-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </button>
  );

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-white/10 py-2"
            : "bg-transparent py-4"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Smartphone className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Awuta
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
            Beta
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium">
            {["products", "features", "privacy", "terms"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />

          {/* App buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all active:scale-95 text-sm font-medium">
              <Apple className="w-4 h-4" />
              App Store
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 hover:bg-white/20 transition-all active:scale-95 text-sm font-medium">
              <FaGooglePlay className="w-4 h-4" />
              Play Store
            </button>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 px-6 py-6 space-y-6">
          <div className="space-y-4">
            {["products", "features", "support", "terms", "privacy"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )
            )}
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-white/10">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
              Download Awuta
            </div>

            <div className="grid gap-3">
              <AppDownloadButton
                platform="ios"
                icon={Apple}
                label="App Store"
                subLabel="Download for iOS"
              />
              <AppDownloadButton
                platform="android"
                icon={FaGooglePlay}
                label="Google Play"
                subLabel="Download for Android"
              />
            </div>

            <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
              Version 1.0 • Available now
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
