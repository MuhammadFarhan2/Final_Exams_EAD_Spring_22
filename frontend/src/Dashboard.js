import React, { Component } from 'react';
const axios = require('axios');

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
    };
  }

  addFavorite = () => {

    axios.post('http://localhost:2000/add-favorite', {
      headers: {
        'content-type': 'multipart/form-data',
        'token': this.state.token
      }
    }).then((res) => {
      this.setState({ name: '' }, () => {
      });
    }).catch((err) => {
      console.log(err)
    });
  }

  deleteFavorite = (id) => {
    axios.post('http://localhost:2000/delete-favorite', {
      id: id
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': this.state.token
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    });
  }

  render() {
    return (
      <div>
        <div class="card">
          <div class="card-header">
            <h1>Favorite</h1>
          </div>

          <div >
            <input type="text" class="form-control" id="name" placeholder="Enter Link" />
          </div>

          <div class="card-body">
            <a href="#" class="btn btn-primary">Add</a>
          </div>
        </div>

        <br/><br/>
        <br/>

        <div class="card">
          <div class="card-header">
            <h1>Frequent</h1>
          </div>
        </div>

      </div>

    );
  }
}