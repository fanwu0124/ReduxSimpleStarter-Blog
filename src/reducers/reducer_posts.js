import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      //_.mapKeys convert [{"id":4, "title":"Hi"}, {"id":25, "title":"Bye"}] to
      //[{"4": {"id":4, "title":"Hi"}}, {"25": {"id":25, "title":"Bye"}}]
      //Take id as the key
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
