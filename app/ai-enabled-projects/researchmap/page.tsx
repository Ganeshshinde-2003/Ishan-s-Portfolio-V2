import type { Metadata } from "next";
import { CaseStudyResearchLens } from "@/app/components/CaseStudyResearchLens";

export const metadata: Metadata = {
  title: "ResearchLens — Map any research paper | Ishan Tandel",
  description: "Case study: Spatial research tool that lets you navigate a paper's knowledge graph using hand gestures.",
};

export default function ResearchMapPage() {
  return <CaseStudyResearchLens />;
}
