import Sort from "../components/Sort";
import Project from "../components/Project";
import { useEffect, useState } from "react";
import data from "../data";
import styled from "styled-components";

const Projects = () => {
  const projectData = data();
  useEffect(() => {
    // console.log(projectData);
    // setProjects(projectData);
    // console.log(typeof projects);
  }, []);

  const [projects, setProjects] = useState(data());
  const [type, setType] = useState("");
  console.log(type);

  const handleSort = (type, e) => {
    e.preventDefault();
    setType(type);
    console.log("hi");

    const newProjects = projectData.filter((project) => project.type === type);
    console.log(newProjects);
    setProjects(newProjects);
  };

  const handleAll = (e) => {
    e.preventDefault();
    setProjects(projectData);
  };

  return (
    <div>
      <Sort handleSort={handleSort} type={type} handleAll={handleAll} />
      {projects && (
        <StyledProjects>
          {projects.map((project) => {
            return (
              <Project
                title={project.title}
                image={project.image}
                url={project.url}
              />
            );
          })}
          {/* <Project /> */}
        </StyledProjects>
      )}
    </div>
  );
};

const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export default Projects;
