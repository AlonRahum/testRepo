import { NAME } from './constants';

const get = state => state[NAME];

export const getIsLoading = state => get(state).isLoading;
export const getIsDrawerOpen = state => get(state).isDrawerOpen;
export const getIsLogInOpen = state => get(state).isLoginPopupOpen;