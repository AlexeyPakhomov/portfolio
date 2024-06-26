import styles from './aboutMe.module.css';

const AboutMe = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__info}>
        <div className={styles.about__textContainer}>
          <p className={styles.about__text}>Hi, my name is</p>
          <h1 className={styles.about__name}>Alexey Pakhomov</h1>
          <h2 className={styles.about__text}>Front-end Developer in Moscow</h2>
        </div>
        <a
          className={`${styles.about__githubLink} link`}
          href="https://github.com/AlexeyPakhomov"
          target="_blank"
          rel="noopener noreferrer">
          <button className={styles.about__githubBtn}>Github</button>
        </a>
        <div className={styles.about__photoContainer}>
          <div className={styles.about__photo}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
