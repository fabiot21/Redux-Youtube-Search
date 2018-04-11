import { combineReducers } from 'redux';
import videosReducer from './videos_reducer';
import indexVideo from './indexVideo_reducer';


const rootReducer = combineReducers({
  videos: videosReducer,
  indexVideo: indexVideo 
});

export default rootReducer;
