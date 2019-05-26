/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,Button} from 'react-native';
import { clickButtonAction } from "./src/actions";
import { myStore } from "./src/store";


// 打印初始状态
console.log(myStore.getState())

// 打印action后回调状态 并刷新UI

myStore.subscribe(() => {
       console.log(myStore.getState()) 
        refresh()
    }
)

function refresh() {
  this.setState(myStore.getState())
}


export default class App extends Component{

  constructor(props) {
    super(props);
    refresh= refresh.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button
          color = 'blue'
          title = 'click to dispatch action from action creator'
          onPress = {()=>{
            myStore.dispatch(clickButtonAction())
           }
          }
        ></Button>
           <Text style={styles.welcome}>{myStore.getState().showText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
