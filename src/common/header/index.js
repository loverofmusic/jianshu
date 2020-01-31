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
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];

    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (newList[i]) {
        pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handleChangePage(page, totalPage, this.spinIcon);
              }}
            >
              <span
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe635;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, list, handleInputFocus, handleInputBlur } = this.props;
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
                onFocus={() => {
                  handleInputFocus(list);
                }}
                className={focused ? "focused" : ""}
                onBlur={handleInputBlur}
              />
            </CSSTransition>

            <span className={focused ? "iconfont focused zoom" : "iconfont zoom"}>&#xe6e4;</span>
            {this.getListArea()}
          </SearchWrapper>

        
          <Addition>
            <Button className="writting">
              <span className="iconfont">&#xe6af;</span>写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>

          <NavItem className="right log">登录</NavItem>
          {/* Aa */}
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    // focused: state.header.get("focused")
    // focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      dispatch(actionCreators.searchFocus());
      console.log(list.size);
      list.size === 0 && dispatch(actionCreators.getList());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      // console.log(spin)
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 180) + "deg)";
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
