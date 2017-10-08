import React from 'react';
import Pic1 from './img/ml.png';

class TV extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: "?? ??", from: "??" }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({ name: "Miranda Lawson", from: "Mass Effect" })
    setTimeout(() => { this.setState({ name: "?? ??", from: "??" }) } , 1500);
  }

  render() {
    const cont1 = { border: "4px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", marginBottom: "10px", paddingBottom: "10px" }
    return(
      <div style={cont1}>
        <h3>Who is this Character ?</h3>
        <img src={Pic1} alt="Missing Pic."/>
        <div><strong>Name: </strong>{this.state.name}</div>
        <div><strong>From: </strong>{this.state.from}</div>
        <br/>
        <button onClick={this.onButtonClick} >Click to Find-out</button>
      </div>
    )
  }
}

export default TV;
