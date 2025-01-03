import React from "react";
import { HERO_CONTENT } from "../utils/index.utils";
import profilePic from "../media/bikram.jpeg";
// import { montion } from "framer-motion";
export default function HeroSection() {
  return (
    <div className="border-b w-full items-center border-neutral-900  lg-:mb-35 mt-10 pb-10">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start justify-center  max-w-5xl mx-10">
            <h1 className="pb-16 text-4xl font-normal tracking-tight lg:mt-16 lg:text-6xl text-red-400">
              Hi, I'm Bikram Rai
            </h1>
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent
            pt-3
            "
            >
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6  text-zinc-400 text-sm md:text-base">
              {HERO_CONTENT} <br />
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-16 p-20">
          <div className="flex justify-center ">
            <img
              className="rounded-full "
              src={profilePic}
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
