import * as types from "./actionTypes";

export const buyItem = item => {
  return {
    type: types.BUY_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: types.REMOVE_ITEM,
    payload: item
  };
};