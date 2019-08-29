/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Catalog from './components/Catalog';
import About from './components/About';
import BigItem from './components/BigItem';

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <div>
        <ul>
          <li><Link to="/">Catalog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/articles/:date" component={BigItem} />
        <Route exact path="/about" component={About} />

      </div>
    </BrowserRouter>
  );
}

export default App;
