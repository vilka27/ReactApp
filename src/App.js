import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Catalog from './components/Catalog';
import About from './components/About';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class App extends React.Component {
    render() {
      return (
        <BrowserRouter history={history}>
          <div>
            <ul>
              <li><Link to="/">Catalog</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Catalog} />
            <Route exact path="/about" component={About} />
          
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default App;
