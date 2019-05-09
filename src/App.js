import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/common/Layout';
import BookList from './components/pages/BookList';
import BookDetails from './components/pages/BookDetails';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/">
        <Redirect to="/list" />
      </Route>

      <Route path="/list/:id" component={BookDetails} />
      <Route path="/list" component={BookList} />
    </Switch>
  </Layout>
);

export default App;
