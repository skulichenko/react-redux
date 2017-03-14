import * as types from '../actions/action-types';

export function getCategoriesSuccess(categories) {
  return {
    type: types.GET_CATEGORIES,
    categories
  };
}

export function getCategorySuccess(category) {
  return {
    type: types.GET_CATEGORY,
    category
  };
}

export function updateCategorySuccess(category) {
  return {
    type: types.UPDATE_CATEGORY,
    category
  };
}
