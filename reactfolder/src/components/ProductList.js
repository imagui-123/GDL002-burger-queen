import React from "react";
import Product from "./Product";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
import Cart from "../components/Cart/cart";

export default class ProductList extends React.Component {
  state = {
    products: storeProducts
  };

  render() {
    console.log(this.state.products);
    return (
      <div className="grid-container">
        <div className="row">
          
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return (
                  <div className="col sm-3 lg-6">
                    <Product key={product.id} product={product} />
                  </div>
                );
              });
            }}
          </ProductConsumer>
          
        </div>
        <div className="item3">
          <Cart />
        </div>
      </div>
    );
  }
}


