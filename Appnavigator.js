import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import IoIcon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome5'

const color = {
    ACTIVE: "#147ecc",
    INACTIVE: "#ccc"
}

/* import HomeStack Screens */
import Home from './screens/home/Home'

/* import DiagnoticsStack Screens */
import Animals from './screens/diagnotics/Animals'

/* import StoreStack Screens */
import Store from './screens/store/Store'

/* import SettingStack Screens */
import Setting from './screens/settings/Settings'

/*Create HomeStack */
const HomeStack = createStackNavigator({Home})
HomeStack.navigationOptions = {
    tabBarLabel: 'Trang chủ',
    tabBarIcon: ({focused}) => {
        return <IoIcon name = 'ios-home'
                size = {28}
                color = {focused ? color.ACTIVE : color.INACTIVE}
            />
    }
}

/*Create DiagnoticsStack */
const DiagnoticsStack = createStackNavigator({Animals})
DiagnoticsStack.navigationOptions = {
    tabBarLabel: 'Chẩn đoán',
    tabBarIcon: ({focused}) => {
        return <FAIcon name = 'diagnoses'
                size = {28}
                color = {focused ? color.ACTIVE : color.INACTIVE}
            />
    }
}

/*Create StoreStack */
const StoreStack = createStackNavigator({Store})
StoreStack.navigationOptions = {
    tabBarLabel: 'Cửa hàng',
    tabBarIcon: ({focused}) => {
        return <IoIcon name = 'ios-cart'
                size = {28}
                color = {focused ? color.ACTIVE : color.INACTIVE}
            />
    }
}

/* Create SettingStack */
const SettingStack = createStackNavigator({Setting})
SettingStack.navigationOptions = {
    tabBarLabel: 'Cài đặt',
    tabBarIcon: ({focused}) => {
        return <IoIcon name = 'ios-settings'
                size = {28}
                color = {focused ? color.ACTIVE : color.INACTIVE}
            />
    }
}

const AppNavigator = createBottomTabNavigator({
    HomeStack,
    DiagnoticsStack,
    StoreStack,
    SettingStack,
})

export default AppNavigator