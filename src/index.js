import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {loadFromLocalStorage, saveToLocalStorage} from "./services";

export const setExamToState = (exam = {}) => {
  console.log(exam)
  return {
    type: "SAVE_EXAM",
    exam
  };
}

export const main_page = (current_state = {}, action = {}) => {
  switch (action.type) {
    case "SAVE_EXAM":
      return {
        exam: action.exam
      }
    default:
      return current_state;
  }
}
const combiner_reducer = combineReducers(
  {
    main_page
  }
)


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(combiner_reducer, loadFromLocalStorage(), devTools);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
