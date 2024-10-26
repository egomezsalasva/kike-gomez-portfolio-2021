import { FunctionComponent } from "react";

const ContactContent: FunctionComponent<any> = ({
  clickHandler,
  clipRef,
  clipConfirmRef,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("egomezsalasva@gmail.com");
  };
  return (
    <>
      <div className="title">
        <h2>Contact</h2>
      </div>

      <div className="emailContainer">
        <div className="wrapper" onClick={clickHandler}>
          <div className="clipWrapper">
            <div className="clip" ref={clipRef}>
              Copy To Clipboard
              {/* <Image className="imgClip" src={copyClipImg} height={15} width={13} alt="copy clipboard" />  */}
            </div>
            <div className="clipConfirmed" ref={clipConfirmRef}>
              Copied To Clipboard!
            </div>
          </div>
          <div className="email">
            egomezsalasva<span>@</span>gmail.com
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
