import React, { Component } from "react";

import { DraggableAreasGroup } from "../Draggable";
import deleteBtn from "../imgs/delete.png";
import deleteBtn2x from "../imgs/delete@2x.png";

import styles from "./style.less";

import mock from "./mock.js";
import returnedData from "./returnedData.js";

const group = new DraggableAreasGroup();
const DraggableArea1 = group.addArea();
const DraggableArea2 = group.addArea();

export default class CrossArea extends Component {
  constructor() {
    super();
    this.state = {
      leftTags: [],
      rightTags: [],
      middleTags: [],
      editTags: [],
      //returnedData: [],
      returnedData: returnedData.returnedData,
      toggle: true,
      // leftTags: data,
      // rightTags: data
      finalTags: [],
    };

    this.topChange = this.topChange.bind(this);
    this.middleChange = this.middleChange.bind(this);
    this.bottomChange = this.bottomChange.bind(this);
  }

  componentDidMount() {
    /*
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
        data = data.map(
          ({
            job_id: id,
            tag: tag,
            jd: content,
            requirement: requirement,
          }) => ({ id, tag, content, requirement })
        );
        data = data.filter((x) => x.content !== "" || x.requirement !== "");
        this.setState({ returnedData: data });

        console.log(this.state.returnedData);

        //下拉菜单，change中赋值。

        data = data.filter((x) => x.content !== "" && x.tag == "活动策划"); //filter of tag

        //let left = data.splice(0, 1); //the number of showning
        //let right = data.splice(0, 0);
        //this.setState({leftTags: left});
        //this.setState({rightTags: right});
        //console.log(left);
        //onsole.log(right);
      })
      .then((err) => {
        console.log(err);
      });
    */
  }
  


  handleClickDelete(tag) {
    const editTags = this.state.editTags.filter((t) => tag.id !== t.id);
    this.setState({ editTags });
  }

  first() {
    this.filterData("培训");
  }

  second() {
    this.filterData("拜访");
  }

  third() {
    this.filterData("活动策划");
  }

  fourth() {
    this.filterData("导师");
  }


  filterData(tagName) {
    let filteredData = [];

    for (const element of this.state.returnedData) {
      if (element.tag == tagName) {
        filteredData.push(element);
      }
    }

    let left = filteredData.splice(
      Math.floor(Math.random() * filteredData.length),
      1
    );
    // let right = filteredData.splice(0, 0);
    this.setState({ leftTags: left });
    // this.setState({ rightTags: right });

    // document.getElementById("outputWindow").innerText = "";
  }

  // filterData(tagName) {

  //   let filteredData = [];

  //   for (const element of this.state.returnedData) {
  //     if (element.tag == tagName) {
  //       filteredData.push(element);
  //     }
  //   }

  //   let left = filteredData.splice(0, 1); //the number of showning
  //   let right = filteredData.splice(0, 0);
  //   this.setState({ leftTags: left });
  //   this.setState({ rightTags: right });

  //   document.getElementById("outputWindow").innerText = "";
  // }

  output() {
    let tags = this.state.editTags;
    console.log(tags);
    if (tags) {
      console.log(123);
      // return <div class="ui top left attached label">View</div>;
      return (
        <p>123312312312312315535554</p>

        // <div class="ui modal">
        //   <div class="header">Header</div>
        // </div>
      );
    }
    // let displayText = "";
    // let index = 0;
    // for (const element of rightData) {
    //   displayText += "\n" + ++index + ". " + element.content;
    // }

    // document.getElementById("outputWindow").innerText = displayText;
  }

  topChange(event) {
    event.preventDefault();
    // console.log(event.target.value);
    //onsole.log(this.state.returnedData);
    let array = [];

    let topData = this.state.returnedData.filter((x) =>
      x.requirement.includes(event.target.value)
    );
    if (topData && topData.length) {
      array.push(topData[this.getRandomInt(topData.length)]);
      // console.log(array);
      this.setState({ leftTags: array });
    }

    // console.log(topData);
  }

  middleChange(event) {
    event.preventDefault();
    // console.log(event.target.value);
    //onsole.log(this.state.returnedData);
    let array = [];

    let topData = this.state.returnedData.filter((x) =>
      x.requirement.includes(event.target.value)
    );
    if (topData && topData.length) {
      array.push(topData[this.getRandomInt(topData.length)]);
      // console.log(array);
      this.setState({ middleTags: array });
    }

    // console.log(topData);
  }

  bottomChange(event) {
    event.preventDefault();
    // console.log(event.target.value);
    //onsole.log(this.state.returnedData);
    let array = [];

    let topData = this.state.returnedData.filter((x) =>
      x.requirement.includes(event.target.value)
    );
    if (topData && topData.length) {
      array.push(topData[this.getRandomInt(topData.length)]);
      // console.log(array);
      this.setState({ rightTags: array });
    }

    // console.log(topData);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * (max - 0) + 0);
  }

  //修改部分 input模式后更新input value
  handleUpdate(event, id) {
    // console.log(this.state.returnedData);
    const index = this.state.returnedData.findIndex((ele) => ele.id === id);
    const returnedData = this.state.returnedData.slice();
    // console.log(tags[index], index);
    returnedData[index].requirement = event.target.value;
    // console.log(event.target.value);
    // console.log(tags[index].requirement);
    this.setState({ returnedData });
  }

  TagList() {
    const listItems = this.state.editTags.map((tag) => {
      <li>{tag.requirement}</li>;
    });
    return <ul>{listItems}</ul>;
  }



  render() {
    console.log(this.state.returnedData);
    return (
      <div>
        <div className="CrossArea">
          <div>
            <button className="ui button" onClick={() => this.first()}>
              培训
            </button>
            <button className="ui button" onClick={() => this.second()}>
              拜访
            </button>
            <button className="ui button" onClick={() => this.third()}>
              活动策划
            </button>
            <button className="ui button" onClick={() => this.fourth()}>
              导师
            </button>
            <button
              style={{ marginLeft: "30px" }}
              className="ui primary button"
              onClick={() => {
                this.setState({ finalTags: this.state.editTags });
              }}
            >
              Output
            </button>
          </div>
          <div className="ui divider"></div>
          <div className="square left">
          <h5>Keyword: </h5>
            <input
              style={{ margin: "0px" }}
              onChange={this.topChange}
              type="text"
            />
            <DraggableArea1
              tags={this.state.leftTags}
              render={({ tag }) => (
                <div>
                  {this.state.toggle ? (
                    <div
                      className="tag"
                      onDoubleClick={() => {
                        this.setState({ toggle: false });
                      }}
                    >
                      {tag.requirement}
                    </div>
                  ) : (
                    <textarea
                      className="input"
                      value={tag.requirement}
                      onChange={(event) => this.handleUpdate(event, tag.id)}
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
              onChange={(leftTags) => {
                this.setState({ leftTags });
              }}
            />
          </div>

          <div className="square middle">
          <h5>Keyword: </h5>
            <input
              style={{ margin: "0px" }}
              onChange={this.middleChange}
              type="text"
            />
            <DraggableArea1
              tags={this.state.middleTags}
              render={({ tag }) => (
                <div>
                  {this.state.toggle ? (
                    <div
                      className="tag"
                      onDoubleClick={() => {
                        this.setState({ toggle: false });
                      }}
                    >
                      {tag.requirement}
                    </div>
                  ) : (
                    <textarea
                      className="input"
                      value={tag.requirement}
                      onChange={(event) => this.handleUpdate(event, tag.id)}
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
              onChange={(middleTags) => {
                this.setState({ middleTags });
              }}
            />
          </div>

          <div className="square right">
          <h5>Keyword: </h5>

            <input

              style={{ margin: "0px" }}
              onChange={this.bottomChange}
              type="text"
            />
            <DraggableArea2
              tags={this.state.rightTags}
              render={({ tag }) => (
                <div>
                  {this.state.toggle ? (
                    <div
                      className="tag"
                      onDoubleClick={() => {
                        this.setState({ toggle: false });
                      }}
                    >
                      {tag.requirement}
                    </div>
                  ) : (
                    <textarea
                      className="input"
                      value={tag.requirement}
                      onChange={(event) => this.handleUpdate(event, tag.id)}
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
              onChange={(rightTags) => {
                this.setState({ rightTags });
              }}
            />
          </div>


          <div className="square edit">
          <h5>Edit Box</h5>
            <DraggableArea2
              tags={this.state.editTags}
              render={({ tag }) => (
                <div className="tag">
                  <img
                    className="delete"
                    src={deleteBtn}
                    srcSet={`${deleteBtn2x} 2x`}
                    onClick={() => this.handleClickDelete(tag)}
                  />
                  {tag.requirement}
                </div>
              )}
              onChange={(editTags) => {
                this.setState({ editTags });
              }}
            />
          </div>
        </div>
        {this.state.finalTags.length > 0 && (
          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "auto",
              height: "200px",
            }}
            className="ui card"
          >
            {this.state.finalTags.map((tag) => {
              return (
                <div className="content">
                  <div className="description">{tag.requirement}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
