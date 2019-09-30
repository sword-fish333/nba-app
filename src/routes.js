import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//Screens
import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games';

const AppStack=createBottomTabNavigator({
    News,
    Games
});

const AuthStack=createStackNavigator({
    SignIn
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export const RootNavigator=()=>{
    return createAppContainer(createSwitchNavigator({
        Auth:AuthStack,
        App:AppStack
    },{
        initialRouteName:'Auth'
    }));
}
