import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import { actionCreators } from "./store";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from "./style";

class Header extends Component {
  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>历史</SearchInfoItem>
            <SearchInfoItem>历史</SearchInfoItem>
            <SearchInfoItem>历史</SearchInfoItem>
            <SearchInfoItem>历史</SearchInfoItem>
            <SearchInfoItem>历史</SearchInfoItem>
            <SearchInfoItem>历史</SearchInfoItem>
            <SearchInfoItem>历史</SearchInfoItem>
            <SearchInfoItem>历史</SearchInfoItem>
            <SearchInfoItem>历史</SearchInfoItem>
            <SearchInfoItem>历史</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <HeaderWrapper>
        {/* <Logo href="/" /> */}
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition classNames="slide" timeout={200} in={this.props.focused}>
              <NavSearch
                onFocus={this.props.handleInputFocus}
                className={this.props.focused ? "focused" : ""}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>

            <span className={this.props.focused ? "iconfont focused" : "iconfont"}>&#xe6e4;</span>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>

          <NavItem className="right">登录</NavItem>
          {/* Aa */}
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe6af;</span>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    // focused: state.header.get("focused")
    // focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
