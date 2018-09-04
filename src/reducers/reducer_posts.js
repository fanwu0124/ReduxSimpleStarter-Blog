import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      //Remove the post with the key (action.payload) from the state.
      return _.omit(state, action.payload);
    case FETCH_POST:

     // const post = action.payload.data; //Get the single post.
     // const newState = { ...state }; //Don't discard the previously fetched post.
     // newState[post.id] = post; //Add the newly fetched post to state by adding a new key value pair.
     // return newState;
     //ES6 syntax, the same as the above lines of code.
     //The existing object in state will be overwritten by the same object in action.payload.data.
     return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      //_.mapKeys convert [{"id":4, "title":"Hi"}, {"id":25, "title":"Bye"}] to
      //[{"4": {"id":4, "title":"Hi"}}, {"25": {"id":25, "title":"Bye"}}]
      //Take id as the key
      //The key value pair is better than a simple array because key value pair
      //can avoid dupliates and it's easy to update or delete a pair.
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
