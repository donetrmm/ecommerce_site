import React, { useState } from "react";

export default function ProductForm({ product, onSave }) {
  const [formData, setFormData] = useState(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = formData.name.toLowerCase().replace(/\s/g, "-");
    const productWithId = { ...formData, id };

    onSave(productWithId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Precio"
        value={formData.price}
        onChange={handleInputChange}
      />
      <button type="submit">Guardar</button>
    </form>
  );
}
