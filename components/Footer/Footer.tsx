import Link from 'next/link';
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
          <Link href="https://mhresko.com/">
            mhresko.com
          </Link>

          <p>
            © {new Date().getFullYear()} Forest Adventures. All rights reserved.
          </p>
          <div>
            <Link href="#">
              Contact
            </Link>
            <Link href="mailto:mitchie.code@gmail.com">
              Email Us
            </Link>
          </div>
      </div>
    </footer>
  );
}
