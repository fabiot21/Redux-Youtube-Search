import { FETCH_VIDEOS } from '../actions';

const initialState = []

export default function(state = initialState, action) {
    switch (action.type){
        case FETCH_VIDEOS:
            return action.payload.data.items
        default:
            return state
    }
}
