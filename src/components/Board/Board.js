import React from 'react'
import './Board.css' 

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div>
        <div id="tile-1" data-testid="tile-1" className="Tile">1</div>
      </div>
    )
  }

}

export default Board