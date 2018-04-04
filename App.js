import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/timer";
import reducer from "./reducer"; //reducer 를 임포트 한다.
import { createStore } from "redux";
import { Provider } from "react-redux"; //reducer 로부터 가져온 state 값을 복사하기 위해 불러옴.

let store = createStore(reducer); //reducer를 이용해 store 생성, reducer를 가져옴.

console.log(store.getState());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>    
        <Timer />
      </Provider>
    );
  }
}

//store를 prop으로 가지는 Provider를 생성한다.
//Provider는 자동으로 state를 복사한다. store 에 있는 state를 복사해서 타이머에
//붙여넣는다. 
