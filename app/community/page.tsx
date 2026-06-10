"use client";

import { motion } from "framer-motion";
import Gallery from "@/components/Gallery";
import content from "@/data/content.json";

export default function Community() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Community & Social</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Game nights, sports days, and meetups — bringing people together is
            as much a passion as the mountains are.
          </p>
        </motion.div>

        <Gallery items={content.community} />

        {/* Testimonials */}
        {content.testimonials.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              What People Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {content.testimonials.map((testimonial) => (
                <figure
                  key={testimonial.author}
                  className="bg-gray-50 rounded-2xl p-8 shadow-sm"
                >
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm">
                    <span className="font-semibold text-gray-900">{testimonial.author}</span>
                    <span className="text-gray-500"> · {testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
