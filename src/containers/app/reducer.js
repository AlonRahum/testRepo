import {
    combineReducers,
} from 'redux';
import * as Actions from './actions';
import { routerReducer } from 'react-router-redux'

const initialState = {
    isLoading: false,
    isDrawerOpen: false,
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case Actions.types.TOGGLE_DRAWER:
            return {
                ...state,
                isDrawerOpen: !state.isDrawerOpen
            }

        case Actions.types.CHANGE_LOADING_STATE:
            return {
                ...state,
                isLoading: !state.isLoading
            }

        default:
            return state
    }
}

export default combineReducers({
    router: routerReducer,
    app
})
