import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import AudioTour from './components/AudioTour/AudioTour';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/home/audio-tour/:id" component={AudioTour}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
