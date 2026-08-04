import type { Metadata } from "next";
import { CaseStudyDecent } from "@/app/components/CaseStudyDecent";

export const metadata: Metadata = {
  title: "DEcent Healthcare — Decentralized Medical Records | Ishan Tandel",
  description: "Case study: Designing a decentralized blockchain healthcare platform where patients own and control their medical data.",
};

export default function DecentPage() {
  return <CaseStudyDecent />;
}
