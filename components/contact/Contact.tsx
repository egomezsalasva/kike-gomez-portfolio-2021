import { useRef } from "react";
import ContactContent from "./ContactContent";
import { clipboardAnimation } from "./@animations";
import { DesktopStyle, MobileStyle } from "./@styles";
//import copyClipImg from '../public/copyClip.svg'

const Contact = () => {
  //TODO:REFACTOR RENDER IMAGE POROPERLY

  //TODO COLOR TOGGLE COPY CLIPBOARD ICON

  let clipRef: any = useRef();
  let clipConfirmRef: any = useRef();
  let clipMobileRef: any = useRef();
  let clipConfirmMobileRef: any = useRef();

  const copyToClipboard = () => {
    navigator.clipboard.writeText("egomezsalasva@gmail.com");
  };

  return (
    <>
      <DesktopStyle>
        <ContactContent
          clickHandler={() => {
            clipboardAnimation(clipRef, clipConfirmRef).play();
            copyToClipboard();
          }}
          clipRef={(el: any) => {
            clipRef = el;
          }}
          clipConfirmRef={(el: any) => {
            clipConfirmRef = el;
          }}
        />
      </DesktopStyle>

      <MobileStyle>
        <ContactContent
          clickHandler={() => {
            clipboardAnimation(clipMobileRef, clipConfirmMobileRef).play();
            copyToClipboard();
          }}
          clipRef={(el: any) => {
            clipMobileRef = el;
          }}
          clipConfirmRef={(el: any) => {
            clipConfirmMobileRef = el;
          }}
        />
      </MobileStyle>
    </>
  );
};
//

export default Contact;
