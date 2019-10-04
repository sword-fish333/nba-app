import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Logo from './utils/Logo';
//Screens
import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games';
import Article from './components/news/article';
import GameArticle from './components/games/article';
import Ionicons from 'react-native-vector-icons/Ionicons';


const headerConf={
    headerLayoutPreset:'center',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#001338'
        },
        headerTintColor:'white',
        headerTitle:Logo
    }
}
const  NewsStack=createStackNavigator({
    News,
    Article,

},headerConf)

const GameStack=createStackNavigator({
    Games,
    GameArticle
},headerConf)
const AppStack=createBottomTabNavigator({
    News:NewsStack,
    Games:GameStack
},{
    tabBarOptions:{
        activeTintColor:'#fff',
        showLabel:false,
        activeBackgroundColor:'#00194b',
        inactiveBackgroundColor:'#001338',
        style:{
            inactiveBackgroundColor:'#001338',

        }
    },
    initialRouteName:'News',
    defaultNavigationOptions:({navigation})=>({
        tabBarIcon:(focused,horizontal,tintColor)=>{
        const {routeName}=navigation.state;
        let iconName;
        if(routeName==='News'){
            iconName='ios-basketball';
        }else if(routeName==='Games'){
            iconName='md-tv';

        }

        return <Ionicons   name={iconName} size={25} color='white'/>
}
    })
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
