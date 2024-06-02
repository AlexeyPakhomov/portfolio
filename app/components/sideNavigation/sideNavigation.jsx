import { useState } from 'react';
import styles from './sideNavigation.module.css';
import Navigation from '../navigation/navigation';

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.header__burgerMenu}>
        <button className={styles.header__burgerMenuContainer} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.sideNavigation} ${isOpen ? styles.sideNavigation_active : ''}`}>
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default SideNavigation;
