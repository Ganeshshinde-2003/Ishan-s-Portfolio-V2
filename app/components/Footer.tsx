import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[var(--border)] mt-20 flex gap-4 w-full items-center justify-center py-2">
      <span className="text-[var(--text-muted)] font-extrabold">Built with Opus 4.6</span>
      <div className="h-full bg-[var(--text-muted)] w-px"></div>
      <span className="text-[var(--text-muted)] font-extrabold">Updated on 18th April</span>
      <div className="h-full bg-[var(--text-muted)] w-px"></div>
      <Link
        href="https://www.linkedin.com/in/ishan-tandel-90b592222/"
        className="font-extrabold text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>
    </div>
  );
};

export default Footer;
