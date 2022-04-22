import Link from 'next/link';
import { routes } from '../constants';
import styles from './layout.module.css';

const Layout = ({children}) => {

  return (
    <>
    <div className={styles.navBar}>
        <nav>
          <Link href={routes.home}>
            <a>Home</a>
          </Link>
          <Link href={routes.contacts}>
            <a>Contacts</a>
          </Link>
          <Link href={routes.appointments}>
            <a>Appointments</a>
          </Link>
        </nav>
    </div>
    <div className={styles.pageBody}>{children}</div>
    </>
  );
}

export default Layout;
