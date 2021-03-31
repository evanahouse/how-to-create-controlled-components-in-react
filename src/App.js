import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
    catName:"",
    catBreed:""
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <form className="catForm">
          <label htmlFor="name">Cat Name</label>
          <input 
            type="text" 
            name="catName" 
            id="name" 
            value={this.state.catName} 
            onChange={this.handleChange} 
            />
          <label htmlFor="breed">Cat Breed</label>
          <input 
            type="text" 
            name="catBreed" 
            value={this.state.catBreed} 
            onChange={this.handleChange} 
            />
        </form> 
      </div>
    )
    }
}

export default App;
