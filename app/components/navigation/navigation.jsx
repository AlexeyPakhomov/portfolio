import '../../globals.css';
import styles from './navigation.module.css';
import { NAVIGATION_MENU } from '@/app/utils/constants';

const Navigation = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 100);
  };

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.nav_active : ''}`}>
      <ul className={`${styles.nav__list} list`}>
        {NAVIGATION_MENU.map((item) => (
          <li key={item.id} className={`${styles.nav__listItem_textStyle}`} onClick={handleClick}>
            <a href={`#${item.name}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      <a className={`${styles.nav__btnContainer}`} href="/CV_PakhomovAlexey.pdf" download>
        <button className={styles.nav__btn}>CV.PDF</button>
      </a>
    </nav>
  );
};

export default Navigation;
