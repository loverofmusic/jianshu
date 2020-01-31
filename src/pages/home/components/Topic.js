import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
  render() {
    const list = this.props.list;
    return (
      <TopicWrapper>
        {/* {list.map(item => {
          return (
            <TopicItem key={item.get("id")}>
              <img className="topic-pic" src={item.get("imgUrl")} alt="" />
              {item.get("title")}
            </TopicItem>
          );
        })} */}
        {list.map(item => (
          <TopicItem key={item.get("id")}>
            <img className="topic-pic" src={item.get("imgUrl")} alt="" />
            {item.get("title")}
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}

const mapState = state => ({
  list: state.get("home").get("topicList")
});

export default connect(mapState)(Topic);
