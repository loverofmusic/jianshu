import React, { Component } from "react";
import { ListItem, ListInfo } from "../style";

class List extends Component {
  render() {
    return (
      <ListItem>
        <img
          className="pic"
          src="//upload-images.jianshu.io/upload_images/1878622-0f9c21889862f1a3?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
          alt=""
        />
        <ListInfo>
          <h3 className="title">云南边境地区流行的“卡苦”是一种什么毒品？</h3>
          <p className="desc">
            在我国云南边境，由于靠近金三角，阿片类毒品（鸦片、海洛因）问题一直比较严重，很长一段时间海洛因泛滥成灾，随着当地对此类毒品进行多次严厉打击之后，...
          </p>
        </ListInfo>
      </ListItem>
    );
  }
}

export default List;
