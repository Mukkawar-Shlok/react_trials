import React, { Component } from "react";

export default class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      price: 10,
      qty: 1,
      title: "phone",
      img: "",
    };
  }
  decrease = () => {
    console.log("decrease");
    console.log(this.state);
    // this.state.qty -= 1;
    //set state form 1
    // this.setState({
    //   qty: this.state.qty - 1,
    // });
    //set state form 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
  increase = () => {
    console.log("increase");
    // this.state.qty += 1;
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
  deleteBtn = () => {
    console.log("delete");
  };

  render() {
    const { price, qty, title, img } = this.state;
    return (
      <div className="cart-item">
        <div className="right-block">
          <img style={styles.image} />
        </div>
        <div className="left-block">
          <div style={{ fontSize: 25 }}> {title}</div>
          <div style={{ color: "#777" }}> Qty {qty}</div>
          <div style={{ color: "#777" }}> Rs {price}</div>
          <div className="cart-item-actions">
            {/* Buttons*/}
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              className="action-icons"
              alt="decrease"
              onClick={this.decrease.bind(this)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"
              className="action-icons"
              alt="increase"
              onClick={this.increase.bind(this)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
              className="action-icons"
              alt="delete"
              onClick={this.deleteBtn.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
  },
};
