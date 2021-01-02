import React, { Component } from "react";

class List extends Component {
  shouldComponentUpdate(newProps, newData) {
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }

  render() {
    var lists = [];
    var data = this.props.data;
    for (let i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={`/content/${data[i].id}.html`}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
    }

    return (
      <nav class="list">
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default List;
