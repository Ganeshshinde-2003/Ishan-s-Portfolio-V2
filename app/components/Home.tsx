"use client";

import homepic from "../../public/assets/home_screen_pic.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import CardWrapper from "./CardWrapper";
import {
  mylife,
  personalProjectsData,
  recentHighlights,
  videCodedProjectsData,
} from "../content/data";
import WordOfAppreciation from "./WordOfAppreciation";
import Footer from "./Footer";


export function Home() {
  return (
    <div className="h-full w-full flex flex-col items-start justify-start relative">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "var(--hero-gradient-overlay)",
          zIndex: 0,
        }}
      />
      <motion.div
        className="w-full mx-auto px-6  md:max-w-212.5 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* First Section */}
        <div className="flex flex-col md:flex-row mt-10 mb-36 md:my-36 justify-between gap-0 md:gap-8 items-stretch w-full">
          <div className="flex flex-col justify-center md:justify-between md:w-[65%] h-fit md:h-100">
            <div>
              <div className="flex gap-2">
                <p className="text-[var(--accent)] font-medium text-xs">
                  Product + AI Designer{" "}
                </p>
                <p className="text-[var(--text-faint)] font-medium text-xs">|</p>
                <p className="text-[var(--text-muted)] font-medium text-xs">
                  OPEN TO WORK
                </p>
              </div>
              <p className="text-[var(--text)] font-normal text-3xl md:text-4xl mt-5">
                Hey, I&apos;m Ishan Tandel
              </p>
              <p className="text-[var(--text-muted)] font-medium text-sm mt-3 leading-6 tracking-wide">
                I&apos;m a Product Designer who builds AI-enhanced experiences, backed by a B.tech in Computer Science and a MSc in User Experience. Currently seeking product and UX design roles.
              </p>
            </div>
            <div className="mb-0 md:mb-20">
              <p className="text-[var(--text-muted)] font-medium text-xs mt-12 tracking-wider">
                Worked at startups backed by
              </p>
              <div className="flex items-center gap-6 mt-4">
                <Image
                  src="/assets/workedwith/sequoia.png"
                  alt="Sequoia"
                  width={150}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/assets/workedwith/ycombinator.png"
                  alt="Y Combinator"
                  width={200}
                  height={30}
                  className="h-[30px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center w-1/3 gap-2 h-100">
            <div className="flex-1 flex items-stretch p-2 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
              <Image
                src={homepic}
                alt="Home"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <div className="w-full flex items-center justify-end gap-2">
              <p className="text-xs font-medium text-[var(--text-muted)] tracking-wider">WINDY HAIR</p>
              <div className="flex items-center justify-center py-1 px-2 border border-[var(--border)] rounded-md bg-[var(--bg)]">
                <p className="text-sm font-medium tracking-wider text-[var(--text-muted)]">Img</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-36 md:my-36">
          <div className="w-full md:max-w-212.5">
            <CardWrapper data={personalProjectsData} />
          </div>
        </div>
        <div className="flex justify-center my-36 md:my-36">
          <div className="w-full md:max-w-212.5">
            <CardWrapper data={videCodedProjectsData} />
          </div>
        </div>
        <div className="flex justify-center my-36 md:my-36">
          <div className="w-full md:max-w-212.5">
            <WordOfAppreciation />
          </div>
        </div>
        <div className="flex justify-center my-36 md:my-36">
          <div className="w-full md:max-w-212.5">
            <CardWrapper data={recentHighlights} />
          </div>
        </div>
        <div className="flex justify-center my-36 md:my-36">
          <div className="w-full md:max-w-212.5">
            <CardWrapper data={mylife} />
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
