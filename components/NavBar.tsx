import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/NavBar.module.scss";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <Image src="/vercel.svg" alt="Logo" width={100} height={75} />
      <nav className={styles.navbar}>
        <div className={styles.item}>
          <Link href="#">Home</Link>
        </div>
        <div className={styles.item}>
          <Link href="#">Profile</Link>
        </div>
        <div className={styles.item}>
          <Link href="#">LogIn</Link>
        </div>
      </nav>
    </div>
  );
};
