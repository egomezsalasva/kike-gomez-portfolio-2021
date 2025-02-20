import {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { blockInfoAnim } from "./@animations";

type Props = {
  linkUrl: string;
  title: string;
  role: "Development & Design" | "Development" | "Design";
  isDesktop?: boolean;
  techStack?: string[];
  description?: React.ReactNode;
};

const Project: FunctionComponent<Props> = ({
  linkUrl,
  title,
  role,
  isDesktop,
  techStack,
  description,
}) => {
  const [readMoreActive, setReadMoreActive] = useState(false);
  const infoBlockRef = useRef<HTMLDivElement>(
    null,
  ) as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    blockInfoAnim(infoBlockRef, readMoreActive);
  }, [readMoreActive]);

  return (
    <div className="workProject">
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <div className="workProjectTitle">{title}</div>
      </a>
      <div className="workProjectText">
        {role}{" "}
        {isDesktop && (
          <div
            className="readMoreBtn"
            onClick={() => setReadMoreActive(!readMoreActive)}
          >
            + Read More
          </div>
        )}
      </div>
      {isDesktop && techStack && description && (
        <div className="infoBlock" ref={infoBlockRef}>
          <div>
            <h3>Tech Stack:</h3>
            <div>
              {techStack.map((tech, id) => {
                return (
                  <span key={id} className="techStackTab">
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <h3>Description:</h3>
            <div>{description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
