import React from 'react';
import { connect } from 'react-redux';
import CategoryList from '../views/category-list';
import * as categoryApi from '../../api/category-api';
import store from '../../store';

const CategoryListContainer = React.createClass({

  componentDidMount: function() {
  categoryApi.getCategories();
  },

  render: function() {
    return (
        <CategoryList categories={this.props.categories} toggleSubCategories={this.toggleSubCategories} setActiveSubCategory={this.setActiveSubCategory}/>
    );
  },

  toggleSubCategories: function(event) {
    $(event.currentTarget).parent().find("ul").slideToggle();
  },

  setActiveSubCategory: function(event) {
    $('#sidebar').find("a.active").each(function(){
        $(this).removeClass('active');     
    });
    $(event.currentTarget).addClass('active');
  }
});

const mapStateToProps = function(store) {
  return {
    categories: store.categoryState.categories
  };
};

export default connect(mapStateToProps)(CategoryListContainer);
