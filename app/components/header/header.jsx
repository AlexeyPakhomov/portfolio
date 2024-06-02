import styles from './header.module.css';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import Location from '../location/location';
import useScroll from '@/app/hooks/useScroll';
import { useEffect, useState } from 'react';
import SideNavigation from '../sideNavigation/sideNavigation';

const Header = () => {
  const height = useScroll();
  const [isHidden, setIsHidden] = useState(false);

  const deleteElement = () => {
    return setIsHidden(height > 470);
  };

  useEffect(() => {
    deleteElement();
  }, [height]);

  return (
    <>
      <header className={styles.header} id="header">
        <div className={`${styles.header_desktop} ${isHidden ? styles.header_hidden : ''}`}>
          <Logo />
          <Navigation />
          <Location />
        </div>
        <div className={styles.header_mobile}>
          <Logo />
          <Location />
          <SideNavigation />
        </div>
      </header>
    </>
  );
};

export default Header;
