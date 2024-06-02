import '../../globals.css';
import styles from './footer.module.css';
import { EMAIL, GITHUB } from '@/app/utils/constants';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footer__container}>
        <a href={`mailto:${EMAIL}`} className={`${styles.footer__link}`}>
          email
        </a>
        <a href={GITHUB} className={`${styles.footer__link}`} target="_blank">
          github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
