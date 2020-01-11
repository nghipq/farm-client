import React from 'react';
import { createAppContainer } from 'react-navigation'
import axios from 'axios'
import AppNavigator from './Appnavigator'

const AppContainer = createAppContainer(AppNavigator)

axios.defaults.baseURL='https://2b108f47.ngrok.io'

export default function Features(props) {
  console.ignoredYellowBox = ['Warning: Each'];
  return (
      <AppContainer />
  );
}