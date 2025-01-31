import React from "react";
import { ButtonOutline, ButtonPrimary } from "./Button";

const Body = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container  items-center lg:grid lg:grid-cols-2  lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/personal.jpeg"
                width={40}
                height={40}
                alt="Deeksha Sareen Potrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Open for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building scalable websites for the future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href={undefined}
              target={undefined}
              classes={undefined}
            />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
              target={undefined}
              classes={undefined}
            />
          </div>
        </div>
        <div className="hidden md:block">
          <figure className="relative w-[350px] h-[350px] ml-auto rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900 rounded-xl"></div>
            <img
              src="/images/personal.jpeg"
              alt="Deeksha Saren"
              className="w-full h-full object-cover rounded-xl"
              width={650}
              height={650}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Body;
