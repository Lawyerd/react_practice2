import "./App.css";
import Content from "./components/Content";
import Subject from "./components/Subject";
import List from "./components/List";
import React, { Component } from "react";

function App() {
  return (
    <body>
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <List></List>
        <Content
          title="HTML"
          desc="HTML is HyperText Markup Language."
        ></Content>
        <p>Junseok's first react</p>
      </div>
    </body>
  );
}

export default App;
