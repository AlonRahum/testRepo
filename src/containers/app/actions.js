import {
    NAME,
  } from './constants';
  
  export const types = {     
      CHANGE_LOADING_STATE: `${NAME}/changeLoadingState`,
      TOGGLE_DRAWER: `${NAME}/toggleDrawer`,
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