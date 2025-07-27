
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function GsapTo() {
  useGSAP(()=>{
    gsap.to("#animate", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "bounce.in",
    });
  }, []);
  return (
  <div className="flex justify-center items-center h-screen flex-col gap-5">
    <h1 className="text-4xl font-bold">GSAP + React</h1>
    <div id="animate" className="w-30 h-30 rounded-3xl bg-blue-500"></div>
  </div>
  );
}

export default GsapTo;
