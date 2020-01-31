// import * as constants from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "热会热点",
      imgUrl: "//upload-images.jianshu.io/upload_images/7229973-2df41b58065b53ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 2,
      title: "手绘",
      imgUrl: "//upload-images.jianshu.io/upload_images/15035171-e9bec4cd78e02d93.png@c_1,w_640,h_398,x_0,y_0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    // case :
    //   return state.set("focused", true);
    // case constants.SEARCH_BLUR:
    //   return state.set("focused", false);
    
      
    default:
      return state;
  }

};
