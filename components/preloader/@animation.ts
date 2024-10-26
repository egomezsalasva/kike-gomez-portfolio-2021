import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const preloaderAnimation = (
  introTopNumberRef: any,
  introBottomNumberRef: any,
) => {
  //Timeline Init
  const percentageTl = gsap.timeline();
  //Variables
  const initialLoadPerCentSecs = 0.03;
  //Percentage Timeline
  percentageTl
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "1",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "2",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "3",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "4",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "5",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "6",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "7",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "8",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "9",
      ease: "power2.inOut",
    })
    .to(introTopNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "1",
      ease: "power2.inOut",
    })
    .to(
      introBottomNumberRef,
      { duration: initialLoadPerCentSecs, text: "0", ease: "power2.inOut" },
      `-=${initialLoadPerCentSecs}`,
    )
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "1",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "2",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "3",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "4",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "5",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "6",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "7",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "8",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "9",
      ease: "power2.inOut",
    })
    .to(introTopNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "2",
      ease: "power2.inOut",
    })
    .to(
      introBottomNumberRef,
      { duration: initialLoadPerCentSecs, text: "0", ease: "power2.inOut" },
      `-=${initialLoadPerCentSecs}`,
    )
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "1",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "2",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "3",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "4",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "5",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "6",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "7",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "8",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "9",
      ease: "power2.inOut",
    })
    .to(introTopNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "3",
      ease: "power2.inOut",
    })
    .to(
      introBottomNumberRef,
      { duration: initialLoadPerCentSecs, text: "0", ease: "power2.inOut" },
      `-=${initialLoadPerCentSecs}`,
    )
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "1",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "2",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "3",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "4",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "5",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "6",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "7",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "8",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "9",
      ease: "power2.inOut",
    })
    .to(introTopNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "4",
      ease: "power2.inOut",
    })
    .to(
      introBottomNumberRef,
      { duration: initialLoadPerCentSecs, text: "0", ease: "power2.inOut" },
      `-=${initialLoadPerCentSecs}`,
    )
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "1",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "2",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "3",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "4",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "5",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "6",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "7",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "8",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "9",
      ease: "power2.inOut",
    })
    .to(introTopNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "5",
      ease: "power2.inOut",
    })
    .to(
      introBottomNumberRef,
      { duration: initialLoadPerCentSecs, text: "0", ease: "power2.inOut" },
      `-=${initialLoadPerCentSecs}`,
    )
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "1",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "2",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "3",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "4",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "5",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "6",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "7",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "8",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "9",
      ease: "power2.inOut",
    })
    .to(introTopNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "6",
      ease: "power2.inOut",
    })
    .to(
      introBottomNumberRef,
      { duration: initialLoadPerCentSecs, text: "0", ease: "power2.inOut" },
      `-=${initialLoadPerCentSecs}`,
    )
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "1",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "2",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "3",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "4",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "5",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "6",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "7",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "8",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "9",
      ease: "power2.inOut",
    })
    .to(introTopNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "7",
      ease: "power2.inOut",
    })
    .to(
      introBottomNumberRef,
      { duration: initialLoadPerCentSecs, text: "0", ease: "power2.inOut" },
      `-=${initialLoadPerCentSecs}`,
    )
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "1",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "2",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "3",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "4",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "5",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "6",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "7",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "8",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "9",
      ease: "power2.inOut",
    })
    .to(introTopNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "8",
      ease: "power2.inOut",
    })
    .to(
      introBottomNumberRef,
      { duration: initialLoadPerCentSecs, text: "0", ease: "power2.inOut" },
      `-=${initialLoadPerCentSecs}`,
    )
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "1",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "2",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "3",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "4",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "5",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "6",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "7",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "8",
      ease: "power2.inOut",
    })
    .to(introBottomNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "9",
      ease: "power2.inOut",
    })
    .to(introTopNumberRef, {
      duration: initialLoadPerCentSecs,
      text: "9",
      ease: "power2.inOut",
    })
    .play();
  //
};
