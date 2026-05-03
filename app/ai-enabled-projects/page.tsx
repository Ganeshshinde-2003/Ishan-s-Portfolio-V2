import type { Metadata } from "next";
import { AiProject } from "@/app/components/AiProject";

export const metadata: Metadata = {
  title: "AI Enabled Projects | Ishan Tandel",
  description: "AI-powered products designed and shipped by Ishan Tandel",
};

export default function AiEnabledProjectsPage() {
  return <AiProject />;
}
