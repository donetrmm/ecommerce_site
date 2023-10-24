
let products = [
  {
    name: "Manzana",
    price: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJghOgtJISmikNYG_3mgcpUm8fro-pSFrkPA&usqp=CAU",
  },
];

let productChangeCallbacks = [];

function notifyProductChange() {
  for (const callback of productChangeCallbacks) {
    callback(products);
  }
}

function obtenerProductos() {
  return products;
}

function agregarProducto(product) {
  products.push(product);
  notifyProductChange();
}

function editarProducto(name, updatedProduct) {
  const productIndex = products.findIndex((product) => product.name === name);

  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    notifyProductChange();
  }
}

function eliminarProducto(name) {
  products = products.filter((product) => product.name !== name);
  notifyProductChange();
}


function onProductChange(callback) {
  productChangeCallbacks.push(callback);

  return () => {
    productChangeCallbacks = productChangeCallbacks.filter(
      (cb) => cb !== callback
    );
  };
}

module.exports = {
  obtenerProductos,
  agregarProducto,
  editarProducto,
  eliminarProducto,
  onProductChange,
};
