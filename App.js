import React from 'react';
import { createAppContainer } from 'react-navigation'
import axios from 'axios'
import AppNavigator from './Appnavigator'

const AppContainer = createAppContainer(AppNavigator)

axios.defaults.baseURL='https://7c11e879.ngrok.io'

export default function Features(props) {
  return (
      <AppContainer />
  );
}