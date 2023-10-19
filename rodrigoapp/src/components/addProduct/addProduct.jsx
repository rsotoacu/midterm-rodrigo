import React, { useState } from "react";

//Properties of the form
export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //Submit event handler will show an alert with the values the user just inserted
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, description: ${formData.description}, 
      category: ${formData.category}, quantity: ${formData.quantity},
      price: ${formData.price}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="description">
        Description:
      </label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="category">
        Category:
      </label>
      <input
        type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

    <label htmlFor="quantity">
        Quantity:
      </label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />

    <label htmlFor="price">
        Price:
      </label>
      <input
        type="text"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}
