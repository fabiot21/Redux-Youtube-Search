import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowVideo extends Component {
  render(){
    const URL = 'https://www.youtube.com/embed/';
    const { videos, indexVideo } = this.props;
    if (!videos[indexVideo]) {
      return (<div>Loading...</div>)
    }
    return(
      <div className="col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title={videos[indexVideo].snippet.title}
                  className="embed-responsive-item"
                  src={`${URL}${videos[indexVideo].id.videoId}`}
                  allowfullscreen/>

        </div>
        <div className="info">
          <h4>{ videos[indexVideo].snippet.title }</h4>
          <div>{ videos[indexVideo].snippet.description }</div>
        </div>

      </div>

    )
  }
}

function mapStateToProps({ videos, indexVideo }){
  return { videos, indexVideo }
}

export default connect(mapStateToProps)(ShowVideo);
