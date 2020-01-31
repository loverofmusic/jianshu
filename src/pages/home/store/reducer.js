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
    },
    {
      id: 3,
      title: "热会热点",
      imgUrl: "//upload-images.jianshu.io/upload_images/7229973-2df41b58065b53ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 4,
      title: "手绘",
      imgUrl: "//upload-images.jianshu.io/upload_images/15035171-e9bec4cd78e02d93.png@c_1,w_640,h_398,x_0,y_0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 5,
      title: "热会热点",
      imgUrl: "//upload-images.jianshu.io/upload_images/7229973-2df41b58065b53ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 6,
      title: "手绘",
      imgUrl: "//upload-images.jianshu.io/upload_images/15035171-e9bec4cd78e02d93.png@c_1,w_640,h_398,x_0,y_0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 7,
      title: "热会热点",
      imgUrl: "//upload-images.jianshu.io/upload_images/7229973-2df41b58065b53ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 8,
      title: "手绘",
      imgUrl: "//upload-images.jianshu.io/upload_images/15035171-e9bec4cd78e02d93.png@c_1,w_640,h_398,x_0,y_0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },
    {
      id: 2,
      imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id: 3,
      imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id: 4,
      imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
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
