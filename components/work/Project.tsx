import { FunctionComponent } from "react";

type Props = {
  linkUrl: string;
  title: string;
  role: "Development & Design" | "Development" | "Design";
};

const Project: FunctionComponent<Props> = ({ linkUrl, title, role }) => {
  return (
    <div className="workProject">
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <div className="workProjectTitle">{title}</div>
      </a>
      <div className="workProjectText">{role}</div>
    </div>
  );
};

export default Project;
