import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeVideo } from '../../actions';

class VideoList extends Component{

  render(){
    const videos = this.props.videos.map( (video, idx) => {
      const { snippet } = video;
      return (
        <li className="list-group-item"
            onClick={(e) => this.props.changeVideo(idx)}
            key={video.etag}>
            <div className="video-list media">
              <div className="media-left">
                <img className="media-object"
                      alt="video"
                      src={ snippet.thumbnails.default.url } />
              </div>
              <div className="media-body">
                <div className="media-heading">{snippet.title}</div>
              </div>
            </div>
        </li>
      )
    })

    return (
      <div className="col-md-4">
        <ul className="list-group">
          { videos }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ videos }){
  return { videos }
}

export default connect(mapStateToProps, { changeVideo })(VideoList)
