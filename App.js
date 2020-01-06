import React from 'react';
import { createAppContainer } from 'react-navigation'
import axios from 'axios'
import AppNavigator from './Appnavigator'
import * as FileSystem from 'expo-file-system';

const AppContainer = createAppContainer(AppNavigator)
axios.defaults.baseURL='https://b8d330ec.ngrok.io'

export default function Features(props) {
  return (
      <AppContainer />
  );
}