import Image from 'next/image';
import styles from './project.module.css';

const Project = ({ item, isProject, onItemClick, isHovered }) => {
  const { id, title, stack, githubLink, link, images } = item;
  const selectedItem = isProject.id === item.id && isHovered;

  return (
    <li key={id} onClick={() => onItemClick(id)} className={styles.project}>
      <div
        className={` ${styles.project__staticContainer} ${
          selectedItem && styles.project__staticContainer_blackTheme
        } 
        `}>
        <h3 className={`${styles.project__title}`}>{title}</h3>
        <ul className={`${styles.project__listStacks} list`}>
          {stack.map((stackItem, index) => (
            <li
              key={index}
              className={`${styles.project__stack} ${
                selectedItem && styles.project__stack_blackTheme
              }`}>
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
            <button
              className={`${styles.project__btn} ${
                selectedItem && styles.project__btn_blackTheme
              }`}>
              Github
            </button>
          </a>
          <a
            className={styles.project__btnLink}
            href={link}
            target="_blank"
            rel="noopener noreferrer">
            <button
              className={`${styles.project__btn} ${
                selectedItem && styles.project__btn_blackTheme
              }`}>
              Website
            </button>
          </a>
        </div>
      </div>

      <ul
        className={`${styles.project__description} list ${
          selectedItem ? styles.project__description_active : ''
        }`}>
        {images?.map((image, index) => (
          <li key={index} className={`${styles.project__descriptionItem} `}>
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
