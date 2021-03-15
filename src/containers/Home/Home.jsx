import React, { useState } from "react";
import { CompareTable, ProductList } from "../../components";
import results from "../../data/products.json";

const Home = () => {
  const [nameSearch, setNameSearch] = useState('');
  const [products, setProducts] = useState(results.products);
  const [priceSearch, setPriceSearch] = useState('Search by price');
  const [searchQuery, setSearchQuery] = useState(undefined);

  const compareProducts = products.filter(
    (product) => product.compare
  );

  const handleChange = (event) => {
    setPriceSearch(event.target.value);
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

  const search = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(e.target.value);
    }
  };

  return (
    <div className="home mt-5">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-3">Compare Products</h2>
          <input
            type="number"
            placeholder="Search by price"
            value={priceSearch}
            onChange={handleChange}
            onKeyDown={search}
          />
          <label className="search-label">Press enter to search</label>
        </div>
      </div>
      <ProductList
        products={products}
        nameSearch={nameSearch}
        compare={compare}
        priceSearch={priceSearch}
        searchQuery={searchQuery}
      />
      {compareProducts.length >= 1 && (
        <CompareTable products={compareProducts} />
      )}
    </div>
  );
}

export default Home;
