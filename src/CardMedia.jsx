import React, { Component } from "react";
import "./CardMedia.css";

class CardMedia extends Component {
  render() {
    return (
      <div
        className="CardMedia"
        style={{ backgroundColor: this.props.color }}
      />
    );
  }
}

export default CardMedia;
