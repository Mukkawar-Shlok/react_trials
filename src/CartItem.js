import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    const { price, qty, title, img } = this.props.product;
    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="right-block">
          <img style={styles.image} />
        </div>
        <div className="left-block">
          <div style={{ fontSize: 25 }}> {title}</div>
          <div style={{ color: "#777" }}> Qty {qty}</div>
          <div style={{ color: "#777" }}> Rs {price}</div>
          <div style={{ color: "#777" }}> link {img}</div>
          <div className="cart-item-actions">
            {/* Buttons*/}
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              className="action-icons"
              alt="decrease"
              onClick={() => this.props.onDecreaseQuantity(this.props.product)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"
              className="action-icons"
              alt="increase"
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
              // onClick={this.increase.bind(this)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
              className="action-icons"
              alt="delete"
              // onClick={this.deleteBtn.bind(this)}
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
