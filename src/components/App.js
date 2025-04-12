import { useState } from "react";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";
import initialItems from "../data/items";
import Header from "./Header";

function App() {
  const [items, setItems] = useState(initialItems);

  function handleItemFormSubmit(newItem) {
    setItems((prevItems) => [...prevItems, newItem]); // Add new item to state
  }

  return (
    <div>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
