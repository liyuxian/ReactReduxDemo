/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { myStore } from "./src/store";
import { Provider} from 'react-redux'
import  MyApp  from "./src/MyApp";
// 打印初始状态
console.log(myStore.getState())

 export default class App extends Component{
  render() {
    return (
      //Provider 包裹根组件  传入  store
     <Provider store  = {myStore}>
        <MyApp/>
     </Provider>
    );
  }
}




