import * as types from '../actions/action-types';

export function changeSelectedTab(selectedTab, tabNamespace) {
    return {
        type: types.CHANGE_SELECTED_TAB,
        tab: selectedTab,
        namespace: tabNamespace
    };
}

export function getCategoryTabsSuccess(tabs) {
  return {
    type: types.GET_CATEGORY_TABS,
    tabs
  };
}