import React from "react";
import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create and inspire. It's lama</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse
          incidunt blanditiis cum fugit maiores natus optio ipsum nemo ipsa?
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
