import React, { useRef } from "react";
import GalleryCard from "./GalleryCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const gallery = [
  {
    imgSrc: "/images/paintings/1.jpeg",
  },
  {
    imgSrc: "/images/paintings/2.jpeg",
  },
  {
    imgSrc: "/images/paintings/3.jpeg",
  },
  {
    imgSrc: "/images/paintings/7.jpeg",
  },
  {
    imgSrc: "/images/paintings/4.jpeg",
  },
  {
    imgSrc: "/images/paintings/5.jpeg",
  },
  {
    imgSrc: "/images/paintings/6.jpeg",
  },
  {
    imgSrc: "/images/paintings/8.jpeg",
  },
  {
    imgSrc: "/images/paintings/9.jpeg",
  },
  {
    imgSrc: "/images/paintings/10.jpeg",
  },
  {
    imgSrc: "/images/paintings/11.jpeg",
  },
  {
    imgSrc: "/images/paintings/12.jpeg",
  },
  {
    imgSrc: "/images/paintings/13.jpeg",
  },
  {
    imgSrc: "/images/paintings/14.jpeg",
  },
  {
    imgSrc: "/images/paintings/17.jpeg",
  },
  {
    imgSrc: "/images/paintings/18.jpeg",
  },
  {
    imgSrc: "/images/paintings/19.jpeg",
  },
];

const Gallery = () => {
  const scrollRef = useRef(null);
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        pin: false,
      },
      x: "-50%",
    });
  });
  return (
    <section className="section overflow-hidden" id="gallery">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Gallery</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] ">
          I'm a software engineer by profession & a passionate painter. Checkout
          some of my artwork.
        </p>
        <div
          className="scroll-container overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900"
          ref={scrollRef}
        >
          <div
            className="scrub-slide flex items-stretch gap-3"
            style={{ width: "300%" }}
          >
            {gallery.map(({ imgSrc }, index) => (
              <GalleryCard imgSrc={imgSrc} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
