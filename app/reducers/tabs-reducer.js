import * as types from '../actions/action-types';

const initialState = {
    tabs: null
};

const tabsReducer = function(state = initialState, action) {
    switch (action.type) {
    case types.CHANGE_SELECTED_TAB:
    	return Object.assign({}, state, {tabs: action.tabs});
    case types.GET_CATEGORY_TABS:
    	return Object.assign({}, state, {tabs: action.tabs });
    default:
        return state;
    }
}

export default tabsReducer;