"use client";

import { motion } from "framer-motion";
import Gallery from "@/components/Gallery";
import content from "@/data/content.json";

export default function Creative() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Creative Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Paintings and artistic projects — the mountains inspire the canvas
            as much as the camera.
          </p>
        </motion.div>

        <Gallery items={content.creative} />
      </div>
    </div>
  );
}
