import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const GsapScroll = () => {
  const scrollRef = useRef();
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 250 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom, bottom",
          end: "top, 20%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });
  }, []);
  return (
    <div className="flex justify-center items-center flex-col overflow-hidden gap-5">
      <div className="w-screen h-screen flex justify-center items-center">
        Scroll down
      </div>
      <div
        className="flex justify-center items-center h-screen flex-col gap-5"
        ref={scrollRef}
      >
        <div
          id="green"
          className="w-30 green h-30 rounded-3xl bg-green-500"
        ></div>
        <div className="w-30 green h-30 rounded-3xl bg-red-500"></div>
      </div>
    </div>
  );
};

export default GsapScroll;
