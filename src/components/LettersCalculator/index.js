// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  countNoOfCharacters = event => {
    const value = event.target.value.length
    console.log(value)

    this.setState({count: value})
  }

  render() {
    const {count, searchInput} = this.state
    return (
      <div className="container">
        <div className="cont1">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputId" className="para">
            Enter the phrase
          </label>
          <input
            className="input1"
            type="text"
            id="inputId"
            placeholder="Enter the phrase"
            onChange={this.countNoOfCharacters}
          />
          <p className="btn">No.of letters: {count}</p>
        </div>
        <div className="cont2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
