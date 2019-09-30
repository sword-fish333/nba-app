import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './src/store/reducers';
import {RootNavigator} from './src/routes';
const composeEnhancers=window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;

const createStoreWithMiddleware=createStore(reducers,composeEnhancers(applyMiddleware(promiseMiddleware)));

class App extends Component{

    render(){
        const Nav=RootNavigator();
        return (
            <Provider store={createStoreWithMiddleware}>
              <View style={styles.container}>
                <Nav/>
              </View>
            </Provider>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});

export default  App;