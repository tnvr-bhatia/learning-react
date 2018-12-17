import React, { Component } from "react";
import CardMedia from "./CardMedia";
import CardContent from "./CardContent";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card nopadding">
        <CardMedia color={this.props.color} />
        <CardContent
          title={this.props.title}
          content={this.props.content}
          author={this.props.author}
        />
      </div>
    );
  }
}

export default Card;
