import React from "react";
import { Product } from "..";

const ProductList = ({ products, compare, nameSearch, priceSearch }) => {
  const renderProducts = () => {
    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(nameSearch.toLowerCase())
    });
    

    const filterByPrice = products.filter(product => {
      const price = parseFloat(product.price.split('').slice(1).join(''));
  
      if (priceSearch) {
        return price <= priceSearch;
      }

      return products;
      
    });

    return filterByPrice;
  };

  return (
    <div className="row mt-3">
      {renderProducts().map((product) => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  );
};

export default ProductList;
