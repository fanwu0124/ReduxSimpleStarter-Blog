import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=valen29';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) { //Pass a callback function
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => callback()); //callback is called only when post ajax is finished.

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload:request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, id)
  .then(() => callback());

  return  {
    type: DELETE_POST,
    payload:id //We don't care about other data after deleting. Just get the id.
  }
}
