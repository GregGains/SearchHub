import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="search">
            <h1>Search </h1>
            <form method="GET">
                <input type="text" 
                       className="form-search"
                       
                        />



                <input type="submit" className="form-button" value="Search" />
            </form>
                
            </div>
        )
    }
}
