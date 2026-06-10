"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiMapPin, FiCalendar } from "react-icons/fi";
import type { GalleryItem } from "./Gallery";

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;
  const item = isOpen ? items[index] : null;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between p-4 text-white z-10">
            <span className="text-sm text-gray-400">
              {index + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Image area */}
          <div
            className="relative flex-1 mx-4 md:mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* Nav arrows */}
            {items.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  aria-label="Previous image"
                  className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next image"
                  className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <FiChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Caption */}
          <div
            className="p-6 text-center text-white max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h2>
            {item.description && (
              <p className="text-sm md:text-base text-gray-300 mb-3">{item.description}</p>
            )}
            <div className="flex items-center justify-center gap-6 text-xs md:text-sm text-gray-400">
              {item.location && (
                <span className="flex items-center gap-1.5">
                  <FiMapPin /> {item.location}
                </span>
              )}
              {item.date && (
                <span className="flex items-center gap-1.5">
                  <FiCalendar /> {item.date}
                </span>
              )}
              {item.medium && <span>{item.medium}</span>}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
