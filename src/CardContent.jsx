import React, { Component } from "react";
import "./CardContent.css";

class CardContent extends Component {
  render() {
    return (
      <div className="CardContent">
        <span className="title">{this.props.title}</span>
        <span className="content">{this.props.content}</span>
        <span className="author">{this.props.author}</span>
      </div>
    );
  }
}

export default CardContent;
