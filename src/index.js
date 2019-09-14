import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

const initialState = {
  unread_articles_num: 0,
  all_articles_num: 0,
  articles: {},
  style: 'TABLE',
}

function reducer(state = [], action) {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        articles: action.articles,
      }
    case 'READ_ARTICLE':
      return {
        ...state,
        unread_articles_num:
          state.unread_articles_num !== 0 ? state.unread_articles_num - 1 : 0,
      }
    case 'SET_ARTICLES_NUM':
      return {
        ...state,
        all_articles_num: action.articles_num,
      }
    case 'SET_UNREAD_ARTICLES_NUM':
      return {
        ...state,
        unread_articles_num: action.articles_num,
      }
    case 'ALL_READ_ARTICLES':
      return {
        ...state,
        unread_articles_num: 0,
      }
    case 'DELETE_ARTICLE':
      return {
        ...state,
        articles: action.articles,
        all_articles_num: state.all_articles_num - 1,
      }
    case 'SET_DISPLAY_STYLE':
      return {
        ...state,
        style: action.style,
      }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
