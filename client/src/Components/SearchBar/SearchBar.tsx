import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import s from "./search.module.scss";
interface SearchBarProps {
  handleSearch: (searchValue: string) => void; // Define the type of handleSearch
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(searchValue.trim()); // Pass trimmed search value to parent component
  };

  return (
    <form className={s.search_bar}>
      <FaSearch className={s.search_icon}></FaSearch>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        className={s.search_input}
      />
    </form>
  );
};

export default SearchBar;
