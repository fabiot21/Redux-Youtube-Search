import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { input: 'React Redux' }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchVideos(this.state.input);
  }

  componentDidMount(){
    this.props.fetchVideos(this.state.input);
  }

  render(){
    return (
      <div>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <input
            className="form-control"
            onChange={(event) => this.setState({ input: event.target.value })}
            value={this.state.input} />
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchVideos })(SearchBar);
