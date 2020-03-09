import React, { Component } from "react";

export default class Coin extends Component {
  render() {
    return (
      <div>
        {this.props.head === 0 && this.props.tail === 0 ? (
          <img
            src="https://raw.githubusercontent.com/TheKetan2/coin-flipper/master/src/img/flip_coin.png"
            alt="Nothing"
          />
        ) : this.props.face === "Head" ? (
          <img
            src="https://raw.githubusercontent.com/TheKetan2/coin-flipper/master/src/img/dime-coin-head.jpg"
            alt="Head"
          />
        ) : (
          <img
            src="https://raw.githubusercontent.com/TheKetan2/coin-flipper/master/src/img/dime-coin-tail.jpg"
            alt="Tail"
          />
        )}
      </div>
    );
  }
}
