import axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const CHANGE_VIDEO = 'CHANGE_VIDEO';

const API_KEY = 'AIzaSyBThMQ9ShKllr5nQ8NfWp3GllI5c_7yVlo';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export function fetchVideos(query){
  var params = {
    part: 'snippet',
    key: API_KEY,
    q: query,
    type: 'video'
  };

 const request = axios.get( ROOT_URL, { params } )

  return {
    type: FETCH_VIDEOS,
    payload: request
  };
}

export function changeVideo(index){

  return {
    type: CHANGE_VIDEO,
    payload: index
  };
}
