import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

// Reducers
import categoryReducer from './category-reducer';
import tabsReducer from './tabs-reducer';

// Combine Reducers
var reducers = combineReducers({
    categoryState: categoryReducer,
    tabsState: tabsReducer
});

export default reducers;
