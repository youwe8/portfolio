"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiMapPin, FiCamera, FiUsers, FiTrendingUp } from "react-icons/fi";
import content from "@/data/content.json";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const featuredAdventures = content.adventures.filter((item) => item.featured);
  const featuredPhotography = content.photography.filter((item) => item.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
            alt="Mountain landscape"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.h1
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {content.profile.name}
          </motion.h1>
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            {content.profile.tagline}
          </motion.p>
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/adventures"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-colors flex items-center gap-2"
            >
              Explore My Journey
              <FiArrowRight />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-semibold transition-colors border border-white/30"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-3 bg-white rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Welcome to My World</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {content.profile.bio}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <FiMapPin className="text-blue-600" />
                <span>{content.profile.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FiCamera className="text-blue-600" />
                <span>Photography Enthusiast</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FiTrendingUp className="text-blue-600" />
                <span>Adventure Seeker</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FiUsers className="text-blue-600" />
                <span>Community Builder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Adventures */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Adventures</h2>
            <p className="text-lg text-gray-600">
              Highlights from my journeys across mountains, skies, and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAdventures.map((adventure, index) => (
              <motion.div
                key={adventure.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-80">
                  <Image
                    src={adventure.image}
                    alt={adventure.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold mb-3">
                    {adventure.category.replace("-", " ").toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{adventure.title}</h3>
                  <p className="text-sm text-gray-200 mb-2">{adventure.location}</p>
                  <p className="text-sm text-gray-300 line-clamp-2">{adventure.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-12"
          >
            <Link
              href="/adventures"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors"
            >
              View All Adventures
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Photography */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Photography</h2>
            <p className="text-lg text-gray-600">
              Capturing moments and landscapes through my lens
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPhotography.slice(0, 4).map((photo, index) => (
              <motion.div
                key={photo.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-96">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                      <p className="text-sm">{photo.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-12"
          >
            <Link
              href="/photography"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-colors"
            >
              View Gallery
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 text-blue-100">
            Interested in collaboration, volunteering opportunities, or just want to chat about adventures?
            I'd love to hear from you!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-full font-semibold transition-colors text-lg"
          >
            Get in Touch
            <FiArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
