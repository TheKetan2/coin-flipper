import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Coin from "./Coin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: 0,
      tail: 0,
      face: ""
    };
  }
  flipp = () => {
    if (Math.floor(Math.random() * 2) === 1) {
      this.setState({ head: this.state.head + 1, face: "Head" });
    } else {
      this.setState({ tail: this.state.tail + 1, face: "Tail" });
    }
  };
  render() {
    const coinUrl = [
      "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/dime-coin-head.jpg",
      "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/dime-coin-tail.jpg"
    ];
    return (
      <div className="App">
        {/* <Coin
          head={this.state.head}
          tail={this.state.tail}
          face={this.state.head}
        /> */}
        {this.state.head === 0 && this.state.tail == 0 ? (
          <img
            src="https://raw.githubusercontent.com/TheKetan2/coin-flipper/master/src/img/flip_coin.png"
            alt="Head"
          />
        ) : this.state.face === "Head" ? (
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
        <div>
          <button onClick={this.flipp}>Flip</button>
        </div>
        <p>
          Heads: {this.state.head} vs Tails: {this.state.tail}
        </p>
      </div>
    );
  }
}

export default App;
