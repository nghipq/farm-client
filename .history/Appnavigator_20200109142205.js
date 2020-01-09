import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createSwitchNavigator } from 'react-navigation'
import IoIcon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
  } from "react-native";

const color = {
    ACTIVE: "#147ecc",
    INACTIVE: "#ccc"
}

/* import AuthStack */
import SignInScreen from './screens/auth/SignInScreen'
import SignUpScreen from './screens/auth/SignUpScreen'
import WelcomeScreen from './screens/auth/WelcomeScreen'
import AuthLoadingScreen from './screens/auth/AuthLoadingScreen'

/* import HomeStack Screens */
import Home from './screens/home/Home'
import Intro from './screens/home/Intro'
import Tutorial from './screens/home/Tutorial'
import Comment from './screens/home/Comment'

/* import DiagnoticsStack Screens */
import Animals from './screens/diagnotics/Animals'
import Diagnotics from './screens/diagnotics/Diagnotics'
import CameraEx from './screens/diagnotics/CameraEx'

/* import StoreStack Screens */
import Store from './screens/store/Store'

/* import SettingStack Screens */
import Setting from './screens/settings/Settings'

/* Create AuthStack */
const AuthStackNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    
})

/*Create HomeStack */
const HomeStack = createStackNavigator({ Home, Intro, Tutorial, Comment })

HomeStack.navigationOptions = {
    tabBarLabel: 'Trang chủ',
    tabBarIcon: ({ focused }) => {
        return <IoIcon name='ios-home'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    },
    defaultNavigationOptions: {
        header: null
      }
}

/*Create DiagnoticsStack */
const DiagnoticsStack = createStackNavigator({ Animals, Diagnotics, CameraEx })
DiagnoticsStack.navigationOptions = {
    tabBarLabel: 'Chẩn đoán',
    tabBarIcon: ({ focused }) => {
        return <FAIcon name='diagnoses'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

/*Create StoreStack */
const StoreStack = createStackNavigator({ Store })
StoreStack.navigationOptions = {
    tabBarLabel: 'Cửa hàng',
    tabBarIcon: ({ focused }) => {
        return <IoIcon name='ios-cart'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

/* Create SettingStack */
const SettingStack = createStackNavigator({ Setting })
SettingStack.navigationOptions = {
    tabBarLabel: 'Cài đặt',
    tabBarIcon: ({ focused }) => {
        return <IoIcon name='ios-settings'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

const AppTabNavigator = createBottomTabNavigator({
    HomeStack,
    DiagnoticsStack,
    StoreStack,
    SettingStack,
})

const AppStackNavigator = createStackNavigator({
    AppTabNavigator: {
        screen: AppTabNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'Your App',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <IoIcon name="md-menu" size={24} />
                    </View>
                </TouchableOpacity>
            )
        })
    }
})

AppTabNavigator.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];

    // You can do whatever you like here to pick the title based on the route name
    let headerTitle = routeName;

    return {
        headerTitle,
    };
};

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator
})

const AppNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator
  })

export default AppNavigator