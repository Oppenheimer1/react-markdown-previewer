import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

//brings in the marked library(https://www.npmjs.com/package/marked)
let x = require('marked')

class App extends Component {

//where we declare our state property,
state ={
  md: "" //initialized to an empty string
}


updateMarkdown = function(md){
  this.setState({md})
}

  render() {
    let {md} = this.state;

    return (
      <div className="App container">
      <div>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Markdown Input</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" value={md} onChange={(event)=> this.updateMarkdown(event.target.value)}/>
        </FormGroup>
  </div>
  <div>
    <h1>Markdown Output</h1>
    <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a>
    { }
    <div dangerouslySetInnerHTML= {{__html:x(md)}}>
     
    </div>
  </div>
      </div>
    );
  }
}

export default App;