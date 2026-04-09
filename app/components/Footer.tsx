import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1A1B1E] mt-20 flex gap-4 w-full items-center justify-center py-2">
      <Link href="mailto:ishan.tandel1803@gmail.com" className="text-[#A7AAB4] font-semibold">
        ishan.tandel1803@gmail.com
      </Link>
      <div className="h-full bg-[#A7AAB4] w-px"></div>
      <Link
        href="https://www.linkedin.com/in/ishan-tandel-1803/"
      >
        LinkedIn
      </Link>
    </div>
  );
};

export default Footer;
