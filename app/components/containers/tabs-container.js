import React from 'react';
import { connect } from 'react-redux';
import * as categoryApi from '../../api/category-api';
import store from '../../store';
import Tabs from '../views/tabs';

const TabsContainer = React.createClass({

    componentDidMount: function() {
        let categoryId = this.props.params.categoryId;
        categoryApi.getCategory(categoryId);
    },

    render: function() {
        return (
            <Tabs tabContainer={this}/>
        );
    },
        
    toggleSidebar: function(event) {
        $("#sidebar").animate({width: 'toggle'});
    },

    getSubCategory: function() {
        return this.props.category.subCategories.filter(subCategory => 
                    subCategory.id == this.props.params.subCategoryId)[0];
    },

    getTabs: function() {
        if(this.props.category == null) {
            return [];
        }
        var a = this.getSubCategory();
       
        return a.tabs;
    },

    addTab: function() {
        var newTab = {
              "id": this.getTabs().length + 1,
              "name": "New Tab",
              "content": ""
            }

        this.getTabs().push(newTab);
        this.updateCategory();
    },
    
    updateCategory: function() {
        categoryApi.updateCategory(this.props.category);
    }
});

const mapStateToProps = function(store) {
  return {
    category: store.categoryState.category
  };
};

export default connect(mapStateToProps)(TabsContainer);