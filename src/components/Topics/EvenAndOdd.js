import React, { Component } from 'react'


class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    handleChangeUserInput(value) {
        this.setState({userInput: value})
    }

    handleSolveEvenOdd() {
        let numberArrayInput = this.state.userInput.split(',')
        const evenCopy = this.state.evenArray.slice()
        const oddCopy = this.state.oddArray.slice()
        numberArrayInput.forEach(val => {
            if (+val % 2 === 0) {
                evenCopy.push(+val)
            } else if (+val % 2 !== 0) {
                oddCopy.push(+val)
            }
        })
        this.setState({
            evenArray: evenCopy,
            oddArray: oddCopy,
        })
    }


    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4 value="Evens and Odds">Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChangeUserInput(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.handleSolveEvenOdd() }>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.oddArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.evenArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd