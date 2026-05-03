import type { Metadata } from "next";
import { Work } from "@/app/components/Work";

export const metadata: Metadata = {
  title: "Work & Personal Projects | Ishan Tandel",
  description: "A curated collection of work and personal design projects by Ishan Tandel",
};

export default function WorkPersonalProjectsPage() {
  return <Work />;
}
