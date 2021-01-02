import React, { Component } from "react";

class UpdateContent extends Component {
  // shouldComponentUpdate(newProps, newData) {
  //   if (this.props.data === newProps.data) {
  //     return false;
  //   }
  //   return true;
  // }

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.inpitFormHandler = this.inpitFormHandler.bind(this);
  }
  inpitFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <article>
        <h2>{this.props.title} Update</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            alert("submit");
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
          <input name="id" type="hidden" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inpitFormHandler}
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              rows="10"
              value={this.state.desc}
              onChange={this.inpitFormHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit" value="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
