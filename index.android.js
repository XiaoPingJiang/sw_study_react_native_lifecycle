/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import SimpleLifeCycle from './simplelifecycle';
import FullLifeCycle from './fulllifecycle';

class sw_study_react_native_lifecycle extends Component {
  render() {
    return (
      <FullLifeCycle></FullLifeCycle>
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

AppRegistry.registerComponent('sw_study_react_native_lifecycle', () => sw_study_react_native_lifecycle);
