import React, { Component } from "react";
import CartColumns from "./cartColumns";
import CartList from "./cartList";
import CartTotals from "./cartTotals";
import { ProductConsumer } from "../../context";
import EmptyCart from "./emptyCart";
// import Waiter from "../waiter";

export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      
      </section>
    );
  }
}