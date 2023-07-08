import React, { useState } from 'react';

function ProductList({ products, productsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}

      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

