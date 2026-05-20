"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function Community() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4 text-gray-900">🎮</h1>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Community & Social</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          Coming soon! Photos from game nights, community events, sports activities, and social gatherings.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-colors"
        >
          <FiArrowLeft />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
