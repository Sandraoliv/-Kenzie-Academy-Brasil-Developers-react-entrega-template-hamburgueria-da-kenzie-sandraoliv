import { useState } from "react";

export function Form({ setFilteredProducts }) {
  const [searchValue, setSearchValue] = useState("");

  function submit(event) {
    event.preventDefault();
    setFilteredProducts(searchValue);
    setSearchValue("");
  }
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />

      <button type="submit">Pesquisar</button>
    </form>
  );
}
