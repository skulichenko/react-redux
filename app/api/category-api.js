import axios from 'axios';
import store from '../store';
import { getCategorySuccess, getCategoriesSuccess, updateCategorySuccess } from '../actions/category-actions';
import { getCategoryTabsSuccess } from '../actions/tabs-actions';

export function getCategories() {
  return axios.get('http://localhost:3001/categories')
    .then(response => {
      store.dispatch(getCategoriesSuccess(response.data));
      return response;
    });
}

export function getCategory(categoryId) {
  return axios.get('http://localhost:3001/categories/' + categoryId)
    .then(response => {
      store.dispatch(getCategorySuccess(response.data));
      return response;
    });
}

export function updateCategory(category) {
  return axios.post('http://localhost:3001/categories/', category)
  .then(function(response){
      store.dispatch(updateCategorySuccess(response.data));
      return response;
  });  
}

export function getCategoryTabs(categoryId, subCategoryId) {
  return axios.get('http://localhost:3001/categories/' + categoryId + '/subCategories/'+ subCategoryId + '/tabs')
    .then(response => {
      store.dispatch(getCategoryTabsSuccess(response.data));
      return response;
    });
}