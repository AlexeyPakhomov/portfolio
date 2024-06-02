import { useState } from 'react';
import '../../globals.css';
import styles from './projects.module.css';
import { PROJECTS } from '@/app/utils/constants';
import Project from '../project/project';

const Projects = () => {
  const [selectProject, setSelectProject] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  function handleClickProject(id) {
    if (selectProject.id !== id) {
      const project = PROJECTS.find((i) => i.id === id);
      setSelectProject(project);
      setIsHovered(true);
    }
    if (selectProject.id === id) {
      setSelectProject({});
      setIsHovered(false);
    }
  }

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projects__container}>
        <h2 className={'sectionTitle'}>Projects</h2>
        <ul className={`${styles.projects__list} list`}>
          {PROJECTS.map((item) => (
            <Project
              key={item.id}
              item={item}
              isProject={selectProject}
              onItemClick={handleClickProject}
              isHovered={isHovered}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
