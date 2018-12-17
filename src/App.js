import React, { Component } from "react";
import Card from "./Card";
import "./App.css";

class App extends Component {
  render() {
    var cardContent = [
      {
        title: "Learning React? Start Small",
        content:
          "Can't Learn from Tutorials? The Solution is to make expiremental apps",
        author: "dev.to",
        mediaColor: "#ef3456"
      },
      {
        title: "Learning Angular? Start Small",
        content:
          "Want to Learn from Tutorials try to make some expiremental small apps",
        author: "dev.to",
        mediaColor: "#ff6645"
      }
    ];

    return (
      <div className="App">
        <Card
          title={cardContent[0].title}
          content={cardContent[0].content}
          author={cardContent[0].author}
          color={cardContent[0].mediaColor}
        />
        <Card
          title={cardContent[1].title}
          content={cardContent[1].content}
          author={cardContent[1].author}
          color={cardContent[1].mediaColor}
        />
      </div>
    );
  }
}

export default App;
