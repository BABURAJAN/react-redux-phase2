/*import React from 'react';
import {render} from "react-dom";

import { User } from './app/components/User';
import { Main } from './app/components/Main';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Babu"
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)}/>
                <User username={this.state.username}/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));*/

import { createStore } from "redux";

const reducer = (state, action) => {
  switch(action.type){
      case "ADD":
      state = state + action.payload;
      break;
      case "SUBTRACT":
      state = state - action.payload;
      break;
      default:
      break;
  }
  return state;
};

const store = createStore(reducer,1);

store.subscribe(()=>{
    console.log("Store updated .. ", store.getState());

});

store.dispatch({
    type:"ADD",
    payload:100
})

store.dispatch({
    type:"ADD",
    payload:22
})

store.dispatch({
    type:"SUBTRACT",
    payload:80
})