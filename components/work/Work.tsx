import { useRef, useEffect } from "react";
import ProjectList from "./ProjectList";
import ProjectTitle from "./ProjectTitle";
// import { titleAnimation } from "./@animations";
import { DesktopStyle, MobileStyle } from "./@styles";

const Work = () => {
  //BUG ANIMATION JUMPY WITH CHROME BAR

  //TODO:REFACTOR EXPAND WIDTH OF THE PROJECT TITLES (MAKE WORK TITLE SMALLER)

  //TODO:FUTURE-FEATURES WORK LIST MOTION

  //TODO:REFACTOR MAKE A COMPONENT FOR LIST ITEMS

  //SCROLL FOLLOW

  // let workTitleMobileRef: any = useRef();

  // useEffect(() => {
  //   titleAnimation(workTitleMobileRef, "#workListMobile");
  // }, []);

  return (
    <>
      <DesktopStyle>
        <ProjectTitle />
        <ProjectList listId="workList" isDesktop />
      </DesktopStyle>

      <MobileStyle>
        <ProjectTitle
        // titleRef={(el: any) => {
        //   workTitleMobileRef = el;
        // }}
        />
        <ProjectList listId="workListMobile" />
      </MobileStyle>
    </>
  );
};
//

export default Work;
