import React,{Component} from 'react';
import {StyleSheet,View,Text,ActivityIndicator,ScrollView,Button} from 'react-native';
import Video from 'react-native-video';
import * as Font from 'expo-font';
import {connect} from 'react-redux';
import {autoSignIn} from '../../store/actions/user_actions';
import {getTokens,setTokens} from '../../utils/misc';

import { Icon } from 'react-native-elements'
class GameArticleScreen extends Component {

    state={
        loading:false,
        isAuth:false
    }

    manageState=(loading,isAuth)=>{
        this.setState({
            loading,
            isAuth
        })

    }

    componentDidMount(){
        Font.loadAsync({
            RobotoBold: require('../../../assets/fonts/Roboto-Bold.ttf'),

        })

        const User=this.props.User;

        getTokens((value)=>{
            if(value[0][1]===null){
               this.manageState(false,false)
            }else{
                this.props.dispatch(autoSignIn(value[1][1]))
                    .then(()=>{
                    !User.auth.token ?
                        this.manageState(false,false)
                        :
                        setTokens(User.auth,()=>{
                            this.manageState(false,true)
                        })
                    })
            }
        });
    }

    render(){
        const params=this.props.navigation.getParam('game');

        if(this.state.loading){
         return   <View style={styles.loading}>
                <ActivityIndicator/>
            </View>
        }else{
         return   <ScrollView style={{backgroundColor:'#F0F0F0'}}>
                {this.state.isAuth ?

                        params.play && <Video
         source={{uri:params.play}}
         paused={true}
         muted={true}
         controls={true}
         style={{width:'100%' ,height:250}}
         />
                    :
                    <View style={styles.noAuth}>
                    <Icon name="face" size={80} color='#d5d5d5'/>
                   <Text  style={styles.noAuthText}>You need to log in/register</Text>
                        <Button title="Login/Register" onPress={()=>this.props.navigation.navigate('Auth')}/>
                    </View>

                }
            </ScrollView>
        }
    }
}

const styles = StyleSheet.create({
    loading:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    noAuth:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:50,
    },
    noAuthText:{
        fontFamily:'RobotoBold'
    }
});


mapStateToProps=state=>{

    return {
        User: state.User
    }
};
export default connect(mapStateToProps)(GameArticleScreen);