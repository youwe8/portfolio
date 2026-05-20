"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiMail, FiPhone, FiMapPin, FiInstagram } from "react-icons/fi";
import content from "@/data/content.json";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <h1 className="text-5xl font-bold mb-6 text-gray-900">Get in Touch</h1>
          <p className="text-xl text-gray-600 mb-12">
            Interested in collaboration, volunteering opportunities, or just want to chat about adventures?
            I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FiMail className="text-blue-600 text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href={`mailto:${content.profile.email}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {content.profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiPhone className="text-blue-600 text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href={`tel:${content.profile.phone}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {content.profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiMapPin className="text-blue-600 text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">{content.profile.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiInstagram className="text-blue-600 text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <a
                      href={`https://instagram.com/${content.profile.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      @{content.profile.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send a Quick Message</h2>
              <p className="text-gray-600 mb-6">
                Contact form coming soon! For now, feel free to reach out directly via email or phone.
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${content.profile.email}?subject=Hello from Portfolio`}
                  className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-center transition-colors"
                >
                  Send Email
                </a>
                <a
                  href={`https://wa.me/${content.profile.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold text-center transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
