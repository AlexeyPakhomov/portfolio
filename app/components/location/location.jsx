import { useEffect, useState } from 'react';
import styles from './location.module.css';
import { getTime } from '../../utils/getTime';

const Location = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => setTime(getTime(), 100));
  }, []);

  return (
    <div className={styles.location}>
      <p className={styles.location__text}>Based in Moscow</p>
      <p className={styles.location__time}>{time}</p>
    </div>
  );
};

export default Location;
