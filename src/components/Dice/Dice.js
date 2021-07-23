import React from 'react';

class Dice extends React.Component {
  constructor(props){
    super(props)
    this.state = {faceUpValue: ''}
  }

  roll = () => {
    const number = Math.floor(Math.random() * 6)
    this.setState({faceUpValue: number})
  }

  render() {
    return(
    <div>
      <button id="dice-button" data-testid="dice-button" onClick={this.roll}>Roll</button>
      <p id="dice" data-testid="dice">{this.state.faceUpValue}</p>
    </div>
    )
  }

}

export default Dice