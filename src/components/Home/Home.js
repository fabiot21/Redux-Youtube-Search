import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ShowVideo from './ShowVideo';
import VideoList from './VideoList';

class Home extends Component {
  render() {
    return (
      <div className="App container">
        <SearchBar />
        <div className="row">
          <ShowVideo />
          <VideoList />
        </div>

      </div>
    );
  }
}

export default Home;
