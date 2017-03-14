import * as types from '../actions/action-types';

const initialState = {
  categories: [],
  category: null
  
};

const categoryReducer = function(state = initialState, action) {

  switch(action.type) {
  	case types.UPDATE_CATEGORY:
	case types.GET_CATEGORY:
      return Object.assign({}, state, { category: action.category });
    case types.GET_CATEGORIES:
      return Object.assign({}, state, { categories: action.categories });
  }

  return state;

}

export default categoryReducer;
