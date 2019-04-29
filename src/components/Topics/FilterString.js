import React, {Component} from 'react'

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ['Tyler', 'Jeff', 'Ian', 'Ernie'],
            userInput: '',
            filteredArray: [],
        }
    }
    
    handleUpdateUserInput(value) {
        this.setState({userInput: value})
    }

    handleFilterStringArray() {
        let filteredCopy = this.state.unFilteredArray.slice()
        let results = filteredCopy.filter(val => {
            return val.toLowerCase().indexOf(this.state.userInput.toLowerCase()) > -1
        })
        this.setState({filteredArray: results})
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => {this.handleUpdateUserInput(e.target.value)}} />
                <button className="confirmationButton" onClick={() => {this.handleFilterStringArray()}}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString