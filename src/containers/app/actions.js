import {
    NAME,
  } from './constants';
  
  export const types = {     
      CHANGE_LOADING_STATE: `${NAME}/changeLoadingState`,
      TOGGLE_DRAWER: `${NAME}/toggleDrawer`,
      TOGGLE_LOGIN_POPUP: `${NAME}/toggleLoginPoup`,
  };
  
  export function changeLoadingState() {
    return {
      type: types.CHANGE_LOADING_STATE,
    };
  }
  
  export function toggleDrawer() {
    return {
      type: types.TOGGLE_DRAWER,
    };
  }

  export function toggleLoginPopup() {
    return {
      type: types.TOGGLE_LOGIN_POPUP,
    };
  }