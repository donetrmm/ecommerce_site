"use client";
import styles from "./css/navbar.module.css";
import Cart from "./CartButton";
import { Button } from "reactstrap";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <Link className={styles.link} href="/">
          <h1>Shop</h1>
        </Link>

        <div className={styles.linkContainer}>
          <Link className={styles.link} href="/admin">
            Admin
          </Link>
          <Link className={styles.link} href="/">
            Tienda
          </Link>

          <Cart />
        </div>
      </div>
    </>
  );
}
