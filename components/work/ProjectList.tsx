import { FunctionComponent } from "react";
import Project from "./Project";

type Props = {
  listId: string;
};

const ProjectList: FunctionComponent<Props> = ({ listId }) => {
  return (
    <div className="workListContainer" id={listId}>
      <Project
        linkUrl="https://www.beanreporter.com/"
        title="Bean Reporter"
        role="Development & Design"
      />
      <Project
        linkUrl="https://www.21analytics.ch/"
        title="21 Analytics"
        role="Development & Design"
      />
      <Project
        linkUrl="https://anuarkhalifi.com/"
        title="Anuar Khalifi"
        role="Development & Design"
      />
      <Project
        linkUrl="https://scrannyshouse.com/"
        title="Scranny's House"
        role="Development & Design"
      />
      <Project
        linkUrl="https://www.ajuarestudio.com"
        title="Ajuar"
        role="Development"
      />
      <Project
        linkUrl="https://www.behance.net/gallery/78665785/Aaron-Dormer-Film-Director-Website"
        title="Aaron Dormer"
        role="Design"
      />
      <Project
        linkUrl="https://axelbalazsi.netlify.app/"
        title="Axel Balazsi"
        role="Development & Design"
      />
      <Project
        linkUrl="https://unikomodels.com/"
        title="Uniko"
        role="Development & Design"
      />
    </div>
  );
};

export default ProjectList;
