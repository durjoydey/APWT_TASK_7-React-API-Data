import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Head from './Components/Head';
import Foot from './Components/Foot';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import StudentDetails from './Components/StudentDetails';
import ColorState from './Components/ColorState';
import EffectHookCheck from './Components/EffectHookCheck';
import AllPosts from './Components/AllPosts';

ReactDOM.render(
  <React.StrictMode>
<Router>
      <Head/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Student">
          <Student/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/student/:id">
          <StudentDetails/>
        </Route>
        <Route exact path="/color">
          <ColorState/>
        </Route>
        <Route exact path="/effect">
          <EffectHookCheck/>
        </Route>
        <Route exact path="/posts">
          <AllPosts/>
        </Route>

      </Switch>
      <Foot/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();