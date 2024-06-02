import Image from 'next/image';
import styles from './project.module.css';

const Project = ({ item, isProject, onItemClick, isHovered }) => {
  const { id, title, stack, githubLink, link, images } = item;

  return (
    <li key={id} onClick={() => onItemClick(id)} className={styles.project}>
      <div className={`${styles.project__staticContainer}`}>
        <h3 className={styles.project__title}>{title}</h3>
        <ul className={`${styles.project__listStacks} list`}>
          {stack.map((stackItem, index) => (
            <li key={index} className={styles.project__stack}>
              {stackItem}
            </li>
          ))}
        </ul>
        <div className={styles.project__btnContainer}>
          <a
            className={styles.project__btnLink}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer">
            <button className={styles.project__btn}>Github</button>
          </a>
          <a
            className={styles.project__btnLink}
            href={link}
            target="_blank"
            rel="noopener noreferrer">
            <button className={styles.project__btn}>Website</button>
          </a>
        </div>
      </div>

      <ul
        className={`${styles.project__description} list ${
          isProject.id === item.id && isHovered ? styles.project__description_active : ''
        }`}>
        {images?.map((image, index) => (
          <li
            key={index}
            className={`${styles.project__descriptionItem} ${
              isProject.id === item.id && isHovered ? styles.project__descriptionItem_active : ''
            }`}>
            <Image
              className={`${styles.project__descriptionImg} `}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}></Image>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Project;
