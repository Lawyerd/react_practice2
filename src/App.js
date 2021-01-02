import "./App.css";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject";
import List from "./components/List";
import Control from "./components/Control";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!" },
      content: [
        { id: 1, title: "HTML", desc: "HTML is ..." },
        { id: 2, title: "CSS", desc: "CSS is ..." },
        { id: 3, title: "Java Script", desc: "Java Script is ..." },
      ],
    };
  }
  getReadContent() {
    const result = this.state.content.filter(
      info => info.id === this.state.selected_content_id
    );
    return result[0];
  }
  updateContent(raw_contents, target_content) {
    for (let i = 0; i < raw_contents.length; i++) {
      if (raw_contents[i].id === target_content.id) {
        raw_contents[i] = target_content;
        break;
      }
    }
    return raw_contents;
  }
  getContent() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();

      _title = _content.title;
      _desc = _content.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (created_title, created_desc) {
            var content_size = this.state.content.length + 1;
            var new_data = {
              id: content_size,
              title: created_title,
              desc: created_desc,
            };
            var _content = Array.from(this.state.content);
            _content.push(new_data);
            this.setState({
              content: _content,
              mode: "read",
              selected_content_id: new_data.id,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      var _contents = this.getReadContent();
      _article = (
        <UpdateContent
          data={_contents}
          onSubmit={function (updated_id, updated_title, updated_desc) {
            var new_data = {
              id: updated_id,
              title: updated_title,
              desc: updated_desc,
            };
            var _content = Array.from(this.state.content);
            console.log("content" + _content);
            console.log(new_data);
            var updated_contents = this.updateContent(_content, new_data);
            this.setState({ content: updated_contents, mode: "read" });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  render() {
    return (
      <body>
        <div className="App">
          <Subject
            title={this.state.subject.title}
            sub={this.state.subject.sub}
            onChangePage={function () {
              this.setState({
                mode: "welcome",
                selected_content_id: 0,
              });
            }.bind(this)}
          ></Subject>
          <Control
            onChangeMode={function (_mode) {
              if (_mode === "delete") {
                if (window.confirm("ready to delete?")) {
                  var _content = Array.from(this.state.content);
                  for (let index = 0; index < _content.length; index++) {
                    if (_content[index].id === this.state.selected_content_id) {
                      _content.splice(index, 1);
                      break;
                    }
                  }
                  this.setState({ content: _content, mode: "welcome" });
                  alert("deleted!");
                }
              } else {
                this.setState({ mode: _mode });
              }
            }.bind(this)}
          ></Control>
          <List
            onChangePage={function (target_id) {
              this.setState({
                mode: "read",
                selected_content_id: Number(target_id),
              });
            }.bind(this)}
            data={this.state.content}
          ></List>
          {this.getContent()}
          <nav class="junseok">
            <p>Junseok's first react</p>
          </nav>
        </div>
      </body>
    );
  }
}

export default App;
