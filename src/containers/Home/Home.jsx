import React, { Component } from "react";
import { CompareTable, ProductList } from "../../components";
import results from "../../data/products.json";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      nameSearch: "",
      products: results.products,
      priceSearch: undefined
    };
  }

  render() {
    const compareProducts = this.state.products.filter(
      (product) => product.compare
    );
    const handleChange = (event) => {
      console.log('event: ', event);
      this.setState({ priceSearch: event.target.value });
    };

    const compare = (id) => {
      this.setState({
        products: this.state.products.map((product) =>
          product.id === id
            ? { ...product, compare: !product.compare }
            : product
        ),
      });
    };

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
            <input
              type="number"
              placeholder="Search by price"
              value={this.state.priceSearch}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <ProductList
          products={this.state.products}
          nameSearch={this.state.nameSearch}
          compare={compare}
          priceSearch={this.state.priceSearch}
        />
        {compareProducts.length >= 1 && (
          <CompareTable products={compareProducts} />
        )}
      </div>
    );
  }
}

export default Home;
