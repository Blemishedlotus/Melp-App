import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Header from './Header';
import Content from './Content';


class App extends Component {



  state = {
    sortByRating: true,
    restaurants: []
  };

  componentDidMount(){
    axios.get("https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json")
    .then( response => {
      //console.log(response);
      this.setState({
        restaurants: response.data
      });

    })
    .catch(function (error){
      console.log(error);
    });

  }

  toggleSorter = () =>
    this.setState({sortByRating: !this.state.sortByRating});

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Content
            toggleSorter = {this.toggleSorter}
            restaurants = {this.state.restaurants}
            byRating = {this.state.sortByRating}
           />
        </div>
      </div>
    );
  }
}

export default App;
