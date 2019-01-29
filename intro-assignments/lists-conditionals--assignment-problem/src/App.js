import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './validationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    inputLength: 0,
    inputText: ''
  }
  inputChangeHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      inputText: event.target.value
    })
  }
  
  deleteChar = (idx) => {
    console.log(idx)
    let inputCopy = [...this.state.inputText]
    inputCopy.splice(idx,1);
    inputCopy = inputCopy.join('');
    let newInputLength = inputCopy.length;
    this.setState({
      inputText: inputCopy,
      inputLength: newInputLength
    })
  }

  render() {
  var chars = this.state.inputText.split('').map((char, idx) => {
    return <CharComponent onClick={() => this.deleteChar(idx)} index={idx} key={idx} char={char}/>
  });
  chars.join('');
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.inputChangeHandler} placeholder="Enter text" value={this.state.inputText} />
        <p>{this.state.inputLength}</p>
        <ValidationComponent inputLength={this.state.inputLength}/>
        {chars}
      </div>
    );
  }
}

export default App;
