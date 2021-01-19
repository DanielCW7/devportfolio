import React from 'react';
import './Anim.css';
import './App.css';
import Intro from './components/Intro';
import Home from './components/Home';
import Nav from './components/Nav';
import Top from './components/Footer';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Project from './components/ProjectList';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import ScrollToTop from './components/ScrollToTop';

class App extends React.Component {
  
 
  render() {
    
  return (
    <HashRouter basename='/'>
      <ScrollToTop>
        <div id='body'>
        {/* <Intro /> */}
        <Nav />
        <Switch>
          <Route path='/' exact component={Intro} />
          <Route path='/Home' component={Home}/>
          <Route path='/Project' component={Project} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Gallery' component={Gallery} />
        </Switch>
        <Top />
        </div>
      </ScrollToTop>

    </HashRouter>
    
  );
}
}

export default App;
