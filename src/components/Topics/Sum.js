import React, {Component} from 'react'

class Sum extends Component {
    constructor() {
        super()
        this.state ={
            number1: 0,
            number2: 0,
            sum: 0,
        }
    }

    handleUpdateNumberOne(value) {
        this.setState({number1: value})
    }

    handleUpdateNumberTwo(value) {
        this.setState({number2: value})
    }

    handleAddSum() {
        let num1 = +this.state.number1
        let num2 = +this.state.number2
        let sumVar = num1 + num2
        this.setState({
            sum: sumVar,
        })
    }

    render() {
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="number" className="inputLine" onChange={(e) => this.handleUpdateNumberOne(e.target.value)}/>
                <input type="number" className="inputLine" onChange={(e) => this.handleUpdateNumberTwo(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.handleAddSum()}>Sum</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum