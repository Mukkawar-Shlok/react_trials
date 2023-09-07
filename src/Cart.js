import React, { Component } from "react";
import CartItem from "./CartItem";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 10,
          qty: 1,
          title: "phone",
          img: " adwd",
          id: 1,
        },
        {
          price: 120,
          qty: 2,
          title: "mobile",
          img: "link",
          id: 2,
        },
        {
          price: 785,
          qty: 6,
          title: "laptop",
          img: "linjaw",
          id: 3,
        },
      ],
    };
  }
  handleIncrease = (product) => {
    console.log("Increase the quantity", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };
  handleDecrease = (product) => {
    console.log("Decrease the quantity", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {/* <CartItem qty={1} price={100} title={"watch"} img={"link"} />
        <CartItem />
        <CartItem /> */}
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncrease}
              onDecreaseQuantity={this.handleDecrease}
            />
          );
        })}
      </div>
    );
  }
}
