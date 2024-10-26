import { gsap } from "gsap";
export const clipboardAnimation = (clipRef: any, clipConfirmRef: any) => {
  let tl = gsap.timeline({ paused: true });
  tl.to(
    clipRef,
    { duration: 0.5, yPercent: -100, ease: "power2.inOut" },
    "a",
  ).to(
    clipConfirmRef,
    { duration: 0.5, yPercent: -100, ease: "power2.inOut" },
    "a",
  );
  return tl;
};
