import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adventures | Yuvaraj R",
  description: "Trekking, skydiving, paragliding, and road trips across India — adventure stories by Yuvaraj R.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
