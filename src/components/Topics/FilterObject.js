import React, { Component } from 'react'

//To do: make it so user can input an object list and then filter through it, however if nothing is inputed default to the car list. with instructions on how to do it.


class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [{make: 'Acura', year: 2004, model: 'TSX'}, {year: 2014, model: 'Focus'}, {make: 'Ford', year: 2019}, {make: 'Honda', model: 'Civic'}],
            userInput: '',
            filteredArray: [],
        }
    }

    handleUpdateUserInput(value) {
        this.setState({userInput: value})
    }

    handleFilterObjectSolve() {
        const filterCopy = this.state.unFilteredArray.slice()
        filterCopy.filter((val) => {
            for (let element in val) {
                if (element === this.state.userInput) {
                    console.log(val)
                    return val
                }
            }
        })
        this.setState({
            filteredArray: filterCopy,
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => {this.handleUpdateUserInput(e.target.value)}} />
                <button className="confirmationButton" onClick={() => {this.handleFilterObjectSolve()}}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject