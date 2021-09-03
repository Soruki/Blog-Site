// this component is root component, only component render to the DOM
import React from 'react'; //not important for 17 and above version
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() { // Function which return jsx (it allows to easily create HTML styled template)
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <div className="content">
           <Switch> {/*stop at the first match */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
} // return tpe cannot be of object and boolean type but numbers, string, arrays are fine
// instead of class we used className becoz class is reserved keyword in js, JSX will convert this to class when it return html page
export default App; //exporting so that we can use it later

//this is root component, all the component will be nested with it