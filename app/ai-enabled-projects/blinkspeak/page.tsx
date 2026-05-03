import type { Metadata } from "next";
import { CaseStudyBlinkSpeak } from "@/app/components/CaseStudyBlinkSpeak";

export const metadata: Metadata = {
  title: "BlinkSpeak — Giving ALS patients their voice back | Ishan Tandel",
  description: "Case study: Blink-to-speak communication device for ALS patients. Published at IEEE I2CT 2024.",
};

export default function BlinkSpeakPage() {
  return <CaseStudyBlinkSpeak />;
}
