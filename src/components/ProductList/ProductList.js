import React, { useEffect, useState } from "react";
import { Product } from "..";

const ProductList = ({ products, compare, nameSearch, priceSearch, searchQuery }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const renderProducts = () => {
      const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(nameSearch.toLowerCase())
      });
      
  
      const filterByPrice = products.filter(product => {
        const price = parseFloat(product.price.split('').slice(1).join(''));
    
        if (priceSearch > 0) {
          return price <= priceSearch;
        }
  
        return products;
      });
  
      return filterByPrice;
    };

    setProductList(renderProducts);
  }, [products, searchQuery]);

  return (
    <div className="row mt-3">
      {productList.map((product) => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  );
};

export default ProductList;
