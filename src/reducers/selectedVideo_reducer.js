import { FETCH_VIDEOS } from '../actions';

const initialState = []

export default function(state = initialState, action) {
    switch (action.type){
        case FETCH_VIDEOS:
            console.log(action.payload.data.items);
            return action.payload.data.items
        default:
            return state
    }
}
