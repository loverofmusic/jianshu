import { fromJS } from "immutable";
// import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  title: "请各位HR注意，不要随便给员工开这些证明，后果会很严重！",
  content:
    '<img src="//upload-images.jianshu.io/upload_images/15631385-c993697e95734762?imageMogr2/auto-orient/strip|imageView2/2/w/604/format/webp" alt="" /><p>在我们的日常生活中，经常会碰到需要办理证明的情况，其中最为常见的就是被要求提供收入证明，例如出境游完办理签证，有一些国家就会要求提供收入证明。如果没有什么特殊原因，单位理应为员工提供并出具这类证明，便于员工完成需要办理的事宜。</p><p>可问题在于，有一部分员工在要求单位开具证明时，总会提出一些与实际情况不符的额外要求，出于人情世故，很多HR会选择睁一只眼闭一只眼，顺势帮助这些员工，完成他们的额外要求。但是，正是这些“额外要求”往往会给企业及HR带来不必要的麻烦。</p>'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    // case actionTypes.CHANGE_HOME_DATA:
    //   return true;

    default:
      return state;
  }
};
