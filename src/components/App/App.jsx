import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import Article from '../Article';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import EditProfile from '../EditProfile';
import FormOfArticle from '../FormOfArticle';
import MainPage from '../MainPage';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path={['/', '/page/:pathParam?', '/articles']} component={MainPage} exact />
      <Route path="/article/:id" component={Article} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/profile" component={EditProfile} />
      <Route path="/new-article" component={FormOfArticle} />
      <Route path="/articles/:id/edit" component={FormOfArticle} />
    </Router>
  );
};

export default App;
