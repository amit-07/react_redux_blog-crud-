import { FETCH_POSTS } from '../actions/index'; //Importing action creator to our reducer

const INITIAL_STATE =  { all: [], post: null }; //Initial state is defined here

// Reducer takes in initial state and action object as two paramenters and reduces or 
// modifies the state of redux app according to action type.
export default function(state = INITIAL_STATE, action){
    switch(action.type) {
        case FETCH_POSTS:
            return {...state, all: action.payload.data}; //concatenation of current state (i.e. ...state) with action payload.
        default:
            return state;
    }
}