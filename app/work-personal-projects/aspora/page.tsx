import type { Metadata } from "next";
import { CaseStudyAspora } from "@/app/components/CaseStudyAspora";

export const metadata: Metadata = {
  title: "Aspora — Referral Redesign | Ishan Tandel",
  description: "Case study: Redesigning Aspora's referral experience, lifting the referral rate from 68% to 89%.",
};

export default function AsporaPage() {
  return <CaseStudyAspora />;
}
