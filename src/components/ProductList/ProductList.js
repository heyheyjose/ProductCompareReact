import React, { useEffect, useState } from "react";
import { Product } from "..";

const ProductList = ({ products, compare, nameOrPriceSearch, searchTerm }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const renderProducts = () => {
      const regexForNumbers = /^-?\d+\.?\d*$/;

      if (nameOrPriceSearch.match(regexForNumbers)) {
        const priceSearch = parseFloat(nameOrPriceSearch);

        return products.filter(product => {
          const price = parseFloat(product.price.split('').slice(1).join(''));
      
          if (priceSearch > 0) {
            return price <= priceSearch;
          }
    
          return product;
        });
      }

      return products.filter(product => {
        return product.name.toLowerCase().includes(nameOrPriceSearch.toLowerCase());
      });
    };

    setProductList(renderProducts);
  }, [products, searchTerm]);

  return (
    <div className="row mt-3">
      {productList.map((product) => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  );
};

export default ProductList;
