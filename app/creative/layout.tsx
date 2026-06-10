import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Work | Yuvaraj R",
  description: "Paintings and artistic projects by Yuvaraj R.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
