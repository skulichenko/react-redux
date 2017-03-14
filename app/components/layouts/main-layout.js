import React from 'react';
import { Link } from 'react-router';

import CategoryListContainer from '../containers/category-list-container';

export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <aside id="sidebar" className="primary-aside">
        <CategoryListContainer/>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
    );
}
