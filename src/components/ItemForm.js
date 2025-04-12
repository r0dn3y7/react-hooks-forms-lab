import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); // default category

  function handleSubmit(e) {
    e.preventDefault(); // prevent page refresh on submit
    const newItem = {
      id: uuid(), // generates unique id
      name,
      category,
    };
    onItemFormSubmit(newItem); // pass new item to parent
    setName(""); // reset the name input
    setCategory("Produce"); // reset category select
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // control the input value
          aria-label="Name"
        />
      </label>
      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)} // control the category select
          aria-label="Category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
