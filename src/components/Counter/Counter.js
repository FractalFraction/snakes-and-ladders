import './Counter.css'

const Counter = (props) => (
   <div id="counter" data-testid="counter" value={props.currentPosition} className="Counter">{props.currentPosition}</div>
)

export default Counter