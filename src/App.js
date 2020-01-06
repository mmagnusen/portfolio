import React, { Component } from 'react';
import { 
  Navigation, 
  Introduction, 
  Footer, 
  Background, 
  FindMe, 
  HardSkills, 
  SoftSkills, 
  Projects 
} from './components'
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Navigation />

          <Introduction />

          <Background />

          <Projects />

          <HardSkills />

          <SoftSkills />

          <FindMe />

        <Footer />
        
      </div>
    );
  }
}

export default App;
