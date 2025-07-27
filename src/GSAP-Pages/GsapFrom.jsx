import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "bounce.in",
      backgroundColor: "bg-red-500",
      borderRadius: "100%",
    });
  }, []);
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-5">
      <h1 className="text-4xl font-bold">GSAP + React</h1>
      <div id="green" className="w-30 h-30 rounded-3xl bg-green-500"></div>
    </div>
  );
};

export default GsapFrom;
