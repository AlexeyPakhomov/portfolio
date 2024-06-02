import Image from 'next/image';
import '../../globals.css';
import styles from './logo.module.css';
import logo from '../../images/logo.png';

const Logo = () => {
  return (
    <div className={styles.header__logoContainer}>
      <Image src={logo} className={styles.header__logo} alt="Ссылка логотип на Github" />
    </div>
  );
};

export default Logo;
