import { FETCH_VIDEOS, CHANGE_VIDEO } from '../actions';

const initialState = 0

export default function(state = initialState, action) {
    switch (action.type){
        case FETCH_VIDEOS:
            return 0
        case CHANGE_VIDEO:
            return action.payload
        default:
            return state
    }
}
