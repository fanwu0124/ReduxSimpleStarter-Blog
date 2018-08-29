import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:

     // const post = action.payload.data; //Get the single post.
     // const newState = { ...state }; //Don't discard the previously fetched post.
     // newState[post.id] = post; //Add the newly fetched post to state by adding a new key value pair.
     // return newState;
     //ES6 syntax, the same as the above lines of code.
     return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      //_.mapKeys convert [{"id":4, "title":"Hi"}, {"id":25, "title":"Bye"}] to
      //[{"4": {"id":4, "title":"Hi"}}, {"25": {"id":25, "title":"Bye"}}]
      //Take id as the key
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
