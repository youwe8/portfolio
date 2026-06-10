import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography | Yuvaraj R",
  description: "Landscape and travel photography by Yuvaraj R — from the Himalayas to the Karnataka coast.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
