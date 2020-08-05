import React, { Component } from 'react'

import { Paper, TextField} from '@material-ui/core'; 

export default class SearchBar extends Component {
    state = {
        searchTerm :'',
    }

    handleChange = (event) => this.setState({ searchTerm: event.target.value})
 
    handleSubmit = (event) => {
        //destructoring in short way
        //or console.log(this.state.searchTerm, ... this.state.value, ...)
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm)

        event.preventDefault();

    }
  render() {
    return (
      <div>
        <Paper elevation={6} style={{ padding: '25px'}}>
            <form onSubmit={this.handleSubmit}>
                <TextField fullWidth label="Search ..." onChange={this.handleChange}/>
            </form>
        </Paper>
      </div>
    )
  }
}


