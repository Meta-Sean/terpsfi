import Link from "next/dist/client/link";
import styles from '../components/layout.module.css';

export default function Custom404() {
    return (
        <div className={styles.backToHome}>
            <h1>404 - Page Not Found, lets get you off this strange planet</h1>
            <Link href="/">
                <a>← Quickly come with me to safety</a>
            </Link>
        </div>
    ); 
  }