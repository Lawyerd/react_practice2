import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <nav class="list">
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">Java Script</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default List;
