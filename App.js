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
import { Provider ,connect} from 'react-redux'

// 打印初始状态
console.log(myStore.getState())


export default class App extends Component{
  render() {
      const { clickButtonAction ,showText } = this.props;
    return (
      //Provider 包裹根组件  传入  store
      <Provider store  = {myStore}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button
          color = 'blue'
          title = 'click to dispatch action from action creator'
          onPress = {()=>{
            myStore.dispatch(clickButtonAction)
           }
          }
        ></Button>
           <Text style={styles.welcome}> showText </Text>
      </View>

      </Provider>
    );
  }
}

const  mapStateToProps = (state) =>{
  return {
    showText : state.showText 
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    clickButtonAction : clickButtonAction
  }
}



connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



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
