import React from "react";
import "./App.css";
import JobGrid from './components/JobGrid'
import JobJumbo from './components/JobJumbo'
import JobSearcher from './components/JobSearcher'
import styled from 'styled-components'


function App() {
  return (
    <div className="App">
      <JobJumbo/>
      <JobGrid/>
    </div>
  );
}

export default App;
