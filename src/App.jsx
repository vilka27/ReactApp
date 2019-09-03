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
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/articles/:date" component={BigItem} />
        <Route exact path="/about" component={About} />

      </div>
    </BrowserRouter>
  );
}

export default App;
