import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

//Must wrap Route inside div
//http://localhost:8080/posts/new will render both components.
//Because Route loosely matches the path.
//http://localhost:8080/posts/new has '/' after the domain, then
//it returnes all the components which have '/' after the domain.
//This bug can be fixed by using Switch.
//Switch looks for the first matched path, so move "/posts/new" before "/".
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          {/*:id is a wildcard*/}
          {/*Put this route after /posts/new, otherwise when requesting /posts/new,
            new could be the value of the wild card :id. It will render /posts/:id first*/}
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
