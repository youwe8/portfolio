"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import Lightbox from "./Lightbox";

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  category?: string;
  location?: string;
  date?: string;
  medium?: string;
  tags?: string[];
  featured?: boolean;
}

interface GalleryProps {
  items: GalleryItem[];
  /** Show category filter chips derived from the items */
  showFilters?: boolean;
}

const formatCategory = (category: string) =>
  category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

// Rotating heights give the masonry columns visual rhythm
const heights = ["h-72", "h-96", "h-80", "h-[26rem]", "h-64", "h-88"];

export default function Gallery({ items, showFilters = false }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(items.map((item) => item.category).filter((c): c is string => Boolean(c)))
    );
    return unique.length > 1 ? unique : [];
  }, [items]);

  const visibleItems = useMemo(
    () =>
      activeCategory === "all"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [items, activeCategory]
  );

  return (
    <div>
      {/* Category filters */}
      {showFilters && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", ...categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category === "all" ? "All" : formatCategory(category)}
            </button>
          ))}
        </div>
      )}

      {/* Masonry grid */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setLightboxIndex(visibleItems.indexOf(item))}
              className={`group relative block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow text-left cursor-pointer ${
                heights[index % heights.length]
              }`}
              aria-label={`View ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                {item.category && (
                  <span className="inline-block px-2.5 py-0.5 bg-blue-600/90 rounded-full text-[11px] font-semibold mb-2">
                    {formatCategory(item.category)}
                  </span>
                )}
                <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                {item.location && (
                  <p className="text-xs text-gray-300 mt-1 flex items-center gap-1">
                    <FiMapPin size={12} /> {item.location}
                  </p>
                )}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox
        items={visibleItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
