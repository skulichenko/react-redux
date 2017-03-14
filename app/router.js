import React from 'react';
import { Router, Route,Redirect, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import TabsLayout from './components/layouts/tabs-layout';

// Pages
import Home from './components/home';

export default (
  <Router history={browserHistory}>

    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="categories">
          <Route path=":categoryId">
            <Route path=":subCategoryId">
              <IndexRoute component={TabsLayout} />
            </Route>  
          </Route>
        </Route>
    </Route>
  </Router>
);
