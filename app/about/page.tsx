"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiDownload } from "react-icons/fi";
import content from "@/data/content.json";

export default function About() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <h1 className="text-5xl font-bold mb-6 text-gray-900">About Me</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {content.profile.bio}
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12 text-gray-900">Skills & Languages</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Skills</h3>
                <ul className="space-y-2">
                  {content.profile.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Languages</h3>
                <ul className="space-y-2">
                  {content.profile.languages.map((language) => (
                    <li key={language} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Looking for Volunteer Opportunities</h2>
              <p className="text-gray-600 mb-6">
                I'm passionate about community engagement and eager to contribute my skills in photography,
                event organization, and team building to meaningful causes.
              </p>
              <a
                href="/volunteer-profile.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors"
              >
                <FiDownload />
                Download Volunteer Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
