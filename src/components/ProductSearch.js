 import React, { useState } from 'react';

function ProductSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Buscar productos..." />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default ProductSearch;

