import AboutMe from '../aboutMe/aboutMe';
import Projects from '../projects/projects';
import Technologies from '../technologies/technologies';
import styles from './main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <AboutMe />
      <Projects />
      <Technologies />
    </main>
  );
};

export default Main;
