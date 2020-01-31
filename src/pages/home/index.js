import React, { Component } from "react";
import { HomeWrapper } from "./style";
import { HomeLeft } from "./style";
import { HomeRight } from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload-images.jianshu.io/upload_images/186093-989f962e0fdb44dc.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"
            alt=""
          />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;
