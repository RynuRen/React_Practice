import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  // Put input value under state sysmte control
  // DO NOT REACH DIRECTLY INPUT VALUE
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    // Prevent default html form action
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
