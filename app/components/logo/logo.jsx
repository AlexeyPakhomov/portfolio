import Image from 'next/image';
import styles from './logo.module.css';
import logo from '../../../public/static/images/logo.png';
import '../../globals.css';

const Logo = () => {
  return (
    <div className={styles.header__logoContainer}>
      <Image src={logo} className={styles.header__logo} alt="Ссылка логотип на Github" />
    </div>
  );
};

export default Logo;
