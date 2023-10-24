"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import CardProduct from "./components/CardProduct";
import styles from "./page.module.css";
import functions from "@/app/data/products";

export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const unsubscribe = functions.onProductChange((newProducts) => {
      setProductos(newProducts);
    });

    const initialProducts = functions.obtenerProductos();
    setProductos(initialProducts);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.container}>
        {productos.map((producto) => (
          <CardProduct data={producto} key={producto.name} />
        ))}
      </main>
    </>
  );
}
