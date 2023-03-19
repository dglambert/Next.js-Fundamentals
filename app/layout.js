import { Open_Sans } from '@next/font/google';
import Link from "next/link";
import styles from "./rootStyle.module.css";
import "./global.css";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["400"],
  });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <head />
      <body>
        <header>
          <h1>
            <Link href="/home" className={styles.homeLink}>Globomantics</Link>
          </h1>
          <h2>
            <Link href="/blog" className={styles.menuBarLink}>Blog</Link>
          </h2>
          <h2>
            <Link href="/settings" className={styles.menuBarLink}>Settings</Link>
          </h2>
          <h2>
            <Link href="/conference" className={styles.menuBarLink}>Conference</Link>
          </h2>
        </header>
        {children}
      </body>
    </html>
  );
}
