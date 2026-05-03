import type { Metadata } from "next";
import { MyLife } from "@/app/components/MyLife";

export const metadata: Metadata = {
  title: "My Life | Ishan Tandel",
  description: "A glimpse into the life of Ishan Tandel beyond design.",
};

export default function MyLifePage() {
  return <MyLife />;
}
