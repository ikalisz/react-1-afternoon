import React, {Component} from 'react'

class Palindrome extends Component {
    constructor() {
        super()
        this.state ={
            userInput: '',
            palindrome: ''
        }
    }

    handleUpdateUserInput(value) {
        this.setState({userInput: value})
    }

    handleSolvePalindrome() {
        let reversedString = this.state.userInput.split('').reverse().join('')
        if(this.state.userInput === reversedString) {
            this.setState({palindrome: `${this.state.userInput} is a palindrome`})
        } else {
            this.setState({palindrome: `${this.state.userInput} is not a palindrome`})
        }
    }


    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => {this.handleUpdateUserInput(e.target.value)}}/>
                <button className="confirmationButton" onClick={() => {this.handleSolvePalindrome()}}>Solve</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome