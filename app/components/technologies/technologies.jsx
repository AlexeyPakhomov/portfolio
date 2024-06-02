import '../../globals.css';
import styles from './technologies.module.css';
import { TECHNOLOGIES } from '@/app/utils/constants';

const Skills = () => {
  return (
    <section className={styles.technologies} id="technologies">
      <div className={styles.technologies__container}>
        <h2 className={'sectionTitle'}>technologies</h2>
        <ul className={`${styles.technologies__list} list`}>
          {TECHNOLOGIES.map((skill, index) => (
            <li key={index} className={styles.technologies__listItem}>
              <p className={styles.technologies__listItemText}>{skill}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
