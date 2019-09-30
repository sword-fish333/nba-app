import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
class AuthForm extends Component{
    state={
        type:'login',
        action:'Login',
        actionMode:'I want to register',
        hasErrors:false,
        form:{
            email:{
                value:'',
                valid:false,
                type:'textinput',
                rules:{
                    isRequired:true,
                    isEmail:true,
                }
            },
            password:{
                value:'',
                valid:false,
                type:'textinput',
                rules:{
                    isRequired:true,
                    minLength:6,
                }
            },
            confirmPassword:{
                value:'',
                valid:false,
                type:'textinput',
                rules:{
                    confirmPass:'password',

                }
            }
        }
    };
    render() {
        return (
            <View>
                <Text>Auth form</Text>
            </View>
        )

    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d428a',
        padding: 50,
    },
    loading:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
});


export default AuthForm;