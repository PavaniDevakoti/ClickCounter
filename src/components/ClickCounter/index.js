import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(previousState => ({count: previousState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="card-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="counter-value"> {count} </span>
          times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
