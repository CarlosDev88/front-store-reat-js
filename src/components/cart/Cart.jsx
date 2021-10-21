import React, { Component } from "react";
import { ProductConsumer } from "../../Context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmpityCart from "./EmpityCart";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </>
              );
            } else {
              return <EmpityCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
