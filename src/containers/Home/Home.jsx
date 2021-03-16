import React, { useState } from 'react';
import { CompareTable, ProductList } from '../../components';
import results from '../../data/products.json';

const Home = () => {
  const [nameOrPriceSearch, setNameOrPriceSearch] = useState('');
  const [products, setProducts] = useState(results.products);
  const [searchTerm, setSearchTerm] = useState('');

  const compareProducts = products.filter(
    (product) => product.compare
  );

  const handleChange = (event) => {
    setNameOrPriceSearch(event.target.value);
  };

  const compare = (id) => {
    setProducts(
     products.map((product) =>
        product.id === id
          ? { ...product, compare: !product.compare }
          : product
      ),
    );
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(event.target.value);
    }
  };

  return (
    <div className="home mt-5">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-3">Compare Products</h2>
          <input
            type="text"
            placeholder="Search by name or price"
            value={nameOrPriceSearch}
            onChange={handleChange}
            onKeyDown={search}
            className="search-input"
          />
          <label className="search-label">Press enter to search</label>
        </div>
      </div>
      <ProductList
        products={products}
        nameOrPriceSearch={nameOrPriceSearch}
        compare={compare}
        searchTerm={searchTerm}
      />
      {compareProducts.length >= 1 && (
        <CompareTable products={compareProducts} />
      )}
    </div>
  );
}

export default Home;
