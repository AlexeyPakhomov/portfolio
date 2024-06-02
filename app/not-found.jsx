import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import styles from './not-found.module.css';
import pedro from './images/pedroLoop.gif';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.notFoundTitle}>Ой, кажется, Вы зашли к Педро</h2>
      <Image src={pedro} alt="pedro" className={styles.notFoundPedro}></Image>

      <Link href="/" className={`link ${styles.notFoundLink} `}>
        Вернуться назад
      </Link>
    </div>
  );
}
