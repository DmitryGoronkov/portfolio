import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'

class App extends React.Component {
  componentDidMount(){
    document.title = "Dmitry Goronkov Portfolio"
  }
  render(){
  return (
    <div>
       <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/profile" component={Profile} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </BrowserRouter>
    </div>
  );
  }
}

export default App;
