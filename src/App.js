import React from 'react';
import AddChirp from './AddChirp.jsx'
import Chirp from './Chirp.jsx'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    showingChirps: true,
    chirps: []
    }
  }

  submitChirp = (newChirp) =>{
    let chirpsCopy = this.state.chirps.slice()
    chirpsCopy.push(newChirp)
    this.setState({chirps: chirpsCopy})
  }

  handleSwapState = (event) => {
    this.setState({
      showingChirps: !this.state.showingChirps
    })
  }

render(){
  if (this.state.showingChirps){
    return (
      <>
        <h1>Add your very own chirp!</h1>
        <button onClick={this.handleSwapState}>add/view chirps</button>
        <AddChirp func={this.submitChirp} func2={this.handleSwapState}/>
      </>
    )
  } else {
    return (
      <>
      <h1>Check out these insightful chirps!</h1>
      <button onClick={this.handleSwapState}>add/view chirps</button>
      {this.state.chirps.map((chirp)=>{
        return (
          <>
          <Chirp name={chirp.name} text={chirp.text} />
          </>
        );
        })}
      </>
    )
  }
}
}
export default App;
