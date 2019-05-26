/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,Button} from 'react-native';
import { clickButtonAction } from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
// 打印初始状态

 class MyApp extends Component{
  render() {
      // 映射属性 和action creator
    const { clickButton ,show } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button
          color = 'blue'
          title = 'click to dispatch action from action creator'
          onPress = {clickButton}
        />
        <Text style={styles.welcome}> {show} </Text>
      </View>
    );
  }
}
 // 将 state交给属性  按需添加
const  mapStateToProps = (state) =>{
  return {
    show : state.showText 
  }
}

// 将action creator 交给属性  按需添加
const mapDispatchToProps = {
    clickButton : clickButtonAction
}

// function mapDispatchToProps(dispatch) {
//     return{
//          clickButton: bindActionCreators(clickButtonAction, dispatch)
//     }
// } 

 //关联
 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyApp)



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
