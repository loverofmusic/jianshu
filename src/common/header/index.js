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
  getListArea() {
    const {focused, list} = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {list.map(item => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        {/* <Logo href="/" /> */}
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition classNames="slide" timeout={200} in={focused}>
              <NavSearch
                onFocus={handleInputFocus}
                className={focused ? "focused" : ""}
                onBlur={handleInputBlur}
              />
            </CSSTransition>

            <span className={focused ? "iconfont focused" : "iconfont"}>&#xe6e4;</span>
            {this.getListArea()}
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
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
      dispatch(actionCreators.getList());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
