import React, { Component } from "react";

import { DraggableArea } from "../Draggable";
import deleteBtn from "../imgs/delete.png";
import deleteBtn2x from "../imgs/delete@2x.png";
import styles from "./style.less";

import mock from "./mock.js";

export default class AddAndDelete extends Component {
  constructor() {
    super();
    this.state = {
      tags: mock.tags,
      // 修改部分 双击模式使用
      toggle: true,
    };
  }

  handleClickDelete(tag) {
    const tags = this.state.tags.filter((t) => tag.id !== t.id);
    this.setState({ tags });
  }

  handleClickAdd() {
    if (this.input.value.length < 1) return;
    const tags = this.state.tags.slice();
    tags.push({ id: Math.random(), content: this.input.value });
    this.setState({ tags });
    this.input.value = "";
  }

  //修改部分 input模式后更新input value
  handleUpdate(event, index) {
    const tags = this.state.tags.slice();
    tags[index].content = event.target.value;
    this.setState({ tags });
  }

  render() {
    return (
      <div className="AddAndDelete">
        <div className="main">
          <DraggableArea
            tags={this.state.tags}
            render={({ tag, index }) => (
              <div>
                {this.state.toggle ? (
                  <div
                    className="tag"
                    onDoubleClick={() => {
                      this.setState({ toggle: false });
                    }}
                  >
                    {tag.content}
                  </div>
                ) : (
                  <input
                    type="text"
                    key={tag.id}
                    value={tag.content}
                    onChange={(event) => this.handleUpdate(event, index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === "Escape") {
                        this.setState({ toggle: true });
                        event.preventDefault();
                        event.stopPropagation();
                      }
                    }}
                  />
                )}
              </div>
            )}
            onChange={(tags) => this.setState({ tags })}
          />
        </div>
      </div>
    );
  }
}