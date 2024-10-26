import { useRef, useEffect } from "react";
import ProjectList from "./ProjectList";
import ProjectTitle from "./ProjectTitle";
import { titleAnimation } from "./@animations";
import { DesktopStyle, MobileStyle } from "./@styles";

const Work = () => {
  //BUG ANIMATION JUMPY WITH CHROME BAR

  //TODO:REFACTOR EXPAND WIDTH OF THE PROJECT TITLES (MAKE WORK TITLE SMALLER)

  //TODO:FUTURE-FEATURES WORK LIST MOTION

  //TODO:REFACTOR MAKE A COMPONENT FOR LIST ITEMS

  //SCROLL FOLLOW

  let workTitleRef: any = useRef();
  let workTitleMobileRef: any = useRef();

  useEffect(() => {
    titleAnimation(workTitleRef, "#workList");
    titleAnimation(workTitleMobileRef, "#workListMobile");
  }, []);

  return (
    <>
      <DesktopStyle>
        <ProjectTitle
          titleRef={(el: any) => {
            workTitleRef = el;
          }}
        />
        <ProjectList listId="workList" />
      </DesktopStyle>

      <MobileStyle>
        <ProjectTitle
          titleRef={(el: any) => {
            workTitleMobileRef = el;
          }}
        />
        <ProjectList listId="workListMobile" />
      </MobileStyle>
    </>
  );
};
//

export default Work;
