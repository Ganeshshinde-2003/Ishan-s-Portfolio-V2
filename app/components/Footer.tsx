import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2F3037] mt-20 flex gap-4 w-full items-center justify-center py-2">
      <span className="text-[#A7AAB4] font-extrabold">Built with Opus 4.6</span>
      <div className="h-full bg-[#A7AAB4] w-px"></div>
      <span className="text-[#A7AAB4] font-extrabold">Updated on 18th April</span>
      <div className="h-full bg-[#A7AAB4] w-px"></div>
      <Link
        href="https://www.linkedin.com/in/ishan-tandel-90b592222/"
        className="font-extrabold text-[#A7AAB4] hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>
    </div>
  );
};

export default Footer;
