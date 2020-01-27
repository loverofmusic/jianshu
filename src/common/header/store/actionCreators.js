import * as constants from "./actionTypes";
import axios from "axios";

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
