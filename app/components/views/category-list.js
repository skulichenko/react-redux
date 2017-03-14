import React from 'react';
import { Link } from 'react-router';

import SubCategoryList from './sub-category-list';

export default function(props) {
  return (
    <div className="data-list">

      {props.categories.map(category => {

        return (
            <div key={category.id} >
              <a onClick={props.toggleSubCategories}>{category.name}</a>
              <ul>
                <SubCategoryList category={category} setActiveSubCategory={props.setActiveSubCategory}/>
              </ul>
            </div>
        );

      })}

    </div>
  );
}
