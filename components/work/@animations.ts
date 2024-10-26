import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const titleAnimation = (animRef: string, endAnchor: string) => {
  ScrollTrigger.create({
    pin: animRef,
    trigger: animRef,
    endTrigger: endAnchor,
    start: "bottom bottom-=40px",
    end: "bottom bottom-=40px",
  });
};
