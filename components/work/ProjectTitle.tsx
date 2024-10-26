import { FunctionComponent } from "react";

type Props = {
  titleRef: any;
};

const ProjectTitle: FunctionComponent<Props> = ({ titleRef }) => {
  return (
    <div className="title">
      <h2 ref={titleRef}>WORK</h2>
    </div>
  );
};

export default ProjectTitle;
