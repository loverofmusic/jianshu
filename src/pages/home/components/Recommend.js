import React, { Component } from "react";
import { RecommendWrapper, RecommendItem } from "../style";
import { connect } from "react-redux";

class Recommend extends Component {
  render() {
    const {list} = this.props;
    return (
      <RecommendWrapper>
        {/* <RecommendItem imgUrl="http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"></RecommendItem> */}
        {list.map(item => (
          <RecommendItem key={item.get("id")} src={item.get("imgUrl")}></RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}

const mapState = state => ({
  // list: state.get("home").get("recommendList")
  list: state.getIn(["home", "recommendList"])
});

export default connect(mapState)(Recommend);
