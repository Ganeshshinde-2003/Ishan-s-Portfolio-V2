import type { Metadata } from "next";
import { CaseStudyZoth } from "@/app/components/CaseStudyZoth";

export const metadata: Metadata = {
  title: "Zoth.io — Tokenised Asset Marketplace | Ishan Tandel",
  description: "Case study: Designing the UX for a tokenised real-world asset marketplace.",
};

export default function ZothPage() {
  return <CaseStudyZoth />;
}
