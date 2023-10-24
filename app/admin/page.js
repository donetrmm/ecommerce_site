"use client";
import React, { useState } from "react";
import functions from "../data/products";
import Navbar from "../components/Navbar";
import {
  Table,
  Button,
  Input,
  FormGroup,
  Label,
  Form,
  Container,
} from "reactstrap";
import styles from "./pageA.module.css";
import { useCart } from "../components/CartContext";


function AdminProduct() {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { cart, dispatch } = useCart();
  const [editingProductName, setEditingProductName] = useState(null);
  const [products, setProducts] = useState(functions.obtenerProductos());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const addProduct = () => {
    if (editingProductName) {
      functions.editarProducto(editingProductName, productData);
    } else {
      functions.agregarProducto(productData);
    }
    setProductData({ name: "", price: 0, image: "" });
    setEditingProductName(null);
    setProducts(functions.obtenerProductos());
  };

  const editProduct = (product) => {
    setProductData(product);
    setEditingProductName(product.name);
  };

  const deleteProduct = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", product });
    functions.eliminarProducto(product.name);
    setProducts(functions.obtenerProductos());
  };

  return (
    <>
      <Navbar />

      <Container className={styles.container}>
        <div>
          <h1 className={styles.title}>Administrar Productos</h1>
        </div>
        <section className={styles.productsContainer}>
          <Form className={styles.form}>
            <FormGroup className={styles.formgroup}>
              <Label for="name">Nombre</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                value={productData.name}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className={styles.formgroup}>
              <Label for="price">Precio</Label>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Precio"
                value={productData.price}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className={styles.formgroup}>
              <Label for="image">URL de la imagen</Label>
              <Input
                type="text"
                name="image"
                id="image"
                placeholder="URL de la imagen"
                value={productData.image}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button type="button" color="primary" onClick={addProduct}>
              {editingProductName ? "Actualizar" : "Agregar"}
            </Button>
          </Form>
          <Table className={styles.productTable}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <Button color="info" onClick={() => editProduct(product)}>
                      Editar
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => deleteProduct(product)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </Container>
    </>
  );
}

export default AdminProduct;
