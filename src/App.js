import React from "react";
import "./App.css";
import JobGrid from './components/JobGrid'
import JobJumbo from './components/JobJumbo'
import JobSearcher from './components/JobSearcher'
import styled from 'styled-components'
import {Route} from 'react-router-dom'
import Job from './components/Job'


function App() {
  return (
    <div className="App">
    <Route exact path='/' component={JobJumbo}/>
    <Route exact path='/' component={JobGrid}/> 
    <Route path='/Job/:id' component={Job}/>
    </div>
  );
}

export default App;
