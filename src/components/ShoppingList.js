import { useState } from "react";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";
import initialItems from "../data/items"; // Initial items data

function App() {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState(""); // State for search term

  function handleSearchChange(newSearch) {
    setSearch(newSearch); // Update search state
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;
