import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div className="data-list">

      {props.category.subCategories.map(subCategory => {

        return (
            <li key={subCategory.id} >
              <Link to={"/categories/" + props.category.id + "/" + subCategory.id} onClick={props.setActiveSubCategory}>{subCategory.name}</Link>
            </li>
        );

      })}

    </div>
  );
}
