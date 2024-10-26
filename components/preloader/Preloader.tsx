import { useRef, useEffect, FunctionComponent } from "react";
import { TopIntroStyle, BottomIntroStyle } from "./@styles";
import { preloaderAnimation } from "./@animation";

const Preloader: FunctionComponent<any> = ({
  introTopBlockRefProp,
  introTopLoadingBarRefProp,
  introBottomBlockRefProp,
  introBottomLoadingBarRefProp,
}) => {
  let introTopNumberRef: any = useRef(null);
  let introBottomNumberRef: any = useRef(null);

  useEffect(() => {
    preloaderAnimation(introTopNumberRef, introBottomNumberRef);
  });

  return (
    <>
      <TopIntroStyle ref={introTopBlockRefProp}>
        <div
          className="topIntroloadingBar"
          ref={introTopLoadingBarRefProp}
        ></div>
        <div
          className="topIntroNumber"
          ref={(el) => {
            introTopNumberRef = el;
          }}
        >
          0
        </div>
      </TopIntroStyle>
      <BottomIntroStyle ref={introBottomBlockRefProp}>
        <div
          className="bottomIntroLoadingBar"
          ref={introBottomLoadingBarRefProp}
        ></div>
        <div
          className="bottomIntroNumber"
          ref={(el) => {
            introBottomNumberRef = el;
          }}
        >
          0
        </div>
      </BottomIntroStyle>
    </>
  );
};
//

export default Preloader;
