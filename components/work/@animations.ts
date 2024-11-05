import { MutableRefObject } from "react";
import { gsap } from "gsap";
import { calculateAnimDurationBasedOnHeight } from "./@utils";

export const blockInfoAnim = (
  ref: MutableRefObject<HTMLElement>,
  readMoreActive: boolean,
) => {
  if (!ref.current) return;

  if (readMoreActive) {
    // First set: Get the natural height
    gsap.set(ref.current, {
      height: "auto",
      visibility: "hidden",
      display: "block",
    });
    const height = ref.current.offsetHeight;
    // Second set: Prepare for animation
    gsap.set(ref.current, {
      height: 0,
      visibility: "visible",
      overflow: "hidden",
    });
    gsap.to(ref.current, {
      height: height,
      duration: calculateAnimDurationBasedOnHeight(height, true),
      ease: "power2.out",
    });
  } else {
    const height = ref.current.offsetHeight;
    gsap.to(ref.current, {
      height: 0,
      duration: calculateAnimDurationBasedOnHeight(height, false),
      ease: "power2.in",
      onComplete: () => {
        gsap.set(ref.current, { display: "none" });
      },
    });
  }
};
